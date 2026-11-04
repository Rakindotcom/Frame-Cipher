// One-shot encoding repair for files rewritten by PowerShell with a cp1252
// mis-decode pass. Restores the exact original glyphs and strips BOMs.
// Safe: replacements only match the corrupted multi-char sequences.
import fs from 'node:fs'
import path from 'node:path'

const baseDir = path.resolve('src/components/services/website-design-development')

const REPAIR = [
  ['\u00e2\u0153\u201c', '\u2713'], // âœ“ -> ✓
  ['\u00e2\u0153\u2014', '\u2717'], // âœ- -> ✗
  ['\u00e2\u20ac\u00a2', '\u2022'], // â€¢ -> •
  ['\u00e2\u20ac\u201c', '\u2013'], // â€“ -> –
  ['\u00e2\u20ac\u201d', '\u2014'], // â€" -> —
  ['\u00e2\u20ac\u0153', '\u201c'], // â€œ -> “
  ['\u00e2\u20ac\u2122', '\u2019'], // â€™ -> ’
  ['\u00e2\u20ac\u00a6', '\u2026'], // â€¦ -> …
  ['\u00e2\u20ac\u009d', '\u201d'], // â€<ctrl> -> ”
  ['\u00e0\u00a7\u00b3', '\u09f3'], // à§³ -> ৳
]

function listFiles(dir) {
  return fs.readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    const full = path.join(dir, entry.name)
    if (entry.isDirectory()) return listFiles(full)
    return full.endsWith('.jsx') ? [full] : []
  })
}

const files = listFiles(baseDir)
let repaired = 0
for (const file of files) {
  let text = fs.readFileSync(file, 'utf8')
  const before = text
  if (text.charCodeAt(0) === 0xfeff) text = text.slice(1)
  for (const [from, to] of REPAIR) text = text.split(from).join(to)
  if (text !== before) {
    fs.writeFileSync(file, text, 'utf8')
    repaired++
    console.log('[repaired]', path.relative(baseDir, file))
  }
}
console.log(`fix-encoding: repaired ${repaired} files`)
