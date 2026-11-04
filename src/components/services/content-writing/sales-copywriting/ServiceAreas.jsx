import { SectionIntro, PosterButton } from '../../../Kinetic'

const languages = ['English', 'Bangla', 'Bangla-English', 'Market-specific terminology']

const markets = ['United States', 'United Kingdom', 'Australia', 'Canada']

export default function ServiceAreas() {
  return (
    <section className="border-y border-white/[0.08] bg-[#09090B] px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-7xl">
        <SectionIntro
          eyebrow="Service areas"
          title="Bangladesh &amp; International Sales Copywriting"
        >
          Framecipher is based in Dhaka and provides sales copywriting for businesses across Bangladesh and
          international clients in the US, UK, Australia, and Canada.
        </SectionIntro>

        <div className="grid gap-px border border-white/[0.08] bg-frame-border md:grid-cols-2">
          <article className="bg-[#09090B] p-7 md:p-8 transition-colors duration-200 hover:bg-[#121214]/40">
            <h3 className="font-heading text-base font-bold leading-tight tracking-tight text-[#FAFAFA] md:text-lg">
              For Bangladesh
            </h3>
            <p className="mt-4 text-sm wide:text-lg font-medium leading-relaxed text-[#A1A1AA] md:text-base">
              We can develop sales messaging in:
            </p>
            <ul className="mt-4 space-y-2.5">
              {languages.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-2.5 text-sm font-medium leading-relaxed text-[#FAFAFA]"
                >
                  <span aria-hidden="true" className="mt-1.5 h-2 w-2 shrink-0 bg-frame-accent" />
                  {item}
                </li>
              ))}
            </ul>
            <p className="mt-5 border-l-2 border-[#A855F7]/40 bg-[#121214] p-3 text-xs font-medium leading-relaxed text-[#A1A1AA]">
              The writing can be adapted to the actual communication style and buying context of the intended
              audience rather than translated word-for-word from another market.
            </p>
          </article>

          <article className="bg-[#09090B] p-7 md:p-8 transition-colors duration-200 hover:bg-[#121214]/40">
            <h3 className="font-heading text-base font-bold leading-tight tracking-tight text-[#FAFAFA] md:text-lg">
              For International Markets
            </h3>
            <p className="mt-4 text-sm wide:text-lg font-medium leading-relaxed text-[#A1A1AA] md:text-base">
              International sales copy can be adapted around the intended market, audience, offer, terminology,
              and buying context. This includes projects targeting:
            </p>
            <ul className="mt-4 flex flex-wrap gap-2">
              {markets.map((market) => (
                <li
                  key={market}
                  className="border border-white/[0.08] bg-[#121214] px-2.5 py-1 text-[11px] font-semibold text-[#FAFAFA]"
                >
                  {market}
                </li>
              ))}
            </ul>
            <p className="mt-5 text-sm wide:text-lg font-medium leading-relaxed text-[#A1A1AA] md:text-base">
              The goal is not to make every market sound identical. It is to keep the core offer consistent
              while making the sales argument appropriate for the audience receiving it.
            </p>
          </article>
        </div>

        <div className="mt-10 flex flex-col gap-6 border-t border-white/[0.08] pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-3xl text-sm wide:text-lg font-medium leading-relaxed text-[#A1A1AA] md:text-base">
            Buying psychology and decision triggers vary meaningfully by market.
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
