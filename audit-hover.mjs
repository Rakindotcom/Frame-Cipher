const fs = require('fs')
const path = require('path')

const dir = path.resolve('src/components/services')
const files = fs.readdirSync(dir).filter((f) => f.endsWith('.jsx'))

function audit(file) {
  const full = path.join(dir, file)
  const lines = fs.readFileSync(full, 'utf8').split('\n')
  const issues = []

  for (let i = 0; i < lines.length; i++) {
    if (!/hover:bg-frame-accent\b/.test(lines[i])) continue

    // walk forward to the closing tag of this card
    const openDepth = { article: 0, section: 0 }
    const end = (() => {
      for (let j = i + 1; j < lines.length; j++) {
        const t = lines[j]
        if (/<article/.test(t)) openDepth.article++
        if (/<\/article>/.test(t)) {
          openDepth.article--
          if (openDepth.article < 0) return j
        }
      }
      return lines.length - 1
    })()

    const block = lines.slice(i, end + 1)
    const noFlip = []
    block.forEach((l, idx) => {
      if (
        /text-frame-(fg|muted-fg|accent\b|accent-fg|muted\b|muted-fg\/)/.test(l) &&
        !/hover:bg-frame-accent-fg/.test(l) &&
        !/text-frame-accent-fg/.test(l) &&
        !/hover:/ .test(l)
      ) {
        noFlip.push(`${i + idx + 1}: ${l.trim().slice(0, 110)}`)
      }
    })

    if (noFlip.length) {
      issues.push({ rows: `${i + 1}-${end + 1}`, noFlip })
    }
  }
  return issues
}

let total = 0
for (const f of files) {
  const issues = audit(f)
  if (!issues.length) continue
  console.log(`### ${f}`)
  for (const iss of issues) {
    total++
    console.log(`  rows ${iss.rows}`)
    iss.noFlip.forEach((l) => console.log('    ' + l))
  }
}
console.log('TOTAL-CARDS-WITH-NOFLIP=' + total)
