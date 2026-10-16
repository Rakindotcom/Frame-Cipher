import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";
import ts from "typescript";

const source = readFileSync(new URL("../src/lib/blog/sanitizeHtml.ts", import.meta.url), "utf8");
const compiled = ts.transpileModule(source, {
  compilerOptions: { module: ts.ModuleKind.ESNext, target: ts.ScriptTarget.ES2022 },
}).outputText;
const { sanitizeBlogHtml, isValidFontSize, normalizeFontSize } = await import(`data:text/javascript,${encodeURIComponent(compiled)}`);

test("isValidFontSize validates acceptable sizes and rejects invalid or malicious values", () => {
  assert.equal(isValidFontSize("16px"), true);
  assert.equal(isValidFontSize("24px"), true);
  assert.equal(isValidFontSize("22"), true);
  assert.equal(isValidFontSize("1.5rem"), true);
  assert.equal(isValidFontSize("120px"), true);
  assert.equal(isValidFontSize("7px"), false); // below min 8
  assert.equal(isValidFontSize("150px"), false); // above max 120
  assert.equal(isValidFontSize("12px; background: red"), false); // CSS injection
  assert.equal(isValidFontSize("javascript:alert(1)"), false);
});

test("normalizeFontSize adds px to unitless numbers", () => {
  assert.equal(normalizeFontSize("22"), "22px");
  assert.equal(normalizeFontSize("18px"), "18px");
  assert.equal(normalizeFontSize(24), "24px");
  assert.equal(normalizeFontSize(""), "");
});

test("custom font-size and font-family inline styles are preserved safely", () => {
  const html = '<p style="font-size: 24px; font-family: \'Space Grotesk\', sans-serif;"><span style="font-size: 18px; color: #2563eb;">Featured text</span> and normal text</p>';
  const result = sanitizeBlogHtml(html);
  assert.match(result, /style="font-size: 24px; font-family: 'Space Grotesk', sans-serif;"/);
  assert.match(result, /style="font-size: 18px; color: #2563eb;"/);
});

test("unsafe CSS styles like url() and expressions are stripped from inline style", () => {
  const malicious = '<p style="font-size: 16px; background-image: url(javascript:alert(1));">Dangerous</p>';
  const result = sanitizeBlogHtml(malicious);
  assert.doesNotMatch(result, /url\(javascript/);
  assert.doesNotMatch(result, /style=/);
});

test("pasted Word and Docs tables keep rows, columns, and merged cells", () => {
  const pasted = '<table style="width:100%"><colgroup><col style="width:30%"><col></colgroup><thead><tr><th colspan="2">Budget</th></tr></thead><tbody><tr><td rowspan="2">Basic</td><td>৳18,000</td></tr><tr><td>৳60,000</td></tr></tbody></table>';
  const result = sanitizeBlogHtml(pasted);

  assert.match(result, /<table\b/);
  assert.match(result, /<colgroup>/);
  assert.match(result, /<th colspan="2">Budget<\/th>/);
  assert.match(result, /<td rowspan="2">Basic<\/td>/);
  assert.equal((result.match(/<tr>/g) || []).length, 3);
  assert.equal((result.match(/<td\b/g) || []).length, 3);
});

test("table content still removes scripts and event handlers", () => {
  const result = sanitizeBlogHtml('<table><tr><td onclick="alert(1)">Price<script>alert(1)</script></td></tr></table>');
  assert.match(result, /<td>Price<\/td>/);
  assert.doesNotMatch(result, /onclick|<script|alert\(1\)/);
});

test("a pasted paragraph break inside a sentence does not split the sentence", () => {
  const html = '<p>That is the answer to <strong>how much a business <a href="/services">website</a></strong></p><p><strong> cost</strong>, and the sections below explain why.</p>';
  const result = sanitizeBlogHtml(html);

  assert.equal((result.match(/<p\b/g) || []).length, 1);
  assert.match(result, /website<\/a><\/strong><strong> cost<\/strong>, and/);
});

test("intentional paragraphs remain separate", () => {
  const html = '<p>The first point ends here.</p><p> The next paragraph starts here.</p>';
  assert.equal((sanitizeBlogHtml(html).match(/<p\b/g) || []).length, 2);
});

test("subscript and superscript tags are preserved", () => {
  const html = '<p>CO<sub>2</sub> and 10<sup>5</sup> metrics</p>';
  const result = sanitizeBlogHtml(html);
  assert.match(result, /<sub>2<\/sub>/);
  assert.match(result, /<sup>5<\/sup>/);
});

test("valid YouTube iframe is preserved and normalized", () => {
  const html = '<figure><iframe src="https://www.youtube.com/embed/dQw4w9WgXcQ" width="560" height="315"></iframe><figcaption>Tutorial video</figcaption></figure>';
  const result = sanitizeBlogHtml(html);
  assert.match(result, /<iframe src="https:\/\/www\.youtube-nocookie\.com\/embed\/dQw4w9WgXcQ"/);
  assert.match(result, /<figcaption>Tutorial video<\/figcaption>/);
});

test("unauthorized iframes are stripped for security", () => {
  const evil = '<p>Check this: <iframe src="https://evil-site.com/exploit"></iframe></p>';
  const result = sanitizeBlogHtml(evil);
  assert.doesNotMatch(result, /<iframe/);
  assert.doesNotMatch(result, /evil-site/);
});

test("javascript links and event handlers in links are stripped", () => {
  const unsafe = '<p><a href="javascript:alert(1)" onclick="stealCookies()">Click me</a></p>';
  const result = sanitizeBlogHtml(unsafe);
  assert.doesNotMatch(result, /javascript:/);
  assert.doesNotMatch(result, /onclick/);
  assert.doesNotMatch(result, /stealCookies/);
  assert.match(result, /Click me/);
});

test("tables are automatically wrapped in responsive horizontal-scroll containers", () => {
  const table = '<table><thead><tr><th>Device Testing</th><th>Android</th><th>iOS</th></tr></thead><tbody><tr><td>OS versions</td><td>Many</td><td>Fewer</td></tr></tbody></table>';
  const result = sanitizeBlogHtml(table);

  assert.match(result, /class="blog-table-wrapper"/);
  assert.match(result, /class="blog-table-scroll"/);
  assert.match(result, /class="blog-table-hint"/);
  assert.match(result, /<th>Device Testing<\/th>/);

  // Calling twice should not create duplicate wrappers
  const reResult = sanitizeBlogHtml(result);
  const wrapperMatches = reResult.match(/blog-table-wrapper/g) || [];
  assert.equal(wrapperMatches.length, 1, "should not double-wrap tables");
});

