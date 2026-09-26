import { SectionIntro } from '../../../Kinetic'

const rows = [
  {
    area: 'Brand Strategy',
    badge: 'Foundation',
    defines: 'Positioning, target audience, market differentiation, core values, personality attributes, and messaging direction.',
    purpose: 'Determines what the brand should stand for and how it competes.'
  },
  {
    area: 'Brand Identity',
    badge: 'Visual Expression',
    defines: 'Logo system, color palettes, typography hierarchy, imagery style, iconography, and graphic motifs.',
    purpose: 'Determines how the brand looks across physical and digital environments.'
  },
  {
    area: 'Brand Voice',
    badge: 'Verbal Expression',
    defines: 'Tone of voice, language style, core messaging pillars, vocabulary standards, and formality rules.',
    purpose: 'Determines how the brand sounds and communicates in writing.'
  },
  {
    area: 'Brand Guidelines',
    badge: 'Operational Rules',
    defines: 'Documented specifications, clear space rules, color codes, and visual correct vs incorrect usage examples.',
    purpose: 'Empowers internal teams and external vendors to apply the brand consistently.'
  }
]

export default function BrandComparisonTable() {
  return (
    <section className="border-b-2 border-frame-border bg-frame-bg px-4 py-16 md:px-8 md:py-24">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro
          eyebrow="Architectural Interdependence"
          title="Brand Identity vs. Brand Strategy vs. Brand Guidelines"
        >
          These terms are often conflated, but they describe distinct, interlocking disciplines. A visually stunning identity will still fail if its strategic positioning is undefined or if teams lack documented rules to apply it.
        </SectionIntro>

        <div className="mt-12 overflow-x-auto border-2 border-frame-border bg-frame-bg">
          <table className="w-full text-left">
            <thead className="border-b-2 border-frame-border bg-frame-muted/30">
              <tr>
                <th className="p-4 md:p-6 text-xs md:text-sm font-black uppercase tracking-[0.24em] text-frame-accent">
                  Branding Discipline
                </th>
                <th className="p-4 md:p-6 text-xs md:text-sm font-black uppercase tracking-[0.24em] text-frame-accent">
                  What It Defines
                </th>
                <th className="p-4 md:p-6 text-xs md:text-sm font-black uppercase tracking-[0.24em] text-frame-accent">
                  Main Commercial Purpose
                </th>
              </tr>
            </thead>
            <tbody className="divide-y-2 divide-frame-border text-xs sm:text-sm font-medium">
              {rows.map((row, idx) => (
                <tr key={idx} className="hover:bg-frame-muted/20">
                  <td className="p-4 md:p-6 font-bold uppercase tracking-tight text-frame-fg whitespace-nowrap">
                    <div>
                      <span>{row.area}</span>
                      <span className="block mt-1 font-mono text-[10px] text-frame-accent">
                        {row.badge}
                      </span>
                    </div>
                  </td>
                  <td className="p-4 md:p-6 text-frame-muted-fg leading-relaxed max-w-md">
                    {row.defines}
                  </td>
                  <td className="p-4 md:p-6 font-semibold text-frame-fg leading-relaxed max-w-sm">
                    {row.purpose}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-8 border-2 border-frame-border bg-frame-muted/20 p-6 md:p-8">
          <p className="text-xs sm:text-sm font-medium text-frame-fg leading-relaxed max-w-4xl mx-auto text-center">
            A complete Framecipher branding engagement unifies all four disciplines into one working ecosystem, ensuring your company looks authoritative, speaks with unmistakable distinction, and maintains visual discipline for years to come.
          </p>
        </div>
      </div>
    </section>
  )
}
