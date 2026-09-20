import { SectionIntro } from '../../../Kinetic'

const seoFoundations = [
  {
    title: 'Search-Friendly Website Structure',
    desc: 'We organize pages, navigation, URLs, headings, and content relationships so search engines and visitors can understand the website more easily.',
  },
  {
    title: 'Metadata & Indexing Foundations',
    desc: 'Relevant pages can be configured with appropriate title tags, meta descriptions, indexation settings, XML sitemaps, and other basic technical SEO elements.',
  },
  {
    title: 'Mobile & Performance Considerations',
    desc: 'We build responsive layouts and review loading performance, usability, image handling, and other factors that can affect the experience across devices.',
  },
  {
    title: 'Internal Linking & Content Structure',
    desc: 'Important pages should be connected logically. We consider internal linking opportunities and content hierarchy during development so the website has a stronger foundation for future content and SEO work.',
  },
  {
    title: 'Analytics & Search Tools',
    desc: 'Where included in the project scope, we can set up analytics and search monitoring tools to help you measure traffic, user behavior, and conversions after launch.',
  },
  {
    title: 'Redesign & SEO Preservation',
    desc: 'For redesign projects, we consider existing URLs, valuable content, redirects, rankings, and backlinks before replacing the old structure.',
  },
]

export default function SeoReady() {
  return (
    <section className="border-t-2 border-frame-border bg-frame-muted/20 px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro eyebrow="Built-In Technical Foundations / Long-Term Growth" title="SEO-Ready Business Website Development">
          Your website should give future SEO campaigns a strong technical foundation from the day it launches. We build important on-page and technical elements into the development process instead of treating SEO as something to consider after launch.
        </SectionIntro>

        <div className="grid bg-frame-border gap-px border-2 border-frame-border md:grid-cols-2 lg:grid-cols-3">
          {seoFoundations.map((pillar, idx) => (
            <div key={idx} className="bg-frame-bg p-7 md:p-8 flex flex-col justify-between">
              <div>
                <span className="text-xs font-black uppercase tracking-[0.24em] text-frame-accent">SEO Pillar 0{idx + 1}</span>
                <h3 className="mt-3 font-heading text-lg md:text-xl font-bold uppercase tracking-tight text-frame-fg">
                  {pillar.title}
                </h3>
                <p className="mt-3 text-xs md:text-sm font-medium leading-relaxed text-frame-muted-fg">
                  {pillar.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 border-2 border-frame-border bg-frame-bg p-6">
          <p className="text-xs md:text-sm font-medium leading-relaxed text-frame-muted-fg">
            <strong className="text-frame-fg uppercase tracking-wider">Please Note:</strong> A technically sound website does not guarantee rankings. Search visibility also depends on content quality, competition, authority, technical performance, and ongoing SEO work.
          </p>
        </div>
      </div>
    </section>
  )
}