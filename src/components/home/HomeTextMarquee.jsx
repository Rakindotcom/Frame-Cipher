const proofLines = [
  'Strategy that has teeth',
  'Content built for campaigns',
  'Software that carries growth',
  'Media that moves fast',
  'Reporting that changes decisions',
]

const baseLines = [...proofLines, ...proofLines]
const duplicatedProofLines = [...baseLines, ...baseLines]

export default function HomeTextMarquee() {
  return (
    <section className="kinetic-marquee relative isolate overflow-hidden border-y border-white/[0.08] bg-[#09090B] py-8 text-white before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-gradient-to-r before:from-transparent before:via-frame-accent/30 before:to-transparent">
      <p className="sr-only">Proof points: strategy, campaign content, growth software, fast media, and useful reporting.</p>
      <div className="kinetic-marquee-track kinetic-marquee-track-slow hover:[animation-play-state:paused]" aria-hidden="true">
        {duplicatedProofLines.map((line, index) => (
          <div key={`${line}-${index}`} className="flex shrink-0 items-center gap-8 px-6">
            <span className="font-heading text-2xl sm:text-4xl md:text-5xl font-medium leading-none text-white tracking-tight">
              {line}
            </span>
            <span className="h-2 w-2 shrink-0 rounded-full bg-frame-accent shadow-[0_0_8px_rgba(168,85,247,0.5)]" />
          </div>
        ))}
      </div>
    </section>
  )
}
