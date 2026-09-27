import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.join(__dirname, '..');

function findFiles(dir, filterFn, fileList = []) {
  if (!fs.existsSync(dir)) return fileList;
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    if (stat.isDirectory()) {
      if (file !== 'node_modules' && file !== '.next' && file !== '.git') {
        findFiles(fullPath, filterFn, fileList);
      }
    } else if (filterFn(file)) {
      fileList.push(fullPath);
    }
  }
  return fileList;
}

const allCodeFiles = findFiles(rootDir, f => /\.(jsx?|tsx?|json)$/.test(f));
console.log(`Auditing ${allCodeFiles.length} files across repository...`);

const results = [];

for (const file of allCodeFiles) {
  const content = fs.readFileSync(file, 'utf8');
  const relPath = path.relative(rootDir, file).replace(/\\/g, '/');

  // Look for any line where "Frame Cipher" appears twice within 80 characters
  const lines = content.split('\n');
  lines.forEach((line, idx) => {
    if (/title|heading|meta|og:|twitter:|metadata/i.test(line)) {
      const match = line.match(/(?:Frame\s*Cipher|FrameCipher).{0,60}(?:Frame\s*Cipher|FrameCipher)/i);
      if (match) {
        results.push({
          file: relPath,
          lineNum: idx + 1,
          matchedText: match[0],
          rawLine: line.trim().slice(0, 160),
        });
      }
    }
  });
}

console.log(`Found ${results.length} potential duplicate instances:`);
results.forEach(r => {
  console.log(`[${r.file}:${r.lineNum}] ${r.rawLine}`);
});
