import { SectionIntro } from '../../../Kinetic'

const markets = ['United States', 'United Kingdom', 'Australia', 'Canada', 'UAE', 'Other international markets']

export default function ServiceAreas() {
  return (
    <section className="border-t-2 border-frame-border bg-frame-muted/30 px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro
          eyebrow="Service areas"
          title="Website Content Writing Service Areas"
        >
          Terminology, examples, positioning, tone, audience expectations, and local context may all need to
          be considered rather than translated.
        </SectionIntro>

        <div className="grid gap-px border-2 border-frame-border bg-frame-border md:grid-cols-2">
          <article className="bg-frame-bg p-7 md:p-8 transition-colors duration-200 hover:bg-frame-muted/40">
            <h3 className="font-heading text-base font-bold uppercase leading-tight tracking-tight text-frame-fg md:text-lg">
              Bangladesh
            </h3>
            <p className="mt-4 text-sm font-medium leading-relaxed text-frame-muted-fg md:text-base">
              Framecipher provides website content writing services for businesses across Bangladesh, including
              businesses in Dhaka and other locations.
            </p>
            <p className="mt-4 text-sm font-medium leading-relaxed text-frame-muted-fg md:text-base">
              Where appropriate, we can support English, Bangla, or bilingual website content based on the
              intended audience and market.
            </p>
          </article>

          <article className="bg-frame-bg p-7 md:p-8 transition-colors duration-200 hover:bg-frame-muted/40">
            <h3 className="font-heading text-base font-bold uppercase leading-tight tracking-tight text-frame-fg md:text-lg">
              International Markets
            </h3>
            <p className="mt-4 text-sm font-medium leading-relaxed text-frame-muted-fg md:text-base">
              We also support businesses targeting international audiences, including:
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
              International website content should not simply translate words from one market to another.
            </p>
          </article>
        </div>
      </div>
    </section>
  )
}
