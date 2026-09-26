import { SectionIntro } from '../../../Kinetic'

const pages = [
  {
    title: 'Lead Generation Landing Page',
    body: [
      'Written to convert paid or organic traffic into qualified inquiries, leads, or signups for a defined offer.',
    ],
  },
  {
    title: 'Paid Advertising Landing Page',
    body: [
      'Built to match a specific ad, audience, platform, and campaign objective with consistent messaging.',
    ],
  },
  {
    title: 'Product &amp; Ecommerce Landing Page',
    body: [
      'Used to focus attention on a product, offer, bundle, or promotion and move visitors toward purchase.',
    ],
  },
  {
    title: 'SaaS Demo &amp; Free Trial Landing Page',
    body: [
      'Written to explain a product quickly and move prospects toward a demo request, free trial, or similar action.',
    ],
  },
  {
    title: 'Consultation &amp; Appointment Landing Page',
    body: [
      'Designed to promote a consultation, call, assessment, discovery session, or booked appointment.',
    ],
  },
  {
    title: 'Webinar, Event &amp; Registration Landing Page',
    body: [
      'Focused on event details, expectations, and a clear registration path.',
    ],
  },
  {
    title: 'Lead Magnet &amp; Download Landing Page',
    body: [
      'Used to explain the value of a download and collect the contact information needed to deliver it.',
    ],
  },
  {
    title: 'Product Launch &amp; Promotional Landing Page',
    body: [
      'Written for launches, limited campaigns, seasonal offers, and other time-bound promotional goals.',
    ],
  },
]

export default function PagesWeWrite() {
  return (
    <section className="border-b-2 border-frame-border bg-frame-muted/30 px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro eyebrow="Page types" title="Landing Pages We Write">
          The structure and depth of each page depend on the offer, the audience, and the conversion goal.
        </SectionIntro>

        <div className="grid gap-px border-2 border-frame-border bg-frame-border md:grid-cols-2 lg:grid-cols-4">
          {pages.map((page) => (
            <article key={page.title} className="bg-frame-bg p-7 md:p-8 transition-colors duration-200 hover:bg-frame-muted/40">
              <h3
                className="font-heading text-base font-bold uppercase leading-tight tracking-tight text-frame-fg md:text-lg"
                dangerouslySetInnerHTML={{ __html: page.title }}
              />
              {page.body.map((paragraph) => (
                <p key={paragraph} className="mt-3 text-sm font-medium leading-relaxed text-frame-muted-fg">
                  {paragraph}
                </p>
              ))}
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
