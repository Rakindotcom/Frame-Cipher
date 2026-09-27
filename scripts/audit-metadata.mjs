import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.join(__dirname, '..');
const appDir = path.join(rootDir, 'app');

function findPageFiles(dir, fileList = []) {
  if (!fs.existsSync(dir)) return fileList;
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    if (stat.isDirectory()) {
      findPageFiles(fullPath, fileList);
    } else if (file === 'page.jsx' || file === 'page.tsx' || file === 'layout.jsx' || file === 'layout.tsx') {
      fileList.push(fullPath);
    }
  }
  return fileList;
}

const pageFiles = findPageFiles(appDir);
console.log(`Checking metadata in ${pageFiles.length} page/layout files...`);

for (const file of pageFiles) {
  const content = fs.readFileSync(file, 'utf8');
  const relPath = path.relative(rootDir, file).replace(/\\/g, '/');

  // Find metadata export or generateMetadata
  const titleMatch = content.match(/title:\s*({[^}]+}|['"`][^'"`]+['"`])/g);
  if (titleMatch) {
    for (const t of titleMatch) {
      console.log(`[${relPath}] ${t.replace(/\s+/g, ' ')}`);
    }
  }
}
