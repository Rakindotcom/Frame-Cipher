import { SectionIntro } from '../../../Kinetic'

function CheckIcon({ className = "h-4 w-4 shrink-0 text-[#A855F7] mt-0.5" }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 20 20" fill="none" className={className}>
      <path d="m4.5 10 3.5 3.5 7.5-7.5" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

const commitments = [
  "Choosing the appropriate animation format (2D vs. 3D vs. live-action) before taking your budget",
  "Agreeing on the script and creative direction before full production begins",
  "Using comprehensive storyboards and style frames to reduce avoidable production changes",
  "Keeping all keyframed motion strictly aligned with approved brand and visual guidelines",
  "Communicating scope, timelines, and revision rounds transparently at every stage",
  "Delivering all agreed aspect ratios (16:9, 9:16, 1:1) and technical master files",
  "Flagging potential production bottlenecks or asset issues before they become expensive revisions"
]

export default function Commitment() {
  return (
    <section className="border-b border-white/[0.08] bg-[#09090B] px-4 py-16 md:px-8 md:py-24">
      <div className="mx-auto max-w-7xl">
        <SectionIntro
          eyebrow="Integrity & Standards"
          title="What We Commit To"
        >
          We do not promise arbitrary viral numbers or guaranteed conversion percentages from an animation alone; distribution, landing pages, and audience targeting shape those metrics. What we control with absolute discipline is our production process.
        </SectionIntro>

        <div className="mt-12 border border-white/[0.08] bg-[#121214] p-6 md:p-10">
          <div className="max-w-3xl mb-6">
            <span className="text-xs font-black uppercase tracking-[0.2em] text-[#A855F7]">
              Our Production Guarantee
            </span>
            <h3 className="mt-2 font-heading text-xl md:text-2xl font-bold tracking-tight text-[#FAFAFA]">
              Transparent, Milestone-Driven Execution
            </h3>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {commitments.map((text, idx) => (
              <div key={idx} className="flex items-start gap-3 bg-[#09090B] p-4 border border-white/[0.08]">
                <CheckIcon />
                <span className="text-xs sm:text-sm font-medium text-[#FAFAFA] leading-relaxed">
                  {text}
                </span>
              </div>
            ))}
          </div>

          <div className="mt-8 border-t border-white/[0.06] pt-4 text-xs font-medium text-[#A1A1AA]">
            The exact number of revisions, editable source files, voice-over casting, music licenses, and additional cutdowns are outlined clearly in your project scope before kick-off.
          </div>
        </div>
      </div>
    </section>
  )
}
