import { SectionIntro } from '../../../Kinetic'

const blocks = [
  {
    title: 'Consent-Aware Tracking',
    body: 'Where applicable, we configure tracking to respect the client\u2019s consent framework and platform requirements. For markets with specific consent requirements, audience creation and personalized advertising depend on valid consent signals and compliant implementation.',
  },
  {
    title: 'First-Party Data Strategy',
    body: 'We help businesses make better use of data they legitimately collect through websites, apps, CRM systems, customer relationships, lead forms, and ecommerce transactions.',
  },
  {
    title: 'Measurement Resilience',
    body: 'We design tracking to avoid depending on a single signal source wherever the platform and implementation allow.',
  },
]

export const measurementItems = [
  'Audience activity',
  'Conversions',
  'Revenue',
  'Campaign performance',
  'Customer movement through the funnel',
]

export default function Privacy() {
  return (
    <section className="border-t-2 border-frame-border bg-frame-muted/30 px-4 py-20 md:px-8 md:py-28">
      <div className="max-w-7xl mx-auto">
        <SectionIntro eyebrow="Privacy" title="Privacy, Consent & Modern Remarketing">
          Remarketing now operates within a more privacy-conscious advertising environment.
        </SectionIntro>
        <p className="mb-12 max-w-3xl text-sm font-medium leading-relaxed text-frame-muted-fg md:text-base">
          Browser restrictions, app privacy controls, consent requirements, platform policies, and
          changing measurement technologies can affect how audiences are created and measured. That
          makes proper consent and data handling part of the remarketing strategy, not an optional
          technical detail.
        </p>

        <div className="grid gap-6 md:grid-cols-3">
          {blocks.map((block) => (
            <div
              key={block.title}
              className="border-2 border-frame-border bg-frame-bg p-8 transition-colors hover:border-frame-accent"
            >
              <div className="mb-5 h-1.5 w-12 bg-frame-accent" />
              <h3 className="font-heading text-xl font-bold uppercase tracking-tight text-frame-fg">
                {block.title}
              </h3>
              <p className="mt-4 text-sm font-medium leading-relaxed text-frame-muted-fg md:text-base">
                {block.body}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-6 border-2 border-frame-border bg-frame-bg p-8 md:p-12">
          <p className="mb-8 text-sm font-bold uppercase tracking-widest text-frame-accent">
            The goal is a more reliable view of
          </p>
          <div className="flex flex-wrap gap-3">
            {measurementItems.map((item) => (
              <span
                key={item}
                className="border border-frame-border px-4 py-2 text-sm font-bold uppercase tracking-wider text-frame-fg"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}