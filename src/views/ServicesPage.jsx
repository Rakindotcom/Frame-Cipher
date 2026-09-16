import {
  getAllServicePages,
  getPillarServices,
  getServiceDisplayName,
  getServiceSummary,
  getSubServicesForPillar,
} from '../data/servicePages'
import { GrowthOSServices } from '../components/GrowthOS'
import {
  ServicesHero,
  ServicesPillarsGrid,
  ServicesAllList,
  ServicesEngagementModels,
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

      <GrowthOSServices />

      <ServicesPillarsGrid pillarGroups={pillarGroups} />

      <ServicesAllList pillarGroups={pillarGroups} />

      <ServicesEngagementModels />

      <ServicesCTA />
    </main>
  )
}
