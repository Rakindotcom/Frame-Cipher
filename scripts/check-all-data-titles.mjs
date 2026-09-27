import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.join(__dirname, '..');

const results = [];

function checkObject(obj, source, keyPath = '') {
  if (!obj) return;
  if (typeof obj === 'string') {
    if (/(title|heading|meta)/i.test(keyPath)) {
      const count = (obj.match(/Frame\s*Cipher|FrameCipher/gi) || []).length;
      if (count > 1) {
        results.push({ source, keyPath, text: obj });
      }
    }
  } else if (Array.isArray(obj)) {
    obj.forEach((item, idx) => checkObject(item, source, `${keyPath}[${idx}]`));
  } else if (typeof obj === 'object') {
    for (const [k, v] of Object.entries(obj)) {
      checkObject(v, source, `${keyPath}.${k}`);
    }
  }
}

// 1. Check allAdsCalculatorsConfig.js
try {
  const allAds = await import('../src/data/calculators/allAdsCalculatorsConfig.js');
  checkObject(allAds, 'allAdsCalculatorsConfig.js');
} catch (e) {
  console.error('Error loading allAdsCalculatorsConfig:', e);
}

// 2. Check canonicalPosts.js
try {
  const posts = await import('../src/lib/blog/canonicalPosts.js');
  checkObject(posts, 'canonicalPosts.js');
} catch (e) {
  console.error('Error loading canonicalPosts:', e);
}

// 3. Check canonicalAuthors.js
try {
  const authors = await import('../src/lib/authors/canonicalAuthors.js');
  checkObject(authors, 'canonicalAuthors.js');
} catch (e) {
  console.error('Error loading canonicalAuthors:', e);
}

// 4. Check agency.js
try {
  const agency = await import('../src/data/agency.js');
  checkObject(agency, 'agency.js');
} catch (e) {
  console.error('Error loading agency:', e);
}

// 5. Check growthWork.js
try {
  const growth = await import('../src/data/growthWork.js');
  checkObject(growth, 'growthWork.js');
} catch (e) {
  console.error('Error loading growthWork:', e);
}

console.log(`Scan completed. Found ${results.length} duplicate instances in data:`);
results.forEach(r => console.log(`[${r.source}] ${r.keyPath}: "${r.text}"`));
