import { SectionIntro, PosterButton } from '../../../Kinetic'

const brokenLoop = ['Idea', 'Post', 'Wait', 'Repeat']
const workingLoop = ['Research', 'Plan', 'Create', 'Publish', 'Measure', 'Improve']

const learn = [
  'Which topics attract attention',
  'Which formats encourage interaction',
  'Which hooks retain viewers',
  'Which products receive interest',
  'Which questions keep appearing',
  'Which messages fail to connect',
]

const mixedContent = [
  'Educational content',
  'Entertaining content',
  'Product content',
  'Community content',
  'Brand-building content',
  'Founder content',
  'Customer-focused content',
]

const improve = [
  'Topics',
  'Hooks',
  'Formats',
  'Storytelling approaches',
  'Editing styles',
  'Creative angles',
  'Calls to action',
]

const reasons = [
  {
    number: '01',
    title: 'Build a Repeatable Content System',
    lead: 'Without a system, TikTok can become:',
    body: 'This creates a repeatable workflow for developing and managing content. It also gives every content cycle a clear purpose.',
  },
  {
    number: '02',
    title: 'Learn From Audience Response',
    lead: 'Every content cycle can provide useful information. You can learn:',
    body: 'We use those observations to refine future content. The objective is not to assume what your audience wants. It is to create, measure, learn, and improve based on evidence.',
  },
  {
    number: '03',
    title: 'Reduce Reliance on Viral Hits',
    lead: 'Viral content can create attention, but a business cannot build its entire marketing strategy around unpredictable spikes. We build a broader content system that can include:',
    body: 'This gives your account multiple ways to create value instead of depending on one successful video.',
  },
  {
    number: '04',
    title: 'Improve Content Over Time',
    lead: 'Your first month should not look exactly like your sixth month. As performance data accumulates, we can identify stronger:',
    body: 'We then use those patterns to improve future content.',
  },
]

function FlowStrip({ items = [], muted = false, className = '' }) {
  return (
    <ul className={`flex flex-wrap items-center gap-2 ${className}`}>
      {items.map((entry, index) => (
        <li key={entry} className="flex items-center gap-2">
          <span
            className={`px-3 py-1.5 text-xs font-bold ${
              muted
                ? 'border border-frame-border bg-frame-muted/10 text-frame-muted-fg'
                : index === items.length - 1
                  ? 'border border-frame-accent bg-frame-accent/10 text-frame-accent'
                  : 'border border-frame-border/80 bg-frame-bg text-frame-fg'
            }`}
          >
            {entry}
          </span>
          {index < items.length - 1 && (
            <span aria-hidden="true" className={`font-bold ${muted ? 'text-frame-muted-fg' : 'text-frame-accent'}`}>
              &rarr;
            </span>
          )}
        </li>
      ))}
    </ul>
  )
}

export default function WhyMatters() {
  return (
    <section className="border-t-2 border-frame-border bg-frame-muted/30 px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro
          eyebrow="Why it matters"
          title="Why Consistent TikTok Management Matters"
        >
          One successful video does not create a complete TikTok strategy. Consistent management gives your
          business a structured way to publish, learn, improve, and build a recognizable presence over time.
        </SectionIntro>

        {/* LOOP COMPARISON */}
        <div className="grid gap-px border-2 border-frame-border bg-frame-border lg:grid-cols-2">
          <div className="bg-frame-bg p-6 md:p-8">
            <span className="text-xs font-black uppercase tracking-[0.24em] text-frame-muted-fg">
              Without a system
            </span>
            <FlowStrip items={brokenLoop} muted className="mt-5" />
          </div>

          <div className="bg-frame-accent/10 p-6 md:p-8">
            <span className="text-xs font-black uppercase tracking-[0.24em] text-frame-accent">
              We replace that with
            </span>
            <FlowStrip items={workingLoop} className="mt-5" />
          </div>
        </div>

        {/* REASONS */}
        <div className="mt-10 grid gap-px border-2 border-frame-border bg-frame-border md:grid-cols-2">
          {reasons.map((reason, index) => (
            <article
              key={reason.number}
              className="group flex flex-col justify-between bg-frame-bg p-7 transition-colors hover:bg-frame-accent md:p-8"
            >
              <div>
                <span className="font-heading text-4xl font-bold leading-none tracking-tighter text-frame-muted transition-colors duration-200 group-hover:text-frame-accent-fg">
                  {reason.number}
                </span>
                <h3 className="mt-5 font-heading text-lg font-bold uppercase leading-tight tracking-tight text-frame-fg transition-colors duration-200 group-hover:text-frame-accent-fg md:text-xl">
                  {reason.title}
                </h3>
                <p className="mt-4 text-sm font-medium leading-relaxed text-frame-muted-fg transition-colors duration-200 group-hover:text-frame-accent-fg/90">
                  {reason.lead}
                </p>
              </div>

              {index === 1 && (
                <ul className="mt-6 grid gap-2 border-t-2 border-frame-border/60 pt-4 sm:grid-cols-2">
                  {learn.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2 text-xs font-medium leading-snug text-frame-fg/90 transition-colors duration-200 group-hover:text-frame-accent-fg/90 md:text-sm"
                    >
                      <span
                        aria-hidden="true"
                        className="mt-1 h-1.5 w-1.5 shrink-0 bg-frame-accent transition-colors duration-200 group-hover:bg-frame-accent-fg"
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              )}

              {index === 2 && (
                <ul className="mt-6 flex flex-wrap gap-2 border-t-2 border-frame-border/60 pt-4">
                  {mixedContent.map((item) => (
                    <li
                      key={item}
                      className="border border-frame-accent/50 bg-frame-accent/5 px-2.5 py-1 text-[11px] font-semibold text-frame-fg"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              )}

              {index === 3 && (
                <ul className="mt-6 flex flex-wrap gap-2 border-t-2 border-frame-border/60 pt-4">
                  {improve.map((item) => (
                    <li
                      key={item}
                      className="border border-frame-border bg-frame-bg px-2.5 py-1 text-[11px] font-semibold text-frame-fg"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              )}

              <p className="mt-4 text-xs font-semibold leading-relaxed text-frame-muted-fg transition-colors duration-200 group-hover:text-frame-accent-fg/80">
                {reason.body}
              </p>
            </article>
          ))}
        </div>

        <div className="mt-10 flex flex-col gap-6 border-t-2 border-frame-border pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-3xl text-sm font-semibold leading-relaxed text-frame-fg md:text-base">
            The account you have in month six should be sharper than the one you had in month one. That is
            what the system is for.
          </p>
          <div className="shrink-0">
            <PosterButton href="/contact">Get Your Free TikTok Audit &rarr;</PosterButton>
          </div>
        </div>
      </div>
    </section>
  )
}
