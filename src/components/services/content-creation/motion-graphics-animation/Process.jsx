import { SectionIntro, PosterButton } from '../../../Kinetic'

const processSteps = [
  {
    num: '01',
    title: 'Discovery & Creative Direction',
    desc: 'We first understand the objective, audience, core message, target platform, brand guidelines, visual references, and confirm that motion graphics is the right format.',
    milestone: 'Brief Approval'
  },
  {
    num: '02',
    title: 'Script & Storyboard',
    desc: 'The narrative is structured before animation begins. The storyboard maps key visual moments, transitions, voice-over lines, and the logical sequence of information.',
    milestone: 'Narrative Sign-Off'
  },
  {
    num: '03',
    title: 'Style Frames & Visual Design',
    desc: 'Static, full-color style frames define typography, color palette, illustration style, character design, UI treatment, and composition. Once approved, this sets the visual law.',
    milestone: 'Visual Lock'
  },
  {
    num: '04',
    title: 'Animatic & Animation',
    desc: 'An animatic locks scene durations, narration timing, and pacing. Once the timing feels right, our animators execute full keyframe movement, physics, and rendering.',
    milestone: 'Motion Execution'
  },
  {
    num: '05',
    title: 'Sound, Review & Final Delivery',
    desc: 'Voice-over, bespoke sound effects, licensed music, and final audio sweetening are layered in. You review the draft for agreed revisions before master file export.',
    milestone: 'Final Export'
  }
]

const timelines = [
  {
    type: 'Logo Animation / Brand Sting',
    duration: '3–7 business days',
    scope: 'Quick vector reveals, intro/outro stings, sound effect sync.'
  },
  {
    type: 'Simple Social Motion Creative',
    duration: '3–7 business days',
    scope: 'Kinetic text, campaign announcements, 15-second social cuts.'
  },
  {
    type: 'Data or Infographic Animation',
    duration: '1–3 weeks',
    scope: 'Chart builds, statistical comparisons, report visualization.'
  },
  {
    type: 'Standard Explainer Animation',
    duration: '2–4 weeks',
    scope: '60–90 second SaaS or service walkthroughs with full voice-over.'
  },
  {
    type: 'Complex 3D Product Animation',
    duration: 'Scoped individually',
    scope: 'Custom CAD/mesh modeling, photorealistic rendering, complex camera sweeps.'
  }
]

export default function Process() {
  return (
    <section className="border-b-2 border-frame-border bg-frame-bg px-4 py-16 md:px-8 md:py-24">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro
          eyebrow="Milestone-Driven Pipeline"
          title="Our Motion Graphics Production Process"
        >
          Animation demands disciplined stage gates. By approving the script, storyboard, and style frames before full animation begins, we eliminate costly revisions and keep schedules on track.
        </SectionIntro>

        {/* 5 STEPS */}
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
                    {step.milestone}
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

        {/* TIMELINE MATRIX */}
        <div className="mt-16 border-2 border-frame-border bg-frame-muted/20 p-6 md:p-10">
          <div className="max-w-3xl">
            <span className="text-xs font-black uppercase tracking-[0.24em] text-frame-accent">
              Turnaround Benchmarks
            </span>
            <h3 className="mt-2 font-heading text-2xl md:text-3xl font-bold uppercase tracking-tight text-frame-fg">
              Typical Animation Timelines
            </h3>
            <p className="mt-2 text-xs sm:text-sm font-medium text-frame-muted-fg">
              Timelines depend on project complexity, asset readiness, and how quickly approvals are provided at each milestone.
            </p>
          </div>

          <div className="mt-8 grid gap-px border-2 border-frame-border bg-frame-border sm:grid-cols-2 lg:grid-cols-3">
            {timelines.map((item, idx) => (
              <div
                key={idx}
                className={`bg-frame-bg p-6 flex flex-col justify-between ${
                  idx === 4 ? 'sm:col-span-2 lg:col-span-1' : ''
                }`}
              >
                <div>
                  <h4 className="font-heading text-base font-bold uppercase tracking-tight text-frame-fg">
                    {item.type}
                  </h4>
                  <p className="mt-2 text-xs font-black uppercase tracking-wider text-frame-accent">
                    {item.duration}
                  </p>
                  <p className="mt-2 text-xs sm:text-sm font-medium text-frame-muted-fg leading-relaxed">
                    {item.scope}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 flex flex-col items-center justify-between gap-4 border-t border-frame-border/60 pt-6 sm:flex-row">
            <p className="text-xs font-medium text-frame-fg">
              Have an impending product launch or conference deadline? Fast-track production tracks can be arranged.
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
