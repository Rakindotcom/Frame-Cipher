// UI/UX modernization pass for the Website Design & Development service
// section (pillar + 12 sub-services), following UI-UX-DESIGN-SYSTEM-GUIDE.md
// ("Dark Cyber-Luxury" glass system).
//
// STRICT CONTENT-ZERO-LOSS POLICY: only className strings / typography scale
// utilities are rewritten. No copy, heading text, links, data, or structure
// that carries content is modified.
//
// Usage: node scripts/modernize-webdev-ui.mjs [--check]
import fs from 'node:fs'
import path from 'node:path'

const baseDir = path.resolve('src/components/services/website-design-development')
const DRY = process.argv.includes('--check')

// ---- Exact substring replacements (run first, most specific wins) --------
const EXACT = [
  // 1. Deduplicate hybrid glass cards that still carried a brutalist border-2 prefix
  ['border-2 border-frame-border group flex flex-col justify-between rounded-3xl border', 'group flex flex-col justify-between rounded-3xl border'],
  [':0.12)] hover:bg-frame-muted/10 transition-colors', ':0.12)]'],

  // 2. Numbered badge chips: square brutalist -> rounded pill (guide Pattern B)
  ['border-2 border-frame-border px-2 py-0.5 text-[11px] font-black tracking-widest text-purple-400', 'rounded-full border border-purple-500/30 bg-purple-500/10 px-3 py-1 text-[11px] font-black tracking-widest text-purple-400'],

  // 3. Flow-chip rows (Strategy -> UI/UX -> Dev): square chips -> pills
  ['border-2 border-frame-accent bg-purple-600 px-2.5 py-0.5', 'rounded-full border border-purple-400/60 bg-purple-500/20 px-3 py-1'],
  ['border-2 border-frame-accent bg-purple-600/10 px-3.5 py-2 text-purple-400', 'rounded-full border border-purple-500/40 bg-purple-500/15 px-3.5 py-2 text-purple-300'],
  ['border border-frame-accent bg-purple-600/10 px-3.5 py-2 text-purple-400', 'rounded-full border border-purple-500/40 bg-purple-500/15 px-3.5 py-2 text-purple-300'],
  ['border border-frame-accent bg-purple-600/10 px-4 py-2 text-purple-400 shadow-sm', 'rounded-full border border-purple-500/40 bg-purple-500/15 px-4 py-2 text-purple-300 shadow-sm'],

  // 4. Legacy solid button -> guide Pattern A pill
  ['inline-flex items-center justify-center border-2 border-frame-border bg-frame-bg px-6 py-3 text-xs font-black uppercase tracking-wider text-white transition hover:border-frame-accent hover:bg-purple-600 hover:text-purple-400-fg shrink-0', 'inline-flex items-center justify-center rounded-full border border-white/15 bg-white/[0.04] px-6 py-3 text-xs font-black uppercase tracking-wider text-white transition hover:border-purple-400/50 hover:bg-white/[0.08] hover:text-white shrink-0'],

  // 5. FAQ accordion (+ toggle container) -> guide Pattern D
  ['group border-2 border-frame-border bg-frame-bg open:border-frame-accent transition-colors', 'group rounded-2xl border border-white/10 bg-white/[0.02] backdrop-blur-md open:border-purple-500/50 open:bg-white/[0.04] transition-colors'],
  ['ml-4 flex h-8 w-8 shrink-0 items-center justify-center border-2 border-frame-border text-frame-accent transition-transform', 'ml-4 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-white/15 bg-white/[0.04] text-purple-400 transition-transform'],

  // 6. Accent callout panels -> violet gradient glass banner (guide lighting)
  ['border-2 border-frame-accent/60 bg-frame-bg', 'rounded-3xl border border-purple-500/30 bg-gradient-to-r from-purple-950/30 via-white/[0.03] to-indigo-950/30 shadow-[0_16px_36px_rgba(168,85,247,0.15)]'],
  ['border-2 border-frame-accent/50 bg-purple-600/5 p-6 md:p-8', 'rounded-3xl border border-purple-500/40 bg-purple-500/[0.06] p-6 md:p-8 backdrop-blur-xl'],

  // 7. Checkmark icon squares -> rounded accent bubbles
  ['flex h-5 w-5 shrink-0 items-center justify-center border border-frame-accent', 'flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-purple-500/30 bg-purple-500/10'],
  ['flex h-4 w-4 shrink-0 items-center justify-center border border-frame-accent', 'flex h-4 w-4 shrink-0 items-center justify-center rounded-full border border-purple-500/30 bg-purple-500/10'],
]

// Heading scale rebalance: clamp strings tuned for short home-style titles
// render 4–5 lines of ~120px text for long SEO service titles. Composite
// replacement rewrites clamp + leading + tracking together.
const HEADING_RULES = [
  ['font-heading text-[clamp(2.2rem,5.8vw,4.8rem)] font-bold uppercase leading-[0.88] tracking-tighter', 'font-heading text-[clamp(2rem,4.5vw,3.4rem)] font-bold uppercase leading-[1.03] tracking-tight'],
  ['font-heading text-[clamp(2.4rem,6vw,5rem)] font-bold uppercase leading-[0.88] tracking-tighter', 'font-heading text-[clamp(2rem,4.5vw,3.4rem)] font-bold uppercase leading-[1.03] tracking-tight'],
  ['font-heading text-[clamp(2.2rem,5vw,4.2rem)] font-bold uppercase leading-[0.88] tracking-tighter', 'font-heading text-[clamp(2rem,4.5vw,3.4rem)] font-bold uppercase leading-[1.03] tracking-tight'],
  ['mt-3 font-heading text-[clamp(2.2rem,5.8vw,4.8rem)] font-bold uppercase leading-[0.88] tracking-tighter', 'mt-3 font-heading text-[clamp(2rem,4.5vw,3.4rem)] font-bold uppercase leading-[1.03] tracking-tight'],
]

// ---- Regex replacements (ordered; run after exact passes) ----------------
const PAIRS = [
  // Chip/cell that carries its own border -> rounded-2xl glass (before generics)
  [/border border-frame-border(?:\/\d+)? (bg-frame-bg|bg-frame-muted(?:\/\d+)?) (?=(?:p|px)-)/g, 'rounded-2xl border border-white/10 bg-white/[0.04] '],
  [/bg-frame-bg border border-frame-border(?:\/\d+)? /g, 'rounded-2xl border border-white/10 bg-white/[0.04] '],
  [/bg-frame-bg (p-[0-9][^" ]*) border border-frame-border(?:\/\d+)?/g, 'rounded-2xl border border-white/10 bg-white/[0.04] $1'],

  // Hairline gap-px grids -> breathing gap-6 layouts
  [/gap-px/g, 'gap-6'],
  [/bg-frame-border /g, ''],
  [/border-2 border-frame-border bg-frame-border(?="| )/g, ''],
  [/border-t-2 border-frame-border(?:\/\d+)?/g, 'border-t border-white/10'],
  [/border-y-2 border-frame-border(?:\/\d+)?/g, 'border-y border-white/10'],

  // Combined brutalist card/banners (border-2 + bg token) -> rounded-3xl glass
  [/border-2 border-frame-border (bg-frame-bg|bg-frame-muted(?:\/\d+)?) (?=")/g, 'rounded-3xl border border-white/10 bg-white/[0.04] '],
  [/border-2 border-frame-border (bg-frame-bg|bg-frame-muted(?:\/\d+)?) /g, 'rounded-3xl border border-white/10 bg-white/[0.04] '],
  [/(?<!hover:border)border-2 border-frame-border /g, 'rounded-3xl border border-white/10 '],

  // Bare flat cells (bg-frame-bg + fixed padding, no border) -> glass cells
  [/(?<!border border-white\/10 )bg-frame-bg(?= p-[0-9a-z])/g, 'rounded-2xl border border-white/10 bg-white/[0.04]'],

  // First-line accent callouts
  [/border-l-2 border-frame-accent/g, 'border-l-2 border-purple-500/60'],

  // Meter labels
  [/text-frame-border font-bold/g, 'text-white/[0.08] font-bold'],

  // Hover states
  [/hover:bg-frame-muted(?:\/\d+)?/g, 'hover:bg-white/[0.05]'],
  [/hover:border-frame-border(?:\/\d+)?/g, 'hover:border-purple-500/50'],

  // Generic token map (tokens only exist inside classNames)
  [/divide-frame-border(?:\/\d+)?/g, 'divide-white/10'],
  [/border-frame-border(?:\/\d+)?/g, 'border-white/10'],
  [/border-frame-accent(?:\/\d+)?/g, 'border-purple-500/50'],
  [/text-frame-accent/g, 'text-purple-400'],
  [/text-frame-muted\/\d+/g, 'text-white/[0.05]'],
  [/text-frame-muted-fg/g, 'text-zinc-400'],
  [/text-frame-fg/g, 'text-white'],
  [/text-frame-border/g, 'text-white/[0.08]'],
  [/bg-frame-fg/g, 'bg-white'],
  [/group-hover:text-purple-400-fg\/20/g, 'group-hover:text-purple-400/20'],
  [/hover:text-purple-400-fg/g, 'hover:text-white'],
  [/text-purple-400-fg/g, 'text-purple-200'],

  // Remaining muted card canvases -> translucent surfaces
  [/(?<!hover:)bg-frame-muted\/(\d+)/g, (_m, num) => ({ 10: 'bg-white/[0.02]', 20: 'bg-white/[0.03]', 30: 'bg-white/[0.04]', 40: 'bg-white/[0.05]' }[num] || 'bg-white/[0.03]')],
]

function listFiles(dir) {
  return fs.readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    const full = path.join(dir, entry.name)
    if (entry.isDirectory()) return listFiles(full)
    return full.endsWith('.jsx') ? [full] : []
  })
}

function countOccurrences(haystack, needle) {
  let count = 0
  let idx = haystack.indexOf(needle)
  while (idx !== -1) {
    count++
    idx = haystack.indexOf(needle, idx + needle.length)
  }
  return count
}

function applyModernization(source) {
  let out = source

  for (const [from, to] of [...EXACT, ...HEADING_RULES]) {
    out = out.split(from).join(to)
  }
  out = out.split('border-2 border-frame-border bg-frame-border').join('')

  let hits = 0
  for (const [pattern, replacement] of PAIRS) {
    if (typeof pattern === 'string') {
      const n = countOccurrences(out, pattern)
      if (n) hits += n
      out = out.split(pattern).join('')
      continue
    }
    const matches = out.match(pattern)
    if (matches) hits += matches.length
    out = out.replace(pattern, replacement)
  }

  return { out, hits }
}

const files = listFiles(baseDir)
let totalFiles = 0
let totalHits = 0
for (const file of files) {
  const src = fs.readFileSync(file, 'utf8')
  const { out, hits } = applyModernization(src)
  if (out !== src) {
    totalFiles++
    totalHits += hits
    if (!DRY) fs.writeFileSync(file, out)
    console.log(`[writing] ${path.relative(process.cwd(), file)} (${hits} replacements)`)
  }
}

console.log(`${DRY ? '[DRY RUN] ' : ''}modernize-webdev-ui: scanned ${files.length} files, changed ${totalFiles}, ${totalHits} replacements`)
