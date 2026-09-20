import { SectionIntro } from '../../../Kinetic'

const performanceAreas = [
  'Rendering strategy',
  'Server and client component boundaries',
  'JavaScript bundle size',
  'Image and asset delivery',
  'Data fetching',
  'Caching and revalidation',
  'API response efficiency',
  'Code splitting',
  'Lazy loading',
  'Mobile performance',
  'Core Web Vitals',
]

export default function Performance() {
  return (
    <section className="border-t-2 border-frame-border bg-frame-bg px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro eyebrow="Engineering Excellence" title="Next.js Performance &amp; Core Web Vitals">
          Performance should be considered during development rather than patched after launch. We focus on the parts of the application that can affect real user experience, including:
        </SectionIntro>

        <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {performanceAreas.map((area, idx) => (
            <div key={idx} className="flex items-center gap-2 border border-frame-border/60 bg-frame-bg p-3.5 text-xs sm:text-sm font-medium text-frame-fg">
              <span className="text-frame-accent font-bold">•</span>
              <span>{area}</span>
            </div>
          ))}
        </div>

        <p className="mt-8 text-xs sm:text-sm text-frame-muted-fg leading-relaxed">
          Next.js supports different rendering approaches for different use cases, such as static and dynamic rendering. The right choice depends on whether content is shared, personalized, frequently changing, or data-driven. We focus on measured improvements rather than promising an arbitrary performance score for every project.
        </p>
      </div>
    </section>
  )
}