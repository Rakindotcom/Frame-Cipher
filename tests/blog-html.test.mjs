import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";
import ts from "typescript";

const source = readFileSync(new URL("../src/lib/blog/sanitizeHtml.ts", import.meta.url), "utf8");
const compiled = ts.transpileModule(source, {
  compilerOptions: { module: ts.ModuleKind.ESNext, target: ts.ScriptTarget.ES2022 },
}).outputText;
const { sanitizeBlogHtml } = await import(`data:text/javascript,${encodeURIComponent(compiled)}`);

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
