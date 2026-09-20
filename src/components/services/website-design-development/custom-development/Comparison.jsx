import { SectionIntro } from '../../../Kinetic'

const comparisonData = [
  {
    requirement: 'Custom application logic',
    nextjs: 'Strong fit',
    wordpress: 'Possible with development',
    platforms: 'More limited for complex logic',
    highlight: 'nextjs',
  },
  {
    requirement: 'Content-driven websites',
    nextjs: 'Strong',
    wordpress: 'Strong',
    platforms: 'Strong for many use cases',
  },
  {
    requirement: 'Visual editing',
    nextjs: 'Depends on CMS setup',
    wordpress: 'Strong with the right setup',
    platforms: 'Strong',
  },
  {
    requirement: 'Complex integrations',
    nextjs: 'Strong',
    wordpress: 'Strong with development',
    platforms: 'Depends on available integrations',
    highlight: 'nextjs',
  },
  {
    requirement: 'SaaS / dashboards',
    nextjs: 'Strong fit',
    wordpress: 'Possible with additional architecture',
    platforms: 'Usually less suitable',
    highlight: 'nextjs',
  },
  {
    requirement: 'Headless architecture',
    nextjs: 'Strong fit',
    wordpress: 'Strong option',
    platforms: 'Depends on platform',
    highlight: 'nextjs',
  },
  {
    requirement: 'Technical flexibility',
    nextjs: 'High',
    wordpress: 'High with development',
    platforms: 'Varies by platform',
    highlight: 'nextjs',
  },
  {
    requirement: 'Platform maintenance',
    nextjs: 'More development responsibility',
    wordpress: 'More ongoing management',
    platforms: 'Lower for many hosted solutions',
  },
  {
    requirement: 'Best fit',
    nextjs: 'Custom websites, applications, SaaS, portals, advanced systems',
    wordpress: 'Content-driven and extensible CMS websites',
    platforms: 'Businesses prioritizing managed editing and faster implementation',
  },
]

export default function Comparison() {
  return (
    <section className="border-t-2 border-frame-border bg-frame-bg px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro eyebrow="Platform Decision Framework" title="Next.js vs WordPress, Webflow &amp; Other Platforms">
          The right technology depends on what your website or application needs to accomplish.
        </SectionIntro>

        <div className="overflow-x-auto border-2 border-frame-border bg-frame-bg shadow-sm">
          <table className="w-full text-left min-w-[720px]">
            <thead className="border-b-2 border-frame-border bg-frame-muted/40">
              <tr>
                <th className="p-5 md:p-6 text-xs md:text-sm font-black uppercase tracking-[0.24em] text-frame-accent">Requirement</th>
                <th className="p-5 md:p-6 text-xs md:text-sm font-black uppercase tracking-[0.24em] text-frame-accent">Next.js</th>
                <th className="p-5 md:p-6 text-xs md:text-sm font-black uppercase tracking-[0.24em] text-frame-accent">WordPress</th>
                <th className="p-5 md:p-6 text-xs md:text-sm font-black uppercase tracking-[0.24em] text-frame-accent">Webflow / Hosted Platforms</th>
              </tr>
            </thead>
            <tbody className="divide-y-2 divide-frame-border text-sm font-medium">
              {comparisonData.map((row, idx) => (
                <tr key={idx} className="hover:bg-frame-muted/20 transition-colors">
                  <td className="p-5 md:p-6 font-bold text-frame-fg">{row.requirement}</td>
                  <td className={`p-5 md:p-6 ${row.highlight === 'nextjs' ? 'font-bold text-frame-accent' : 'text-frame-fg'}`}>
                    {row.nextjs}
                  </td>
                  <td className="p-5 md:p-6 text-frame-muted-fg">{row.wordpress}</td>
                  <td className="p-5 md:p-6 text-frame-muted-fg">{row.platforms}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="mt-8 text-xs sm:text-sm italic text-frame-muted-fg">
          We recommend the platform based on your requirements, budget, internal team, content workflow, integrations, and long-term plans.
        </p>
      </div>
    </section>
  )
}