'use client'

import Link from 'next/link'
import { PageHero, PosterButton } from '../../../Kinetic'

function CheckIcon({ className = "h-4 w-4 shrink-0 text-frame-accent" }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 20 20" fill="none" className={className}>
      <path d="m4.5 10 3.5 3.5 7.5-7.5" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

const contextScenarios = [
  {
    category: "Marketplace Listings",
    badge: "Amazon & Daraz Spec",
    title: "Pure White Main Images",
    description: "Flawless pure white backdrop (RGB 255,255,255) with 85%+ product frame fill, shadow retention, and zero clipping artifacts for algorithmic compliance.",
    metric: "100% Platform Compliant"
  },
  {
    category: "Fashion & Apparel",
    badge: "Fit & Drape",
    title: "Model & Ghost Mannequin",
    description: "Captures true silhouette, fabric weight, natural drape, and textured seams through calibrated on-model and flat-lay invisible mannequin styling.",
    metric: "True-to-Life Fit"
  },
  {
    category: "Beauty & Cosmetics",
    badge: "Packaging & Texture",
    title: "Formula & Finish Details",
    description: "Macro lighting that accentuates formula viscosities, glass clarity, embossed typography, and tamper seals without blown-out reflections.",
    metric: "Macro Texture Clarity"
  },
  {
    category: "Furniture & Decor",
    badge: "Scale & Context",
    title: "Spatial Environmental Context",
    description: "Staged lifestyle environments with realistic scale references, ambient room lighting, and natural depth of field showing real-world presence.",
    metric: "Proportion & Ambiance"
  },
  {
    category: "Technical & Hardware",
    badge: "Functional Specs",
    title: "Port & Control Close-Ups",
    description: "Precision lighting revealing ports, milled aluminum finishes, tactile buttons, OLED displays, and internal engineering with zero glare.",
    metric: "Technical Precision"
  },
  {
    category: "Brand Campaigns",
    badge: "Editorial Direction",
    title: "Creative Art Direction",
    description: "Expressive editorial setups with custom-built set pieces, dramatic lighting, and brand color harmonies built for social virality and ads.",
    metric: "High Click-Through Focus"
  }
]

export default function Hero({ service }) {
  const title = service?.h1 || "Product Photography Service in Bangladesh"
  const subtitle = service?.shortDesc || "A product photo has to do more than look good at thumbnail size. It needs to help a buyer understand what they are actually considering before they can touch, hold, or inspect it in person."

  return (
    <div className="bg-frame-bg text-frame-fg">
      {/* BREADCRUMB */}
      <nav aria-label="Breadcrumb" className="border-b border-frame-border/60 bg-frame-bg/80 px-4 py-3 text-xs font-semibold uppercase tracking-wider text-frame-muted-fg md:px-8">
        <div className="mx-auto flex max-w-[95vw] items-center gap-2 overflow-x-auto whitespace-nowrap">
          <Link href="/" className="transition hover:text-frame-fg">Home</Link>
          <span className="text-frame-border">/</span>
          <Link href="/services" className="transition hover:text-frame-fg">Services</Link>
          <span className="text-frame-border">/</span>
          <Link href="/services/content-creation" className="transition hover:text-frame-fg">Content Creation</Link>
          <span className="text-frame-border">/</span>
          <span className="text-frame-accent">Product Photography</span>
        </div>
      </nav>

      {/* CANONICAL PAGE HERO */}
      <PageHero
        eyebrow="Commercial Studio & Catalog Production"
        meta="Amazon & Daraz Spec • Shopify DTC • Calibrated Color • Macro Detail"
        number="08"
        title={title}
        actions={
          <>
            <PosterButton href="/contact">
              Get Free Consultation &rarr;
            </PosterButton>
            <PosterButton href="#portfolio" variant="outline">
              View Product Photography Work &rarr;
            </PosterButton>
          </>
        }
      >
        <span className="block text-balance">
          {subtitle}
        </span>
        <span className="mt-4 block text-sm sm:text-base md:text-lg font-normal text-frame-muted-fg leading-relaxed max-w-3xl mx-auto text-balance">
          Framecipher provides product photography service for ecommerce brands, marketplaces, retailers, manufacturers, and product businesses in Bangladesh and international markets. We create studio, white-background, lifestyle, detail, multi-angle, and platform-ready product images planned around where and how they will be used.
        </span>
      </PageHero>

      {/* STUDIO SETUP HERO VISUAL CALLOUT */}
      <section className="border-b-2 border-frame-border bg-frame-muted/30 px-4 py-12 md:px-8 md:py-16">
        <div className="mx-auto max-w-[95vw]">
          <div className="border-2 border-frame-border bg-frame-bg p-6 md:p-10 shadow-lg">
            
            {/* STATUS HEADER */}
            <div className="flex flex-wrap items-center justify-between gap-4 border-b-2 border-frame-border pb-4 mb-6">
              <div className="flex items-center gap-3">
                <span className="h-3 w-3 bg-frame-accent animate-pulse" />
                <span className="font-heading text-base md:text-lg font-bold uppercase tracking-tight text-frame-fg">
                  Professional Studio Setup & Production Grid
                </span>
              </div>
              <div className="flex items-center gap-3 font-mono text-xs text-frame-muted-fg">
                <span className="border border-frame-border px-2.5 py-1 bg-frame-muted/20">
                  Daylight 5600K Strobes
                </span>
                <span className="border border-frame-accent text-frame-accent px-2.5 py-1 font-bold">
                  RGB [255, 255, 255] Pure White Cyc
                </span>
              </div>
            </div>

            {/* TECHNICAL RIG & CAMERA BANNER */}
            <div className="grid gap-6 md:grid-cols-4 border-2 border-frame-border bg-black/95 p-6 text-white font-mono text-xs">
              <div className="border-b md:border-b-0 md:border-r border-white/20 pb-4 md:pb-0 md:pr-4 space-y-1">
                <span className="text-[10px] uppercase tracking-wider text-frame-accent block">Optical Sensor</span>
                <p className="font-bold text-sm text-white">45MP Full-Frame RAW</p>
                <p className="text-white/70 text-[11px]">14-Bit Uncompressed Color Depth</p>
              </div>

              <div className="border-b md:border-b-0 md:border-r border-white/20 pb-4 md:pb-0 md:pr-4 space-y-1">
                <span className="text-[10px] uppercase tracking-wider text-frame-accent block">Lighting Configuration</span>
                <p className="font-bold text-sm text-white">3-Point Softbox Grid</p>
                <p className="text-white/70 text-[11px]">Even light falloff, zero hot-spots</p>
              </div>

              <div className="border-b md:border-b-0 md:border-r border-white/20 pb-4 md:pb-0 md:pr-4 space-y-1">
                <span className="text-[10px] uppercase tracking-wider text-frame-accent block">Macro & Texture</span>
                <p className="font-bold text-sm text-white">90mm f/2.8 Prime Lens</p>
                <p className="text-white/70 text-[11px]">Focus-stacked micro-detail capture</p>
              </div>

              <div className="space-y-1">
                <span className="text-[10px] uppercase tracking-wider text-frame-accent block">Compliance Verification</span>
                <p className="font-bold text-sm text-frame-accent">Amazon & Daraz Spec</p>
                <p className="text-white/70 text-[11px]">85%+ frame fill, clipped white background</p>
              </div>
            </div>

            {/* CAPTION CALLOUT */}
            <div className="mt-4 pt-4 border-t border-frame-border/80 flex items-center justify-between text-xs font-medium text-frame-muted-fg">
              <div className="flex items-center gap-2">
                <CheckIcon className="h-4 w-4 text-frame-accent" />
                <span>Hero image: Professional product photography setup showing studio lighting and finished product images.</span>
              </div>
              <span className="font-mono text-[11px] text-frame-accent font-bold hidden sm:inline-block">
                In-House Studio • Dhaka
              </span>
            </div>

          </div>
        </div>
      </section>

      {/* STRATEGY SECTION: BUILT FOR ECOMMERCE, MARKETPLACES & BRAND CAMPAIGNS */}
      <section className="border-b-2 border-frame-border bg-frame-bg px-4 py-16 md:px-8 md:py-24">
        <div className="mx-auto max-w-[95vw]">
          <div className="mx-auto max-w-4xl text-center mb-14">
            <p className="text-xs font-black uppercase tracking-[0.24em] text-frame-accent mb-3">
              Context-Aware Production
            </p>
            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold uppercase tracking-tight text-frame-fg leading-[0.95]">
              Product Photography Built for Ecommerce, Marketplaces & Brand Campaigns
            </h2>
            <p className="mt-6 text-sm sm:text-base md:text-lg font-medium leading-relaxed text-frame-muted-fg max-w-3xl mx-auto text-balance">
              Online buyers use product images to assess appearance, proportions, materials, finishes, features, and real-world use. That makes photography part of the product experience. A strong product image should make the product easy to understand and maintain consistency across the full catalog. We plan the shoot around those requirements instead of treating every product the same.
            </p>
          </div>

          {/* 6 BALANCED SCENARIO CARDS (2 rows of 3) */}
          <div className="grid gap-px bg-frame-border border-2 border-frame-border sm:grid-cols-2 lg:grid-cols-3">
            {contextScenarios.map((item, index) => (
              <div key={index} className="bg-frame-bg p-6 md:p-8 flex flex-col justify-between hover:bg-frame-muted/10 transition-colors">
                <div>
                  <div className="flex items-center justify-between border-b border-frame-border/60 pb-3 mb-4">
                    <span className="font-mono text-[11px] font-bold uppercase tracking-wider text-frame-accent">
                      {item.badge}
                    </span>
                    <span className="text-[10px] font-mono text-frame-muted-fg uppercase border border-frame-border px-1.5 py-0.5">
                      Case 0{index + 1}
                    </span>
                  </div>

                  <h3 className="font-heading text-lg md:text-xl font-bold uppercase tracking-tight text-frame-fg">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-xs sm:text-sm font-medium leading-relaxed text-frame-muted-fg">
                    {item.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-frame-border/60 flex items-center justify-between text-xs font-mono font-bold">
                  <span className="text-frame-muted-fg">{item.category}</span>
                  <span className="text-frame-accent flex items-center gap-1.5">
                    <CheckIcon className="h-3.5 w-3.5" />
                    {item.metric}
                  </span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>
    </div>
  )
}
