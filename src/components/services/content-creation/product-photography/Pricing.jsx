import { SectionIntro, PosterButton } from '../../../Kinetic'

function CheckIcon({ className = "h-4 w-4 shrink-0 text-frame-accent mt-0.5" }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 20 20" fill="none" className={className}>
      <path d="m4.5 10 3.5 3.5 7.5-7.5" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

const packages = [
  {
    name: "Studio Product Photography",
    price: "৳1,500",
    unit: "per product",
    badge: "Tier 01",
    popular: false,
    bestFor: "Ecommerce & marketplace listings",
    summary: "Essential pure white or neutral studio isolation for catalog listings and marketplace compliance.",
    whatsIncluded: [
      "Controlled studio lighting & isolation",
      "1 primary hero product image",
      "Pure white background (RGB 255,255,255)",
      "True color calibration & basic retouching",
      "Minor dust & artifact cleanup",
      "Marketplace export (Amazon, Daraz, Shopify)"
    ]
  },
  {
    name: "Full Product Photography",
    price: "৳4,000",
    unit: "per product",
    badge: "Most Popular",
    popular: true,
    bestFor: "Flagship & high-priority products",
    summary: "Comprehensive multi-angle and macro inspection package designed for high-converting PDPs.",
    whatsIncluded: [
      "Hero primary image on pure white/neutral",
      "Multi-angle coverage (front, side, rear, top)",
      "High-magnification macro texture shots",
      "Scale-reference & packaging close-ups",
      "High-end retouching & natural drop shadow",
      "Multi-crop packages (web, mobile, social)"
    ]
  },
  {
    name: "Lifestyle Photography",
    price: "৳15,000",
    unit: "per session",
    badge: "Creative Tier",
    popular: false,
    bestFor: "Brand campaigns & product-in-use",
    summary: "Dedicated staged photoshoot capturing products in contextual, realistic, and styled environments.",
    whatsIncluded: [
      "Creative concept & art direction",
      "Half-day dedicated studio/location session",
      "Set styling, staging & props sourcing",
      "Up to 15 fully retouched lifestyle images",
      "Model/talent coordination where scoped",
      "Campaign aspect ratios (16:9, 1:1, 4:5, 9:16)"
    ]
  },
  {
    name: "Bulk Catalog Photography",
    price: "৳1,000",
    unit: "per product",
    badge: "Volume Tier",
    popular: false,
    bestFor: "Large catalogs (50+ products)",
    summary: "Standardized high-volume studio capture for retailers scaling complete product catalogs.",
    whatsIncluded: [
      "Volume rate for 50+ product SKU batches",
      "Consistent calibrated lighting grid & camera",
      "Clean white-background photography",
      "Standardized batch retouching & color",
      "SKU-indexed folders for rapid CMS upload",
      "Staged progressive delivery milestones"
    ]
  }
]

const qualityCheckpoints = [
  { item: "Focus & Optical Quality", desc: "Razor-sharp critical focus across key product planes with zero optical aberration." },
  { item: "Lighting Consistency", desc: "Uniform light direction, fill balance, and specular highlight control across variants." },
  { item: "Color Calibration", desc: "Color-checked against physical product swatches under calibrated 5600K daylight balance." },
  { item: "Framing & Padding", desc: "Complies with strict marketplace frame-fill guidelines (e.g. 85%+ fill on Amazon)." },
  { item: "Background Quality", desc: "Pure RGB 255,255,255 background isolation with zero haloing or cut-out fringe." },
  { item: "Retouching Uniformity", desc: "Natural drop shadows, flawless dust removal, and consistent surface treatment." },
  { item: "Platform Formatting", desc: "Cropped and exported to exact channel dimension, DPI, and file weight specs." },
  { item: "SKU File Organization", desc: "Human-readable filenames organized cleanly into structured SKU folder directories." }
]

export default function Pricing() {
  return (
    <section id="pricing" className="border-b-2 border-frame-border bg-frame-bg px-4 py-20 md:px-8 md:py-28 scroll-mt-20">
      <div className="mx-auto max-w-[95vw]">
        
        {/* HEADER */}
        <SectionIntro
          eyebrow="Commercial Investment"
          title="Product Photography Pricing in Bangladesh"
          align="center"
        >
          Product photography pricing depends on the number of products, images required per product, photography style, product complexity, styling, location, models, props, and post-production requirements.
        </SectionIntro>

        {/* 4-TIER PACKAGE GRID */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {packages.map((pkg, index) => (
            <div
              key={index}
              className={`border-2 p-6 md:p-7 flex flex-col justify-between transition-all ${
                pkg.popular
                  ? 'border-frame-accent bg-frame-accent/10 shadow-lg'
                  : 'border-frame-border bg-frame-bg hover:border-frame-fg'
              }`}
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="font-mono text-[10px] font-black uppercase tracking-[0.2em] text-frame-accent">
                    {pkg.badge}
                  </span>
                  {pkg.popular && (
                    <span className="border border-frame-accent bg-frame-accent px-2 py-0.5 text-[9px] font-black uppercase tracking-wider text-frame-accent-fg">
                      Recommended
                    </span>
                  )}
                </div>

                <h3 className="font-heading text-lg md:text-xl font-bold uppercase tracking-tight text-frame-fg leading-snug">
                  {pkg.name}
                </h3>

                <div className="mt-4 border-y border-frame-border/60 py-3">
                  <div className="flex items-baseline gap-1">
                    <span className="font-heading text-3xl font-black text-frame-fg">
                      {pkg.price}
                    </span>
                    <span className="text-xs font-mono text-frame-muted-fg font-bold">
                      /{pkg.unit}
                    </span>
                  </div>
                  <span className="text-[10px] font-mono text-frame-accent uppercase tracking-wider block mt-0.5">
                    Starting reference price
                  </span>
                </div>

                <div className="mt-3">
                  <span className="text-[11px] font-mono font-bold text-frame-fg block">Best For:</span>
                  <p className="text-xs font-medium text-frame-muted-fg mt-0.5">{pkg.bestFor}</p>
                </div>

                <p className="mt-3 text-xs font-medium text-frame-muted-fg leading-relaxed border-t border-frame-border/60 pt-2">
                  {pkg.summary}
                </p>

                <div className="mt-5 border-t border-frame-border/60 pt-4">
                  <span className="font-mono text-[10px] font-black uppercase tracking-[0.2em] text-frame-accent block mb-2.5">
                    What&apos;s Included
                  </span>
                  <ul className="space-y-2 text-xs font-medium text-frame-fg">
                    {pkg.whatsIncluded.map((feat, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-2">
                        <CheckIcon className="h-3.5 w-3.5 mt-0.5" />
                        <span className="leading-snug">{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-frame-border/60">
                <PosterButton
                  href="/contact"
                  variant={pkg.popular ? 'accent' : 'outline'}
                  className="w-full text-center"
                >
                  Choose {pkg.name.split(' ')[0]}
                </PosterButton>
              </div>
            </div>
          ))}
        </div>

        {/* PRICING NOTE & CUSTOM QUOTE */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 border-2 border-frame-border bg-frame-muted/30 p-5 md:p-6 text-xs font-mono text-frame-muted-fg">
          <p className="max-w-3xl leading-relaxed text-center sm:text-left">
            * Pricing shown above is a starting reference and is confirmed with Framecipher after evaluating your specific shot list, product materials, and styling scope.
          </p>
          <div className="shrink-0">
            <PosterButton href="/contact">
              Get a Custom Product Photography Quote &rarr;
            </PosterButton>
          </div>
        </div>

        {/* QUALITY REVIEW & REVISIONS PANEL */}
        <div className="mt-20 border-2 border-frame-border bg-frame-bg p-6 md:p-10">
          <div className="max-w-3xl mb-8">
            <span className="font-mono text-xs font-black uppercase tracking-[0.2em] text-frame-accent block mb-2">
              Production Standards
            </span>
            <h3 className="font-heading text-2xl md:text-3xl font-bold uppercase tracking-tight text-frame-fg">
              Quality Review & Revisions
            </h3>
            <p className="mt-2 text-xs sm:text-sm font-medium text-frame-muted-fg leading-relaxed">
              Every project goes through a rigid 8-point quality review before final asset handover. We verify the agreed image set against commercial criteria:
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {qualityCheckpoints.map((chk, cIdx) => (
              <div key={cIdx} className="border border-frame-border bg-frame-muted/15 p-4 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <CheckIcon className="h-4 w-4 text-frame-accent" />
                    <h4 className="font-heading text-xs font-bold uppercase tracking-tight text-frame-fg">
                      {chk.item}
                    </h4>
                  </div>
                  <p className="text-xs font-medium text-frame-muted-fg leading-relaxed">
                    {chk.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 border-t border-frame-border/80 pt-6 grid gap-6 md:grid-cols-2 text-xs md:text-sm font-medium text-frame-muted-fg leading-relaxed">
            <div className="border-l-2 border-frame-accent pl-4 space-y-2">
              <strong className="text-frame-fg block font-mono uppercase text-xs">Included Revision Round</strong>
              <p>
                One reasonable round of post-production retouching revisions is included where specified in your selected package (e.g. slight exposure adjustment, shadow tuning, or dust touch-ups).
              </p>
              <p className="text-xs text-frame-muted-fg/80">
                If a change requires a fresh shoot, additional products, new styling, a different concept, or substantially altered creative direction, it will be scoped as additional production.
              </p>
            </div>

            <div className="border-l-2 border-frame-border pl-4 space-y-2">
              <strong className="text-frame-fg block font-mono uppercase text-xs">Realistic Performance Disclosure</strong>
              <p>
                We do not guarantee a specific sales, conversion, or return-rate outcome from photography alone. Product photography works alongside pricing, product quality, merchandising, reviews, ad targeting, and copy.
              </p>
              <p className="text-xs text-frame-accent font-mono font-bold">
                Our commitment is to deliver the agreed photography scope to the rigorous production and quality standards defined for your project.
              </p>
            </div>
          </div>
        </div>

        {/* GEOGRAPHIC COVERAGE: BANGLADESH & INTERNATIONAL */}
        <div className="mt-12 border-2 border-frame-border bg-frame-muted/20 p-6 md:p-10">
          <div className="grid gap-8 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-8 space-y-3">
              <span className="font-mono text-xs font-black uppercase tracking-[0.2em] text-frame-accent block">
                Studio Logistics & Global Reach
              </span>
              <h3 className="font-heading text-2xl md:text-3xl font-bold uppercase tracking-tight text-frame-fg">
                Product Photography Services in Bangladesh & International Markets
              </h3>
              <p className="text-xs sm:text-sm font-medium leading-relaxed text-frame-muted-fg">
                Framecipher is based in Dhaka and provides product photography for businesses across Bangladesh. We also support international clients in markets including the United States, United Kingdom, Australia, and Canada, subject to product shipping, studio requirements, and production logistics.
              </p>
              <div className="grid sm:grid-cols-2 gap-4 pt-2 text-xs font-medium text-frame-fg">
                <div className="p-3 border border-frame-border bg-frame-bg">
                  <strong className="text-frame-accent block font-mono uppercase text-[11px] mb-1">Bangladesh-Based Brands:</strong>
                  Photography planned around local ecommerce and marketplace requirements (Daraz, Shopify, local courier logistics).
                </div>
                <div className="p-3 border border-frame-border bg-frame-bg">
                  <strong className="text-frame-accent block font-mono uppercase text-[11px] mb-1">International Brands:</strong>
                  Seamless remote workflow working from approved creative briefs, reference imagery, brand guidelines, and global platform specs.
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 border-2 border-frame-border bg-frame-bg p-6 text-center space-y-4">
              <span className="font-mono text-xs font-black uppercase tracking-wider text-frame-accent block">
                Ready To Ship Your Samples?
              </span>
              <p className="text-xs font-medium text-frame-muted-fg leading-relaxed">
                Send your product units directly to our Dhaka studio for sample inspection, test frames, and high-end commercial capture.
              </p>
              <PosterButton href="/contact" className="w-full text-center">
                Coordinate Sample Delivery &rarr;
              </PosterButton>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
