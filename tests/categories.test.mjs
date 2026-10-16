import test from "node:test";
import assert from "node:assert/strict";
import { register } from "node:module";

register("./helpers/app-module-loader.mjs", import.meta.url);

const { BLOG_CATEGORIES, blogCategorySlug, blogCategoryFromSlug } = await import(
  "../src/lib/blog/getBlogPosts.ts"
);

test("blogCategorySlug creates URL-safe lowercase slugs with & replaced by and", () => {
  assert.equal(blogCategorySlug("UI/UX & Branding"), "ui-ux-and-branding");
  assert.equal(blogCategorySlug("Technical SEO"), "technical-seo");
  assert.equal(blogCategorySlug("Conversion Optimization"), "conversion-optimization");
  assert.equal(blogCategorySlug("AI Automation & Growth"), "ai-automation-and-growth");
});

test("blogCategoryFromSlug resolves static and dynamic custom categories", () => {
  // Static category
  assert.equal(blogCategoryFromSlug("ui-ux-and-branding"), "UI/UX & Branding");

  // Custom dynamically added category
  const dynamicCategories = [
    ...BLOG_CATEGORIES,
    "AI Automation & Growth",
    "Social Media Engineering",
  ];

  assert.equal(
    blogCategoryFromSlug("ai-automation-and-growth", dynamicCategories),
    "AI Automation & Growth"
  );
  assert.equal(
    blogCategoryFromSlug("social-media-engineering", dynamicCategories),
    "Social Media Engineering"
  );
});

test("blogCategoryFromSlug does not match All Articles", () => {
  assert.equal(blogCategoryFromSlug("all-articles"), undefined);
});
