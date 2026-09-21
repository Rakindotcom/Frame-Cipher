import { SectionIntro } from '../../../Kinetic'

const reasons = [
  {
    title: 'One In-House Team',
    body: 'You do not need separate teams for SEO strategy, content, and development coordination. Our in-house team can connect these areas within one ecommerce SEO strategy.',
  },
  {
    title: 'Buyer-Intent Strategy',
    body: 'We focus on the relationship between what customers search for and the pages that can satisfy their intent. That means we do not treat traffic volume as the only measure of SEO success.',
  },
  {
    title: 'Technical + Content + Development Expertise',
    body: 'Some ecommerce SEO problems cannot be solved with content changes alone. Complex stores may require changes to URLs, templates, filters, rendering, schema, or indexation. Our web development capabilities allow us to approach these issues from both SEO and implementation perspectives.',
  },
  {
    title: 'Bangladesh & International Ecommerce Experience',
    body: 'We support ecommerce businesses targeting Bangladesh and international markets. For Bangladesh-focused stores, strategies can account for local search behavior, Bangla content opportunities, product demand, and ecommerce considerations such as local payment and delivery expectations. For international stores, we adapt the strategy around country-specific search intent and international SEO requirements.',
  },
  {
    title: 'Transparent Reporting',
    body: 'You should know what was changed, why it was changed, and what the data shows. Our reporting focuses on meaningful SEO and ecommerce metrics rather than vanity numbers alone.',
  },
]

export default function WhyChoose() {
  return (
    <section className="border-t-2 border-frame-border bg-frame-muted/30 px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro eyebrow="The Framecipher standard" title="Why Choose Framecipher for Ecommerce SEO">
          Ecommerce SEO often requires more than keyword optimization. Technical implementation,
          content, site architecture, analytics, and development can all affect the result.
          Framecipher brings these capabilities together through one in-house team.
        </SectionIntro>

        <div className="grid gap-px border-2 border-frame-border bg-frame-border sm:grid-cols-2 lg:grid-cols-3">
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
              </div>
              <span aria-hidden="true" className="mt-6 block h-1 w-8 bg-frame-accent" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}