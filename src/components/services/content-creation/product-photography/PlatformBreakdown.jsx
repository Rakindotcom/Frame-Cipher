
import { AutoLinks } from '../../../seo/AutoLinks'
import { SectionIntro, PosterButton } from '../../../Kinetic'

function CheckIcon({ className = "h-4 w-4 shrink-0 text-[#A855F7] mt-0.5" }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 20 20" fill="none" className={className}>
      <path d="m4.5 10 3.5 3.5 7.5-7.5" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

const platforms = [
  {
    name: "Amazon Product Photography",
    channelLabel: "Amazon Listings",
    badge: "Seller Central & Vendor Spec",
    accent: "hover:border-amber-500",
    overview: "Amazon's image documentation requires the main product image to accurately represent the product on a pure white background (RGB 255,255,255) with prominent framing (85%+ fill ratio). Amazon strictly distinguishes the main image from secondary angles, lifestyle shots, infographics, and detail variants.",
    approach: "We plan Amazon photography around those rules from the start rather than trying to force an artistic campaign photo into a strict marketplace spec afterward.",
    deliverables: [
      "Pure white-background main hero image (RGB 255, 255, 255)",
      "Coordinated secondary multi-angle image package",
      "Macro detail shots highlighting craftsmanship and textures",
      "Product-in-use & scale lifestyle photography",
      "Colorway & variant swatches captured under identical lighting",
      "Marketplace-ready exports formatted to category guidelines"
    ],
    note: "Requirements vary by category, so final specifications are verified against your specific ASIN category before shooting."
  },
  {
    name: "Daraz Product Photography",
    channelLabel: "Daraz Storefronts",
    badge: "Daraz Seller Center Spec",
    accent: "hover:border-orange-500",
    overview: "Daraz requires sellers to deliver product images that accurately depict items and comply with Seller Center image standards. Blurry shots, inaccurate colors, or cluttered backgrounds result in rejection or buyer returns.",
    approach: "For Daraz-focused projects, we engineer clean visual consistency that elevates your brand presence in search results and boosts store credibility.",
    deliverables: [
      "Clean product isolation with calibrated neutral/white backgrounds",
      "Consistent product angles across your full Daraz catalog",
      "Accurate true-to-life color representation reducing return rates",
      "Product variant sets (sizes, colors, bundles, packaging)",
      "Optimized file weight balancing fast mobile loading and zoom clarity",
      "Batch-ready uploads organized by Daraz SKU taxonomy"
    ],
    note: "Where guidelines update, we verify the latest Daraz Seller Center requirements prior to final image delivery."
  },
  {
    name: "Shopify & DTC Store Photography",
    channelLabel: "Shopify & DTC",
    badge: "Brand-Led Storefronts",
    accent: "hover:border-emerald-500",
    overview: "Shopify provides immense visual flexibility compared to marketplaces. Product pages can integrate high-resolution galleries, hover zoom states, lifestyle hero banners, and media mixes alongside video and 3D models.",
    approach: "For Shopify and independent ecommerce stores, photography is brand-led, elevating perceived product value, brand personality, and aesthetic continuity.",
    deliverables: [
      "White-background and soft neutral studio product images",
      "Aspirational lifestyle and styled editorial photography",
      "Detailed macro shots highlighting materials and craftsmanship",
      "Collection hero banners and category overview imagery",
      "Product variation and colorway toggle image sets",
      "High-res WebP and AVIF assets optimized for page speed"
    ],
    note: "Tailored to your specific Shopify theme layouts, aspect ratios, and mobile responsive breakpoints."
  },
  {
    name: "Social Media & Advertising Photography",
    channelLabel: "Social Media & Ads",
    badge: "Meta, TikTok & Display Ads",
    accent: "hover:border-blue-500",
    overview: "Paid ads and social channels require dynamic, thumb-stopping compositions that differ dramatically from catalog product pages. Framing must respect platform overlays, safe zones, and aspect ratio variations.",
    approach: "When a single shoot serves both listings and marketing, we plan camera framing and shot composition from day one with multi-channel cropping in mind.",
    deliverables: [
      "Facebook & Instagram feed square (1:1) and vertical (4:5) framing",
      "Instagram Stories & TikTok vertical (9:16) video-ready stills",
      "High-contrast hero creatives engineered for paid advertising",
      "Product launch teasers and seasonal campaign visuals",
      "Website landing page banners and marketing collateral",
      "Promotional hero compositions leaving negative space for copy"
    ],
    note: "We calculate UI safe zones so profile icons and CTA buttons never obscure the product."
  }
]

export default function PlatformBreakdown() {
  return (
    <section className="border-b border-white/[0.08] bg-[#121214] px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-7xl">
        <SectionIntro
          eyebrow="Channel Compliance"
          title="Product Photography for Amazon, Daraz, Shopify & Social Media"
          align="center"
        >
          Different channels impose distinct technical requirements and visual expectations. We plan your shoot to conquer each platform without compromise.
        </SectionIntro>

        {/* BALANCED 2x2 GRID */}
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {platforms.map((platform, idx) => (
            <div
              key={idx}
              className={`border border-white/[0.08] bg-[#09090B] p-7 md:p-9 flex flex-col justify-between transition-colors ${platform.accent}`}
            >
              <div>
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-white/[0.06] pb-4 mb-5">
                  <h3 className="font-heading text-xl md:text-2xl font-bold tracking-tight text-[#FAFAFA]">
                    {platform.name}
                  </h3>
                  <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-[#A855F7] border border-[#A855F7]/40 px-2 py-0.5 whitespace-nowrap">
                    {platform.badge}
                  </span>
                </div>

                <p className="text-xs sm:text-sm wide:text-lg font-medium leading-relaxed text-[#A1A1AA]"><AutoLinks currentPath="/services/content-creation/product-photography" allowed={["/services/paid-advertising"]}>
                  {platform.overview}
                </AutoLinks></p>

                <p className="mt-3 text-xs sm:text-sm font-medium leading-relaxed text-[#FAFAFA] border-l-2 border-[#A855F7]/40 pl-3">
                  {platform.approach}
                </p>

                <div className="mt-6 border-t border-white/[0.06] pt-4">
                  <span className="font-mono text-[10px] font-black uppercase tracking-[0.2em] text-[#A855F7] block mb-3">
                    Deliverables For {platform.channelLabel}
                  </span>
                  <ul className="space-y-2 text-xs sm:text-sm font-medium text-[#FAFAFA]">
                    {platform.deliverables.map((item, dIdx) => (
                      <li key={dIdx} className="flex items-start gap-2">
                        <CheckIcon className="h-3.5 w-3.5 mt-0.5" />
                        <span className="leading-snug">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-6 border-t border-white/[0.06] pt-3 text-[11px] font-mono text-[#A1A1AA]">
                <strong className="text-[#FAFAFA]">Specification Note:</strong> {platform.note}
              </div>
            </div>
          ))}
        </div>

        {/* MULTI-PLATFORM CTA */}
        <div className="mt-12 border border-white/[0.08] bg-[#09090B] p-6 md:p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="font-heading text-lg font-bold tracking-tight text-[#FAFAFA]">
              Selling Across Multiple Marketplaces Simultaneously?
            </h4>
            <p className="text-xs sm:text-sm font-medium text-[#A1A1AA] wide:text-lg">
              We deliver organized multi-platform export folders so your listings go live instantly on Amazon, Daraz, and Shopify.
            </p>
          </div>
          <div className="shrink-0">
            <PosterButton href="/contact">
              Plan a Multi-Channel Shoot &rarr;
            </PosterButton>
          </div>
        </div>
      </div>
    </section>
  )
}
