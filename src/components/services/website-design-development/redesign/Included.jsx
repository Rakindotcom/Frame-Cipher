import { SectionIntro } from '../../../Kinetic'

const includesModules = [
  {
    tag: 'Module 01',
    title: 'Site Audit & Diagnosis',
    intro: 'Every project starts with understanding what is underperforming and why.',
    subhead: 'What We Review:',
    items: [
      'Technical performance and mobile responsiveness',
      'Crawl and indexing issues',
      'Existing website structure',
      'Content quality and organization',
      'User journeys and conversion paths',
      'Existing rankings and organic traffic',
      'Backlinks and important URLs',
      'Analytics and available performance data',
    ],
    outro: 'The audit turns redesign decisions from assumptions into a practical plan.',
  },
  {
    tag: 'Module 02',
    title: 'UX & Information Architecture',
    intro: 'A redesign should make it easier for visitors to find information and complete important actions.',
    subhead: 'We can review and improve:',
    items: [
      'Navigation',
      'Sitemap and page hierarchy',
      'User journeys',
      'Content relationships',
      'Calls to action',
      'Forms and inquiry paths',
      'Product and category structures',
      'Mobile navigation',
    ],
    outro: null,
  },
  {
    tag: 'Module 03',
    title: 'Visual Redesign',
    intro: 'We modernize the visual experience around the needs identified during the audit.',
    subhead: 'This can include:',
    items: [
      'Updated layouts',
      'Typography and visual hierarchy',
      'Brand alignment',
      'UI components',
      'Page templates',
      'Visual consistency',
      'Responsive layouts',
      'Mobile-first interface improvements',
    ],
    outro: 'The objective is not to change everything for the sake of change. The design should solve the problems identified during the discovery stage.',
  },
  {
    tag: 'Module 04',
    title: 'Technical Rebuild & Performance',
    intro: 'When the existing technical foundation is part of the problem, the redesign may require deeper development work.',
    subhead: 'This can include:',
    items: [
      'Platform migration',
      'Frontend redevelopment',
      'Legacy code cleanup',
      'Performance optimization',
      'Responsive implementation',
      'CMS improvements',
      'Third-party integrations',
      'API connections',
      'Technical architecture improvements',
    ],
    outro: null,
  },
  {
    tag: 'Module 05',
    title: 'Testing & Launch',
    intro: 'Before launch, we test the redesigned website across the areas that matter to users and search engines.',
    subhead: 'This can include:',
    items: [
      'Mobile and desktop testing',
      'Cross-browser testing',
      'Forms and conversion actions',
      'Navigation and internal links',
      'Redirects',
      'Tracking',
      'Page speed',
      'Technical SEO',
      'Structured data',
      'Broken links',
      'Indexability',
    ],
    outro: null,
  },
]

export default function Included() {
  return (
    <section className="border-t-2 border-frame-border bg-frame-bg px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro eyebrow="Deliverables & Scope" title="What Your Website Redesign Includes">
          Our redesign work is structured around what the current website actually needs to improve.
        </SectionIntro>

        <div className="grid bg-frame-border gap-px sm:grid-cols-2 lg:grid-cols-3 border-2 border-frame-border">
          {includesModules.map((module, idx) => (
            <div key={idx} className="bg-frame-bg p-7 sm:p-8 md:p-10 flex flex-col justify-between hover:bg-frame-muted/10 transition-colors">
              <div>
                <span className="text-xs font-black uppercase tracking-[0.24em] text-frame-accent">
                  {module.tag}
                </span>
                <h3 className="mt-4 font-heading text-xl sm:text-2xl font-bold uppercase tracking-tight text-frame-fg">
                  {module.title}
                </h3>
                <p className="mt-3 text-sm font-medium leading-relaxed text-frame-muted-fg">
                  {module.intro}
                </p>
                <p className="mt-6 text-xs font-black uppercase tracking-wider text-frame-fg">
                  {module.subhead}
                </p>
                <ul className="mt-4 space-y-2 text-xs sm:text-sm font-medium text-frame-fg">
                  {module.items.map((item, iIdx) => (
                    <li key={iIdx} className="flex items-start gap-2.5">
                      <span className="flex h-4 w-4 shrink-0 items-center justify-center border border-frame-accent font-black text-[10px] text-frame-accent mt-0.5">
                        ✓
                      </span>
                      <span className="leading-snug">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              {module.outro && (
                <p className="mt-6 border-t border-frame-border/80 pt-4 text-xs font-medium italic text-frame-muted-fg">
                  {module.outro}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}