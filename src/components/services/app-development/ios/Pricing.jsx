import { SectionIntro, PosterButton } from '../../../Kinetic'

const pricingTiers = [
  {
    name: "Simple App / MVP",
    price: "৳320,000",
    timeline: "6–8 weeks",
    featured: false
  },
  {
    name: "Standard App",
    price: "৳520,000",
    timeline: "10–14 weeks",
    featured: true
  },
  {
    name: "Advanced App",
    price: "৳850,000",
    timeline: "14–20 weeks",
    featured: false
  },
  {
    name: "Enterprise App",
    price: "Custom Quote",
    timeline: "20+ weeks",
    featured: false
  }
]

const approvalCheckpoints = [
  {
    title: "Clear Project Scope",
    desc: "Features, supported devices, integrations, revision rounds, and deliverables are defined before development begins."
  },
  {
    title: "Client Approvals",
    desc: "You review important design, functionality, and release milestones before the project moves forward."
  },
  {
    title: "App Store Submission Support",
    desc: "We assist with the technical submission workflow and respond to required development changes within the agreed scope."
  },
  {
    title: "Third-Party Dependencies",
    desc: "Apple Developer accounts, payment providers, APIs, external services, and other third-party requirements may affect launch timing or functionality."
  },
  {
    title: "Post-Launch Responsibility",
    desc: "After launch, ongoing updates, new features, bug fixes, and platform changes can be handled under the agreed support arrangement."
  }
]

const postLaunchItems = [
  {
    title: "Bug Fixes & Technical Support",
    desc: "We can investigate application issues, API problems, crashes, and other technical bugs after release."
  },
  {
    title: "iOS Version Updates",
    desc: "Your application may need updates as Apple releases new platform versions, SDK requirements, or framework changes."
  },
  {
    title: "Feature Enhancements",
    desc: "Add new features, improve existing workflows, and expand the product as your business grows."
  },
  {
    title: "Performance & Security Maintenance",
    desc: "Review application performance, dependencies, integrations, and security-sensitive areas during ongoing maintenance."
  },
  {
    title: "Release Updates",
    desc: "We can prepare, test, and support future production releases within the agreed maintenance or development scope."
  }
]

export default function Pricing() {
  return (
    <section id="pricing" className="border-t-2 border-frame-border bg-frame-bg px-4 py-20 md:px-8 md:py-32 scroll-mt-20">
      <div className="mx-auto max-w-[95vw]">

        {/* SECTION 1: IOS APP DEVELOPMENT PRICING AND TIMELINE */}
        <div>
          <SectionIntro
            eyebrow="Transparent Scope"
            title="iOS App Development Pricing and Timeline"
          >
            The cost of an iOS app depends on its features, number of user roles, integrations, supported devices, backend requirements, and design complexity.
          </SectionIntro>

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
                    Typical Timeline: {tier.timeline}
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

          <div className="mt-12 overflow-x-auto border-2 border-frame-border">
            <table className="w-full text-left text-sm">
              <thead className="border-b-2 border-frame-border bg-frame-muted/50 font-heading text-xs uppercase tracking-wider text-frame-fg">
                <tr>
                  <th className="p-4 border-r-2 border-frame-border w-1/3">Project Type</th>
                  <th className="p-4 border-r-2 border-frame-border w-1/3">Starting Price</th>
                  <th className="p-4 w-1/3">Typical Timeline</th>
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
                    <td className="p-4 font-medium text-frame-fg whitespace-nowrap">
                      {tier.timeline}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-6 border-2 border-frame-border bg-frame-muted/10 p-6 space-y-3">
            <div>
              <h4 className="font-heading text-sm font-bold uppercase text-frame-fg">
                What&apos;s Included
              </h4>
              <p className="mt-1 text-sm font-medium leading-relaxed text-frame-muted-fg">
                Depending on the selected package, your project may include product planning, UI/UX design, native iOS development, API integration, testing, release preparation, and launch support.
              </p>
            </div>
            <div className="border-t border-frame-border/60 pt-3">
              <h4 className="font-heading text-sm font-bold uppercase text-frame-fg">
                Custom Requirements
              </h4>
              <p className="mt-1 text-sm font-medium leading-relaxed text-frame-muted-fg">
                Complex integrations, advanced backend systems, multiple user roles, Apple-platform expansion, third-party services, or ongoing development can change the final cost.
              </p>
              <p className="mt-2 text-sm font-semibold italic text-frame-fg">
                We confirm the final scope, deliverables, timeline, and price before development begins.
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
                App Store review is handled by Apple, so approval cannot be guaranteed by a development agency.
              </p>
              <p>
                Our responsibility is to prepare the application and release materials according to the agreed project scope and applicable Apple requirements.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {approvalCheckpoints.map((item, i) => (
              <div
                key={i}
                className="border-2 border-frame-border bg-frame-muted/10 p-6 transition-colors hover:border-frame-accent"
              >
                <span className="text-xs font-black uppercase tracking-[0.2em] text-frame-accent">
                  Checkpoint 0{i + 1}
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

        {/* SECTION 3: POST-LAUNCH IOS SUPPORT */}
        <div className="mt-28 border-2 border-frame-border bg-frame-bg p-6 md:p-12">
          <div className="mb-8">
            <span className="text-xs font-black uppercase tracking-[0.28em] text-frame-accent">
              Long-Term Maintenance
            </span>
            <h2 className="mt-2 font-heading text-2xl md:text-4xl font-bold uppercase tracking-tight text-frame-fg">
              Post-Launch iOS Support
            </h2>
            <p className="mt-3 max-w-3xl text-sm md:text-base font-medium leading-relaxed text-frame-muted-fg">
              Launching the application is the start of the product lifecycle, not the end.
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
