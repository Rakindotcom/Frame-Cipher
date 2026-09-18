import { SectionIntro, PosterButton } from '../../Kinetic'

const pricingTiers = [
  {
    name: "MVP Development",
    price: "৳300,000",
    scope: "Core feature set, single platform, basic backend",
    delivery: "~6–10 weeks",
    featured: false
  },
  {
    name: "Native Android or iOS App",
    price: "৳500,000",
    scope: "One platform, moderate complexity, standard integrations",
    delivery: "~10–14 weeks",
    featured: true
  },
  {
    name: "Cross-Platform App",
    price: "৳600,000",
    scope: "Android + iOS, shared codebase, moderate to full feature set",
    delivery: "~10–16 weeks",
    featured: false
  },
  {
    name: "SaaS / Enterprise App",
    price: "Custom Quote",
    scope: "Multi-user architecture, complex integrations, scalability requirements",
    delivery: "~16–24+ weeks",
    featured: false
  }
]

const approvalCheckpoints = [
  {
    title: "Stage Approvals",
    desc: "Architecture, UI/UX, major functionality, and release-ready builds can be reviewed at agreed project milestones."
  },
  {
    title: "Scope Changes",
    desc: "New features, additional integrations, or major workflow changes outside the agreed scope may affect both cost and timeline."
  },
  {
    title: "Release Support",
    desc: "We can support the production release and help address technical changes requested during store review where included in the project scope."
  },
  {
    title: "Post-Launch Support",
    desc: "Bug fixes, compatibility updates, new features, and ongoing maintenance can continue under an agreed support arrangement."
  }
]

const postLaunchItems = [
  "Bug fixing",
  "OS compatibility updates",
  "Dependency updates",
  "Performance improvements",
  "Security maintenance",
  "Crash and issue monitoring where supported",
  "Store updates",
  "New feature development",
  "API and integration updates",
  "Ongoing technical support"
]

export default function Pricing() {
  return (
    <section id="pricing" className="border-t-2 border-frame-border bg-frame-bg px-4 py-20 md:px-8 md:py-32 scroll-mt-20">
      <div className="mx-auto max-w-[95vw]">
        
        {/* SECTION 1: PRICING AND TIMELINE */}
        <div>
          <SectionIntro
            eyebrow="Investment &amp; Timelines"
            title="App Development Pricing and Timeline"
          >
            App development pricing depends on platform choice, feature complexity, backend requirements, integrations, testing requirements, and long-term scalability needs.
          </SectionIntro>

          {/* CARDS GRID */}
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
                    Typical Delivery: {tier.delivery}
                  </p>
                  <div className="mt-4 border-t border-frame-border/60 pt-4">
                    <p className="text-xs font-bold uppercase tracking-wider text-frame-accent">
                      Typical Scope:
                    </p>
                    <p className="mt-1 text-sm font-medium leading-relaxed text-frame-muted-fg">
                      {tier.scope}
                    </p>
                  </div>
                </div>

                <div className="mt-8 pt-4 border-t border-frame-border/60">
                  <PosterButton href="/contact" variant={tier.featured ? 'accent' : 'outline'} className="w-full text-xs">
                    Request Quote &rarr;
                  </PosterButton>
                </div>
              </div>
            ))}
          </div>

          {/* DETAILED PRICING & TIMELINE TABLE */}
          <div className="mt-12 overflow-x-auto border-2 border-frame-border">
            <table className="w-full text-left text-sm">
              <thead className="border-b-2 border-frame-border bg-frame-muted/50 font-heading text-xs uppercase tracking-wider text-frame-fg">
                <tr>
                  <th className="p-4 border-r-2 border-frame-border">Project Type</th>
                  <th className="p-4 border-r-2 border-frame-border">Starting Price</th>
                  <th className="p-4 border-r-2 border-frame-border">Typical Scope</th>
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
                    <td className="p-4 border-r-2 border-frame-border">
                      {tier.scope}
                    </td>
                    <td className="p-4 font-medium text-frame-fg whitespace-nowrap">
                      {tier.delivery}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* PRICING NOTES */}
          <div className="mt-6 border-2 border-frame-border bg-frame-muted/10 p-6">
            <p className="text-sm md:text-base font-medium leading-relaxed text-frame-muted-fg">
              These are starting references rather than fixed quotes. Final pricing is based on the actual product scope and technical requirements.
            </p>
            <p className="mt-2 text-sm md:text-base font-medium leading-relaxed text-frame-muted-fg">
              A consultation is provided before a paid commitment so the recommended approach, scope, timeline, and estimated cost are clear.
            </p>
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
            <p className="mt-3 max-w-3xl text-sm md:text-base font-medium leading-relaxed text-frame-muted-fg">
              Clear approvals and scope boundaries help keep application development predictable.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
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

          <div className="mt-6 border-t-2 border-frame-border/60 pt-4">
            <p className="text-xs md:text-sm font-semibold uppercase tracking-wider text-frame-accent">
              No development partner can control the final approval decision made by Apple or Google.
            </p>
          </div>
        </div>

        {/* SECTION 3: POST-LAUNCH APP SUPPORT & MAINTENANCE */}
        <div className="mt-28 border-2 border-frame-border bg-frame-bg p-6 md:p-12">
          <div className="mb-8">
            <span className="text-xs font-black uppercase tracking-[0.28em] text-frame-accent">
              Lifecycle Engineering
            </span>
            <h2 className="mt-2 font-heading text-2xl md:text-4xl font-bold uppercase tracking-tight text-frame-fg">
              Post-Launch App Support &amp; Maintenance
            </h2>
            <p className="mt-3 max-w-3xl text-sm md:text-base font-medium leading-relaxed text-frame-muted-fg">
              An application needs attention after launch as operating systems, devices, dependencies, integrations, and user requirements change. Post-launch support can include:
            </p>
          </div>

          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {postLaunchItems.map((item, idx) => (
              <div
                key={idx}
                className="flex items-center gap-3 border-2 border-frame-border bg-frame-muted/10 p-4"
              >
                <span className="h-2 w-2 bg-frame-accent"></span>
                <span className="text-sm font-semibold text-frame-fg">
                  {item}
                </span>
              </div>
            ))}
          </div>

          <div className="mt-6 border-t-2 border-frame-border/60 pt-4">
            <p className="text-sm font-medium leading-relaxed text-frame-muted-fg">
              Routine maintenance and larger development work can be handled under separate scopes depending on the application and support plan.
            </p>
          </div>
        </div>

      </div>
    </section>
  )
}
