import fs from 'node:fs'

const data = JSON.parse(fs.readFileSync('./src/data/servicePagesData.json', 'utf8'))
console.log('Total services in JSON:', data.length)
const slugs = data.map((d, i) => ({
  index: i + 1,
  slug: d.slug,
  title: d.sheetTitle,
  pageType: d.pageType,
  pillarSlug: d.pillarSlug,
}))
fs.writeFileSync('./scripts/services-list.json', JSON.stringify(slugs, null, 2))
console.log('Saved to ./scripts/services-list.json')
