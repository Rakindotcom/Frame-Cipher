const fs = require('fs')
const path = require('path')

const dir = 'src/components/services'
const files = fs.readdirSync(dir).filter((f) => f.endsWith('.jsx'))

for (const file of files) {
  const full = path.join(dir, file)
  const lines = fs.readFileSync(full, 'utf8').split('\n')

  // Track open "card" elements: article with a group + bg that flips to accent on hover
  let openStart = -1
  const cards = []
  for (let i = 0; i < lines.length; i++) {
    const t = lines[i]
    if (/hover:bg-frame-accent\b/.test(t) && openStart === -1) openStart = i
    const isClose = /<\/article>/.test(t)
    if (openStart !== -1 && isClose) {
      cards.push([openStart, i])
      openStart = -1
    }
  }

  for (const [st, en] of cards) {
    const block = lines.slice(st, en + 1)
    // Lines that set a foreground color but have NO group-hover/text frame-accent-fg flip,
    // i.e. these will stay light on a white card.
    const unflipped = []
    block.forEach((l, idx) => {
      const lineNo = st + idx + 1
      const hasColor = /text-frame-(fg|muted-fg|accent\b|muted\b)($|\s|')/.test(l)
      const hasFlip =
        /group-hover:text-frame-accent-fg/.test(l) || /group-hover:text-frame-accent-fg\//.test(l)
      const inGroupFirst = /^ {2}className=/.test(l.trimStart()) // card container className itself
      if (hasColor && !hasFlip && !inGroupFirst) {
        unflipped.push({ lineNo, text: l.trim().slice(0, 90) })
      }
    })
    const hasFlip = block.some((l) => /group-hover:text-frame-accent-fg/.test(l))
    console.log(`${file} :: card lines ${st + 1}-${en + 1} :: flips=${hasFlip}`)
    if (unflipped.length) {
      unflipped.forEach((u) => console.log(`    line ${u.lineNo}: ${u.text}`))
    }
  }
}
