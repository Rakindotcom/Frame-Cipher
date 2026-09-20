import { SectionIntro } from '../../../Kinetic'

const conversionOptimizations = [
  {
    title: 'Message-to-Market Match',
    desc: 'The headline, offer, imagery, benefits, and CTA should reflect what visitors expected when they clicked the campaign.',
  },
  {
    title: 'Conversion-Focused Page Structure',
    desc: 'We structure the page around the information visitors need before acting, including the value proposition, benefits, proof, objections, and final CTA.',
  },
  {
    title: 'CTA & Form Optimization',
    desc: 'We consider CTA wording, placement, form length, required fields, and the amount of information requested based on the conversion goal.',
  },
  {
    title: 'Trust & Social Proof',
    desc: 'Relevant testimonials, ratings, client logos, results, guarantees, or other proof can be used to reduce hesitation where genuine evidence is available.',
  },
  {
    title: 'A/B Testing Readiness',
    desc: 'Where included in the project, we can structure the page so headlines, offers, CTAs, sections, or design variations can be tested without rebuilding the entire page.',
  },
]

export default function ConversionOptimization() {
  return (
    <section className="border-t-2 border-frame-border bg-frame-bg px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro eyebrow="CRO Framework / Frictional Elimination" title="Conversion Optimization for Landing Pages">
          A landing page should make the desired action easier, clearer, and more convincing. We consider the full conversion path rather than treating design as the finished product.
        </SectionIntro>

        <div className="grid bg-frame-border gap-px border-2 border-frame-border sm:grid-cols-2 lg:grid-cols-3">
          {conversionOptimizations.map((opt, index) => (
            <div key={index} className="bg-frame-bg p-7 md:p-8 flex flex-col justify-between">
              <div>
                <span className="text-xs font-black uppercase tracking-[0.24em] text-frame-accent">CRO Element 0{index + 1}</span>
                <h3 className="mt-3 font-heading text-lg md:text-xl font-bold uppercase tracking-tight text-frame-fg">
                  {opt.title}
                </h3>
                <p className="mt-3 text-xs md:text-sm font-medium leading-relaxed text-frame-muted-fg">
                  {opt.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 border-2 border-frame-border bg-frame-muted/20 p-6">
          <p className="text-xs md:text-sm font-medium leading-relaxed text-frame-muted-fg">
            <strong className="text-frame-fg uppercase tracking-wider">Please Note:</strong> A landing page is rarely improved by one design decision alone. Performance comes from the relationship between the offer, message, traffic, user experience, and conversion path.
          </p>
        </div>
      </div>
    </section>
  )
}