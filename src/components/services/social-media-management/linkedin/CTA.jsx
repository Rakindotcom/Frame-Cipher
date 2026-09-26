import { PosterButton, SectionIntro } from '../../../Kinetic'

const included = [
  'Company Page management',
  'Executive profiles',
  'Thought leadership',
  'Content creation',
  'Profile optimization',
  'Engagement & employee advocacy',
  'Publishing',
  'Reporting',
]

export default function CTA() {
  return (
    <section className="border-t-2 border-frame-border bg-frame-muted/30 px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-[95vw]">
        <div className="grid gap-px border-2 border-frame-accent bg-frame-accent lg:grid-cols-[1.35fr_0.65fr]">
          <div className="bg-frame-bg p-7 md:p-10 lg:p-12">
            <span className="text-xs font-black uppercase tracking-[0.24em] text-frame-accent">
              Start with a free audit
            </span>
            <h2 className="mt-4 font-heading text-2xl font-bold uppercase leading-tight tracking-tight text-frame-fg md:text-4xl">
              Ready to Build a Stronger LinkedIn Presence?
            </h2>
            <p className="mt-5 max-w-2xl text-sm font-medium leading-relaxed text-frame-muted-fg md:text-base">
              Your LinkedIn presence should do more than keep your Company Page active. It should help
              people understand your business, recognize your expertise, trust your leadership, and
              see why your company is worth a conversation.
            </p>
            <p className="mt-4 max-w-2xl text-sm font-medium leading-relaxed text-frame-muted-fg md:text-base">
              Framecipher brings LinkedIn strategy, Company Page management, executive profiles, thought
              leadership, content creation, profile optimization, engagement, employee advocacy,
              publishing, and reporting together under one in-house team. Whether you are building a
              stronger LinkedIn presence in Bangladesh or targeting professional audiences
              internationally, we can build the management scope around your business, audience,
              industry, executives, and goals.
            </p>

            <ul className="mt-8 grid gap-2.5 sm:grid-cols-2">
              {included.map((item) => (
                <li key={item} className="flex items-center gap-3 text-sm font-semibold text-frame-fg">
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center border border-frame-accent bg-frame-accent/10 text-frame-accent">
                    <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
              <PosterButton href="/contact">Get Your Free LinkedIn Presence Audit &rarr;</PosterButton>
              <PosterButton href="/contact" variant="outline">
                Request a Custom Quote
              </PosterButton>
            </div>
          </div>

          <div className="flex flex-col justify-center gap-4 bg-frame-accent/10 p-7 md:p-8">
            <span className="text-xs font-black uppercase tracking-[0.24em] text-frame-accent">
              Not ready to talk yet?
            </span>
            <p className="text-sm font-medium leading-relaxed text-frame-fg/90">
              Read how Framecipher works across social media management before you decide.
            </p>
            <div>
              <PosterButton href="/services/social-media-management" variant="outline">
                Social Media Management &rarr;
              </PosterButton>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t-2 border-frame-border pt-8">
          <SectionIntro
            eyebrow="A note on expectations"
            title="A Credible Presence, Not a Shortcut"
            className="text-left"
          >
            We do not promise viral posts, follower counts, impression numbers, engagement rates,
            connections, leads, sales, revenue, or specific algorithmic distribution. What we commit to
            is a structured strategy, professional execution, executive voice development, and
            reporting that explains what the data actually shows.
          </SectionIntro>
        </div>
      </div>
    </section>
  )
}
