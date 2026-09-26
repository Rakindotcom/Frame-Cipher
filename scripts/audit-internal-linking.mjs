import fs from 'node:fs';
import path from 'node:path';

const ROOT = process.cwd();

// 1. Gather all actual registered routes
const serviceData = JSON.parse(fs.readFileSync(path.join(ROOT, 'src/data/servicePagesData.json'), 'utf8'));
const growthWork = fs.readFileSync(path.join(ROOT, 'src/data/growthWork.js'), 'utf8');
const canonicalPosts = fs.readFileSync(path.join(ROOT, 'src/lib/blog/canonicalPosts.ts'), 'utf8');

const allExpectedRoutes = new Map();

// Standard static pages
const staticPages = [
  '/',
  '/about',
  '/contact',
  '/services',
  '/case-studies',
  '/blog',
  '/privacy',
  '/terms',
  '/projects',
  '/admin',
];
staticPages.forEach(p => allExpectedRoutes.set(p, { type: 'static', title: p }));

// Service routes
serviceData.forEach(item => {
  if (item.fullPath) {
    const clean = item.fullPath.replace(/\/$/, '');
    allExpectedRoutes.set(clean, {
      type: item.pillarParent ? 'sub-service' : 'pillar',
      title: item.seoTitle || item.name || item.slug,
      pillarSlug: item.pillarSlug,
      fullPath: clean
    });
  }
});

// Case studies
const caseStudyRegex = /slug:\s*['"]([^'"]+)['"]/g;
let csMatch;
while ((csMatch = caseStudyRegex.exec(growthWork)) !== null) {
  const route = `/case-studies/${csMatch[1]}`;
  allExpectedRoutes.set(route, { type: 'case-study', title: csMatch[1] });
}

// Blog posts
const blogRegex = /slug:\s*['"]([^'"]+)['"]/g;
let bMatch;
while ((bMatch = blogRegex.exec(canonicalPosts)) !== null) {
  const route = `/blog/${bMatch[1]}`;
  allExpectedRoutes.set(route, { type: 'blog-post', title: bMatch[1] });
}

// 2. Scan all files in app/ and src/ for internal hrefs
const SCAN_EXTS = new Set(['.js', '.jsx', '.ts', '.tsx', '.mjs', '.json']);
const IGNORED = new Set(['node_modules', '.next', '.git', 'dist', 'out']);

function walk(dir) {
  let files = [];
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const e of entries) {
    if (IGNORED.has(e.name)) continue;
    const full = path.join(dir, e.name);
    if (e.isDirectory()) {
      files = files.concat(walk(full));
    } else if (SCAN_EXTS.has(path.extname(e.name))) {
      files.push(full);
    }
  }
  return files;
}

const allFiles = [...walk(path.join(ROOT, 'app')), ...walk(path.join(ROOT, 'src'))];

const HREF_PATTERN = /href\s*=\s*(?:"([^"]+)"|'([^']+)'|\{\s*["'`]([^"'`]+)["'`]\s*\})/g;
const ROUTER_PATTERN = /router\.(?:push|replace)\(\s*["'`]([^"'`]+)["'`]\s*\)/g;
const LINK_PROP_PATTERN = /url\s*:\s*["'](\/[^"']+)["']/g;
const PATH_PROP_PATTERN = /path\s*:\s*["'](\/[^"']+)["']/g;

const inboundLinks = new Map();
allExpectedRoutes.forEach((_, route) => inboundLinks.set(route, new Set()));

const brokenLinks = [];

for (const filePath of allFiles) {
  // skip test files or audits
  if (filePath.includes('test') || filePath.includes('audit-internal-linking') || filePath.includes('linkAudit')) continue;

  const content = fs.readFileSync(filePath, 'utf8');
  const relPath = path.relative(ROOT, filePath).replace(/\\/g, '/');

  const matches = [];
  for (const regex of [HREF_PATTERN, ROUTER_PATTERN, LINK_PROP_PATTERN, PATH_PROP_PATTERN]) {
    regex.lastIndex = 0;
    let m;
    while ((m = regex.exec(content)) !== null) {
      const target = m[1] || m[2] || m[3];
      if (target && target.startsWith('/') && !target.startsWith('//') && !target.startsWith('/api') && !target.startsWith('/_next')) {
        const clean = target.split('?')[0].split('#')[0].replace(/\/$/, '') || '/';
        matches.push(clean);
      }
    }
  }

  for (const target of matches) {
    if (allExpectedRoutes.has(target)) {
      if (!inboundLinks.has(target)) inboundLinks.set(target, new Set());
      inboundLinks.get(target).add(relPath);
    } else {
      // check if it's dynamic like /blog/category/ or /authors/
      if (!target.startsWith('/authors') && !target.startsWith('/blog/category') && !target.startsWith('/admin') && target !== '/logo.png') {
        brokenLinks.push({ from: relPath, to: target });
      }
    }
  }
}

// 3. Summarize findings
const routesReport = [];
let orphanCount = 0;
let lowEquityCount = 0;

allExpectedRoutes.forEach((meta, route) => {
  const sources = inboundLinks.get(route) || new Set();
  const count = sources.size;
  if (count === 0) orphanCount++;
  if (count > 0 && count < 3) lowEquityCount++;

  routesReport.push({
    route,
    type: meta.type,
    title: meta.title,
    inboundCount: count,
    linkingFiles: Array.from(sources),
  });
});

routesReport.sort((a, b) => a.inboundCount - b.inboundCount);

console.log('=== INTERNAL LINKING AUDIT REPORT ===');
console.log(`Total Scanned Routes: ${allExpectedRoutes.size}`);
console.log(`Orphan Routes (0 inbounds): ${orphanCount}`);
console.log(`Low Equity Routes (1-2 inbounds): ${lowEquityCount}`);
console.log(`Potential Broken Links Found: ${brokenLinks.length}`);

console.log('\n--- ORPHAN ROUTES (0 INBOUND LINKS) ---');
const orphans = routesReport.filter(r => r.inboundCount === 0);
orphans.slice(0, 30).forEach(r => {
  console.log(`[ORPHAN] ${r.route} (${r.type})`);
});

console.log('\n--- LOWEST INBOUND ROUTES ---');
routesReport.slice(0, 20).forEach(r => {
  console.log(`${r.inboundCount} links: ${r.route} (${r.type})`);
});

console.log('\n--- TOP INBOUND ROUTES ---');
routesReport.slice(-10).reverse().forEach(r => {
  console.log(`${r.inboundCount} links: ${r.route}`);
});

if (brokenLinks.length > 0) {
  console.log('\n--- POTENTIAL BROKEN LINKS ---');
  brokenLinks.slice(0, 20).forEach(b => console.log(`${b.from} -> ${b.to}`));
}
