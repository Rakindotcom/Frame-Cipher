// Body-text consistency audit: tally every text-size pattern that appears on
// elements using the body text color (text-frame-muted-fg).
const fs = require('fs');
const path = require('path');
const roots = ['src', 'app'];
const files = [];
function walk(d) {
  for (const e of fs.readdirSync(d, { withFileTypes: true })) {
    const p = path.join(d, e.name);
    if (e.isDirectory()) walk(p);
    else if (/\.(jsx|tsx)$/.test(e.name)) files.push(p);
  }
}
roots.forEach(walk);
const tally = {};
const samples = {};
for (const f of files) {
  const c = fs.readFileSync(f, 'utf8');
  const rx = /className=([`"'])(.*?)\1/gs;
  let m;
  while ((m = rx.exec(c))) {
    const cls = m[2];
    if (!cls.includes('text-frame-muted-fg')) continue;
    const sizes = [...cls.matchAll(/(?:hover:|md:|sm:|lg:|xl:|2xl:|min-\[\d+px\]:)*\btext-(xs|sm|base|lg|xl|2xl|\[[0-9.]+(?:rem|px)\])\b/g)].map((x) => x[0]);
    if (sizes.length === 0) continue;
    const key = sizes.join(' | ');
    const lineStart = c.lastIndexOf('\n', m.index) + 1;
    const lineEnd = c.indexOf('\n', m.index);
    const line = c.slice(lineStart, lineEnd).trim().slice(0, 110);
    tally[key] = (tally[key] || 0) + 1;
    (samples[key] = samples[key] || new Set()).add(f.replace(/\\/g, '/') + ' :: ' + line);
  }
}
let out = 'FILES SCANNED: ' + files.length + '\n';
const rows = Object.entries(tally).sort((a, b) => b[1] - a[1]);
for (const [k, v] of rows) {
  out += `\n### ${v}x  [${k}]\n`;
  [...samples[k]].slice(0, 5).forEach((s) => (out += '   ' + s + '\n'));
}
out += '\nTOTAL patterns: ' + rows.length;
fs.writeFileSync('audit-body-text-report.txt', out);
console.log('done');
