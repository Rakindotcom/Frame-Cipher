import { SectionIntro, PosterButton } from '../../../Kinetic'

function CheckIcon({ className = "h-4 w-4 shrink-0 text-frame-accent mt-0.5" }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 20 20" fill="none" className={className}>
      <path d="m4.5 10 3.5 3.5 7.5-7.5" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

const clientProfiles = [
  {
    num: "01",
    title: "Ecommerce Brands",
    subtitle: "DTC & Storefronts",
    description: "For businesses selling through their own Shopify, WooCommerce, or custom storefronts who need brand-led hero images, collection banners, and cohesive catalog styling that converts traffic into buyers.",
    valuePoint: "Elevated perceived brand value & lower cart abandonment"
  },
  {
    num: "02",
    title: "Amazon & Marketplace Sellers",
    subtitle: "FBA & Global Marketplaces",
    description: "For sellers in the US, UK, Australia, and Canada requiring strict 100% compliant pure white-background hero shots, A+ content visuals, multi-angle packages, and high-CTR lifestyle photography.",
    valuePoint: "Guaranteed Seller Central compliance & higher conversion rank"
  },
  {
    num: "03",
    title: "Daraz & Local Sellers",
    subtitle: "Bangladesh Market Leaders",
    description: "For Bangladesh-based sellers building or revamping product catalogs on Daraz, Pickaboo, or Facebook Commerce, wanting to stand out from generic low-resolution importer listings.",
    valuePoint: "Immediate catalog authority & reduced return rates"
  },
  {
    num: "04",
    title: "Fashion & Apparel Brands",
    subtitle: "Apparel & Footwear",
    description: "For clothing, accessories, and footwear labels needing ghost mannequin shots, flat lays, on-model editorial looks, and fabric close-ups that accurately reflect garment fit and drape.",
    valuePoint: "True-to-life color, drape, and texture fidelity"
  },
  {
    num: "05",
    title: "Beauty & Consumer Brands",
    subtitle: "Cosmetics & FMCG",
    description: "For cosmetics, skincare, personal care, and packaged consumer goods requiring glare-controlled packaging shots, formula swatches, and clean lifestyle staging.",
    valuePoint: "Refined aesthetic appeal highlighting formulation quality"
  },
  {
    num: "06",
    title: "Manufacturers & Exporters",
    subtitle: "Industrial & B2B Catalogs",
    description: "For manufacturing companies and export businesses in Bangladesh that need professional product photography for digital catalogs, websites, foreign buyers, and distributors.",
    valuePoint: "Commercial credibility for high-value B2B buyer inquiries"
  }
]

export default function TargetAudience() {
  return (
    <section className="border-b-2 border-frame-border bg-frame-bg px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro
          eyebrow="Market Fit"
          title="Who Our Product Photography Service Is For"
          align="center"
        >
          Engineered for brands and businesses that need professional product visuals for selling, marketing, or presenting physical merchandise.
        </SectionIntro>

        {/* 6 BALANCED CATEGORY PROFILES (2 rows of 3) */}
        <div className="mt-12 grid gap-px border-2 border-frame-border bg-frame-border sm:grid-cols-2 lg:grid-cols-3">
          {clientProfiles.map((item, index) => (
            <div
              key={index}
              className="bg-frame-bg p-6 md:p-8 flex flex-col justify-between hover:bg-frame-muted/10 transition-colors"
            >
              <div>
                <div className="flex items-center justify-between border-b border-frame-border/60 pb-3 mb-4">
                  <span className="font-heading text-2xl md:text-3xl font-black text-frame-accent">
                    {item.num}
                  </span>
                  <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-frame-muted-fg border border-frame-border px-2 py-0.5">
                    {item.subtitle}
                  </span>
                </div>

                <h3 className="font-heading text-xl md:text-2xl font-bold uppercase tracking-tight text-frame-fg">
                  {item.title}
                </h3>

                <p className="mt-3 text-xs sm:text-sm font-medium leading-relaxed text-frame-muted-fg">
                  {item.description}
                </p>
              </div>

              <div className="mt-6 border-t border-frame-border/60 pt-4 flex items-start gap-2 text-xs font-mono font-bold text-frame-accent">
                <CheckIcon className="h-4 w-4 shrink-0 mt-0.5" />
                <span className="leading-snug">{item.valuePoint}</span>
              </div>
            </div>
          ))}
        </div>

        {/* 7TH PROFILE: AGENCIES & MARKETING TEAMS (FEATURED FULL-WIDTH WIDE BANNER) */}
        <div className="mt-8 border-2 border-frame-border bg-frame-muted/20 p-6 md:p-10">
          <div className="grid gap-6 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-8 space-y-3">
              <div className="flex items-center gap-3">
                <span className="font-heading text-2xl font-black text-frame-accent">07</span>
                <span className="font-mono text-xs font-black uppercase tracking-wider text-frame-accent border border-frame-accent px-2 py-0.5">
                  Creative & Performance Partners
                </span>
              </div>
              <h3 className="font-heading text-2xl md:text-3xl font-bold uppercase tracking-tight text-frame-fg">
                Agencies & Marketing Teams
              </h3>
              <p className="text-xs sm:text-sm font-medium leading-relaxed text-frame-muted-fg">
                For design agencies, performance marketing teams, and brand consultants that need a reliable, professional photography partner for campaigns, launches, ecommerce catalogs, or ongoing creative production without studio management overhead.
              </p>
              <div className="pt-1 flex items-center gap-2 text-xs font-mono font-bold text-frame-accent">
                <CheckIcon className="h-4 w-4 shrink-0" />
                <span>White-label production & overflow studio support with SLA delivery</span>
              </div>
            </div>

            <div className="lg:col-span-4 border-2 border-frame-border bg-frame-bg p-6 text-center space-y-3">
              <span className="font-mono text-xs font-black uppercase tracking-wider text-frame-accent block">
                Agency Partnership Inquiries
              </span>
              <p className="text-xs font-medium text-frame-muted-fg">
                Discuss volume retainer rates and priority scheduling for your agency clients.
              </p>
              <PosterButton href="/contact" className="w-full text-center">
                Partner With Our Studio &rarr;
              </PosterButton>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
