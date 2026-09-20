import { SectionIntro } from '../../../Kinetic'

const headlessCmsFeatures = [
  'Structured content',
  'Dynamic pages',
  'Case studies',
  'Service content',
  'Location pages',
  'Resource libraries',
  'Editorial workflows',
  'Preview and publishing workflows',
]

export default function HeadlessCms() {
  return (
    <section className="border-t-2 border-frame-border bg-frame-bg px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro eyebrow="Decoupled Content Architecture" title="Next.js with Headless CMS">
          A headless CMS can separate content management from the frontend experience. This can be useful when your content team needs an easy editing system while the website needs a highly customized Next.js frontend. Depending on the project, we can connect Next.js with a suitable headless CMS for:
        </SectionIntro>

        <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-4">
          {headlessCmsFeatures.map((feat, idx) => (
            <div key={idx} className="flex items-center gap-2 border border-frame-border/60 bg-frame-bg p-4 text-xs sm:text-sm font-medium text-frame-fg">
              <span className="text-frame-accent font-bold">✓</span>
              <span>{feat}</span>
            </div>
          ))}
        </div>

        <p className="mt-8 text-xs sm:text-sm text-frame-muted-fg">
          The CMS is selected around the content model, editorial process, integrations, and long-term requirements rather than added simply because it is popular.
        </p>
      </div>
    </section>
  )
}