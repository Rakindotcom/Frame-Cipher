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
    frameCipher: 'Rapid weekly agile sprints. New ad creative, landing page split tests, and video cutdowns go live in 24 to 48 hours.',
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
    traditional: 'Expensive monthly retainers plus separate 15 to 20% agency media markups, billing for every single revision.',
  },
]

export default function VsFragmented() {
  return (
    <section className="px-4 py-24 md:px-8 md:py-32 bg-[#09090B] text-[#FAFAFA] border-b border-white/[0.08]">
      <div className="mx-auto max-w-7xl">
        <SectionIntro
          title={
            <>
              Frame Cipher 360 vs.{' '}
              <span className="italic text-frame-accent">The Alternatives.</span>
            </>
          }
        >
          See why ambitious founders and marketing leaders in Bangladesh are moving away from managing
          a chaotic mess of disconnected freelancers and traditional advertising agencies.
        </SectionIntro>

        <div className="overflow-x-auto rounded-xl border border-white/[0.08] bg-[#121214]">
          <table className="w-full min-w-[750px] text-left border-collapse">
            <thead>
              <tr className="border-b border-white/[0.08] bg-[#18181B]">
                <th className="p-5 font-heading text-sm font-medium tracking-tight text-zinc-400 w-1/4">
                  Growth Factor
                </th>
                <th className="p-5 font-heading text-base font-medium tracking-tight text-frame-accent border-x border-white/[0.08] bg-purple-950/20 w-1/3">
                  Frame Cipher 360 Engine
                </th>
                <th className="p-5 font-heading text-sm font-medium tracking-tight text-zinc-400 w-1/5">
                  Hiring 4-5 Freelancers
                </th>
                <th className="p-5 font-heading text-sm font-medium tracking-tight text-zinc-400 w-1/5">
                  Traditional Agency
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/[0.08] text-xs md:text-sm">
              {comparisons.map((row) => (
                <tr key={row.criteria} className="hover:bg-[#151518] transition-colors">
                  <td className="p-5 font-heading text-sm font-medium text-white">
                    {row.criteria}
                  </td>
                  <td className="p-5 font-normal text-white border-x border-white/[0.08] bg-purple-950/10 leading-relaxed">
                    <span className="inline-block text-emerald-400 font-bold mr-2">✓</span>
                    {row.frameCipher}
                  </td>
                  <td className="p-5 text-zinc-400 leading-relaxed">
                    <span className="inline-block text-red-400 font-bold mr-2">✕</span>
                    {row.freelancers}
                  </td>
                  <td className="p-5 text-zinc-400 leading-relaxed">
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
