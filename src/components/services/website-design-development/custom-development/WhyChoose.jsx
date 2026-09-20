import { SectionIntro } from '../../../Kinetic'

const whyChooseUsPillars = [
  {
    title: 'Business-First Architecture',
    desc: 'We start with business requirements, users, workflows, data, and integrations before deciding how the system should be built.',
  },
  {
    title: 'One In-House Team',
    desc: 'Strategy, UX, architecture, design, development, and launch support stay coordinated within one team.',
  },
  {
    title: 'Platform-Neutral Recommendations',
    desc: 'We recommend custom development when it solves a real limitation. When WordPress, Shopify, Webflow, Wix, or another platform is more practical, we say so.',
  },
  {
    title: 'Full-Stack Capability',
    desc: 'Frontend, backend, APIs, authentication, integrations, and application logic are treated as one connected system.',
  },
  {
    title: 'SEO & Performance Foundations',
    desc: 'We consider rendering, technical SEO, data delivery, mobile experience, and application performance from the beginning.',
  },
  {
    title: 'Transparent Review Process',
    desc: 'Important stages of architecture, design, and development go through defined review points before the project moves forward.',
  },
  {
    title: 'Built for Long-Term Maintenance',
    desc: 'The objective is not simply to launch the application. We structure the system so new features and future improvements can be added without unnecessary technical debt.',
  },
]

export default function WhyChoose() {
  return (
    <section className="border-t-2 border-frame-border bg-frame-bg px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro eyebrow="The Framecipher Advantage" title="Why Choose Framecipher for Custom &amp; Next.js Development" align="center">
          Custom software needs closer collaboration than a standard website build. We structure our work around clear architecture, accountable development, and long-term maintainability.
        </SectionIntro>

        <div className="flex flex-wrap justify-center gap-6">
          {whyChooseUsPillars.map((pillar, idx) => (
            <article
              key={idx}
              className="flex w-full flex-col justify-between border-2 border-frame-border bg-frame-bg p-7 sm:w-[calc(50%-12px)] sm:p-9 lg:w-[calc(25%-18px)] transition-colors duration-300 hover:bg-frame-muted/30"
            >
              <div>
                <span className="text-xs font-black uppercase tracking-[0.24em] text-frame-accent">
                  Pillar 0{idx + 1}
                </span>
                <h3 className="mt-4 font-heading text-lg sm:text-xl font-bold uppercase tracking-tight text-frame-fg">
                  {pillar.title}
                </h3>
              </div>
              <p className="mt-4 text-sm font-medium leading-relaxed text-frame-muted-fg">
                {pillar.desc}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}