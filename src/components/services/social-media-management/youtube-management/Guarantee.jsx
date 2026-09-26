import { SectionIntro, PosterButton } from '../../../Kinetic'

const controlled = [
  'Content strategy',
  'Content planning',
  'Video production',
  'Editing',
  'YouTube SEO',
  'Thumbnail design',
  'Publishing',
  'Channel optimization',
  'Reporting',
  'Ongoing strategic recommendations',
]

const notGuaranteed = [
  'Specific video views',
  'Specific subscriber numbers',
  'Specific rankings',
  'Viral results',
  'Guaranteed leads',
  'Guaranteed sales',
  'Guaranteed monetization',
  'Guaranteed revenue',
]

export default function Guarantee() {
  return (
    <section className="border-t-2 border-frame-border bg-frame-bg px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro eyebrow="Service commitments" title="What We Commit to">
          YouTube performance depends on factors outside any agency&rsquo;s direct control. We therefore
          separate our service commitments from outcomes that cannot responsibly be guaranteed.
        </SectionIntro>

        <div className="grid gap-6 lg:grid-cols-2">
          <div className="border-2 border-frame-accent bg-frame-accent/10 p-7 md:p-8">
            <span className="text-xs font-black uppercase tracking-[0.24em] text-frame-accent">
              What we control
            </span>
            <h3 className="mt-3 font-heading text-xl font-bold uppercase tracking-tight text-frame-fg md:text-2xl">
              We commit to delivering the agreed scope
            </h3>
            <p className="mt-4 text-sm font-medium leading-relaxed text-frame-muted-fg">
              Including, where applicable:
            </p>
            <ul className="mt-6 grid gap-2.5 sm:grid-cols-2">
              {controlled.map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-sm font-semibold leading-snug text-frame-fg">
                  <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center border border-frame-accent bg-frame-bg text-frame-accent">
                    <svg className="h-2.5 w-2.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="border-2 border-frame-border bg-frame-bg p-7 md:p-8">
            <span className="text-xs font-black uppercase tracking-[0.24em] text-frame-muted-fg">
              What we don&rsquo;t guarantee
            </span>
            <h3 className="mt-3 font-heading text-xl font-bold uppercase tracking-tight text-frame-fg md:text-2xl">
              Outcomes that no agency can control
            </h3>
            <p className="mt-4 text-sm font-medium leading-relaxed text-frame-muted-fg">
              We do not guarantee:
            </p>
            <ul className="mt-6 grid gap-2.5 sm:grid-cols-2">
              {notGuaranteed.map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-sm font-medium leading-snug text-frame-fg">
                  <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center border border-frame-border bg-frame-muted/20 text-frame-muted-fg">
                    <svg className="h-2.5 w-2.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 6l12 12M18 6L6 18" />
                    </svg>
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10 grid gap-6 border-t-2 border-frame-border pt-8 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="border-2 border-frame-border bg-frame-muted/10 p-6 md:p-7">
            <span className="text-xs font-black uppercase tracking-[0.24em] text-frame-accent">
              Our actual goal
            </span>
            <p className="mt-4 max-w-4xl text-sm font-semibold leading-relaxed text-frame-fg md:text-base">
              Our goal is to create better content systems, improve discoverability, learn from audience
              response, and continuously optimize the channel based on available data. We focus on
              building the system and using real performance data to improve it.
            </p>
          </div>

          <div className="flex flex-col justify-center border-2 border-frame-accent bg-frame-accent/10 p-6 md:p-7">
            <span className="text-xs font-black uppercase tracking-[0.24em] text-frame-accent">
              Ready to talk scope?
            </span>
            <p className="mt-4 text-sm font-medium leading-relaxed text-frame-fg/90">
              We will be direct about what a realistic plan looks like for your channel.
            </p>
            <div className="mt-6">
              <PosterButton href="/contact">Get a Free Consultation &rarr;</PosterButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
