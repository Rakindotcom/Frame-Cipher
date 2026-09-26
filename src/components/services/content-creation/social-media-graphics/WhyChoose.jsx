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
    title: "Platform-Aware Creative",
    desc: "We do not treat social graphics as generic artwork resized for different platforms. Format, native aspect ratios, feed crops, typography hierarchy, and real mobile display conditions drive the design."
  },
  {
    num: "02",
    title: "Brand-Consistent Production",
    desc: "Recurring graphics are engineered to strengthen cumulative visual recognition over time rather than generating a disconnected collection of random aesthetic experiments."
  },
  {
    num: "03",
    title: "One In-House Creative Team",
    desc: "Social graphics seamlessly connect with our Branding, Graphic Design, Product Photography, Short-Form Video, Motion Graphics, and Paid Ads teams when campaigns require multiple assets."
  },
  {
    num: "04",
    title: "Reusable Design Systems",
    desc: "For recurring content, we build modular Figma or Canva templates and repeatable visual frameworks so your internal team can self-serve future posts efficiently."
  },
  {
    num: "05",
    title: "Transparent Scope Upfront",
    desc: "You know exactly what is being designed, how many aspect ratios are delivered, which master files you receive, and what revision rounds cover before production starts."
  },
  {
    num: "06",
    title: "Predictable Turnaround SLAs",
    desc: "Whether working on single campaign batches or recurring monthly retainers, our production sprints follow strict agreed turnaround calendars with zero unannounced delays."
  }
]

const sampleShowcase = [
  {
    category: "B2B SaaS & Tech",
    badge: "LinkedIn Thought Leadership",
    objective: "Product Explainer Carousel & Feed Hook",
    format: "10-Slide Educational Carousel (4:5) + Single Feed Stills (1:1)",
    direction: "Dark mode terminal aesthetics, vibrant code syntax highlights, clean typography hierarchy, and a decisive booking CTA.",
    productionDetails: "Figma component system, calibrated for LinkedIn mobile PDF document viewer."
  },
  {
    category: "DTC Apparel & Lifestyle",
    badge: "Instagram & TikTok Campaign",
    objective: "Seasonal Flash-Sale Multi-Asset Suite",
    format: "Feed Posts (1:1), Stories (9:16) & Reel Covers",
    direction: "Bold high-contrast typographic discount stickers, dynamic product cutouts, and safe-zone-aligned swipe-up cues.",
    productionDetails: "Multi-platform aspect ratio batching with protected UI margin spacing."
  },
  {
    category: "Professional Services & Advisory",
    badge: "Monthly Retainer System",
    objective: "Client Testimonial & Industry Tip Templates",
    format: "Figma & Canva Editable Master Templates",
    direction: "Minimalist corporate typography, subtle brand motif watermarks, and modular headline swapping layouts.",
    productionDetails: "Layer-locked Canva templates with branded color variable tokens."
  }
]

export default function WhyChoose() {
  return (
    <section className="border-b-2 border-frame-border bg-frame-bg px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-[95vw]">
        
        {/* WHY CHOOSE INTRO */}
        <SectionIntro
          eyebrow="The Framecipher Advantage"
          title="Why Businesses Choose Framecipher"
          align="center"
        >
          We build social media graphics designed for real mobile platform constraints, cumulative brand recall, and measurable audience engagement.
        </SectionIntro>

        {/* 6 ADVANTAGES IN A BALANCED 3x2 GRID */}
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
                    Advantage 0{index + 1}
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
                <span>Verified Creative Standard</span>
              </div>
            </div>
          ))}
        </div>

        {/* SELECTED SOCIAL MEDIA GRAPHICS WORK SHOWCASE */}
        <div id="portfolio" className="mt-20 border-2 border-frame-border bg-frame-muted/20 p-6 md:p-10 scroll-mt-20">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b-2 border-frame-border pb-6">
            <div className="max-w-2xl">
              <span className="font-mono text-xs font-black uppercase tracking-[0.2em] text-frame-accent block mb-2">
                Creative Portfolio
              </span>
              <h3 className="font-heading text-2xl md:text-3xl font-bold uppercase tracking-tight text-frame-fg">
                Selected Social Media Graphics Work
              </h3>
              <p className="mt-2 text-xs sm:text-sm font-medium leading-relaxed text-frame-muted-fg">
                See verified social creative workflows showing design objectives, content formats, safe-zone engineering, and real-world feed applications.
              </p>
            </div>
            <div className="shrink-0">
              <PosterButton href="/projects#social-media-graphics">
                View Social Media Graphics Portfolio &rarr;
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
                      {proj.format}
                    </p>
                  </div>

                  <p className="text-xs font-medium leading-relaxed text-frame-muted-fg">
                    <strong className="text-frame-fg">Creative Direction:</strong> {proj.direction}
                  </p>

                  <div className="border-t border-frame-border/60 pt-3 text-xs space-y-1 font-mono">
                    <p className="text-frame-muted-fg">
                      <strong className="text-frame-fg">Engineering:</strong> {proj.productionDetails}
                    </p>
                  </div>
                </div>

                <div className="mt-6 border-t border-frame-border/60 pt-3 flex items-center justify-between text-[11px] font-mono font-bold text-frame-accent">
                  <span>100% Safe-Zone Compliant</span>
                  <span>Published Asset</span>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 border-t border-frame-border/60 pt-3 text-center">
            <p className="text-[11px] font-mono text-frame-muted-fg">
              * Note: We showcase verified production workflows and approved designs. Client performance metrics are disclosed only under explicit authorization.
            </p>
          </div>
        </div>

      </div>
    </section>
  )
}
