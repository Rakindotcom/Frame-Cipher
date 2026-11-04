import { SectionIntro } from '../../../Kinetic'

const local = [
  'English product descriptions',
  'Bangla product copy',
  'Bangla-English ecommerce copy',
  'Local buyer terminology',
  'Bangladesh-focused product messaging',
  'Marketplace and website product listings',
]

const markets = ['United States', 'United Kingdom', 'Australia', 'Canada', 'UAE']

export default function ServiceAreas() {
  return (
    <section className="border-b border-white/[0.08] bg-[#121214] px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-7xl">
        <SectionIntro eyebrow="Service areas" title="Product Description Writing Service Areas">
          Framecipher is based in Dhaka and provides product description writing for businesses in Bangladesh
          and international markets.
        </SectionIntro>

        <div className="grid gap-px border border-white/[0.08] bg-frame-border md:grid-cols-2">
          <article className="bg-[#09090B] p-7 md:p-8 transition-colors duration-200 hover:bg-[#121214]/40">
            <h3 className="font-heading text-base font-bold leading-tight tracking-tight text-[#FAFAFA] md:text-lg">
              For Bangladesh Ecommerce Businesses
            </h3>
            <p className="mt-4 text-sm wide:text-lg font-medium leading-relaxed text-[#A1A1AA] md:text-base">
              We can support:
            </p>
            <ul className="mt-4 space-y-2.5">
              {local.map((item) => (
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
              The goal is not direct translation. Product copy should reflect how the intended audience actually
              understands and evaluates the product.
            </p>
          </article>

          <article className="bg-[#09090B] p-7 md:p-8 transition-colors duration-200 hover:bg-[#121214]/40">
            <h3 className="font-heading text-base font-bold leading-tight tracking-tight text-[#FAFAFA] md:text-lg">
              For International Markets
            </h3>
            <p className="mt-4 text-sm wide:text-lg font-medium leading-relaxed text-[#A1A1AA] md:text-base">
              We also work with businesses targeting markets such as:
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
              International product copy can be adapted around the intended market, audience, terminology, and
              buying context.
            </p>
          </article>
        </div>
      </div>
    </section>
  )
}
