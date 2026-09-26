import { SectionIntro, PosterButton } from '../../Kinetic'

const processPhases = [
  {
    number: '01',
    title: 'Discovery & Creative Brief',
    description: 'We understand your business, audience, brand identity, objectives, required formats, reference materials, and production needs. For larger projects, we also clarify locations, talent, props, timelines, and deliverables.',
    deliverable: 'Creative brief, scope alignment & project blueprint'
  },
  {
    number: '02',
    title: 'Concept & Production Planning',
    description: 'We develop the creative direction and production plan. Depending on scope, this includes concepts, scripts or outlines, storyboards, shot lists, visual references, location scouting, and schedules.',
    deliverable: 'Approved scripts, storyboards & shooting schedule'
  },
  {
    number: '03',
    title: 'Production & Content Capture',
    description: 'The approved concept moves into production. This involves filming, commercial photography, studio work, on-location production, graphic design, animation, or a coordinated combination of formats.',
    deliverable: 'Raw high-res footage, audio tracks & photography'
  },
  {
    number: '04',
    title: 'Editing, Design & Post-Production',
    description: 'Captured material is developed into final creative assets, including video assembly, color grading, audio sweetening, motion graphics, retouching, dynamic captions, and multi-format resizing.',
    deliverable: 'First-cut review links & high-fidelity asset drafts'
  },
  {
    number: '05',
    title: 'Review & Revisions',
    description: 'You review the agreed deliverables and provide feedback within our structured review rounds. Any included revisions are implemented meticulously before final sign-off.',
    deliverable: 'Revised, polished & client-approved assets'
  },
  {
    number: '06',
    title: 'Final Delivery & Ongoing Production',
    description: 'Approved assets are exported and delivered in cloud repositories in all platform formats. For businesses with ongoing needs, we establish a recurring monthly production cadence.',
    deliverable: 'Master exports, channel formats & recurring schedule'
  }
]

const onboardingSteps = [
  {
    step: '1',
    title: 'Book a Free Consultation',
    desc: 'Tell us about your business, content requirements, channels, and commercial goals.'
  },
  {
    step: '2',
    title: 'Review Relevant Work',
    desc: 'We show you portfolio examples and case studies matching your required format or industry.'
  },
  {
    step: '3',
    title: 'Receive Custom Plan',
    desc: 'We outline recommended formats, scope, deliverables, timeline, and transparent investment.'
  },
  {
    step: '4',
    title: 'Approve the Scope',
    desc: 'Production kicks off immediately once the proposal and creative parameters are approved.'
  },
  {
    step: '5',
    title: 'Create & Review',
    desc: 'Our in-house team executes production and guides you through milestone review rounds.'
  },
  {
    step: '6',
    title: 'Receive Final Content',
    desc: 'Approved assets are delivered in clean folders, ready for immediate publishing and ad launch.'
  }
]

export default function Process() {
  return (
    <section id="process" className="border-t-2 border-frame-border bg-frame-bg px-4 py-20 md:px-8 md:py-28 scroll-mt-24">
      <div className="mx-auto max-w-[95vw]">
        {/* PHASE 1: 6-STEP PRODUCTION PROCESS */}
        <SectionIntro
          eyebrow="Execution Framework"
          title="Our Content Creation Process"
          index="05"
        >
          Every project starts with the required outcome and works through a defined production process to ensure creative excellence and on-time delivery.
        </SectionIntro>

        <div className="grid border-2 border-frame-border bg-frame-border gap-px sm:grid-cols-2 lg:grid-cols-3">
          {processPhases.map((phase) => (
            <div
              key={phase.number}
              className="relative overflow-hidden bg-frame-bg p-7 md:p-10 flex flex-col justify-between"
            >
              <span
                className="pointer-events-none absolute -right-2 -bottom-6 font-heading text-[7rem] md:text-[8rem] font-bold leading-none tracking-tighter text-frame-muted/30 select-none"
                aria-hidden="true"
              >
                {phase.number}
              </span>
              <div className="relative z-10">
                <span className="text-xs font-black uppercase tracking-[0.28em] text-frame-accent">
                  Phase {phase.number}
                </span>
                <h3 className="mt-3 font-heading text-xl md:text-2xl font-bold uppercase tracking-tight text-frame-fg">
                  {phase.title}
                </h3>
                <p className="mt-4 text-xs md:text-sm font-medium leading-relaxed text-frame-muted-fg">
                  {phase.description}
                </p>
              </div>

              <div className="relative z-10 mt-6 border-t-2 border-frame-border/60 pt-4">
                <span className="text-[11px] font-black uppercase tracking-[0.2em] text-frame-accent block mb-1">
                  Deliverable
                </span>
                <span className="text-xs md:text-sm font-semibold text-frame-fg">
                  {phase.deliverable}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* PHASE 2: HOW IT WORKS / ONBOARDING */}
        <div className="mt-20 border-2 border-frame-border bg-frame-muted/30 p-7 md:p-12">
          <div className="max-w-3xl">
            <span className="text-xs font-black uppercase tracking-[0.28em] text-frame-accent">
              Getting Started
            </span>
            <h3 className="mt-2 font-heading text-2xl md:text-4xl font-bold uppercase tracking-tight text-frame-fg">
              How It Works: Start Your Content Creation Project
            </h3>
            <p className="mt-3 text-sm md:text-base font-medium text-frame-muted-fg leading-relaxed">
              You do not need to know exactly what production package you need before contacting us. Tell us what you are trying to create, where you plan to use it, and what your business needs to achieve. We can review the requirements, show you relevant work, and recommend a practical production approach.
            </p>
          </div>

          <div className="mt-10 grid gap-px border-2 border-frame-border bg-frame-border sm:grid-cols-2 lg:grid-cols-3">
            {onboardingSteps.map((item) => (
              <div key={item.step} className="bg-frame-bg p-6 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3">
                    <span className="flex h-7 w-7 items-center justify-center border-2 border-frame-accent bg-frame-accent/10 font-heading text-xs font-bold text-frame-accent">
                      {item.step}
                    </span>
                    <h4 className="font-heading text-base font-bold uppercase tracking-tight text-frame-fg">
                      {item.title}
                    </h4>
                  </div>
                  <p className="mt-3 text-xs md:text-sm font-medium leading-relaxed text-frame-muted-fg">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 border-t-2 border-frame-border pt-6">
            <p className="text-xs sm:text-sm font-medium text-frame-fg max-w-xl">
              Ready to explore what we can create for your business? Book a preliminary consultation and our creative team will provide portfolio references.
            </p>
            <div className="flex flex-wrap gap-4 shrink-0">
              <PosterButton href="/projects" variant="outline">
                See Our Portfolio &rarr;
              </PosterButton>
              <PosterButton href="/contact">
                Start Your Production Project &rarr;
              </PosterButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
