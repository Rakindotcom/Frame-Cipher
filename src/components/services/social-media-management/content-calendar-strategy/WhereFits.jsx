import Link from 'next/link'
import { SectionIntro } from '../../../Kinetic'

const platformDecisions = [
  'What to publish',
  'Which formats to use',
  'Which content pillars matter',
  'What publishing cadence makes sense',
  'How the platform\u2019s audience should be addressed',
  'Which platform-specific objectives matter',
]

const platforms = [
  {
    title: 'Facebook Management',
    href: '/services/social-media-management/facebook',
    body: 'Facebook planning can support promotional content, educational posts, community-focused communication, product updates, offers, and other content relevant to the platform.',
    note: 'Our cross-platform calendar helps ensure Facebook activity fits into wider campaigns instead of operating independently.',
  },
  {
    title: 'Instagram Management',
    href: '/services/social-media-management/instagram',
    body: 'Instagram planning can coordinate Reels, carousels, Stories, visual posts, campaigns, product content, and brand storytelling with the broader content strategy.',
    note: 'The calendar helps determine how Instagram contributes to the same campaign without simply duplicating content from other platforms.',
  },
  {
    title: 'LinkedIn Management',
    href: '/services/social-media-management/linkedin',
    body: 'LinkedIn content can support thought leadership, professional insights, company updates, case studies, expertise, and B2B communication.',
    note: 'Cross-platform planning helps connect LinkedIn content with broader business campaigns while preserving its professional context.',
  },
  {
    title: 'TikTok Management',
    href: '/services/social-media-management/tiktok-management',
    body: 'TikTok planning focuses on short-form video ideas and platform-appropriate execution.',
    note: 'A wider content calendar can identify which campaigns, source materials, educational ideas, or product stories can be adapted into TikTok content.',
  },
  {
    title: 'YouTube Management',
    href: '/services/social-media-management/youtube-management',
    body: 'YouTube can provide long-form education, product demonstrations, tutorials, expert content, interviews, Shorts, and other video assets.',
    note: 'Cross-platform planning can connect YouTube content with supporting social posts, campaigns, website content, and other audience touchpoints.',
  },
]

export default function WhereFits() {
  return (
    <section className="border-t-2 border-frame-border bg-frame-bg px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro
          eyebrow="How it connects"
          title="Where Content Calendar &amp; Strategy Fits With Platform Management"
        >
          Content Calendar &amp; Strategy sits above individual platform plans. It connects them into one
          coordinated business content system.
        </SectionIntro>

        <div className="grid gap-10 lg:grid-cols-[1.3fr_0.7fr] lg:items-start">
          <div>
            <p className="max-w-3xl text-sm font-medium leading-relaxed text-frame-muted-fg md:text-base">
              Each Framecipher platform-specific management service includes content strategy work for
              that individual platform. That includes decisions such as:
            </p>

            <div className="mt-8 border-2 border-frame-accent bg-frame-accent/10 p-6 md:p-7">
              <p className="text-sm font-semibold leading-relaxed text-frame-fg md:text-base">
                Content Calendar &amp; Strategy sits above those individual plans.
              </p>
              <p className="mt-4 text-sm font-medium leading-relaxed text-frame-fg/90 md:text-base">
                It connects them into one coordinated business content system, so each platform keeps its
                own role while the campaign stays connected.
              </p>
            </div>
          </div>

          <div className="border-2 border-frame-border bg-frame-muted/10 p-7 md:p-8">
            <span className="text-xs font-black uppercase tracking-[0.24em] text-frame-accent">
              Platform-specific decisions
            </span>
            <ul className="mt-5 grid gap-2 sm:grid-cols-2">
              {platformDecisions.map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-sm font-medium leading-snug text-frame-fg">
                  <span aria-hidden="true" className="mt-1.5 h-1.5 w-1.5 shrink-0 bg-frame-accent" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 grid gap-px border-2 border-frame-border bg-frame-border sm:grid-cols-2 lg:grid-cols-3">
          {platforms.map((platform) => (
            <article
              key={platform.title}
              className="group flex flex-col justify-between bg-frame-bg p-7 transition-colors hover:bg-frame-accent md:p-8"
            >
              <div>
                <h3 className="font-heading text-lg font-bold uppercase leading-tight tracking-tight text-frame-fg transition-colors duration-200 group-hover:text-frame-accent-fg md:text-xl">
                  {platform.title}
                </h3>
                <p className="mt-4 text-sm font-medium leading-relaxed text-frame-muted-fg transition-colors duration-200 group-hover:text-frame-accent-fg/90 md:text-base">
                  {platform.body}
                </p>
              </div>

              <div className="mt-6 border-t-2 border-frame-border/60 pt-4">
                <p className="text-xs font-medium leading-relaxed text-frame-muted-fg transition-colors duration-200 group-hover:text-frame-accent-fg/80">
                  {platform.note}
                </p>
                <Link
                  href={platform.href}
                  className="mt-4 inline-block text-xs font-black uppercase tracking-[0.2em] text-frame-accent transition-colors duration-200 group-hover:text-frame-accent-fg"
                >
                  Explore {platform.title} &rarr;
                </Link>
              </div>
            </article>
          ))}

          <div className="flex flex-col justify-center bg-frame-accent/10 p-7 md:p-8">
            <span className="text-xs font-black uppercase tracking-[0.24em] text-frame-accent">
              One coordinated system
            </span>
            <p className="mt-4 text-sm font-medium leading-relaxed text-frame-fg/90">
              The calendar does not replace platform-specific thinking. It gives every platform a shared
              direction to work from.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
