import Services from './Services'
import ApiTypes from './ApiTypes'
import Integrations from './Integrations'
import ArchitectureDesign from './ArchitectureDesign'
import Security from './Security'
import Reliability from './Reliability'
import PerformanceScalability from './PerformanceScalability'
import Documentation from './Documentation'
import AuditModernization from './AuditModernization'
import TechTooling from './TechTooling'
import UseCases from './UseCases'
import WhyPartner from './WhyPartner'
import WhyChoose from './WhyChoose'
import BangladeshWorldwide from './BangladeshWorldwide'

export default function Offerings() {
  return (
    <section id="offerings" className="border-t-2 border-frame-border bg-frame-bg px-4 py-20 md:px-8 md:py-32 scroll-mt-20">
      <div className="mx-auto max-w-[95vw]">
        <Services />
        <ApiTypes />
        <Integrations />
        <ArchitectureDesign />
        <Security />
        <Reliability />
        <PerformanceScalability />
        <Documentation />
        <AuditModernization />
        <TechTooling />
        <UseCases />
        <WhyPartner />
        <WhyChoose />
        <BangladeshWorldwide />
      </div>
    </section>
  )
}