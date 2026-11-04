import { PosterButton } from '../../../Kinetic'

const steps = [
  {
    number: '01',
    title: 'Page Audit & Business Discovery',
    body: 'We begin by understanding your business before creating a content plan.',
    bullets: [
      'Current Page setup',
      'Business information',
      'Existing content',
      'Audience & competitors',
      'Content performance history',
      'Customer questions & reviews',
      'Messaging patterns',
      'Local or international market',
      'Existing content assets',
      'Business goals & priorities',
    ],
    note: 'We then identify the highest-priority opportunities before any posting begins.',
  },
  {
    number: '02',
    title: 'Strategy & Content Planning',
    body: 'We turn the findings into a practical, repeatable Facebook strategy.',
    bullets: [
      'Content pillars & themes',
      'Posting cadence',
      'Content formats',
      'Brand voice & guidelines',
      'Audience interests',
      'Promotional opportunities',
      'Educational topics',
      'Seasonal opportunities',
      'Customer questions',
      'Calls to action & conversion hooks',
    ],
    note: 'Your monthly content calendar gives the team a clear publishing direction.',
  },
  {
    number: '03',
    title: 'Content Creation & Client Approval',
    body: 'We create the agreed content and creative assets tailored for Facebook.',
    bullets: [
      'Branded graphics',
      'Carousels',
      'Platform-native captions',
      'Reels & short-form videos',
      'Story creatives & polls',
      'Promotional creatives',
    ],
    note: 'Your approval workflow is built into the process so nothing goes live without signoff.',
  },
  {
    number: '04',
    title: 'Publishing & Community Management',
    body: 'Once approved, content is scheduled and published according to the calendar.',
    bullets: [
      'Scheduled feed & story publishing',
      'Comment monitoring & replies',
      'Messenger inquiry triage',
      'Review responses & monitoring',
      'Community interactions',
      'Moderation & spam removal',
    ],
    note: 'Urgent or sensitive matters are escalated according to the agreed process.',
  },
  {
    number: '05',
    title: 'Reporting & Ongoing Optimization',
    body: 'At the end of each reporting period, we review actual performance data.',
    bullets: [
      'What performed well',
      'What underperformed',
      'Which formats drove engagement',
      'Which topics resonated',
      'What customers asked about',
      'Where response times improved',
      'What to iterate next month',
    ],
    note: 'The next content cycle is directly informed by these findings, not guesswork.',
  },
]

export default function Process() {
  return (
    <section className="relative border-t border-white/[0.08] bg-[#09090B] py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
        {/* Header */}
        <div className="mb-14 max-w-3xl space-y-4">
          <div className="flex items-center gap-2 inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-widest text-frame-accent">
            <span className="h-1.5 w-1.5 rounded-full bg-frame-accent" />
            Execution Framework
          </div>
          <h2 className="mt-4 font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium leading-[0.96] tracking-[-0.03em] text-white">
            How Our Facebook Management Process Works
          </h2>
          <p className="mt-4 text-base sm:text-lg font-normal leading-relaxed text-zinc-300">
            We begin with the Page itself, then build outward into content, community, and reporting so
            each decision is based on what we found.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {steps.map((step) => (
            <article
              key={step.number}
              className="group flex flex-col justify-between rounded-xl border border-white/[0.08] bg-[#121214] p-7 transition-colors duration-300 hover:border-white/[0.18] hover:bg-[#151518]"
            >
              <div>
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs font-semibold text-frame-accent">
                    Phase {step.number}
                  </span>
                  <span className="font-mono text-2xl font-bold tracking-tighter text-white/[0.12] transition-colors group-hover:text-frame-accent/40">
                    {step.number}
                  </span>
                </div>
                <h3 className="mt-4 font-heading text-lg sm:text-xl font-medium tracking-tight text-white">
                  {step.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-[#A1A1AA]">
                  {step.body}
                </p>

                <div className="mt-6 border-t border-white/[0.08] pt-5">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-[#71717A]">
                    Key Actions
                  </span>
                  <ul className="mt-3 space-y-2">
                    {step.bullets.map((bullet, bIdx) => (
                      <li key={bIdx} className="flex items-start gap-2 text-xs text-[#D4D4D8]">
                        <svg
                          className="mt-0.5 h-3.5 w-3.5 shrink-0 text-frame-accent"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2.5}
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="leading-snug">{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {step.note && (
                <div className="mt-6 rounded-xl border border-white/[0.06] bg-[#09090B]/60 p-4 text-xs leading-relaxed text-[#A1A1AA]">
                  {step.note}
                </div>
              )}
            </article>
          ))}

          {/* CTA Card in Grid */}
          <div className="flex flex-col justify-between rounded-xl border border-white/[0.08] bg-[#121214] p-7">
            <div>
              <span className="text-[11px] font-mono uppercase tracking-[0.2em] text-frame-accent">
                Ready to Start?
              </span>
              <h3 className="mt-4 font-heading text-lg sm:text-xl font-medium tracking-tight text-white">
                Put this proven workflow to work on your Facebook Page.
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-[#A1A1AA]">
                From first audit to monthly reporting, get a dedicated team that treats your Page
                with care and operational discipline.
              </p>
            </div>
            <div className="mt-8">
              <PosterButton href="/contact">Start Your Facebook Management Plan</PosterButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
