import Hero from './Hero'
import Offerings from './Offerings'
import EcommerceMaintenance from './EcommerceMaintenance'
import Takeover from './Takeover'
import EmergencySupport from './EmergencySupport'
import Scope from './Scope'
import Onboarding from './Onboarding'
import WhyChoose from './WhyChoose'
import SupportPriority from './SupportPriority'
import Markets from './Markets'
import Ownership from './Ownership'
import OngoingImprovements from './OngoingImprovements'
import CaseStudyStandards from './CaseStudyStandards'
import Process from './Process'
import Pricing from './Pricing'
import FAQ from './FAQ'
import CTA from './CTA'
import { TypeMarquee } from '../../../Kinetic'
import WebsitePortfolioPreview from '../../../projects/WebsitePortfolioPreview'

const maintenanceKeywords = [
  'Website Maintenance',
  'Security Updates',
  'Tested Backups',
  '24/7 Uptime Monitoring',
  'Core Web Vitals Optimization',
  'Emergency Bug Fixes',
  'Platform-Specific Care',
  'In-House Engineers',
]

export default function WebsiteDesignDevelopmentMaintenanceService() {
  return (
    <main className="service-page bg-frame-bg text-frame-fg min-h-screen">
      <Hero />
      <TypeMarquee items={maintenanceKeywords} slow />

      {/* PORTFOLIO PREVIEW */}
      <WebsitePortfolioPreview
        eyebrow="Case Studies & Real Work"
        title="Website Maintenance Case Studies"
        description="Website maintenance is easier to evaluate when you can see what was actually improved. Our maintenance case studies should show the problem, the work performed, and the verified outcome rather than simply displaying a website screenshot."
        buttonText="Explore Maintenance Projects →"
        buttonHref="/projects#website-work"
      />

      <CaseStudyStandards />
      <Offerings />
      <EcommerceMaintenance />
      <Takeover />
      <EmergencySupport />
      <Scope />
      <Onboarding />
      <WhyChoose />
      <SupportPriority />
      <Markets />
      <Ownership />
      <OngoingImprovements />
      <Process />
      <Pricing />
      <FAQ />
      <CTA />
    </main>
  )
}

export { Hero, Offerings, Process, Pricing, FAQ, CTA }