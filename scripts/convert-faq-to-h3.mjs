import fs from 'fs';
import path from 'path';

function findFaqFiles(dir) {
  let results = [];
  const list = fs.readdirSync(dir, { withFileTypes: true });
  for (const dirent of list) {
    const fullPath = path.join(dir, dirent.name);
    if (dirent.isDirectory()) {
      results = results.concat(findFaqFiles(fullPath));
    } else if (dirent.name.toLowerCase().includes('faq') && dirent.name.endsWith('.jsx')) {
      results.push(fullPath);
    }
  }
  return results;
}

const faqFiles = findFaqFiles('src/components');

function transformFaqQuestion(content) {
  let updated = content;

  // 1. Group hover & transitions cleanup
  updated = updated.replace(/<span\s+className="([^"]*group-hover:[^"]*)">([\s\r\n]*\{(?:cleanText\()?(?:faq\.question|faq\.q|item\.q|item\.question|qText|questionText|q)\)?\}[\s\r\n]*)<\/span>/g, (m, cls, inner) => {
    const cleanedCls = cls.replace(/group-hover:[^\s"]+/g, '').replace(/hover:[^\s"]+/g, '').replace(/transition-[^\s"]+/g, '').trim().replace(/\s+/g, ' ');
    return `<h3 className="${cleanedCls}">${inner}</h3>`;
  });

  // 2. Full className with typography or text-
  updated = updated.replace(/<span\s+className="([^"]*(?:font-|text-)[^"]*)">([\s\r\n]*\{(?:cleanText\()?(?:faq\.question|faq\.q|item\.q|item\.question|qText|questionText|q)\)?\}[\s\r\n]*)<\/span>/g, (m, cls, inner) => {
    let finalCls = cls;
    if (!finalCls.includes('text-white') && !finalCls.includes('text-highlighted')) {
      finalCls = 'text-white ' + finalCls;
    }
    return `<h3 className="${finalCls}">${inner}</h3>`;
  });

  // 3. Short class like pr-4 or leading-snug
  updated = updated.replace(/<span\s+className="(pr-4|leading-snug)">([\s\r\n]*\{(?:cleanText\()?(?:faq\.question|faq\.q|item\.q|item\.question|qText|questionText|q)\)?\}[\s\r\n]*)<\/span>/g, (m, cls, inner) => {
    return `<h3 className="font-heading text-base sm:text-lg font-medium tracking-tight text-white ${cls}">${inner}</h3>`;
  });

  // 4. Bare <span> without className
  updated = updated.replace(/<span>([\s\r\n]*\{(?:cleanText\()?(?:faq\.question|faq\.q|item\.q|item\.question|qText|questionText|q)\)?\}[\s\r\n]*)<\/span>/g, (m, inner) => {
    return `<h3 className="font-heading text-base sm:text-lg font-medium tracking-tight text-white pr-4">${inner}</h3>`;
  });

  return updated;
}

let modifiedFiles = 0;
for (const file of faqFiles) {
  const original = fs.readFileSync(file, 'utf8');
  const transformed = transformFaqQuestion(original);
  if (original !== transformed) {
    fs.writeFileSync(file, transformed, 'utf8');
    modifiedFiles++;
    console.log(`Updated: ${file.replace('src/components/', '').replace('src/components\\', '')}`);
  }
}

console.log(`\nSuccessfully converted ${modifiedFiles} FAQ files to semantic <h3>!`);
