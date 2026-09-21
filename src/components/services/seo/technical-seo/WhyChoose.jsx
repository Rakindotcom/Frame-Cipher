import { SectionIntro } from '../../../Kinetic'

const reasons = [
  {
    title: 'SEO + Development Under One Team',
    body: 'Technical SEO often requires changes to code, templates, website architecture, or server-side implementation. Framecipher combines SEO, content, design, and development under one in-house team, reducing the gap between identifying a technical problem and implementing the solution.',
  },
  {
    title: 'Diagnosis Before Implementation',
    body: 'We do not treat every website with the same checklist. We investigate the actual technical condition of your website, prioritize the issues that matter, and recommend fixes based on evidence.',
  },
  {
    title: 'Transparent Technical Recommendations',
    body: 'You can understand what needs to change, why it matters, and how the recommended work fits into your website. Depending on the project, technical changes can be reviewed and approved before implementation.',
  },
  {
    title: 'Bangladesh & International Experience',
    body: 'We support businesses targeting Bangladesh and international markets, including the US, UK, Australia, Canada, and UAE. Our technical recommendations account for the website platform, target market, business model, and technical environment.',
  },
]

export default function WhyChoose() {
  return (
    <section className="border-t-2 border-frame-border bg-frame-muted/30 px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro
          eyebrow="The Framecipher standard"
          title="Why Choose Framecipher for Technical SEO"
        >
          Technical SEO works best when strategy, content, design, and development operate as one
          in-house team instead of separate handoffs.
        </SectionIntro>

        <div className="grid gap-px border-2 border-frame-border bg-frame-border sm:grid-cols-2 lg:grid-cols-4">
          {reasons.map((reason, index) => (
            <div key={index} className="flex flex-col justify-between bg-frame-bg p-7 md:p-8">
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
              </div>
              <span aria-hidden="true" className="mt-6 block h-1 w-8 bg-frame-accent" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}