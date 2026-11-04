import { SectionIntro } from '../../../Kinetic'

const markets = ['United States', 'United Kingdom', 'Australia', 'Canada', 'UAE', 'Other international markets']

export default function ServiceAreas() {
  return (
    <section className="border-t border-white/[0.08] bg-[#121214] px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-7xl">
        <SectionIntro
          eyebrow="Service areas"
          title="SEO &amp; Blog Writing Service Areas"
        >
          Search behavior, terminology, and content expectations vary by region and language, and research
          accounts for that instead of applying one market&rsquo;s patterns everywhere.
        </SectionIntro>

        <div className="grid gap-px border border-white/[0.08] bg-frame-border md:grid-cols-2">
          <article className="bg-[#09090B] p-7 md:p-8 transition-colors duration-200 hover:bg-[#121214]/40">
            <h3 className="font-heading text-base font-bold leading-tight tracking-tight text-[#FAFAFA] md:text-lg">
              Bangladesh
            </h3>
            <p className="mt-4 text-sm wide:text-lg font-medium leading-relaxed text-[#A1A1AA] md:text-base">
              Framecipher provides SEO and blog writing services for businesses across Bangladesh, including
              Dhaka and other locations.
            </p>
            <p className="mt-4 text-sm wide:text-lg font-medium leading-relaxed text-[#A1A1AA] md:text-base">
              Where relevant, content research can consider English and Bangla search behavior, local
              terminology, audience needs, and market context.
            </p>
          </article>

          <article className="bg-[#09090B] p-7 md:p-8 transition-colors duration-200 hover:bg-[#121214]/40">
            <h3 className="font-heading text-base font-bold leading-tight tracking-tight text-[#FAFAFA] md:text-lg">
              International Markets
            </h3>
            <p className="mt-4 text-sm wide:text-lg font-medium leading-relaxed text-[#A1A1AA] md:text-base">
              We also support businesses targeting:
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
              International SEO content is adapted to the intended audience rather than simply translating an
              existing article word for word.
            </p>
          </article>
        </div>
      </div>
    </section>
  )
}
