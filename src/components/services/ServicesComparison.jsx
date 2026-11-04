import { comparisonRows } from '../../data/agency'
import { SectionIntro } from '../Kinetic'

const ColumnHead = ({ children, highlight = false }) => (
  <p
    className={`border-b px-4 py-3 text-[11px] font-mono uppercase tracking-[0.2em] md:px-6 ${
      highlight
        ? 'border-[#A855F7]/40 bg-[#A855F7]/10 text-[#A855F7]'
        : 'border-white/[0.08] bg-[#121214] text-[#A1A1AA]'
    }`}
  >
    {children}
  </p>
)

export default function ServicesComparison() {
  return (
    <section className="border-t border-white/[0.08] bg-[#09090B] px-4 py-24 md:px-8 md:py-32">
      <div className="mx-auto max-w-7xl">
        <SectionIntro eyebrow="Why One Firm" title="One agency vs five separate vendors.">
          The difference is not the number of services, it is how they are connected. Here is what
          changes when strategy, creative, web, media, and performance live under one roof.
        </SectionIntro>

        <div className="mt-12 overflow-x-auto">
          <div className="min-w-[640px] rounded-2xl border border-white/[0.08] bg-[#121214] overflow-hidden">
            <div className="grid grid-cols-[1fr_1fr_1fr]">
              <ColumnHead>Factor</ColumnHead>
              <ColumnHead highlight>Frame Cipher</ColumnHead>
              <ColumnHead>Separate vendors</ColumnHead>
            </div>
            <div className="divide-y divide-white/[0.06]">
              {comparisonRows.map((row) => (
                <div key={row.aspect} className="grid grid-cols-[1fr_1fr_1fr] transition-colors hover:bg-white/[0.02]">
                  <div className="p-4 md:px-6">
                    <p className="text-[11px] font-mono uppercase tracking-[0.18em] text-[#A855F7]">
                      {row.aspect}
                    </p>
                  </div>
                  <div className="border-x border-white/[0.06] bg-[#A855F7]/[0.02] p-4 md:px-6">
                    <p className="text-sm font-medium text-[#FAFAFA] md:text-base">{row.us}</p>
                  </div>
                  <div className="p-4 md:px-6">
                    <p className="text-sm leading-relaxed text-[#A1A1AA] md:text-base">{row.them}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
