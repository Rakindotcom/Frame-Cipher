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
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium leading-[0.96] tracking-tight text-white">
            One agency vs{' '}
            <span className="italic text-frame-accent">
              five separate vendors.
            </span>
          </h2>
          <p className="mt-6 text-base font-normal leading-relaxed text-zinc-300 md:text-lg">
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
                    <p className="font-heading text-sm sm:text-base font-medium text-white">
                      {row.aspect}
                    </p>
                  </div>
                  <div className="flex items-center border-x border-white/[0.08] bg-white/[0.01] p-5 md:px-7">
                    <p className="text-sm md:text-base font-normal leading-relaxed text-zinc-200">
                      <span className="mr-2.5 text-xs font-medium text-emerald-400">Included</span>
                      {row.us}
                    </p>
                  </div>
                  <div className="flex items-center p-5 md:px-7">
                    <p className="text-sm md:text-base font-normal leading-relaxed text-zinc-400">
                      <span className="mr-2.5 text-xs font-medium text-red-400/80">Not included</span>
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
