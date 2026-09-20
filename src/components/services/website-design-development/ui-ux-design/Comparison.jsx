import { SectionIntro } from '../../../Kinetic'

const comparisonRows = [
  {
    uiux: 'Focuses on how users move through a product',
    web: 'Focuses more on presenting a business or brand online',
  },
  {
    uiux: 'Maps user journeys and task flows',
    web: 'Structures website pages and content',
  },
  {
    uiux: 'Common for apps, SaaS, dashboards, and web applications',
    web: 'Common for business, marketing, and informational websites',
  },
  {
    uiux: 'Includes usability and interaction decisions',
    web: 'Focuses more on visual page presentation',
  },
  {
    uiux: 'Often includes prototypes and testing',
    web: 'Often connects directly to website development',
  },
]

export default function Comparison() {
  return (
    <section className="border-t-2 border-frame-border bg-frame-bg px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro eyebrow="Design Disciplines" title="UI/UX Design vs Web Design: What's the Difference?">
          UI/UX design and web design can overlap, but they are not always solving the same problem.
        </SectionIntro>

        <div className="overflow-x-auto border-2 border-frame-border bg-frame-bg shadow-sm">
          <table className="w-full text-left min-w-[640px]">
            <thead className="border-b-2 border-frame-border bg-frame-muted/20">
              <tr>
                <th className="p-5 md:p-7 text-xs md:text-sm font-black uppercase tracking-[0.24em] text-frame-accent w-1/2">UI/UX Design</th>
                <th className="p-5 md:p-7 text-xs md:text-sm font-black uppercase tracking-[0.24em] text-frame-accent w-1/2">Web Design</th>
              </tr>
            </thead>
            <tbody className="divide-y-2 divide-frame-border text-sm md:text-base font-medium">
              {comparisonRows.map((row, idx) => (
                <tr key={idx} className="hover:bg-frame-muted/10 transition-colors">
                  <td className="p-5 md:p-7 text-frame-fg font-semibold leading-relaxed border-r border-frame-border">{row.uiux}</td>
                  <td className="p-5 md:p-7 text-frame-muted-fg leading-relaxed">{row.web}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-8 border-2 border-frame-border bg-frame-muted/10 p-6 md:p-8 space-y-3">
          <p className="text-sm sm:text-base md:text-lg font-medium leading-relaxed text-frame-muted-fg">
            A business website may need both. A SaaS product, dashboard, ecommerce experience, or mobile app often requires deeper UX planning because users perform repeated or more complex tasks.
          </p>
          <p className="text-sm sm:text-base md:text-lg font-bold text-frame-fg leading-relaxed">
            We recommend the appropriate design approach based on what your website or product needs.
          </p>
        </div>
      </div>
    </section>
  )
}