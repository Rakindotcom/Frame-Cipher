import { existsSync } from 'node:fs'
import { readFileSync } from 'node:fs'
import { fileURLToPath } from 'node:url'

/**
 * Lets plain `node --test` import app modules directly.
 *
 * App source uses bundler-style specifiers that bare Node ESM rejects:
 *   - extensionless relative imports  ("./serviceContent")
 *   - .json imports without an attribute ("./servicePagesData.json")
 *
 * Both are resolved here so the suites can exercise the real modules instead
 * of duplicating their logic.
 */
const CANDIDATE_SUFFIXES = ['.js', '.json', '/index.js']

export async function resolve(specifier, context, nextResolve) {
  if (specifier.startsWith('.') && !/\.[a-z]+$/i.test(specifier)) {
    const target = new URL(specifier, context.parentURL)

    for (const suffix of CANDIDATE_SUFFIXES) {
      const candidate = new URL(`${specifier}${suffix}`, context.parentURL)
      if (existsSync(fileURLToPath(candidate))) {
        return nextResolve(candidate.href, context)
      }
    }

    return nextResolve(target.href, context)
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

  return nextLoad(url, context)
}
