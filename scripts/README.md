# Verification

`npm test` runs the service-content regressions across all 74 source records.

For the rendered-site audit:

1. Run `npm run build`.
2. Start the build with `npm run start -- --hostname 127.0.0.1 --port 3100`.
3. Run `npm run audit:routes` and `node scripts/audit-interactions.mjs`.

The browser scripts require Playwright and its Chromium browser. They use a local
`playwright` installation, or the module directory supplied through the
`PLAYWRIGHT_MODULE_PATH` environment variable (the bundled workspace runtime was
used for this audit). No production dependency is added for browser testing.

Optional environment variables: `AUDIT_BASE_URL`, `AUDIT_OUTPUT`, `AUDIT_ROUTES`
(comma-separated route paths), and `AUDIT_WIDTHS` (comma-separated pixel widths).

Results and mobile screenshots are written to `artifacts/site-audit/` by default.
The route list comes from Next.js's production prerender manifest, including
legacy service aliases, plus the dynamic Projects route and its six categories.
Every route is rendered at each configured width. Local link/image responses,
invalid-route status codes, visible text bounds, imported draft copy, pricing
table shape, JSON-LD, and browser runtime errors are checked.

The interaction script exercises the mobile menu and catalog anchor, service
navigation, pricing CTA, FAQs, desktop dropdown, and creative archive preview.
It does not submit contact forms or test external websites. The route audit
excludes deliberately clipped marquees, carousel slides, decorative text, and
ellipsis/line-clamp content from overflow failures; it still checks ordinary text
inside clipped containers.
