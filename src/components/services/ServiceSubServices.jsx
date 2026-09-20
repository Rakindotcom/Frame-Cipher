import Link from 'next/link'
import { getServiceDisplayName, getSubServicesForPillar } from '../../data/servicePages'
import { SectionIntro } from '../Kinetic'

export default function ServiceSubServices({ service }) {
  if (!service || service.pageType !== 'Pillar Service') return null

  const subServices = getSubServicesForPillar(service.slug)
  if (!subServices.length) return null

  return (
    <section id="sub-services" className="scroll-mt-24 border-y-2 border-frame-border bg-frame-muted/30 px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro eyebrow="Explore the services" title={`Choose the right ${getServiceDisplayName(service)} service.`}>
          Start with the focused capability that matches your immediate goal, or combine several services into one coordinated engagement.
        </SectionIntro>
        <div className={`grid gap-px border-2 border-frame-border bg-frame-border sm:grid-cols-2 ${subServices.length % 4 === 0 && subServices.length <= 8 ? 'lg:grid-cols-4' : 'lg:grid-cols-3'}`}>
          {subServices.map((subService, index) => (
            <Link key={subService.slug} href={subService.fullPath} className="group min-h-48 bg-frame-bg p-6 transition-colors hover:bg-frame-accent md:p-7">
              <div className="flex items-center justify-between">
                <span className="font-heading text-4xl font-bold leading-none tracking-tighter text-frame-muted transition-colors group-hover:text-frame-accent-fg">{String(index + 1).padStart(2, '0')}</span>
                <span className="text-lg text-frame-accent transition-transform group-hover:translate-x-1 group-hover:text-frame-accent-fg">&rarr;</span>
              </div>
              <h3 className="mt-8 font-heading text-xl font-bold uppercase leading-tight tracking-tighter text-frame-fg transition-colors group-hover:text-frame-accent-fg md:text-2xl">{getServiceDisplayName(subService)}</h3>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
