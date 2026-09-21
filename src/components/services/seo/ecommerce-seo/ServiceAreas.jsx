import { SectionIntro, PosterButton } from '../../../Kinetic'

const markets = [
  {
    title: 'Bangladesh',
    body: 'We support ecommerce stores serving Bangladesh, with strategies that account for local search behavior, Bangla content opportunities, product demand, and ecommerce considerations such as local payment and delivery expectations.',
  },
  {
    title: 'US, UK, Australia, Canada & UAE',
    body: 'For clients across the US, UK, Australia, Canada, and UAE, we adapt the strategy around country-specific search intent, currencies, and international SEO requirements such as hreflang and regional site structure.',
  },
]

const tokens = ['Bangladesh', 'Dhaka', 'UAE', 'US', 'UK', 'Australia', 'Canada']

export default function ServiceAreas() {
  return (
    <section className="border-t-2 border-frame-border bg-frame-bg px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro eyebrow="Where we work" title="Ecommerce SEO for Bangladesh & International Markets">
          Framecipher is based in Dhaka and serves ecommerce businesses targeting both local and
          international customers.
        </SectionIntro>

        <div className="grid gap-6 lg:grid-cols-2">
          {markets.map((market) => (
            <div
              key={market.title}
              className="flex flex-col justify-between border-2 border-frame-border bg-frame-muted/30 p-7 transition-colors hover:border-frame-accent md:p-10"
            >
              <div>
                <span className="text-xs font-black uppercase tracking-[0.24em] text-frame-accent">
                  Market
                </span>
                <h3 className="mt-3 font-heading text-2xl font-bold uppercase tracking-tight text-frame-fg">
                  {market.title}
                </h3>
                <p className="mt-4 text-sm md:text-base font-medium leading-relaxed text-frame-muted-fg">
                  {market.body}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 border-l-2 border-frame-accent bg-frame-muted/10 p-6 md:p-7">
          <div className="flex flex-wrap items-center gap-2">
            {tokens.map((token) => (
              <span
                key={token}
                className="border-2 border-frame-border bg-frame-bg px-3 py-1 text-xs font-black uppercase tracking-[0.2em] text-frame-accent"
              >
                {token}
              </span>
            ))}
          </div>
          <div className="mt-5 lg:flex lg:items-center lg:justify-between lg:gap-8">
            <p className="max-w-3xl text-sm md:text-base font-medium leading-relaxed text-frame-muted-fg">
              Market targeting accounts for local search behavior rather than applying one
              market&apos;s assumptions everywhere.
            </p>
            <div className="mt-5 lg:mt-0 lg:shrink-0">
              <PosterButton href="/contact">Talk to Our Team &rarr;</PosterButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}