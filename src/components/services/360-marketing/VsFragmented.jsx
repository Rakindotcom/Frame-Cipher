import { SectionIntro } from '../../Kinetic'

const comparisons = [
  {
    criteria: 'Accountability & Ownership',
    frameCipher: 'Single accountable partner. If conversion slips, our whole team adjusts creative, media, and landing page together.',
    freelancers: 'Constant blame loop. The ad buyer blames the developer, the developer blames the designer, nobody owns results.',
    traditional: 'Buried under layers of account managers, interns, and slow bureaucratic meetings with zero direct access to specialists.',
  },
  {
    criteria: 'Speed of Execution & Agile Sprints',
    frameCipher: 'Rapid weekly agile sprints. New ad creative, landing page split tests, and video cutdowns go live in 24–48 hours.',
    freelancers: 'Endless scheduling bottlenecks, ghosting, conflicting client priorities, and projects delayed by weeks.',
    traditional: 'Months of committee sign-offs, rigid retainer scopes, and sluggish delivery that misses real-time market trends.',
  },
  {
    criteria: 'Creative & Performance Alignment',
    frameCipher: 'Creative is engineered specifically for ad performance, retention psychology, and actual conversion math.',
    freelancers: 'Designers make "aesthetic" art that wins likes but completely fails to address buyer hesitations or drive sales.',
    traditional: 'Heavy focus on TV-style high-budget branding films that cannot be adapted or measured for digital direct response.',
  },
  {
    criteria: 'Technical Tracking & Attribution',
    frameCipher: 'Full server-side Meta Conversions API (CAPI), sGTM, GA4 custom revenue events, and live Looker dashboards included.',
    freelancers: 'Basic browser pixel code pasted into WordPress with broken events, zero deduplication, and blind spending.',
    traditional: 'Screenshots of Facebook Ads Manager and vanity PDF reports delivered 3 weeks after the month has already ended.',
  },
  {
    criteria: 'Cost & Operational Efficiency',
    frameCipher: 'One predictable, all-inclusive monthly investment covering senior strategists, filmmakers, ad buyers, coders & analysts.',
    freelancers: 'Fragmented invoices that quietly compound into huge costs while consuming 20+ hours of your weekly management time.',
    traditional: 'Expensive monthly retainers plus separate 15–20% agency media markups, billing for every single revision.',
  },
]

export default function VsFragmented() {
  return (
    <section className="px-4 py-24 md:px-8 md:py-32 bg-frame-bg text-frame-fg border-b-2 border-frame-border">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro
          eyebrow="The Comparison"
          title="Frame Cipher 360 vs. The Alternatives."
        >
          See why ambitious founders and marketing leaders in Bangladesh are moving away from managing
          a chaotic mess of disconnected freelancers and traditional advertising agencies.
        </SectionIntro>

        <div className="overflow-x-auto border-2 border-frame-border">
          <table className="w-full min-w-[750px] text-left border-collapse">
            <thead>
              <tr className="border-b-2 border-frame-border bg-neutral-900/80">
                <th className="p-5 font-heading text-sm font-bold uppercase tracking-wider text-frame-muted-fg w-1/4">
                  Growth Factor
                </th>
                <th className="p-5 font-heading text-base font-bold uppercase tracking-wider text-frame-accent border-x-2 border-frame-border bg-frame-accent/10 w-1/3">
                  Frame Cipher 360 Engine
                </th>
                <th className="p-5 font-heading text-sm font-bold uppercase tracking-wider text-frame-muted-fg w-1/5">
                  Hiring 4-5 Freelancers
                </th>
                <th className="p-5 font-heading text-sm font-bold uppercase tracking-wider text-frame-muted-fg w-1/5">
                  Traditional Agency
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-frame-border/60 text-xs md:text-sm">
              {comparisons.map((row) => (
                <tr key={row.criteria} className="hover:bg-neutral-900/30 transition-colors">
                  <td className="p-5 font-heading text-sm font-bold uppercase text-frame-fg">
                    {row.criteria}
                  </td>
                  <td className="p-5 font-semibold text-frame-fg border-x-2 border-frame-border bg-frame-accent/5 leading-relaxed">
                    <span className="inline-block text-frame-accent font-bold mr-2">✓</span>
                    {row.frameCipher}
                  </td>
                  <td className="p-5 text-frame-muted-fg leading-relaxed">
                    <span className="inline-block text-red-400 font-bold mr-2">✕</span>
                    {row.freelancers}
                  </td>
                  <td className="p-5 text-frame-muted-fg leading-relaxed">
                    <span className="inline-block text-amber-400 font-bold mr-2">△</span>
                    {row.traditional}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}
