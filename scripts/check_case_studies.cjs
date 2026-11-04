const path = require('path');
const { growthCaseStudies, growthPortfolio } = require(path.join(process.cwd(), 'src/data/growthWork.js'));

console.log('--- growthCaseStudies (' + growthCaseStudies.length + ') ---');
growthCaseStudies.forEach((c, i) => {
  console.log(`${i+1}. [${c.category}] slug: ${c.slug} | title: ${c.title} | client: ${c.client} | tags: ${(c.tags || []).join(', ')}`);
});

console.log('\n--- growthPortfolio (' + growthPortfolio.length + ') ---');
growthPortfolio.forEach((p, i) => {
  console.log(`${i+1}. [${p.category}] slug: ${p.slug} | title: ${p.title} | client: ${p.client} | tags: ${(p.tags || []).join(', ')}`);
});
