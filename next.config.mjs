import { legacyRedirects } from './src/lib/seo/redirects.js'

/** @type {import('next').NextConfig} */
const nextConfig = {
  poweredByHeader: false,
  reactStrictMode: true,
  // firebase-admin resolves optional gRPC/metadata internals and node-forge at
  // runtime with dynamic requires. Bundling those into the server output breaks
  // the Admin SDK at runtime on Netlify, so it stays an external `require`
  // resolved from node_modules at runtime. It is a real dependency (not a
  // devDependency) so it is installed in the Functions bundle.
  serverExternalPackages: ["firebase-admin"],
  // `linkAudit.ts` walks the repository with a recursive `readdirSync` to power
  // the /admin/seo-health source linter. That dynamic walk is impossible for the
  // Node file tracer to scope, so it reported "the whole project was traced
  // unintentionally" and pulled the entire source tree into the server bundle.
  // The linter only ever reads files from a git checkout, so the source tree is
  // excluded from the trace rather than shipped to the function.
  outputFileTracingExcludes: {
    "/admin/seo-health": ["./src/**/*", "./app/**/*", "./*.json", "./*.mjs", "./*.js"],
  },
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
    // Defined in src/lib/seo/redirects.js so the sitemap builders can read the
    // same list and never emit a URL that immediately redirects.
    return legacyRedirects;
  },
  async headers() {
    return [
      {
        // Security headers on every response.
        source: "/(.*)",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          { key: "X-DNS-Prefetch-Control", value: "on" },
          {
            key: "Strict-Transport-Security",
            value: "max-age=31536000; includeSubDomains; preload",
          },
          {
            key: "Content-Security-Policy",
            value:
              "default-src 'self' https: data: blob: 'unsafe-inline' 'unsafe-eval'; frame-ancestors 'self';",
          },
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
