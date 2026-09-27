/** @type {import('next').NextConfig} */
const nextConfig = {
  poweredByHeader: false,
  reactStrictMode: true,
  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [320, 640, 768, 1024, 1280, 1536, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60 * 60 * 24 * 30,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "firebasestorage.googleapis.com",
        pathname: "/v0/b/**",
      },
      {
        protocol: "https",
        hostname: "framecipherweb.firebasestorage.app",
        pathname: "**",
      },
    ],
  },
  async redirects() {
    return [
      {
        source: "/insights",
        destination: "/blog",
        permanent: true,
      },
      {
        source: "/insights/:slug*",
        destination: "/blog/:slug*",
        permanent: true,
      },
      {
        source: "/dashboard",
        destination: "/admin",
        permanent: false,
      },
      {
        source: "/dashboard/:slug*",
        destination: "/admin/:slug*",
        permanent: false,
      },
      // 301 Permanent Redirects for Legacy Service Aliases to Canonical Service Pages
      { source: "/services/facebook-ads", destination: "/services/paid-advertising/meta-ads", permanent: true },
      { source: "/services/meta-ads", destination: "/services/paid-advertising/meta-ads", permanent: true },
      { source: "/services/facebook-ads-agency-bangladesh", destination: "/services/paid-advertising/meta-ads", permanent: true },
      { source: "/services/meta-ads-bangladesh", destination: "/services/paid-advertising/meta-ads", permanent: true },
      { source: "/services/paid-ads", destination: "/services/paid-advertising", permanent: true },
      { source: "/services/ppc", destination: "/services/paid-advertising/google-ads", permanent: true },
      { source: "/services/search-engine-optimization", destination: "/services/seo", permanent: true },
      { source: "/services/local-seo", destination: "/services/seo/local-seo", permanent: true },
      { source: "/services/local-seo-bangladesh", destination: "/services/seo/local-seo", permanent: true },
      { source: "/services/local-seo-service-dhaka", destination: "/services/seo/local-seo", permanent: true },
      { source: "/services/local-seo-dhaka", destination: "/services/seo/local-seo", permanent: true },
      { source: "/services/branding", destination: "/services/content-creation/branding", permanent: true },
      { source: "/services/brand-design", destination: "/services/content-creation/branding", permanent: true },
      { source: "/services/branding-strategy", destination: "/services/content-creation/branding", permanent: true },
      { source: "/services/brand-strategy", destination: "/services/content-creation/branding", permanent: true },
      { source: "/services/branding-design", destination: "/services/content-creation/branding", permanent: true },
      { source: "/services/graphic-design", destination: "/services/content-creation/graphic-design", permanent: true },
      { source: "/services/creative-design", destination: "/services/content-creation/graphic-design", permanent: true },
      { source: "/services/video", destination: "/services/content-creation/video-production", permanent: true },
      { source: "/services/videography", destination: "/services/content-creation/video-production", permanent: true },
      { source: "/services/video-production", destination: "/services/content-creation/video-production", permanent: true },
      { source: "/services/photography", destination: "/services/content-creation/product-photography", permanent: true },
      { source: "/services/photo-production", destination: "/services/content-creation/product-photography", permanent: true },
      { source: "/services/brand-photography", destination: "/services/content-creation/product-photography", permanent: true },
      { source: "/services/web-development", destination: "/services/website-design-development", permanent: true },
      { source: "/services/website-development", destination: "/services/website-design-development", permanent: true },
      { source: "/services/website-design", destination: "/services/website-design-development", permanent: true },
      { source: "/services/website", destination: "/services/website-design-development", permanent: true },
      { source: "/services/websites", destination: "/services/website-design-development", permanent: true },
      { source: "/services/software-solutions", destination: "/services/app-development", permanent: true },
      { source: "/services/software-development", destination: "/services/app-development", permanent: true },
      { source: "/services/software", destination: "/services/app-development", permanent: true },
      { source: "/services/custom-software", destination: "/services/app-development", permanent: true },
      { source: "/services/ecommerce", destination: "/services/website-design-development/ecommerce-website", permanent: true },
      { source: "/services/e-commerce", destination: "/services/website-design-development/ecommerce-website", permanent: true },
      { source: "/services/ecommerce-development", destination: "/services/website-design-development/ecommerce-website", permanent: true },
      { source: "/services/e-commerce-development", destination: "/services/website-design-development/ecommerce-website", permanent: true },
      { source: "/services/ecommerce-website-development", destination: "/services/website-design-development/ecommerce-website", permanent: true },
      { source: "/services/landing-pages", destination: "/services/website-design-development/landing-pages", permanent: true },
      { source: "/services/landing-page-design", destination: "/services/website-design-development/landing-pages", permanent: true },
      { source: "/services/landing-page-development", destination: "/services/website-design-development/landing-pages", permanent: true },
      { source: "/services/landing-page-design-bangladesh", destination: "/services/website-design-development/landing-pages", permanent: true },
      { source: "/services/social-media", destination: "/services/social-media-management", permanent: true },
      { source: "/services/social-media-marketing", destination: "/services/social-media-management", permanent: true },
      { source: "/services/automation", destination: "/services/app-development/saas-apps", permanent: true },
      { source: "/services/crm", destination: "/services/app-development/saas-apps", permanent: true },
      { source: "/services/automation-and-crm", destination: "/services/app-development/saas-apps", permanent: true },
      { source: "/services/crm-automation", destination: "/services/app-development/saas-apps", permanent: true },
      { source: "/services/automation-crm", destination: "/services/app-development/saas-apps", permanent: true },
      { source: "/services/360", destination: "/services/360-marketing", permanent: true },
      { source: "/services/marketing", destination: "/services/360-marketing", permanent: true },
      { source: "/services/digital-marketing", destination: "/services/360-marketing", permanent: true },
      { source: "/services/360-marketing-agency", destination: "/services/360-marketing", permanent: true },
    ];
  },
  async headers() {
    return [
      {
        // Security headers on every response.
        source: "/(.*)",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=(), interest-cohort=()",
          },
          ...(process.env.NODE_ENV !== "production"
            ? [{ key: "Cache-Control", value: "no-store, no-cache, must-revalidate" }]
            : []),
        ],
      },
      {
        // Long-lived caching for images and fonts served from /public.
        //
        // The (?!_next/) guard is required. Do not widen this pattern to cover
        // /_next: a rule that forced
        // `Cache-Control: public, max-age=31536000, immutable` onto
        // /_next/static made those responses un-revalidatable, so after a deploy
        // the browser kept serving chunks from the previous build and the new
        // build failed at runtime with "module factory is not available".
        // Next.js already sets correct long-lived caching on its own
        // content-hashed static output, so it must be left alone.
        source:
          "/:path((?!_next/).*\\.(?:png|jpe?g|webp|avif|svg|ico|gif|woff2?|ttf|otf))",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=604800, stale-while-revalidate=604800",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
