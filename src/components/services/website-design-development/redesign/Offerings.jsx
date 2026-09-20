import { SectionIntro } from '../../../Kinetic'

const approachesTable = [
  {
    approach: 'Visual Refresh',
    bestWhen: 'The structure and platform work, but the interface looks dated',
    whatChanges: 'Visual design, styling, typography, imagery, and selected layouts',
  },
  {
    approach: 'UX Redesign',
    bestWhen: 'Visitors struggle with navigation or important actions',
    whatChanges: 'User flows, navigation, layouts, and information architecture',
  },
  {
    approach: 'Structural Redesign',
    bestWhen: 'The website has grown without a clear content structure',
    whatChanges: 'Sitemap, hierarchy, page relationships, and content organization',
  },
  {
    approach: 'Full Rebuild',
    bestWhen: 'Existing code or technology limits performance or functionality',
    whatChanges: 'Design, frontend, backend, and technical foundation',
  },
  {
    approach: 'Platform Migration',
    bestWhen: 'The current CMS or platform is the actual bottleneck',
    whatChanges: 'Platform, content, URLs, integrations, and SEO migration',
  },
]

export default function Offerings() {
  return (
    <section className="border-t-2 border-frame-border bg-frame-bg px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro eyebrow="Strategic Diagnosis" title="Refresh, Redesign, Rebuild or Migrate?" index="11">
          Not every outdated website needs the same level of work. The right approach depends on what the audit finds.
        </SectionIntro>

        <div className="overflow-x-auto border-2 border-frame-border bg-frame-bg shadow-sm">
          <table className="w-full text-left min-w-[640px]">
            <thead className="border-b-2 border-frame-border bg-frame-muted/20">
              <tr>
                <th className="p-5 md:p-7 text-xs md:text-sm font-black uppercase tracking-[0.24em] text-frame-accent">Approach</th>
                <th className="p-5 md:p-7 text-xs md:text-sm font-black uppercase tracking-[0.24em] text-frame-accent">Best When</th>
                <th className="p-5 md:p-7 text-xs md:text-sm font-black uppercase tracking-[0.24em] text-frame-accent">What Changes</th>
              </tr>
            </thead>
            <tbody className="divide-y-2 divide-frame-border text-sm md:text-base font-medium">
              {approachesTable.map((row, idx) => (
                <tr key={idx} className="hover:bg-frame-muted/10 transition-colors">
                  <td className="p-5 md:p-7 font-heading text-base md:text-lg font-bold uppercase text-frame-fg">{row.approach}</td>
                  <td className="p-5 md:p-7 text-sm md:text-base text-frame-muted-fg leading-relaxed">{row.bestWhen}</td>
                  <td className="p-5 md:p-7 text-sm md:text-base text-frame-fg font-medium leading-relaxed">{row.whatChanges}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-10 border-2 border-frame-border bg-frame-muted/10 p-6 md:p-8">
          <h3 className="font-heading text-xl sm:text-2xl font-bold uppercase tracking-tight text-frame-fg">
            Our Recommendation Comes After the Audit
          </h3>
          <div className="mt-4 space-y-3 text-sm sm:text-base md:text-lg font-medium leading-relaxed text-frame-muted-fg max-w-4xl">
            <p>
              We don&apos;t push a full rebuild when a focused redesign can solve the problem.
            </p>
            <p>
              Likewise, we don&apos;t recommend a visual refresh when the underlying platform, structure, or technical foundation is causing the problem.
            </p>
            <p className="font-bold text-frame-fg">
              The objective is not to sell the biggest redesign. It&apos;s to fix the right problems.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}