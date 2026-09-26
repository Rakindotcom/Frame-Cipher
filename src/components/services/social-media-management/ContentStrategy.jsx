import Link from 'next/link'
import { SectionIntro } from '../../Kinetic'

const pillars = [
  {
    title: 'Educational Content',
    body: 'Educational content helps your audience understand problems, solutions, products, services, and industry topics.',
    examples: ['Tips', 'How-to content', 'Explanations', 'Guides', 'FAQs', 'Practical insights'],
  },
  {
    title: 'Promotional Content',
    body: 'Promotional content communicates your products, services, offers, launches, and campaigns without making every post feel like an advertisement.',
    examples: ['Offers', 'Launches', 'Product announcements', 'Campaign promotions'],
    note: 'We balance promotional messages with educational, community, and brand-building content.',
  },
  {
    title: 'Engagement Content',
    body: 'Engagement content gives your audience a reason to interact rather than scroll past.',
    examples: ['Questions', 'Polls', 'Discussions', 'Interactive Stories', 'Community prompts'],
  },
  {
    title: 'Brand & Trust Content',
    body: 'People often want to understand the business behind a product or service before they buy.',
    examples: ['Your team', 'Expertise and values', 'Process', 'Customer experience', 'Behind-the-scenes', 'Achievements'],
  },
  {
    title: 'Campaign & Seasonal Content',
    body: 'We plan content around launches, promotions, holidays, seasonal opportunities, events, and important business dates.',
    examples: ['Mapped in advance', 'Tied to a larger objective', 'Not operating independently'],
  },
  {
    title: 'Content Repurposing',
    body: 'One strong piece of content can often support multiple social formats instead of being created from scratch each time.',
    examples: ['Long-form video to short clips', 'Carousels', 'LinkedIn posts', 'Stories', 'Platform-specific assets'],
    note: 'We adapt the message and format for each platform rather than copying the same post everywhere.',
  },
]

export default function ContentStrategy() {
  return (
    <section className="border-t-2 border-frame-border bg-frame-bg px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro
          eyebrow="Content strategy"
          title="Social Media Content Strategy That Gives Every Post a Purpose"
        >
          A social media strategy should not be a list of random posts. We build content around
          clear themes and business objectives so your audience sees a consistent story across
          your social channels.
        </SectionIntro>

        <div className="grid gap-px border-2 border-frame-border bg-frame-border sm:grid-cols-2 lg:grid-cols-3">
          {pillars.map((pillar, index) => (
            <article key={pillar.title} className="flex flex-col justify-between bg-frame-bg p-7 md:p-8">
              <div>
                <span className="text-xs font-black uppercase tracking-[0.24em] text-frame-accent">
                  Pillar {String(index + 1).padStart(2, '0')}
                </span>
                <h3 className="mt-3 font-heading text-xl font-bold uppercase leading-tight tracking-tight text-frame-fg">
                  {pillar.title}
                </h3>
                <p className="mt-4 text-sm font-medium leading-relaxed text-frame-muted-fg">
                  {pillar.body}
                </p>
              </div>

              {pillar.examples?.length > 0 && (
                <div className="mt-6 border-t-2 border-frame-border/60 pt-4">
                  <span className="text-[10px] font-black uppercase tracking-[0.18em] text-frame-accent">
                    Examples
                  </span>
                  <ul className="mt-3 space-y-2 text-xs font-medium text-frame-fg/90 md:text-sm">
                    {pillar.examples.map((example, eIdx) => (
                      <li key={eIdx} className="flex items-start gap-2">
                        <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center border border-frame-accent bg-frame-accent/10 text-frame-accent">
                          <svg className="h-2.5 w-2.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                          </svg>
                        </span>
                        <span className="leading-snug">{example}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {pillar.note && (
                <p className="mt-4 border-l-2 border-frame-accent bg-frame-muted/10 p-3 text-xs font-medium leading-relaxed text-frame-muted-fg">
                  {pillar.note}
                </p>
              )}
            </article>
          ))}
        </div>

        <div className="mt-10 border-2 border-frame-border bg-frame-muted/10 p-6 md:p-8">
          <p className="text-sm font-medium leading-relaxed text-frame-muted-fg md:text-base">
            Your monthly calendar is built from these pillars, so every published post has a
            defined job. You receive it in advance and can request changes before anything goes
            live.
          </p>
          <Link
            href="/services/social-media-management/content-calendar-strategy"
            className="group mt-5 inline-flex items-center gap-2 text-sm font-black uppercase tracking-[0.18em] text-frame-accent transition hover:text-frame-fg"
          >
            See how the monthly content calendar is built
            <span aria-hidden="true" className="transition-transform duration-200 group-hover:translate-x-1">&rarr;</span>
          </Link>
        </div>
      </div>
    </section>
  )
}
