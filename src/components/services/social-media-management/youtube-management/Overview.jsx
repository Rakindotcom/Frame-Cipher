import Link from 'next/link'
import { SectionIntro, PosterButton } from '../../../Kinetic'

const goals = [
  'Brand awareness and discovery',
  'Educational content and thought leadership',
  'Product and service education',
  'Website traffic',
  'Lead generation',
  'Ecommerce discovery',
  'Customer education',
  'Audience building',
  'Expert positioning',
  'Long-term content discovery',
]

const workflow = [
  'Channel strategy and positioning',
  'Content planning and scripting',
  'Video production and editing',
  'Titles, thumbnails, and YouTube SEO',
  'Publishing and channel organization',
  'Community management',
  'Performance analysis',
  'Ongoing optimization',
]

export default function Overview() {
  return (
    <section className="border-y-2 border-frame-border bg-frame-bg px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro
          eyebrow="Strategic approach"
          title="YouTube Management Built Around Your Business Goals"
        >
          A YouTube channel needs more than regular uploads. The right strategy connects your business
          objectives with topics your audience actually wants to watch. That means deciding what to
          publish, who it is for, how each video should be packaged, and what action viewers should
          take next.
        </SectionIntro>

        <div className="grid gap-10 lg:grid-cols-[1.3fr_0.7fr] lg:items-start">
          <div>
            <span className="text-xs font-black uppercase tracking-[0.24em] text-frame-accent">
              Depending on your goals, your channel can support
            </span>
            <ul className="mt-5 grid gap-3 sm:grid-cols-2">
              {goals.map((goal) => (
                <li
                  key={goal}
                  className="flex items-start gap-3 border-2 border-frame-border bg-frame-muted/10 p-4 transition-colors hover:border-frame-accent"
                >
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center border border-frame-accent bg-frame-accent/10 text-frame-accent">
                    <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <span className="text-sm font-semibold leading-snug text-frame-fg">{goal}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8 border-2 border-frame-accent bg-frame-accent/10 p-6 md:p-7">
              <p className="text-sm font-semibold leading-relaxed text-frame-fg md:text-base">
                We focus on building a sustainable content system rather than chasing individual viral
                videos. That is what allows a channel to keep earning views, searches, and trust long
                after an upload date.
              </p>
            </div>
          </div>

          <div className="border-2 border-frame-border bg-frame-muted/10 p-7 md:p-8">
            <span className="text-xs font-black uppercase tracking-[0.24em] text-frame-accent">
              Our management approach brings into one workflow
            </span>
            <ul className="mt-5 space-y-2.5">
              {workflow.map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-sm font-medium leading-snug text-frame-fg">
                  <span aria-hidden="true" className="mt-1.5 h-1.5 w-1.5 shrink-0 bg-frame-accent" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className="mt-7 space-y-3">
              <PosterButton href="/contact">Get a Free Consultation &rarr;</PosterButton>
              <PosterButton href="/contact" variant="outline" className="w-full">
                Request a Proposal
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
              covers YouTube as part of a coordinated cross-platform presence.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
