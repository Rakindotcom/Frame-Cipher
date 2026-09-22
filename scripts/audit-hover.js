const fs = require('fs')
const path = require('path')

const dir = path.resolve('src/components/services')
const files = fs.readdirSync(dir).filter((f) => f.endsWith('.jsx'))

function flipReport(file) {
  const full = path.join(dir, file)
  const lines = fs.readFileSync(full, 'utf8').split('\n')

  const cards = []
  let start = -1
  for (let i = 0; i < lines.length; i++) {
    const t = lines[i]
    if (start === -1 && /\b(group|article|a|PosterButton|PosterLink)\b/.test(t) && /hover:bg-frame-accent\b/.test(t)) {
      // a card that flips to accent on hover
      start = i
    }
    const closes = /<\/article>|<\/a>|<\/Link>|\/>/.test(t)
    if (start !== -1 && closes) {
      cards.push([start, i])
      start = -1
    }
  }
  // fallback: any card that flips but didn't close cleanly
  if (start !== -1) cards.push([start, lines.length - 1])

  const issues = []
  for (const [st, en] of cards) {
    const block = lines.slice(st, en + 1)
    const flipName = /group-hover:text-frame-accent-fg/.test(block.join('\n'))
      ? 'FLIPS'
      : 'NO-FLIP'
    // lines inside the card that define a foreground that never changes on hover
    const noHover = []
    block.forEach((l, i) => {
      const lineNo = st + i + 1
      // text classes that are static (no group-hover / hover variant)
      if (
        /text-frame-(fg|muted-fg|accent\b|accent-fg|muted\b)/.test(l) &&
        !/group-hover:|hover:/.test(l)
      ) {
        noHover.push(`${lineNo}: ${l.trim().slice(0, 100)}`)
      }
    })

    if (flipName === 'NO-FLIP') {
      issues.push({ file, rows: `${st + 1}-${en + 1}`, flip: flipName, details: noHover.slice(0, 8) })
    }
  }
  return issues
}

let total = 0
for (const f of files) {
  const issues = flipReport(f)
  for (const i of issues) {
    total++
    console.log(`${i.file} [${i.rows}] ${i.flip}`)
    i.details.forEach((d) => console.log('   ' + d))
  }
}
console.log(`TOTAL-ISSUES=${total}`)
