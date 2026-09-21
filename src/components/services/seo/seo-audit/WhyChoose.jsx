import { SectionIntro } from '../../../Kinetic'

const reasons = [
  {
    title: 'Human Analysis, Not Automated Exports',
    body: 'SEO tools are useful for collecting data. They cannot understand your entire business context or automatically determine which technical warnings matter most. Framecipher combines automated analysis with manual review so important findings are interpreted before they become recommendations.',
  },
  {
    title: 'One In-House SEO + Content + Development Team',
    body: 'Many SEO findings require more than an SEO specialist. A technical issue may need development. A content problem may require rewriting. An architecture problem may involve both SEO and development. Framecipher brings SEO, content, and development into one workflow so recommendations can remain aligned with implementation.',
  },
  {
    title: 'Standalone Audit With No Lock-In',
    body: 'You do not need to commit to an ongoing SEO contract to use the audit. We provide the audit as a standalone deliverable that your internal team or another implementation partner can use. You can also continue with Framecipher when you need help executing the roadmap.',
  },
  {
    title: 'Bangladesh & International Experience',
    body: 'Framecipher is based in Dhaka and works with businesses in Bangladesh and international markets. We can audit websites targeting local customers, multiple countries, multilingual audiences, ecommerce buyers, B2B decision-makers, and other search audiences. The audit scope is adapted to the business model and market rather than built around one generic checklist.',
  },
]

export default function WhyChoose() {
  return (
    <section className="border-t-2 border-frame-border bg-frame-bg px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro eyebrow="The Framecipher difference" title="Why Choose Framecipher for SEO Audits">
          An SEO audit is only as useful as the analysis behind it.
        </SectionIntro>

        <div className="grid gap-6 sm:grid-cols-2">
          {reasons.map((reason, index) => (
            <div
              key={reason.title}
              className="flex flex-col justify-between border-2 border-frame-border bg-frame-muted/30 p-7 transition-colors hover:border-frame-accent md:p-8"
            >
              <div>
                <span className="text-xs font-black uppercase tracking-[0.24em] text-frame-accent">
                  Reason 0{index + 1}
                </span>
                <h3 className="mt-3 font-heading text-xl md:text-2xl font-bold uppercase tracking-tight text-frame-fg">
                  {reason.title}
                </h3>
                <p className="mt-4 text-sm font-medium leading-relaxed text-frame-muted-fg md:text-base">
                  {reason.body}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}