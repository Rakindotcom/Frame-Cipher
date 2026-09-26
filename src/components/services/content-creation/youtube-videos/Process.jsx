import { SectionIntro, PosterButton } from '../../../Kinetic'

const processSteps = [
  {
    num: '01',
    title: 'Discovery & Format Selection',
    desc: 'We start with the video’s purpose, target audience, subject matter, expected runtime, filming environment, and required deliverables. We determine whether talking-head, interview, documentary, or tutorial format fits best.',
    timing: 'Step 01'
  },
  {
    num: '02',
    title: 'Pre-Production Planning',
    desc: 'We develop the script or structured outline and prepare the visual shot list, location scouting, equipment selection, presenter preparation, lighting plan, audio setup, and on-screen asset requirements.',
    timing: 'Step 02'
  },
  {
    num: '03',
    title: 'Filming',
    desc: 'Production covers the agreed camera setup (single or multi-camera 4K), studio lighting, wireless audio recording, active presenter direction, main primary footage, and extensive supporting B-roll on set.',
    timing: 'Step 03'
  },
  {
    num: '04',
    title: 'Editing & Post-Production',
    desc: 'We assemble the raw footage into a cohesive narrative, executing long-form retention pacing, dialogue trimming, B-roll integration, on-screen typography, motion graphics, color grading, and broadcast audio mixing.',
    timing: 'Step 04'
  },
  {
    num: '05',
    title: 'Review & Delivery',
    desc: 'You review the agreed draft and provide consolidated feedback. We handle the included revisions directly before exporting and delivering final master video files, thumbnails, and short-form cutdowns.',
    timing: 'Step 05'
  }
]

const timelineStages = [
  {
    stage: 'Stage 01: Pre-Production',
    duration: 'A few business days to 1 week',
    focus: 'Scripting, outline development, location & studio scheduling, talent preparation, and shot list approval.'
  },
  {
    stage: 'Stage 02: Filming',
    duration: 'Scheduled upon brief approval',
    focus: 'Single-day or multi-day shoot sessions executed on location or in studio with 4K cameras, lighting, and audio crew.'
  },
  {
    stage: 'Stage 03: Editing & Delivery',
    duration: '1 to 2 weeks post-filming',
    focus: 'Assembly, dialogue editing, B-roll overlay, color grading, audio mastering, custom thumbnail design, and review revisions.'
  }
]

export default function Process() {
  return (
    <section className="border-b-2 border-frame-border bg-frame-bg px-4 py-16 md:px-8 md:py-24">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro
          eyebrow="Lifecycle & Execution"
          title="How We Produce YouTube Videos"
        >
          A disciplined 5-stage production methodology engineered to keep schedules predictable, creative standards high, and final exports on time.
        </SectionIntro>

        {/* 5 STEPS GRID */}
        <div className="mt-12 grid gap-px border-2 border-frame-border bg-frame-border sm:grid-cols-2 lg:grid-cols-3">
          {processSteps.map((step, idx) => (
            <div
              key={step.num}
              className={`bg-frame-bg p-6 md:p-8 flex flex-col justify-between ${
                idx === 4 ? 'sm:col-span-2 lg:col-span-1' : ''
              }`}
            >
              <div>
                <div className="flex items-center justify-between border-b border-frame-border/60 pb-3">
                  <span className="font-heading text-2xl font-bold text-frame-accent">
                    {step.num}
                  </span>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-frame-muted-fg">
                    {step.timing}
                  </span>
                </div>
                <h3 className="mt-4 font-heading text-lg md:text-xl font-bold uppercase tracking-tight text-frame-fg">
                  {step.title}
                </h3>
                <p className="mt-3 text-xs sm:text-sm font-medium leading-relaxed text-frame-muted-fg">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* TIMELINE SECTION */}
        <div className="mt-16 border-2 border-frame-border bg-frame-muted/20 p-6 md:p-10">
          <div className="max-w-3xl">
            <span className="text-xs font-black uppercase tracking-[0.24em] text-frame-accent">
              Turnaround Schedule
            </span>
            <h3 className="mt-2 font-heading text-2xl md:text-3xl font-bold uppercase tracking-tight text-frame-fg">
              YouTube Video Production Timeline
            </h3>
            <p className="mt-3 text-xs sm:text-sm font-medium leading-relaxed text-frame-muted-fg">
              A standard YouTube video moves through three core phases. Final schedules are customized and locked during pre-production scoping.
            </p>
          </div>

          <div className="mt-8 grid gap-px border-2 border-frame-border bg-frame-border md:grid-cols-3">
            {timelineStages.map((item, idx) => (
              <div key={idx} className="bg-frame-bg p-6">
                <span className="text-xs font-black uppercase tracking-[0.2em] text-frame-accent">
                  {item.stage}
                </span>
                <p className="mt-2 text-sm font-bold text-frame-fg">
                  {item.duration}
                </p>
                <p className="mt-2 text-xs sm:text-sm font-medium leading-relaxed text-frame-muted-fg">
                  {item.focus}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-8 flex flex-col items-center justify-between gap-4 border-t border-frame-border/60 pt-6 sm:flex-row">
            <p className="text-xs font-medium text-frame-fg">
              Have an urgent release deadline or launch event? Expedited filming and fast-track editing can be accommodated.
            </p>
            <PosterButton href="/contact" className="shrink-0 text-xs sm:text-sm">
              Start Your Production Brief &rarr;
            </PosterButton>
          </div>
        </div>
      </div>
    </section>
  )
}
