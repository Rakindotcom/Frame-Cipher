import fs from 'fs';
import path from 'path';

const dirs = [
  'src/components/home',
  'src/components/about',
  'src/components/contact',
  'src/components/case-studies',
  'src/components/projects',
  'src/components/services',
  'src/components/studio',
  'src/views'
];

let totalFiles = 0;
const results = [];

for (const dir of dirs) {
  const files = fs.readdirSync(dir).filter(f => f.endsWith('.jsx'));
  totalFiles += files.length;

  for (const f of files) {
    const content = fs.readFileSync(path.join(dir, f), 'utf8');
    
    // 1. Check all h2, h3, h4 tags and their full inner contents
    const hMatches = content.match(/<h[2-4][\s\S]*?<\/h[2-4]>/gi) || [];
    for (const h of hMatches) {
      if (h.includes('text-purple') || h.includes('text-violet') || h.includes('italic') || h.includes('gradient') || h.includes('group-hover:text-') || h.includes('text-frame-accent')) {
        results.push(`[HEADING VIOLATION] in ${dir}/${f}: ${h.replace(/\s+/g, ' ')}`);
      }
      const openTag = h.match(/<h[2-4][^>]*>/i)?.[0] || '';
      if (!openTag.includes('text-highlighted') && !openTag.includes('text-white') && !openTag.includes('text-frame-fg') && !openTag.includes('text-zinc-100')) {
        results.push(`[HEADING NOT WHITE] in ${dir}/${f}: ${openTag}`);
      }
    }
  }
}

console.log('Audited files total:', totalFiles);
if (results.length === 0) {
  console.log('SUCCESS: ALL ROOT PAGES, VIEWS, PROJECTS, SERVICES, AND STUDIO PASS 100%! Headings are solid white, zero italics/colored words.');
} else {
  console.log('Found violations:');
  results.forEach(r => console.log(r));
}
