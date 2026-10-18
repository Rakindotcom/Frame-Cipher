// Pass 2: migrate min-[1537px]:* to the registered 3xl: breakpoint, then bump
// every remaining body-text size variant (text-xs/sm/base resolving below
// text-lg at >=1537px) to 3xl:text-lg, skipping label tokens (uppercase,
// tracking-[, font-mono, child selectors, opacity-tinted sizes).
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

const stats = { migrated: 0, bumpedSm: 0, bumpedBase: 0, files: 0 };

const LABEL_RX = /(uppercase|tracking-\[|font-mono|\[&_)/;
// any token resolving to >= text-lg at wide screens -> already big, skip
const BIG_RX = /(?:^|[\s"'])((?:hover:|md:|sm:|lg:|xl:|2xl:)?text-(?:lg|xl|2xl|\[[0-9.]+(?:rem|px)?\]))(?=\s|"|')/;

for (const f of files) {
  let c = fs.readFileSync(f, 'utf8');
  const before = c;
  // 1) migrate arbitrary variant to registered breakpoint
  if (c.includes('min-[1537px]:')) {
    stats.migrated += ([...c.matchAll(/min-\[1537px\]:/g)]).length;
    c = c.replaceAll('min-[1537px]:', '3xl:');
  }

  // 2) bump remaining body text
  c = c.replace(/className=([`"'])([\s\S]*?)\1/g, (full, q, cls) => {
    if (!cls.includes('text-frame-muted-fg')) return full;
    if (cls.includes('3xl:text-lg') || cls.includes('min-[1537px]:')) return full;
    if (LABEL_RX.test(cls)) return full;
    if (BIG_RX.test(cls)) return full;
    // text-sm in any form (text-sm, md:text-sm, sm:text-sm) -> bump to lg
    if (/(?:^|[\s"'])((?:hover:|md:|sm:|lg:|xl:|2xl:)?text-sm)(?=\s|"|')/.test(cls)) {
      stats.bumpedSm++;
      return `className=${q}${cls} 3xl:text-lg${q}`;
    }
    // flat text-base (no md/sm/xl larger override) -> bump to lg
    if (/(?:^|[\s"'])((?:hover:|md:|sm:|lg:|xl:|2xl:)?text-base)(?=\s|"|')/.test(cls)) {
      stats.bumpedBase++;
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
  'MIGRATED min-[1537px] occurrences: ' + stats.migrated +
  '\nBUMPED text-sm -> 3xl:text-lg: ' + stats.bumpedSm +
  '\nBUMPED text-base -> 3xl:text-lg: ' + stats.bumpedBase +
  '\nFILES CHANGED: ' + stats.files + '\n'
);
console.log('done', JSON.stringify(stats));
