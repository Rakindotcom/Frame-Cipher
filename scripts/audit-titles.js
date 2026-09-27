const fs = require('fs');
const path = require('path');

const rootDir = path.join(__dirname, '..');
const appDir = path.join(rootDir, 'app');

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

  // Look for any string where "Frame Cipher" appears twice within 80 characters
  // or "FrameCipher" appears twice
  const lines = content.split('\n');
  lines.forEach((line, idx) => {
    // Only look at lines that define titles, metadata, or head elements
    if (/title|heading|meta|og:|twitter:/i.test(line)) {
      const match = line.match(/(?:Frame\s*Cipher|FrameCipher).{0,60}(?:Frame\s*Cipher|FrameCipher)/i);
      if (match) {
        results.push({
          file: relPath,
          lineNum: idx + 1,
          matchedText: match[0],
          rawLine: line.trim().slice(0, 140),
        });
      }
    }
  });
}

console.log(`Found ${results.length} potential duplicate instances:`);
results.forEach(r => {
  console.log(`[${r.file}:${r.lineNum}] ${r.rawLine}`);
});
