export default function Offerings() {
  const coreServices = [
    {
      tag: 'Service 01',
      title: 'User Research & Flow Mapping',
      intro: 'We identify who is using the product, what they need to accomplish, and where important journeys begin and end.',
      items: [
        'User journey mapping',
        'Audience and persona definition',
        'Task and conversion flow analysis',
        'Competitor and pattern review',
        'Key user goal identification',
      ],
      outro: 'A clear interface starts with a clear understanding of what users need to do.',
    },
    {
      tag: 'Service 02',
      title: 'Wireframing & Information Architecture',
      intro: 'We structure content, navigation, and screen hierarchy before visual design decisions are made.',
      items: [
        'Low-fidelity wireframes',
        'Information architecture',
        'Navigation planning',
        'Content prioritization',
        'Interactive prototypes',
      ],
      outro: 'Solving structural problems at the wireframe stage is easier than rebuilding them after development.',
    },
    {
      tag: 'Service 03',
      title: 'UI Design, Interaction & Visual Systems',
      intro: 'Once the structure is validated, we turn it into a clear and consistent interface designed around real user actions.',
      items: [
        'High-fidelity UI design',
        'Interaction design',
        'Responsive interface design',
        'Design system development',
        'Component and state design',
        'Accessibility-aware design',
      ],
      outro: 'Visual design should make the user\'s next action clearer, not simply make the screen look attractive.',
    },
    {
      tag: 'Service 04',
      title: 'Usability Testing & Validation',
      intro: 'We test important design decisions before development where the project scope allows it, then refine the experience based on what the testing reveals.',
      items: [
        'Prototype usability testing',
        'Heuristic evaluation',
        'Stakeholder review',
        'Analytics or behavior review where available',
        'Post-launch UX review',
        'Iterative refinement',
      ],
      outro: 'The goal is to replace assumptions with structured feedback and evidence wherever possible.',
    },
    {
      tag: 'Service 05',
      title: 'Post-Launch UX Support',
      intro: 'Products continue to change after launch. New features, user feedback, and business goals can create new design requirements.',
      items: [
        'New feature interface design',
        'UX refinements',
        'Design system expansion',
        'User-flow improvements',
        'Periodic UX reviews',
        'Ongoing product design support',
      ],
      outro: 'Post-launch UX support is available as a separate service and can continue as your product evolves.',
    },
  ]

  const auditReviewItems = [
    'Navigation and information architecture',
    'User journeys and important task flows',
    'Mobile usability',
    'Forms, signup, booking, and checkout flows',
    'Content hierarchy',
    'Interface consistency',
    'Interaction patterns and error states',
    'Accessibility considerations',
    'Analytics or user behavior data where available',
  ]

  const productTypes = [
    {
      title: 'Website UI/UX',
      description: 'We design clear navigation, content hierarchy, responsive layouts, lead-generation flows, and conversion-focused journeys for business and marketing websites.',
    },
    {
      title: 'Mobile App UI/UX',
      description: 'We design mobile-first experiences for onboarding, navigation, account management, notifications, repeated tasks, and other app-specific interactions.',
    },
    {
      title: 'SaaS & Dashboard Design',
      description: 'We design complex interfaces for SaaS products, dashboards, analytics systems, admin panels, and products with multiple users, roles, permissions, and recurring workflows.',
    },
    {
      title: 'Ecommerce UX',
      description: 'We structure product discovery, search, filtering, product pages, cart, checkout, payment, account, and post-purchase experiences around a smoother customer journey.',
    },
    {
      title: 'Web Application & Customer Portal Design',
      description: 'We design booking systems, customer portals, marketplaces, internal tools, client dashboards, and other web applications with more complex interactions.',
    },
    {
      title: 'Landing Page UI/UX',
      description: 'We create focused page structures around a specific goal such as lead generation, product promotion, signup, or campaign conversion.',
    },
  ]

  const whyChooseFramecipher = [
    {
      title: 'One In-House Team',
      description: 'Research, wireframing, visual design, testing, and handoff stay coordinated within one team.',
    },
    {
      title: 'Structure Before Visuals',
      description: 'We start with user flow and information architecture instead of jumping directly into colors, decoration, or visual trends.',
    },
    {
      title: 'Development-Aware Design',
      description: 'Our designs consider how the final experience will be implemented, including responsive behavior, component states, interactions, and handoff requirements.',
    },
    {
      title: 'Transparent Review Process',
      description: 'Important stages include review and approval checkpoints so you can confirm the direction before the next phase begins.',
    },
    {
      title: 'Platform-Neutral Recommendations',
      description: 'We recommend the design approach that fits the product rather than forcing every project into the same platform, template, or workflow.',
    },
    {
      title: 'Local & International Experience',
      description: 'Based in Dhaka, we work with businesses in Bangladesh and international markets, adapting the design process around the product, audience, and market requirements.',
    },
  ]

  const deliverables = [
    {
      category: 'Research & UX Structure',
      items: [
        'User research findings',
        'Audience and persona definitions',
        'User journey maps',
        'Task and conversion flows',
        'Information architecture',
      ],
    },
    {
      category: 'Wireframes & Prototypes',
      items: [
        'Low-fidelity wireframes',
        'High-fidelity UI screens',
        'Interactive prototypes',
        'Key interaction states',
        'Responsive layouts',
      ],
    },
    {
      category: 'Design System',
      items: [
        'Reusable components',
        'Typography and spacing rules',
        'Color and style definitions',
        'Buttons, forms, cards, navigation, and other interface patterns',
        'Component states and variations',
      ],
    },
    {
      category: 'Handoff & Documentation',
      items: [
        'Organized Figma files',
        'Design specifications',
        'Export-ready assets',
        'Responsive behavior guidance',
        'Developer notes where required',
        'Design support during implementation',
      ],
    },
  ]

  const developerHandoffItems = [
    'Organized Figma files',
    'Reusable components',
    'Design system references',
    'Typography and spacing rules',
    'Responsive layouts',
    'Hover, focus, active, disabled, loading, and error states',
    'Navigation and interaction flows',
    'Prototype links',
    'Export-ready assets',
    'Development notes and specifications',
  ]

  const comparisonRows = [
    {
      uiux: 'Focuses on how users move through a product',
      web: 'Focuses more on presenting a business or brand online',
    },
    {
      uiux: 'Maps user journeys and task flows',
      web: 'Structures website pages and content',
    },
    {
      uiux: 'Common for apps, SaaS, dashboards, and web applications',
      web: 'Common for business, marketing, and informational websites',
    },
    {
      uiux: 'Includes usability and interaction decisions',
      web: 'Focuses more on visual page presentation',
    },
    {
      uiux: 'Often includes prototypes and testing',
      web: 'Often connects directly to website development',
    },
  ]

  return (
    <div className="bg-frame-bg text-frame-fg">
      {/* SECTION 1: OUR UI/UX DESIGN SERVICES */}
      <section className="px-4 py-16 sm:py-20 md:px-8 md:py-28 border-b-2 border-frame-border">
        <div className="mx-auto max-w-[95vw]">
          <div className="max-w-4xl">
            <span className="text-xs md:text-sm font-black uppercase tracking-[0.28em] text-frame-accent">
              Core Capabilities
            </span>
            <h2 className="mt-3 font-heading text-[clamp(2.2rem,5.8vw,4.8rem)] font-bold uppercase leading-[0.88] tracking-tighter text-frame-fg">
              Our UI/UX Design Services
            </h2>
            <p className="mt-6 text-base sm:text-lg md:text-xl font-medium leading-relaxed text-frame-muted-fg">
              We provide end-to-end UI/UX design services based on your users, business goals, product structure, and technical requirements. We start with the experience and user flow before moving into visual design, so every screen has a clear purpose.
            </p>
          </div>

          <div className="mt-12 grid bg-frame-border gap-px sm:grid-cols-2 lg:grid-cols-3 border-2 border-frame-border">
            {coreServices.map((service, idx) => (
              <div key={idx} className="bg-frame-bg p-7 sm:p-8 md:p-10 flex flex-col justify-between hover:bg-frame-muted/10 transition-colors">
                <div>
                  <span className="text-xs font-black uppercase tracking-[0.24em] text-frame-accent">
                    {service.tag}
                  </span>
                  <h3 className="mt-4 font-heading text-xl sm:text-2xl font-bold uppercase tracking-tight text-frame-fg">
                    {service.title}
                  </h3>
                  <p className="mt-3 text-sm font-medium leading-relaxed text-frame-muted-fg">
                    {service.intro}
                  </p>
                  <p className="mt-6 text-xs font-black uppercase tracking-wider text-frame-fg">
                    What We Do
                  </p>
                  <ul className="mt-3 space-y-2 text-xs sm:text-sm font-medium text-frame-fg">
                    {service.items.map((item, iIdx) => (
                      <li key={iIdx} className="flex items-start gap-2.5">
                        <span className="text-frame-accent font-bold">✓</span>
                        <span className="leading-snug">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                {service.outro && (
                  <p className="mt-6 border-t border-frame-border/80 pt-4 text-xs font-medium italic text-frame-muted-fg">
                    {service.outro}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 2: UX AUDIT & REDESIGN SERVICES */}
      <section className="bg-frame-muted/20 px-4 py-16 sm:py-20 md:px-8 md:py-28 border-b-2 border-frame-border">
        <div className="mx-auto max-w-[95vw]">
          <div className="max-w-4xl">
            <span className="text-xs md:text-sm font-black uppercase tracking-[0.28em] text-frame-accent">
              Diagnostic &amp; Optimization
            </span>
            <h2 className="mt-3 font-heading text-[clamp(2.2rem,5.8vw,4.8rem)] font-bold uppercase leading-[0.88] tracking-tighter text-frame-fg">
              UX Audit &amp; Redesign Services
            </h2>
            <div className="mt-6 space-y-4 text-base sm:text-lg md:text-xl font-medium leading-relaxed text-frame-muted-fg">
              <p>
                You do not always need a completely new website or app. Sometimes the existing experience is the real problem.
              </p>
              <p>
                Our UX audit and redesign service examines how users move through your current product, where friction occurs, and which areas need improvement. We can improve specific journeys or redesign the broader experience based on the condition and goals of the product.
              </p>
            </div>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-2">
            {/* WHAT WE REVIEW */}
            <div className="border-2 border-frame-border bg-frame-bg p-7 sm:p-8 md:p-10">
              <span className="text-xs font-black uppercase tracking-[0.24em] text-frame-accent">
                Evaluation Areas
              </span>
              <h3 className="mt-2 font-heading text-2xl font-bold uppercase tracking-tight text-frame-fg">
                What We Review
              </h3>
              <ul className="mt-6 space-y-2.5 text-xs sm:text-sm font-medium text-frame-fg">
                {auditReviewItems.map((item, idx) => (
                  <li key={idx} className="flex items-center gap-2.5">
                    <span className="text-frame-accent font-bold">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* WHAT YOU RECEIVE */}
            <div className="border-2 border-frame-border bg-frame-bg p-7 sm:p-8 md:p-10 flex flex-col justify-between">
              <div>
                <span className="text-xs font-black uppercase tracking-[0.24em] text-frame-accent">
                  Tangible Deliverables
                </span>
                <h3 className="mt-2 font-heading text-2xl font-bold uppercase tracking-tight text-frame-fg">
                  What You Receive
                </h3>
                <div className="mt-6 space-y-4 text-sm sm:text-base font-medium leading-relaxed text-frame-muted-fg">
                  <p>
                    Depending on the project scope, an audit can include identified UX issues, prioritized recommendations, improved user flows, wireframes, redesigned screens, and a practical roadmap for implementation.
                  </p>
                  <p className="font-bold text-frame-fg">
                    This service is useful for existing business websites, ecommerce stores, SaaS products, dashboards, mobile apps, and web applications that work technically but create unnecessary friction for users.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: UI/UX DESIGN FOR WEBSITES, APPS & DIGITAL PRODUCTS */}
      <section className="bg-frame-bg px-4 py-16 sm:py-20 md:px-8 md:py-28 border-b-2 border-frame-border">
        <div className="mx-auto max-w-[95vw]">
          <div className="max-w-4xl">
            <span className="text-xs md:text-sm font-black uppercase tracking-[0.28em] text-frame-accent">
              Product Categories
            </span>
            <h2 className="mt-3 font-heading text-[clamp(2.2rem,5.8vw,4.8rem)] font-bold uppercase leading-[0.88] tracking-tighter text-frame-fg">
              UI/UX Design for Websites, Apps &amp; Digital Products
            </h2>
            <p className="mt-6 text-base sm:text-lg md:text-xl font-medium leading-relaxed text-frame-muted-fg">
              Different products require different design decisions. We adapt the UX process around what users actually need to accomplish, how often they use the product, and how complex the underlying workflows are.
            </p>
          </div>

          <div className="mt-12 grid bg-frame-border gap-px sm:grid-cols-2 lg:grid-cols-3 border-2 border-frame-border">
            {productTypes.map((prod, idx) => (
              <div key={idx} className="bg-frame-bg p-7 sm:p-8 md:p-10 flex flex-col justify-between hover:bg-frame-muted/10 transition-colors">
                <div>
                  <span className="text-xs font-black uppercase tracking-[0.2em] text-frame-accent">
                    Category 0{idx + 1}
                  </span>
                  <h3 className="mt-4 font-heading text-xl sm:text-2xl font-bold uppercase tracking-tight text-frame-fg">
                    {prod.title}
                  </h3>
                  <p className="mt-4 text-sm sm:text-base font-medium leading-relaxed text-frame-muted-fg">
                    {prod.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4: WHY CHOOSE FRAMECIPHER FOR UI/UX DESIGN */}
      <section className="bg-frame-muted/20 px-4 py-16 sm:py-20 md:px-8 md:py-28 border-b-2 border-frame-border">
        <div className="mx-auto max-w-[95vw]">
          <div className="max-w-4xl">
            <span className="text-xs md:text-sm font-black uppercase tracking-[0.28em] text-frame-accent">
              Agency Advantage
            </span>
            <h2 className="mt-3 font-heading text-[clamp(2.2rem,5.8vw,4.8rem)] font-bold uppercase leading-[0.88] tracking-tighter text-frame-fg">
              Why Choose Framecipher for UI/UX Design
            </h2>
            <p className="mt-6 text-base sm:text-lg md:text-xl font-medium leading-relaxed text-frame-muted-fg">
              We treat UI/UX design as a connected process from research and structure through visual design, validation, and development handoff.
            </p>
          </div>

          <div className="mt-12 grid bg-frame-border gap-px sm:grid-cols-2 lg:grid-cols-3 border-2 border-frame-border">
            {whyChooseFramecipher.map((item, idx) => (
              <div key={idx} className="bg-frame-bg p-7 sm:p-8 md:p-10 flex flex-col justify-between hover:bg-frame-muted/10 transition-colors">
                <div>
                  <span className="text-xs font-black uppercase tracking-[0.2em] text-frame-accent">
                    Advantage 0{idx + 1}
                  </span>
                  <h3 className="mt-4 font-heading text-xl sm:text-2xl font-bold uppercase tracking-tight text-frame-fg">
                    {item.title}
                  </h3>
                  <p className="mt-4 text-sm sm:text-base font-medium leading-relaxed text-frame-muted-fg">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5: WHAT YOU RECEIVE FROM A UI/UX DESIGN PROJECT */}
      <section className="bg-frame-bg px-4 py-16 sm:py-20 md:px-8 md:py-28 border-b-2 border-frame-border">
        <div className="mx-auto max-w-[95vw]">
          <div className="max-w-4xl">
            <span className="text-xs md:text-sm font-black uppercase tracking-[0.28em] text-frame-accent">
              Project Deliverables
            </span>
            <h2 className="mt-3 font-heading text-[clamp(2.2rem,5.8vw,4.8rem)] font-bold uppercase leading-[0.88] tracking-tighter text-frame-fg">
              What You Receive From a UI/UX Design Project
            </h2>
            <p className="mt-6 text-base sm:text-lg md:text-xl font-medium leading-relaxed text-frame-muted-fg">
              The exact deliverables depend on the project scope, but a typical UI/UX engagement can include the design assets and documentation needed to move from an idea or existing product toward development.
            </p>
          </div>

          <div className="mt-12 grid bg-frame-border gap-px sm:grid-cols-2 lg:grid-cols-4 border-2 border-frame-border">
            {deliverables.map((deliv, idx) => (
              <div key={idx} className="bg-frame-bg p-7 sm:p-8 flex flex-col justify-between hover:bg-frame-muted/10 transition-colors">
                <div>
                  <span className="text-xs font-black uppercase tracking-[0.2em] text-frame-accent">
                    Asset Group 0{idx + 1}
                  </span>
                  <h3 className="mt-3 font-heading text-lg sm:text-xl font-bold uppercase tracking-tight text-frame-fg">
                    {deliv.category}
                  </h3>
                  <ul className="mt-6 space-y-2 text-xs sm:text-sm font-medium text-frame-fg">
                    {deliv.items.map((item, iIdx) => (
                      <li key={iIdx} className="flex items-start gap-2">
                        <span className="text-frame-accent font-bold">✓</span>
                        <span className="leading-snug">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 border-2 border-frame-border bg-frame-muted/10 p-6 md:p-8">
            <p className="text-sm sm:text-base font-medium leading-relaxed text-frame-muted-fg">
              The final deliverables are agreed during project scoping so you know what is included before design begins.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 6: DEVELOPER-READY UI/UX HANDOFF */}
      <section className="bg-frame-muted/20 px-4 py-16 sm:py-20 md:px-8 md:py-28 border-b-2 border-frame-border">
        <div className="mx-auto max-w-[95vw]">
          <div className="max-w-4xl">
            <span className="text-xs md:text-sm font-black uppercase tracking-[0.28em] text-frame-accent">
              Engineering Handoff
            </span>
            <h2 className="mt-3 font-heading text-[clamp(2.2rem,5.8vw,4.8rem)] font-bold uppercase leading-[0.88] tracking-tighter text-frame-fg">
              Developer-Ready UI/UX Handoff
            </h2>
            <div className="mt-6 space-y-4 text-base sm:text-lg md:text-xl font-medium leading-relaxed text-frame-muted-fg">
              <p>
                A design file should not leave developers guessing how the product is supposed to work.
              </p>
              <p>
                We organize UI/UX deliverables so developers can understand the structure, states, interactions, and responsive behavior before implementation begins.
              </p>
            </div>
          </div>

          <div className="mt-12 border-2 border-frame-border bg-frame-bg p-7 sm:p-8 md:p-10">
            <h3 className="font-heading text-xl sm:text-2xl font-bold uppercase tracking-tight text-frame-fg mb-6">
              What Developers Can Receive
            </h3>
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {developerHandoffItems.map((item, idx) => (
                <div key={idx} className="flex items-center gap-2.5 border border-frame-border bg-frame-muted/10 p-3.5">
                  <span className="text-frame-accent font-bold">✓</span>
                  <span className="text-xs sm:text-sm font-medium text-frame-fg">{item}</span>
                </div>
              ))}
            </div>

            <div className="mt-8 border-t border-frame-border pt-6 space-y-3 text-sm sm:text-base font-medium text-frame-muted-fg">
              <p>
                Because Framecipher also provides website and application development, we can support the transition from approved design into implementation where required.
              </p>
              <p className="font-bold text-frame-fg">
                The result is a clearer handoff with fewer assumptions between design and development.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 7: UI/UX DESIGN VS WEB DESIGN: WHAT'S THE DIFFERENCE? */}
      <section className="bg-frame-bg px-4 py-16 sm:py-20 md:px-8 md:py-28 border-b-2 border-frame-border">
        <div className="mx-auto max-w-[95vw]">
          <div className="max-w-4xl">
            <span className="text-xs md:text-sm font-black uppercase tracking-[0.28em] text-frame-accent">
              Design Disciplines
            </span>
            <h2 className="mt-3 font-heading text-[clamp(2.2rem,5.8vw,4.8rem)] font-bold uppercase leading-[0.88] tracking-tighter text-frame-fg">
              UI/UX Design vs Web Design: What&apos;s the Difference?
            </h2>
            <p className="mt-6 text-base sm:text-lg md:text-xl font-medium leading-relaxed text-frame-muted-fg">
              UI/UX design and web design can overlap, but they are not always solving the same problem.
            </p>
          </div>

          <div className="mt-12 overflow-x-auto border-2 border-frame-border bg-frame-bg shadow-sm">
            <table className="w-full text-left min-w-[640px]">
              <thead className="border-b-2 border-frame-border bg-frame-muted/20">
                <tr>
                  <th className="p-5 md:p-7 text-xs md:text-sm font-black uppercase tracking-[0.24em] text-frame-accent w-1/2">UI/UX Design</th>
                  <th className="p-5 md:p-7 text-xs md:text-sm font-black uppercase tracking-[0.24em] text-frame-accent w-1/2">Web Design</th>
                </tr>
              </thead>
              <tbody className="divide-y-2 divide-frame-border text-sm md:text-base font-medium">
                {comparisonRows.map((row, idx) => (
                  <tr key={idx} className="hover:bg-frame-muted/10 transition-colors">
                    <td className="p-5 md:p-7 text-frame-fg font-semibold leading-relaxed border-r border-frame-border">{row.uiux}</td>
                    <td className="p-5 md:p-7 text-frame-muted-fg leading-relaxed">{row.web}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-8 border-2 border-frame-border bg-frame-muted/10 p-6 md:p-8 space-y-3">
            <p className="text-sm sm:text-base md:text-lg font-medium leading-relaxed text-frame-muted-fg">
              A business website may need both. A SaaS product, dashboard, ecommerce experience, or mobile app often requires deeper UX planning because users perform repeated or more complex tasks.
            </p>
            <p className="text-sm sm:text-base md:text-lg font-bold text-frame-fg leading-relaxed">
              We recommend the appropriate design approach based on what your website or product needs.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 8: SERVICE AREAS */}
      <section className="bg-frame-muted/20 px-4 py-16 sm:py-20 md:px-8 md:py-28 border-b-2 border-frame-border">
        <div className="mx-auto max-w-[95vw]">
          <div className="max-w-4xl">
            <span className="text-xs md:text-sm font-black uppercase tracking-[0.28em] text-frame-accent">
              Global &amp; Local Focus
            </span>
            <h2 className="mt-3 font-heading text-[clamp(2.2rem,5.8vw,4.8rem)] font-bold uppercase leading-[0.88] tracking-tighter text-frame-fg">
              Service Areas
            </h2>
            <p className="mt-6 text-base sm:text-lg md:text-xl font-medium leading-relaxed text-frame-muted-fg">
              Framecipher is based in Dhaka, Bangladesh, and provides UI/UX design services for businesses across Bangladesh and international markets.
            </p>
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            <div className="border-2 border-frame-border bg-frame-bg p-7 md:p-10">
              <span className="text-xs font-bold uppercase tracking-wider text-frame-accent">International Markets</span>
              <h3 className="mt-2 font-heading text-xl md:text-2xl font-bold text-frame-fg uppercase">Global Projects</h3>
              <p className="mt-4 text-sm sm:text-base font-medium leading-relaxed text-frame-muted-fg">
                We work with businesses targeting markets including the UAE, US, UK, Australia, and Canada, adapting the process around the product, audience, technical requirements, and business goals.
              </p>
            </div>

            <div className="border-2 border-frame-border bg-frame-bg p-7 md:p-10">
              <span className="text-xs font-bold uppercase tracking-wider text-frame-accent">Domestic Engineering</span>
              <h3 className="mt-2 font-heading text-xl md:text-2xl font-bold text-frame-fg uppercase">Bangladesh Businesses</h3>
              <p className="mt-4 text-sm sm:text-base font-medium leading-relaxed text-frame-muted-fg">
                For Bangladesh-based businesses, we also consider responsive and mobile-first requirements from the beginning rather than treating mobile as a final adjustment.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
