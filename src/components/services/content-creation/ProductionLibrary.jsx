import { SectionIntro, PosterButton } from '../../Kinetic'

const capturePhases = [
  {
    step: '01',
    title: 'Plan the Core Shoot',
    description: 'We identify the primary asset the production needs to deliver and plan the shoot around it, setting up the lighting, staging, and talent around key commercial deliverables.'
  },
  {
    step: '02',
    title: 'Capture Multiple Content Angles',
    description: 'Where practical, the same production captures supporting b-roll footage, alternative angles, product macro details, lifestyle visuals, and behind-the-scenes material.'
  },
  {
    step: '03',
    title: 'Create Platform-Specific Versions',
    description: 'One piece of footage yields tailored edits for YouTube (16:9), Instagram & TikTok (9:16), feed carousels (4:5 or 1:1), and high-resolution website hero loops.'
  },
  {
    step: '04',
    title: 'Build Reusable Brand Assets',
    description: 'A well-planned shoot creates a durable visual library that supports future campaigns and monthly publishing without needing a new production session for every single post.'
  }
]

const deliverables = [
  {
    title: 'Production-Ready Video Assets',
    description: 'Final edited videos with color grading, sound design, motion graphics, and subtitles prepared for agreed platforms and ad placements.'
  },
  {
    title: 'Edited & Retouched Photography',
    description: 'Selected photographs meticulously processed, retouched, color calibrated, and delivered in print- and web-ready resolutions.'
  },
  {
    title: 'Graphic & Motion Assets',
    description: 'Finished social graphics, ad creatives, presentation decks, kinetic typography, and motion animations created under your brand guidelines.'
  },
  {
    title: 'Platform-Ready Formats',
    description: 'All assets exported in exact dimensions, compression ratios, and aspect ratios (16:9, 9:16, 1:1, 4:5) for immediate channel distribution.'
  },
  {
    title: 'Organized Deliverable Repository',
    description: 'Clean cloud directory structure with intuitive naming. Raw footage, editable source files, and licensing documentation can be included as scoped.'
  }
]

export default function ProductionLibrary() {
  return (
    <section className="border-t-2 border-frame-border bg-frame-bg px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-[95vw]">
        {/* MULTIPLIER SECTION */}
        <SectionIntro
          eyebrow="Production Efficiency"
          title="From One Production Session to a Complete Content Library"
          index="03"
        >
          A strong production project should not always end with one finished asset. When the format allows, we plan production to capture multiple useful content opportunities from the same shoot.
        </SectionIntro>

        <div className="grid border-2 border-frame-border bg-frame-border gap-px sm:grid-cols-2 lg:grid-cols-4">
          {capturePhases.map((phase) => (
            <div key={phase.step} className="bg-frame-bg p-6 md:p-8 flex flex-col justify-between">
              <div>
                <span className="font-heading text-3xl font-black text-frame-accent">
                  {phase.step}
                </span>
                <h3 className="mt-3 font-heading text-lg md:text-xl font-bold uppercase tracking-tight text-frame-fg">
                  {phase.title}
                </h3>
                <p className="mt-3 text-xs md:text-sm font-medium leading-relaxed text-frame-muted-fg">
                  {phase.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* DELIVERABLES SHOWCASE */}
        <div className="mt-20">
          <div className="mb-10 max-w-3xl">
            <span className="text-xs md:text-sm font-black uppercase tracking-[0.28em] text-frame-accent">
              Tangible Outcomes
            </span>
            <h3 className="mt-2 font-heading text-2xl md:text-4xl font-bold uppercase tracking-tight text-frame-fg">
              What You Receive
            </h3>
            <p className="mt-3 text-sm md:text-base font-medium text-frame-muted-fg leading-relaxed">
              Your final deliverables depend on the agreed project scope, delivered as an organized package ready for immediate marketing deployment.
            </p>
          </div>

          <div className="grid border-2 border-frame-border bg-frame-border gap-px sm:grid-cols-2 lg:grid-cols-3">
            {deliverables.map((item, idx) => (
              <div key={idx} className="bg-frame-bg p-6 md:p-8 flex flex-col justify-between">
                <div>
                  <span className="flex h-8 w-8 items-center justify-center border-2 border-frame-accent bg-frame-accent/10 font-heading text-xs font-bold text-frame-accent">
                    ✓
                  </span>
                  <h4 className="mt-4 font-heading text-lg font-bold uppercase tracking-tight text-frame-fg">
                    {item.title}
                  </h4>
                  <p className="mt-2 text-xs md:text-sm font-medium leading-relaxed text-frame-muted-fg">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
            <div className="bg-frame-accent/10 border-2 border-frame-accent p-6 md:p-8 flex flex-col justify-between">
              <div>
                <span className="text-xs font-black uppercase tracking-[0.24em] text-frame-accent">
                  Custom Inclusions
                </span>
                <h4 className="mt-2 font-heading text-lg font-bold uppercase tracking-tight text-frame-fg">
                  Raw Files & Licensing
                </h4>
                <p className="mt-2 text-xs md:text-sm font-medium leading-relaxed text-frame-muted-fg">
                  Source files, editable project files, commercial licensing, and raw 4K footage can be included when agreed during initial project scoping.
                </p>
              </div>
              <div className="mt-6">
                <PosterButton href="/contact" variant="outline" className="w-full text-xs">
                  Discuss Raw File Licensing &rarr;
                </PosterButton>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
