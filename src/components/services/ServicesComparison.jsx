import { comparisonRows } from '../../data/agency'
import { SectionIntro } from '../Kinetic'

const ColumnHead = ({ children, highlight = false }) => (
  <p
    className={`border-2 border-frame-border px-4 py-3 text-xs font-black uppercase tracking-[0.22em] md:px-6 md:text-sm ${
      highlight ? 'bg-frame-accent text-frame-accent-fg border-frame-accent' : 'bg-frame-bg text-frame-fg'
    }`}
  >
    {children}
  </p>
)

export default function ServicesComparison() {
  return (
    <section className="px-4 py-24 md:px-8 md:py-32">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro eyebrow="Why one firm" title="One agency vs five separate vendors.">
          The difference is not the number of services, it is how they are connected. Here is what
          changes when strategy, creative, web, media, and performance live under one roof.
        </SectionIntro>

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