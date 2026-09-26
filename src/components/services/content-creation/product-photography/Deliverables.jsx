import { SectionIntro, PosterButton } from '../../../Kinetic'

function CheckIcon({ className = "h-4 w-4 shrink-0 text-frame-accent mt-0.5" }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 20 20" fill="none" className={className}>
      <path d="m4.5 10 3.5 3.5 7.5-7.5" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

const standardDeliverables = [
  {
    num: "01",
    title: "Captured Product Images",
    desc: "Shot on high-resolution commercial camera sensors with calibrated prime lenses for optical clarity."
  },
  {
    num: "02",
    title: "White-Background Images",
    desc: "Pure RGB 255,255,255 background isolation with natural contact drop shadows or reflection treatment."
  },
  {
    num: "03",
    title: "Lifestyle & Contextual Images",
    desc: "Staged in-use environmental scenes highlighting scale, real-world utility, and emotional brand resonance."
  },
  {
    num: "04",
    title: "Macro Detail Close-Ups",
    desc: "Extreme close-ups highlighting material textures, fine stitching, control dials, and packaging finishes."
  },
  {
    num: "05",
    title: "Multi-Angle Coverage Sets",
    desc: "Uniform front, side, rear, top, and 3/4 perspective sets ensuring complete 360-degree visual understanding."
  },
  {
    num: "06",
    title: "Color-Corrected Masters",
    desc: "Calibrated to true-to-life physical swatches with dust, scratch, and minor shooting-artifact removal."
  },
  {
    num: "07",
    title: "Platform-Ready Multi-Crops",
    desc: "Ready-to-upload exports formatted specifically for Amazon, Daraz, Shopify, and social ad dimensions."
  },
  {
    num: "08",
    title: "SKU-by-SKU Folders",
    desc: "Cleanly indexed by SKU code and shot variant, making bulk catalog uploads effortless for your team."
  },
  {
    num: "09",
    title: "Consistent Variant Treatment",
    desc: "Strictly matching lighting, camera height, and perspective across colorways, sizes, and collection bundles."
  },
  {
    num: "10",
    title: "Publish-Ready Assets",
    desc: "Delivered via high-speed cloud drive in both maximum-resolution TIFF/PNG and web-optimized WebP/JPG."
  }
]

const scopingChecklist = [
  "Exact number of products & physical SKU variants",
  "Approved shot list (hero, details, lifestyle, scale)",
  "Final image count commitments per SKU",
  "Target publication platforms (Amazon, Daraz, Shopify, Ads)",
  "Styling, props, and environmental background aesthetics",
  "Export resolution, file formats, and naming taxonomy"
]

export default function Deliverables() {
  return (
    <section className="border-b-2 border-frame-border bg-frame-muted/20 px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro
          eyebrow="Asset Handover"
          title="What You Receive With Your Product Photography"
          align="center"
        >
          Comprehensive, production-ready image packages engineered for immediate store publishing and catalog deployment.
        </SectionIntro>

        {/* BALANCED 5x2 GRID FOR 10 DELIVERABLES */}
        <div className="mt-12 grid gap-px border-2 border-frame-border bg-frame-border sm:grid-cols-2 lg:grid-cols-5">
          {standardDeliverables.map((item, idx) => (
            <div
              key={idx}
              className="bg-frame-bg p-5 md:p-6 flex flex-col justify-between hover:bg-frame-muted/10 transition-colors"
            >
              <div>
                <div className="flex items-center justify-between border-b border-frame-border/60 pb-2 mb-3">
                  <span className="font-mono text-xs font-black text-frame-accent">
                    Asset {item.num}
                  </span>
                  <CheckIcon className="h-4 w-4" />
                </div>
                <h4 className="font-heading text-base font-bold uppercase tracking-tight text-frame-fg leading-snug">
                  {item.title}
                </h4>
                <p className="mt-2 text-xs font-medium leading-relaxed text-frame-muted-fg">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* 2-COLUMN BALANCED CONTAINER: SCOPE ALIGNMENT + UPGRADES */}
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          
          {/* PRE-PRODUCTION ALIGNMENT */}
          <div className="border-2 border-frame-border bg-frame-bg p-6 md:p-8 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between border-b border-frame-border/60 pb-3 mb-4">
                <span className="font-mono text-xs font-black uppercase tracking-[0.2em] text-frame-accent">
                  Pre-Production Alignment
                </span>
                <span className="font-mono text-[10px] text-frame-muted-fg border border-frame-border px-1.5 py-0.5">
                  6-Point Scope
                </span>
              </div>
              <h3 className="font-heading text-xl font-bold uppercase tracking-tight text-frame-fg">
                Scope Confirmed Upfront
              </h3>
              <p className="mt-2 text-xs sm:text-sm font-medium text-frame-muted-fg leading-relaxed">
                Before production begins, we explicitly document every requirement so expectations, deliverables, and budgets remain 100% transparent:
              </p>

              <ul className="mt-4 space-y-2 text-xs sm:text-sm font-medium text-frame-fg">
                {scopingChecklist.map((check, cIdx) => (
                  <li key={cIdx} className="flex items-start gap-2">
                    <CheckIcon className="h-3.5 w-3.5 mt-0.5" />
                    <span>{check}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* CUSTOM SCOPE & UPGRADES */}
          <div className="border-2 border-frame-border bg-frame-bg p-6 md:p-8 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between border-b border-frame-border/60 pb-3 mb-4">
                <span className="font-mono text-xs font-black uppercase tracking-[0.2em] text-frame-accent">
                  Custom Production Scope
                </span>
                <span className="font-mono text-[10px] text-frame-muted-fg border border-frame-border px-1.5 py-0.5">
                  Optional Add-Ons
                </span>
              </div>
              <h3 className="font-heading text-xl font-bold uppercase tracking-tight text-frame-fg">
                Separately Scoped Upgrades
              </h3>
              <p className="mt-2 text-xs sm:text-sm font-medium text-frame-muted-fg leading-relaxed">
                Specialized production requirements are scoped transparently on demand when your campaign calls for expanded creative resources:
              </p>

              <div className="mt-4 space-y-2.5 text-xs sm:text-sm font-medium text-frame-muted-fg">
                <div className="p-2.5 border border-frame-border bg-frame-muted/20 flex items-start gap-2">
                  <CheckIcon className="h-3.5 w-3.5 mt-0.5" />
                  <span><strong className="text-frame-fg">Raw Camera Files:</strong> Uncompressed high-bitrate master files and layered PSD retouching assets.</span>
                </div>
                <div className="p-2.5 border border-frame-border bg-frame-muted/20 flex items-start gap-2">
                  <CheckIcon className="h-3.5 w-3.5 mt-0.5" />
                  <span><strong className="text-frame-fg">Talent & Set Staging:</strong> On-model casting, hair/makeup stylists, custom set builds, and external location permits.</span>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-frame-border/60">
              <PosterButton href="/contact" variant="outline" className="w-full text-center">
                Discuss Custom Production Scope &rarr;
              </PosterButton>
            </div>
          </div>

        </div>

      </div>
    </section>
  )
}
