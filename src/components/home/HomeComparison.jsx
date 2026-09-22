import { comparisonRows } from '../../data/agency'

const ColumnHead = ({ children, highlight = false }) => (
  <p
    className={`border-2 border-frame-border px-4 py-3 text-xs font-black uppercase tracking-[0.22em] md:px-6 md:text-sm ${
      highlight ? 'bg-frame-accent text-frame-accent-fg border-frame-accent' : 'bg-frame-bg text-frame-fg'
    }`}
  >
    {children}
  </p>
)

export default function HomeComparison() {
  return (
    <section className="border-y-2 border-frame-border bg-frame-muted px-4 py-20 md:px-8 md:py-32">
      <div className="mx-auto max-w-[95vw]">
        <div className="mb-12 max-w-4xl">
          <p className="mb-3 text-xs font-black uppercase tracking-[0.28em] text-frame-accent md:text-sm">
            Comparison / One team vs many
          </p>
          <h2 className="font-heading text-[clamp(2.4rem,7vw,6.5rem)] font-bold uppercase leading-[0.85] tracking-tighter text-frame-fg">
            One agency vs five separate vendors.
          </h2>
          <p className="mt-6 max-w-3xl text-base font-medium leading-relaxed text-frame-muted-fg md:text-xl">
            The difference is not the number of services, it is how they are connected. Here is what changes when the whole system lives under one roof.
          </p>
        </div>

        <div className="overflow-x-auto">
          <div className="min-w-[640px]">
            <div className="grid grid-cols-[1fr_1fr_1fr]">
              <ColumnHead>Factor</ColumnHead>
              <ColumnHead highlight>Frame Cipher</ColumnHead>
              <ColumnHead>Separate vendors</ColumnHead>
            </div>
            <div className="grid gap-px bg-frame-border">
              {comparisonRows.map((row) => (
                <div key={row.aspect} className="grid grid-cols-[1fr_1fr_1fr]">
                  <div className="bg-frame-bg p-4 md:px-6">
                    <p className="text-xs font-black uppercase tracking-[0.18em] text-frame-accent md:text-sm">
                      {row.aspect}
                    </p>
                  </div>
                  <div className="bg-frame-bg p-4 md:px-6">
                    <p className="text-sm font-semibold text-frame-fg md:text-base">{row.us}</p>
                  </div>
                  <div className="bg-frame-bg p-4 md:px-6">
                    <p className="text-sm font-medium leading-snug text-frame-muted-fg md:text-base">{row.them}</p>
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