import http from 'http';

const routes = [
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
  '/calculators/tiktok-ads',
  '/calculators/linkedin-ads',
  '/calculators/amazon-ads',
  '/tools/ads-calculator',
  '/projects',
  '/case-studies',
  '/blog',
  '/authors',
  '/contact',
  '/privacy',
  '/terms',
];

function fetchTitle(path) {
  return new Promise((resolve) => {
    http.get(`http://localhost:3000${path}`, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        const match = data.match(/<title>([^<]*)<\/title>/i);
        const title = match ? match[1] : '(NO TITLE)';
        const count = (title.match(/Frame\s*Cipher|FrameCipher/gi) || []).length;
        resolve({ path, title, count, duplicate: count > 1 });
      });
    }).on('error', err => resolve({ path, error: err.message }));
  });
}

console.log('Fetching live titles for', routes.length, 'routes...');
const results = await Promise.all(routes.map(fetchTitle));

console.log('\n--- LIVE RENDERED TITLES AUDIT ---');
let hasDupes = false;
for (const r of results) {
  const flag = r.duplicate ? '⚠️ DUPLICATE' : '✅ OK';
  if (r.duplicate) hasDupes = true;
  console.log(`${flag} [${r.path}] => "${r.title}" (Frame Cipher count: ${r.count})`);
}

if (!hasDupes) {
  console.log('\nNo duplicate Frame Cipher found in live rendered titles of tested routes.');
}
