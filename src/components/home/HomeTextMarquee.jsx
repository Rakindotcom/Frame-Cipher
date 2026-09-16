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
    <section className="kinetic-marquee border-y-2 border-frame-border bg-frame-accent py-7 text-frame-accent-fg">
      <p className="sr-only">Proof points: strategy, campaign content, growth software, fast media, and useful reporting.</p>
      <div className="kinetic-marquee-track kinetic-marquee-track-slow" aria-hidden="true">
        {duplicatedProofLines.map((line, index) => (
          <div key={`${line}-${index}`} className="flex shrink-0 items-center gap-8 px-6">
            <span className="font-heading text-[clamp(2rem,6vw,5.5rem)] font-bold uppercase leading-none tracking-tighter text-frame-accent-fg">
              {line}
            </span>
            <span className="h-4 w-4 shrink-0 bg-frame-accent-fg" />
          </div>
        ))}
      </div>
    </section>
  )
}
