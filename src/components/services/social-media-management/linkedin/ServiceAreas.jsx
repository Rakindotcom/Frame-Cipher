import { SectionIntro, PosterButton } from '../../../Kinetic'

const bangladeshFactors = [
  'Bangladesh-focused audience research',
  'Local B2B content',
  'Founder-led content',
  'Employer-brand communication',
  'Recruitment content',
  'Industry-specific topics',
  'Local company milestones',
  'Bangladesh market insights',
  'Professional networking opportunities',
]

const internationalFactors = [
  'Audience research',
  'ICP development',
  'Content positioning',
  'Executive positioning',
  'Industry research',
  'Competitor analysis',
  'Language considerations',
  'Cultural context',
  'Publishing schedules',
  'Content themes',
  'Thought leadership',
  'Employer branding',
]

export default function ServiceAreas() {
  return (
    <section className="border-t-2 border-frame-border bg-frame-muted/30 px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro
          eyebrow="Service areas"
          title="LinkedIn Management Service Areas"
        >
          Framecipher provides LinkedIn management for businesses in Bangladesh and international
          markets.
        </SectionIntro>

        <div className="grid gap-px border-2 border-frame-border bg-frame-border lg:grid-cols-2">
          <article className="flex flex-col justify-between bg-frame-bg p-7 md:p-8">
            <div>
              <span className="text-xs font-black uppercase tracking-[0.24em] text-frame-accent">
                Local
              </span>
              <h3 className="mt-3 font-heading text-2xl font-bold uppercase tracking-tight text-frame-fg">
                LinkedIn Management In Bangladesh
              </h3>
              <p className="mt-4 text-sm font-medium leading-relaxed text-frame-muted-fg md:text-base">
                For Bangladeshi businesses, we can adapt LinkedIn strategy to local professional
                audiences, industries, business culture, recruitment needs, and B2B buying behavior.
              </p>
            </div>

            <div className="mt-6 border-t-2 border-frame-border/60 pt-4">
              <span className="text-[10px] font-black uppercase tracking-[0.18em] text-frame-accent">
                Depending on your business, this can include
              </span>
              <ul className="mt-3 grid gap-2 sm:grid-cols-2">
                {bangladeshFactors.map((factor) => (
                  <li key={factor} className="flex items-start gap-2.5 text-sm font-medium leading-snug text-frame-fg">
                    <span aria-hidden="true" className="mt-1.5 h-1.5 w-1.5 shrink-0 bg-frame-accent" />
                    <span>{factor}</span>
                  </li>
                ))}
              </ul>
            </div>
          </article>

          <article className="flex flex-col justify-between bg-frame-accent/10 p-7 md:p-8">
            <div>
              <span className="text-xs font-black uppercase tracking-[0.24em] text-frame-accent">
                Global
              </span>
              <h3 className="mt-3 font-heading text-2xl font-bold uppercase tracking-tight text-frame-fg">
                International LinkedIn Management
              </h3>
              <p className="mt-4 text-sm font-medium leading-relaxed text-frame-muted-fg md:text-base">
                We also support businesses targeting professional audiences outside Bangladesh.
                International LinkedIn management can include:
              </p>
            </div>

            <div className="mt-6 border-t-2 border-frame-accent/30 pt-4">
              <ul className="grid gap-2 sm:grid-cols-2">
                {internationalFactors.map((factor) => (
                  <li key={factor} className="flex items-start gap-2.5 text-sm font-medium leading-snug text-frame-fg">
                    <span aria-hidden="true" className="mt-1.5 h-1.5 w-1.5 shrink-0 bg-frame-accent" />
                    <span>{factor}</span>
                  </li>
                ))}
              </ul>
            </div>
          </article>
        </div>

        <div className="mt-10 flex flex-col gap-6 border-t-2 border-frame-border pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-3xl text-sm font-medium leading-relaxed text-frame-muted-fg md:text-base">
            The strategy is adapted to the target market rather than treating every professional
            audience as one global group.
          </p>
          <div className="shrink-0">
            <PosterButton href="/contact">Discuss Your LinkedIn Strategy &rarr;</PosterButton>
          </div>
        </div>
      </div>
    </section>
  )
}
