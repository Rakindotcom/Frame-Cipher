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

function CheckIcon({ className = "h-3.5 w-3.5 shrink-0 text-frame-accent mt-0.5" }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 20 20" fill="none" className={className}>
      <path d="m4.5 10 3.5 3.5 7.5-7.5" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export default function FormatComparison() {
  return (
    <section className="border-b-2 border-frame-border bg-frame-bg px-4 py-16 md:px-8 md:py-24">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro
          eyebrow="Format Decision Framework"
          title="When Motion Graphics Is the Right Format"
        >
          Not every visual communication challenge requires animation. Choosing the right medium before production begins eliminates wasted shoot days, unnecessary design cycles, and bloated budgets.
        </SectionIntro>

        {/* 3 COLUMNS COMPARISON */}
        <div className="mt-12 grid gap-8 lg:grid-cols-3">
          {/* STATIC DESIGN */}
          <div className="border-2 border-frame-border bg-frame-muted/10 p-6 md:p-8 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between border-b-2 border-frame-border pb-3">
                <span className="text-xs font-black uppercase tracking-[0.2em] text-frame-muted-fg">
                  Single-Frame Impact
                </span>
                <span className="text-[10px] font-bold uppercase tracking-wider text-frame-muted-fg">
                  Static
                </span>
              </div>
              <h3 className="mt-4 font-heading text-xl font-bold uppercase tracking-tight text-frame-fg">
                Static Graphic Design
              </h3>
              <p className="mt-3 text-xs sm:text-sm font-medium leading-relaxed text-frame-muted-fg">
                Best when the message can be instantly understood in a single, unmoving frame without requiring temporal sequence.
              </p>
              <ul className="mt-6 space-y-2 text-xs sm:text-sm font-medium text-frame-muted-fg">
                <li>&bull; Social media feed graphics & posters</li>
                <li>&bull; Brochures, one-sheeters & PDF guides</li>
                <li>&bull; Digital billboards & static web banners</li>
                <li>&bull; Editorial infographics & print layouts</li>
              </ul>
            </div>
            <div className="mt-8 pt-4 border-t border-frame-border/60">
              <Link
                href="/services/content-creation/graphic-design"
                className="text-xs font-bold uppercase tracking-wider text-frame-accent hover:underline"
              >
                Explore Graphic Design &rarr;
              </Link>
            </div>
          </div>

          {/* LIVE-ACTION VIDEO */}
          <div className="border-2 border-frame-border bg-frame-muted/10 p-6 md:p-8 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between border-b-2 border-frame-border pb-3">
                <span className="text-xs font-black uppercase tracking-[0.2em] text-frame-muted-fg">
                  Physical World Capture
                </span>
                <span className="text-[10px] font-bold uppercase tracking-wider text-frame-muted-fg">
                  Camera Shoot
                </span>
              </div>
              <h3 className="mt-4 font-heading text-xl font-bold uppercase tracking-tight text-frame-fg">
                Live-Action Video
              </h3>
              <p className="mt-3 text-xs sm:text-sm font-medium leading-relaxed text-frame-muted-fg">
                Best when the subject exists physically in the real world and depends on human emotion, tangible locations, or physical handling.
              </p>
              <ul className="mt-6 space-y-2 text-xs sm:text-sm font-medium text-frame-muted-fg">
                <li>&bull; Founder, executive & customer interviews</li>
                <li>&bull; Physical workplace culture & office tours</li>
                <li>&bull; Real-world product handling & unboxings</li>
                <li>&bull; Live events, conferences & documentary films</li>
              </ul>
            </div>
            <div className="mt-8 pt-4 border-t border-frame-border/60">
              <Link
                href="/services/content-creation/video-production"
                className="text-xs font-bold uppercase tracking-wider text-frame-accent hover:underline"
              >
                Explore Video Production &rarr;
              </Link>
            </div>
          </div>

          {/* MOTION GRAPHICS & ANIMATION */}
          <div className="border-2 border-frame-accent bg-frame-accent/5 p-6 md:p-8 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between border-b-2 border-frame-accent/40 pb-3">
                <span className="text-xs font-black uppercase tracking-[0.2em] text-frame-accent">
                  Abstract & Sequence
                </span>
                <span className="rounded border border-frame-accent bg-frame-accent/20 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-frame-accent">
                  This Service
                </span>
              </div>
              <h3 className="mt-4 font-heading text-xl font-bold uppercase tracking-tight text-frame-fg">
                Motion Graphics & Animation
              </h3>
              <p className="mt-3 text-xs sm:text-sm font-medium leading-relaxed text-frame-fg">
                Best when the message depends on movement, sequence, abstraction, controlled pacing, or invisible processes cameras cannot film.
              </p>
              <div className="mt-5 space-y-1.5 text-xs sm:text-sm font-medium text-frame-fg">
                <p className="text-[11px] font-bold uppercase tracking-wider text-frame-accent">
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
            <div className="mt-8 pt-4 border-t border-frame-accent/40">
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
