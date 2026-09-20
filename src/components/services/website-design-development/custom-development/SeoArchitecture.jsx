import { SectionIntro } from '../../../Kinetic'

const seoFeatures = [
  'Search-friendly URL structures',
  'Page titles and descriptions',
  'Dynamic metadata',
  'Open Graph metadata',
  'Canonical URL handling',
  'XML sitemap configuration',
  'Robots directives',
  'Structured data where appropriate',
  'Semantic HTML',
  'Internal linking',
  'SEO-friendly rendering decisions',
  'Image optimization',
  'Redirect planning during migrations',
]

export default function SeoArchitecture() {
  return (
    <section className="border-t-2 border-frame-border bg-frame-bg px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro eyebrow="Technical Discovery / Organic Acquisition" title="Next.js SEO Architecture">
          SEO should be considered during architecture, especially when organic search is an important acquisition channel. Our Next.js SEO foundation can include:
        </SectionIntro>

        <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {seoFeatures.map((seo, idx) => (
            <div key={idx} className="flex items-center gap-2 border border-frame-border/60 bg-frame-muted/20 p-3.5 text-xs sm:text-sm font-medium text-frame-fg">
              <span className="text-frame-accent font-bold">✓</span>
              <span>{seo}</span>
            </div>
          ))}
        </div>

        <div className="mt-8 border-2 border-frame-border bg-frame-bg p-6 text-xs sm:text-sm text-frame-muted-fg space-y-2 leading-relaxed">
          <p>
            Next.js provides built-in capabilities for metadata and different rendering approaches, which can be used as part of a broader technical SEO strategy.
          </p>
          <p className="italic">
            Technical implementation alone does not guarantee rankings. Content quality, search intent, competition, authority, and ongoing optimization still matter.
          </p>
        </div>
      </div>
    </section>
  )
}