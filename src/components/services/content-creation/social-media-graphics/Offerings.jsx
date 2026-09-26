import Link from 'next/link'
import { SectionIntro, PosterButton } from '../../../Kinetic'

function CheckIcon({ className = "h-4 w-4 shrink-0 text-frame-accent mt-0.5" }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 20 20" fill="none" className={className}>
      <path d="m4.5 10 3.5 3.5 7.5-7.5" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

const offerings = [
  {
    num: "01",
    badge: "Profile Grid",
    title: "Feed Post & Grid Graphics",
    description: "Feed graphics designed to communicate instantly while maintaining consistency across your profile grid and broader brand visual identity.",
    bullets: [
      "Educational & informational value posts",
      "Quote & text-led thought leadership",
      "Product & service value showcases",
      "Promotional & flash-sale creatives",
      "Testimonials & client social proof",
      "Announcements & milestone graphics",
      "Branded recurring post layout systems"
    ],
    takeaway: "Built around your existing brand guidelines or established as part of a creative revamp.",
    link: null
  },
  {
    num: "02",
    badge: "9:16 Vertical",
    title: "Story & Vertical Graphics",
    description: "Stories require distinct compositions because content occupies a taller, interface-heavy format with native interactive overlays.",
    bullets: [
      "Promotional & limited-time offer Stories",
      "Product & service vertical featurettes",
      "Important company announcement graphics",
      "Multi-frame narrative Story sequences",
      "Poll & question sticker interaction layouts",
      "Recurring daily & weekly Story templates",
      "Vertical mobile campaign hero graphics"
    ],
    takeaway: "Important text, visual elements, and CTAs are positioned strictly within UI safe margins.",
    link: null
  },
  {
    num: "03",
    badge: "Sequential Flow",
    title: "Carousel Design",
    description: "A carousel should not feel like unrelated graphics placed next to each other. We approach carousel design as a connected visual sequence.",
    bullets: [
      "Concept & multi-slide sequence planning",
      "Opening hook & swipe-earning slide design",
      "Educational step-by-step frameworks",
      "Product & software feature explainers",
      "Case study & client proof carousels",
      "Visual continuity & graphic flow across slides",
      "Closing slide & decisive CTA design"
    ],
    takeaway: "Each slide has a dedicated role within the message, driving viewers smoothly toward checkout.",
    link: null
  },
  {
    num: "04",
    badge: "Commercial Focus",
    title: "Product & Service Graphics",
    description: "Product and service content needs to explain value and functional benefits without turning every post into a generic promotional layout.",
    bullets: [
      "Product showcase layouts & 3D mockups",
      "Service feature breakdowns & infographics",
      "Product benefit visuals & spec callouts",
      "Feature comparison & tier matrices",
      "Offer, bundle & transparent pricing cards",
      "Before-and-after transformation layouts",
      "New product launch teasers & reveals"
    ],
    takeaway: "Where original studio product photography is needed, we integrate our in-house studio workflow.",
    link: {
      text: "Explore Product Photography",
      href: "/services/content-creation/product-photography"
    }
  },
  {
    num: "05",
    badge: "Multi-Asset Suites",
    title: "Promotional & Campaign Graphics",
    description: "Major campaigns require more than one graphic. We build a cohesive visual direction across sales events, launches, and webinars.",
    bullets: [
      "Sales & seasonal promotional campaign suites",
      "Product launch & go-to-market graphics",
      "Webinar & live workshop registration decks",
      "Event speaker announcements & agendas",
      "Holiday campaigns & celebration assets",
      "Urgency countdowns & limited-time banners",
      "A/B creative variations for paid ads"
    ],
    takeaway: "Allows multiple campaign pieces to feel connected without making every asset look repetitive.",
    link: null
  },
  {
    num: "06",
    badge: "CTR Optimization",
    title: "Reel Covers & Video Thumbnails",
    description: "Video may be moving content, but the static graphic around it determines whether casual scrollers click or pass by.",
    bullets: [
      "Instagram Reel cover frames (9:16 & 1:1)",
      "TikTok & Facebook short-form covers",
      "YouTube thumbnails with high-contrast hooks",
      "Video series branding & playlist graphics",
      "Branded title cards & video end-screens",
      "Recurring thumbnail template systems",
      "Facial expression & text overlay hierarchy"
    ],
    takeaway: "Covers the graphic design layer; video production and editing can be scoped seamlessly alongside.",
    link: {
      text: "Explore Video Production",
      href: "/services/content-creation/short-form-video"
    }
  },
  {
    num: "07",
    badge: "Internal Self-Serve",
    title: "Platform Template Systems",
    description: "If your business publishes similar content every week, designing every post from scratch is inefficient. We build reusable master template systems.",
    bullets: [
      "Reusable templates for educational posts",
      "Tips, quotes, and advice post formats",
      "Client testimonial & review announcement cards",
      "Product feature & promotional offer cards",
      "Brand-aligned Story & interactive templates",
      "Multi-slide carousel master templates",
      "Figma or Canva editable file delivery"
    ],
    takeaway: "Editable templates handed over to your internal team with font, color, and spacing guidelines.",
    link: null
  },
  {
    num: "08",
    badge: "Omnichannel Scale",
    title: "Multi-Platform Adaptation",
    description: "A campaign rarely ends with one file. The same creative must appear across different placements, aspect ratios, and content formats.",
    bullets: [
      "Platform-specific aspect ratio versions",
      "Feed-to-Story intelligent layout recomposition",
      "Multi-slide carousel to single-image cards",
      "Campaign batch resizing (Meta, LinkedIn, X)",
      "Cover, header, and thumbnail variations",
      "Organized, platform-indexed final exports",
      "Resolution optimization for fast loading"
    ],
    takeaway: "We rebuild the layout hierarchy for new dimensions rather than simply stretching the artwork.",
    link: null
  }
]

export default function Offerings() {
  return (
    <section className="border-b-2 border-frame-border bg-frame-bg px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro
          eyebrow="Comprehensive Capabilities"
          title="What Our Social Media Graphics Services Include"
          align="center"
        >
          From standalone viral hooks and interactive carousel sequences to comprehensive monthly template systems and multi-platform campaign suites.
        </SectionIntro>

        {/* BALANCED 4x2 GRID (8 CARDS) */}
        <div className="mt-12 grid gap-px border-2 border-frame-border bg-frame-border sm:grid-cols-2 lg:grid-cols-4">
          {offerings.map((item, index) => (
            <div
              key={index}
              className="bg-frame-bg p-6 md:p-7 flex flex-col justify-between transition-colors hover:bg-frame-muted/10"
            >
              <div>
                <div className="flex items-center justify-between border-b border-frame-border/60 pb-3 mb-4">
                  <span className="font-mono text-xs font-black text-frame-accent">
                    Scope {item.num}
                  </span>
                  <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-frame-muted-fg border border-frame-border px-1.5 py-0.5">
                    {item.badge}
                  </span>
                </div>

                <h3 className="font-heading text-lg md:text-xl font-bold uppercase tracking-tight text-frame-fg leading-snug">
                  {item.title}
                </h3>

                <p className="mt-3 text-xs sm:text-sm font-medium leading-relaxed text-frame-muted-fg">
                  {item.description}
                </p>

                <div className="mt-5 border-t border-frame-border/60 pt-4">
                  <span className="font-mono text-[10px] font-black uppercase tracking-[0.2em] text-frame-accent block mb-2">
                    What We Deliver
                  </span>
                  <ul className="space-y-2 text-xs font-medium text-frame-fg">
                    {item.bullets.map((bullet, bIdx) => (
                      <li key={bIdx} className="flex items-start gap-2">
                        <CheckIcon className="h-3.5 w-3.5 mt-0.5" />
                        <span className="leading-snug">{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-6 border-t border-frame-border/60 pt-3 space-y-3">
                <p className="text-[11px] font-mono text-frame-muted-fg leading-relaxed">
                  <strong className="text-frame-fg uppercase block text-[10px] mb-0.5">Strategic Role:</strong>
                  {item.takeaway}
                </p>

                {item.link && (
                  <div className="pt-1">
                    <Link
                      href={item.link.href}
                      className="text-xs font-mono font-bold uppercase text-frame-accent hover:underline inline-flex items-center gap-1"
                    >
                      {item.link.text} &rarr;
                    </Link>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* BOTTOM ACTION BANNER */}
        <div className="mt-12 border-2 border-frame-border bg-frame-muted/30 p-6 md:p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="font-heading text-lg md:text-xl font-bold uppercase tracking-tight text-frame-fg">
              Need Multi-Format Assets For An Upcoming Campaign?
            </h4>
            <p className="text-xs sm:text-sm font-medium text-frame-muted-fg">
              We package feed posts, Stories, carousels, and ad banners into unified multi-platform deliveries.
            </p>
          </div>
          <div className="shrink-0">
            <PosterButton href="/contact">
              Request a Campaign Scope &rarr;
            </PosterButton>
          </div>
        </div>

      </div>
    </section>
  )
}
