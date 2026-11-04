import { PosterButton } from '../../../Kinetic'

const weControl = [
  'Content planning & calendar structure',
  'High-quality content creation & copy',
  'Timely, consistent publishing',
  'Facebook Page optimization & hygiene',
  'Community management & audience interaction',
  'Comment management & spam cleanup',
  'Review monitoring & response workflows',
  'Brand moderation & policy enforcement',
  'Clear monthly performance reporting',
  'Iterative strategy refinement',
  'Communication within agreed workflows',
]

const weDoNotGuarantee = [
  'A specific number of followers',
  'Guaranteed organic reach numbers',
  'Guaranteed engagement metrics',
  'Viral posts or instant fame',
  'Guaranteed leads or inquiries',
  'Guaranteed sales or revenue',
  'Specific search ranking positions',
  'Algorithmic distribution preferences',
  'Approval of Meta appeals',
  'Removal of platform restrictions',
]

export default function Guarantee() {
  return (
    <section className="relative border-t border-white/[0.08] bg-[#09090B] py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
        {/* Header */}
        <div className="mb-14 max-w-3xl space-y-4">
          <div className="flex items-center gap-2 inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-widest text-frame-accent">
            <span className="h-1.5 w-1.5 rounded-full bg-frame-accent" />
            Service Commitments
          </div>
          <h2 className="mt-4 font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium leading-[0.96] tracking-[-0.03em] text-white">
            What We Can and Cannot Guarantee
          </h2>
          <p className="mt-4 text-base sm:text-lg font-normal leading-relaxed text-zinc-300">
            Good Facebook management requires a clear distinction between what your team controls
            and what the platform controls.
          </p>
        </div>

        {/* 2-Column Comparison Grid */}
        <div className="mt-16 grid gap-8 lg:grid-cols-2">
          {/* What We Control */}
          <div className=" rounded-xl border border-white/[0.08] bg-[#121214] p-8 sm:p-10">
            <div className="flex items-center gap-3">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-frame-accent/10 text-frame-accent">
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </span>
              <h3 className="font-heading text-lg sm:text-xl font-medium tracking-tight text-white">
                What We Control
              </h3>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-[#A1A1AA]">
              We control the quality and consistency of agreed work across every operational phase:
            </p>
            <ul className="mt-6 space-y-3">
              {weControl.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-[#D4D4D8]">
                  <svg
                    className="mt-0.5 h-4 w-4 shrink-0 text-frame-accent"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2.5}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* What We Do Not Guarantee */}
          <div className=" rounded-xl border border-white/[0.08] bg-[#121214] p-8 sm:p-10">
            <div className="flex items-center gap-3">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/[0.05] text-[#A1A1AA]">
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </span>
              <h3 className="font-heading text-lg sm:text-xl font-medium tracking-tight text-white">
                What We Do Not Guarantee
              </h3>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-[#A1A1AA]">
              We do not make false promises on metrics outside an agency’s direct control:
            </p>
            <ul className="mt-6 space-y-3">
              {weDoNotGuarantee.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-[#A1A1AA]">
                  <svg
                    className="mt-0.5 h-4 w-4 shrink-0 text-[#71717A]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2.5}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Closing Note Banner */}
        <div className="mt-12 rounded-xl border border-white/[0.08] bg-[#121214] p-8 sm:p-10 lg:flex lg:items-center lg:justify-between lg:gap-8">
          <div className="mb-14 max-w-3xl space-y-4">
            <span className="text-[11px] font-mono uppercase tracking-[0.2em] text-frame-accent">
              The Framecipher Philosophy
            </span>
            <p className="mt-2 text-sm leading-relaxed text-[#A1A1AA] sm:text-base">
              Facebook distribution and platform enforcement are outside an agency's direct control.
              Meta has its own policies and enforcement systems for Pages and content. Our job is to
              build and manage the parts we can control, measure performance honestly, and improve
              the strategy over time.
            </p>
          </div>
          <div className="mt-6 shrink-0 lg:mt-0">
            <PosterButton href="/contact" variant="outline">
              Review the Full Scope With Us 
         </PosterButton>
          </div>
        </div>
      </div>
    </section>
  )
}
