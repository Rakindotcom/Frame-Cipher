import test from "node:test";
import assert from "node:assert/strict";
import { register } from "node:module";

register("./helpers/app-module-loader.mjs", import.meta.url);

const { slugify, sanitizeSlugInput } = await import("../src/lib/seo/slugify.ts");

test("a heading becomes a lowercase, URL-safe slug", () => {
  assert.equal(slugify("Google Ads Cost Calculator"), "google-ads-cost-calculator");
  assert.equal(slugify("How To Rank #1 On Google"), "how-to-rank-1-on-google");
  assert.equal(slugify("Meta  Ads — ROAS  Guide!"), "meta-ads-roas-guide");
  assert.equal(slugify("  Leading and trailing  "), "leading-and-trailing");
  assert.equal(slugify("Multiple___separators"), "multiple-separators");
});

test("the generated slug is always lowercase", () => {
  for (const heading of [
    "UPPERCASE HEADING",
    "MiXeD CaSe HeAdInG",
    "CamelCaseHeading",
  ]) {
    const slug = slugify(heading);
    assert.equal(slug, slug.toLowerCase(), heading);
  }
});

test("the generated slug only contains URL-safe characters", () => {
  const slug = slugify("Ads & ROI: 100% Growth (2026) — সংখ্যা!");

  assert.match(slug, /^[a-z0-9-]*$/);
  assert.ok(!slug.startsWith("-"));
  assert.ok(!slug.endsWith("-"));
  assert.ok(!slug.includes("--"));
});

test("an empty or symbol-only heading falls back", () => {
  assert.equal(slugify("", "guide"), "guide");
  assert.equal(slugify("!!!", "author"), "author");
  assert.equal(slugify("", ""), "");
});

test("a manually typed slug is lowercased and sanitized as it is typed", () => {
  assert.equal(sanitizeSlugInput("My Custom Slug"), "my-custom-slug");
  assert.equal(sanitizeSlugInput("Ads/ROI 2026"), "ads-roi-2026");
  assert.equal(sanitizeSlugInput("keep-hyphens"), "keep-hyphens");

  const typed = "Frame Cipher SEO";
  const live = sanitizeSlugInput(typed);
  assert.equal(live, "frame-cipher-seo");
  assert.equal(live, live.toLowerCase());
});

test("a manual slug may be made shorter or longer than the generated one", () => {
  const heading = "The Complete Guide To Paid Advertising For Small Businesses";

  const shorter = sanitizeSlugInput("paid-ads");
  const longer = sanitizeSlugInput(heading);

  assert.ok(shorter.length < slugify(heading).length, "shorter should be shorter");
  assert.ok(
    longer.replace(/-/g, "").length >= slugify(heading).replace(/-/g, "").length,
    "longer should not be shorter"
  );

  // Whatever length is chosen, it must survive normalization intact.
  assert.equal(slugify(shorter), "paid-ads");
  assert.equal(slugify(longer), slugify(heading));
});

test("a manual slug survives normalization without losing the author's intent", () => {
  // Chosen by the user, messy while typing, normalized on commit.
  assert.equal(slugify("  My--Custom--Slug--  "), "my-custom-slug");
  assert.equal(slugify("Frame Cipher's Guide"), "frame-cipher-s-guide");
  assert.equal(slugify("Ads_2026"), "ads-2026");
});
