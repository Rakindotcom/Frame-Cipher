import { SectionIntro, PosterButton } from '../../../Kinetic'

function CheckIcon({ className = "h-4 w-4 shrink-0 text-frame-accent mt-0.5" }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 20 20" fill="none" className={className}>
      <path d="m4.5 10 3.5 3.5 7.5-7.5" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

const offerings = [
  {
    num: "01",
    badge: "Core Catalog",
    title: "Ecommerce & White-Background",
    description: "Clean product photography designed for ecommerce stores, catalogs, marketplaces, and product listings where the product itself must remain the primary visual focus.",
    bullets: [
      "Studio lighting & controlled product isolation",
      "Pure white background (RGB 255,255,255)",
      "Front, side, rear, and top isometric views",
      "Consistent framing across product variants",
      "Product grouping and batch shoot workflows",
      "Marketplace-ready image preparation"
    ],
    takeaway: "Essential for primary marketplace search results and distraction-free catalog pages."
  },
  {
    num: "02",
    badge: "Visual Context",
    title: "Lifestyle & Creative Photography",
    description: "Places the product in a realistic or creatively directed environment to help shoppers visualize real-world ownership, scale, and daily utility.",
    bullets: [
      "Creative concept development & moodboards",
      "Studio set staging & environmental styling",
      "Prop sourcing tailored to your aesthetic",
      "Talent or model coordination where needed",
      "Product-in-use situational storytelling",
      "Campaign and social-ad-ready compositions"
    ],
    takeaway: "Helps shoppers connect emotionally and understand how products fit into everyday routines."
  },
  {
    num: "03",
    badge: "High Magnification",
    title: "Detail & Macro Photography",
    description: "Focuses on the tactile elements buyers want to inspect closely before checkout, resolving doubts about build quality and craftsmanship.",
    bullets: [
      "Material, weave, and leather texture close-ups",
      "Precision stitching & industrial finish capture",
      "Product features, switches & interface controls",
      "Packaging typography, label finishes & seals",
      "Macro focus-stacking for edge-to-edge sharpness",
      "Glare-controlled close-up retouching"
    ],
    takeaway: "Answers technical scrutiny for premium products where materials influence buying decisions."
  },
  {
    num: "04",
    badge: "360° Coverage",
    title: "Multi-Angle & 360° Photography",
    description: "Provides comprehensive dimensional coverage so buyers understand physical proportions, depth, and layout without relying on a single angle.",
    bullets: [
      "Front, side, rear, and top angle sets",
      "Consistent angle elevation and camera framing",
      "Precision motorized turntable rotation series",
      "Scale-reference photography benchmarks",
      "360° spin sequence preparation for web",
      "Coordinated multi-view product page assets"
    ],
    takeaway: "Eliminates visual ambiguity by giving shoppers full 360-degree inspection confidence."
  },
  {
    num: "05",
    badge: "Apparel & Drape",
    title: "Apparel & Fashion Photography",
    description: "Communicates true fabric drape, fit, silhouette, texture, and styling for clothing collections, footwear, and accessory brands.",
    bullets: [
      "Flat-lay styling & tabletop fold compositions",
      "On-model commercial & editorial shoots",
      "Ghost mannequin invisible studio shots",
      "Fabric close-ups highlighting weave & trim",
      "Front, 3/4, side, and rear movement views",
      "Ecommerce collection lookbook image sets"
    ],
    takeaway: "Tailored to the garment's cut, collection aesthetic, and intended customer demographics."
  },
  {
    num: "06",
    badge: "Pixel Precision",
    title: "Product Retouching & Color Correction",
    description: "Post-production that perfects presentation while preserving true product integrity and exact physical color accuracy.",
    bullets: [
      "Calibrated exposure & true color balance",
      "Background clipping paths & clean isolation",
      "Dust, scratch, and shooting-artifact removal",
      "Edge smoothing & symmetry refinement",
      "Natural contact drop shadows & reflection",
      "Strict marketplace export standards"
    ],
    takeaway: "Enhances presentation without creating misleading visual representations that cause returns."
  },
  {
    num: "07",
    badge: "Delivery Packaging",
    title: "Marketplace-Ready Formatting",
    description: "Preparing and organizing final assets around the exact technical parameters of Amazon, Daraz, Shopify, and advertising channels.",
    bullets: [
      "Platform-specific aspect ratios & dimensions",
      "Amazon-compliant pure white crops & fill ratio",
      "Daraz Seller Center file optimization",
      "Shopify high-res WebP & JPG exports",
      "Social media square (1:1) and vertical crops",
      "SKU-indexed folder hierarchy for fast uploads"
    ],
    takeaway: "Ensures files are immediately uploadable without needing post-delivery cropping or resizing."
  },
  {
    num: "08",
    badge: "Full Scale",
    title: "Comprehensive Catalog Production",
    description: "An integrated production package combining white-background listings, macro details, lifestyle scenes, and full post-production for complete brand catalogs.",
    bullets: [
      "Unified shot list planning across full SKUs",
      "Synchronized studio and lifestyle staging",
      "Consistent color & lighting calibration",
      "Progressive batch delivery for live stores",
      "Multi-channel export packages for web & ads",
      "Dedicated creative director supervision"
    ],
    takeaway: "The ideal complete solution for brands launching new collections or scaling extensive catalogs."
  }
]

export default function Offerings() {
  return (
    <section className="border-b-2 border-frame-border bg-frame-bg px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro
          eyebrow="Specialized Capabilities"
          title="Product Photography Services"
          align="center"
        >
          From pure white-background marketplace listings to high-end lifestyle campaigns and macro detail shots, planned around how shoppers evaluate your products.
        </SectionIntro>

        {/* PERFECTLY BALANCED 4x2 GRID (8 cards) */}
        <div className="mt-12 grid gap-px border-2 border-frame-border bg-frame-border sm:grid-cols-2 lg:grid-cols-4">
          {offerings.map((item, index) => (
            <div
              key={index}
              className={`bg-frame-bg p-6 md:p-7 flex flex-col justify-between transition-colors hover:bg-frame-muted/10 ${
                index === 7 ? 'bg-frame-accent/[0.04]' : ''
              }`}
            >
              <div>
                <div className="flex items-center justify-between border-b border-frame-border/60 pb-3 mb-4">
                  <span className="font-mono text-xs font-black text-frame-accent">
                    Scope {item.num}
                  </span>
                  <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-frame-muted-fg border border-frame-border px-1.5 py-0.5">
                    {item.badge}
                  </span>
                </div>

                <h3 className="font-heading text-lg md:text-xl font-bold uppercase tracking-tight text-frame-fg leading-snug">
                  {item.title}
                </h3>

                <p className="mt-3 text-xs sm:text-sm font-medium leading-relaxed text-frame-muted-fg">
                  {item.description}
                </p>

                <div className="mt-5 border-t border-frame-border/60 pt-4">
                  <span className="font-mono text-[10px] font-black uppercase tracking-[0.2em] text-frame-accent block mb-2">
                    What We Deliver
                  </span>
                  <ul className="space-y-2 text-xs font-medium text-frame-fg">
                    {item.bullets.map((bullet, bIdx) => (
                      <li key={bIdx} className="flex items-start gap-2">
                        <CheckIcon className="h-3.5 w-3.5 mt-0.5" />
                        <span className="leading-snug">{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-6 border-t border-frame-border/60 pt-3 text-[11px] font-mono text-frame-muted-fg leading-relaxed">
                <strong className="text-frame-fg uppercase block text-[10px] mb-0.5">Strategic Purpose:</strong>
                {item.takeaway}
              </div>
            </div>
          ))}
        </div>

        {/* BOTTOM ACTION BANNER */}
        <div className="mt-12 border-2 border-frame-border bg-frame-muted/30 p-6 md:p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="font-heading text-lg md:text-xl font-bold uppercase tracking-tight text-frame-fg">
              Need A Customized Shoot Plan For Multiple Categories?
            </h4>
            <p className="text-xs sm:text-sm font-medium text-frame-muted-fg">
              We mix white-background hero shots, lifestyle context, and macro details into a unified project quote.
            </p>
          </div>
          <div className="shrink-0">
            <PosterButton href="/contact">
              Request a Shoot Proposal &rarr;
            </PosterButton>
          </div>
        </div>

      </div>
    </section>
  )
}
