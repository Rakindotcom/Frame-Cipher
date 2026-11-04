import { SectionIntro } from '../../../Kinetic'

const checks = [
  'Product-information accuracy',
  'Clear and readable language',
  'Original messaging',
  'Buyer-focused benefits',
  'Appropriate keyword use',
  'Consistent brand voice',
  'Platform formatting',
  'Unsupported or exaggerated claims',
]

const nonGuarantees = [
  'A specific ranking position',
  'A specific conversion rate',
  'A specific sales volume',
  'A specific revenue outcome',
]

const externalFactors = [
  'Pricing',
  'Product quality',
  'Reviews',
  'Competition',
  'Website experience',
  'Traffic',
  'Availability',
  'Overall ecommerce strategy',
]

export default function QualityControl() {
  return (
    <section className="border-y border-white/[0.08] bg-[#09090B] px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-7xl">
        <SectionIntro eyebrow="Quality standard" title="Product Copy Quality & Review Standards">
          Every agreed batch is reviewed before delivery, so the checks below are part of the process rather
          than a final pass.
        </SectionIntro>

        <div className="grid gap-px border border-white/[0.08] bg-frame-border md:grid-cols-2">
          <article className="bg-[#A855F7]/10 p-7 md:p-8">
            <h3 className="font-heading text-base font-bold leading-tight tracking-tight text-[#FAFAFA] md:text-lg">
              What We Check Before Delivery
            </h3>
            <ul className="mt-5 space-y-3">
              {checks.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-2.5 border-b border-white/[0.06] pb-3 text-sm wide:text-lg font-medium leading-relaxed text-[#A1A1AA] last:border-b-0 md:text-base"
                >
                  <span aria-hidden="true" className="mt-1.5 h-2 w-2 shrink-0 bg-frame-accent" />
                  {item}
                </li>
              ))}
            </ul>
          </article>

          <article className="bg-[#09090B] p-7 md:p-8 transition-colors duration-200 hover:bg-[#121214]/40">
            <h3 className="font-heading text-base font-bold leading-tight tracking-tight text-[#FAFAFA] md:text-lg">
              What We Don&rsquo;t Guarantee
            </h3>
            <p className="mt-4 text-sm wide:text-lg font-medium leading-relaxed text-[#A1A1AA] md:text-base">
              We do not guarantee:
            </p>
            <ul className="mt-4 space-y-3">
              {nonGuarantees.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-2.5 border-b border-white/[0.06] pb-3 text-sm wide:text-lg font-medium leading-relaxed text-[#A1A1AA] last:border-b-0 md:text-base"
                >
                  <span aria-hidden="true" className="mt-1.5 h-2 w-2 shrink-0 bg-[#121214]" />
                  {item}
                </li>
              ))}
            </ul>

            <p className="mt-7 text-sm wide:text-lg font-medium leading-relaxed text-[#A1A1AA] md:text-base">
              Those results also depend on factors outside the copy itself:
            </p>
            <ul className="mt-3 flex flex-wrap gap-2">
              {externalFactors.map((item) => (
                <li
                  key={item}
                  className="border border-white/[0.08] bg-[#121214] px-2.5 py-1 text-[11px] font-semibold text-[#FAFAFA]"
                >
                  {item}
                </li>
              ))}
            </ul>
          </article>
        </div>

        <p className="mt-8 border-l-2 border-[#A855F7]/40 bg-[#121214] p-4 text-sm font-semibold leading-relaxed text-[#FAFAFA]">
          Our commitment is to deliver product copy that is researched, accurate, original, structured for the
          intended platform, and refined through the agreed review process.
        </p>
      </div>
    </section>
  )
}
