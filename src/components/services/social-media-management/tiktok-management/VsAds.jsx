import { SectionIntro, PosterButton } from '../../../Kinetic'

const organic = [
  'Strategy',
  'Content creation',
  'Trend research',
  'TikTok SEO',
  'Publishing',
  'Community management',
  'Performance analysis',
  'Content testing',
  'Organic content optimization',
]

const ads = [
  'Campaign strategy',
  'Audience targeting',
  'Ad creative',
  'Campaign setup',
  'Budget management',
  'Testing',
  'Conversion tracking',
  'Paid performance optimization',
]

const together = [
  {
    title: 'Organic content can provide creative ideas and audience-response data',
    body: 'Paid campaigns can then distribute selected creative to defined audiences and support specific campaign objectives.',
  },
  {
    title: 'Paid insights can inform future organic content',
    body: 'Paid campaign insights can also reveal audience interests that shape upcoming topics and formats.',
  },
  {
    title: 'The two channels should work together',
    body: 'The two channels should work together without treating organic performance as a guarantee of paid performance.',
  },
]

export default function VsAds() {
  return (
    <section className="border-t-2 border-frame-border bg-frame-bg px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro eyebrow="Scope clarity" title="Organic TikTok vs TikTok Ads">
          Organic management and paid advertising serve different functions. Keeping the distinction clear
          helps prevent confusion around scope, reporting, and expectations.
        </SectionIntro>

        <div className="grid gap-px border-2 border-frame-border bg-frame-border lg:grid-cols-2">
          <article className="flex flex-col justify-between bg-frame-accent/10 p-7 md:p-8">
            <div>
              <span className="text-xs font-black uppercase tracking-[0.24em] text-frame-accent">
                Organic
              </span>
              <h3 className="mt-3 font-heading text-2xl font-bold uppercase tracking-tight text-frame-fg">
                Organic TikTok Management
              </h3>
              <p className="mt-4 text-sm font-medium leading-relaxed text-frame-muted-fg md:text-base">
                Organic TikTok management focuses on building and managing the account through content and
                community activity. This includes:
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
                Media-buying budgets are not included in organic management unless specifically stated.
              </p>
            </div>
          </article>

          <article className="flex flex-col justify-between bg-frame-bg p-7 md:p-8">
            <div>
              <span className="text-xs font-black uppercase tracking-[0.24em] text-frame-muted-fg">
                Paid
              </span>
              <h3 className="mt-3 font-heading text-2xl font-bold uppercase tracking-tight text-frame-fg">
                TikTok Ads Management
              </h3>
              <p className="mt-4 text-sm font-medium leading-relaxed text-frame-muted-fg md:text-base">
                TikTok Ads Management focuses on paid campaigns and advertising objectives. Depending on
                the campaign, this may include:
              </p>
            </div>

            <div className="mt-6 border-t-2 border-frame-border/60 pt-4">
              <ul className="grid gap-2 sm:grid-cols-2">
                {ads.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm font-medium leading-snug text-frame-fg">
                    <span aria-hidden="true" className="mt-1.5 h-1.5 w-1.5 shrink-0 bg-frame-muted-fg" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-5 border-l-2 border-frame-accent bg-frame-muted/10 p-3 text-xs font-medium leading-relaxed text-frame-muted-fg">
                Advertising spend is separate from management fees.
              </p>
            </div>
          </article>
        </div>

        <div className="mt-8 border-2 border-frame-accent bg-frame-accent/10 p-7 md:p-8">
          <span className="text-xs font-black uppercase tracking-[0.24em] text-frame-accent">
            How Organic and Paid Can Work Together
          </span>
          <h3 className="mt-3 font-heading text-lg font-bold uppercase tracking-tight text-frame-fg md:text-2xl">
            Organic and paid strategies can support each other when they are planned properly
          </h3>

          <div className="mt-6 grid gap-px border-2 border-frame-border bg-frame-border sm:grid-cols-3">
            {together.map((item) => (
              <div key={item.title} className="bg-frame-bg p-5">
                <h4 className="font-heading text-sm font-bold uppercase leading-snug tracking-tight text-frame-fg">
                  {item.title}
                </h4>
                <p className="mt-2 text-xs font-medium leading-relaxed text-frame-muted-fg md:text-sm">
                  {item.body}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-6">
            <PosterButton href="/contact" variant="outline">
              Request a Custom Quote &rarr;
            </PosterButton>
          </div>
        </div>
      </div>
    </section>
  )
}
