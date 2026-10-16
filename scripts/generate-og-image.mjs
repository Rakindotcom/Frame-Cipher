// Generates public/og-image.png (1200x630) — the social share card used as the
// default og:image/twitter:image fallback across the site. Run with:
//   node scripts/generate-og-image.mjs
import fs from 'node:fs'
import sharp from 'sharp'

const BG = '#09090B'
const FG = '#FAFAFA'
const MUTED = '#A1A1AA'
const ACCENT = '#A855F7'

const logo = fs.readFileSync('public/logo.png')
const logoB64 = logo.toString('base64')
// logo.png is 512x347
const logoW = 430
const logoH = Math.round((logoW * 347) / 512)

const svg = `<svg width="1200" height="630" xmlns="http://www.w3.org/2000/svg">
  <rect width="1200" height="630" fill="${BG}"/>
  <rect x="0" y="0" width="1200" height="12" fill="${ACCENT}"/>
  <rect x="0" y="12" width="1200" height="1" fill="${ACCENT}" opacity="0.35"/>
  <rect x="0" y="618" width="1200" height="12" fill="${ACCENT}" opacity="0.65"/>
  <rect x="0.5" y="0.5" width="1199" height="629" fill="none" stroke="#3F3F46" stroke-width="1"/>
  <image x="${Math.round((1200 - logoW) / 2)}" y="104" width="${logoW}" height="${logoH}" href="data:image/png;base64,${logoB64}"/>
  <text x="600" y="470" text-anchor="middle" font-family="Segoe UI, Arial, Helvetica, sans-serif" font-size="34" font-weight="700" letter-spacing="3.5" fill="${FG}">360 MARKETING, MEDIA &amp; TECHNOLOGY AGENCY</text>
  <text x="600" y="530" text-anchor="middle" font-family="Segoe UI, Arial, Helvetica, sans-serif" font-size="27" font-weight="600" letter-spacing="1.5" fill="${MUTED}">Dhaka, Bangladesh  •  framecipher.info</text>
  <text x="600" y="578" text-anchor="middle" font-family="Segoe UI, Arial, Helvetica, sans-serif" font-size="24" font-weight="600" letter-spacing="1.2" fill="${ACCENT}">PAID ADS  /  SEO  /  WEBSITES  /  VIDEO  /  BRANDING</text>
</svg>`

const out = await sharp(Buffer.from(svg)).png({ compressionLevel: 9, quality: 92 }).toBuffer()
fs.writeFileSync('public/og-image.png', out)
console.log('wrote public/og-image.png', out.length, 'bytes')
const meta = await sharp(out).metadata()
console.log('dimensions:', meta.width + 'x' + meta.height, meta.format)
