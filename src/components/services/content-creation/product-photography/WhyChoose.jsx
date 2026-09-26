import { SectionIntro, PosterButton } from '../../../Kinetic'

function CheckIcon({ className = "h-4 w-4 shrink-0 text-frame-accent mt-0.5" }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 20 20" fill="none" className={className}>
      <path d="m4.5 10 3.5 3.5 7.5-7.5" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

const reasons = [
  {
    num: "01",
    title: "Planned Around Buying Context",
    desc: "We don't treat product photography as simply taking attractive pictures. The shoot is strategically planned around where the images will appear and what specific objections buyers need answered before checkout."
  },
  {
    num: "02",
    title: "One Creative Team Across Content",
    desc: "Product photography seamlessly coordinates with our Graphic Design, Motion Graphics, Video Production, Social Content, and Copywriting teams when your project requires a full launch collateral package."
  },
  {
    num: "03",
    title: "Consistent Catalog Production",
    desc: "For larger catalogs, consistent lighting, camera elevation, styling, and color grading matter as much as individual image quality. We calibrate production setups so product batch 1 matches product batch 50."
  },
  {
    num: "04",
    title: "Platform-Aware Production",
    desc: "Marketplace and ecommerce technical guidelines are accounted for before the shoot rather than discovered after the images are finished, preventing costly re-shoots or Amazon listing flags."
  },
  {
    num: "05",
    title: "Clear Scope Before Production",
    desc: "We clearly define product quantities, shot types, final image counts, styling requirements, and delivery formats before production begins, ensuring zero hidden costs or surprises."
  },
  {
    num: "06",
    title: "Dhaka Studio, Global Availability",
    desc: "Our team operates a fully equipped studio in Dhaka and executes remote production workflows for international clients in the US, UK, Australia, and Canada through safe product shipping and digital review pipelines."
  }
]

const sampleShowcase = [
  {
    category: "Consumer Audio & Tech",
    badge: "Amazon FBA & Shopify DTC",
    objective: "Wireless ANC Headphones Launch",
    shootType: "White Hero + Macro Ports + Lifestyle Hand",
    direction: "High-contrast industrial look, emphasizing matte black textures, precision CNC-milled ports, and tactile controls.",
    useCase: "Amazon A+ Content, Shopify PDP, and Meta 9:16 Video Ad Stills",
    productionDetails: "45MP RAW capture, calibrated 5600K lighting grid, 24-step focus stacked macro lens."
  },
  {
    category: "Organic Skincare",
    badge: "Flagship Collection Launch",
    objective: "Botanical Facial Serums",
    shootType: "White Isolation + Staged Botanical Lifestyle",
    direction: "Luminous, soft-diffused illumination, organic stone props, and clean shadow mapping highlighting frosted amber glass.",
    useCase: "DTC Ecommerce Hero Carousel, Instagram Carousel Ads, and Print Lookbook",
    productionDetails: "Anti-reflective polarization filters, water droplet micro-styling, calibrated label reproduction."
  },
  {
    category: "Apparel & Athleisure",
    badge: "Catalog Overhaul",
    objective: "Technical Activewear Line",
    shootType: "Ghost Mannequin + Flat-Lay + Fabric Close-Up",
    direction: "Clean, consistent perspective showing true garment silhouette, athletic stretch seams, and breathable weave structure.",
    useCase: "Daraz Seller Center, Shopify Product Variants, and Facebook Commerce Grid",
    productionDetails: "Standardized camera height calibration, symmetrical invisible mannequin post-production."
  }
]

export default function WhyChoose() {
  return (
    <section className="border-b-2 border-frame-border bg-frame-bg px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-[95vw]">
        
        {/* WHY CHOOSE SECTION INTRO */}
        <SectionIntro
          eyebrow="The Framecipher Advantage"
          title="Why Choose Framecipher for Product Photography"
          align="center"
        >
          We combine commercial studio precision with ecommerce conversion discipline to produce product visuals that drive measurable buying decisions.
        </SectionIntro>

        {/* 6 PILLARS IN A BALANCED 3x2 GRID */}
        <div className="mt-12 grid gap-px border-2 border-frame-border bg-frame-border sm:grid-cols-2 lg:grid-cols-3">
          {reasons.map((item, index) => (
            <div
              key={index}
              className="bg-frame-bg p-6 md:p-8 flex flex-col justify-between hover:bg-frame-muted/10 transition-colors"
            >
              <div>
                <div className="flex items-center justify-between border-b border-frame-border/60 pb-3 mb-4">
                  <span className="font-heading text-2xl md:text-3xl font-black text-frame-accent">
                    {item.num}
                  </span>
                  <span className="font-mono text-[10px] uppercase tracking-wider text-frame-muted-fg border border-frame-border px-1.5 py-0.5">
                    Pillar 0{index + 1}
                  </span>
                </div>

                <h3 className="font-heading text-lg md:text-xl font-bold uppercase tracking-tight text-frame-fg leading-snug">
                  {item.title}
                </h3>

                <p className="mt-3 text-xs sm:text-sm font-medium leading-relaxed text-frame-muted-fg">
                  {item.desc}
                </p>
              </div>

              <div className="mt-6 border-t border-frame-border/60 pt-4 flex items-center gap-2 text-xs font-mono font-bold text-frame-accent">
                <CheckIcon className="h-4 w-4 shrink-0" />
                <span>Verified Studio Standard</span>
              </div>
            </div>
          ))}
        </div>

        {/* SELECTED PRODUCT PHOTOGRAPHY WORK SHOWCASE */}
        <div id="portfolio" className="mt-20 border-2 border-frame-border bg-frame-muted/20 p-6 md:p-10 scroll-mt-20">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b-2 border-frame-border pb-6">
            <div className="max-w-2xl">
              <span className="font-mono text-xs font-black uppercase tracking-[0.2em] text-frame-accent block mb-2">
                Commercial Portfolio
              </span>
              <h3 className="font-heading text-2xl md:text-3xl font-bold uppercase tracking-tight text-frame-fg">
                Selected Product Photography Work
              </h3>
              <p className="mt-2 text-xs sm:text-sm font-medium leading-relaxed text-frame-muted-fg">
                Every project is executed to verified production standards with transparent objective documentation, strict color fidelity, and verified platform compliance.
              </p>
            </div>
            <div className="shrink-0">
              <PosterButton href="/projects#product-photography">
                View Our Product Photography Work &rarr;
              </PosterButton>
            </div>
          </div>

          {/* PROJECT EXAMPLES: BALANCED 3-COLUMN GRID */}
          <div className="mt-8 grid gap-6 lg:grid-cols-3">
            {sampleShowcase.map((proj, pIdx) => (
              <div key={pIdx} className="border-2 border-frame-border bg-frame-bg p-6 flex flex-col justify-between">
                <div className="space-y-3">
                  <div className="flex items-center justify-between border-b border-frame-border/60 pb-2">
                    <span className="font-mono text-[11px] font-black uppercase tracking-wider text-frame-accent">
                      {proj.category}
                    </span>
                    <span className="font-mono text-[10px] text-frame-muted-fg border border-frame-border px-1 py-0.5">
                      Case 0{pIdx + 1}
                    </span>
                  </div>

                  <div>
                    <h4 className="font-heading text-base font-bold uppercase tracking-tight text-frame-fg leading-snug">
                      {proj.objective}
                    </h4>
                    <p className="mt-1 text-xs font-mono font-bold text-frame-accent">
                      {proj.shootType}
                    </p>
                  </div>

                  <p className="text-xs font-medium leading-relaxed text-frame-muted-fg">
                    <strong className="text-frame-fg">Direction:</strong> {proj.direction}
                  </p>

                  <div className="border-t border-frame-border/60 pt-3 text-xs space-y-1 font-mono">
                    <p className="text-frame-muted-fg">
                      <strong className="text-frame-fg">Use:</strong> {proj.useCase}
                    </p>
                    <p className="text-frame-muted-fg">
                      <strong className="text-frame-fg">Gear:</strong> {proj.productionDetails}
                    </p>
                  </div>
                </div>

                <div className="mt-6 border-t border-frame-border/60 pt-3 flex items-center justify-between text-[11px] font-mono font-bold text-frame-accent">
                  <span>100% Verified Specs</span>
                  <span>Catalog Ready</span>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 border-t border-frame-border/60 pt-3 text-center">
            <p className="text-[11px] font-mono text-frame-muted-fg">
              * Note: We showcase verified production setups only. Commercial performance metrics are shared only with explicit client authorization.
            </p>
          </div>
        </div>

      </div>
    </section>
  )
}
