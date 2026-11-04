import { SectionIntro } from '../../Kinetic'

const audiences = [
  {
    title: 'Ecommerce & Product Brands',
    body: 'Product descriptions, category content, buying guides, product education, landing pages, and supporting SEO content.',
  },
  {
    title: 'Service Businesses',
    body: 'Homepage copy, service pages, location pages where appropriate, FAQs, landing pages, educational blogs, and conversion-focused website content.',
  },
  {
    title: 'B2B & Professional Services',
    body: 'Thought leadership, service pages, case studies, industry articles, lead-generation pages, email content, and sales-support material.',
  },
  {
    title: 'SaaS & Technology',
    body: 'Product pages, feature explanations, comparison content, knowledge content, use-case pages, technical blogs, and customer-focused educational material.',
  },
  {
    title: 'Startups & Growing Businesses',
    body: 'Website copy, positioning-focused messaging, launch content, SEO articles, landing pages, case studies, and ongoing content support.',
  },
  {
    title: 'In-House Marketing Teams',
    body: 'We can work as an extension of an existing marketing team, handling selected content types, monthly production, specialist writing, or overflow requirements.',
  },
  {
    title: 'International Businesses',
    body: 'Content can be adapted for international audiences rather than simply changing spelling or replacing a few local references. Audience expectations, terminology, examples, offers, and market context should be considered during the brief.',
  },
]

export default function WhoFor() {
  return (
    <section className="border-t border-white/[0.08] bg-[#121214] px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-7xl">
        <SectionIntro
          eyebrow="Who we write for"
          title="Content Writing for Different Business Needs"
        >
          The right content mix depends on what your customers need at each stage, which is different for every
          type of business.
        </SectionIntro>

        <div className="grid gap-px border border-white/[0.08] bg-frame-border md:grid-cols-2 lg:grid-cols-3">
          {audiences.map((audience) => (
            <article key={audience.title} className="bg-[#09090B] p-7 md:p-8">
              <h3 className="font-heading text-base font-bold leading-tight tracking-tight text-[#FAFAFA] md:text-lg">
                {audience.title}
              </h3>
              <p className="mt-4 text-sm wide:text-lg font-medium leading-relaxed text-[#A1A1AA] md:text-base">
                {audience.body}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
