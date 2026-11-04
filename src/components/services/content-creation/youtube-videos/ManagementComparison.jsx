import { SectionIntro, PosterButton } from '../../../Kinetic'

const suitableReasons = [
  "Need individual, high-production YouTube videos",
  "Want professional filming & editing without ongoing channel management overhead",
  "Already have an internal team managing your channel uploads & community",
  "Work with a specialized external agency for channel SEO & distribution",
  "Need extra production capacity for an upcoming campaign or product launch",
  "Want to produce a standalone documentary, flagship interview, or masterclass series"
]

function CheckIcon({ className = "h-4 w-4 shrink-0 text-[#A855F7] mt-0.5" }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 20 20" fill="none" className={className}>
      <path d="m4.5 10 3.5 3.5 7.5-7.5" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export default function ManagementComparison() {
  return (
    <section className="border-b border-white/[0.08] bg-[#09090B] px-4 py-16 md:px-8 md:py-24">
      <div className="mx-auto max-w-7xl">
        <SectionIntro
          eyebrow="Scope Clarification"
          title="YouTube Video Production vs. YouTube Management"
        >
          YouTube Video Production and YouTube Management are closely connected, but they serve two distinct operational needs for your business.
        </SectionIntro>

        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          {/* MANAGEMENT COLUMN */}
          <div className="border border-white/[0.08] bg-[#121214] p-6 md:p-8 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between border-b border-white/[0.08] pb-4">
                <span className="text-xs font-black uppercase tracking-[0.2em] text-[#A1A1AA]">
                  Ongoing Channel Operations
                </span>
                <span className="rounded border border-white/[0.08] bg-[#09090B] px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-[#A1A1AA]">
                  Operations & Strategy
                </span>
              </div>
              <h3 className="mt-4 font-heading text-xl md:text-2xl font-bold tracking-tight text-[#FAFAFA]">
                YouTube Management
              </h3>
              <p className="mt-3 text-xs sm:text-sm wide:text-lg font-medium leading-relaxed text-[#A1A1AA]">
                Focuses on the continuous day-to-day operation, audience growth, and optimization of an entire YouTube channel over time.
              </p>
              <ul className="mt-6 space-y-2.5 text-xs sm:text-sm font-medium text-[#A1A1AA] wide:text-lg">
                <li className="flex items-center gap-2">
                  <span className="text-[#A1A1AA]/60">&bull;</span>
                  Channel content calendar & publishing schedule
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[#A1A1AA]/60">&bull;</span>
                  YouTube SEO, tag research & description copy
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[#A1A1AA]/60">&bull;</span>
                  A/B thumbnail testing & title optimization
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[#A1A1AA]/60">&bull;</span>
                  Community moderation & comment management
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[#A1A1AA]/60">&bull;</span>
                  Analytics reporting, retention audits & channel growth
                </li>
              </ul>
            </div>
            <div className="mt-8 pt-4 border-t border-white/[0.06]">
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#A1A1AA]">
                Best suited for: Businesses wanting complete, hands-off channel operations.
              </span>
            </div>
          </div>

          {/* PRODUCTION COLUMN (HIGHLIGHTED) */}
          <div className="border-2 border-[#A855F7]/40 bg-[#A855F7]/[0.05] p-6 md:p-8 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between border-b-2 border-[#A855F7]/30 pb-4">
                <span className="text-xs font-black uppercase tracking-[0.2em] text-[#A855F7]">
                  Dedicated Asset Creation
                </span>
                <span className="rounded border border-[#A855F7]/40 bg-[#A855F7]/20 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-[#A855F7]">
                  This Service
                </span>
              </div>
              <h3 className="mt-4 font-heading text-xl md:text-2xl font-bold tracking-tight text-[#FAFAFA]">
                YouTube Video Production
              </h3>
              <p className="mt-3 text-xs sm:text-sm font-medium leading-relaxed text-[#FAFAFA]">
                Focuses specifically on creating the actual video asset from pre-production through filming, editing, and thumbnail delivery.
              </p>
              <div className="mt-6">
                <span className="text-xs font-black uppercase tracking-wider text-[#A855F7]">
                  Ideal For Businesses That:
                </span>
                <ul className="mt-3 space-y-2 text-xs sm:text-sm font-medium text-[#FAFAFA]">
                  {suitableReasons.map((reason, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <CheckIcon />
                      <span>{reason}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-[#A855F7]/30">
              <p className="text-xs text-[#A1A1AA] leading-relaxed">
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
