import { SectionIntro, PosterButton } from '../../../Kinetic'

const faqs = [
  {
    q: 'What Does a YouTube Management Service Include?',
    a: 'YouTube management can include channel strategy, content planning, scripting, video production, editing, YouTube SEO, thumbnails, publishing, Shorts, community management, analytics, and ongoing optimization. The exact scope depends on the selected package.',
  },
  {
    q: 'How Much Does YouTube Management Cost in Bangladesh?',
    a: 'Framecipher\u2019s YouTube management plans start at \u09F330,000 per month for the Standard package. Growth management is \u09F350,000 per month, while larger or more specialized channels can receive a custom proposal.',
  },
  {
    q: 'Do You Create YouTube Videos?',
    a: 'Yes. Video production and editing can be included within the agreed service scope. The exact production requirements depend on the package and the type of content you need.',
  },
  {
    q: 'Do You Write YouTube Scripts?',
    a: 'Yes. Script development can be included for suitable content formats. We structure scripts around the topic, audience, video objective, and intended viewer experience.',
  },
  {
    q: 'Do You Design YouTube Thumbnails?',
    a: 'Yes. Thumbnail design is included in our management packages according to the agreed monthly content volume \u2014 two thumbnail designs per month on Standard and four on Growth.',
  },
  {
    q: 'Do You Provide YouTube SEO?',
    a: 'Yes. YouTube SEO can include topic research, titles, descriptions, relevant metadata, content optimization, playlists, and other discovery-focused improvements.',
  },
  {
    q: 'Do You Manage YouTube Shorts?',
    a: 'Yes. Shorts can be included through repurposing, dedicated Shorts production, or a custom content strategy depending on the package.',
  },
  {
    q: 'Do You Optimize Existing YouTube Videos?',
    a: 'Yes. We can audit existing videos and identify opportunities involving titles, thumbnails, descriptions, organization, content connections, and other relevant optimization areas.',
  },
  {
    q: 'Can You Manage an Existing YouTube Channel?',
    a: 'Yes. We can work with existing channels as well as new channels. Existing channels typically begin with an audit so we understand the current content, audience, performance, and opportunities.',
  },
  {
    q: 'Do You Manage YouTube Comments?',
    a: 'Community management can be included depending on the selected package. The scope can cover comment monitoring, responses, audience questions, and community feedback.',
  },
  {
    q: 'Do You Manage YouTube Playlists?',
    a: 'Yes. Playlist planning and organization can be included as part of channel management.',
  },
  {
    q: 'Do You Manage YouTube Ads?',
    a: 'YouTube Ads are a separate paid advertising service from organic YouTube management. They can be coordinated with your organic strategy when paid media management is included in the project scope.',
  },
  {
    q: 'Can You Manage YouTube Channels Outside Bangladesh?',
    a: 'Yes. Framecipher works with businesses targeting international markets, including the US, UK, Australia, Canada, and UAE.',
  },
  {
    q: 'Do You Need Me to Provide Video Footage?',
    a: 'It depends on the production scope. You may provide existing footage, recordings, product materials, screen recordings, or other assets. Full production requirements can also be scoped separately.',
  },
  {
    q: 'Can You Film Videos for My Business?',
    a: 'Filming requirements can be discussed as part of a custom production scope. Location, travel, equipment, talent, studio requirements, and production complexity can affect the final quotation.',
  },
  {
    q: 'How Long Does YouTube Management Take to Start?',
    a: 'Initial setup and the first content batch can typically take around 2\u20133 weeks, depending on strategy, content requirements, production, and client approvals.',
  },
  {
    q: 'Do You Guarantee YouTube Views or Subscribers?',
    a: 'No. We do not guarantee specific views, subscribers, rankings, viral results, leads, or revenue. We control the strategy, production, optimization, publishing, and reporting work. Audience response and platform distribution cannot be guaranteed.',
  },
  {
    q: 'Can You Review My Channel Before We Start?',
    a: 'Yes. A free consultation is the right place to review your current channel, content, packaging, and opportunities, and to decide whether a management plan makes sense. A one-time YouTube Video SEO &amp; Metadata Audit is also available for \u09F315,000 if you want prioritized recommendations without a monthly plan.',
  },
]

export default function FAQ() {
  return (
    <section className="border-t-2 border-frame-border bg-frame-bg px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro
          eyebrow="Questions"
          title="Frequently Asked Questions About YouTube Management"
        >
          Straight answers about scope, pricing, timelines, production, and what YouTube management can
          realistically deliver.
        </SectionIntro>

        <div className="grid gap-px border-2 border-frame-border bg-frame-border">
          {faqs.map((faq, index) => (
            <details key={faq.q} className="group bg-frame-bg">
              <summary className="flex cursor-pointer list-none items-start justify-between gap-4 p-5 font-heading text-base font-bold text-frame-fg transition-colors hover:bg-frame-accent/5 md:p-6 md:text-lg">
                <span className="flex items-start gap-3">
                  <span className="mt-0.5 text-xs font-black tracking-tighter text-frame-accent">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <span className="uppercase leading-snug">{faq.q}</span>
                </span>
                <span
                  aria-hidden="true"
                  className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center border-2 border-frame-border text-frame-accent transition-transform duration-200 group-open:rotate-45"
                >
                  <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                    <path strokeLinecap="round" d="M12 5v14M5 12h14" />
                  </svg>
                </span>
              </summary>
              <div className="border-t border-frame-border/60 px-5 py-5 md:px-6">
                <p className="pl-7 text-sm font-medium leading-relaxed text-frame-muted-fg md:text-base">
                  {faq.a}
                </p>
              </div>
            </details>
          ))}
        </div>

        <div className="mt-10 flex flex-col gap-6 border-t-2 border-frame-border pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-3xl text-sm font-medium leading-relaxed text-frame-muted-fg md:text-base">
            Have a question that is not answered here? Ask during the consultation and we will answer it
            directly.
          </p>
          <div className="shrink-0">
            <PosterButton href="/contact" variant="outline">
              Get a Free Consultation &rarr;
            </PosterButton>
          </div>
        </div>
      </div>
    </section>
  )
}
