import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.join(__dirname, '..');

const dataPath = path.join(rootDir, 'src', 'data', 'servicePagesData.json');
const data = JSON.parse(fs.readFileSync(dataPath, 'utf8'));

console.log(`Checking ${data.length} service pages in servicePagesData.json...`);

const duplicateTitles = [];

data.forEach((p, idx) => {
  const title = p.seoTitle || '';
  const count = (title.match(/Frame\s*Cipher|FrameCipher/gi) || []).length;
  if (count > 1) {
    duplicateTitles.push({
      slug: p.slug,
      fullPath: p.fullPath,
      seoTitle: title,
    });
  }
});

console.log(`Found ${duplicateTitles.length} duplicate titles in servicePagesData.json:`);
duplicateTitles.forEach(d => {
  console.log(`[${d.fullPath}] -> "${d.seoTitle}"`);
});
