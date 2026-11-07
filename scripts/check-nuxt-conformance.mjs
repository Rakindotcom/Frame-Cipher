import fs from 'fs';
import path from 'path';

const dir = 'src/components/home';
const files = fs.readdirSync(dir).filter(f => f.endsWith('.jsx'));

console.log('Auditing Nuxt typography & colors across home components...');

for (const f of files) {
  const content = fs.readFileSync(path.join(dir, f), 'utf8');
  
  // 1. Headings with hover color or not font-semibold
  const hMatches = content.match(/<h[1-4][^>]*>/gi) || [];
  for (const h of hMatches) {
    if (h.includes('group-hover:text-frame-accent') || h.includes('hover:text-frame-accent')) {
      console.log(`[HEADING HOVER COLOR] ${f}: ${h}`);
    }
    if (h.includes('font-medium') && !h.includes('HomeHero')) {
      console.log(`[HEADING FONT-MEDIUM INSTEAD OF SEMIBOLD] ${f}: ${h}`);
    }
  }

  // 2. Check for text-zinc-300/400 in paragraphs
  const pMatches = content.match(/<p[^>]*className="[^"]*text-zinc-[34]00[^"]*"[^>]*>/gi) || [];
  for (const p of pMatches) {
    console.log(`[P WITH RAW ZINC COLOR] ${f}: ${p}`);
  }
}
