import { SectionIntro } from '../../../Kinetic'

const items = [
  {
    title: 'SEO Strategy Development',
    body: 'A roadmap built around your actual business goals and resources, not a generic best-practices template.',
  },
  {
    title: 'Fractional SEO Leadership',
    body: 'Ongoing strategic direction without the cost of a full-time senior hire.',
  },
  {
    title: 'Audit-to-Roadmap Translation',
    body: 'Findings turned into a sequenced, resourced, actually executable plan.',
  },
  {
    title: 'Team Training & Enablement',
    body: 'Internal capability built, with documentation that outlasts the engagement itself.',
  },
  {
    title: 'Ongoing Strategic Advisory',
    body: 'Regular reviews that keep the roadmap current as algorithms and priorities shift.',
  },
  {
    title: 'Flexible Engagement Models',
    body: 'Project-based, fractional, hybrid, or full transition to execution, whichever actually fits.',
  },
]

export default function WhatYouGet() {
  return (
    <section className="border-t-2 border-frame-border bg-frame-bg px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro eyebrow="What's included" title="What You Get With Framecipher">
          Every engagement is built so you walk away with direction your team can act on.
        </SectionIntro>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item, index) => (
            <div
              key={item.title}
              className="flex flex-col justify-between border-2 border-frame-border bg-frame-muted/30 p-7 transition-colors hover:border-frame-accent md:p-8"
            >
              <div>
                <span className="text-xs font-black uppercase tracking-[0.24em] text-frame-accent">
                  Element 0{index + 1}
                </span>
                <h3 className="mt-3 font-heading text-lg md:text-xl font-bold uppercase tracking-tight text-frame-fg">
                  {item.title}
                </h3>
                <p className="mt-4 text-sm font-medium leading-relaxed text-frame-muted-fg">
                  {item.body}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}