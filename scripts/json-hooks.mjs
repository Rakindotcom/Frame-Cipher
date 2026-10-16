/**
 * Node module hooks used by the repo's build-time scripts so they can import
 * application modules that rely on Next-specific resolution:
 *   - `.json` imports without import attributes (webpack handles this in Next)
 *   - extensionless relative imports (e.g. `./serviceContent`)
 *
 * Used via `register('./json-hooks.mjs', import.meta.url)` from a script.
 */
import { readFileSync } from 'node:fs'
import { fileURLToPath } from 'node:url'

export async function resolve(specifier, context, nextResolve) {
  try {
    return await nextResolve(specifier, context)
  } catch (error) {
    if (specifier.startsWith('.') || specifier.startsWith('/')) {
      for (const suffix of ['.js', '/index.js', '.json']) {
        try {
          return await nextResolve(specifier + suffix, context)
        } catch {
          /* try next suffix */
        }
      }
    }
    throw error
  }
}

export async function load(url, context, nextLoad) {
  if (url.endsWith('.json')) {
    const source = readFileSync(fileURLToPath(url), 'utf8')
    return { format: 'module', shortCircuit: true, source: `export default ${source}` }
  }
  return nextLoad(url, context)
}
