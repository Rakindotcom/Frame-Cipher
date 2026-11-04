'use client'

import React, { useEffect, useRef, useState } from 'react'

export type Ambient3DMode =
  | 'terrain'
  | 'constellation'
  | 'orbital'
  | 'commerce-loop'
  | 'target-beam'
  | 'fluid-polyhedron'
  | 'modular-grid'
  | 'speed-stream'
  | 'bezier-wave'
  | 'enterprise-mesh'
  | 'geo-drift'
  | 'refraction-scan'
  | 'corporate-matrix'

interface Ambient3DCanvasProps {
  mode?: Ambient3DMode | (string & {})
  className?: string
  opacity?: number
}

interface CodeSnippetConfig {
  fileName: string
  language: string
  badge: string
  lines: Array<{
    num: string
    tokens: Array<{ text: string; color: string }>
  }>
}

const SNIPPET_DATA: Record<Ambient3DMode, CodeSnippetConfig> = {
  // 1. Pillar - Website Design & Development
  terrain: {
    fileName: 'engine.config.ts',
    language: 'TypeScript',
    badge: 'Edge Runtime 15',
    lines: [
      {
        num: '01',
        tokens: [
          { text: 'import ', color: 'text-purple-400 font-semibold' },
          { text: '{ defineWebConfig, edgeRuntime } ', color: 'text-zinc-200' },
          { text: 'from ', color: 'text-purple-400 font-semibold' },
          { text: "'@framecipher/core'", color: 'text-emerald-400' },
        ],
      },
      {
        num: '02',
        tokens: [
          { text: 'export const ', color: 'text-purple-400 font-semibold' },
          { text: 'webConfig = defineWebConfig({', color: 'text-zinc-200' },
        ],
      },
      {
        num: '03',
        tokens: [
          { text: '  target: ', color: 'text-sky-300' },
          { text: "'enterprise-scale'", color: 'text-emerald-400' },
          { text: ',', color: 'text-zinc-400' },
        ],
      },
      {
        num: '04',
        tokens: [
          { text: '  runtime: ', color: 'text-sky-300' },
          { text: 'edgeRuntime({ region: ', color: 'text-zinc-200' },
          { text: "'global-mesh'", color: 'text-emerald-400' },
          { text: ' }),', color: 'text-zinc-200' },
        ],
      },
      {
        num: '05',
        tokens: [
          { text: '  performance: { ', color: 'text-purple-300' },
          { text: "lighthouse: 100, lcp: '<1.2s', cls: 0.00", color: 'text-amber-400' },
          { text: ' },', color: 'text-zinc-200' },
        ],
      },
      {
        num: '06',
        tokens: [
          { text: '  security: { ', color: 'text-purple-300' },
          { text: "ssl: 'TLS 1.3', ddosShield: true", color: 'text-emerald-400' },
          { text: ' },', color: 'text-zinc-200' },
        ],
      },
      {
        num: '07',
        tokens: [{ text: '})', color: 'text-zinc-200' }],
      },
    ],
  },

  // 2. Custom Development / Next.js
  constellation: {
    fileName: 'app/services/page.tsx',
    language: 'React 19 / Server',
    badge: 'Next.js 15 App Router',
    lines: [
      {
        num: '01',
        tokens: [
          { text: 'import ', color: 'text-purple-400 font-semibold' },
          { text: '{ Suspense } ', color: 'text-sky-400' },
          { text: 'from ', color: 'text-purple-400 font-semibold' },
          { text: "'react'", color: 'text-emerald-400' },
        ],
      },
      {
        num: '02',
        tokens: [
          { text: 'import ', color: 'text-purple-400 font-semibold' },
          { text: '{ HighPerformanceMesh } ', color: 'text-sky-300' },
          { text: 'from ', color: 'text-purple-400 font-semibold' },
          { text: "'@/components'", color: 'text-emerald-400' },
        ],
      },
      {
        num: '03',
        tokens: [
          { text: 'export const ', color: 'text-purple-400 font-semibold' },
          { text: 'runtime = ', color: 'text-zinc-300' },
          { text: "'edge'", color: 'text-emerald-400' },
          { text: '; export const revalidate = 3600;', color: 'text-zinc-400' },
        ],
      },
      {
        num: '04',
        tokens: [
          { text: 'export default async function ', color: 'text-purple-400 font-semibold' },
          { text: 'Page() {', color: 'text-sky-300 font-bold' },
        ],
      },
      {
        num: '05',
        tokens: [
          { text: '  const ', color: 'text-purple-400' },
          { text: 'dataStream = ', color: 'text-zinc-200' },
          { text: 'await ', color: 'text-purple-400 font-semibold' },
          { text: 'fetchCustomDataMesh()', color: 'text-sky-300' },
        ],
      },
      {
        num: '06',
        tokens: [
          { text: '  return (', color: 'text-zinc-300' },
        ],
      },
      {
        num: '07',
        tokens: [
          { text: '    <Suspense fallback={<SkeletonLoader />}>', color: 'text-sky-400' },
        ],
      },
      {
        num: '08',
        tokens: [
          { text: '      <HighPerformanceMesh payload={dataStream} />', color: 'text-emerald-300' },
        ],
      },
      {
        num: '09',
        tokens: [
          { text: '    </Suspense>', color: 'text-sky-400' },
        ],
      },
      {
        num: '10',
        tokens: [
          { text: '  )', color: 'text-zinc-300' },
        ],
      },
      {
        num: '11',
        tokens: [
          { text: '}', color: 'text-zinc-300' },
        ],
      },
    ],
  },

  // 3. Maintenance
  orbital: {
    fileName: 'telemetry-monitor.sh',
    language: 'DevOps / Bash',
    badge: '99.98% SLA Monitoring',
    lines: [
      {
        num: '01',
        tokens: [
          { text: '#!/bin/bash - Frame Cipher 24/7 Shield Engine', color: 'text-zinc-500 italic' },
        ],
      },
      {
        num: '02',
        tokens: [
          { text: '[INIT] ', color: 'text-purple-400 font-bold' },
          { text: 'Probing global edge nodes...', color: 'text-zinc-300' },
        ],
      },
      {
        num: '03',
        tokens: [
          { text: '[STATUS: 200 OK] ', color: 'text-emerald-400 font-bold' },
          { text: 'Uptime: 99.98% | Latency: 12ms', color: 'text-emerald-300' },
        ],
      },
      {
        num: '04',
        tokens: [
          { text: '[SECURITY] ', color: 'text-purple-400 font-bold' },
          { text: 'TLS 1.3 Active | SSL Certified Valid', color: 'text-sky-300' },
        ],
      },
      {
        num: '05',
        tokens: [
          { text: '[FIREWALL] ', color: 'text-amber-400 font-bold' },
          { text: 'Threats Blocked: 2,140 | 0 Zero-Day CVE', color: 'text-zinc-300' },
        ],
      },
      {
        num: '06',
        tokens: [
          { text: '[BACKUP] ', color: 'text-purple-400 font-bold' },
          { text: 'Daily Snapshot verified: s3://vault-encrypted', color: 'text-emerald-400' },
        ],
      },
      {
        num: '07',
        tokens: [
          { text: '[HEALTH] ', color: 'text-emerald-400 font-bold' },
          { text: 'All microservices & databases OPERATIONAL', color: 'text-zinc-200' },
        ],
      },
    ],
  },

  // 4. Ecommerce Website
  'commerce-loop': {
    fileName: 'checkout-pipeline.ts',
    language: 'TypeScript',
    badge: 'High-Volume Orders',
    lines: [
      {
        num: '01',
        tokens: [
          { text: 'import ', color: 'text-purple-400 font-semibold' },
          { text: '{ processCheckout, lockInventory } ', color: 'text-zinc-200' },
          { text: 'from ', color: 'text-purple-400 font-semibold' },
          { text: "'@store/engine'", color: 'text-emerald-400' },
        ],
      },
      {
        num: '02',
        tokens: [
          { text: 'export async function ', color: 'text-purple-400 font-semibold' },
          { text: 'executeCartOrder(cartId: string) {', color: 'text-sky-300 font-bold' },
        ],
      },
      {
        num: '03',
        tokens: [
          { text: '  const ', color: 'text-purple-400' },
          { text: 'reserved = ', color: 'text-zinc-200' },
          { text: 'await ', color: 'text-purple-400 font-semibold' },
          { text: 'lockInventory(cartId, { ttl: 120 })', color: 'text-sky-300' },
        ],
      },
      {
        num: '04',
        tokens: [
          { text: '  const ', color: 'text-purple-400' },
          { text: 'session = ', color: 'text-zinc-200' },
          { text: 'await ', color: 'text-purple-400 font-semibold' },
          { text: 'processCheckout({', color: 'text-zinc-200' },
        ],
      },
      {
        num: '05',
        tokens: [
          { text: '    gateways: [', color: 'text-zinc-300' },
          { text: "'Stripe', 'bKash', 'SSLCommerz', 'ApplePay'", color: 'text-emerald-400' },
          { text: '],', color: 'text-zinc-300' },
        ],
      },
      {
        num: '06',
        tokens: [
          { text: '    fraudShield: { velocity: ', color: 'text-purple-300' },
          { text: "'PROTECTED'", color: 'text-amber-400 font-semibold' },
          { text: ' },', color: 'text-zinc-300' },
        ],
      },
      {
        num: '07',
        tokens: [
          { text: '  })', color: 'text-zinc-200' },
        ],
      },
      {
        num: '08',
        tokens: [
          { text: '  return session.confirm({ instantDelivery: true })', color: 'text-emerald-300' },
        ],
      },
      {
        num: '09',
        tokens: [{ text: '}', color: 'text-zinc-200' }],
      },
    ],
  },

  // 5. Landing Pages
  'target-beam': {
    fileName: 'conversion-funnel.ts',
    language: 'Optimization / TS',
    badge: '+38.4% CVR Lift',
    lines: [
      {
        num: '01',
        tokens: [
          { text: 'import ', color: 'text-purple-400 font-semibold' },
          { text: '{ ABExperiment, trackConversion } ', color: 'text-zinc-200' },
          { text: 'from ', color: 'text-purple-400 font-semibold' },
          { text: "'@growth/telemetry'", color: 'text-emerald-400' },
        ],
      },
      {
        num: '02',
        tokens: [
          { text: 'export const ', color: 'text-purple-400 font-semibold' },
          { text: 'heroFunnel = new ABExperiment({', color: 'text-zinc-200' },
        ],
      },
      {
        num: '03',
        tokens: [
          { text: '  name: ', color: 'text-sky-300' },
          { text: "'q4_high_intent_lead_hero'", color: 'text-emerald-400' },
          { text: ',', color: 'text-zinc-400' },
        ],
      },
      {
        num: '04',
        tokens: [
          { text: '  variants: [', color: 'text-zinc-300' },
          { text: "'variant_authority', 'variant_direct_cta'", color: 'text-amber-400' },
          { text: '],', color: 'text-zinc-300' },
        ],
      },
      {
        num: '05',
        tokens: [
          { text: '  telemetry: { ', color: 'text-purple-300' },
          { text: "liftCVR: '+38.4%', bounceRate: '16.2%'", color: 'text-emerald-400 font-bold' },
          { text: ' },', color: 'text-zinc-300' },
        ],
      },
      {
        num: '06',
        tokens: [
          { text: '})', color: 'text-zinc-200' },
        ],
      },
      {
        num: '07',
        tokens: [
          { text: "heroFunnel.onLeadSubmit((uid) => trackConversion('won', uid))", color: 'text-sky-300' },
        ],
      },
    ],
  },

  // 6. UI/UX Design
  'fluid-polyhedron': {
    fileName: 'design-tokens.ts',
    language: 'Figma Tokens / CSS',
    badge: 'Design System 2.0',
    lines: [
      {
        num: '01',
        tokens: [
          { text: 'export const ', color: 'text-purple-400 font-semibold' },
          { text: 'FrameCipherTokens = {', color: 'text-zinc-200' },
        ],
      },
      {
        num: '02',
        tokens: [
          { text: '  colors: { ', color: 'text-sky-300' },
          { text: "surface: '#09090B', neon: '#C084FC', emerald: '#34D399'", color: 'text-emerald-400' },
          { text: ' },', color: 'text-zinc-300' },
        ],
      },
      {
        num: '03',
        tokens: [
          { text: '  typography: { ', color: 'text-sky-300' },
          { text: "fontFamily: 'Geist', lineLead: 0.88", color: 'text-amber-400' },
          { text: ' },', color: 'text-zinc-300' },
        ],
      },
      {
        num: '04',
        tokens: [
          { text: '  interaction: {', color: 'text-purple-300' },
        ],
      },
      {
        num: '05',
        tokens: [
          { text: '    spring: ', color: 'text-zinc-300' },
          { text: "'cubic-bezier(0.16, 1, 0.3, 1)'", color: 'text-emerald-400' },
          { text: ',', color: 'text-zinc-400' },
        ],
      },
      {
        num: '06',
        tokens: [
          { text: '    wcagAccessibility: ', color: 'text-zinc-300' },
          { text: "'AAA_COMPLIANT'", color: 'text-purple-400 font-bold' },
          { text: ',', color: 'text-zinc-400' },
        ],
      },
      {
        num: '07',
        tokens: [
          { text: '  },', color: 'text-zinc-300' },
        ],
      },
      {
        num: '08',
        tokens: [{ text: '}', color: 'text-zinc-200' }],
      },
    ],
  },

  // 7. WordPress
  'modular-grid': {
    fileName: 'wordpress.php',
    language: 'PHP / WP-GraphQL',
    badge: 'Headless WP',
    lines: [
      {
        num: '01',
        tokens: [
          { text: '<?php', color: 'text-amber-400 font-bold' },
          { text: ' // Headless WP Engine', color: 'text-zinc-500 italic' },
        ],
      },
      {
        num: '02',
        tokens: [
          { text: 'add_action', color: 'text-purple-400 font-semibold' },
          { text: "('graphql_register_types', function () {", color: 'text-zinc-200' },
        ],
      },
      {
        num: '03',
        tokens: [
          { text: '  register_graphql_field', color: 'text-sky-300' },
          { text: "('RootQuery', 'optimizedCatalog', [", color: 'text-zinc-200' },
        ],
      },
      {
        num: '04',
        tokens: [
          { text: "    'type' => ", color: 'text-zinc-300' },
          { text: "'CatalogConnection'", color: 'text-emerald-400' },
          { text: ',', color: 'text-zinc-400' },
        ],
      },
      {
        num: '05',
        tokens: [
          { text: "    'resolve' => ", color: 'text-zinc-300' },
          { text: 'function ($root, $args, $context) {', color: 'text-purple-300' },
        ],
      },
      {
        num: '06',
        tokens: [
          { text: "      return wp_cache_get_or_set('catalog_v2', $fn, 86400);", color: 'text-emerald-300' },
        ],
      },
      {
        num: '07',
        tokens: [
          { text: '    }', color: 'text-zinc-200' },
        ],
      },
      {
        num: '08',
        tokens: [
          { text: '  ]);', color: 'text-zinc-200' },
        ],
      },
      {
        num: '09',
        tokens: [{ text: '});', color: 'text-zinc-200' }],
      },
    ],
  },

  // 8. Shopify
  'speed-stream': {
    fileName: 'shopify-storefront.liquid',
    language: 'Shopify Liquid',
    badge: 'Sub-second Hydration',
    lines: [
      {
        num: '01',
        tokens: [
          { text: '{% comment %} Shopify Fast Engine {% endcomment %}', color: 'text-zinc-500 italic' },
        ],
      },
      {
        num: '02',
        tokens: [
          { text: '<div class="cyber-product-grid" ', color: 'text-sky-300' },
          { text: 'data-speed="instant">', color: 'text-purple-400' },
        ],
      },
      {
        num: '03',
        tokens: [
          { text: '  {% for ', color: 'text-purple-400 font-semibold' },
          { text: 'product in collections.featured.products limit: 6 %}', color: 'text-zinc-200' },
        ],
      },
      {
        num: '04',
        tokens: [
          { text: '    <article class="product-card" id="{{ product.id }}">', color: 'text-sky-300' },
        ],
      },
      {
        num: '05',
        tokens: [
          { text: '      {{ product.featured_image | image_url: width: 800 | image_tag }}', color: 'text-emerald-400' },
        ],
      },
      {
        num: '06',
        tokens: [
          { text: '      <span class="price">{{ product.price | money }}</span>', color: 'text-amber-400' },
        ],
      },
      {
        num: '07',
        tokens: [
          { text: '      <button class="cart-btn" data-variant="{{ product.variants[0].id }}">', color: 'text-sky-300' },
        ],
      },
      {
        num: '08',
        tokens: [
          { text: '        {{ "products.product.add_to_cart" | t }}', color: 'text-emerald-300' },
        ],
      },
      {
        num: '09',
        tokens: [
          { text: '      </button>', color: 'text-sky-300' },
        ],
      },
      {
        num: '10',
        tokens: [
          { text: '  {% endfor %}', color: 'text-purple-400 font-semibold' },
        ],
      },
    ],
  },

  // 9. Webflow
  'bezier-wave': {
    fileName: 'webflow-bridge.js',
    language: 'Webflow API v2',
    badge: 'Client-First Architecture',
    lines: [
      {
        num: '01',
        tokens: [
          { text: 'import ', color: 'text-purple-400 font-semibold' },
          { text: '{ WebflowClient } ', color: 'text-zinc-200' },
          { text: 'from ', color: 'text-purple-400 font-semibold' },
          { text: "'webflow-api'", color: 'text-emerald-400' },
        ],
      },
      {
        num: '02',
        tokens: [
          { text: 'const ', color: 'text-purple-400 font-semibold' },
          { text: 'webflow = new WebflowClient({ token: process.env.WF_TOKEN })', color: 'text-zinc-200' },
        ],
      },
      {
        num: '03',
        tokens: [
          { text: 'export async function ', color: 'text-purple-400 font-semibold' },
          { text: 'publishDynamicCMS(items) {', color: 'text-sky-300 font-bold' },
        ],
      },
      {
        num: '04',
        tokens: [
          { text: '  const ', color: 'text-purple-400' },
          { text: 'sync = ', color: 'text-zinc-200' },
          { text: 'await ', color: 'text-purple-400 font-semibold' },
          { text: 'webflow.collections.items.publish({', color: 'text-sky-300' },
        ],
      },
      {
        num: '05',
        tokens: [
          { text: "    collectionId: 'fc_services_collection',", color: 'text-amber-400' },
        ],
      },
      {
        num: '06',
        tokens: [
          { text: '    livePublish: true, autoCompressAssets: true', color: 'text-emerald-400' },
        ],
      },
      {
        num: '07',
        tokens: [
          { text: '  })', color: 'text-zinc-200' },
        ],
      },
      {
        num: '08',
        tokens: [
          { text: '  return { status: 200, syncedItems: items.length }', color: 'text-emerald-300' },
        ],
      },
      {
        num: '09',
        tokens: [{ text: '}', color: 'text-zinc-200' }],
      },
    ],
  },

  // 10. Magento
  'enterprise-mesh': {
    fileName: 'etc/di.xml',
    language: 'XML / Magento 2',
    badge: 'Adobe Commerce Enterprise',
    lines: [
      {
        num: '01',
        tokens: [
          { text: '<?xml version="1.0"?>', color: 'text-amber-400 font-bold' },
        ],
      },
      {
        num: '02',
        tokens: [
          { text: '<config xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">', color: 'text-sky-300' },
        ],
      },
      {
        num: '03',
        tokens: [
          { text: '  <preference ', color: 'text-purple-400 font-semibold' },
          { text: 'for="Magento\\Catalog\\Api\\ProductRepositoryInterface"', color: 'text-emerald-400' },
        ],
      },
      {
        num: '04',
        tokens: [
          { text: '              type="FrameCipher\\Catalog\\Model\\HighSpeedRepository" />', color: 'text-purple-300' },
        ],
      },
      {
        num: '05',
        tokens: [
          { text: '  <type ', color: 'text-purple-400 font-semibold' },
          { text: 'name="Magento\\Checkout\\Model\\PaymentInformationManagement">', color: 'text-sky-300' },
        ],
      },
      {
        num: '06',
        tokens: [
          { text: '    <plugin ', color: 'text-purple-400' },
          { text: 'name="cyber_fraud_shield" type="FrameCipher\\Security\\Plugin" />', color: 'text-amber-400' },
        ],
      },
      {
        num: '07',
        tokens: [
          { text: '  </type>', color: 'text-sky-300' },
        ],
      },
      {
        num: '08',
        tokens: [
          { text: '</config>', color: 'text-sky-300' },
        ],
      },
    ],
  },

  // 11. Wix
  'geo-drift': {
    fileName: 'wix-backend.jsw',
    language: 'Velo Full-Stack',
    badge: 'Wix Studio Architecture',
    lines: [
      {
        num: '01',
        tokens: [
          { text: 'import ', color: 'text-purple-400 font-semibold' },
          { text: 'wixData ', color: 'text-zinc-200' },
          { text: 'from ', color: 'text-purple-400 font-semibold' },
          { text: "'wix-data'", color: 'text-emerald-400' },
        ],
      },
      {
        num: '02',
        tokens: [
          { text: 'import ', color: 'text-purple-400 font-semibold' },
          { text: '{ ok, serverError } ', color: 'text-zinc-200' },
          { text: 'from ', color: 'text-purple-400 font-semibold' },
          { text: "'wix-http-functions'", color: 'text-emerald-400' },
        ],
      },
      {
        num: '03',
        tokens: [
          { text: 'export async function ', color: 'text-purple-400 font-semibold' },
          { text: 'get_livePortfolio(request) {', color: 'text-sky-300 font-bold' },
        ],
      },
      {
        num: '04',
        tokens: [
          { text: '  try {', color: 'text-zinc-300' },
        ],
      },
      {
        num: '05',
        tokens: [
          { text: '    const ', color: 'text-purple-400' },
          { text: 'dataset = ', color: 'text-zinc-200' },
          { text: 'await ', color: 'text-purple-400 font-semibold' },
          { text: "wixData.query('Projects').eq('status', 'LIVE').find()", color: 'text-emerald-300' },
        ],
      },
      {
        num: '06',
        tokens: [
          { text: '    return ok({ body: { items: dataset.items, count: dataset.length } })', color: 'text-amber-400' },
        ],
      },
      {
        num: '07',
        tokens: [
          { text: '  } catch (err) {', color: 'text-zinc-300' },
        ],
      },
      {
        num: '08',
        tokens: [
          { text: '    return serverError({ error: err.message })', color: 'text-red-400' },
        ],
      },
      {
        num: '09',
        tokens: [{ text: '  }', color: 'text-zinc-300' }],
      },
      {
        num: '10',
        tokens: [{ text: '}', color: 'text-zinc-200' }],
      },
    ],
  },

  // 12. Redesign
  'refraction-scan': {
    fileName: 'modernization-git.diff',
    language: 'Git Diff / Rewrite',
    badge: '94% Bundle Reduction',
    lines: [
      {
        num: '01',
        tokens: [
          { text: '--- a/legacy-site/old-app.js (2018 Legacy Monolith)', color: 'text-red-400/80 font-mono' },
        ],
      },
      {
        num: '02',
        tokens: [
          { text: '+++ b/next-site/page.tsx (2026 Next.js Architecture)', color: 'text-emerald-400 font-mono' },
        ],
      },
      {
        num: '03',
        tokens: [
          { text: '- <script src="jquery-1.12.4.min.js"></script>', color: 'text-red-400 bg-red-500/10' },
        ],
      },
      {
        num: '04',
        tokens: [
          { text: '- <script src="bloated-plugins.js"></script> // 3.8MB Payload', color: 'text-red-400 bg-red-500/10' },
        ],
      },
      {
        num: '05',
        tokens: [
          { text: '+ import { ServerComponent } from "next/server"', color: 'text-emerald-400 bg-emerald-500/10 font-bold' },
        ],
      },
      {
        num: '06',
        tokens: [
          { text: '+ import { EdgeCache } from "@framecipher/speed" // 38KB Gzip', color: 'text-emerald-400 bg-emerald-500/10 font-bold' },
        ],
      },
      {
        num: '07',
        tokens: [
          { text: '- // Google PageSpeed: 24/100 (Failed Core Web Vitals)', color: 'text-red-400/80' },
        ],
      },
      {
        num: '08',
        tokens: [
          { text: '+ // Google PageSpeed: 100/100 (Sub-second Global LCP)', color: 'text-emerald-400 font-bold' },
        ],
      },
    ],
  },

  // 13. Business Website
  'corporate-matrix': {
    fileName: 'corporate-portal.ts',
    language: 'TypeScript',
    badge: 'Enterprise Authority',
    lines: [
      {
        num: '01',
        tokens: [
          { text: 'import ', color: 'text-purple-400 font-semibold' },
          { text: '{ createCorporateEngine } ', color: 'text-zinc-200' },
          { text: 'from ', color: 'text-purple-400 font-semibold' },
          { text: "'@framecipher/business'", color: 'text-emerald-400' },
        ],
      },
      {
        num: '02',
        tokens: [
          { text: 'export async function ', color: 'text-purple-400 font-semibold' },
          { text: 'deployCorporatePortal() {', color: 'text-sky-300 font-bold' },
        ],
      },
      {
        num: '03',
        tokens: [
          { text: '  const ', color: 'text-purple-400' },
          { text: 'portal = ', color: 'text-zinc-200' },
          { text: 'await ', color: 'text-purple-400 font-semibold' },
          { text: 'createCorporateEngine({', color: 'text-zinc-200' },
        ],
      },
      {
        num: '04',
        tokens: [
          { text: '    brandTrust: ', color: 'text-sky-300' },
          { text: "'High-Authority Industry Leader'", color: 'text-emerald-400' },
          { text: ',', color: 'text-zinc-400' },
        ],
      },
      {
        num: '05',
        tokens: [
          { text: '    leadCapture: { multiStep: true, crmSync: ', color: 'text-purple-300' },
          { text: "'HubSpot + Telegram'", color: 'text-amber-400' },
          { text: ' },', color: 'text-zinc-300' },
        ],
      },
      {
        num: '06',
        tokens: [
          { text: '    uptimeSLA: ', color: 'text-sky-300' },
          { text: "'99.99% Guaranteed'", color: 'text-emerald-400 font-bold' },
          { text: ',', color: 'text-zinc-400' },
        ],
      },
      {
        num: '07',
        tokens: [
          { text: '  })', color: 'text-zinc-200' },
        ],
      },
      {
        num: '08',
        tokens: [
          { text: '  return portal.publishProduction()', color: 'text-emerald-300' },
        ],
      },
      {
        num: '09',
        tokens: [{ text: '}', color: 'text-zinc-200' }],
      },
    ],
  },
}

export function Ambient3DCanvas({
  mode = 'constellation',
  className = '',
  opacity = 1.0,
}: Ambient3DCanvasProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [tilt, setTilt] = useState({ rx: 0, ry: 0 })
  const [activeLine, setActiveLine] = useState(0)

  const snippet = SNIPPET_DATA[mode] || SNIPPET_DATA.constellation

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    let isVisible = true
    let intervalId: NodeJS.Timeout

    const handleMouseMove = (e: MouseEvent) => {
      if (!isVisible) return
      const rect = container.getBoundingClientRect()
      const x = (e.clientX - rect.left) / rect.width - 0.5
      const y = (e.clientY - rect.top) / rect.height - 0.5
      // Smooth 3D tilt
      setTilt({
        rx: -y * 14,
        ry: x * 18,
      })
    }

    const handleMouseLeave = () => {
      setTilt({ rx: 0, ry: 0 })
    }

    // Interval to animate active code scanning cursor
    intervalId = setInterval(() => {
      setActiveLine((prev) => (prev + 1) % snippet.lines.length)
    }, 1800)

    window.addEventListener('mousemove', handleMouseMove)
    container.addEventListener('mouseleave', handleMouseLeave)

    const observer = new IntersectionObserver(
      ([entry]) => {
        isVisible = entry.isIntersecting
      },
      { threshold: 0.1 }
    )
    observer.observe(container)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      container.removeEventListener('mouseleave', handleMouseLeave)
      clearInterval(intervalId)
      observer.disconnect()
    }
  }, [snippet.lines.length])

  return (
    <div
      ref={containerRef}
      className={`relative flex items-center justify-center pointer-events-none select-none transition-transform duration-300 ease-out w-full max-w-[94vw] sm:max-w-[560px] md:max-w-[620px] lg:max-w-[660px] ${className}`}
      style={{
        opacity,
        perspective: '1200px',
      }}
    >
      {/* 1. Deep Atmospheric Neon Nebula Glow */}
      <div
        className="pointer-events-none absolute -inset-10 -z-10 rounded-full bg-gradient-to-tr from-purple-600/30 via-indigo-600/20 to-transparent blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 h-[360px] w-[360px] rounded-full bg-purple-500/20 blur-[90px]"
        aria-hidden="true"
      />

      {/* 2. Floating Cyber Glass IDE Terminal Window */}
      <div
        className="relative w-full max-w-[620px] rounded-2xl border border-purple-500/30 bg-[#0B0814]/90 p-1 shadow-[0_0_50px_rgba(168,85,247,0.22),inset_0_1px_1px_rgba(255,255,255,0.12)] backdrop-blur-2xl transition-transform duration-200 ease-out"
        style={{
          transform: `rotateX(${tilt.rx}deg) rotateY(${tilt.ry}deg)`,
          transformStyle: 'preserve-3d',
        }}
      >
        {/* Terminal Header Bar */}
        <div 
          className="flex items-center justify-between border-b border-white/10 bg-white/[0.03] px-3 sm:px-4 py-2.5 sm:py-3 rounded-t-xl gap-2 overflow-hidden flex-nowrap select-none"
          style={{ whiteSpace: 'nowrap', wordBreak: 'keep-all' }}
        >
          {/* Mac/Cyber Traffic Lights */}
          <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
            <span className="h-2.5 w-2.5 sm:h-3 sm:w-3 rounded-full bg-red-500/80 shadow-[0_0_8px_rgba(239,68,68,0.6)] shrink-0" />
            <span className="h-2.5 w-2.5 sm:h-3 sm:w-3 rounded-full bg-amber-500/80 shadow-[0_0_8px_rgba(245,158,11,0.6)] shrink-0" />
            <span className="h-2.5 w-2.5 sm:h-3 sm:w-3 rounded-full bg-emerald-500/80 shadow-[0_0_8px_rgba(16,185,129,0.6)] shrink-0" />
          </div>

          {/* Active File Tab */}
          <div 
            className="inline-flex items-center gap-1.5 rounded-md border border-purple-500/30 bg-purple-500/10 px-2 sm:px-3 py-1 font-mono text-[10px] sm:text-xs font-semibold text-purple-200 whitespace-nowrap shrink-0 select-none"
            style={{ whiteSpace: 'nowrap', wordBreak: 'keep-all' }}
          >
            <span className="text-purple-400 shrink-0">{'</>'}</span>
            <span className="whitespace-nowrap shrink-0 select-none" style={{ whiteSpace: 'nowrap', wordBreak: 'keep-all' }}>{snippet.fileName}</span>
          </div>

          {/* Technology & Git Status */}
          <div 
            className="flex items-center gap-2 font-mono text-[10px] text-zinc-400 shrink-0 select-none"
            style={{ whiteSpace: 'nowrap', wordBreak: 'keep-all' }}
          >
            <span 
              className="hidden sm:inline-flex items-center rounded-full bg-emerald-500/10 px-2 py-0.5 text-emerald-300 border border-emerald-500/20 whitespace-nowrap shrink-0"
              style={{ whiteSpace: 'nowrap', wordBreak: 'keep-all' }}
            >
              {snippet.badge}
            </span>
            <span 
              className="inline-flex items-center gap-1 text-purple-300 whitespace-nowrap shrink-0"
              style={{ whiteSpace: 'nowrap', wordBreak: 'keep-all' }}
            >
              <span className="h-1.5 w-1.5 rounded-full bg-purple-400 animate-pulse shrink-0" />
              main
            </span>
          </div>
        </div>

        {/* Code Lines Body */}
        <div className="p-4 sm:p-5 font-mono text-xs sm:text-[13px] leading-relaxed text-zinc-300 overflow-hidden">
          {snippet.lines.map((line, idx) => {
            const isScanning = activeLine === idx
            return (
              <div
                key={line.num}
                className={`flex items-start gap-3 rounded-md px-2 py-0.5 transition-colors duration-300 ${
                  isScanning ? 'bg-purple-500/15 border-l-2 border-purple-400' : 'border-l-2 border-transparent'
                }`}
              >
                {/* Line Number */}
                <span className="select-none text-zinc-600 font-medium w-5 text-right flex-shrink-0">
                  {line.num}
                </span>

                {/* Code Tokens */}
                <div className="flex-1 font-mono text-xs sm:text-[13px] leading-relaxed whitespace-pre-wrap break-words">
                  {line.tokens.map((token, tIdx) => (
                    <span key={tIdx} className={token.color}>
                      {token.text}
                    </span>
                  ))}
                  {isScanning && (
                    <span className="inline-block h-3.5 w-1.5 bg-purple-400 ml-1 animate-pulse align-middle" />
                  )}
                </div>
              </div>
            )
          })}
        </div>

        {/* Terminal Bottom Status Bar - Ultra Robust Zero-Wrap Layout */}
        <div 
          className="flex items-center justify-between border-t border-white/5 bg-white/[0.02] px-3 sm:px-4 py-2 rounded-b-xl text-[9px] sm:text-[10px] font-mono text-zinc-400 gap-2 whitespace-nowrap flex-nowrap overflow-hidden select-none"
          style={{ whiteSpace: 'nowrap', wordBreak: 'keep-all' }}
        >
          <div className="flex items-center gap-2 whitespace-nowrap shrink-0 flex-nowrap" style={{ whiteSpace: 'nowrap', wordBreak: 'keep-all' }}>
            <span className="flex items-center gap-1.5 whitespace-nowrap shrink-0" style={{ whiteSpace: 'nowrap', wordBreak: 'keep-all' }}>
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_6px_#34D399] shrink-0" />
              <span className="whitespace-nowrap shrink-0 font-medium text-emerald-400/90" style={{ whiteSpace: 'nowrap', wordBreak: 'keep-all' }}>0 Errors</span>
            </span>
            <span className="text-zinc-700 shrink-0">|</span>
            <span className="whitespace-nowrap shrink-0 text-zinc-400" style={{ whiteSpace: 'nowrap', wordBreak: 'keep-all' }}>UTF-8</span>
          </div>
          <div className="flex items-center gap-1 text-purple-300/80 font-medium whitespace-nowrap shrink-0" style={{ whiteSpace: 'nowrap', wordBreak: 'keep-all' }}>
            <span className="hidden sm:inline text-zinc-500 whitespace-nowrap" style={{ whiteSpace: 'nowrap', wordBreak: 'keep-all' }}>Studio ·</span>
            <span className="whitespace-nowrap shrink-0" style={{ whiteSpace: 'nowrap', wordBreak: 'keep-all' }}>{snippet.language}</span>
          </div>
        </div>
      </div>
    </div>
  )
}
