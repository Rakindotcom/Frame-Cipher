import { SectionIntro } from '../../../Kinetic'

const audiences = [
  {
    title: 'Businesses Managing Social Media In-House',
    body: 'If your team creates and publishes content internally, we can provide an independent performance review and recommendations.',
  },
  {
    title: 'Businesses Using Social Media Management Services',
    body: 'If another team handles your social media, reporting can provide a separate layer of accountability and analysis.',
  },
  {
    title: 'Ecommerce & Product Brands',
    body: 'For businesses tracking product discovery, website activity, customer engagement, campaigns, and ecommerce actions.',
  },
  {
    title: 'Service Businesses',
    body: 'For businesses focused on inquiries, website traffic, bookings, consultations, or other lead-related actions.',
  },
  {
    title: 'B2B & Professional Businesses',
    body: 'For businesses where audience quality, professional engagement, thought leadership, traffic, and qualified inquiries matter.',
  },
  {
    title: 'Startups & Growing Businesses',
    body: 'For teams that need a clear measurement framework while their social presence develops.',
  },
  {
    title: 'International Businesses',
    body: 'For brands operating across multiple markets where platform performance, audience composition, geography, and market context can vary.',
  },
]

export default function WhoFor() {
  return (
    <section className="border-t-2 border-frame-border bg-frame-muted/30 px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro
          eyebrow="Who we report for"
          title="Who Our Monthly Reporting &amp; Analytics Service Is For"
        >
          Reporting is useful both as an independent review and as a second layer of accountability when
          another team already handles publishing.
        </SectionIntro>

        <div className="grid gap-px border-2 border-frame-border bg-frame-border md:grid-cols-2 lg:grid-cols-3">
          {audiences.map((audience) => (
            <article key={audience.title} className="bg-frame-bg p-7 md:p-8">
              <h3 className="font-heading text-base font-bold uppercase leading-tight tracking-tight text-frame-fg md:text-lg">
                {audience.title}
              </h3>
              <p className="mt-4 text-sm font-medium leading-relaxed text-frame-muted-fg md:text-base">
                {audience.body}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
