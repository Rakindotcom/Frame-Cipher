export default function Offerings() {
  const approachesTable = [
    {
      approach: 'Visual Refresh',
      bestWhen: 'The structure and platform work, but the interface looks dated',
      whatChanges: 'Visual design, styling, typography, imagery, and selected layouts',
    },
    {
      approach: 'UX Redesign',
      bestWhen: 'Visitors struggle with navigation or important actions',
      whatChanges: 'User flows, navigation, layouts, and information architecture',
    },
    {
      approach: 'Structural Redesign',
      bestWhen: 'The website has grown without a clear content structure',
      whatChanges: 'Sitemap, hierarchy, page relationships, and content organization',
    },
    {
      approach: 'Full Rebuild',
      bestWhen: 'Existing code or technology limits performance or functionality',
      whatChanges: 'Design, frontend, backend, and technical foundation',
    },
    {
      approach: 'Platform Migration',
      bestWhen: 'The current CMS or platform is the actual bottleneck',
      whatChanges: 'Platform, content, URLs, integrations, and SEO migration',
    },
  ]

  const rightTeamPoints = [
    {
      title: 'Audit Before Design',
      description: 'We start by understanding the current website instead of immediately creating a new design. Every major redesign decision should have a reason behind it.',
    },
    {
      title: 'One In-House Team',
      description: 'Audit, strategy, design, development, migration, and launch support are handled by one team. This keeps the technical findings and business goals connected throughout the project.',
    },
    {
      title: 'Platform-Neutral Recommendations',
      description: 'We don\'t recommend a platform simply because it\'s the one we prefer. If the existing platform can support the required improvements, we can redesign it. If it is holding the website back, we can recommend a more suitable solution.',
    },
    {
      title: 'SEO-Aware Redesign',
      description: 'Your existing rankings, URLs, content, backlinks, and organic traffic are treated as assets that need protection during the redesign.',
    },
    {
      title: 'Business-Focused Decisions',
      description: 'The goal isn\'t simply to produce a newer-looking website. We focus on usability, conversion paths, performance, search visibility, content management, and the actual goals of the business.',
    },
  ]

  const includesModules = [
    {
      tag: 'Module 01',
      title: 'Site Audit & Diagnosis',
      intro: 'Every project starts with understanding what is underperforming and why.',
      subhead: 'What We Review:',
      items: [
        'Technical performance and mobile responsiveness',
        'Crawl and indexing issues',
        'Existing website structure',
        'Content quality and organization',
        'User journeys and conversion paths',
        'Existing rankings and organic traffic',
        'Backlinks and important URLs',
        'Analytics and available performance data',
      ],
      outro: 'The audit turns redesign decisions from assumptions into a practical plan.',
    },
    {
      tag: 'Module 02',
      title: 'UX & Information Architecture',
      intro: 'A redesign should make it easier for visitors to find information and complete important actions.',
      subhead: 'We can review and improve:',
      items: [
        'Navigation',
        'Sitemap and page hierarchy',
        'User journeys',
        'Content relationships',
        'Calls to action',
        'Forms and inquiry paths',
        'Product and category structures',
        'Mobile navigation',
      ],
      outro: null,
    },
    {
      tag: 'Module 03',
      title: 'Visual Redesign',
      intro: 'We modernize the visual experience around the needs identified during the audit.',
      subhead: 'This can include:',
      items: [
        'Updated layouts',
        'Typography and visual hierarchy',
        'Brand alignment',
        'UI components',
        'Page templates',
        'Visual consistency',
        'Responsive layouts',
        'Mobile-first interface improvements',
      ],
      outro: 'The objective is not to change everything for the sake of change. The design should solve the problems identified during the discovery stage.',
    },
    {
      tag: 'Module 04',
      title: 'Technical Rebuild & Performance',
      intro: 'When the existing technical foundation is part of the problem, the redesign may require deeper development work.',
      subhead: 'This can include:',
      items: [
        'Platform migration',
        'Frontend redevelopment',
        'Legacy code cleanup',
        'Performance optimization',
        'Responsive implementation',
        'CMS improvements',
        'Third-party integrations',
        'API connections',
        'Technical architecture improvements',
      ],
      outro: null,
    },
    {
      tag: 'Module 05',
      title: 'Testing & Launch',
      intro: 'Before launch, we test the redesigned website across the areas that matter to users and search engines.',
      subhead: 'This can include:',
      items: [
        'Mobile and desktop testing',
        'Cross-browser testing',
        'Forms and conversion actions',
        'Navigation and internal links',
        'Redirects',
        'Tracking',
        'Page speed',
        'Technical SEO',
        'Structured data',
        'Broken links',
        'Indexability',
      ],
      outro: null,
    },
  ]

  const nicheTypes = [
    {
      title: 'Business & Corporate Websites',
      description: 'Redesigns focused on credibility, service discovery, lead generation, clear messaging, and stronger paths from visitor to inquiry.',
    },
    {
      title: 'Ecommerce Stores',
      description: 'Redesigns focused on product discovery, category structure, product-page conversion, checkout friction, mobile shopping, catalog organization, and performance.',
    },
    {
      title: 'Blogs & Content Publications',
      description: 'Redesigns focused on content discovery, category architecture, readability, internal linking, search, archive pages, and publishing workflows.',
    },
    {
      title: 'Portfolios & Personal Brands',
      description: 'Redesigns focused on presenting work clearly, improving project discovery, strengthening credibility, and creating a better path to inquiries.',
    },
    {
      title: 'Membership & Community Sites',
      description: 'Redesigns focused on account journeys, member navigation, gated content, dashboards, and outdated functionality.',
    },
    {
      title: 'Directories & Listing Websites',
      description: 'Redesigns focused on search, filtering, taxonomy, structured listings, category navigation, and scalability as listings grow.',
    },
  ]

  const improvements = [
    {
      title: 'Better User Experience',
      description: 'Clearer navigation, stronger information hierarchy, easier interactions, and fewer unnecessary steps help visitors find what they need faster.',
    },
    {
      title: 'Stronger Conversion Paths',
      description: 'Visitors should understand what to do next, whether that means contacting your team, requesting a quote, booking a service, buying a product, or exploring more content.',
    },
    {
      title: 'Faster Performance',
      description: 'The redesign should address the technical causes of slow pages instead of relying only on superficial image or asset compression.',
    },
    {
      title: 'Better Mobile Experience',
      description: 'Important pages, forms, navigation, content, and conversion actions should work properly across smaller screens and different devices.',
    },
    {
      title: 'Stronger SEO Foundations',
      description: 'The new structure should protect valuable SEO assets while creating a cleaner technical and content foundation for future growth.',
    },
    {
      title: 'Easier Content Management',
      description: 'Your team should be able to update important content without fighting an outdated, restrictive, or unnecessarily complicated system.',
    },
    {
      title: 'Better Measurement',
      description: 'Analytics, forms, conversion tracking, and important business events should remain measurable after the redesign so future improvements can be based on real data.',
    },
  ]

  const commonMistakes = [
    {
      title: 'Redesigning Without an Audit',
      description: 'A new design cannot fix problems nobody identified. We audit the existing website before deciding what should change.',
    },
    {
      title: 'Changing URLs Without a Redirect Plan',
      description: 'Changing URLs without mapping their replacements can create broken links and unnecessary loss of search equity.',
    },
    {
      title: 'Removing Valuable Content',
      description: 'Content that looks outdated visually may still generate rankings, traffic, backlinks, or conversions. Content decisions should be based on evidence.',
    },
    {
      title: 'Designing for Desktop First',
      description: 'A polished desktop layout does not guarantee a usable mobile experience. Important interactions need to work across actual screen sizes.',
    },
    {
      title: 'Rebuilding Without Understanding Analytics',
      description: 'Without reviewing existing user behavior, redesign decisions become assumptions rather than evidence-based improvements.',
    },
    {
      title: 'Launching Without Full QA',
      description: 'Broken forms, incorrect canonicals, blocked indexing, missing redirects, tracking failures, and broken links can survive a simple visual review.',
    },
    {
      title: 'Treating Launch as the Finish Line',
      description: 'A redesign still needs monitoring after launch. Search engines need time to process changes, and real users can reveal issues that staging tests may not catch.',
    },
  ]

  const whyFramecipherPillars = [
    {
      title: 'One In-House Team',
      description: 'Audit, strategy, design, development, migration, and launch support are handled by one team. This keeps the business objectives, UX decisions, and technical implementation connected.',
    },
    {
      title: 'Audit Before Design',
      description: 'We don\'t begin with a design file and work backward. We first identify what is actually underperforming so the redesign has a clear purpose.',
    },
    {
      title: 'Platform-Neutral Recommendations',
      description: 'We can work with an existing platform when it is suitable and recommend migration when the platform itself is creating limitations.',
    },
    {
      title: 'Local & International Experience',
      description: 'We work with businesses in Bangladesh and international markets, adapting the redesign to different audiences, requirements, and technical environments.',
    },
    {
      title: 'Transparent Review Process',
      description: 'Major stages include review and approval checkpoints so you can confirm direction before the next stage begins.',
    },
  ]

  return (
    <div className="bg-frame-bg text-frame-fg">
      {/* SECTION 1: REFRESH, REDESIGN, REBUILD OR MIGRATE? */}
      <section className="px-4 py-16 sm:py-20 md:px-8 md:py-28 border-b-2 border-frame-border">
        <div className="mx-auto max-w-[95vw]">
          <div className="max-w-4xl">
            <span className="text-xs md:text-sm font-black uppercase tracking-[0.28em] text-frame-accent">
              Strategic Diagnosis
            </span>
            <h2 className="mt-3 font-heading text-[clamp(2.2rem,5.8vw,4.8rem)] font-bold uppercase leading-[0.88] tracking-tighter text-frame-fg">
              Refresh, Redesign, Rebuild or Migrate?
            </h2>
            <p className="mt-6 text-base sm:text-lg md:text-xl font-medium leading-relaxed text-frame-muted-fg">
              Not every outdated website needs the same level of work. The right approach depends on what the audit finds.
            </p>
          </div>

          <div className="mt-12 overflow-x-auto border-2 border-frame-border bg-frame-bg shadow-sm">
            <table className="w-full text-left min-w-[640px]">
              <thead className="border-b-2 border-frame-border bg-frame-muted/20">
                <tr>
                  <th className="p-5 md:p-7 text-xs md:text-sm font-black uppercase tracking-[0.24em] text-frame-accent">Approach</th>
                  <th className="p-5 md:p-7 text-xs md:text-sm font-black uppercase tracking-[0.24em] text-frame-accent">Best When</th>
                  <th className="p-5 md:p-7 text-xs md:text-sm font-black uppercase tracking-[0.24em] text-frame-accent">What Changes</th>
                </tr>
              </thead>
              <tbody className="divide-y-2 divide-frame-border text-sm md:text-base font-medium">
                {approachesTable.map((row, idx) => (
                  <tr key={idx} className="hover:bg-frame-muted/10 transition-colors">
                    <td className="p-5 md:p-7 font-heading text-base md:text-lg font-bold uppercase text-frame-fg">{row.approach}</td>
                    <td className="p-5 md:p-7 text-sm md:text-base text-frame-muted-fg leading-relaxed">{row.bestWhen}</td>
                    <td className="p-5 md:p-7 text-sm md:text-base text-frame-fg font-medium leading-relaxed">{row.whatChanges}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-10 border-2 border-frame-border bg-frame-muted/10 p-6 md:p-8">
            <h3 className="font-heading text-xl sm:text-2xl font-bold uppercase tracking-tight text-frame-fg">
              Our Recommendation Comes After the Audit
            </h3>
            <div className="mt-4 space-y-3 text-sm sm:text-base md:text-lg font-medium leading-relaxed text-frame-muted-fg max-w-4xl">
              <p>
                We don&apos;t push a full rebuild when a focused redesign can solve the problem.
              </p>
              <p>
                Likewise, we don&apos;t recommend a visual refresh when the underlying platform, structure, or technical foundation is causing the problem.
              </p>
              <p className="font-bold text-frame-fg">
                The objective is not to sell the biggest redesign. It&apos;s to fix the right problems.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: WHY WE'RE THE RIGHT WEBSITE REDESIGN TEAM */}
      <section className="bg-frame-muted/20 px-4 py-16 sm:py-20 md:px-8 md:py-28 border-b-2 border-frame-border">
        <div className="mx-auto max-w-[95vw]">
          <div className="max-w-4xl">
            <span className="text-xs md:text-sm font-black uppercase tracking-[0.28em] text-frame-accent">
              Core Expertise
            </span>
            <h2 className="mt-3 font-heading text-[clamp(2.2rem,5.8vw,4.8rem)] font-bold uppercase leading-[0.88] tracking-tighter text-frame-fg">
              Why We&apos;re the Right Website Redesign Team
            </h2>
            <p className="mt-6 text-base sm:text-lg md:text-xl font-medium leading-relaxed text-frame-muted-fg">
              A successful redesign needs more than a designer and a new visual concept. It needs someone to understand what the existing website is doing, what is failing, and what should happen after the redesign.
            </p>
          </div>

          <div className="mt-12 grid bg-frame-border gap-px sm:grid-cols-2 lg:grid-cols-3 border-2 border-frame-border">
            {rightTeamPoints.map((point, idx) => (
              <div key={idx} className="bg-frame-bg p-7 sm:p-8 md:p-10 flex flex-col justify-between hover:bg-frame-muted/10 transition-colors">
                <div>
                  <span className="text-xs font-black uppercase tracking-[0.2em] text-frame-accent">
                    Advantage 0{idx + 1}
                  </span>
                  <h3 className="mt-4 font-heading text-xl sm:text-2xl font-bold uppercase tracking-tight text-frame-fg">
                    {point.title}
                  </h3>
                  <p className="mt-4 text-sm sm:text-base font-medium leading-relaxed text-frame-muted-fg">
                    {point.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3: WHAT YOUR WEBSITE REDESIGN INCLUDES */}
      <section className="bg-frame-bg px-4 py-16 sm:py-20 md:px-8 md:py-28 border-b-2 border-frame-border">
        <div className="mx-auto max-w-[95vw]">
          <div className="max-w-4xl">
            <span className="text-xs md:text-sm font-black uppercase tracking-[0.28em] text-frame-accent">
              Deliverables &amp; Scope
            </span>
            <h2 className="mt-3 font-heading text-[clamp(2.2rem,5.8vw,4.8rem)] font-bold uppercase leading-[0.88] tracking-tighter text-frame-fg">
              What Your Website Redesign Includes
            </h2>
            <p className="mt-6 text-base sm:text-lg md:text-xl font-medium leading-relaxed text-frame-muted-fg">
              Our redesign work is structured around what the current website actually needs to improve.
            </p>
          </div>

          <div className="mt-12 grid bg-frame-border gap-px sm:grid-cols-2 lg:grid-cols-3 border-2 border-frame-border">
            {includesModules.map((module, idx) => (
              <div key={idx} className="bg-frame-bg p-7 sm:p-8 md:p-10 flex flex-col justify-between hover:bg-frame-muted/10 transition-colors">
                <div>
                  <span className="text-xs font-black uppercase tracking-[0.24em] text-frame-accent">
                    {module.tag}
                  </span>
                  <h3 className="mt-4 font-heading text-xl sm:text-2xl font-bold uppercase tracking-tight text-frame-fg">
                    {module.title}
                  </h3>
                  <p className="mt-3 text-sm font-medium leading-relaxed text-frame-muted-fg">
                    {module.intro}
                  </p>
                  <p className="mt-6 text-xs font-black uppercase tracking-wider text-frame-fg">
                    {module.subhead}
                  </p>
                  <ul className="mt-4 space-y-2 text-xs sm:text-sm font-medium text-frame-fg">
                    {module.items.map((item, iIdx) => (
                      <li key={iIdx} className="flex items-start gap-2.5">
                        <span className="flex h-4 w-4 shrink-0 items-center justify-center border border-frame-accent font-black text-[10px] text-frame-accent mt-0.5">
                          ✓
                        </span>
                        <span className="leading-snug">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                {module.outro && (
                  <p className="mt-6 border-t border-frame-border/80 pt-4 text-xs font-medium italic text-frame-muted-fg">
                    {module.outro}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4: REDESIGN WITHOUT LOSING YOUR SEO EQUITY */}
      <section className="bg-frame-muted/20 px-4 py-16 sm:py-20 md:px-8 md:py-28 border-b-2 border-frame-border">
        <div className="mx-auto max-w-[95vw]">
          <div className="max-w-4xl">
            <span className="text-xs md:text-sm font-black uppercase tracking-[0.28em] text-frame-accent">
              SEO Preservation Protocol
            </span>
            <h2 className="mt-3 font-heading text-[clamp(2.2rem,5.8vw,4.8rem)] font-bold uppercase leading-[0.88] tracking-tighter text-frame-fg">
              Redesign Without Losing Your SEO Equity
            </h2>
            <div className="mt-6 space-y-4 text-base sm:text-lg md:text-xl font-medium leading-relaxed text-frame-muted-fg">
              <p>
                A website redesign can change URLs, content, navigation, templates, internal links, structured data, and technical signals at the same time.
              </p>
              <p>
                That is why SEO needs to be considered before development and checked again after launch.
              </p>
            </div>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-2">
            {/* BEFORE DEVELOPMENT */}
            <div className="border-2 border-frame-border bg-frame-bg p-7 sm:p-8 md:p-10">
              <span className="text-xs font-black uppercase tracking-[0.24em] text-frame-accent">
                Phase 01
              </span>
              <h3 className="mt-2 font-heading text-2xl font-bold uppercase tracking-tight text-frame-fg">
                Before Development
              </h3>
              <div className="mt-6 space-y-6">
                <div>
                  <h4 className="font-heading text-lg font-bold text-frame-fg uppercase">Existing URL Inventory</h4>
                  <p className="mt-2 text-sm font-medium text-frame-muted-fg leading-relaxed">
                    We identify the important URLs on the existing website and determine which should remain, change, consolidate, or be removed.
                  </p>
                </div>
                <div>
                  <h4 className="font-heading text-lg font-bold text-frame-fg uppercase">Ranking &amp; Traffic Baseline</h4>
                  <p className="mt-2 text-sm font-medium text-frame-muted-fg leading-relaxed">
                    We document important organic pages, search visibility, traffic patterns, and other available SEO data before major structural changes begin.
                  </p>
                </div>
                <div>
                  <h4 className="font-heading text-lg font-bold text-frame-fg uppercase">Content Review</h4>
                  <p className="mt-2 text-sm font-medium text-frame-muted-fg leading-relaxed">
                    We identify valuable ranking and conversion content that should be preserved, improved, consolidated, or intentionally retired.
                  </p>
                </div>
              </div>
            </div>

            {/* DURING THE REBUILD */}
            <div className="border-2 border-frame-border bg-frame-bg p-7 sm:p-8 md:p-10">
              <span className="text-xs font-black uppercase tracking-[0.24em] text-frame-accent">
                Phase 02
              </span>
              <h3 className="mt-2 font-heading text-2xl font-bold uppercase tracking-tight text-frame-fg">
                During the Rebuild
              </h3>
              <div className="mt-6 space-y-6">
                <div>
                  <h4 className="font-heading text-lg font-bold text-frame-fg uppercase">Page-Level Redirect Mapping</h4>
                  <p className="mt-2 text-sm font-medium text-frame-muted-fg leading-relaxed">
                    When URLs change, old URLs are mapped to the most relevant new destinations instead of leaving valuable pages to return errors or sending unrelated pages to the homepage.
                  </p>
                </div>
                <div>
                  <h4 className="font-heading text-lg font-bold text-frame-fg uppercase">Metadata &amp; Content Preservation</h4>
                  <p className="mt-2 text-sm font-medium text-frame-muted-fg leading-relaxed">
                    Important titles, descriptions, headings, content, images, and other search-relevant elements are reviewed during migration.
                  </p>
                </div>
                <div>
                  <h4 className="font-heading text-lg font-bold text-frame-fg uppercase">Internal Linking Review</h4>
                  <p className="mt-2 text-sm font-medium text-frame-muted-fg leading-relaxed">
                    New navigation and page structures are checked so important pages remain discoverable and connected.
                  </p>
                </div>
                <div>
                  <h4 className="font-heading text-lg font-bold text-frame-fg uppercase">Canonical &amp; Structured Data Review</h4>
                  <p className="mt-2 text-sm font-medium text-frame-muted-fg leading-relaxed">
                    Canonical URLs, schema, and other technical SEO elements are reviewed as templates and page structures change.
                  </p>
                </div>
              </div>
            </div>

            {/* BEFORE LAUNCH */}
            <div className="border-2 border-frame-border bg-frame-bg p-7 sm:p-8 md:p-10">
              <span className="text-xs font-black uppercase tracking-[0.24em] text-frame-accent">
                Phase 03
              </span>
              <h3 className="mt-2 font-heading text-2xl font-bold uppercase tracking-tight text-frame-fg">
                Before Launch
              </h3>
              <div className="mt-4">
                <h4 className="font-heading text-lg font-bold text-frame-fg uppercase">Pre-Launch SEO QA</h4>
                <p className="mt-2 text-sm font-medium text-frame-muted-fg mb-4">We check:</p>
                <div className="grid grid-cols-2 gap-2 text-xs sm:text-sm font-medium text-frame-fg">
                  {[
                    'Redirects',
                    'Status codes',
                    'Canonicals',
                    'Robots directives',
                    'XML sitemap',
                    'Internal links',
                    'Metadata',
                    'Structured data',
                    'Indexability',
                    'Mobile experience',
                  ].map((chk, cIdx) => (
                    <div key={cIdx} className="flex items-center gap-2">
                      <span className="text-frame-accent font-bold">✓</span>
                      <span>{chk}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* AFTER LAUNCH */}
            <div className="border-2 border-frame-border bg-frame-bg p-7 sm:p-8 md:p-10">
              <span className="text-xs font-black uppercase tracking-[0.24em] text-frame-accent">
                Phase 04
              </span>
              <h3 className="mt-2 font-heading text-2xl font-bold uppercase tracking-tight text-frame-fg">
                After Launch
              </h3>
              <div className="mt-4">
                <h4 className="font-heading text-lg font-bold text-frame-fg uppercase">Post-Launch Monitoring</h4>
                <p className="mt-2 text-sm sm:text-base font-medium text-frame-muted-fg leading-relaxed">
                  We monitor important search and technical signals after launch to identify issues that may appear during the transition.
                </p>
              </div>
              <div className="mt-8 border-t border-frame-border pt-4">
                <p className="text-xs font-medium text-frame-muted-fg italic">
                  Search engines need time to process changes, and post-launch vigilance ensures that unexpected crawl anomalies are addressed instantly.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-10 border-2 border-frame-border bg-frame-bg p-6 md:p-8">
            <p className="text-sm sm:text-base md:text-lg font-medium leading-relaxed text-frame-muted-fg">
              The goal isn&apos;t simply to launch a newer website. It&apos;s to launch a better website without unnecessarily giving up the search visibility, content, and authority the existing website has already earned.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 5: WEBSITE REDESIGN FOR EVERY NICHE AND PURPOSE */}
      <section className="bg-frame-bg px-4 py-16 sm:py-20 md:px-8 md:py-28 border-b-2 border-frame-border">
        <div className="mx-auto max-w-[95vw]">
          <div className="max-w-4xl">
            <span className="text-xs md:text-sm font-black uppercase tracking-[0.28em] text-frame-accent">
              Niche Specialization
            </span>
            <h2 className="mt-3 font-heading text-[clamp(2.2rem,5.8vw,4.8rem)] font-bold uppercase leading-[0.88] tracking-tighter text-frame-fg">
              Website Redesign for Every Niche and Purpose
            </h2>
            <p className="mt-6 text-base sm:text-lg md:text-xl font-medium leading-relaxed text-frame-muted-fg">
              Different websites fail in different ways. A business website may have a weak lead path, while an ecommerce store may have checkout friction or a difficult product structure. A content website may have thousands of pages but poor content discovery. We adapt the redesign around how your website works and what users need to accomplish.
            </p>
          </div>

          <div className="mt-12 grid bg-frame-border gap-px sm:grid-cols-2 lg:grid-cols-3 border-2 border-frame-border">
            {nicheTypes.map((niche, idx) => (
              <div key={idx} className="bg-frame-bg p-7 sm:p-8 md:p-10 flex flex-col justify-between hover:bg-frame-muted/10 transition-colors">
                <div>
                  <span className="text-xs font-black uppercase tracking-[0.2em] text-frame-accent">
                    Niche 0{idx + 1}
                  </span>
                  <h3 className="mt-4 font-heading text-xl sm:text-2xl font-bold uppercase tracking-tight text-frame-fg">
                    {niche.title}
                  </h3>
                  <p className="mt-4 text-sm sm:text-base font-medium leading-relaxed text-frame-muted-fg">
                    {niche.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <p className="mt-8 text-sm sm:text-base font-medium text-frame-muted-fg italic">
            We scope the redesign around what your specific website needs rather than applying the same business-site checklist to every project.
          </p>
        </div>
      </section>

      {/* SECTION 6: WHAT A SUCCESSFUL WEBSITE REDESIGN SHOULD IMPROVE */}
      <section className="bg-frame-muted/20 px-4 py-16 sm:py-20 md:px-8 md:py-28 border-b-2 border-frame-border">
        <div className="mx-auto max-w-[95vw]">
          <div className="max-w-4xl">
            <span className="text-xs md:text-sm font-black uppercase tracking-[0.28em] text-frame-accent">
              Core Outcomes
            </span>
            <h2 className="mt-3 font-heading text-[clamp(2.2rem,5.8vw,4.8rem)] font-bold uppercase leading-[0.88] tracking-tighter text-frame-fg">
              What a Successful Website Redesign Should Improve
            </h2>
            <p className="mt-6 text-base sm:text-lg md:text-xl font-medium leading-relaxed text-frame-muted-fg">
              A redesign should produce more than a newer-looking interface. The finished website should make important parts of the business easier to use, manage, find, and measure.
            </p>
          </div>

          <div className="mt-12 grid bg-frame-border gap-px sm:grid-cols-2 lg:grid-cols-3 border-2 border-frame-border">
            {improvements.map((imp, idx) => (
              <div key={idx} className="bg-frame-bg p-7 sm:p-8 md:p-10 flex flex-col justify-between hover:bg-frame-muted/10 transition-colors">
                <div>
                  <span className="text-xs font-black uppercase tracking-[0.2em] text-frame-accent">
                    Outcome 0{idx + 1}
                  </span>
                  <h3 className="mt-4 font-heading text-xl sm:text-2xl font-bold uppercase tracking-tight text-frame-fg">
                    {imp.title}
                  </h3>
                  <p className="mt-4 text-sm sm:text-base font-medium leading-relaxed text-frame-muted-fg">
                    {imp.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 7: COMMON WEBSITE REDESIGN MISTAKES WE HELP PREVENT */}
      <section className="bg-frame-bg px-4 py-16 sm:py-20 md:px-8 md:py-28 border-b-2 border-frame-border">
        <div className="mx-auto max-w-[95vw]">
          <div className="max-w-4xl">
            <span className="text-xs md:text-sm font-black uppercase tracking-[0.28em] text-frame-accent">
              Risk Mitigation
            </span>
            <h2 className="mt-3 font-heading text-[clamp(2.2rem,5.8vw,4.8rem)] font-bold uppercase leading-[0.88] tracking-tighter text-frame-fg">
              Common Website Redesign Mistakes We Help Prevent
            </h2>
            <p className="mt-6 text-base sm:text-lg md:text-xl font-medium leading-relaxed text-frame-muted-fg">
              A redesign can look successful in a browser while creating serious problems underneath. Many avoidable failures happen when the existing website is treated as disposable instead of as an asset that needs to be understood first.
            </p>
          </div>

          <div className="mt-12 grid bg-frame-border gap-px sm:grid-cols-2 lg:grid-cols-3 border-2 border-frame-border">
            {commonMistakes.map((mistake, idx) => (
              <div key={idx} className="bg-frame-bg p-7 sm:p-8 md:p-10 flex flex-col justify-between hover:bg-frame-muted/10 transition-colors">
                <div>
                  <span className="text-xs font-black uppercase tracking-[0.2em] text-frame-accent">
                    Mistake 0{idx + 1}
                  </span>
                  <h3 className="mt-4 font-heading text-xl sm:text-2xl font-bold uppercase tracking-tight text-frame-fg">
                    {mistake.title}
                  </h3>
                  <p className="mt-4 text-sm sm:text-base font-medium leading-relaxed text-frame-muted-fg">
                    {mistake.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 8: SERVICE AREAS */}
      <section className="bg-frame-muted/20 px-4 py-16 sm:py-20 md:px-8 md:py-28 border-b-2 border-frame-border">
        <div className="mx-auto max-w-[95vw]">
          <div className="max-w-4xl">
            <span className="text-xs md:text-sm font-black uppercase tracking-[0.28em] text-frame-accent">
              Global &amp; Local Reach
            </span>
            <h2 className="mt-3 font-heading text-[clamp(2.2rem,5.8vw,4.8rem)] font-bold uppercase leading-[0.88] tracking-tighter text-frame-fg">
              Service Areas
            </h2>
            <p className="mt-6 text-base sm:text-lg md:text-xl font-medium leading-relaxed text-frame-muted-fg">
              Framecipher is based in Dhaka, Bangladesh, and provides website redesign services for businesses across Bangladesh and international clients.
            </p>
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="border-2 border-frame-border bg-frame-bg p-6">
              <span className="text-xs font-bold uppercase tracking-wider text-frame-accent">Target Markets</span>
              <h3 className="mt-2 font-heading text-xl font-bold text-frame-fg uppercase">Markets We Serve</h3>
              <ul className="mt-4 space-y-2 text-sm font-medium text-frame-muted-fg">
                {['Bangladesh', 'United States', 'United Kingdom', 'Australia', 'Canada', 'United Arab Emirates'].map((m, mIdx) => (
                  <li key={mIdx} className="flex items-center gap-2">
                    <span className="text-frame-accent font-bold">✓</span>
                    <span className="text-frame-fg">{m}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="border-2 border-frame-border bg-frame-bg p-6">
              <span className="text-xs font-bold uppercase tracking-wider text-frame-accent">Domestic Focus</span>
              <h3 className="mt-2 font-heading text-xl font-bold text-frame-fg uppercase">Bangladesh Businesses</h3>
              <p className="mt-4 text-sm font-medium leading-relaxed text-frame-muted-fg">
                For Bangladesh-based businesses, our redesign process can account for mobile-first browsing behavior, local network conditions, bilingual content requirements, local conversion paths, and other market-specific considerations where relevant.
              </p>
            </div>

            <div className="border-2 border-frame-border bg-frame-bg p-6">
              <span className="text-xs font-bold uppercase tracking-wider text-frame-accent">International Standards</span>
              <h3 className="mt-2 font-heading text-xl font-bold text-frame-fg uppercase">Global Projects</h3>
              <p className="mt-4 text-sm font-medium leading-relaxed text-frame-muted-fg">
                For international projects, we adapt the redesign around the target market, audience, technical requirements, and business objectives rather than applying a single-market template.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 9: WHY FRAMECIPHER FOR WEBSITE REDESIGN */}
      <section className="bg-frame-bg px-4 py-16 sm:py-20 md:px-8 md:py-28 border-b-2 border-frame-border">
        <div className="mx-auto max-w-[95vw]">
          <div className="max-w-4xl">
            <span className="text-xs md:text-sm font-black uppercase tracking-[0.28em] text-frame-accent">
              Agency Difference
            </span>
            <h2 className="mt-3 font-heading text-[clamp(2.2rem,5.8vw,4.8rem)] font-bold uppercase leading-[0.88] tracking-tighter text-frame-fg">
              Why Framecipher for Website Redesign
            </h2>
            <p className="mt-6 text-base sm:text-lg md:text-xl font-medium leading-relaxed text-frame-muted-fg">
              We approach every redesign with analytical rigor, in-house technical depth, and complete commitment to protecting your digital equity.
            </p>
          </div>

          <div className="mt-12 grid bg-frame-border gap-px sm:grid-cols-2 lg:grid-cols-3 border-2 border-frame-border">
            {whyFramecipherPillars.map((pillar, idx) => (
              <div key={idx} className="bg-frame-bg p-7 sm:p-8 md:p-10 flex flex-col justify-between hover:bg-frame-muted/10 transition-colors">
                <div>
                  <span className="text-xs font-black uppercase tracking-[0.2em] text-frame-accent">
                    Pillar 0{idx + 1}
                  </span>
                  <h3 className="mt-4 font-heading text-xl sm:text-2xl font-bold uppercase tracking-tight text-frame-fg">
                    {pillar.title}
                  </h3>
                  <p className="mt-4 text-sm sm:text-base font-medium leading-relaxed text-frame-muted-fg">
                    {pillar.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
