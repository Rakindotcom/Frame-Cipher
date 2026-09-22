const fs = require('fs')
const path = require('path')

const dir = path.resolve('src/components/services')
const files = fs.readdirSync(dir).filter((f) => f.endsWith('.jsx'))

const HOVER_FILL = /hover:bg-frame-accent\b/
const FLIP = /group-hover:(text|bg)-frame-accent-fg/

for (const file of files) {
  const full = path.join(dir, file)
  const lines = fs.readFileSync(full, 'utf8').split('\n')

  for (let i = 0; i < lines.length; i++) {
    if (!HOVER_FILL.test(lines[i])) continue

    // find end of this element block: next line that closes article/a/section
    let end = lines.length - 1
    for (let j = i + 1; j < lines.length; j++) {
      if (/<\/article>|<\/a>|<\/section>|<\/Link>/.test(lines[j])) {
        end = j
        break
      }
    }

    const block = lines.slice(i, end + 1)
    const unflipped = []
    block.forEach((l, idx) => {
      const hasTextColor = /text-frame-(fg|muted-fg|accent\b|accent-fg)/.test(l)
      const flips = FLIP.test(l)
      const isDebris = /aria-hidden|decor|^\s*\/\//.test(l)
      if (hasTextColor && !flips && !isDebris) {
        unflipped.push(`     L${i + idx + 1}: ${l.trim().slice(0, 120)}`)
      }
    })

    if (unflipped.length) {
      console.log(`\n[${file}] hover-fill at L${i + 1}`)
      console.log(unflipped.join('\n'))
    }
  }
}
console.log('\nAUDIT-DONE')
