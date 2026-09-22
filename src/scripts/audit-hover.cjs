const fs = require('fs')
const path = require('path')

const dir = path.resolve('src/components/services')
const files = fs
  .readdirSync(dir)
  .filter((f) => f.endsWith('.jsx'))
  .sort()

let total = 0

for (const file of files) {
  const lines = fs.readFileSync(path.join(dir, file), 'utf8').split('\n')
  let openStart = -1
  const cards = []

  for (let i = 0; i < lines.length; i++) {
    const t = lines[i]
    if (/hover:bg-frame-accent\b/.test(t) && openStart === -1) openStart = i
    if (openStart !== -1 && /<\/article>|<\/a>|<\/section>/.test(t)) {
      cards.push([openStart, i])
      openStart = -1
    }
  }

  for (const [st, en] of cards) {
    const block = lines.slice(st, en + 1)
    const blockText = block.join('\n')
    const hasFlip = /group-hover:text-frame-accent-fg/.test(blockText)
    if (!hasFlip) {
      total++
      console.log(`NO-FLIP ${file} rows ${st + 1}-${en + 1}`)
      block.forEach((l, idx) => {
        if (/text-frame-(fg|muted-fg|accent\b)/.test(l)) {
          console.log(`    ${st + idx + 1}: ${l.trim().slice(0, 130)}`)
        }
      })
      continue
    }

    // check inner elements lacking the group-hover text flip
    const inner = []
    block.forEach((l, idx) => {
      if (
        /text-frame-(fg|muted-fg|accent\b|accent-fg|muted\b)(\/|\s|$|')/.test(l) &&
        !/group-hover:text-frame-accent-fg/.test(l) &&
        !/aria-hidden/.test(l)
      ) {
        inner.push(`    ${st + idx + 1}: ${l.trim().slice(0, 130)}`)
      }
    })
    if (inner.length) {
      total++
      console.log(`PARTIAL ${file} rows ${st + 1}-${en + 1}`)
      console.log(inner.join('\n'))
    }
  }
}

console.log(`TOTAL-CARDS-WITH-ISSUES=${total}`)
