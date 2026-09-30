import Link from 'next/link'
import { SectionIntro, PosterButton } from '../../../Kinetic'

const videoTypes = [
  {
    tag: 'Type 01',
    title: 'Corporate & Company Profile Videos',
    description: 'Corporate videos communicate who your company is, what you offer, and what makes your organization credible. We combine interviews, workplace footage, team visuals, and supporting b-roll into a structured company story.',
    supports: 'Company websites, sales presentations, corporate communications, recruitment & investor decks'
  },
  {
    tag: 'Type 02',
    title: 'Brand Films',
    description: 'Brand films communicate the larger story behind a business. Instead of simply listing features, they articulate your positioning, values, customer experience, and origin story through an emotional cinematic narrative.',
    supports: 'Homepage hero videos, brand campaigns, flagship presentations & industry showcases'
  },
  {
    tag: 'Type 03',
    title: 'Commercial, TVC & OVC Videos',
    description: 'Built around specific promotional or campaign objectives. Includes TVC, OVC, digital commercials, campaign videos, and promotional films engineered around viewer action, target placement, and direct ROI.',
    supports: 'Product launches, seasonal promotions, paid digital advertising & lead generation'
  },
  {
    tag: 'Type 04',
    title: 'Product & Promotional Videos',
    description: 'Product videos make features, benefits, and use cases easy to understand visually. We produce product demos, unboxing videos, ecommerce feature reels, and how-to comparisons.',
    supports: 'Ecommerce listings, product detail pages, social ads & sales enablement'
  },
  {
    tag: 'Type 05',
    title: 'Social Media Videos',
    description: 'Social videos communicate fast while keeping your brand recognizable. We produce vertical videos, promotional clips, founder moments, and teaser cuts optimized for Instagram, TikTok, and LinkedIn.',
    supports: 'Instagram Reels, TikTok feeds, YouTube Shorts & paid social ad creatives',
    link: { href: '/services/content-creation/short-form-video', text: 'Explore Short-Form Video →' }
  },
  {
    tag: 'Type 06',
    title: 'YouTube & Long-Form Videos',
    description: 'Long-form video needs more than extra footage; it requires pacing, narrative structure, audio excellence, and a compelling reason for viewers to stay engaged across minutes.',
    supports: 'Business YouTube channels, educational deep-dives, podcast formats & company stories',
    link: { href: '/services/content-creation/youtube-videos', text: 'Explore YouTube Production →' }
  },
  {
    tag: 'Type 07',
    title: 'Interview & Testimonial Videos',
    description: 'Real people bring context and credibility to your business story. We produce customer testimonials, founder spotlights, executive perspectives, employee culture videos, and case studies.',
    supports: 'Conversion landing pages, sales presentations, recruitment & trust building'
  },
  {
    tag: 'Type 08',
    title: 'Documentary-Style Videos',
    description: 'Documentary-style production works when the story itself is central. We combine interviews, observational field footage, archival assets, b-roll, and score to create a deeper narrative.',
    supports: 'Anniversary films, impact reports, founder documentaries & brand history'
  },
  {
    tag: 'Type 09',
    title: 'Training & Internal Communication Videos',
    description: 'Video ensures your team understands processes, policies, and onboarding material consistently. We structure instructional content around clarity, retention, and practical workplace execution.',
    supports: 'Employee onboarding, standard operating procedures (SOPs) & leadership updates'
  }
]

export default function VideoTypes() {
  return (
    <section id="types" className="border-t-2 border-frame-border bg-frame-bg px-4 py-20 md:px-8 md:py-28 scroll-mt-24">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro
          eyebrow="Specialized Formats"
          title="Types of Video We Produce"
          index="02"
        >
          Different business objectives require different video formats. We build production setups tailored to your specific commercial goal and target audience.
        </SectionIntro>

        <div className="grid border-2 border-frame-border bg-frame-border gap-px sm:grid-cols-2 lg:grid-cols-3">
          {videoTypes.map((type, idx) => (
            <div
              key={idx}
              className="bg-frame-bg p-7 md:p-8 flex flex-col justify-between"
            >
              <div>
                <span className="text-xs font-black uppercase tracking-[0.24em] text-frame-accent">
                  {type.tag}
                </span>
                <h3 className="mt-3 font-heading text-xl md:text-2xl font-bold uppercase tracking-tight text-frame-fg">
                  {type.title}
                </h3>
                <p className="mt-3 text-xs md:text-sm font-medium leading-relaxed text-frame-muted-fg">
                  {type.description}
                </p>

                <div className="mt-6 border-t-2 border-frame-border/60 pt-4">
                  <span className="text-[11px] font-black uppercase tracking-[0.2em] text-frame-accent block mb-1">
                    Primary Use Cases
                  </span>
                  <span className="text-xs font-semibold text-frame-fg leading-relaxed">
                    {type.supports}
                  </span>
                </div>
              </div>

              {type.link && (
                <div className="mt-6 pt-4 border-t border-frame-border/60">
                  <Link
                    href={type.link.href}
                    className="inline-flex items-center gap-1 text-xs font-black uppercase tracking-[0.18em] text-frame-accent hover:underline"
                  >
                    <span>{type.link.text}</span>
                  </Link>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
