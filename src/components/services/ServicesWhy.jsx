import { comparisonRows } from '../../data/agency'
import { Check, X } from 'lucide-react'

const reasons = [
  {
    number: '01',
    title: 'Strategy + execution',
    description: 'Most agencies sell execution. We run strategy first, so every deliverable has a reason.',
  },
  {
    number: '02',
    title: 'Marketing + technology',
    description: 'Brands need marketing and software to grow. We do both under one roof.',
  },
  {
    number: '03',
    title: 'Creative + performance',
    description: 'Content that looks good and performs. Design work is verified against reports, not opinions.',
  },
  {
    number: '04',
    title: 'Flexible engagement',
    description: 'One-off project or full 360 partner; the model changes around the business stage.',
  },
  {
    number: '05',
    title: 'Built around your business',
    description: 'No force-fed packages. Everything is mapped to your goal, audience, and budget.',
  },
]

const ColumnHead = ({ children, highlight = false }) => (
  <div
    className={`px-5 py-4 font-mono text-[11px] uppercase tracking-[1.1px] md:px-7 ${
      highlight ? 'text-frame-accent bg-white/[0.02]' : 'text-zinc-400'
    }`}
  >
    {children}
  </div>
)

export default function ServicesWhy() {
  return (
    <section className="relative isolate border-b border-white/[0.08] bg-[#09090B] px-4 py-20 text-white md:px-8 md:py-28">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mb-14 max-w-4xl">
          <h2 className="font-heading text-3xl sm:text-5xl md:text-6xl font-medium leading-[0.96] tracking-tight text-white">
            One team.{' '}
            <span className="italic text-frame-accent">
              Multiple capabilities.
            </span>
          </h2>
          <p className="mt-5 max-w-3xl text-base font-normal leading-relaxed text-zinc-300 md:text-lg">
            Instead of coordinating five vendors, you get one accountable partner across strategy,
            marketing, creative, media, and technology.
          </p>
        </div>

        {/* 2x3 Architectural Blueprint Matrix */}
        <div className="grid gap-px border border-white/[0.08] bg-white/[0.08] rounded-xl overflow-hidden md:grid-cols-2 lg:grid-cols-3">
          {reasons.map((reason) => (
            <article
              key={reason.number}
              className="group flex min-h-56 flex-col justify-between bg-[#121214] p-7 transition-colors duration-200 hover:bg-[#151518] md:p-8"
            >
              <div className="flex items-start justify-between gap-5">
                <span className="font-mono text-sm font-medium text-zinc-500">
                  /{reason.number}
                </span>
                <span className="inline-flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-[1.1px] px-2.5 py-1 rounded bg-[#18181B] text-frame-accent border border-white/[0.08]">
                  <Check className="h-3 w-3 stroke-[2.5]" />
                  <span>Advantage</span>
                </span>
              </div>
              <div className="mt-6">
                <h3 className="font-heading text-xl sm:text-2xl font-medium tracking-tight text-white transition-colors duration-200 group-hover:text-frame-accent">
                  {reason.title}
                </h3>
                <p className="mt-2.5 text-sm font-normal leading-relaxed text-zinc-400">
                  {reason.description}
                </p>
              </div>
            </article>
          ))}

          {/* 6th Tile: Comparison Summary Card */}
          <div className="flex min-h-56 flex-col justify-center bg-[#18181B] p-7 text-center md:p-8">
            <p className="font-heading text-xl sm:text-2xl font-medium tracking-tight text-white">
              vs. hiring five separate agencies
            </p>
            <p className="mt-3 text-sm sm:text-base font-normal leading-relaxed text-zinc-300">
              One brief, one budget, one point of contact, one accountable outcome.
            </p>
          </div>
        </div>

        {/* Swipe hint for small viewports */}
        <div className="mt-16 mb-2 flex items-center justify-end md:hidden">
          <span className="rounded-full border border-white/[0.08] bg-white/[0.03] px-2.5 py-0.5 font-mono text-[10px] text-zinc-400">
            &larr; Swipe to view comparison &rarr;
          </span>
        </div>

        {/* Master Comparison Table Matching HomeComparison Specification */}
        <div className="overflow-x-auto rounded-xl border border-white/[0.08] bg-[#121214]">
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
                    <p className="font-heading text-sm sm:text-base font-medium tracking-tight text-white">
                      {row.aspect}
                    </p>
                  </div>
                  <div className="flex items-center border-x border-white/[0.08] bg-white/[0.01] p-5 md:px-7">
                    <p className="text-sm md:text-base font-normal leading-relaxed text-zinc-200 flex items-center">
                      <span className="mr-2.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded border border-emerald-500/30 bg-emerald-500/10 text-emerald-400">
                        <Check className="h-3 w-3 stroke-[3]" />
                      </span>
                      <span>{row.us}</span>
                    </p>
                  </div>
                  <div className="flex items-center p-5 md:px-7">
                    <p className="text-sm md:text-base font-normal leading-relaxed text-zinc-400 flex items-center">
                      <span className="mr-2.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded border border-red-500/30 bg-red-500/10 text-red-400">
                        <X className="h-3 w-3 stroke-[2.5]" />
                      </span>
                      <span>{row.them}</span>
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
