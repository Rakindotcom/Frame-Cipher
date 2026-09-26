import { SectionIntro, PosterButton } from '../../../Kinetic'

const generalPipeline = [
  'Coordinated Batch Shoot',
  'Main High-Impact Reel',
  'Quick Educational Clips',
  'Product Feature Cuts',
  'Founder Perspectives',
  'Vertical Paid Ad Variations'
]

const productPipeline = [
  'Full Product Demonstration',
  'Close-Up Feature Reels',
  'Customer Problem / Solution',
  'Paid Social Ad Variations',
  'Vertical Product Page Video'
]

const categorizedDeliverables = [
  {
    category: 'Creative Deliverables',
    items: [
      'Short-form content concepts & theme outlines',
      'Hook development & opening variations',
      'Scripts or structured talking points',
      'Visual shot lists & framing references',
      'Creative angles tailored to target platforms'
    ]
  },
  {
    category: 'Production Deliverables',
    items: [
      'Mobile-native vertical (9:16) 4K filming',
      'Presenter, founder, or actor direction',
      'Product live demonstrations & macro b-roll',
      'Clean audio capture with wireless lavaliers',
      'Multiple takes for natural on-camera delivery'
    ]
  },
  {
    category: 'Post-Production Deliverables',
    items: [
      'Fast-paced mobile editing & jump cuts',
      'Dynamic branded captions & word animations',
      'Color correction & cinematic mobile grading',
      'Sound effects, licensed audio & trending music',
      'On-screen motion text, titles & stickers'
    ]
  },
  {
    category: 'Final Platform Deliverables',
    items: [
      'Optimized Instagram Reels files (1080x1920)',
      'TikTok-ready exports with native pacing',
      'YouTube Shorts with custom preview frames',
      'Facebook Reels & paid social variations',
      'Cloud repository organized by batch & theme'
    ]
  }
]

export default function ProductionMultiplier() {
  return (
    <section className="border-t-2 border-frame-border bg-frame-bg px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-[95vw]">
        {/* SECTION 1: ASSET MULTIPLIER */}
        <SectionIntro
          eyebrow="Production Efficiency"
          title="One Shoot, Multiple Short-Form Assets"
          index="04"
        >
          A well-planned filming session can create multiple useful assets. Batch production eliminates repeated setup friction and provides your brand with a continuous content pipeline.
        </SectionIntro>

        <div className="grid gap-6 lg:grid-cols-2">
          {/* PIPELINE 1 */}
          <div className="border-2 border-frame-border bg-frame-bg p-7 md:p-9">
            <span className="text-xs font-black uppercase tracking-[0.24em] text-frame-accent">
              Brand & Founder Content Batch
            </span>
            <h3 className="mt-2 font-heading text-xl md:text-2xl font-bold uppercase tracking-tight text-frame-fg">
              1 Half-Day Shoot → 6–10 Short Videos
            </h3>
            <p className="mt-2 text-xs md:text-sm font-medium text-frame-muted-fg leading-relaxed">
              We batch-film talking points, quick advice, and brand moments to create weeks of social publishing from a single session:
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-2">
              {generalPipeline.map((item, idx) => (
                <div key={idx} className="flex items-center gap-2">
                  <span className="border border-frame-border/80 bg-frame-muted/30 px-3 py-1.5 text-xs font-bold uppercase tracking-wider text-frame-fg">
                    {item}
                  </span>
                  {idx < generalPipeline.length - 1 && (
                    <span className="text-frame-accent font-bold">&rarr;</span>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* PIPELINE 2 */}
          <div className="border-2 border-frame-border bg-frame-bg p-7 md:p-9">
            <span className="text-xs font-black uppercase tracking-[0.24em] text-frame-accent">
              Product & Ecommerce Content Batch
            </span>
            <h3 className="mt-2 font-heading text-xl md:text-2xl font-bold uppercase tracking-tight text-frame-fg">
              1 Product Session → 5+ Conversion Assets
            </h3>
            <p className="mt-2 text-xs md:text-sm font-medium text-frame-muted-fg leading-relaxed">
              Capture demos, macro details, unboxings, and multiple hook variations in one session to feed organic social and paid ad tests:
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-2">
              {productPipeline.map((item, idx) => (
                <div key={idx} className="flex items-center gap-2">
                  <span className="border border-frame-border/80 bg-frame-muted/30 px-3 py-1.5 text-xs font-bold uppercase tracking-wider text-frame-fg">
                    {item}
                  </span>
                  {idx < productPipeline.length - 1 && (
                    <span className="text-frame-accent font-bold">&rarr;</span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* SECTION 2: WHAT YOU RECEIVE */}
        <div className="mt-20">
          <div className="mb-10 max-w-3xl">
            <span className="text-xs md:text-sm font-black uppercase tracking-[0.28em] text-frame-accent">
              Package Deliverables
            </span>
            <h3 className="mt-2 font-heading text-2xl md:text-4xl font-bold uppercase tracking-tight text-frame-fg">
              What You Receive
            </h3>
            <p className="mt-3 text-sm md:text-base font-medium text-frame-muted-fg leading-relaxed">
              Your exact deliverables depend on the selected production package, organized into a clean, platform-ready digital delivery folder:
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
              Raw vertical footage, editable project files, voiceover tracks, and additional ad variation cuts can also be included upon request.
            </p>
            <PosterButton href="/contact" className="shrink-0 text-xs sm:text-sm">
              Plan a Multi-Video Production Session &rarr;
            </PosterButton>
          </div>
        </div>
      </div>
    </section>
  )
}
