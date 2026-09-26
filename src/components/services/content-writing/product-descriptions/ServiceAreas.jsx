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
    <section className="border-b-2 border-frame-border bg-frame-muted/30 px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro eyebrow="Service areas" title="Product Description Writing Service Areas">
          Framecipher is based in Dhaka and provides product description writing for businesses in Bangladesh
          and international markets.
        </SectionIntro>

        <div className="grid gap-px border-2 border-frame-border bg-frame-border md:grid-cols-2">
          <article className="bg-frame-bg p-7 md:p-8 transition-colors duration-200 hover:bg-frame-muted/40">
            <h3 className="font-heading text-base font-bold uppercase leading-tight tracking-tight text-frame-fg md:text-lg">
              For Bangladesh Ecommerce Businesses
            </h3>
            <p className="mt-4 text-sm font-medium leading-relaxed text-frame-muted-fg md:text-base">
              We can support:
            </p>
            <ul className="mt-4 space-y-2.5">
              {local.map((item) => (
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
              The goal is not direct translation. Product copy should reflect how the intended audience actually
              understands and evaluates the product.
            </p>
          </article>

          <article className="bg-frame-bg p-7 md:p-8 transition-colors duration-200 hover:bg-frame-muted/40">
            <h3 className="font-heading text-base font-bold uppercase leading-tight tracking-tight text-frame-fg md:text-lg">
              For International Markets
            </h3>
            <p className="mt-4 text-sm font-medium leading-relaxed text-frame-muted-fg md:text-base">
              We also work with businesses targeting markets such as:
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
              International product copy can be adapted around the intended market, audience, terminology, and
              buying context.
            </p>
          </article>
        </div>
      </div>
    </section>
  )
}
