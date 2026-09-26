import { SectionIntro, PosterButton } from '../../../Kinetic'

const suitableReasons = [
  "Need individual, high-production YouTube videos",
  "Want professional filming & editing without ongoing channel management overhead",
  "Already have an internal team managing your channel uploads & community",
  "Work with a specialized external agency for channel SEO & distribution",
  "Need extra production capacity for an upcoming campaign or product launch",
  "Want to produce a standalone documentary, flagship interview, or masterclass series"
]

function CheckIcon({ className = "h-4 w-4 shrink-0 text-frame-accent mt-0.5" }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 20 20" fill="none" className={className}>
      <path d="m4.5 10 3.5 3.5 7.5-7.5" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export default function ManagementComparison() {
  return (
    <section className="border-b-2 border-frame-border bg-frame-bg px-4 py-16 md:px-8 md:py-24">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro
          eyebrow="Scope Clarification"
          title="YouTube Video Production vs. YouTube Management"
        >
          YouTube Video Production and YouTube Management are closely connected, but they serve two distinct operational needs for your business.
        </SectionIntro>

        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          {/* MANAGEMENT COLUMN */}
          <div className="border-2 border-frame-border bg-frame-muted/20 p-6 md:p-8 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between border-b-2 border-frame-border pb-4">
                <span className="text-xs font-black uppercase tracking-[0.2em] text-frame-muted-fg">
                  Ongoing Channel Operations
                </span>
                <span className="rounded border border-frame-border bg-frame-bg px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-frame-muted-fg">
                  Operations & Strategy
                </span>
              </div>
              <h3 className="mt-4 font-heading text-xl md:text-2xl font-bold uppercase tracking-tight text-frame-fg">
                YouTube Management
              </h3>
              <p className="mt-3 text-xs sm:text-sm font-medium leading-relaxed text-frame-muted-fg">
                Focuses on the continuous day-to-day operation, audience growth, and optimization of an entire YouTube channel over time.
              </p>
              <ul className="mt-6 space-y-2.5 text-xs sm:text-sm font-medium text-frame-muted-fg">
                <li className="flex items-center gap-2">
                  <span className="text-frame-muted-fg/60">&bull;</span>
                  Channel content calendar & publishing schedule
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-frame-muted-fg/60">&bull;</span>
                  YouTube SEO, tag research & description copy
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-frame-muted-fg/60">&bull;</span>
                  A/B thumbnail testing & title optimization
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-frame-muted-fg/60">&bull;</span>
                  Community moderation & comment management
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-frame-muted-fg/60">&bull;</span>
                  Analytics reporting, retention audits & channel growth
                </li>
              </ul>
            </div>
            <div className="mt-8 pt-4 border-t border-frame-border/60">
              <span className="text-[11px] font-bold uppercase tracking-wider text-frame-muted-fg">
                Best suited for: Businesses wanting complete, hands-off channel operations.
              </span>
            </div>
          </div>

          {/* PRODUCTION COLUMN (HIGHLIGHTED) */}
          <div className="border-2 border-frame-accent bg-frame-accent/5 p-6 md:p-8 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between border-b-2 border-frame-accent/40 pb-4">
                <span className="text-xs font-black uppercase tracking-[0.2em] text-frame-accent">
                  Dedicated Asset Creation
                </span>
                <span className="rounded border border-frame-accent bg-frame-accent/20 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-frame-accent">
                  This Service
                </span>
              </div>
              <h3 className="mt-4 font-heading text-xl md:text-2xl font-bold uppercase tracking-tight text-frame-fg">
                YouTube Video Production
              </h3>
              <p className="mt-3 text-xs sm:text-sm font-medium leading-relaxed text-frame-fg">
                Focuses specifically on creating the actual video asset from pre-production through filming, editing, and thumbnail delivery.
              </p>
              <div className="mt-6">
                <span className="text-xs font-black uppercase tracking-wider text-frame-accent">
                  Ideal For Businesses That:
                </span>
                <ul className="mt-3 space-y-2 text-xs sm:text-sm font-medium text-frame-fg">
                  {suitableReasons.map((reason, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <CheckIcon />
                      <span>{reason}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-frame-accent/40">
              <p className="text-xs text-frame-muted-fg leading-relaxed">
                If you already work with Framecipher on YouTube Management, production is coordinated within that plan. This service is specifically for standalone, high-caliber video production.
              </p>
              <div className="mt-4">
                <PosterButton href="/contact" className="w-full justify-center text-xs sm:text-sm">
                  Discuss Your YouTube Production Needs &rarr;
                </PosterButton>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
