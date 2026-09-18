export default function Offerings() {
  const platforms = [
    {
      title: 'WordPress Maintenance',
      description: 'WordPress maintenance can include core, plugin, and theme updates, security checks, malware monitoring, backup verification, performance reviews, and compatibility checks.',
    },
    {
      title: 'WooCommerce Maintenance',
      description: 'WooCommerce stores need additional attention around products, checkout, payments, orders, inventory, shipping, and connected plugins or services.',
    },
    {
      title: 'Shopify Maintenance',
      description: 'Shopify maintenance can include app and theme checks, product and content updates, payment-related monitoring, integration checks, and storefront improvements within the platform.',
    },
    {
      title: 'Wix Maintenance',
      description: 'Wix maintenance can include content updates, responsive checks, forms, bookings, connected apps, ecommerce functions, and ongoing troubleshooting within the Wix environment.',
    },
    {
      title: 'Webflow Maintenance',
      description: 'Webflow maintenance can include CMS content updates, page changes, forms, integrations, responsive adjustments, and ongoing site checks.',
    },
    {
      title: 'Magento Maintenance',
      description: 'Magento stores require more specialized maintenance around platform updates, extensions, security, performance, ecommerce functionality, and integrations.',
    },
    {
      title: 'Custom / Next.js Maintenance',
      description: 'Custom applications need active technical maintenance rather than simple CMS updates. Depending on the application, support can include dependency updates, API monitoring, security improvements, deployment support, performance monitoring, bug fixes, and ongoing feature development.',
    },
  ]

  const ecommerceChecklist = [
    'Product and category updates',
    'Product image and content changes',
    'Checkout testing',
    'Payment gateway checks',
    'Order-flow monitoring',
    'Inventory and catalog checks',
    'Shipping integration checks',
    'Coupon and promotion functionality',
    'Form and notification checks',
    'Analytics and conversion tracking',
    'Performance monitoring during campaigns and traffic spikes',
    'Plugin, app, theme, or dependency compatibility checks',
  ]

  const takeoverChecklist = [
    'Platform and technology stack',
    'Website access',
    'Hosting and domain setup',
    'Existing backups',
    'Security status',
    'Update backlog',
    'Plugin, app, or dependency issues',
    'Performance concerns',
    'Important integrations',
    'Known bugs',
    'Critical website functions',
  ]

  const emergencyTriggers = [
    'The website goes offline',
    'A critical update breaks the site',
    'A checkout stops working',
    'Forms stop submitting',
    'A key integration fails',
    'Malware or suspicious activity is detected',
    'Important website data needs to be restored',
    'A major technical error affects visitors or customers',
  ]

  const includedItems = [
    'Security and software updates',
    'Backup management',
    'Backup verification',
    'Uptime monitoring',
    'Performance checks',
    'Malware and vulnerability checks',
    'Minor content updates',
    'Minor functionality fixes',
    'Integration checks',
    'Broken-link and error checks',
    'Routine technical support',
    'Maintenance reporting',
  ]

  const separateProjectItems = [
    'Full website redesigns',
    'New website development',
    'Major new features',
    'Large application development',
    'Major ecommerce changes',
    'New complex integrations',
    'Platform migrations',
    'Full SEO campaigns',
    'Content writing',
    'Branding or graphic design projects',
    'Large content migrations',
  ]

  const onboardingSteps = [
    {
      number: '01',
      title: 'Access & Technology Review',
      description: 'We confirm access to the website, hosting, domain, analytics, relevant third-party services, and other systems required for maintenance.',
    },
    {
      number: '02',
      title: 'Security & Update Review',
      description: 'We check the current update status, known vulnerabilities, outdated dependencies, security configuration, and existing technical issues.',
    },
    {
      number: '03',
      title: 'Backup Baseline',
      description: 'We review the current backup setup and establish a reliable backup and recovery process appropriate for the website.',
    },
    {
      number: '04',
      title: 'Performance & Uptime Baseline',
      description: 'We review website availability, performance, important pages, and critical user journeys so future changes can be compared against a known starting point.',
    },
    {
      number: '05',
      title: 'Critical Function Review',
      description: 'For ecommerce and lead-generation websites, we identify important functions such as forms, checkout, payments, bookings, CRM connections, and other business-critical integrations.',
    },
    {
      number: '06',
      title: 'Maintenance Plan',
      description: 'We turn the assessment into a practical maintenance scope covering update frequency, backup requirements, monitoring, support, content work, reporting, and response priorities.',
    },
  ]

  const whyFramecipherPillars = [
    {
      title: 'One In-House Team',
      description: 'Security, updates, backups, monitoring, content support, and technical maintenance stay coordinated within one team.',
    },
    {
      title: 'Platform-Specific Maintenance',
      description: 'We adapt maintenance to the actual platform and website type rather than applying one generic checklist to every site.',
    },
    {
      title: 'Proactive Monitoring',
      description: 'The goal is to identify issues before they become customer-facing problems wherever monitoring can detect them.',
    },
    {
      title: 'Tested Backup & Recovery Approach',
      description: 'Backups are treated as part of a recovery process, not simply as files stored somewhere in the background.',
    },
    {
      title: 'Transparent Reporting',
      description: 'You receive clear information about completed maintenance work, detected issues, and recommended next steps.',
    },
    {
      title: 'Direct Team Access',
      description: 'You work with a team that already understands your website instead of repeatedly explaining the same setup to a new support contact.',
    },
    {
      title: 'Platform-Neutral Recommendations',
      description: 'When a website has outgrown its existing platform, we can recommend redesign, migration, or custom development rather than forcing every problem into a maintenance plan.',
    },
  ]

  const supportTiers = [
    {
      tier: 'Standard Requests',
      description: 'Routine content updates, small changes, maintenance tasks, and non-critical issues are handled according to the plan\'s normal support process.',
    },
    {
      tier: 'Priority Issues',
      description: 'Problems affecting important website functionality, forms, integrations, or customer experiences receive higher priority where the selected plan provides it.',
    },
    {
      tier: 'Critical Incidents',
      description: 'Major downtime, critical checkout failures, serious security incidents, or other business-critical problems are handled through the emergency response process available under the applicable plan.',
    },
  ]

  const documentationItems = [
    'Website and hosting access',
    'Domain management',
    'CMS or application access',
    'Analytics and tracking',
    'Important integrations',
    'Backup and recovery procedures',
    'Maintenance scope',
    'Technical notes',
    'Third-party accounts',
  ]

  const ongoingImprovements = [
    'Performance optimization',
    'UX improvements',
    'Conversion-focused changes',
    'New landing pages',
    'Small functionality enhancements',
    'Integration improvements',
    'Technical SEO fixes',
    'Ecommerce improvements',
    'Security hardening',
    'New features through separate development scope',
  ]

  return (
    <div className="bg-frame-bg text-frame-fg">
      {/* SECTION 1: PLATFORM-SPECIFIC WEBSITE MAINTENANCE */}
      <section className="px-4 py-16 sm:py-20 md:px-8 md:py-28 border-b-2 border-frame-border">
        <div className="mx-auto max-w-[95vw]">
          <div className="max-w-4xl">
            <span className="text-xs md:text-sm font-black uppercase tracking-[0.28em] text-frame-accent">
              Platform Engineering
            </span>
            <h2 className="mt-3 font-heading text-[clamp(2.2rem,5.8vw,4.8rem)] font-bold uppercase leading-[0.88] tracking-tighter text-frame-fg">
              Platform-Specific Website Maintenance
            </h2>
            <p className="mt-6 text-base sm:text-lg md:text-xl font-medium leading-relaxed text-frame-muted-fg">
              Different platforms have different update cycles, dependencies, security concerns, and maintenance requirements. We tailor ongoing care around the technology your website actually uses.
            </p>
          </div>

          <div className="mt-12 grid bg-frame-border gap-px sm:grid-cols-2 lg:grid-cols-3 border-2 border-frame-border">
            {platforms.map((platform, idx) => (
              <div key={idx} className="bg-frame-bg p-7 sm:p-8 md:p-10 flex flex-col justify-between hover:bg-frame-muted/10 transition-colors">
                <div>
                  <span className="text-xs font-black uppercase tracking-[0.2em] text-frame-accent">
                    Platform 0{idx + 1}
                  </span>
                  <h3 className="mt-4 font-heading text-xl sm:text-2xl font-bold uppercase tracking-tight text-frame-fg">
                    {platform.title}
                  </h3>
                  <p className="mt-4 text-sm sm:text-base font-medium leading-relaxed text-frame-muted-fg">
                    {platform.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 border-2 border-frame-border bg-frame-muted/10 p-6 md:p-8">
            <p className="text-sm sm:text-base md:text-lg font-medium leading-relaxed text-frame-muted-fg">
              We do not apply the same checklist to every platform. The maintenance scope is defined around the website&apos;s technology, business importance, integrations, and level of risk.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 2: ECOMMERCE WEBSITE MAINTENANCE */}
      <section className="bg-frame-muted/20 px-4 py-16 sm:py-20 md:px-8 md:py-28 border-b-2 border-frame-border">
        <div className="mx-auto max-w-[95vw]">
          <div className="max-w-4xl">
            <span className="text-xs md:text-sm font-black uppercase tracking-[0.28em] text-frame-accent">
              Revenue Protection
            </span>
            <h2 className="mt-3 font-heading text-[clamp(2.2rem,5.8vw,4.8rem)] font-bold uppercase leading-[0.88] tracking-tighter text-frame-fg">
              Ecommerce Website Maintenance
            </h2>
            <p className="mt-6 text-base sm:text-lg md:text-xl font-medium leading-relaxed text-frame-muted-fg">
              An ecommerce website needs more than regular software updates. A small technical issue can affect product discovery, checkout, payments, orders, or customer communication.
            </p>
          </div>

          <div className="mt-12 border-2 border-frame-border bg-frame-bg p-7 sm:p-8 md:p-10">
            <h3 className="font-heading text-xl sm:text-2xl font-bold uppercase tracking-tight text-frame-fg mb-6">
              Our ecommerce maintenance can include:
            </h3>
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {ecommerceChecklist.map((item, idx) => (
                <div key={idx} className="flex items-start gap-3 border border-frame-border bg-frame-muted/10 p-4">
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center border border-frame-accent font-black text-xs text-frame-accent">
                    ✓
                  </span>
                  <span className="text-xs sm:text-sm font-medium text-frame-fg leading-snug">
                    {item}
                  </span>
                </div>
              ))}
            </div>
            <p className="mt-8 text-xs sm:text-sm italic text-frame-muted-fg border-t border-frame-border pt-4">
              For WooCommerce, Shopify, Magento, or another ecommerce platform, the exact maintenance scope depends on the store architecture and connected systems.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 3: WEBSITE MAINTENANCE FOR EXISTING OR THIRD-PARTY BUILDS */}
      <section className="bg-frame-bg px-4 py-16 sm:py-20 md:px-8 md:py-28 border-b-2 border-frame-border">
        <div className="mx-auto max-w-[95vw]">
          <div className="max-w-4xl">
            <span className="text-xs md:text-sm font-black uppercase tracking-[0.28em] text-frame-accent">
              Seamless Transition
            </span>
            <h2 className="mt-3 font-heading text-[clamp(2.2rem,5.8vw,4.8rem)] font-bold uppercase leading-[0.88] tracking-tighter text-frame-fg">
              Website Maintenance for Existing or Third-Party Builds
            </h2>
            <div className="mt-6 space-y-4 text-base sm:text-lg md:text-xl font-medium leading-relaxed text-frame-muted-fg">
              <p>
                You do not need to work with the original developer to maintain your website.
              </p>
              <p>
                We can take over maintenance for websites built by another agency, freelancer, internal team, or previous developer.
              </p>
              <p>
                Before ongoing maintenance begins, we review the current setup so we understand what we are taking responsibility for.
              </p>
            </div>
          </div>

          <div className="mt-12 border-2 border-frame-border bg-frame-muted/10 p-7 sm:p-8 md:p-10">
            <span className="text-xs font-black uppercase tracking-[0.24em] text-frame-accent">
              Audit Protocol
            </span>
            <h3 className="mt-2 font-heading text-2xl font-bold uppercase tracking-tight text-frame-fg">
              Initial Takeover Review
            </h3>
            <p className="mt-2 text-sm font-medium text-frame-muted-fg mb-6">We assess:</p>
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {takeoverChecklist.map((chk, idx) => (
                <div key={idx} className="flex items-center gap-2.5 bg-frame-bg p-3.5 border border-frame-border">
                  <span className="text-frame-accent font-bold">✓</span>
                  <span className="text-xs sm:text-sm font-medium text-frame-fg">{chk}</span>
                </div>
              ))}
            </div>

            <div className="mt-8 border-t border-frame-border pt-6 space-y-3 text-sm sm:text-base font-medium text-frame-muted-fg">
              <p>
                We then identify the priority issues and define a maintenance scope around the current condition of the website.
              </p>
              <p className="font-bold text-frame-fg">
                This gives the new maintenance relationship a documented starting point instead of assuming the site is already healthy.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: EMERGENCY WEBSITE SUPPORT & RECOVERY */}
      <section className="bg-frame-muted/20 px-4 py-16 sm:py-20 md:px-8 md:py-28 border-b-2 border-frame-border">
        <div className="mx-auto max-w-[95vw]">
          <div className="max-w-4xl">
            <span className="text-xs md:text-sm font-black uppercase tracking-[0.28em] text-frame-accent">
              Rapid Incident Response
            </span>
            <h2 className="mt-3 font-heading text-[clamp(2.2rem,5.8vw,4.8rem)] font-bold uppercase leading-[0.88] tracking-tighter text-frame-fg">
              Emergency Website Support &amp; Recovery
            </h2>
            <p className="mt-6 text-base sm:text-lg md:text-xl font-medium leading-relaxed text-frame-muted-fg">
              Some website problems cannot wait for a scheduled maintenance cycle.
            </p>
          </div>

          <div className="mt-12 border-2 border-frame-border bg-frame-bg p-7 sm:p-8 md:p-10">
            <h3 className="font-heading text-xl sm:text-2xl font-bold uppercase tracking-tight text-frame-fg mb-6">
              Emergency support can apply when:
            </h3>
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {emergencyTriggers.map((trigger, idx) => (
                <div key={idx} className="flex items-start gap-2.5 border border-frame-border bg-frame-muted/10 p-4">
                  <span className="text-frame-accent font-bold">!</span>
                  <span className="text-xs sm:text-sm font-medium text-frame-fg leading-snug">{trigger}</span>
                </div>
              ))}
            </div>

            <div className="mt-8 border-t border-frame-border pt-6 space-y-3 text-sm sm:text-base font-medium text-frame-muted-fg">
              <p>
                Our response starts with identifying the immediate problem, protecting the available data, and restoring critical functionality where possible.
              </p>
              <p className="font-bold text-frame-fg">
                When a tested backup is available, it can provide an important recovery path. The exact emergency response and availability depend on your maintenance plan.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5: WHAT'S INCLUDED IN WEBSITE MAINTENANCE, AND WHAT'S NOT */}
      <section className="bg-frame-bg px-4 py-16 sm:py-20 md:px-8 md:py-28 border-b-2 border-frame-border">
        <div className="mx-auto max-w-[95vw]">
          <div className="max-w-4xl">
            <span className="text-xs md:text-sm font-black uppercase tracking-[0.28em] text-frame-accent">
              Scope Definition
            </span>
            <h2 className="mt-3 font-heading text-[clamp(2.2rem,5.8vw,4.8rem)] font-bold uppercase leading-[0.88] tracking-tighter text-frame-fg">
              What&apos;s Included in Website Maintenance, and What&apos;s Not
            </h2>
            <p className="mt-6 text-base sm:text-lg md:text-xl font-medium leading-relaxed text-frame-muted-fg">
              Clear scope helps prevent confusion about what a maintenance plan is designed to cover.
            </p>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-2">
            {/* USUALLY INCLUDED */}
            <div className="border-2 border-frame-border bg-frame-bg p-7 sm:p-8 md:p-10">
              <span className="text-xs font-black uppercase tracking-[0.24em] text-frame-accent">
                Core Coverage
              </span>
              <h3 className="mt-2 font-heading text-2xl font-bold uppercase tracking-tight text-frame-fg">
                Usually Included
              </h3>
              <p className="mt-3 text-sm font-medium text-frame-muted-fg">
                Depending on your plan, website maintenance can include:
              </p>
              <ul className="mt-6 space-y-2.5 text-xs sm:text-sm font-medium text-frame-fg">
                {includedItems.map((item, idx) => (
                  <li key={idx} className="flex items-center gap-2.5">
                    <span className="text-frame-accent font-bold">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* USUALLY HANDLED AS SEPARATE PROJECTS */}
            <div className="border-2 border-frame-border bg-frame-muted/10 p-7 sm:p-8 md:p-10">
              <span className="text-xs font-black uppercase tracking-[0.24em] text-frame-muted-fg">
                Separate Scopes
              </span>
              <h3 className="mt-2 font-heading text-2xl font-bold uppercase tracking-tight text-frame-fg">
                Usually Handled as Separate Projects
              </h3>
              <p className="mt-3 text-sm font-medium text-frame-muted-fg">
                Some requests change the scope of the website rather than simply maintaining it. These may include:
              </p>
              <ul className="mt-6 space-y-2.5 text-xs sm:text-sm font-medium text-frame-fg">
                {separateProjectItems.map((item, idx) => (
                  <li key={idx} className="flex items-center gap-2.5 text-frame-muted-fg">
                    <span className="text-frame-border font-bold">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-8 border-2 border-frame-border bg-frame-bg p-6 md:p-8">
            <p className="text-sm sm:text-base font-medium leading-relaxed text-frame-muted-fg">
              The exact boundary depends on your maintenance plan and the work required. We define that scope before beginning additional work so you know what is covered and what is not.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 6: WEBSITE HEALTH AUDIT & MAINTENANCE ONBOARDING */}
      <section className="bg-frame-muted/20 px-4 py-16 sm:py-20 md:px-8 md:py-28 border-b-2 border-frame-border">
        <div className="mx-auto max-w-[95vw]">
          <div className="max-w-4xl">
            <span className="text-xs md:text-sm font-black uppercase tracking-[0.28em] text-frame-accent">
              Onboarding Protocol
            </span>
            <h2 className="mt-3 font-heading text-[clamp(2.2rem,5.8vw,4.8rem)] font-bold uppercase leading-[0.88] tracking-tighter text-frame-fg">
              Website Health Audit &amp; Maintenance Onboarding
            </h2>
            <p className="mt-6 text-base sm:text-lg md:text-xl font-medium leading-relaxed text-frame-muted-fg">
              Before routine maintenance begins, we establish a clear picture of the website&apos;s current condition.
            </p>
          </div>

          <div className="mt-12 grid bg-frame-border gap-px sm:grid-cols-2 lg:grid-cols-3 border-2 border-frame-border">
            {onboardingSteps.map((step, idx) => (
              <div key={idx} className="bg-frame-bg p-7 sm:p-8 md:p-10 flex flex-col justify-between hover:bg-frame-muted/10 transition-colors">
                <div>
                  <span className="text-xs font-black uppercase tracking-[0.2em] text-frame-accent">
                    Step {step.number}
                  </span>
                  <h3 className="mt-4 font-heading text-xl sm:text-2xl font-bold uppercase tracking-tight text-frame-fg">
                    {step.title}
                  </h3>
                  <p className="mt-4 text-sm sm:text-base font-medium leading-relaxed text-frame-muted-fg">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 border-2 border-frame-border bg-frame-bg p-6 md:p-8">
            <p className="text-sm sm:text-base font-medium leading-relaxed text-frame-muted-fg">
              This onboarding process helps prevent inherited problems from being mistaken for newly introduced maintenance issues.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 7: WHY CHOOSE FRAMECIPHER FOR WEBSITE MAINTENANCE */}
      <section className="bg-frame-bg px-4 py-16 sm:py-20 md:px-8 md:py-28 border-b-2 border-frame-border">
        <div className="mx-auto max-w-[95vw]">
          <div className="max-w-4xl">
            <span className="text-xs md:text-sm font-black uppercase tracking-[0.28em] text-frame-accent">
              Agency Advantage
            </span>
            <h2 className="mt-3 font-heading text-[clamp(2.2rem,5.8vw,4.8rem)] font-bold uppercase leading-[0.88] tracking-tighter text-frame-fg">
              Why Choose Framecipher for Website Maintenance
            </h2>
            <p className="mt-6 text-base sm:text-lg md:text-xl font-medium leading-relaxed text-frame-muted-fg">
              Website maintenance works best when the team understands the website before problems appear.
            </p>
          </div>

          <div className="mt-12 grid bg-frame-border gap-px sm:grid-cols-2 lg:grid-cols-3 border-2 border-frame-border">
            {whyFramecipherPillars.map((pillar, idx) => (
              <div key={idx} className="bg-frame-bg p-7 sm:p-8 md:p-10 flex flex-col justify-between hover:bg-frame-muted/10 transition-colors">
                <div>
                  <span className="text-xs font-black uppercase tracking-[0.2em] text-frame-accent">
                    Advantage 0{idx + 1}
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

      {/* SECTION 8: SUPPORT PRIORITY & RESPONSE TIMES */}
      <section className="bg-frame-muted/20 px-4 py-16 sm:py-20 md:px-8 md:py-28 border-b-2 border-frame-border">
        <div className="mx-auto max-w-[95vw]">
          <div className="max-w-4xl">
            <span className="text-xs md:text-sm font-black uppercase tracking-[0.28em] text-frame-accent">
              SLA &amp; Responsiveness
            </span>
            <h2 className="mt-3 font-heading text-[clamp(2.2rem,5.8vw,4.8rem)] font-bold uppercase leading-[0.88] tracking-tighter text-frame-fg">
              Support Priority &amp; Response Times
            </h2>
            <div className="mt-6 space-y-4 text-base sm:text-lg md:text-xl font-medium leading-relaxed text-frame-muted-fg">
              <p>
                Not every website has the same urgency.
              </p>
              <p>
                A portfolio website can tolerate a different response window than an ecommerce store that processes orders every day.
              </p>
              <p className="font-bold text-frame-fg">
                We therefore define support priority according to the maintenance plan and the business importance of the website.
              </p>
            </div>
          </div>

          <div className="mt-12 grid bg-frame-border gap-px sm:grid-cols-3 border-2 border-frame-border">
            {supportTiers.map((tier, idx) => (
              <div key={idx} className="bg-frame-bg p-7 sm:p-8 md:p-10 flex flex-col justify-between hover:bg-frame-muted/10 transition-colors">
                <div>
                  <span className="text-xs font-black uppercase tracking-[0.2em] text-frame-accent">
                    Tier 0{idx + 1}
                  </span>
                  <h3 className="mt-4 font-heading text-xl sm:text-2xl font-bold uppercase tracking-tight text-frame-fg">
                    {tier.tier}
                  </h3>
                  <p className="mt-4 text-sm sm:text-base font-medium leading-relaxed text-frame-muted-fg">
                    {tier.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 border-2 border-frame-border bg-frame-bg p-6 md:p-8">
            <p className="text-xs sm:text-sm font-medium text-frame-muted-fg italic">
              Your maintenance agreement should state the actual response targets, support hours, emergency availability, and escalation process before the service begins.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 9: WEBSITE MAINTENANCE FOR BANGLADESH & INTERNATIONAL BUSINESSES */}
      <section className="bg-frame-bg px-4 py-16 sm:py-20 md:px-8 md:py-28 border-b-2 border-frame-border">
        <div className="mx-auto max-w-[95vw]">
          <div className="max-w-4xl">
            <span className="text-xs md:text-sm font-black uppercase tracking-[0.28em] text-frame-accent">
              Global &amp; Local Coverage
            </span>
            <h2 className="mt-3 font-heading text-[clamp(2.2rem,5.8vw,4.8rem)] font-bold uppercase leading-[0.88] tracking-tighter text-frame-fg">
              Website Maintenance for Bangladesh &amp; International Businesses
            </h2>
            <p className="mt-6 text-base sm:text-lg md:text-xl font-medium leading-relaxed text-frame-muted-fg">
              Framecipher is based in Dhaka and provides website maintenance for businesses in Bangladesh and international markets.
            </p>
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            <div className="border-2 border-frame-border bg-frame-bg p-7 md:p-10">
              <span className="text-xs font-bold uppercase tracking-wider text-frame-accent">Domestic Engineering</span>
              <h3 className="mt-2 font-heading text-xl md:text-2xl font-bold text-frame-fg uppercase">Bangladesh Websites</h3>
              <p className="mt-4 text-sm sm:text-base font-medium leading-relaxed text-frame-muted-fg">
                For Bangladesh-based websites, maintenance can consider mobile-first usage, local business workflows, payment integrations, and other market-specific requirements where relevant.
              </p>
            </div>

            <div className="border-2 border-frame-border bg-frame-bg p-7 md:p-10">
              <span className="text-xs font-bold uppercase tracking-wider text-frame-accent">Global Support Standards</span>
              <h3 className="mt-2 font-heading text-xl md:text-2xl font-bold text-frame-fg uppercase">International Websites</h3>
              <p className="mt-4 text-sm sm:text-base font-medium leading-relaxed text-frame-muted-fg">
                For international websites, we adapt the support process around the technology stack, target market, operating hours, integrations, and business requirements.
              </p>
            </div>
          </div>

          <div className="mt-8 border-2 border-frame-border bg-frame-muted/10 p-6 md:p-8">
            <p className="text-sm sm:text-base md:text-lg font-medium leading-relaxed text-frame-muted-fg">
              The same maintenance principle applies in every market: identify risks early, keep the website maintained, and make important technical work visible.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 10: WEBSITE OWNERSHIP, ACCESS & DOCUMENTATION */}
      <section className="bg-frame-muted/20 px-4 py-16 sm:py-20 md:px-8 md:py-28 border-b-2 border-frame-border">
        <div className="mx-auto max-w-[95vw]">
          <div className="max-w-4xl">
            <span className="text-xs md:text-sm font-black uppercase tracking-[0.28em] text-frame-accent">
              Asset Security &amp; Control
            </span>
            <h2 className="mt-3 font-heading text-[clamp(2.2rem,5.8vw,4.8rem)] font-bold uppercase leading-[0.88] tracking-tighter text-frame-fg">
              Website Ownership, Access &amp; Documentation
            </h2>
            <div className="mt-6 space-y-4 text-base sm:text-lg md:text-xl font-medium leading-relaxed text-frame-muted-fg">
              <p>
                Website maintenance should not mean giving up control of your digital assets.
              </p>
              <p>
                We work with the agreed access structure for your website, hosting, domain, analytics, third-party services, and other systems required for maintenance.
              </p>
            </div>
          </div>

          <div className="mt-12 border-2 border-frame-border bg-frame-bg p-7 sm:p-8 md:p-10">
            <h3 className="font-heading text-xl sm:text-2xl font-bold uppercase tracking-tight text-frame-fg mb-6">
              Where applicable, documentation can cover:
            </h3>
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {documentationItems.map((item, idx) => (
                <div key={idx} className="flex items-center gap-2.5 border border-frame-border bg-frame-muted/10 p-3.5">
                  <span className="text-frame-accent font-bold">✓</span>
                  <span className="text-xs sm:text-sm font-medium text-frame-fg">{item}</span>
                </div>
              ))}
            </div>

            <div className="mt-8 border-t border-frame-border pt-6 space-y-3 text-sm sm:text-base font-medium text-frame-muted-fg">
              <p>
                Domain and hosting ownership should remain clearly documented and aligned with the project agreement.
              </p>
              <p className="font-bold text-frame-fg">
                Our goal is to make the maintenance relationship accountable without making the business dependent on one individual to understand how its website works.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 11: POST-LAUNCH SUPPORT & ONGOING IMPROVEMENTS */}
      <section className="bg-frame-bg px-4 py-16 sm:py-20 md:px-8 md:py-28 border-b-2 border-frame-border">
        <div className="mx-auto max-w-[95vw]">
          <div className="max-w-4xl">
            <span className="text-xs md:text-sm font-black uppercase tracking-[0.28em] text-frame-accent">
              Future Growth
            </span>
            <h2 className="mt-3 font-heading text-[clamp(2.2rem,5.8vw,4.8rem)] font-bold uppercase leading-[0.88] tracking-tighter text-frame-fg">
              Post-Launch Support &amp; Ongoing Improvements
            </h2>
            <p className="mt-6 text-base sm:text-lg md:text-xl font-medium leading-relaxed text-frame-muted-fg">
              Website maintenance can identify opportunities that go beyond routine upkeep. As the website develops, we can support improvements such as:
            </p>
          </div>

          <div className="mt-12 border-2 border-frame-border bg-frame-muted/10 p-7 sm:p-8 md:p-10">
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {ongoingImprovements.map((item, idx) => (
                <div key={idx} className="flex items-center gap-2.5 bg-frame-bg border border-frame-border p-3.5">
                  <span className="text-frame-accent font-bold">✓</span>
                  <span className="text-xs sm:text-sm font-medium text-frame-fg">{item}</span>
                </div>
              ))}
            </div>

            <div className="mt-8 border-t border-frame-border pt-6">
              <p className="text-sm sm:text-base md:text-lg font-medium leading-relaxed text-frame-muted-fg">
                Routine maintenance keeps the website healthy. Ongoing development helps the website improve as the business grows.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
