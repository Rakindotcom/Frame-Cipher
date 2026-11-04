import Link from 'next/link'
import { SectionIntro, PosterButton } from '../../../Kinetic'

const scenarios = [
  "Software interfaces & SaaS digital product workflows",
  "Internal business processes & complex operational logistics",
  "Data metrics, statistical comparisons & annual reports",
  "Microscopic or internal product features & schematics",
  "Abstract technological concepts, AI algorithms & cloud systems",
  "Animated interactive diagrams & multi-step workflows",
  "Brand motion systems, logo reveals & kinetic typography",
  "3D photorealistic product visualization without physical samples",
  "High-converting animated digital advertising creatives",
  "Customer onboarding sequences & UX walkthroughs"
]

function CheckIcon({ className = "h-3.5 w-3.5 shrink-0 text-[#A855F7] mt-0.5" }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 20 20" fill="none" className={className}>
      <path d="m4.5 10 3.5 3.5 7.5-7.5" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export default function FormatComparison() {
  return (
    <section className="border-b border-white/[0.08] bg-[#09090B] px-4 py-16 md:px-8 md:py-24">
      <div className="mx-auto max-w-7xl">
        <SectionIntro
          eyebrow="Format Decision Framework"
          title="When Motion Graphics Is the Right Format"
        >
          Not every visual communication challenge requires animation. Choosing the right medium before production begins eliminates wasted shoot days, unnecessary design cycles, and bloated budgets.
        </SectionIntro>

        {/* 3 COLUMNS COMPARISON */}
        <div className="mt-12 grid gap-8 lg:grid-cols-3">
          {/* STATIC DESIGN */}
          <div className="border border-white/[0.08] bg-[#121214] p-6 md:p-8 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between border-b border-white/[0.08] pb-3">
                <span className="text-xs font-black uppercase tracking-[0.2em] text-[#A1A1AA]">
                  Single-Frame Impact
                </span>
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#A1A1AA]">
                  Static
                </span>
              </div>
              <h3 className="mt-4 font-heading text-xl font-bold tracking-tight text-[#FAFAFA]">
                Static Graphic Design
              </h3>
              <p className="mt-3 text-xs sm:text-sm wide:text-lg font-medium leading-relaxed text-[#A1A1AA]">
                Best when the message can be instantly understood in a single, unmoving frame without requiring temporal sequence.
              </p>
              <ul className="mt-6 space-y-2 text-xs sm:text-sm font-medium text-[#A1A1AA] wide:text-lg">
                <li>&bull; Social media feed graphics & posters</li>
                <li>&bull; Brochures, one-sheeters & PDF guides</li>
                <li>&bull; Digital billboards & static web banners</li>
                <li>&bull; Editorial infographics & print layouts</li>
              </ul>
            </div>
            <div className="mt-8 pt-4 border-t border-white/[0.06]">
              <Link
                href="/services/content-creation/graphic-design"
                className="text-xs font-bold uppercase tracking-wider text-[#A855F7] hover:underline"
              >
                Explore Graphic Design &rarr;
              </Link>
            </div>
          </div>

          {/* LIVE-ACTION VIDEO */}
          <div className="border border-white/[0.08] bg-[#121214] p-6 md:p-8 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between border-b border-white/[0.08] pb-3">
                <span className="text-xs font-black uppercase tracking-[0.2em] text-[#A1A1AA]">
                  Physical World Capture
                </span>
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#A1A1AA]">
                  Camera Shoot
                </span>
              </div>
              <h3 className="mt-4 font-heading text-xl font-bold tracking-tight text-[#FAFAFA]">
                Live-Action Video
              </h3>
              <p className="mt-3 text-xs sm:text-sm wide:text-lg font-medium leading-relaxed text-[#A1A1AA]">
                Best when the subject exists physically in the real world and depends on human emotion, tangible locations, or physical handling.
              </p>
              <ul className="mt-6 space-y-2 text-xs sm:text-sm font-medium text-[#A1A1AA] wide:text-lg">
                <li>&bull; Founder, executive & customer interviews</li>
                <li>&bull; Physical workplace culture & office tours</li>
                <li>&bull; Real-world product handling & unboxings</li>
                <li>&bull; Live events, conferences & documentary films</li>
              </ul>
            </div>
            <div className="mt-8 pt-4 border-t border-white/[0.06]">
              <Link
                href="/services/content-creation/video-production"
                className="text-xs font-bold uppercase tracking-wider text-[#A855F7] hover:underline"
              >
                Explore Video Production &rarr;
              </Link>
            </div>
          </div>

          {/* MOTION GRAPHICS & ANIMATION */}
          <div className="border-2 border-[#A855F7]/40 bg-[#A855F7]/[0.05] p-6 md:p-8 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between border-b-2 border-[#A855F7]/30 pb-3">
                <span className="text-xs font-black uppercase tracking-[0.2em] text-[#A855F7]">
                  Abstract & Sequence
                </span>
                <span className="rounded border border-[#A855F7]/40 bg-[#A855F7]/20 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-[#A855F7]">
                  This Service
                </span>
              </div>
              <h3 className="mt-4 font-heading text-xl font-bold tracking-tight text-[#FAFAFA]">
                Motion Graphics & Animation
              </h3>
              <p className="mt-3 text-xs sm:text-sm font-medium leading-relaxed text-[#FAFAFA]">
                Best when the message depends on movement, sequence, abstraction, controlled pacing, or invisible processes cameras cannot film.
              </p>
              <div className="mt-5 space-y-1.5 text-xs sm:text-sm font-medium text-[#FAFAFA]">
                <p className="text-[11px] font-bold uppercase tracking-wider text-[#A855F7]">
                  Ideal Scenarios:
                </p>
                <div className="max-h-48 overflow-y-auto space-y-1.5 pr-1">
                  {scenarios.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-1.5">
                      <CheckIcon />
                      <span className="text-xs">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="mt-8 pt-4 border-t border-[#A855F7]/30">
              <PosterButton href="/contact" className="w-full justify-center text-xs sm:text-sm">
                Discuss Your Project &rarr;
              </PosterButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
