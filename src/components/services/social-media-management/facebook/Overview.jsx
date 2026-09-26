import Link from 'next/link'
import { SectionIntro, PosterButton } from '../../../Kinetic'

const approach = [
  'Facebook Page optimization',
  'Facebook content strategy',
  'Branded graphics and creative content',
  'Reels, Stories, and feed content',
  'Content calendar planning',
  'Publishing and scheduling',
  'Comment and Messenger management',
  'Review monitoring and response',
  'Page moderation',
  'Facebook Page SEO and discoverability',
  'Audience and competitor research',
  'Performance reporting',
  'Ongoing content optimization',
]

const businessTypes = [
  {
    title: 'For a local business',
    body: 'Facebook may help customers discover your location, check reviews, and start a conversation.',
  },
  {
    title: 'For ecommerce brands',
    body: 'It can support product discovery, customer questions, social proof, and repeat engagement.',
  },
  {
    title: 'For service businesses',
    body: 'It can help potential customers understand your expertise before they contact you.',
  },
]

export default function Overview() {
  return (
    <section className="border-y-2 border-frame-border bg-frame-bg px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro
          eyebrow="Strategic approach"
          title="Facebook Management Built Around Your Business Goals"
        >
          Facebook management should not mean publishing random posts every week. Your Page has a
          different job depending on your business, so we build the strategy around your business
          model, audience, customer journey, content opportunities, and measurable goals.
        </SectionIntro>

        <div className="grid gap-px border-2 border-frame-border bg-frame-border sm:grid-cols-3">
          {businessTypes.map((type, index) => (
            <article key={type.title} className="bg-frame-bg p-6 md:p-7">
              <span className="font-heading text-4xl font-bold leading-none tracking-tighter text-frame-muted">
                {String(index + 1).padStart(2, '0')}
              </span>
              <h3 className="mt-5 font-heading text-lg font-bold uppercase tracking-tight text-frame-fg md:text-xl">
                {type.title}
              </h3>
              <p className="mt-3 text-sm font-medium leading-relaxed text-frame-muted-fg">
                {type.body}
              </p>
            </article>
          ))}
        </div>

        <div className="mt-12 grid gap-10 lg:grid-cols-[1.3fr_0.7fr] lg:items-start">
          <div>
            <span className="text-xs font-black uppercase tracking-[0.24em] text-frame-accent">
              Our approach combines
            </span>
            <ul className="mt-5 grid gap-3 sm:grid-cols-2">
              {approach.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 border-2 border-frame-border bg-frame-muted/10 p-4 transition-colors hover:border-frame-accent"
                >
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center border border-frame-accent bg-frame-accent/10 text-frame-accent">
                    <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <span className="text-sm font-semibold leading-snug text-frame-fg">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="border-2 border-frame-border bg-frame-muted/10 p-7 md:p-8">
            <span className="text-xs font-black uppercase tracking-[0.24em] text-frame-accent">
              Free Facebook Page Audit
            </span>
            <h3 className="mt-3 font-heading text-xl font-bold uppercase tracking-tight text-frame-fg md:text-2xl">
              See what your Page is communicating
            </h3>
            <p className="mt-4 text-sm font-medium leading-relaxed text-frame-muted-fg">
              A poorly structured Page creates friction before a customer ever contacts you. We
              review the information customers see and the operational setup behind the Page.
            </p>
            <div className="mt-7 space-y-3">
              <PosterButton href="/contact">Get Your Facebook Page Audited &rarr;</PosterButton>
              <PosterButton href="/contact" variant="outline" className="w-full">
                Request a Custom Facebook Management Plan
              </PosterButton>
            </div>
            <p className="mt-5 text-xs font-medium leading-relaxed text-frame-muted-fg">
              Looking for the full service?{' '}
              <Link
                href="/services/social-media-management"
                className="font-bold text-frame-accent underline underline-offset-4 transition hover:text-frame-fg"
              >
                Social media management
              </Link>{' '}
              covers Facebook as part of a coordinated cross-platform presence.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
