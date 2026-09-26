import fs from 'node:fs';
import path from 'node:path';

const APP_DIR = path.join(process.cwd(), '.next/server/app');

function walkHtml(dir) {
  let files = [];
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const e of entries) {
    const full = path.join(dir, e.name);
    if (e.isDirectory()) {
      files = files.concat(walkHtml(full));
    } else if (e.isFile() && e.name.endsWith('.html') && !e.name.startsWith('_')) {
      files.push(full);
    }
  }
  return files;
}

const htmlFiles = walkHtml(APP_DIR);

function getRouteFromPath(filePath) {
  const rel = path.relative(APP_DIR, filePath).replace(/\\/g, '/');
  if (rel === 'index.html') return '/';
  return '/' + rel.replace(/\.html$/, '').replace(/\/index$/, '');
}

const allPages = new Map();
htmlFiles.forEach(f => {
  const route = getRouteFromPath(f);
  allPages.set(route, { filePath: f, outbounds: new Set(), inbounds: new Set() });
});

const HREF_REGEX = /<a\s+[^>]*?href=["'](\/[^"']*?)["']/gi;

for (const [route, data] of allPages) {
  const html = fs.readFileSync(data.filePath, 'utf8');
  let match;
  while ((match = HREF_REGEX.exec(html)) !== null) {
    const rawTarget = match[1];
    if (rawTarget.startsWith('//') || rawTarget.startsWith('/api') || rawTarget.startsWith('/_next') || rawTarget.startsWith('/admin')) continue;
    const clean = rawTarget.split('?')[0].split('#')[0].replace(/\/$/, '') || '/';
    data.outbounds.add(clean);
  }
}

// Map inbounds
for (const [sourceRoute, data] of allPages) {
  for (const target of data.outbounds) {
    if (allPages.has(target)) {
      allPages.get(target).inbounds.add(sourceRoute);
    }
  }
}

// Analyze
const orphans = [];
const lowInbound = [];
const goodInbound = [];

for (const [route, data] of allPages) {
  const inCount = data.inbounds.size;
  const outCount = data.outbounds.size;
  const stat = { route, inCount, outCount, inbounds: Array.from(data.inbounds) };
  if (inCount === 0) {
    orphans.push(stat);
  } else if (inCount < 5) {
    lowInbound.push(stat);
  } else {
    goodInbound.push(stat);
  }
}

console.log('=== REAL RENDERED HTML INTERNAL LINKING AUDIT ===');
console.log(`Total Prerendered HTML Pages: ${allPages.size}`);
console.log(`True Orphan Pages (0 inbound links): ${orphans.length}`);
console.log(`Pages with 1 to 4 inbound links: ${lowInbound.length}`);
console.log(`Pages with 5+ inbound links: ${goodInbound.length}`);

if (orphans.length > 0) {
  console.log('\n--- TRUE ORPHANS (CRITICAL SEO ISSUE) ---');
  orphans.forEach(o => console.log(`[ORPHAN] ${o.route} (Outbounds: ${o.outCount})`));
} else {
  console.log('\n✅ NO TRUE ORPHANS! Every single page has at least 1 inbound link.');
}

console.log('\n--- LOW INBOUND PAGES (1 - 4 INBOUNDS) ---');
lowInbound.sort((a,b) => a.inCount - b.inCount).slice(0, 30).forEach(l => {
  console.log(`${l.inCount} inbounds (${l.outCount} outbounds): ${l.route}`);
});

console.log('\n--- TOP INBOUND PAGES (HIGHEST LINK EQUITY) ---');
goodInbound.sort((a,b) => b.inCount - a.inCount).slice(0, 15).forEach(g => {
  console.log(`${g.inCount} inbounds (${g.outCount} outbounds): ${g.route}`);
});
