import { siteUrl } from '../src/data/agency'

const BASE_URL = (process.env.NEXT_PUBLIC_SITE_URL || siteUrl || 'https://framecipher.info').replace(/\/$/, '')

const disallowedPaths = [
  '/admin',
  '/admin/',
  '/api',
  '/api/',
  '/*?*preview=',
  '/*?*preview_',
  '/*?*sort=',
  '/*?*sort_by=',
  '/*?*filter=',
  '/*?*variant=',
]

const publicCrawlerRules = [
  '*',
  'Googlebot',
  'Googlebot-Image',
  'Bingbot',
  'OAI-SearchBot',
  'OAI-AdsBot',
  'GPTBot',
  'ChatGPT-User',
  'Google-Extended',
  'PerplexityBot',
  'Perplexity-User',
  'ClaudeBot',
  'Claude-User',
  'Applebot',
  'Applebot-Extended',
].map((userAgent) => ({
  userAgent,
  allow: '/',
  disallow: disallowedPaths,
}))

export default function robots() {
  return {
    rules: publicCrawlerRules,
    sitemap: `${BASE_URL}/sitemap.xml`,
    host: BASE_URL,
  }
}