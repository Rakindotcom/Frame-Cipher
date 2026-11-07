import { Check, X } from 'lucide-react'
import { comparisonRows } from '../../data/agency'

const ColumnHead = ({ children, highlight = false }) => (
  <div
    className={`px-5 py-4 text-[11px] md:px-7 ${
      highlight
        ? 'text-frame-accent bg-white/[0.02]'
        : 'text-zinc-400'
    }`}
  >
    {children}
  </div>
)

export default function HomeComparison() {
  return (
    <section className="relative isolate border-b border-white/[0.08] bg-[#09090B] px-4 py-20 text-white md:px-8 md:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 max-w-3xl">
          <h2 className="font-heading text-3xl sm:text-5xl font-semibold leading-[1.05] tracking-tight text-highlighted">
            One agency vs five separate vendors
          </h2>
          <p className="mt-5 max-w-2xl text-base font-normal leading-relaxed text-muted md:text-lg">
            The difference is not the number of services, it is how they are connected. Here is what changes when the whole system lives under one roof.
          </p>
        </div>

        {/* Swipe hint for small viewports per §10.1 */}
        <div className="mb-2 flex items-center justify-end md:hidden">
          <span className="rounded-full border border-white/[0.08] bg-white/[0.03] px-2.5 py-0.5 text-[10px] text-zinc-400">
            ← Swipe to view comparison →
          </span>
        </div>

        {/* Responsive Table Card */}
        <div className="relative overflow-x-auto rounded-xl border border-white/[0.08] bg-[#121214] before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-gradient-to-r before:from-transparent before:via-frame-accent/40 before:to-transparent">
          <div className="min-w-[680px]">
            {/* Table Header */}
            <div className="grid grid-cols-[1fr_1.3fr_1fr] border-b border-white/[0.08] bg-[#18181B]">
              <ColumnHead>Factor</ColumnHead>
              <ColumnHead highlight>Frame Cipher (Integrated)</ColumnHead>
              <ColumnHead>Separate Vendors (Fragmented)</ColumnHead>
            </div>

            {/* Table Body */}
            <div className="divide-y divide-white/[0.08]">
              {comparisonRows.map((row) => (
                <div
                  key={row.aspect}
                  className="grid grid-cols-[1fr_1.3fr_1fr] transition-colors hover:bg-white/[0.02]"
                >
                  <div className="flex items-center p-5 md:px-7">
                    <p className="font-heading text-sm sm:text-base font-semibold text-highlighted">
                      {row.aspect}
                    </p>
                  </div>
                  <div className="flex items-start gap-3 border-x border-white/[0.08] bg-white/[0.01] p-5 md:px-7">
                    <span className="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 mt-0.5" aria-hidden="true">
                      <Check className="h-3 w-3" strokeWidth={2.5} />
                    </span>
                    <p className="text-sm md:text-base font-normal leading-relaxed text-default">
                      <span className="mr-2 font-mono text-xs font-semibold text-emerald-400">Included:</span>
                      {row.us}
                    </p>
                  </div>
                  <div className="flex items-start gap-3 p-5 md:px-7">
                    <span className="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-rose-500/30 bg-rose-500/10 text-rose-400 mt-0.5" aria-hidden="true">
                      <X className="h-3 w-3" strokeWidth={2.5} />
                    </span>
                    <p className="text-sm md:text-base font-normal leading-relaxed text-muted">
                      <span className="mr-2 font-mono text-xs font-semibold text-rose-400/90">Excluded:</span>
                      {row.them}
                    </p>
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
