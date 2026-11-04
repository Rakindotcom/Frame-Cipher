import { existsSync, readFileSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import ts from 'typescript'

/**
 * Lets plain `node --test` import app modules directly.
 * Handles extensionless imports, .json imports, and transpiles .ts / .tsx / .jsx on the fly.
 */
const CANDIDATE_SUFFIXES = ['.js', '.jsx', '.ts', '.tsx', '.json', '/index.js', '/index.jsx', '/index.ts']

export async function resolve(specifier, context, nextResolve) {
  if (specifier.startsWith('.') && !/\.[a-z0-9]+$/i.test(specifier)) {
    for (const suffix of CANDIDATE_SUFFIXES) {
      const candidate = new URL(`${specifier}${suffix}`, context.parentURL)
      if (existsSync(fileURLToPath(candidate))) {
        return nextResolve(candidate.href, context)
      }
    }
  }

  if (specifier.startsWith('@/')) {
    const relativePath = specifier.replace(/^@\//, './src/')
    const base = new URL('../../', import.meta.url)
    for (const suffix of ['', ...CANDIDATE_SUFFIXES]) {
      const candidate = new URL(`${relativePath}${suffix}`, base)
      if (existsSync(fileURLToPath(candidate))) {
        return nextResolve(candidate.href, context)
      }
    }
  }

  if (specifier === 'next/link') {
    return nextResolve('next/link.js', context)
  }

  return nextResolve(specifier, context)
}

export async function load(url, context, nextLoad) {
  if (url.endsWith('.json')) {
    const source = readFileSync(fileURLToPath(url), 'utf8')
    return {
      format: 'module',
      shortCircuit: true,
      source: `export default ${source}`,
    }
  }

  if (url.endsWith('.ts') || url.endsWith('.tsx') || url.endsWith('.jsx')) {
    const source = readFileSync(fileURLToPath(url), 'utf8')
    const compiled = ts.transpileModule(source, {
      compilerOptions: {
        module: ts.ModuleKind.ESNext,
        target: ts.ScriptTarget.ES2022,
        jsx: ts.JsxEmit.ReactJSX,
      },
    }).outputText
    return {
      format: 'module',
      shortCircuit: true,
      source: compiled,
    }
  }

  return nextLoad(url, context)
}
