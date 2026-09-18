import { SectionIntro, PosterButton } from '../../../Kinetic'

const pricingTiers = [
  {
    name: "Simple App (MVP-Level)",
    price: "৳380,000",
    costDrivers: "Core features, limited native modules, basic backend",
    timeline: "7–9 weeks",
    featured: false
  },
  {
    name: "Standard App",
    price: "৳600,000",
    costDrivers: "Moderate feature set, integrations, some native modules",
    timeline: "11–15 weeks",
    featured: true
  },
  {
    name: "Advanced App",
    price: "৳950,000",
    costDrivers: "Complex features, real-time functionality, extensive integrations",
    timeline: "15–20 weeks",
    featured: false
  },
  {
    name: "Enterprise-Scale App",
    price: "Custom Quote",
    costDrivers: "Complex infrastructure, security, integrations, multiple workflows",
    timeline: "20+ weeks",
    featured: false
  }
]

const approvalCheckpoints = [
  {
    title: "Clear Project Scope",
    desc: "Features, supported devices, integrations, revision rounds, and deliverables are agreed before development begins."
  },
  {
    title: "Client Approval",
    desc: "You review important designs, functionality, builds, and release milestones before submission."
  },
  {
    title: "Third-Party Dependencies",
    desc: "Payment providers, APIs, developer accounts, external services, and platform changes can affect functionality or launch timing."
  },
  {
    title: "Review Feedback",
    desc: "If Apple or Google requests development-related changes during review, we can assess and address them within the agreed support scope."
  }
]

const postLaunchItems = [
  {
    title: "Bug Fixes & Technical Support",
    desc: "Investigate crashes, application bugs, API issues, and other technical problems after release."
  },
  {
    title: "Framework Updates",
    desc: "Keep Flutter or React Native dependencies and related application components current as the product evolves."
  },
  {
    title: "Android & iOS Updates",
    desc: "Review compatibility as new operating-system versions and platform requirements are introduced."
  },
  {
    title: "Feature Enhancements",
    desc: "Add new functionality and improve existing workflows as your product grows."
  },
  {
    title: "Performance & Security Maintenance",
    desc: "Review integrations, dependencies, application behavior, and security-sensitive areas during ongoing development."
  },
  {
    title: "Future Releases",
    desc: "Prepare, test, and support new application versions for both platforms based on the agreed maintenance scope."
  }
]

export default function Pricing() {
  return (
    <section id="pricing" className="border-t-2 border-frame-border bg-frame-bg px-4 py-20 md:px-8 md:py-32 scroll-mt-20">
      <div className="mx-auto max-w-[95vw]">

        {/* SECTION 1: CROSS-PLATFORM APP DEVELOPMENT PRICING AND TIMELINE */}
        <div>
          <SectionIntro
            eyebrow="Scope & Investment"
            title="Cross-Platform App Development Pricing and Timeline"
          >
            Cross-platform pricing depends on feature complexity, UI/UX requirements, native module work, backend systems, integrations, supported devices, and testing scope.
          </SectionIntro>

          {/* PRICING TIERS GRID */}
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {pricingTiers.map((tier, i) => (
              <div
                key={i}
                className={`flex flex-col justify-between border-2 p-6 md:p-8 transition-colors ${
                  tier.featured
                    ? 'border-frame-accent bg-frame-accent/5'
                    : 'border-frame-border bg-frame-bg hover:border-frame-border/80'
                }`}
              >
                <div>
                  {tier.featured && (
                    <span className="mb-4 inline-block border border-frame-accent bg-frame-accent/10 px-3 py-1 text-xs font-black uppercase tracking-wider text-frame-accent">
                      Most Requested
                    </span>
                  )}
                  <h3 className="font-heading text-xl md:text-2xl font-bold uppercase tracking-tight text-frame-fg">
                    {tier.name}
                  </h3>
                  <p className="mt-4 font-heading text-2xl md:text-3xl font-black text-frame-accent">
                    {tier.price}
                  </p>
                  <p className="mt-2 text-xs font-bold uppercase tracking-wider text-frame-muted-fg">
                    Typical Delivery: {tier.timeline}
                  </p>
                  <p className="mt-4 text-sm font-medium leading-relaxed text-frame-muted-fg border-t border-frame-border/60 pt-4">
                    {tier.costDrivers}
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-frame-border/60">
                  <PosterButton href="/contact" variant={tier.featured ? 'accent' : 'outline'} className="w-full text-xs">
                    Get Free Consultation &rarr;
                  </PosterButton>
                </div>
              </div>
            ))}
          </div>

          {/* PRICING TABLE */}
          <div className="mt-12 overflow-x-auto border-2 border-frame-border">
            <table className="w-full text-left text-sm">
              <thead className="border-b-2 border-frame-border bg-frame-muted/50 font-heading text-xs uppercase tracking-wider text-frame-fg">
                <tr>
                  <th className="p-4 border-r-2 border-frame-border w-1/4">Project Type</th>
                  <th className="p-4 border-r-2 border-frame-border w-1/4">Starting Price</th>
                  <th className="p-4 border-r-2 border-frame-border w-1/3">What Drives the Cost</th>
                  <th className="p-4">Typical Delivery</th>
                </tr>
              </thead>
              <tbody className="divide-y-2 divide-frame-border text-frame-muted-fg">
                {pricingTiers.map((tier, idx) => (
                  <tr key={idx} className="hover:bg-frame-muted/20 transition-colors">
                    <td className="p-4 font-semibold text-frame-fg border-r-2 border-frame-border">
                      {tier.name}
                    </td>
                    <td className="p-4 font-bold text-frame-accent border-r-2 border-frame-border whitespace-nowrap">
                      {tier.price}
                    </td>
                    <td className="p-4 font-medium text-frame-fg border-r-2 border-frame-border">
                      {tier.costDrivers}
                    </td>
                    <td className="p-4 font-medium text-frame-fg whitespace-nowrap">
                      {tier.timeline}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* SCOPE NOTES: INCLUDED & CUSTOM */}
          <div className="mt-6 border-2 border-frame-border bg-frame-muted/10 p-6 space-y-4">
            <div>
              <h4 className="font-heading text-sm font-bold uppercase text-frame-fg">
                Included at Every Tier
              </h4>
              <p className="mt-1 text-sm font-medium leading-relaxed text-frame-muted-fg">
                Depending on the approved scope, a package can include strategy and consultation, platform-aware UI/UX, Flutter or React Native development, testing, release preparation, and launch support.
              </p>
            </div>
            <div className="border-t border-frame-border/60 pt-4">
              <h4 className="font-heading text-sm font-bold uppercase text-frame-fg">
                Custom Requirements
              </h4>
              <p className="mt-1 text-sm font-medium leading-relaxed text-frame-muted-fg">
                Advanced backend systems, multiple user roles, complex third-party integrations, extensive native functionality, and larger device scopes can change the final project cost.
              </p>
              <p className="mt-2 text-sm font-semibold italic text-frame-fg">
                We confirm the final deliverables, timeline, and price before development begins.
              </p>
            </div>
          </div>
        </div>

        {/* SECTION 2: APPROVALS, SCOPE & RELEASE SUPPORT */}
        <div className="mt-28 border-2 border-frame-border bg-frame-bg p-6 md:p-12">
          <div className="mb-8">
            <span className="text-xs font-black uppercase tracking-[0.28em] text-frame-accent">
              Project Governance
            </span>
            <h2 className="mt-2 font-heading text-2xl md:text-4xl font-bold uppercase tracking-tight text-frame-fg">
              Approvals, Scope &amp; Release Support
            </h2>
            <div className="mt-3 max-w-3xl space-y-2 text-sm md:text-base font-medium leading-relaxed text-frame-muted-fg">
              <p>
                Apple and Google control their respective app review processes, so no development agency can guarantee store approval.
              </p>
              <p>
                Our role is to prepare the application and submission materials according to the agreed project scope and current platform requirements.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {approvalCheckpoints.map((item, i) => (
              <div
                key={i}
                className="border-2 border-frame-border bg-frame-muted/10 p-6 transition-colors hover:border-frame-accent"
              >
                <span className="text-xs font-black uppercase tracking-[0.2em] text-frame-accent">
                  Standard 0{i + 1}
                </span>
                <h3 className="mt-2 font-heading text-lg font-bold uppercase text-frame-fg">
                  {item.title}
                </h3>
                <p className="mt-3 text-xs md:text-sm font-medium leading-relaxed text-frame-muted-fg">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* SECTION 3: POST-LAUNCH CROSS-PLATFORM APP SUPPORT */}
        <div className="mt-28 border-2 border-frame-border bg-frame-bg p-6 md:p-12">
          <div className="mb-8">
            <span className="text-xs font-black uppercase tracking-[0.28em] text-frame-accent">
              Lifecycle &amp; Maintenance
            </span>
            <h2 className="mt-2 font-heading text-2xl md:text-4xl font-bold uppercase tracking-tight text-frame-fg">
              Post-Launch Cross-Platform App Support
            </h2>
            <p className="mt-3 max-w-3xl text-sm md:text-base font-medium leading-relaxed text-frame-muted-fg">
              Launching on both platforms is the beginning of the application&apos;s maintenance cycle.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {postLaunchItems.map((item, idx) => (
              <div
                key={idx}
                className="border-2 border-frame-border bg-frame-muted/10 p-6 transition-colors hover:border-frame-accent"
              >
                <span className="text-xs font-black uppercase tracking-[0.2em] text-frame-accent">
                  Support Area 0{idx + 1}
                </span>
                <h3 className="mt-2 font-heading text-lg font-bold uppercase text-frame-fg">
                  {item.title}
                </h3>
                <p className="mt-3 text-xs md:text-sm font-medium leading-relaxed text-frame-muted-fg">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
