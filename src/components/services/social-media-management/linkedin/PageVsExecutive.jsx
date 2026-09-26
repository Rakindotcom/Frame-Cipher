import { SectionIntro, PosterButton } from '../../../Kinetic'

const companyPage = {
  label: 'Company Page',
  headline: 'Credibility & Corporate Presence',
  body: 'Your Company Page provides an official destination for your organization on LinkedIn.',
  points: [
    'Corporate credibility',
    'Business information',
    'Company updates',
    'Products and services',
    'Industry content',
    'Employer branding',
    'Recruitment communication',
    'Customer-facing information',
    'Company announcements',
    'Professional community building',
  ],
  footer:
    'LinkedIn also recommends maintaining complete Page information, publishing regularly, engaging with the community, and using employee participation to expand reach.',
}

const executiveProfile = {
  label: 'Executive Profile',
  headline: 'Expertise & Personal Authority',
  body: 'An executive profile provides a more personal space for professional expertise and perspective.',
  points: [
    'Thought leadership',
    'Industry commentary',
    'Founder storytelling',
    'Professional experience',
    'Expertise sharing',
    'Relationship building',
    'Personal credibility',
    'Executive visibility',
    'Professional networking',
  ],
  footer:
    'Executive content works best when it reflects the person’s actual knowledge, experience, and point of view.',
}

const example = [
  {
    side: 'Company Page',
    body: 'Company announcement, research, case study, service insight, or business update.',
  },
  {
    side: 'Executive Profile',
    body: 'Personal perspective, lesson, experience, analysis, or industry viewpoint connected to the same broader subject.',
  },
]

export default function PageVsExecutive() {
  return (
    <section className="border-t-2 border-frame-border bg-frame-muted/30 px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro
          eyebrow="Roles &amp; coordination"
          title="Company Pages and Executive Profiles Play Different Roles"
        >
          A company page and an executive profile can support the same business strategy without
          serving the same communication purpose. The company page represents the organization; the
          executive profile represents the person, expertise, experience, and perspective behind it.
        </SectionIntro>

        <div className="grid gap-px border-2 border-frame-border bg-frame-border lg:grid-cols-2">
          {[companyPage, executiveProfile].map((block) => (
            <article key={block.label} className="flex flex-col justify-between bg-frame-bg p-7 md:p-8">
              <div>
                <span className="inline-block bg-frame-accent px-3 py-1 text-[11px] font-black uppercase tracking-[0.22em] text-frame-accent-fg">
                  {block.label}
                </span>
                <h3 className="mt-5 font-heading text-xl font-bold uppercase tracking-tight text-frame-fg md:text-2xl">
                  {block.headline}
                </h3>
                <p className="mt-4 text-sm font-medium leading-relaxed text-frame-muted-fg md:text-base">
                  {block.body}
                </p>
              </div>

              <ul className="mt-6 grid gap-2 border-t-2 border-frame-border/60 pt-5 sm:grid-cols-2">
                {block.points.map((point) => (
                  <li key={point} className="flex items-start gap-2.5 text-xs font-medium leading-snug text-frame-fg/90 md:text-sm">
                    <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center border border-frame-accent bg-frame-accent/10 text-frame-accent">
                      <svg className="h-2.5 w-2.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>

              <p className="mt-4 border-l-2 border-frame-accent bg-frame-muted/10 p-3 text-xs font-medium leading-relaxed text-frame-muted-fg">
                {block.footer}
              </p>
            </article>
          ))}
        </div>

        <div className="mt-10 border-2 border-frame-accent bg-frame-accent/10 p-7 md:p-8">
          <span className="text-xs font-black uppercase tracking-[0.24em] text-frame-accent">
            Connecting Both Into One Strategy
          </span>
          <h3 className="mt-3 font-heading text-xl font-bold uppercase tracking-tight text-frame-fg md:text-2xl">
            Coordinate them around shared business themes
          </h3>
          <p className="mt-4 max-w-3xl text-sm font-medium leading-relaxed text-frame-muted-fg md:text-base">
            Your company page and executive profiles should not publish identical content all the
            time. For example:
          </p>

          <div className="mt-6 grid gap-px border-2 border-frame-border bg-frame-border sm:grid-cols-2">
            {example.map((entry) => (
              <div key={entry.side} className="bg-frame-bg p-6">
                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-frame-accent">
                  {entry.side}
                </span>
                <p className="mt-2 text-sm font-medium leading-relaxed text-frame-fg md:text-base">
                  {entry.body}
                </p>
              </div>
            ))}
          </div>

          <p className="mt-6 text-sm font-semibold leading-relaxed text-frame-fg md:text-base">
            This creates a connected LinkedIn presence without turning every executive profile into
            another copy of the company page.
          </p>

          <div className="mt-6">
            <PosterButton href="/contact" variant="outline">
              Discuss Your LinkedIn Strategy &rarr;
            </PosterButton>
          </div>
        </div>
      </div>
    </section>
  )
}
