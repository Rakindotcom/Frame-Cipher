import { SectionIntro } from '../../../Kinetic'

const reasons = [
  {
    title: 'No Approval Guarantees or Shortcuts',
    body: 'We do not sell \u201C100% approval,\u201D secret techniques, fixed article-count formulas, or artificial traffic strategies. Google makes the final decision, and its review remains outside any third-party provider\u2019s control.',
    closing:
      'Our role is to prepare your site as thoroughly as possible and give you an honest assessment before you submit.',
  },
  {
    title: 'One In-House SEO, Content & Development Team',
    body: 'AdSense readiness often crosses several disciplines. Content quality, site structure, technical implementation, navigation, and SEO fundamentals can affect the overall condition of a website.',
    closing:
      'Our in-house team can address those areas together instead of treating approval as a single checklist item.',
  },
  {
    title: 'Site-Specific Diagnosis',
    body: 'Your rejection may not have the same cause as another publisher\u2019s rejection.',
    closing:
      'We review your actual website, available AdSense feedback, content, structure, and technical setup before recommending changes.',
  },
  {
    title: 'Bangladesh & International Experience',
    body: 'Framecipher is based in Bangladesh and works with businesses and publishers serving both local and international audiences.',
    closing:
      'That allows us to account for different languages, website models, audiences, and market requirements instead of applying one generic publishing template.',
  },
]

export default function WhyChoose() {
  return (
    <section className="border-t-2 border-frame-border bg-frame-bg px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro eyebrow="The Framecipher standard" title="Why Choose Framecipher for AdSense Approval">
          The final approval belongs to Google, so the honest value a team can add is a thorough
          review and real fixes.
        </SectionIntro>

        <div className="grid gap-px border-2 border-frame-border bg-frame-border sm:grid-cols-2 lg:grid-cols-4">
          {reasons.map((reason, index) => (
            <div key={reason.title} className="flex flex-col justify-between bg-frame-bg p-7 md:p-8">
              <div>
                <span className="text-xs font-black uppercase tracking-[0.24em] text-frame-accent">
                  Standard 0{index + 1}
                </span>
                <h3 className="mt-3 font-heading text-lg md:text-xl font-bold uppercase tracking-tight text-frame-fg">
                  {reason.title}
                </h3>
                <p className="mt-4 text-sm font-medium leading-relaxed text-frame-muted-fg">
                  {reason.body}
                </p>
                {reason.closing && (
                  <p className="mt-3 text-xs font-medium leading-relaxed text-frame-muted-fg">
                    {reason.closing}
                  </p>
                )}
              </div>
              <span aria-hidden="true" className="mt-6 block h-1 w-8 bg-frame-accent" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}