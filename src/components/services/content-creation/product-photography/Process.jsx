import { SectionIntro } from '../../../Kinetic'

function CheckIcon({ className = "h-4 w-4 shrink-0 text-frame-accent mt-0.5" }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 20 20" fill="none" className={className}>
      <path d="m4.5 10 3.5 3.5 7.5-7.5" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

const steps = [
  {
    num: "01",
    title: "Product & Platform Brief",
    subtitle: "Discovery",
    desc: "We start by understanding the products, quantity, intended platforms (Amazon, Daraz, Shopify, Social Ads), target audience, visual direction, and the business use of the images.",
    deliverable: "Shoot Brief & Specification Alignment"
  },
  {
    num: "02",
    title: "Shot List & Direction",
    subtitle: "Roadmap",
    desc: "We determine which products need hero, detail, lifestyle, scale, multi-angle, or other photography. This prevents unnecessary shots while making sure critical buyer questions are answered.",
    deliverable: "Approved SKU Shot List & Moodboard"
  },
  {
    num: "03",
    title: "Studio or Location Setup",
    subtitle: "Calibration",
    desc: "We prepare the appropriate lighting, backgrounds (pure white cyc or styled sets), equipment, props, styling, models, or location requirements based on the approved shoot plan.",
    deliverable: "Calibrated Lighting Grids & Set Staging"
  },
  {
    num: "04",
    title: "Photography",
    subtitle: "Capture",
    desc: "Products are photographed according to the agreed shot list. For catalog projects, strict consistency in framing, lighting, camera position, and styling is maintained across the entire product set.",
    deliverable: "High-Resolution RAW Exposure Capture"
  },
  {
    num: "05",
    title: "Retouching & QC",
    subtitle: "Post-Production",
    desc: "Selected images move through color calibration, cleanup, dust removal, shadow mapping, cropping, and quality checks. We review the complete set for consistency before delivery.",
    deliverable: "Retouched & Color-Balanced Masters"
  },
  {
    num: "06",
    title: "Review & Delivery",
    subtitle: "Packaging",
    desc: "You review the agreed image set before final handover. Approved images are exported, organized by SKU, and delivered in platform-compliant formats ready for instant publishing.",
    deliverable: "Organized Multi-Platform Asset Handover"
  }
]

const timelines = [
  {
    projectType: "Small Studio Shoot",
    timeline: "2–5 business days",
    scope: "1–5 products, white-background hero shots & essential angles",
    idealFor: "Quick Amazon ASIN updates & new standalone product drops"
  },
  {
    projectType: "Standard Product Batch",
    timeline: "4–7 business days",
    scope: "10–30 products, hero + macro detail + basic packaging shots",
    idealFor: "Seasonal brand launches & primary store updates"
  },
  {
    projectType: "Lifestyle Photography",
    timeline: "1–2 weeks",
    scope: "Dedicated studio or location session with props & environmental staging",
    idealFor: "Hero website banners, marketing campaigns & social ad creatives"
  },
  {
    projectType: "Larger Catalog Shoot",
    timeline: "1–3+ weeks",
    scope: "50+ SKUs with standardized batch lighting and batch retouching",
    idealFor: "Full ecommerce store launches & comprehensive catalog overhauls"
  },
  {
    projectType: "Complex Campaign Production",
    timeline: "Scoped individually",
    scope: "Custom set builds, multi-location, talent casting & multi-media integration",
    idealFor: "National brand campaigns & flagship launch rollouts"
  }
]

export default function Process() {
  return (
    <section className="border-b-2 border-frame-border bg-frame-bg px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-[95vw]">
        
        {/* PROCESS INTRO */}
        <SectionIntro
          eyebrow="Workflow Rigor"
          title="Our Product Photography Process"
          align="center"
        >
          From brief to final catalog-ready assets, every phase is engineered to guarantee visual consistency, color fidelity, and strict platform compliance.
        </SectionIntro>

        {/* 6-STEP PROCESS GRID (3x2) */}
        <div className="mt-12 grid gap-px border-2 border-frame-border bg-frame-border sm:grid-cols-2 lg:grid-cols-3">
          {steps.map((step, index) => (
            <div key={index} className="bg-frame-bg p-6 md:p-8 flex flex-col justify-between hover:bg-frame-muted/10 transition-colors">
              <div>
                <div className="flex items-center justify-between border-b border-frame-border/60 pb-3 mb-4">
                  <span className="font-heading text-3xl font-black text-frame-accent">
                    {step.num}
                  </span>
                  <span className="font-mono text-[10px] uppercase tracking-wider text-frame-muted-fg border border-frame-border px-1.5 py-0.5">
                    {step.subtitle}
                  </span>
                </div>

                <h3 className="font-heading text-lg md:text-xl font-bold uppercase tracking-tight text-frame-fg leading-snug">
                  {step.title}
                </h3>

                <p className="mt-3 text-xs sm:text-sm font-medium leading-relaxed text-frame-muted-fg">
                  {step.desc}
                </p>
              </div>

              <div className="mt-6 border-t border-frame-border/60 pt-4">
                <span className="font-mono text-[10px] font-black uppercase tracking-[0.2em] text-frame-accent block mb-1">
                  Deliverable
                </span>
                <span className="text-xs font-bold text-frame-fg flex items-start gap-1.5">
                  <CheckIcon className="h-3.5 w-3.5 mt-0.5" />
                  <span className="leading-snug">{step.deliverable}</span>
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* TIMELINE MATRIX SECTION */}
        <div className="mt-20 border-2 border-frame-border bg-frame-muted/20 p-6 md:p-10">
          <div className="max-w-3xl mb-8">
            <span className="font-mono text-xs font-black uppercase tracking-[0.2em] text-frame-accent block mb-2">
              Production Turnaround
            </span>
            <h3 className="font-heading text-2xl md:text-3xl font-bold uppercase tracking-tight text-frame-fg">
              Typical Product Photography Timelines
            </h3>
            <p className="mt-2 text-xs sm:text-sm font-medium text-frame-muted-fg leading-relaxed">
              Timelines depend on product quantity, photography style, styling requirements, and post-production scope. For larger catalogs, production can be scheduled in staged batches so approved images can be uploaded progressively.
            </p>
          </div>

          <div className="overflow-x-auto border-2 border-frame-border bg-frame-bg">
            <table className="w-full text-left text-xs md:text-sm">
              <thead className="border-b-2 border-frame-border bg-frame-muted/40 font-mono text-[11px] font-black uppercase tracking-wider text-frame-accent">
                <tr>
                  <th className="p-4 md:p-5">Project Type</th>
                  <th className="p-4 md:p-5">Typical Timeline</th>
                  <th className="p-4 md:p-5 hidden sm:table-cell">Production Scope</th>
                  <th className="p-4 md:p-5 hidden md:table-cell">Best Fit</th>
                </tr>
              </thead>
              <tbody className="divide-y border-frame-border font-medium">
                {timelines.map((item, tIdx) => (
                  <tr key={tIdx} className="hover:bg-frame-muted/20 transition-colors">
                    <td className="p-4 md:p-5 font-bold text-frame-fg whitespace-nowrap">
                      {item.projectType}
                    </td>
                    <td className="p-4 md:p-5 font-mono font-bold text-frame-accent whitespace-nowrap">
                      {item.timeline}
                    </td>
                    <td className="p-4 md:p-5 text-frame-muted-fg hidden sm:table-cell">
                      {item.scope}
                    </td>
                    <td className="p-4 md:p-5 text-frame-muted-fg hidden md:table-cell">
                      {item.idealFor}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 border-t border-frame-border/80 pt-4 text-xs font-mono text-frame-muted-fg">
            <span>Progressive batch delivery available for large catalogs (50+ products).</span>
            <span className="text-frame-accent font-bold">Fast-track options available on request</span>
          </div>
        </div>

      </div>
    </section>
  )
}
