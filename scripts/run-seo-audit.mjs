import http from 'http';

const testUrls = [
  '/',
  '/about',
  '/services',
  '/services/360-marketing',
  '/services/paid-advertising',
  '/services/paid-advertising/meta-ads',
  '/services/paid-advertising/google-ads',
  '/services/website-design-development',
  '/services/seo',
  '/calculators',
  '/calculators/google-ads',
  '/calculators/meta-ads',
  '/calculators/amazon-ads',
  '/case-studies',
  '/blog',
  '/authors',
  '/contact',
  '/privacy',
  '/terms',
];

function auditPage(urlPath) {
  return new Promise((resolve) => {
    http.get(`http://localhost:3000${urlPath}`, (res) => {
      let html = '';
      res.on('data', chunk => html += chunk);
      res.on('end', () => {
        const issues = [];
        
        // 1. Check <title>
        const titleMatch = html.match(/<title>([^<]*)<\/title>/i);
        const title = titleMatch ? titleMatch[1] : null;
        if (!title) {
          issues.push('Missing <title>');
        } else {
          const fcCount = (title.match(/Frame\s*Cipher|FrameCipher/gi) || []).length;
          if (fcCount > 1) issues.push(`Duplicate Frame Cipher in title (${fcCount} times): "${title}"`);
          if (title.length < 15) issues.push(`Short title: "${title}" (${title.length} chars)`);
          if (title.length > 75) issues.push(`Long title: "${title}" (${title.length} chars)`);
        }

        // 2. Check meta description
        const descMatch = html.match(/<meta[^>]*name=["']description["'][^>]*content=["']([^"']*)["']/i) ||
                          html.match(/<meta[^>]*content=["']([^"']*)["'][^>]*name=["']description["']/i);
        const desc = descMatch ? descMatch[1] : null;
        if (!desc) {
          issues.push('Missing meta description');
        } else if (desc.length < 50) {
          issues.push(`Short meta description: ${desc.length} chars`);
        }

        // 3. Check canonical
        const canonicalMatch = html.match(/<link[^>]*rel=["']canonical["'][^>]*href=["']([^"']*)["']/i);
        if (!canonicalMatch) {
          issues.push('Missing canonical tag');
        }

        // 4. Check Open Graph
        const ogTitle = html.match(/<meta[^>]*property=["']og:title["']/i);
        const ogImage = html.match(/<meta[^>]*property=["']og:image["']/i);
        if (!ogTitle) issues.push('Missing og:title');
        if (!ogImage) issues.push('Missing og:image');

        // 5. Check H1 count
        const h1Matches = html.match(/<h1\b[^>]*>(.*?)<\/h1>/gis) || [];
        if (h1Matches.length === 0) {
          issues.push('Missing <h1> heading');
        } else if (h1Matches.length > 1) {
          issues.push(`Multiple <h1> headings found (${h1Matches.length})`);
        }

        // 6. Check Schema.org
        const jsonLdMatches = html.match(/<script[^>]*type=["']application\/ld\+json["'][^>]*>(.*?)<\/script>/gis) || [];
        if (jsonLdMatches.length === 0) {
          issues.push('Missing Schema.org JSON-LD');
        }

        resolve({
          urlPath,
          statusCode: res.statusCode,
          title,
          descLength: desc ? desc.length : 0,
          h1Count: h1Matches.length,
          schemasCount: jsonLdMatches.length,
          issues,
        });
      });
    }).on('error', err => resolve({ urlPath, error: err.message, issues: [err.message] }));
  });
}

console.log(`Starting comprehensive SEO audit on ${testUrls.length} key URLs...`);
const results = await Promise.all(testUrls.map(auditPage));

console.log('\n================== SEO AUDIT REPORT ==================');
let totalIssues = 0;
for (const r of results) {
  if (r.issues.length === 0) {
    console.log(`✅ [${r.urlPath}] HTTP ${r.statusCode} | H1: ${r.h1Count} | Schemas: ${r.schemasCount} | Title: "${r.title?.slice(0, 45)}..."`);
  } else {
    console.log(`⚠️ [${r.urlPath}] HTTP ${r.statusCode} - ISSUES (${r.issues.length}):`);
    r.issues.forEach(iss => console.log(`    - ${iss}`));
    totalIssues += r.issues.length;
  }
}
console.log('======================================================');
console.log(`Audit complete. Total issues detected: ${totalIssues}`);
