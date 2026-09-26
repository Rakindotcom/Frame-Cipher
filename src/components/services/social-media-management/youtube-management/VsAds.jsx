import { SectionIntro, PosterButton } from '../../../Kinetic'

const organic = [
  'Content strategy',
  'Video production',
  'YouTube SEO',
  'Titles and thumbnails',
  'Publishing',
  'Audience engagement',
  'Analytics',
  'Long-term content development',
]

const paidGoals = [
  'Faster audience reach',
  'Product promotion',
  'Lead generation',
  'Remarketing',
  'Campaign-specific traffic',
  'Brand awareness',
]

const paidRequirements = [
  'Paid media strategy',
  'Campaign structure',
  'Targeting',
  'Creative',
  'Tracking',
  'Budget management',
]

export default function VsAds() {
  return (
    <section className="border-t-2 border-frame-border bg-frame-bg px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro eyebrow="Scope clarity" title="Organic YouTube vs YouTube Ads">
          Organic YouTube management and YouTube advertising serve different purposes. Keeping the
          distinction clear prevents confusion around scope, budget, and expectations.
        </SectionIntro>

        <div className="grid gap-px border-2 border-frame-border bg-frame-border lg:grid-cols-2">
          <article className="flex flex-col justify-between bg-frame-accent/10 p-7 md:p-8">
            <div>
              <span className="text-xs font-black uppercase tracking-[0.24em] text-frame-accent">
                Organic
              </span>
              <h3 className="mt-3 font-heading text-2xl font-bold uppercase tracking-tight text-frame-fg">
                Organic YouTube Management
              </h3>
              <p className="mt-4 text-sm font-medium leading-relaxed text-frame-muted-fg md:text-base">
                Organic management focuses on building the channel and its content library through:
              </p>
            </div>

            <div className="mt-6 border-t-2 border-frame-accent/30 pt-4">
              <ul className="grid gap-2 sm:grid-cols-2">
                {organic.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm font-medium leading-snug text-frame-fg">
                    <span aria-hidden="true" className="mt-1.5 h-1.5 w-1.5 shrink-0 bg-frame-accent" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-5 border-l-2 border-frame-accent bg-frame-bg p-3 text-xs font-medium leading-relaxed text-frame-muted-fg">
                The objective is to create useful content that can continue generating discovery and
                audience value over time.
              </p>
            </div>
          </article>

          <article className="flex flex-col justify-between bg-frame-bg p-7 md:p-8">
            <div>
              <span className="text-xs font-black uppercase tracking-[0.24em] text-frame-muted-fg">
                Paid
              </span>
              <h3 className="mt-3 font-heading text-2xl font-bold uppercase tracking-tight text-frame-fg">
                YouTube Ads Management
              </h3>
              <p className="mt-4 text-sm font-medium leading-relaxed text-frame-muted-fg md:text-base">
                YouTube Ads use paid media to place advertising in front of selected audiences
                through Google&rsquo;s advertising ecosystem. Paid campaigns can be useful when the
                goal involves:
              </p>
            </div>

            <div className="mt-6 border-t-2 border-frame-border/60 pt-4">
              <ul className="grid gap-2 sm:grid-cols-2">
                {paidGoals.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm font-medium leading-snug text-frame-fg">
                    <span aria-hidden="true" className="mt-1.5 h-1.5 w-1.5 shrink-0 bg-frame-muted-fg" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <span className="mt-5 block text-[10px] font-black uppercase tracking-[0.2em] text-frame-accent">
                YouTube Ads require a separate
              </span>
              <ul className="mt-3 flex flex-wrap gap-2">
                {paidRequirements.map((item) => (
                  <li
                    key={item}
                    className="border border-frame-border bg-frame-bg px-2.5 py-1 text-[11px] font-semibold text-frame-fg"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </article>
        </div>

        <div className="mt-8 border-2 border-frame-accent bg-frame-accent/10 p-7 md:p-8">
          <span className="text-xs font-black uppercase tracking-[0.24em] text-frame-accent">
            How Organic and Paid Can Work Together
          </span>
          <h3 className="mt-3 font-heading text-lg font-bold uppercase tracking-tight text-frame-fg md:text-2xl">
            Organic content and paid campaigns can complement each other
          </h3>
          <p className="mt-4 max-w-4xl text-sm font-medium leading-relaxed text-frame-fg/90 md:text-base">
            For example, a business may use paid campaigns to promote a product or offer while continuing
            to build organic educational content that supports long-term discovery and trust. We can
            coordinate both strategies when they are included in the agreed scope.
          </p>
          <div className="mt-6">
            <PosterButton href="/contact" variant="outline">
              Request a Proposal &rarr;
            </PosterButton>
          </div>
        </div>
      </div>
    </section>
  )
}
