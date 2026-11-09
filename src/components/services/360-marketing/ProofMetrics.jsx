import { SectionIntro } from '../../Kinetic'

export default function ProofMetrics() {
  return (
    <section className="px-4 py-20 md:px-8 md:py-28 bg-[#09090B] text-white border-b border-white/[0.08]">
      <div className="mx-auto max-w-7xl">
        <SectionIntro title="Real Metrics & Verified Impact.">
          We judge our 360 marketing systems by revenue generated, audience captured, and commercial
          authority established. Here is what happens when strategy, creative, and distribution unite.
        </SectionIntro>

        {/* 3 Metric Columns (Modality 2: Divided Column Band) */}
        <div className="grid border-t border-b border-white/[0.08] divide-y md:divide-y-0 md:divide-x divide-white/[0.08] md:grid-cols-3 bg-[#09090B]">
          <div className="p-8 space-y-2.5 transition-colors duration-200 hover:bg-[#121214]">
            <p className="font-heading text-4xl sm:text-5xl md:text-6xl font-medium leading-none tracking-tight text-white tabular-nums">
              1,000,000+
            </p>
            <p className="font-mono text-xs uppercase tracking-wider text-zinc-300 font-medium">
              Breakout Video Views
            </p>
            <p className="text-sm font-normal text-zinc-300 leading-relaxed">
              Achieved for Dr. Ferdoush Saleheen with organic Facebook &amp; Instagram short-form reels
              without burning unnecessary ad dollars.
            </p>
          </div>

          <div className="p-8 space-y-2.5 transition-colors duration-200 hover:bg-[#121214]">
            <p className="font-heading text-4xl sm:text-5xl md:text-6xl font-medium leading-none tracking-tight text-white tabular-nums">
              4.8x
            </p>
            <p className="font-mono text-xs uppercase tracking-wider text-zinc-300 font-medium">
              Average Blended ROAS
            </p>
            <p className="text-sm font-normal text-zinc-300 leading-relaxed">
              Consistently maintained across active e-commerce and direct response client accounts
              by combining paid ads with high-speed landing pages.
            </p>
          </div>

          <div className="p-8 space-y-2.5 transition-colors duration-200 hover:bg-[#121214]">
            <p className="font-heading text-4xl sm:text-5xl md:text-6xl font-medium leading-none tracking-tight text-white tabular-nums">
              &lt; 100ms
            </p>
            <p className="font-mono text-xs uppercase tracking-wider text-zinc-300 font-medium">
              Page Load (LCP) Speed
            </p>
            <p className="text-sm font-normal text-zinc-300 leading-relaxed">
              Lightning-fast custom Next.js web infrastructure that stops ad drop-offs and dramatically
              improves checkout conversion rates.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
