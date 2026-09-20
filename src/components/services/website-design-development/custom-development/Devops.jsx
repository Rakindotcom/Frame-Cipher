import { SectionIntro } from '../../../Kinetic'

const devopsAreas = [
  'Production environment setup',
  'Hosting configuration',
  'Environment variables',
  'Preview environments',
  'CI/CD workflows',
  'Deployment configuration',
  'Error monitoring',
  'Performance monitoring',
  'Application analytics',
  'Production troubleshooting',
  'Release and rollback planning',
]

export default function Devops() {
  return (
    <section className="border-t-2 border-frame-border bg-frame-bg px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro eyebrow="Production Reliability" title="Next.js Deployment, Monitoring &amp; DevOps">
          A completed codebase still needs a reliable path to production. Depending on the project, deployment support can include:
        </SectionIntro>

        <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {devopsAreas.map((dev, idx) => (
            <div key={idx} className="flex items-center gap-2 border border-frame-border/60 bg-frame-bg p-3.5 text-xs sm:text-sm font-medium text-frame-fg">
              <span className="text-frame-accent font-bold">•</span>
              <span>{dev}</span>
            </div>
          ))}
        </div>

        <p className="mt-8 text-xs sm:text-sm text-frame-muted-fg">
          The deployment approach is selected around the application&apos;s architecture, traffic, integrations, operational requirements, and future growth.
        </p>
      </div>
    </section>
  )
}