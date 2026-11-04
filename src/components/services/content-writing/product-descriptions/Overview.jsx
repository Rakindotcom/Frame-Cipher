import { SectionIntro, PosterButton } from '../../../Kinetic'

const criteria = [
  'What the product is',
  'Who it is for',
  'What problem it solves',
  'What makes it different',
  'Which features matter most',
  'How the product is used',
  'What buyers may be unsure about',
  'Why the product is worth considering',
  'What the shopper should do next',
]

export default function Overview() {
  return (
    <section className="border-b border-white/[0.08] bg-[#121214] px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-7xl">
        <SectionIntro
          eyebrow="Buyer clarity"
          title="Product Descriptions Built to Help Shoppers Understand, Trust, and Buy"
        >
          A product description should answer the questions that stand between a shopper and a purchase.
        </SectionIntro>

        <div className="grid gap-10 border-t border-white/[0.08] pt-12 lg:grid-cols-[1.3fr_0.7fr] lg:items-start">
          <div className="space-y-5 text-base font-medium leading-relaxed text-[#A1A1AA] md:text-lg">
            <p>That means more than making the copy sound attractive.</p>
            <p>We structure product content around:</p>
            <p>
              The result is product copy that is easier to scan, easier to understand, and more useful at the
              point of purchase.
            </p>
          </div>

          <div className="border border-white/[0.08] bg-[#09090B] p-7 md:p-8">
            <span className="text-xs font-black uppercase tracking-[0.24em] text-[#A855F7]">
              Product content should cover
            </span>
            <ul className="mt-5 space-y-2.5">
              {criteria.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-2.5 text-sm font-medium leading-relaxed text-[#FAFAFA]"
                >
                  <span aria-hidden="true" className="mt-1.5 h-2 w-2 shrink-0 bg-frame-accent" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-6 border-t border-white/[0.08] pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-3xl text-sm wide:text-lg font-medium leading-relaxed text-[#A1A1AA] md:text-base">
            Tell us how many products you sell, where they are listed, and what needs to improve. We can help
            define a practical scope from there.
          </p>
          <div className="shrink-0">
            <PosterButton href="/contact">Discuss Your Product Catalog &rarr;</PosterButton>
          </div>
        </div>
      </div>
    </section>
  )
}
