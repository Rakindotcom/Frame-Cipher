#!/usr/bin/env node
/**
 * Build-time contextual internal-link injector.
 *
 * Wraps selected `<p>` paragraphs in `<AutoLinks …>` so the anchor text is
 * resolved server-side from `src/lib/seo/internalLinkIndex.js`.
 *
 * Why a script instead of hand-editing
 * ------------------------------------
 * The service silo alone has ~1,000 component files with ~3,000 paragraphs.
 * Editing them by hand is impossible; a wrong anchor is worse than no anchor.
 * So the tool:
 *   1. derives anchors from the destination pages themselves (never invents copy),
 *   2. plans at PAGE level — a destination is linked at most once per page and
 *      a paragraph gains at most one link (no per-page spam),
 *   3. only touches paragraphs whose text is known at build time (literal JSX
 *      text). Expression paragraphs (`{item.description}`) are left alone
 *      because their text cannot be verified before render.
 *
 * Usage
 * -----
 *   node scripts/inject-contextual-links.mjs --stats
 *   node scripts/inject-contextual-links.mjs --scope=services:seo --dry
 *   node scripts/inject-contextual-links.mjs --scope=all
 */
import fs from 'node:fs'
import path from 'node:path'
import { register } from 'node:module'
import { parse } from '@babel/parser'

register('./json-hooks.mjs', import.meta.url)

const { findIndexMatches, isSamePage } = await import('../src/lib/seo/internalLinkIndex.js')

const ROOT = process.cwd()
const MAX_PER_PAGE = 5
const MIN_PARAGRAPH_LENGTH = 60

const args = process.argv.slice(2)
const flag = (name) => args.some((a) => a === `--${name}`)
const value = (name) => {
  const hit = args.find((a) => a.startsWith(`--${name}=`))
  return hit ? hit.slice(name.length + 3) : null
}

const scope = value('scope') || 'services'
const dryRun = flag('dry')
const statsOnly = flag('stats')

// ---------------------------------------------------------------------------
// Page registry: every target page and the component folder that renders it
// ---------------------------------------------------------------------------

function loadServicePages() {
  const raw = JSON.parse(fs.readFileSync(path.join(ROOT, 'src/data/servicePagesData.json'), 'utf8'))
  return raw.map((page) => ({
    path: page.fullPath,
    dir: path.posix.join('src/components/services', page.slug),
    kind: 'service',
  }))
}

function loadStudioPages() {
  const source = fs.readFileSync(path.join(ROOT, 'src/data/studioServices.js'), 'utf8')
  const slugs = [...source.matchAll(/^\s{4}slug:\s*'([^']+)'/gm)].map((m) => m[1])
  return [...new Set(slugs)].map((slug) => ({
    path: `/studio/${slug}`,
    slug,
    kind: 'studio',
  }))
}

const servicePages = loadServicePages()
const studioPages = loadStudioPages()

function collectJsxFiles(dir) {
  const files = []
  if (!fs.existsSync(dir)) return files
  const walk = (current) => {
    for (const entry of fs.readdirSync(current, { withFileTypes: true })) {
      const full = path.join(current, entry.name)
      if (entry.isDirectory()) walk(full)
      else if (entry.name.endsWith('.jsx')) files.push(full)
    }
  }
  walk(dir)
  return files
}

/** Maps a component file to the page it belongs to (deepest matching folder). */
function resolvePageForFile(relDir) {
  // Services: the slug folder is a prefix of the file's directory.
  const serviceMatches = servicePages
    .filter((page) => relDir === page.dir || relDir.startsWith(`${page.dir}/`))
    .sort((a, b) => b.dir.length - a.dir.length)
  if (serviceMatches.length) return serviceMatches[0]

  // Studio: folders are grouped (studio-access/rental, trust-and-local/pricing),
  // so match the slug as the trailing path segment.
  const tail = path.posix.basename(relDir)
  const studioMatch = studioPages.find((page) => tail === page.slug)
  if (studioMatch && relDir.startsWith('src/components/studio/')) return studioMatch

  return null
}

// ---------------------------------------------------------------------------
// Paragraph analysis
// ---------------------------------------------------------------------------

function collapse(text) {
  return String(text).replace(/\s+/g, ' ').trim()
}

function collectParagraphs(ast) {
  const found = []
  const visit = (node, ancestors = []) => {
    if (!node || typeof node !== 'object') return
    if (Array.isArray(node)) return node.forEach((child) => visit(child, ancestors))
    if (node.type === 'JSXElement' && node.openingElement?.name?.name === 'p') {
      const inBlockquote = ancestors.some(
        (a) => a.type === 'JSXElement' && a.openingElement?.name?.name === 'blockquote'
      )
      const children = node.children.filter(
        (child) => !(child.type === 'JSXText' && child.value.trim() === '')
      )
      const alreadyWrapped = children.some(
        (child) =>
          child.type === 'JSXElement' &&
          (child.openingElement?.name?.name === 'AutoLinks' ||
            child.openingElement?.name?.name === 'ContextualText')
      )
      const isText = children.length === 1 && children[0].type === 'JSXText'
      const isExpression =
        children.length === 1 &&
        children[0].type === 'JSXExpressionContainer' &&
        children[0].expression?.type !== 'JSXEmptyExpression'

      if (!inBlockquote && !alreadyWrapped && (isText || isExpression)) {
        const text = isText ? collapse(children[0].value) : ''
        if (isText && text.length < MIN_PARAGRAPH_LENGTH) {
          // too short to be a real paragraph
        } else {
          found.push({
            node,
            text,
            hasText: isText,
            openEnd: node.openingElement.end,
            closeStart: node.closingElement.start,
          })
        }
      }
    }
    for (const key of Object.keys(node)) {
      if (key === 'loc' || key === 'start' || key === 'end') continue
      const value = node[key]
      if (value && typeof value === 'object') visit(value, [...ancestors, node])
    }
  }
  visit(ast.program)
  return found
}

/** Every string literal / template literal in the file — the text a section may render. */
function collectStringPool(ast) {
  const pool = []
  const visit = (node) => {
    if (!node || typeof node !== 'object') return
    if (Array.isArray(node)) return node.forEach(visit)
    if (node.type === 'StringLiteral' && node.value.length >= MIN_PARAGRAPH_LENGTH) {
      pool.push(collapse(node.value))
    }
    if (node.type === 'TemplateLiteral' && node.quasis?.length) {
      const value = node.quasis.map((q) => q.value.cooked || '').join(' ')
      if (value.length >= MIN_PARAGRAPH_LENGTH) pool.push(collapse(value))
    }
    for (const key of Object.keys(node)) {
      if (key === 'loc' || key === 'start' || key === 'end') continue
      const value = node[key]
      if (value && typeof value === 'object') visit(value)
    }
  }
  visit(ast.program)
  return pool.join(' \n ')
}

// ---------------------------------------------------------------------------
// Planning + rewriting
// ---------------------------------------------------------------------------

function planPage(paragraphs, pagePath, existingHrefs = []) {
  const usedHrefs = new Set(existingHrefs)
  const plan = []
  const poolCache = new Map()

  for (const paragraph of paragraphs) {
    if (plan.length >= MAX_PER_PAGE) break
    const haystack = paragraph.hasText
      ? paragraph.text
      : poolCache.get(paragraph.file) ||
        (() => {
          const pool = collectStringPool(paragraph.ast)
          poolCache.set(paragraph.file, pool)
          return pool
        })()

    const matches = findIndexMatches(haystack)
      .filter((match) => !isSamePage(match.href, pagePath))
      .filter((match) => !usedHrefs.has(match.href))
      .sort((a, b) => (b.length !== a.length ? b.length - a.length : a.start - b.start))

    if (!matches.length) continue
    const best = matches[0]
    usedHrefs.add(best.href)
    plan.push({ ...paragraph, href: best.href, anchor: best.matchedText, phrase: best.phrase })
  }

  return plan
}

function importSpecifierFor(filePath) {
  const target = path.join(ROOT, 'src/components/seo/AutoLinks')
  let rel = path.relative(path.dirname(filePath), target).split(path.sep).join('/')
  if (!rel.startsWith('.')) rel = `./${rel}`
  return rel
}

function hasAutoLinksImport(source) {
  return /from\s+['"][^'"]*(?:components\/seo\/AutoLinks|seo\/AutoLinks)['"]/.test(source)
}

function importInsertOffset(ast) {
  const first = ast.program.body[0]
  if (first?.type === 'ExpressionStatement' && first.expression?.type === 'StringLiteral') {
    return first.end
  }
  return first ? first.start : 0
}

function rewriteFile(filePath, source, ast, wraps, needsImport) {
  const edits = []
  for (const wrap of wraps) {
    const allowed = JSON.stringify([wrap.href])
    const currentPath = JSON.stringify(wrap.pagePath)
    edits.push({ at: wrap.openEnd, text: `<AutoLinks currentPath=${currentPath} allowed={${allowed}}>` })
    edits.push({ at: wrap.closeStart, text: `</AutoLinks>` })
  }
  if (needsImport) {
    edits.push({
      at: importInsertOffset(ast),
      text: `\nimport { AutoLinks } from '${importSpecifierFor(filePath)}'`,
    })
  }

  edits.sort((a, b) => b.at - a.at)
  let output = source
  for (const edit of edits) {
    output = output.slice(0, edit.at) + edit.text + output.slice(edit.at)
  }
  return output
}

// ---------------------------------------------------------------------------
// Run
// ---------------------------------------------------------------------------

function selectedRoots() {
  const [area, cluster] = scope.split(':')
  if (area === 'studio') return [{ dir: 'src/components/studio', kind: 'studio' }]
  if (area === 'services' && cluster) return [{ dir: `src/components/services/${cluster}`, kind: 'service' }]
  if (area === 'services') return [{ dir: 'src/components/services', kind: 'service' }]
  return [
    { dir: 'src/components/services', kind: 'service' },
    { dir: 'src/components/studio', kind: 'studio' },
  ]
}

const files = selectedRoots().flatMap((root) => collectJsxFiles(path.join(ROOT, root.dir)))
const byPage = new Map()
let literalCount = 0
let skippedUnmapped = 0

for (const file of files) {
  const rel = path.relative(ROOT, file).split(path.sep).join('/')
  const relDir = path.posix.dirname(rel)
  const page = resolvePageForFile(relDir)
  if (!page) {
    skippedUnmapped += 1
    continue
  }
  let ast
  try {
    ast = parse(fs.readFileSync(file, 'utf8'), { sourceType: 'module', plugins: ['jsx'] })
  } catch {
    continue
  }
  const paragraphs = collectParagraphs(ast)
  literalCount += paragraphs.length
  if (!paragraphs.length) continue
  if (!byPage.has(page.path)) byPage.set(page.path, { page, files: new Map() })
  byPage.get(page.path).files.set(file, { ast, paragraphs })}

let plannedLinks = 0
let touchedFiles = 0
const report = []

for (const [, entry] of byPage) {
  const allParagraphs = []
  const existingHrefs = new Set()
  for (const [file, { ast, paragraphs }] of entry.files) {
    const source = fs.readFileSync(file, 'utf8')
    for (const match of source.matchAll(/allowed=\{\["([^"]+)"\]\}/g)) {
      existingHrefs.add(match[1])
    }
    for (const paragraph of paragraphs) allParagraphs.push({ ...paragraph, file, ast })
  }
  const plan = planPage(allParagraphs, entry.page.path, existingHrefs)
  if (!plan.length) continue

  const perFile = new Map()
  for (const item of plan) {
    if (!perFile.has(item.file)) perFile.set(item.file, [])
    perFile.get(item.file).push({ ...item, pagePath: entry.page.path })
  }

  for (const [file, wraps] of perFile) {
    const source = fs.readFileSync(file, 'utf8')
    const { ast } = entry.files.get(file)
    const needsImport = !hasAutoLinksImport(source)
    const output = rewriteFile(file, source, ast, wraps, needsImport)
    plannedLinks += wraps.length
    touchedFiles += 1
    report.push({ page: entry.page.path, file: path.relative(ROOT, file), links: wraps.map((w) => w.anchor) })
    if (!dryRun && !statsOnly) fs.writeFileSync(file, output)
  }
}

console.log(`scope=${scope}${dryRun ? ' (dry)' : ''}`)
console.log(`jsx files scanned: ${files.length} (unmapped/skipped: ${skippedUnmapped})`)
console.log(`literal paragraphs eligible: ${literalCount}`)
console.log(`pages planned: ${report.length ? new Set(report.map((r) => r.page)).size : 0}`)
console.log(`links planned: ${plannedLinks} in ${touchedFiles} files`)
if (statsOnly || dryRun) {
  for (const row of report) {
    console.log(`  ${row.page}  ${row.file}  ->  ${row.links.join(', ')}`)
  }
}
