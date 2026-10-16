// Single source of truth for every redirect the site serves.
//
// It lives in `src/lib/seo` (not inline in next.config.mjs) because the sitemap
// builders must never emit a URL that immediately redirects. Google Search
// Console reports sitemap entries that redirect as "Page with redirect", and
// both lists drifting apart is exactly how that happens, so next.config.mjs and
// the sitemap builders import this same module.

export const legacyRedirects = [
  { source: '/insights', destination: '/blog', permanent: true },
  { source: '/insights/:slug*', destination: '/blog/:slug*', permanent: true },
  { source: '/dashboard', destination: '/admin', permanent: false },
  { source: '/dashboard/:slug*', destination: '/admin/:slug*', permanent: false },
  // 301 Permanent Redirects for Legacy Service Aliases to Canonical Service Pages
  { source: '/services/facebook-ads', destination: '/services/paid-advertising/meta-ads', permanent: true },
  { source: '/services/meta-ads', destination: '/services/paid-advertising/meta-ads', permanent: true },
  { source: '/services/facebook-ads-agency-bangladesh', destination: '/services/paid-advertising/meta-ads', permanent: true },
  { source: '/services/meta-ads-bangladesh', destination: '/services/paid-advertising/meta-ads', permanent: true },
  { source: '/services/paid-ads', destination: '/services/paid-advertising', permanent: true },
  { source: '/services/ppc', destination: '/services/paid-advertising/google-ads', permanent: true },
  { source: '/services/search-engine-optimization', destination: '/services/seo', permanent: true },
  { source: '/services/local-seo', destination: '/services/seo/local-seo', permanent: true },
  { source: '/services/local-seo-bangladesh', destination: '/services/seo/local-seo', permanent: true },
  { source: '/services/local-seo-service-dhaka', destination: '/services/seo/local-seo', permanent: true },
  { source: '/services/local-seo-dhaka', destination: '/services/seo/local-seo', permanent: true },
  { source: '/services/branding', destination: '/services/content-creation/branding', permanent: true },
  { source: '/services/brand-design', destination: '/services/content-creation/branding', permanent: true },
  { source: '/services/branding-strategy', destination: '/services/content-creation/branding', permanent: true },
  { source: '/services/brand-strategy', destination: '/services/content-creation/branding', permanent: true },
  { source: '/services/branding-design', destination: '/services/content-creation/branding', permanent: true },
  { source: '/services/graphic-design', destination: '/services/content-creation/graphic-design', permanent: true },
  { source: '/services/creative-design', destination: '/services/content-creation/graphic-design', permanent: true },
  { source: '/services/logo-design', destination: '/services/content-creation/logo-design', permanent: true },
  { source: '/services/video', destination: '/services/content-creation/video-production', permanent: true },
  { source: '/services/videography', destination: '/services/content-creation/video-production', permanent: true },
  { source: '/services/video-production', destination: '/services/content-creation/video-production', permanent: true },
  { source: '/services/photography', destination: '/services/content-creation/product-photography', permanent: true },
  { source: '/services/photo-production', destination: '/services/content-creation/product-photography', permanent: true },
  { source: '/services/brand-photography', destination: '/services/content-creation/product-photography', permanent: true },
  { source: '/services/web-development', destination: '/services/website-design-development', permanent: true },
  { source: '/services/website-development', destination: '/services/website-design-development', permanent: true },
  { source: '/services/website-design', destination: '/services/website-design-development', permanent: true },
  { source: '/services/website', destination: '/services/website-design-development', permanent: true },
  { source: '/services/websites', destination: '/services/website-design-development', permanent: true },
  { source: '/services/software-solutions', destination: '/services/app-development', permanent: true },
  { source: '/services/software-development', destination: '/services/app-development', permanent: true },
  { source: '/services/software', destination: '/services/app-development', permanent: true },
  { source: '/services/custom-software', destination: '/services/app-development', permanent: true },
  { source: '/services/ecommerce', destination: '/services/website-design-development/ecommerce-website', permanent: true },
  { source: '/services/e-commerce', destination: '/services/website-design-development/ecommerce-website', permanent: true },
  { source: '/services/ecommerce-development', destination: '/services/website-design-development/ecommerce-website', permanent: true },
  { source: '/services/e-commerce-development', destination: '/services/website-design-development/ecommerce-website', permanent: true },
  { source: '/services/ecommerce-website-development', destination: '/services/website-design-development/ecommerce-website', permanent: true },
  { source: '/services/landing-pages', destination: '/services/website-design-development/landing-pages', permanent: true },
  { source: '/services/landing-page-design', destination: '/services/website-design-development/landing-pages', permanent: true },
  { source: '/services/landing-page-development', destination: '/services/website-design-development/landing-pages', permanent: true },
  { source: '/services/landing-page-design-bangladesh', destination: '/services/website-design-development/landing-pages', permanent: true },
  { source: '/services/social-media', destination: '/services/social-media-management', permanent: true },
  { source: '/services/social-media-marketing', destination: '/services/social-media-management', permanent: true },
  { source: '/services/automation', destination: '/services/app-development/saas-apps', permanent: true },
  { source: '/services/crm', destination: '/services/app-development/saas-apps', permanent: true },
  { source: '/services/automation-and-crm', destination: '/services/app-development/saas-apps', permanent: true },
  { source: '/services/crm-automation', destination: '/services/app-development/saas-apps', permanent: true },
  { source: '/services/automation-crm', destination: '/services/app-development/saas-apps', permanent: true },
  { source: '/services/360', destination: '/services/360-marketing', permanent: true },
  { source: '/services/marketing', destination: '/services/360-marketing', permanent: true },
  { source: '/services/digital-marketing', destination: '/services/360-marketing', permanent: true },
  { source: '/services/360-marketing-agency', destination: '/services/360-marketing', permanent: true },
];

// Static (non-wildcard) source paths, e.g. "/services/web-development".
// Wildcard sources such as "/insights/:slug*" are excluded because they are not
// concrete pages and must never appear in a sitemap to begin with.
export const redirectSourcePaths = new Set(
  legacyRedirects
    .map((redirect) => redirect.source)
    .filter((source) => !source.includes(':') && !source.includes('*'))
);
