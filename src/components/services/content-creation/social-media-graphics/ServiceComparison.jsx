import Link from 'next/link'
import { SectionIntro, PosterButton } from '../../../Kinetic'

function CheckIcon({ className = "h-4 w-4 shrink-0 text-frame-accent mt-0.5" }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 20 20" fill="none" className={className}>
      <path d="m4.5 10 3.5 3.5 7.5-7.5" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

const comparisonCards = [
  {
    title: "Social Media Graphics",
    badge: "Current Service",
    accent: "border-frame-accent bg-frame-accent/10 shadow-lg",
    summary: "Dedicated, platform-specific visual content engineering focused on feed, Stories, and carousels built for real-world interface safe zones.",
    scopePoints: [
      "Feed posts, Story sequences & vertical visual assets",
      "Educational & sales carousel design sequences",
      "Product showcases & promotional campaign visuals",
      "Editable master templates (Figma / Canva)",
      "Reel covers, video thumbnails & channel headers",
      "Intelligent multi-platform aspect ratio adaptation"
    ],
    note: "Best when you need high-impact visuals without paying for full monthly channel management.",
    action: {
      label: "Selected Engagement",
      href: "#pricing",
      active: true
    }
  },
  {
    title: "Graphic Design",
    badge: "Broad Marketing Collateral",
    accent: "border-frame-border bg-frame-bg hover:border-frame-fg",
    summary: "Comprehensive commercial and corporate design covering offline, print, presentations, packaging, and business documents.",
    scopePoints: [
      "Investor pitch decks & corporate sales presentations",
      "Multi-page company profiles & corporate capability decks",
      "Product catalogues, brochures & tri-fold leaflets",
      "Retail product packaging, box dielines & bottle labels",
      "Trade show banners, backdrops & event signage",
      "Stationery suites, business cards & brand assets"
    ],
    note: "Covers broader commercial collateral beyond social feed and story publishing requirements.",
    action: {
      label: "Explore Graphic Design Services",
      href: "/services/content-creation/graphic-design",
      active: false
    }
  },
  {
    title: "Social Media Management",
    badge: "Channel Operations & Growth",
    accent: "border-frame-border bg-frame-bg hover:border-frame-fg",
    summary: "Full end-to-end channel operations managing strategy, content calendars, scheduling, daily community interaction, and monthly analytics.",
    scopePoints: [
      "Monthly content calendar strategy & ideation",
      "Direct publishing, copywriting & post scheduling",
      "Daily community management & comment moderation",
      "Follower growth initiatives & DM lead response",
      "Performance reporting & metric attribution",
      "Ongoing cross-platform algorithm optimization"
    ],
    note: "Ideal when you want our team to handle both the graphics and the day-to-day channel operations.",
    action: {
      label: "Explore Social Media Management",
      href: "/services/social-media-management",
      active: false
    }
  }
]

export default function ServiceComparison() {
  return (
    <section className="border-b-2 border-frame-border bg-frame-bg px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro
          eyebrow="Service Architecture"
          title="Social Media Graphics vs. Graphic Design vs. Social Media Management"
          align="center"
        >
          These three creative services are connected, but each solves a distinct production and operational need. Choose the exact scope your team requires.
        </SectionIntro>

        {/* 3 COMPARATIVE CARDS (BALANCED 3-COLUMN GRID) */}
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {comparisonCards.map((item, index) => (
            <div
              key={index}
              className={`border-2 p-6 md:p-8 flex flex-col justify-between transition-all ${item.accent}`}
            >
              <div>
                <div className="flex items-center justify-between border-b border-frame-border/60 pb-3 mb-4">
                  <span className="font-mono text-xs font-black uppercase tracking-[0.2em] text-frame-accent">
                    Category 0{index + 1}
                  </span>
                  <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-frame-muted-fg border border-frame-border px-1.5 py-0.5">
                    {item.badge}
                  </span>
                </div>

                <h3 className="font-heading text-xl md:text-2xl font-bold uppercase tracking-tight text-frame-fg leading-snug">
                  {item.title}
                </h3>

                <p className="mt-3 text-xs sm:text-sm font-medium leading-relaxed text-frame-muted-fg">
                  {item.summary}
                </p>

                <div className="mt-6 border-t border-frame-border/60 pt-4">
                  <span className="font-mono text-[10px] font-black uppercase tracking-[0.2em] text-frame-accent block mb-2.5">
                    Core Focus & Deliverables
                  </span>
                  <ul className="space-y-2 text-xs font-medium text-frame-fg">
                    {item.scopePoints.map((pt, pIdx) => (
                      <li key={pIdx} className="flex items-start gap-2">
                        <CheckIcon className="h-3.5 w-3.5 mt-0.5" />
                        <span className="leading-snug">{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-frame-border/60 space-y-4">
                <p className="text-[11px] font-mono text-frame-muted-fg leading-relaxed">
                  <strong className="text-frame-fg uppercase block text-[10px] mb-0.5">Production Scope Note:</strong>
                  {item.note}
                </p>

                <div>
                  <PosterButton
                    href={item.action.href}
                    variant={item.action.active ? 'accent' : 'outline'}
                    className="w-full text-center"
                  >
                    {item.action.label} &rarr;
                  </PosterButton>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
