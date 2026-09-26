import { SectionIntro, PosterButton } from '../../../Kinetic'

const brandWorkflow = [
  'Main Brand Film (16:9)',
  'Social Media Cutdowns (9:16)',
  'Founder / Exec Highlights',
  'Vertical Teasers for Reels & TikTok',
  'Website Hero Background Loop',
  'Paid Ad Promotional Cut'
]

const productWorkflow = [
  'Flagship Product Video',
  'Macro Feature Focus Clips',
  'Performance Social Ads (A/B Hooks)',
  'Product Page Video (Ecommerce)',
  'Short How-To Demonstrations'
]

const categorizedDeliverables = [
  {
    category: 'Creative Deliverables',
    items: [
      'Concept development & creative treatment',
      'Full scriptwriting or structured talking points',
      'Narrative structure & scene sequencing',
      'Visual storyboards & detailed shot lists',
      'Art direction & styling guidelines'
    ]
  },
  {
    category: 'Production Deliverables',
    items: [
      'On-set cinema camera filming (4K/HD)',
      'Multi-source studio or field lighting setup',
      'Clean multi-track audio & lavalier recording',
      'Directed scenes, interviews & product demos',
      'Extensive atmospheric b-roll & macro footage'
    ]
  },
  {
    category: 'Post-Production Deliverables',
    items: [
      'Pacing, assembly & narrative fine-cut editing',
      'Commercial color correction & cinematic grading',
      'Audio cleanup, leveling & sound effect design',
      'Licensed background music score integration',
      'Kinetic motion graphics, titles & dynamic subtitles'
    ]
  },
  {
    category: 'Final Master Package',
    items: [
      'Uncompressed master exports in 16:9 4K/1080p',
      'Mobile vertical 9:16 cutdowns for social',
      'Clean exports (textless) & subtitle files (.SRT)',
      'Thumbnail frame design for YouTube & web',
      'Archived project delivery via fast cloud links'
    ]
  }
]

export default function ProductionMultiplier() {
  return (
    <section className="border-t-2 border-frame-border bg-frame-bg px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-[95vw]">
        {/* ASSET MULTIPLIER */}
        <SectionIntro
          eyebrow="Asset Efficiency"
          title="One Shoot, Multiple Video Assets"
          index="04"
        >
          A well-planned production can create more than one useful asset. When the footage and creative concept support it, one single shoot yields a complete multi-platform campaign library.
        </SectionIntro>

        <div className="grid gap-6 lg:grid-cols-2">
          {/* BRAND WORKFLOW */}
          <div className="border-2 border-frame-border bg-frame-bg p-7 md:p-9">
            <span className="text-xs font-black uppercase tracking-[0.24em] text-frame-accent">
              Brand & Corporate Productions
            </span>
            <h3 className="mt-2 font-heading text-xl md:text-2xl font-bold uppercase tracking-tight text-frame-fg">
              1 Shoot → 6 Tailored Assets
            </h3>
            <p className="mt-2 text-xs md:text-sm font-medium text-frame-muted-fg leading-relaxed">
              We capture the master story alongside secondary interviews and b-roll, giving your marketing team assets across multiple channels:
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-2">
              {brandWorkflow.map((item, idx) => (
                <div key={idx} className="flex items-center gap-2">
                  <span className="border border-frame-border/80 bg-frame-muted/30 px-3 py-1.5 text-xs font-bold uppercase tracking-wider text-frame-fg">
                    {item}
                  </span>
                  {idx < brandWorkflow.length - 1 && (
                    <span className="text-frame-accent font-bold">&rarr;</span>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* PRODUCT WORKFLOW */}
          <div className="border-2 border-frame-border bg-frame-bg p-7 md:p-9">
            <span className="text-xs font-black uppercase tracking-[0.24em] text-frame-accent">
              Product & Ecommerce Productions
            </span>
            <h3 className="mt-2 font-heading text-xl md:text-2xl font-bold uppercase tracking-tight text-frame-fg">
              1 Shoot → 5 Conversion Drivers
            </h3>
            <p className="mt-2 text-xs md:text-sm font-medium text-frame-muted-fg leading-relaxed">
              We capture the hero demo, close-up macro angles, and lifestyle usage in one session to fuel your entire sales funnel:
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-2">
              {productWorkflow.map((item, idx) => (
                <div key={idx} className="flex items-center gap-2">
                  <span className="border border-frame-border/80 bg-frame-muted/30 px-3 py-1.5 text-xs font-bold uppercase tracking-wider text-frame-fg">
                    {item}
                  </span>
                  {idx < productWorkflow.length - 1 && (
                    <span className="text-frame-accent font-bold">&rarr;</span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* WHAT YOU RECEIVE */}
        <div className="mt-20">
          <div className="mb-10 max-w-3xl">
            <span className="text-xs md:text-sm font-black uppercase tracking-[0.28em] text-frame-accent">
              Defined Package Inclusions
            </span>
            <h3 className="mt-2 font-heading text-2xl md:text-4xl font-bold uppercase tracking-tight text-frame-fg">
              What You Receive
            </h3>
            <p className="mt-3 text-sm md:text-base font-medium text-frame-muted-fg leading-relaxed">
              Your final deliverables depend on the approved project scope, organized into a clean and structured digital repository:
            </p>
          </div>

          <div className="grid border-2 border-frame-border bg-frame-border gap-px sm:grid-cols-2 lg:grid-cols-4">
            {categorizedDeliverables.map((cat, cIdx) => (
              <div key={cIdx} className="bg-frame-bg p-7 flex flex-col justify-between">
                <div>
                  <span className="text-xs font-black uppercase tracking-[0.22em] text-frame-accent">
                    Category 0{cIdx + 1}
                  </span>
                  <h4 className="mt-2 font-heading text-lg font-bold uppercase tracking-tight text-frame-fg">
                    {cat.category}
                  </h4>
                  <ul className="mt-5 space-y-2 border-t border-frame-border/60 pt-4 text-xs font-medium text-frame-fg/90">
                    {cat.items.map((item, iIdx) => (
                      <li key={iIdx} className="flex items-start gap-2">
                        <span className="text-frame-accent font-bold">✓</span>
                        <span className="leading-snug">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 border-2 border-frame-border bg-frame-muted/30 p-6 md:p-8">
            <p className="text-xs sm:text-sm font-medium text-frame-fg max-w-2xl">
              Raw 4K footage, editing project files, audio stems, and commercial talent releases can also be included when requested during project scoping.
            </p>
            <PosterButton href="/contact" className="shrink-0 text-xs sm:text-sm">
              Plan a Multi-Asset Video Production &rarr;
            </PosterButton>
          </div>
        </div>
      </div>
    </section>
  )
}
