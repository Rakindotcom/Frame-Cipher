// Pass 3: correction sweep.
// A) Remove a wrongly-placed 3xl:text-lg when the class already resolves to
//    >= text-lg via a responsive variant (sm/md/lg/xl/2xl:text-lg|xl|2xl) -
//    keeping it would DEMOTE 20-24px leads to 18px because registered
//    breakpoints cascade last.
// B) Bump every remaining body text (effective size xs/sm/base at >=1537px)
//    with 3xl:text-lg. Fixed lookahead includes end-of-string ($) so trailing
//    size tokens are detected.
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

const stats = { removed: 0, bumped: 0, files: 0 };
// boundary = start, whitespace, or quote; token may carry any single variant prefix
const TOK = (name) => new RegExp(`(?:^|[\\s"'])(?:hover:)?(?:sm:|md:|lg:|xl:|2xl:)?${name}(?=[\\s"']|$)`);
const BIGGER_VARIANT_RX = /(?:^|[\s"'])(?:hover:)?(?:sm:|md:|lg:|xl:|2xl:)?text-(?:lg|xl|2xl|3xl)(?=[\s"']|$)/;
const LABEL_RX = /(uppercase|tracking-w[ide]|tracking-\[|font-mono|\[&_)/;

for (const f of files) {
  let c = fs.readFileSync(f, 'utf8');
  const before = c;
  c = c.replace(/className=([`"'])([\s\S]*?)\1/g, (full, q, cls) => {
    if (!cls.includes('text-frame-muted-fg')) return full;
    if (LABEL_RX.test(cls)) return full;
    // A) demotion guard: strip 3xl:text-lg when any responsive variant
    //    already resolves to text-lg or larger
    if (cls.includes('3xl:text-lg') && /(?:^|[\s"'])(?:hover:)?(?:sm:|md:|lg:|xl:|2xl:)(?:text-(?:lg|xl|2xl))(?=[\s"']|$)/.test(cls)) {
      stats.removed++;
      return `className=${q}${cls.replace(/ ?3xl:text-lg/g, '').replace(/ {2,}/g, ' ')}${q}`;
    }
    if (cls.includes('3xl:text-')) return full;
    // B) bump when effective wide-screen size is below text-lg
    if (BIGGER_VARIANT_RX.test(cls)) return full; // already >= text-lg unconditionally
    if (TOK('text-(?:sm|base)').test(cls)) {
      stats.bumped++;
      return `className=${q}${cls} 3xl:text-lg${q}`;
    }
    return full;
  });
  if (c !== before) {
    fs.writeFileSync(f, c);
    stats.files++;
  }
}
fs.writeFileSync(
  'audit-body-text-report.txt',
  'REMOVED demoting 3xl:text-lg: ' + stats.removed +
  '\nADDED 3xl:text-lg: ' + stats.bumped +
  '\nFILES CHANGED: ' + stats.files + '\n'
);
console.log('done', JSON.stringify(stats));
