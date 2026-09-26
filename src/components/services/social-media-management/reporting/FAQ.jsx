import { SectionIntro } from '../../../Kinetic'

const faqs = [
  {
    q: 'What is a Monthly Reporting & Analytics Service?',
    a: 'It is an ongoing service that collects, organizes, analyzes, and interprets social media performance data on a monthly basis. The objective is to understand what happened, why it happened, and what should change next.',
  },
  {
    q: 'What is included in a monthly social media report?',
    a: 'Depending on your scope, a report can include KPI performance, platform performance, audience growth, content analysis, campaign performance, organic vs paid analysis, community metrics, website activity, conversion data where available, and strategic recommendations.',
  },
  {
    q: 'Can you report on multiple social media platforms?',
    a: 'Yes. Reporting can consolidate relevant data from Facebook, Instagram, LinkedIn, TikTok, YouTube, and other agreed platforms where the required analytics access is available.',
  },
  {
    q: 'Can you provide reporting if you don\u2019t manage our social media?',
    a: 'Yes. Standalone reporting is available for businesses that manage their social media internally or use another service provider.',
  },
  {
    q: 'Do you track followers and engagement?',
    a: 'Yes. Audience growth and engagement can be included, but they are interpreted alongside other relevant metrics rather than treated as the only indicators of success.',
  },
  {
    q: 'Do you track website traffic and conversions from social media?',
    a: 'Where the required website analytics, campaign tracking, and conversion setup are available, relevant website traffic and conversion actions can be included. Attribution limitations are clearly identified.',
  },
  {
    q: 'Do you compare Facebook, Instagram, TikTok, LinkedIn, and YouTube?',
    a: 'Yes, but not by simply putting every platform\u2019s numbers into one ranking. We compare relevant performance within platform-specific context and then provide a broader view of how the channels contribute to the business.',
  },
  {
    q: 'Do you include competitor analysis?',
    a: 'Competitive context can be included in advanced reporting where reliable and relevant data is available. Because competitor platforms generally do not expose all of their internal analytics, competitor analysis focuses on observable and defensible information rather than invented precision.',
  },
  {
    q: 'Do you analyze which content performed best?',
    a: 'Yes. We can identify top and underperforming content by relevant formats, topics, campaigns, content pillars, and other available dimensions.',
  },
  {
    q: 'Do you report on paid and organic social separately?',
    a: 'Yes, where paid campaign data is available. This helps distinguish organic performance from paid distribution and understand how the two contribute to overall social activity.',
  },
  {
    q: 'How often will we receive the report?',
    a: 'The primary service is monthly reporting. Quarterly deep-dives and one-time analyses can also be scoped where appropriate.',
  },
  {
    q: 'Can you explain the report to our team?',
    a: 'Yes. A report walkthrough can be included depending on the selected plan and scope.',
  },
  {
    q: 'Do you provide reporting for businesses outside Bangladesh?',
    a: 'Yes. Framecipher supports businesses in Bangladesh and international markets, including the US, UK, Australia, Canada, and UAE.',
  },
]

export default function FAQ() {
  return (
    <section className="border-t-2 border-frame-border bg-frame-muted/30 px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-4xl">
        <SectionIntro eyebrow="Direct answers" title="Frequently Asked Questions">
          Straight answers about report contents, multi-platform reporting, standalone engagements,
          attribution, competitor analysis, and delivery frequency.
        </SectionIntro>

        <div className="space-y-4">
          {faqs.map((faq) => (
            <details
              key={faq.q}
              className="group border-2 border-frame-border bg-frame-bg transition-colors open:border-frame-accent"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 p-6 font-heading text-base font-bold uppercase leading-snug tracking-tight text-frame-fg marker:content-none md:text-lg">
                <span>{faq.q}</span>
                <span
                  aria-hidden="true"
                  className="ml-4 flex h-8 w-8 shrink-0 items-center justify-center border-2 border-frame-border text-frame-accent transition-transform duration-200 group-open:rotate-45"
                >
                  +
                </span>
              </summary>
              <div className="border-t-2 border-frame-border p-6">
                {faq.a.split('\n\n').map((paragraph, pIdx) => (
                  <p
                    key={pIdx}
                    className={`text-sm font-medium leading-relaxed text-frame-muted-fg md:text-base ${
                      pIdx > 0 ? 'mt-4' : ''
                    }`}
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
