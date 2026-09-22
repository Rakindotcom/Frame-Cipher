const fs = require('fs')
const path = require('path')

const dir = path.resolve('src/components/services')
const files = fs.readdirSync(dir).filter((f) => f.endsWith('.jsx') && !fs.statSync(path.join(dir, f)).isDirectory())

const pillPattern = /hover:bg-frame-accent\b/
const textTok =
  /text-frame-(fg|muted-fg|accent-fg|accent|muted)(\/|\s|')/

let risky = 0

for (const file of files) {
  const full = path.join(dir, file)
  const lines = fs.readFileSync(full, 'utf8').split('\n')

  for (let i = 0; i < lines.length; i++) {
    const isPill = pillPattern.test(lines[i])
    if (!isPill) continue

    // collect lines until the card closes (article/a/section end)
    const block = []
    let j = i
    let closed = false
    while (j < lines.length) {
      const l = lines[j]
      block.push([j, l])
      if (
        /<\/article>|<\/a>|<\/section>|<\/Link>|\/>/.test(l) &&
        !/className=/.test(l)
      ) {
        closed = true
        j++
        break
      }
      j++
    }
    if (!closed) block.push([j - 1, lines[j - 1]])

    const unflipped = block.filter(
      ([, l]) => textTok.test(l) && !/group-hover:|hover:/ && !/transition-colors$/.test(l)
    )

    if (unflipped.length) {
      risky++
      console.log(`${file} :: hover-pill at row ${i + 1}`)
      unflipped.slice(0, 8).forEach(([ln, l]) => {
        console.log(`    row ${ln + 1}  ${l.trim().slice(0, 120)}`)
      })
    }
  }
}

console.log(`RISKY-PILL-CARDS=${risky}`)
