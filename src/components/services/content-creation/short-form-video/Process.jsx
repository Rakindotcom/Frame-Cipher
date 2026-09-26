import { SectionIntro, PosterButton } from '../../../Kinetic'

const processPhases = [
  {
    number: '01',
    title: 'Discovery & Content Planning',
    description: 'We discuss your business objective, target audience, content type, platform, key message, brand direction, location, timeline, and expected deliverables to establish a clear production brief.',
    deliverable: 'Content strategy brief & platform alignment'
  },
  {
    number: '02',
    title: 'Hook & Concept Development',
    description: 'We develop opening hooks, multiple creative angles, scripts or structured talking points, visual references, and short-form series frameworks tailored to your industry.',
    deliverable: 'Approved scripts, hook variations & shot lists'
  },
  {
    number: '03',
    title: 'Batch Filming',
    description: 'We organize multiple videos into one coordinated filming session across agreed locations, setups, and presenters, capturing multiple takes for natural on-camera delivery.',
    deliverable: 'Raw vertical footage & clean audio stems'
  },
  {
    number: '04',
    title: 'Editing & Finishing',
    description: 'Footage is edited into mobile-native cuts with fast-paced transitions, branded dynamic captions, licensed music, sound effects, color grading, and clear calls to action.',
    deliverable: 'First-cut review links for all batch videos'
  },
  {
    number: '05',
    title: 'Review & Revisions',
    description: 'You review the agreed draft milestone. Feedback is consolidated and addressed according to the revision scope defined in your project proposal.',
    deliverable: 'Client-approved short-form video assets'
  },
  {
    number: '06',
    title: 'Final Delivery',
    description: 'Once approved, we prepare final files exported in exact platform specifications (Reels, TikTok, Shorts), organized in cloud folders ready to publish.',
    deliverable: 'Platform-ready 9:16 files & delivery repository'
  }
]

const workflowBadges = [
  'Brief',
  'Concept',
  'Filming',
  'Editing',
  'Review',
  'Final Delivery'
]

const timelineFactors = [
  'Number of videos in the batch',
  'Scripting vs. talking-point formats',
  'Number of shooting locations',
  'Talent & presenter availability',
  'Production complexity & prop setup',
  'Motion graphics & animated text depth',
  'Stakeholder feedback & revision speed'
]

export default function Process() {
  return (
    <section id="process" className="border-t-2 border-frame-border bg-frame-bg px-4 py-20 md:px-8 md:py-28 scroll-mt-24">
      <div className="mx-auto max-w-[95vw]">
        {/* 6-STEP PROCESS */}
        <SectionIntro
          eyebrow="Execution Framework"
          title="How We Produce Short-Form Video"
          index="05"
        >
          We follow a clear, collaborative process to turn business goals into engaging vertical videos that capture immediate attention.
        </SectionIntro>

        <div className="grid border-2 border-frame-border bg-frame-border gap-px sm:grid-cols-2 lg:grid-cols-3">
          {processPhases.map((phase) => (
            <div
              key={phase.number}
              className="relative overflow-hidden bg-frame-bg p-7 md:p-9 flex flex-col justify-between"
            >
              <span
                className="pointer-events-none absolute -right-2 -bottom-6 font-heading text-[6.5rem] md:text-[7.5rem] font-bold leading-none tracking-tighter text-frame-muted/25 select-none"
                aria-hidden="true"
              >
                {phase.number}
              </span>
              <div className="relative z-10">
                <span className="text-xs font-black uppercase tracking-[0.28em] text-frame-accent">
                  Phase {phase.number}
                </span>
                <h3 className="mt-2 font-heading text-lg md:text-xl font-bold uppercase tracking-tight text-frame-fg">
                  {phase.title}
                </h3>
                <p className="mt-3 text-xs md:text-sm font-medium leading-relaxed text-frame-muted-fg">
                  {phase.description}
                </p>
              </div>

              <div className="relative z-10 mt-6 border-t border-frame-border/60 pt-4">
                <span className="text-[11px] font-black uppercase tracking-[0.2em] text-frame-accent block mb-1">
                  Deliverable
                </span>
                <span className="text-xs font-semibold text-frame-fg">
                  {phase.deliverable}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* TIMELINE EXPECTATIONS */}
        <div className="mt-16 border-2 border-frame-border bg-frame-muted/30 p-7 md:p-12">
          <div className="max-w-3xl">
            <span className="text-xs font-black uppercase tracking-[0.28em] text-frame-accent">
              Cadence & Turnaround
            </span>
            <h3 className="mt-2 font-heading text-2xl md:text-4xl font-bold uppercase tracking-tight text-frame-fg">
              Short-Form Video Production Timeline
            </h3>
            <p className="mt-3 text-sm md:text-base font-medium text-frame-muted-fg leading-relaxed">
              Timelines depend on the number of videos and production setup. A simple batch can move quickly from brief to final delivery (3–7 business days). For recurring monthly production, filming is organized into scheduled batch sessions with editing and delivery handled throughout the agreed content cycle.
            </p>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-2 text-xs md:text-sm font-bold uppercase tracking-wider text-frame-fg">
            {workflowBadges.map((badge, bIdx) => (
              <div key={bIdx} className="flex items-center gap-2">
                <span className="border border-frame-border bg-frame-bg px-3 py-1.5">
                  {badge}
                </span>
                {bIdx < workflowBadges.length - 1 && (
                  <span className="text-frame-accent font-bold">&rarr;</span>
                )}
              </div>
            ))}
          </div>

          <div className="mt-8 border-t-2 border-frame-border pt-6">
            <h4 className="font-heading text-base font-bold uppercase tracking-tight text-frame-fg">
              Factors Influencing Batch Turnaround:
            </h4>
            <div className="mt-4 grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
              {timelineFactors.map((factor, fIdx) => (
                <div key={fIdx} className="flex items-center gap-2 border border-frame-border/80 bg-frame-bg px-3 py-2 text-xs font-medium text-frame-fg">
                  <span className="text-frame-accent font-bold">◆</span>
                  <span>{factor}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
