import { SectionIntro, PosterButton } from '../../../Kinetic'

const processPhases = [
  {
    number: '01',
    title: 'Discovery',
    description: 'We discuss your business objective, audience, core message, target platforms, preferred visual style, locations, timeline, and required deliverables.',
    deliverable: 'Initial project brief & alignment'
  },
  {
    number: '02',
    title: 'Creative Direction',
    description: 'We define the creative approach, including narrative structure, scriptwriting, visual references, storyboards, and overall production direction.',
    deliverable: 'Approved concept & script treatment'
  },
  {
    number: '03',
    title: 'Pre-Production',
    description: 'Locations, talent, shooting schedule, shot lists, crew allocation, lighting packages, and cinema equipment are finalized before filming begins.',
    deliverable: 'Confirmed call sheet & shoot logistics'
  },
  {
    number: '04',
    title: 'Production',
    description: 'The approved plan guides the shoot. We capture interviews, scenes, product demonstrations, b-roll, and atmospheric footage on location or in studio.',
    deliverable: 'Raw cinema footage & clean audio stems'
  },
  {
    number: '05',
    title: 'Post-Production',
    description: 'Footage moves into rough-cut assembly, fine pacing, color correction, color grading, sound design, licensed music scoring, titles, and captions.',
    deliverable: 'First-cut review link'
  },
  {
    number: '06',
    title: 'Review & Revisions',
    description: 'You review the draft milestone. Feedback is consolidated and addressed according to the revision scope defined in your project proposal.',
    deliverable: 'Client-approved video master'
  },
  {
    number: '07',
    title: 'Final Delivery',
    description: 'We export and deliver high-bitrate master files, platform-specific crops (16:9, 9:16, 1:1), subtitle files, and thumbnail assets via cloud archive.',
    deliverable: 'Final masters & platform packages'
  }
]

const workflowBadges = [
  'Brief',
  'Creative Direction',
  'Pre-Production',
  'Filming',
  'Editing',
  'Review',
  'Revisions',
  'Final Delivery'
]

const timelineFactors = [
  'Type and complexity of video',
  'Number of finished deliverables',
  'Filming locations & travel requirements',
  'Required footage volume & b-roll depth',
  'Scripting & voiceover requirements',
  'Visual effects & motion graphics intensity',
  'Stakeholder feedback & approval turnaround'
]

export default function Process() {
  return (
    <section id="process" className="border-t-2 border-frame-border bg-frame-bg px-4 py-20 md:px-8 md:py-28 scroll-mt-24">
      <div className="mx-auto max-w-[95vw]">
        {/* 7-STEP PROCESS */}
        <SectionIntro
          eyebrow="Execution Framework"
          title="Our Video Production Process"
          index="06"
        >
          Every video project follows a structured 7-stage workflow from strategic discovery to final delivery, ensuring creative consistency and smooth execution.
        </SectionIntro>

        <div className="grid border-2 border-frame-border bg-frame-border gap-px sm:grid-cols-2 lg:grid-cols-4">
          {processPhases.map((phase) => (
            <div
              key={phase.number}
              className="relative overflow-hidden bg-frame-bg p-7 flex flex-col justify-between"
            >
              <span
                className="pointer-events-none absolute -right-2 -bottom-6 font-heading text-[6rem] md:text-[7rem] font-bold leading-none tracking-tighter text-frame-muted/25 select-none"
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
              How Long Does Video Production Take?
            </h3>
            <p className="mt-3 text-sm md:text-base font-medium text-frame-muted-fg leading-relaxed">
              Production timelines vary according to scope. A simple interview production moves quickly from brief to delivery (3–7 business days), while larger corporate films, commercials, and brand films require 2–4 weeks for planning, filming, editing, and approvals.
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
              Key Factors Defining Your Project Timeline:
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
