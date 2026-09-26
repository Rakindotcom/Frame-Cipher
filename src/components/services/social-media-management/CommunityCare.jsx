import Link from 'next/link'
import { SectionIntro, PosterButton } from '../../Kinetic'

const managedItems = [
  'Comments and replies',
  'Direct messages',
  'Brand mentions',
  'Basic customer questions',
  'Review monitoring',
  'Spam moderation',
  'Community interactions',
  'Lead or customer-service escalation',
]

export default function CommunityCare() {
  return (
    <section className="border-t-2 border-frame-border bg-frame-muted/30 px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro
          eyebrow="Social customer care"
          title="Community Management &amp; Social Customer Care"
        >
          Your audience expects more than scheduled content. They may ask questions, request
          pricing, comment on a post, send a direct message, mention your business, or raise a
          concern. Our community management service keeps those interactions organized and timely.
        </SectionIntro>

        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <div className="space-y-5 text-base font-medium leading-relaxed text-frame-muted-fg">
            <p>
              Depending on your plan, we can manage the day-to-day conversation around your brand
              so an unanswered question does not sit publicly for days. That kind of silence
              reflects on the business as much as the content itself does.
            </p>
            <p>
              Your team remains involved whenever a response requires internal information,
              approval, or a business decision. We respond in your approved brand voice and flag
              anything that needs you rather than guessing on your behalf.
            </p>
            <div className="border-l-2 border-frame-accent bg-frame-bg p-6">
              <p className="text-sm font-semibold leading-relaxed text-frame-fg">
                An unanswered comment or a slow response on a service question shapes how people
                judge your business, often before they ever speak to you.
              </p>
            </div>
          </div>

          <div>
            <span className="text-xs font-black uppercase tracking-[0.24em] text-frame-accent">
              Depending on your plan, we can manage
            </span>
            <ul className="mt-5 grid gap-3 sm:grid-cols-2">
              {managedItems.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 border-2 border-frame-border bg-frame-bg p-4 transition-colors hover:border-frame-accent"
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

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <PosterButton href="/contact">Improve Your Social Customer Care &rarr;</PosterButton>
              <Link
                href="/services/social-media-management/community-management"
                className="group inline-flex items-center gap-2 text-xs font-black uppercase tracking-[0.2em] text-frame-accent transition hover:text-frame-fg md:text-sm"
              >
                Community management detail
                <span aria-hidden="true" className="transition-transform duration-200 group-hover:translate-x-1">&rarr;</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
