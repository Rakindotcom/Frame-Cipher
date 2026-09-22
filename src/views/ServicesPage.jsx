import {
  getAllServicePages,
  getPillarServices,
  getServiceDisplayName,
  getServiceSummary,
  getSubServicesForPillar,
} from '../data/servicePages'
import {
  ServicesHero,
  ServicesProblemSelector,
  ServicesBusinessGoals,
  ServicesConnectedSystem,
  ServicesCoreCapabilities,
  ServicesAllList,
  ServicesDeliverables,
  ServicesBundles,
  ServicesProcess,
  ServicesIndustries,
  ServicesCaseStudies,
  ServicesWhy,
  ServicesFAQ,
  ServicesCTA,
} from '../components/services'

const allServices = getAllServicePages()
const pillarGroups = getPillarServices().map((pillar) => ({
  pillar,
  name: getServiceDisplayName(pillar),
  summary: getServiceSummary(pillar),
  subServices: getSubServicesForPillar(pillar.slug),
}))

export default function ServicesPage() {
  return (
    <main className="bg-frame-bg text-frame-fg">
      <ServicesHero
        totalServices={allServices.length}
        totalPillars={pillarGroups.length}
        pillarNames={pillarGroups.map((group) => group.name)}
      />

      <ServicesProblemSelector />

      <ServicesBusinessGoals />

      <ServicesConnectedSystem />

      <ServicesCoreCapabilities />

      <ServicesAllList pillarGroups={pillarGroups} />

      <ServicesDeliverables />

      <ServicesBundles />

      <ServicesProcess />

      <ServicesIndustries />

      <ServicesCaseStudies />

      <ServicesWhy />

      <ServicesFAQ />

      <ServicesCTA />
    </main>
  )
}