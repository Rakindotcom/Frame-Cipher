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
  ServicesPillarsGrid,
  ServicesStats,
  ServicesAllList,
  ServicesDeliverables,
  ServicesBundles,
  ServicesProcess,
  ServicesIndustries,
  ServicesCaseStudies,
  ServicesWhy,
  ServicesComparison,
  ServicesEngagementModels,
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
    <main className="service-page services-overview min-h-screen bg-[#09090B] text-[#FAFAFA] overflow-x-hidden">
      <ServicesHero
        totalServices={allServices.length}
        totalPillars={pillarGroups.length}
        pillarNames={pillarGroups.map((group) => group.name)}
      />

      <ServicesStats />

      <ServicesProblemSelector />

      <ServicesBusinessGoals />

      <ServicesConnectedSystem />

      <ServicesCoreCapabilities />

      <ServicesPillarsGrid pillarGroups={pillarGroups} />

      <ServicesAllList pillarGroups={pillarGroups} />

      <ServicesDeliverables />

      <ServicesBundles />

      <ServicesProcess />

      <ServicesIndustries />

      <ServicesCaseStudies />

      <ServicesWhy />

      <ServicesComparison />

      <ServicesEngagementModels />

      <ServicesFAQ />

      <ServicesCTA />
    </main>
  )
}
