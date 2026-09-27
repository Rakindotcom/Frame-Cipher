import Link from 'next/link'
import { SectionIntro, PosterButton } from '../../Kinetic'

const platforms = [
  {
    title: 'Facebook',
    href: '/services/social-media-management/facebook',
    body: 'We manage Facebook pages with a focus on useful content, community engagement, customer communication, local discovery, and a consistent brand presence.',
    note: 'Depending on your strategy, management can include posts, Reels, Stories, Groups, events, reviews, and community interactions.',
  },
  {
    title: 'Instagram',
    href: '/services/social-media-management/instagram',
    body: 'We manage Instagram content across feed posts, carousels, Stories, and Reels, combining visual storytelling with educational and promotional content.',
    note: 'The strategy reflects your audience and business objectives rather than a fixed posting template.',
  },
  {
    title: 'LinkedIn',
    href: '/services/social-media-management/linkedin',
    body: 'We manage LinkedIn company pages and can support founder or executive content where it makes sense for a B2B strategy.',
    note: 'Content can include thought leadership, industry insights, company updates, educational posts, and employer-brand content.',
  },
  {
    title: 'TikTok',
    href: '/services/social-media-management/tiktok-management',
    body: 'We create and manage TikTok content around short-form storytelling, native creative formats, relevant trends, and audience discovery.',
    note: 'Content concepts are developed specifically for TikTok instead of reposting what was created for another platform.',
  },
  {
    title: 'YouTube',
    href: '/services/social-media-management/youtube-management',
    body: 'We support YouTube channel management with a focus on content planning, publishing, titles, descriptions, thumbnails, playlists, and audience engagement.',
    note: 'Where appropriate, we connect long-form YouTube content with Shorts and other social formats to extend the value of your production.',
  },
]

export default function Platforms() {
  return (
    <section className="border-t-2 border-frame-border bg-frame-muted/30 px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro
          eyebrow="Platform coverage"
          title="Social Media Platforms We Manage"
        >
          Each platform is planned around its own audience, format conventions, and role within
          your marketing strategy.
        </SectionIntro>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {platforms.map((platform, index) => (
            <article
              key={platform.title}
              className="group relative flex flex-col justify-between border-2 border-frame-border bg-frame-bg p-7 transition-colors hover:border-frame-accent hover:bg-frame-accent md:p-8"
            >
              <div>
                <div className="flex items-center justify-between gap-3">
                  <span className="text-xs font-black uppercase tracking-[0.24em] text-frame-accent transition-colors group-hover:text-frame-accent-fg">
                    Platform {String(index + 1).padStart(2, '0')}
                  </span>
                  <span
                    aria-hidden="true"
                    className="text-lg text-frame-accent transition-transform group-hover:translate-x-1 group-hover:text-frame-accent-fg"
                  >
                    &rarr;
                  </span>
                </div>
                <h3 className="mt-3 font-heading text-xl font-bold uppercase leading-tight tracking-tight text-frame-fg transition-colors group-hover:text-frame-accent-fg md:text-2xl">
                  <Link href={platform.href} className="after:absolute after:inset-0 after:content-['']">
                    {platform.title}
                  </Link>
                </h3>
                <p className="mt-4 text-sm font-medium leading-relaxed text-frame-muted-fg transition-colors group-hover:text-frame-accent-fg/90">
                  {platform.body}
                </p>
                {platform.note && (
                  <p className="mt-4 border-l-2 border-frame-accent bg-frame-muted/10 p-3 text-xs font-medium leading-relaxed text-frame-muted-fg transition-colors group-hover:bg-frame-accent/10 group-hover:text-frame-accent-fg/90 md:text-sm">
                    {platform.note}
                  </p>
                )}
              </div>
            </article>
          ))}
        </div>

        <div className="mt-10 flex flex-col gap-6 border-t-2 border-frame-border pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-3xl text-sm font-medium leading-relaxed text-frame-muted-fg md:text-base">
            There is no universal platform mix. We consider your audience, industry, goals,
            content capabilities, and existing performance before recommending platforms.
          </p>
          <div className="shrink-0">
            <PosterButton href="/contact" variant="outline">
              Find the Right Platforms for Your Business &rarr;
            </PosterButton>
          </div>
        </div>
      </div>
    </section>
  )
}
