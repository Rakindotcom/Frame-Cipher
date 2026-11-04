import { PosterButton } from '../../../Kinetic'

const phases = [
  {
    number: '01',
    window: 'Initial Audit (Days 1–3)',
    title: 'Initial Page Audit',
    body: 'We review your Page, business information, existing content, audience, competitors, and current performance. The initial audit typically takes a few business days after receiving the required access and information.',
    bullets: [
      'Current Page setup & role access',
      'Business info & contact accuracy',
      'Historical content & format audit',
      'Audience & competitor analysis',
      'Highest-priority improvement roadmap',
    ],
  },
  {
    number: '02',
    window: 'Setup & Launch (Weeks 1–2)',
    title: 'First-Month Setup',
    body: 'The first month focuses on establishing foundational systems: Page improvements, Content pillars, Content calendar, Brand voice, Creative direction, Publishing workflow, Community process, and Reporting structure.',
    bullets: [
      'Page optimization & CTA configuration',
      'Core content pillars & editorial cadence',
      'First-month monthly content calendar',
      'Brand voice & creative guidelines',
      'Approval & escalation workflows',
    ],
  },
  {
    number: '03',
    window: 'Ongoing Cadence (Month 2+)',
    title: 'Ongoing Management & Optimization',
    body: 'Facebook management is an ongoing process. Each month, we publish, monitor, report, learn, and refine the strategy based on available data and business priorities.',
    bullets: [
      'Consistent multi-format publishing',
      'Active community & Messenger triage',
      'Review monitoring & response care',
      'Comprehensive monthly reporting',
      'Iterative strategy refinement',
    ],
  },
]

export default function Timeline() {
  return (
    <section className="relative border-t border-white/[0.08] bg-[#09090B] py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
        {/* Header */}
        <div className="mb-14 max-w-3xl space-y-4">
          <div className="flex items-center gap-2 inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-widest text-frame-accent">
            <span className="h-1.5 w-1.5 rounded-full bg-frame-accent" />
            Onboarding Timeline
          </div>
          <h2 className="mt-4 font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium leading-[0.96] tracking-[-0.03em] text-white">
            Facebook Management Timeline
          </h2>
          <p className="mt-4 text-base sm:text-lg font-normal leading-relaxed text-zinc-300">
            A clear onboarding sequence means you know what is happening, what we need from you, and
            when results should start appearing in the Page itself.
          </p>
        </div>

        {/* Timeline Grid */}
        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {phases.map((phase) => (
            <article
              key={phase.number}
              className="group flex flex-col justify-between rounded-xl border border-white/[0.08] bg-[#121214] p-7 transition-colors duration-300 hover:border-white/[0.18] hover:bg-[#151518]"
            >
              <div>
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs font-semibold text-frame-accent">
                    Phase {phase.number}
                  </span>
                  <span className="rounded-full rounded-xl border border-white/[0.08] bg-white/[0.03] px-2.5 py-1 text-[10px] font-mono uppercase text-[#A1A1AA]">
                    {phase.window}
                  </span>
                </div>
                <h3 className="mt-4 font-heading text-lg sm:text-xl font-medium tracking-tight text-white">
                  {phase.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-[#A1A1AA]">
                  {phase.body}
                </p>

                <div className="mt-6 border-t border-white/[0.08] pt-5">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-[#71717A]">
                    Key Deliverables
                  </span>
                  <ul className="mt-3 space-y-2">
                    {phase.bullets.map((bullet, bIdx) => (
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
            </article>
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="mt-12 rounded-xl border border-white/[0.08] bg-[#121214] p-8 sm:p-10 lg:flex lg:items-center lg:justify-between lg:gap-8">
          <div className="mb-14 max-w-3xl space-y-4">
            <span className="text-[11px] font-mono uppercase tracking-[0.2em] text-frame-accent">
              Honest Expectation Setting
            </span>
            <p className="mt-2 text-base leading-relaxed text-[#FAFAFA] sm:text-lg">
              Timelines describe the onboarding sequence, not a guaranteed performance outcome. Growth
              on Facebook depends on the business, the market, and the quality of the content.
            </p>
          </div>
          <div className="mt-6 shrink-0 lg:mt-0">
            <PosterButton href="/contact">Begin the Onboarding Process</PosterButton>
          </div>
        </div>
      </div>
    </section>
  )
}
