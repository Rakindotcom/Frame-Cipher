import Link from 'next/link'
import { SectionIntro, PosterButton } from '../../../Kinetic'

const objectives = [
  'Increase brand visibility and content discovery',
  'Build trust with potential customers',
  'Showcase products or services',
  'Generate direct messages and inquiries',
  'Support ecommerce product discovery',
  'Strengthen customer relationships',
  'Communicate your expertise',
  'Build a recognizable visual identity',
  'Drive website visits and other customer actions',
]

const approach = [
  'Instagram strategy and audience research',
  'Competitor and content-gap analysis',
  'Profile optimization and Instagram SEO',
  'Multi-format content strategy',
  'Reels concept, production, and optimization',
  'Feed posts and Carousels',
  'Stories and Highlight organization',
  'Community, comment, and DM management',
  'UGC and creator collaboration management',
  'Ecommerce and product content',
  'Publishing and content calendar management',
  'Performance tracking and optimization',
]

export default function Overview() {
  return (
    <section className="border-y-2 border-frame-border bg-frame-bg px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro
          eyebrow="Strategic approach"
          title="Instagram Management Built Around Your Business Goals"
        >
          Your Instagram account should have a clear role in your customer journey. Framecipher
          builds your Instagram management strategy around those objectives rather than applying the
          same posting formula to every business.
        </SectionIntro>

        <div className="grid gap-10 lg:grid-cols-[1.3fr_0.7fr] lg:items-start">
          <div>
            <span className="text-xs font-black uppercase tracking-[0.24em] text-frame-accent">
              Depending on your business, Instagram may need to
            </span>
            <ul className="mt-5 grid gap-3 sm:grid-cols-2">
              {objectives.map((item) => (
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

            <div className="mt-8 border-l-2 border-frame-accent bg-frame-muted/10 p-6">
              <p className="text-sm font-medium leading-relaxed text-frame-muted-fg md:text-base">
                That means using the right format for the right objective instead of forcing every
                idea into the same type of post. Our team connects strategy, content, Reels, profile
                optimization, publishing, community management, and performance analysis, which gives
                every part of your Instagram presence a defined purpose.
              </p>
            </div>
          </div>

          <div className="border-2 border-frame-border bg-frame-muted/10 p-7 md:p-8">
            <span className="text-xs font-black uppercase tracking-[0.24em] text-frame-accent">
              Our approach combines
            </span>
            <ul className="mt-5 space-y-2.5">
              {approach.map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-sm font-medium leading-snug text-frame-fg">
                  <span aria-hidden="true" className="mt-1.5 h-1.5 w-1.5 shrink-0 bg-frame-accent" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className="mt-7 space-y-3">
              <PosterButton href="/contact">Get Your Instagram Account Audited &rarr;</PosterButton>
              <PosterButton href="/contact" variant="outline" className="w-full">
                Discuss Your Instagram Strategy
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
              covers Instagram as part of a coordinated cross-platform presence.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
