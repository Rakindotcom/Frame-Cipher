import { SectionIntro, PosterButton } from '../../../Kinetic'

const languages = ['English', 'Bangla', 'Bangla-English', 'Market-specific terminology']

const markets = ['United States', 'United Kingdom', 'Australia', 'Canada', 'United Arab Emirates']

export default function ServiceAreas() {
  return (
    <section className="border-y-2 border-frame-border bg-frame-bg px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro
          eyebrow="Service areas"
          title="Bangladesh &amp; International Email Copywriting"
        >
          Framecipher is based in Dhaka and provides email copywriting for businesses across Bangladesh and
          international clients in the US, UK, Australia, Canada, and UAE.
        </SectionIntro>

        <div className="grid gap-px border-2 border-frame-border bg-frame-border md:grid-cols-2">
          <article className="bg-frame-bg p-7 md:p-8 transition-colors duration-200 hover:bg-frame-muted/40">
            <h3 className="font-heading text-base font-bold uppercase leading-tight tracking-tight text-frame-fg md:text-lg">
              For Bangladesh
            </h3>
            <p className="mt-4 text-sm font-medium leading-relaxed text-frame-muted-fg md:text-base">
              We can develop email copy in:
            </p>
            <ul className="mt-4 space-y-2.5">
              {languages.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-2.5 text-sm font-medium leading-relaxed text-frame-fg"
                >
                  <span aria-hidden="true" className="mt-1.5 h-2 w-2 shrink-0 bg-frame-accent" />
                  {item}
                </li>
              ))}
            </ul>
            <p className="mt-5 border-l-2 border-frame-accent bg-frame-muted/10 p-3 text-xs font-medium leading-relaxed text-frame-muted-fg">
              The writing can be adapted to the intended audience instead of directly translating an
              international template.
            </p>
          </article>

          <article className="bg-frame-bg p-7 md:p-8 transition-colors duration-200 hover:bg-frame-muted/40">
            <h3 className="font-heading text-base font-bold uppercase leading-tight tracking-tight text-frame-fg md:text-lg">
              For International Markets
            </h3>
            <p className="mt-4 text-sm font-medium leading-relaxed text-frame-muted-fg md:text-base">
              We can adapt email messaging around the target market, audience, offer, terminology, and brand
              voice. This includes projects targeting:
            </p>
            <ul className="mt-4 flex flex-wrap gap-2">
              {markets.map((market) => (
                <li
                  key={market}
                  className="border border-frame-border bg-frame-muted/10 px-2.5 py-1 text-[11px] font-semibold text-frame-fg"
                >
                  {market}
                </li>
              ))}
            </ul>
            <p className="mt-5 text-sm font-medium leading-relaxed text-frame-muted-fg md:text-base">
              The goal is to maintain the core offer and brand identity while making the communication appropriate
              for the audience receiving it.
            </p>
          </article>
        </div>

        <div className="mt-10 flex flex-col gap-6 border-t-2 border-frame-border pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-3xl text-sm font-medium leading-relaxed text-frame-muted-fg md:text-base">
            Inbox habits, reading expectations, and terminology vary meaningfully by market.
          </p>
          <div className="shrink-0">
            <PosterButton href="/contact" variant="outline">
              Discuss Your Target Market &rarr;
            </PosterButton>
          </div>
        </div>
      </div>
    </section>
  )
}
