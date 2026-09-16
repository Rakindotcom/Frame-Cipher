import { getServiceLandingContent, portfolioProjects } from '../data/agency'
import { CTASection } from '../components/Kinetic'
import {
  ServiceDetailHero,
  ServiceDetailProblemSection,
  ServiceDetailScopeSection,
  ServiceDetailDeliverablesSection,
  ServiceDetailProcessSection,
  ServiceDetailOutputsSection,
  ServiceDetailLocalRelevanceSection,
  ServiceDetailRelatedWorkSection,
  ServiceDetailFAQSection,
} from '../components/services'

export default function ServiceDetailPage({ service }) {
  const landing = getServiceLandingContent(service)
  const relatedProjects = portfolioProjects
    .filter((project) =>
      project.services.some(
        (item) => service.title.includes(item) || item.includes(service.title.split(' ')[0])
      )
    )
    .slice(0, 2)

  const fallbackProjects = relatedProjects.length > 0 ? relatedProjects : portfolioProjects.slice(0, 2)

  return (
    <main className="bg-frame-bg text-frame-fg">
      <ServiceDetailHero service={service} />

      <ServiceDetailProblemSection landing={landing} />

      <ServiceDetailScopeSection service={service} landing={landing} />

      <ServiceDetailDeliverablesSection landing={landing} />

      <ServiceDetailProcessSection landing={landing} />

      <ServiceDetailOutputsSection landing={landing} />

      <ServiceDetailLocalRelevanceSection landing={landing} />

      <ServiceDetailRelatedWorkSection projects={fallbackProjects} />

      <ServiceDetailFAQSection serviceTitle={service.title} faqs={landing.faqs} />

      <CTASection title={`Ready to discuss ${service.title}?`} primaryText={service.cta}>
        Send the brief and Frame Cipher will help you shape the next strategic, creative, technical,
        or performance move.
      </CTASection>
    </main>
  )
}
