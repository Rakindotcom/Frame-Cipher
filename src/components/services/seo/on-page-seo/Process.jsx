import { SectionIntro } from '../../../Kinetic'

const steps = [
  {
    number: '01',
    title: 'Page & Search Intent Audit',
    description: 'We analyze target keywords, current page content, what actually ranks for those terms, and the intent behind the query before any recommendation is written.',
  },
  {
    number: '02',
    title: 'Keyword-to-Page Mapping',
    description: 'We decide which important terms belong on which page. This prevents your own URLs from competing for the same query and makes sure each keyword has a clear home.',
  },
  {
    number: '03',
    title: 'Content & Structure Planning',
    description: 'We map the sections a page should cover, the order that makes sense, the headings to use, and the supporting topics to include before any writing begins.',
  },
  {
    number: '04',
    title: 'Implementation',
    description: 'Content, metadata, headings, images, and internal links are updated page by page, with your review and approval at each stage.',
  },
  {
    number: '05',
    title: 'Internal Linking',
    description: 'We connect the optimized page to related content across your website so authority flows to the pages that matter and visitors can keep moving deeper.',
  },
  {
    number: '06',
    title: 'Performance Review',
    description: 'We monitor rankings, click-through rates, impressions, and how the page engages visitors after implementation, using search console and analytics data.',
  },
  {
    number: '07',
    title: 'Ongoing Refinement',
    description: 'Search results, intent, and competitor content keep changing. We refine pages based on real performance data rather than repeating a fixed checklist.',
  },
]

export default function Process() {
  return (
    <section className="border-t-2 border-frame-border bg-frame-muted/30 px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro
          eyebrow="Execution framework"
          title="How We Approach On-Page SEO"
        >
          We work page by page, building each optimization on evidence about the query, the
          results, and the content rather than a generic checklist.
        </SectionIntro>

        <div className="grid gap-px border-2 border-frame-border bg-frame-border sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <div
              key={index}
              className="group relative flex min-h-64 flex-col justify-between bg-frame-bg p-7 transition-colors hover:bg-frame-accent md:p-8"
            >
              <div>
                <span className="font-heading text-4xl font-bold leading-none tracking-tighter text-frame-muted transition-colors duration-200 group-hover:text-frame-accent-fg">
                  {step.number}
                </span>
                <h3 className="mt-5 font-heading text-xl font-bold uppercase tracking-tight text-frame-fg transition-colors duration-200 group-hover:text-frame-accent-fg">
                  {step.title}
                </h3>
                <p className="mt-4 text-sm font-medium leading-relaxed text-frame-muted-fg transition-colors duration-200 group-hover:text-frame-accent-fg/90">
                  {step.description}
                </p>
              </div>
              <span
                aria-hidden="true"
                className="mt-6 inline-flex items-center gap-2 text-xs font-black uppercase tracking-[0.2em] text-frame-accent transition-colors duration-200 group-hover:text-frame-accent-fg"
              >
                Phase 0{index + 1}
              </span>
            </div>
          ))}

          <div className="flex min-h-64 flex-col justify-center bg-frame-accent/10 p-7 md:p-8">
            <span className="text-xs font-black uppercase tracking-[0.24em] text-frame-accent">
              Transparency by default
            </span>
            <p className="mt-4 text-sm font-medium leading-relaxed text-frame-fg/90">
              Every content and structural change is reviewed before it goes live, so nothing is
              published without your visibility into what changed and why.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}