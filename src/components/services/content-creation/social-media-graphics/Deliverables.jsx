import { SectionIntro, PosterButton } from '../../../Kinetic'

function CheckIcon({ className = "h-4 w-4 shrink-0 text-[#A855F7] mt-0.5" }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 20 20" fill="none" className={className}>
      <path d="m4.5 10 3.5 3.5 7.5-7.5" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

const standardDeliverables = [
  {
    num: "01",
    title: "Platform-Ready Assets",
    desc: "Delivered in lossless WebP, PNG, and optimized JPG ready for direct publishing."
  },
  {
    num: "02",
    title: "Feed Post Designs",
    desc: "Square (1:1) and portrait (4:5) compositions calibrated for Instagram, LinkedIn, and Facebook."
  },
  {
    num: "03",
    title: "Story Visual Formats",
    desc: "Vertical 9:16 designs with protected safe zones for interactive stickers and interface elements."
  },
  {
    num: "04",
    title: "Sequenced Carousel Sets",
    desc: "Full multi-slide swipe packages with visual continuity and decisive exit CTAs."
  },
  {
    num: "05",
    title: "Product & Service Visuals",
    desc: "High-clarity feature callouts, pricing graphics, and transformation showcases."
  },
  {
    num: "06",
    title: "Campaign Creative Suites",
    desc: "Coordinated promotional suites for launches, seasonal offers, and event announcements."
  },
  {
    num: "07",
    title: "Reel & Video Covers",
    desc: "Static cover artwork engineered to drive clicks in explore grids and video feeds."
  },
  {
    num: "08",
    title: "Platform Adaptations",
    desc: "Bespoke recompositions across multiple aspect ratios for cross-channel distribution."
  },
  {
    num: "09",
    title: "Organized Final Folders",
    desc: "Cleanly structured directories sorted by platform, date, campaign, and format."
  },
  {
    num: "10",
    title: "Editable Master Files",
    desc: "Figma or Canva master source files with modular layers where included in scope."
  }
]

const scopingChecklist = [
  "Exact number of graphics & monthly asset volume",
  "Target publication platforms (Meta, LinkedIn, X, TikTok)",
  "Specified aspect ratios (1:1, 4:5, 9:16, 16:9)",
  "Established brand guidelines, color codes & fonts",
  "Copywriting source (client-supplied vs Framecipher scoped)",
  "Editable source file requirements (Figma / Canva / PSD)"
]

export default function Deliverables() {
  return (
    <section className="border-b border-white/[0.08] bg-[#09090B] px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-7xl">
        <SectionIntro
          eyebrow="Asset Handover"
          title="What You Receive With Our Social Media Graphics Service"
          align="center"
        >
          Publish-ready social assets engineered for immediate feed impact, algorithmic safe zones, and long-term brand authority.
        </SectionIntro>

        {/* 10 DELIVERABLES IN A BALANCED 5x2 GRID */}
        <div className="mt-12 grid gap-px border border-white/[0.08] bg-frame-border sm:grid-cols-2 lg:grid-cols-5">
          {standardDeliverables.map((item, idx) => (
            <div
              key={idx}
              className="bg-[#09090B] p-5 md:p-6 flex flex-col justify-between hover:bg-[#121214] transition-colors"
            >
              <div>
                <div className="flex items-center justify-between border-b border-white/[0.06] pb-2 mb-3">
                  <span className="font-mono text-xs font-black text-[#A855F7]">
                    Asset {item.num}
                  </span>
                  <CheckIcon className="h-4 w-4" />
                </div>
                <h4 className="font-heading text-base font-bold tracking-tight text-[#FAFAFA] leading-snug">
                  {item.title}
                </h4>
                <p className="mt-2 text-xs font-medium leading-relaxed text-[#A1A1AA]">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* 2-COLUMN BALANCED CONTAINER: SCOPE ALIGNMENT + SOURCE FILES */}
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          
          {/* PRE-PRODUCTION ALIGNMENT */}
          <div className="border border-white/[0.08] bg-[#121214] p-6 md:p-8 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between border-b border-white/[0.06] pb-3 mb-4">
                <span className="font-mono text-xs font-black uppercase tracking-[0.2em] text-[#A855F7]">
                  Pre-Production Alignment
                </span>
                <span className="font-mono text-[10px] text-[#A1A1AA] border border-white/[0.08] px-1.5 py-0.5">
                  6-Point Scope
                </span>
              </div>
              <h3 className="font-heading text-xl font-bold tracking-tight text-[#FAFAFA]">
                Defined Scope Before Production
              </h3>
              <p className="mt-2 text-xs sm:text-sm font-medium text-[#A1A1AA] leading-relaxed wide:text-lg">
                Before design commences, we document every variable so deliverables, revision expectations, and timelines remain crystal clear:
              </p>

              <ul className="mt-4 space-y-2 text-xs sm:text-sm font-medium text-[#FAFAFA]">
                {scopingChecklist.map((check, cIdx) => (
                  <li key={cIdx} className="flex items-start gap-2">
                    <CheckIcon className="h-3.5 w-3.5 mt-0.5" />
                    <span>{check}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* EDITABLE ASSETS & SOURCE FILES */}
          <div className="border border-white/[0.08] bg-[#121214] p-6 md:p-8 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between border-b border-white/[0.06] pb-3 mb-4">
                <span className="font-mono text-xs font-black uppercase tracking-[0.2em] text-[#A855F7]">
                  Design System Handoff
                </span>
                <span className="font-mono text-[10px] text-[#A1A1AA] border border-white/[0.08] px-1.5 py-0.5">
                  Figma & Canva
                </span>
              </div>
              <h3 className="font-heading text-xl font-bold tracking-tight text-[#FAFAFA]">
                Reusable Templates & Source Files
              </h3>
              <p className="mt-2 text-xs sm:text-sm font-medium text-[#A1A1AA] leading-relaxed wide:text-lg">
                When included in your project tier, editable source files are delivered with clean modular structures:
              </p>

              <div className="mt-4 space-y-2.5 text-xs sm:text-sm font-medium text-[#A1A1AA] wide:text-lg">
                <div className="p-2.5 border border-white/[0.08] bg-[#09090B] flex items-start gap-2">
                  <CheckIcon className="h-3.5 w-3.5 mt-0.5" />
                  <span><strong className="text-[#FAFAFA]">Figma Component Systems:</strong> Auto-layout frames, text styles, color variables, and swappable brand assets.</span>
                </div>
                <div className="p-2.5 border border-white/[0.08] bg-[#09090B] flex items-start gap-2">
                  <CheckIcon className="h-3.5 w-3.5 mt-0.5" />
                  <span><strong className="text-[#FAFAFA]">Canva Master Templates:</strong> Locked background elements with easily swappable text fields for internal marketing teams.</span>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-white/[0.06]">
              <PosterButton href="/contact" variant="outline" className="w-full text-center">
                Discuss Template Handoff &rarr;
              </PosterButton>
            </div>
          </div>

        </div>

      </div>
    </section>
  )
}
