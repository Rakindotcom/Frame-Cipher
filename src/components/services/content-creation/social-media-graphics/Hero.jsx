'use client'

import Link from 'next/link'
import { PageHero, PosterButton } from '../../../Kinetic'

function CheckIcon({ className = "h-4 w-4 shrink-0 text-[#A855F7] mt-0.5" }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 20 20" fill="none" className={className}>
      <path d="m4.5 10 3.5 3.5 7.5-7.5" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

const displayPillars = [
  {
    num: "01",
    title: "Composition",
    subtitle: "Space & Clarity",
    desc: "Important information needs enough breathing room to remain razor-sharp and instantly legible at actual mobile viewing dimensions.",
    metric: "Calibrated for 6-inch screens"
  },
  {
    num: "02",
    title: "Hierarchy",
    subtitle: "Eye-Tracking Order",
    desc: "The primary message hook, supporting context, brand cues, and call to action are visually prioritized so viewers understand the point in under 2 seconds.",
    metric: "Instant comprehension order"
  },
  {
    num: "03",
    title: "Crop Behavior",
    subtitle: "Grid Preview Safety",
    desc: "Critical headlines, logos, and focal elements never rely on outer borders, ensuring designs survive 1:1 profile grid previews and varied feed crops.",
    metric: "Zero critical edge cutoff"
  },
  {
    num: "04",
    title: "Safe Zones",
    subtitle: "UI Overlay Immunity",
    desc: "Vertical formats leave designated margins clear of usernames, audio attribution bars, engagement buttons, and app navigation overlays.",
    metric: "Protected 9:16 vertical safe margins"
  },
  {
    num: "05",
    title: "Consistency",
    subtitle: "Brand Recognition",
    desc: "Recurring posts share recognizable typographic rules, color proportions, and motifs so your profile feels cohesive without every post looking identical.",
    metric: "Unified profile aesthetic"
  },
  {
    num: "06",
    title: "Adaptation",
    subtitle: "Re-Architected Layouts",
    desc: "Campaigns require dedicated compositions across 1:1, 4:5, and 9:16 formats rather than one master design stretched or cropped into awkward shapes.",
    metric: "Bespoke aspect-ratio restructuring"
  }
]

export default function Hero({ service }) {
  const title = service?.h1 || "Social Media Graphics Service in Bangladesh"
  const subtitle = service?.shortDesc || "Social media graphics designed for the platform, not just the canvas. Framecipher creates feed posts, Stories, carousels, campaign graphics, product visuals, and reusable templates built around your brand, content goals, platform formats, and real-world display constraints."

  return (
    <div className="bg-[#09090B] text-[#FAFAFA]">
      {/* BREADCRUMB */}
      <nav aria-label="Breadcrumb" className="border-b border-white/[0.06] bg-[#09090B]/80 px-4 py-3 text-xs font-semibold uppercase tracking-wider text-[#A1A1AA] md:px-8">
        <div className="mx-auto flex max-w-7xl items-center gap-2 overflow-x-auto whitespace-nowrap">
          <Link href="/" className="transition hover:text-[#FAFAFA]">Home</Link>
          <span className="text-frame-border">/</span>
          <Link href="/services" className="transition hover:text-[#FAFAFA]">Services</Link>
          <span className="text-frame-border">/</span>
          <Link href="/services/content-creation" className="transition hover:text-[#FAFAFA]">Content Creation</Link>
          <span className="text-frame-border">/</span>
          <span className="text-[#A855F7]">Social Media Graphics</span>
        </div>
      </nav>

      {/* CANONICAL PAGE HERO */}
      <PageHero
        eyebrow="Specialized Capability • In-House Creative Production"
        meta="Feed Posts • Stories • Sequenced Carousels • Reusable Templates • Safe-Zone Compliance"
        number="09"
        title={title}
        actions={
          <>
            <PosterButton href="/contact">
              Get Free Consultation &rarr;
            </PosterButton>
            <PosterButton href="#portfolio" variant="outline">
              View Social Media Graphics Work &rarr;
            </PosterButton>
          </>
        }
      >
        <span className="block text-balance">
          {subtitle}
        </span>
        <span className="mt-4 block text-sm sm:text-base md:text-lg font-normal text-[#A1A1AA] leading-relaxed max-w-3xl mx-auto text-balance">
          From one-off creative needs to ongoing monthly production, our in-house team supports businesses in Bangladesh and international markets with social graphics that are ready to publish and built to work across the formats they need.
        </span>
      </PageHero>

      {/* DISPLAY ARCHITECTURE SECTION: BUILT AROUND HOW PEOPLE ACTUALLY SEE THEM */}
      <section className="border-b border-white/[0.08] bg-[#121214] px-4 py-16 md:px-8 md:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-4xl text-center mb-14">
            <p className="text-xs font-black uppercase tracking-[0.24em] text-[#A855F7] mb-3">
              Real-World Display Realities
            </p>
            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#FAFAFA] leading-[0.95]">
              Social Media Graphics Built Around How People Actually See Them
            </h2>
            <p className="mt-6 text-sm sm:text-base md:text-lg font-medium leading-relaxed text-[#A1A1AA] max-w-3xl mx-auto text-balance">
              Social media design is not simply about fitting a graphic into the correct dimensions. The graphic has to communicate quickly while competing with surrounding content, interface elements, and the limited attention available on a mobile screen. The goal is not simply a good-looking export file; it is a graphic that still works when it is actually published.
            </p>
          </div>

          {/* 6 DISPLAY PILLARS (BALANCED 3x2 GRID) */}
          <div className="grid gap-px bg-frame-border border border-white/[0.08] sm:grid-cols-2 lg:grid-cols-3">
            {displayPillars.map((item, index) => (
              <div
                key={index}
                className="bg-[#09090B] p-6 md:p-8 flex flex-col justify-between hover:bg-[#121214] transition-colors"
              >
                <div>
                  <div className="flex items-center justify-between border-b border-white/[0.06] pb-3 mb-4">
                    <span className="font-heading text-2xl font-black text-[#A855F7]">
                      {item.num}
                    </span>
                    <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-[#A1A1AA] border border-white/[0.08] px-1.5 py-0.5">
                      {item.subtitle}
                    </span>
                  </div>

                  <h3 className="font-heading text-lg md:text-xl font-bold tracking-tight text-[#FAFAFA] leading-snug">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-xs sm:text-sm wide:text-lg font-medium leading-relaxed text-[#A1A1AA]">
                    {item.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-white/[0.06] flex items-center justify-between text-xs font-mono font-bold">
                  <span className="text-[#A1A1AA] uppercase text-[10px]">Standard</span>
                  <span className="text-[#A855F7] flex items-center gap-1.5">
                    <CheckIcon className="h-3.5 w-3.5" />
                    {item.metric}
                  </span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>
    </div>
  )
}
