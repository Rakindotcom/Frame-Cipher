import { comparisonRows } from '../../data/agency'
import { SectionIntro } from '../Kinetic'
import { Check, X } from 'lucide-react'

const ColumnHead = ({ children, highlight = false }) => (
  <p
    className={`border-b px-4 py-3.5 text-[11px] font-mono uppercase tracking-[0.2em] md:px-6 ${
      highlight
        ? 'border-purple-500/30 bg-purple-500/10 text-purple-300 font-semibold'
        : 'border-white/[0.08] bg-[#121214] text-zinc-400'
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
          <div className="min-w-[640px] rounded-2xl border border-white/[0.08] bg-[#121214] overflow-hidden shadow-2xl">
            <div className="grid grid-cols-[1fr_1.3fr_1fr]">
              <ColumnHead>Factor</ColumnHead>
              <ColumnHead highlight>Frame Cipher (Integrated)</ColumnHead>
              <ColumnHead>Separate Vendors (Fragmented)</ColumnHead>
            </div>
            <div className="divide-y divide-white/[0.06]">
              {comparisonRows.map((row) => (
                <div key={row.aspect} className="grid grid-cols-[1fr_1.3fr_1fr] transition-colors hover:bg-white/[0.02]">
                  <div className="p-4 md:px-6 flex items-center">
                    <p className="text-xs font-mono uppercase tracking-[0.16em] text-purple-400 font-medium">
                      {row.aspect}
                    </p>
                  </div>
                  <div className="border-x border-white/[0.06] bg-purple-500/[0.02] p-4 md:px-6 flex items-center gap-2.5">
                    <span className="flex h-4 w-4 shrink-0 items-center justify-center rounded border border-emerald-500/30 bg-emerald-500/10 text-emerald-400" aria-hidden="true">
                      <Check className="h-2.5 w-2.5 stroke-[3]" />
                    </span>
                    <p className="text-sm font-medium text-white md:text-base leading-snug">{row.us}</p>
                  </div>
                  <div className="p-4 md:px-6 flex items-center gap-2.5">
                    <span className="flex h-4 w-4 shrink-0 items-center justify-center rounded border border-rose-500/30 bg-rose-500/10 text-rose-400" aria-hidden="true">
                      <X className="h-2.5 w-2.5 stroke-[2.5]" />
                    </span>
                    <p className="text-sm leading-relaxed text-zinc-400 md:text-base">{row.them}</p>
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
