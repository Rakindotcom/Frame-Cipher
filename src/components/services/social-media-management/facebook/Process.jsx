import { SectionIntro, PosterButton } from '../../../Kinetic'

const steps = [
  {
    number: '01',
    title: 'Page Audit & Business Discovery',
    body: 'We begin by understanding your business before creating a content plan.',
    bullets: [
      'Current Page setup',
      'Business information',
      'Existing content',
      'Audience',
      'Competitors',
      'Content performance',
      'Customer questions',
      'Reviews',
      'Messaging patterns',
      'Local or international market',
      'Existing content assets',
      'Business goals',
    ],
    note: 'We then identify the highest-priority opportunities.',
  },
  {
    number: '02',
    title: 'Strategy & Content Planning',
    body: 'We turn the findings into a practical Facebook strategy.',
    bullets: [
      'Content pillars',
      'Posting cadence',
      'Content formats',
      'Brand voice',
      'Audience themes',
      'Promotional opportunities',
      'Educational topics',
      'Seasonal opportunities',
      'Community opportunities',
      'Customer questions',
      'Calls to action',
    ],
    note: 'Your monthly content calendar gives the team a clear publishing direction.',
  },
  {
    number: '03',
    title: 'Content Creation & Client Approval',
    body: 'We create the agreed content and creative assets.',
    bullets: [
      'Graphics',
      'Carousels',
      'Captions',
      'Reels',
      'Short-form videos',
      'Stories',
      'Promotional creatives',
    ],
    note: 'Your approval workflow is built into the process where required.',
  },
  {
    number: '04',
    title: 'Publishing & Community Management',
    body: 'Once approved, content is scheduled and published according to the agreed calendar. We also monitor the interactions that matter.',
    bullets: [
      'Comments',
      'Messages',
      'Reviews',
      'Community interactions',
      'Customer questions',
      'Moderation issues',
    ],
    note: 'Urgent or sensitive matters are escalated according to the agreed process.',
  },
  {
    number: '05',
    title: 'Reporting & Ongoing Optimization',
    body: 'At the end of each reporting period, we review what happened.',
    bullets: [
      'What performed well',
      'What underperformed',
      'Which formats worked',
      'Which topics generated interaction',
      'What customers asked about',
      'Where engagement improved or declined',
      'What should change next',
    ],
    note: 'The next content cycle is informed by these findings.',
  },
]

export default function Process() {
  return (
    <section className="border-t-2 border-frame-border bg-frame-bg px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro
          eyebrow="Execution framework"
          title="How Our Facebook Management Process Works"
        >
          We begin with the Page itself, then build outward into content, community, and reporting so
          each decision is based on what we found.
        </SectionIntro>

        <div className="grid gap-px border-2 border-frame-border bg-frame-border sm:grid-cols-2 lg:grid-cols-3">
          {steps.map((step, index) => (
            <article
              key={step.number}
              className="group flex flex-col justify-between bg-frame-bg p-7 transition-colors hover:bg-frame-accent md:p-8"
            >
              <div>
                <span className="font-heading text-4xl font-bold leading-none tracking-tighter text-frame-muted transition-colors duration-200 group-hover:text-frame-accent-fg">
                  {step.number}
                </span>
                <h3 className="mt-5 font-heading text-xl font-bold uppercase leading-tight tracking-tight text-frame-fg transition-colors duration-200 group-hover:text-frame-accent-fg">
                  {step.title}
                </h3>
                <p className="mt-4 text-sm font-medium leading-relaxed text-frame-muted-fg transition-colors duration-200 group-hover:text-frame-accent-fg/90">
                  {step.body}
                </p>
              </div>

              <ul className="mt-6 space-y-2 border-t-2 border-frame-border/60 pt-4 text-xs font-medium text-frame-fg/90 transition-colors duration-200 group-hover:border-frame-accent-fg/30 group-hover:text-frame-accent-fg/90 md:text-sm">
                {step.bullets.map((bullet, bIdx) => (
                  <li key={bIdx} className="flex items-start gap-2">
                    <span className="mt-1 h-1.5 w-1.5 shrink-0 bg-frame-accent transition-colors duration-200 group-hover:bg-frame-accent-fg" />
                    <span className="leading-snug">{bullet}</span>
                  </li>
                ))}
              </ul>

              <span
                aria-hidden="true"
                className="mt-6 inline-flex items-center gap-2 text-xs font-black uppercase tracking-[0.2em] text-frame-accent transition-colors duration-200 group-hover:text-frame-accent-fg"
              >
                Step 0{index + 1}
              </span>

              {step.note && (
                <p className="mt-4 text-xs font-semibold leading-relaxed text-frame-muted-fg transition-colors duration-200 group-hover:text-frame-accent-fg/80">
                  {step.note}
                </p>
              )}
            </article>
          ))}

          <div className="flex flex-col justify-center bg-frame-accent/10 p-7 md:p-8">
            <span className="text-xs font-black uppercase tracking-[0.24em] text-frame-accent">
              Approval built in
            </span>
            <p className="mt-4 text-sm font-medium leading-relaxed text-frame-fg/90">
              Your approval remains part of the publishing workflow where required, so you know what
              goes live under your Page before it does.
            </p>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-6 border-t-2 border-frame-border pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-3xl text-sm font-medium leading-relaxed text-frame-muted-fg md:text-base">
            The audit comes first, so recommendations are based on your actual Page rather than a
            generic checklist.
          </p>
          <div className="shrink-0">
            <PosterButton href="/contact">Start Your Facebook Management Plan &rarr;</PosterButton>
          </div>
        </div>
      </div>
    </section>
  )
}
