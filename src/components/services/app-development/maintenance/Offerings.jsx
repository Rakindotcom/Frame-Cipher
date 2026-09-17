import { SectionIntro, PosterButton } from '../../../Kinetic'

export default function Offerings({ service }) {
  const offerings = service?.offerings || [
  {
    "title": "OS COMPATIBILITY & UPDATE MANAGEMENT",
    "description": "Keeping the app working correctly as Android and iOS both continue evolving. What We Do An app that passed review at launch can still fall out of compliance a year later if nobody's tracking policy changes.",
    "bullets": [
      "Android OS Update Testing: Verifying functionality against new Android releases before they reach wide adoption.",
      "iOS Update Testing: Testing against new iOS versions, including Apple's annual major release cycle.",
      "SDK & Dependency Updates: Keeping third-party libraries and frameworks current before they become deprecated liabilities.",
      "App Store Policy Compliance: Tracking changes to App Store and Google Play guidelines that could affect an already-live app."
    ]
  },
  {
    "title": "BUG FIXES & PERFORMANCE MONITORING",
    "description": "Catching issues in real usage, not waiting for a pattern of complaints to surface. What We Do A bug that only shows up for a fraction of users is still costing you reviews, retention, and word of mouth.",
    "bullets": [
      "Crash Reporting & Triage: Monitoring crash reports and prioritizing fixes based on actual user impact.",
      "Performance Monitoring: Tracking load times, memory usage, and responsiveness as the app scales.",
      "Bug Fix Development: Addressing issues as they're identified, with a clear release cadence rather than an indefinite backlog.",
      "Regression Testing: Confirming a fix for one issue doesn't quietly introduce another."
    ]
  },
  {
    "title": "SECURITY & INFRASTRUCTURE MAINTENANCE",
    "description": "The unglamorous work that keeps an app from becoming a security liability over time. What We Do Security maintenance is invisible when it's working, and it's exactly the kind of work that gets skipped when nobody's specifically responsible for it.",
    "bullets": [
      "Security Patch Management: Applying security fixes promptly across the app and its backend dependencies.",
      "Backend & Server Maintenance: Keeping infrastructure current, patched, and sized correctly as usage grows.",
      "Data Backup & Recovery: Regular backups and tested recovery procedures, especially for apps handling sensitive user data.",
      "Vulnerability Scanning: Periodic scans to catch security gaps before they become real incidents."
    ]
  },
  {
    "title": "FEATURE UPDATES & PRODUCT EVOLUTION",
    "description": "Supporting the app as your business's needs continue to change after launch. What We Do An app frozen at its launch-day feature set falls behind user expectations faster than most teams expect.",
    "bullets": [
      "New Feature Development: Building functionality your roadmap calls for, without needing a new full project every time.",
      "A/B Testing Support: Helping test changes with real users before rolling them out to everyone.",
      "Third-Party Integration Updates: Keeping connections to payment processors, CRMs, or other services working as those platforms change.",
      "Analytics Review & Recommendations: Flagging usage patterns and opportunities we notice, even outside the immediate maintenance scope."
    ]
  },
  {
    "title": "REPORTING & DIRECT SUPPORT",
    "description": "Making maintenance work visible instead of something happening quietly in the background. What We Do Maintenance you can't see the results of is hard to trust, reporting is what makes the ongoing work visible.",
    "bullets": [
      "Monthly Maintenance Reports: A clear summary of updates, fixes, and monitoring results each month.",
      "Incident Communication: Direct notification if something significant comes up, not discovered after the fact.",
      "Store Rating & Review Monitoring: Keeping an eye on what users are actually saying in App Store and Play Store reviews.",
      "Direct Access to Your Team: A real point of contact who already knows your app, not a rotating support queue."
    ]
  }
]
  const whyMatters = service?.whyMatters || [
  "Treating an app as finished at launch is one of the most common, and most expensive, assumptions app owners make.",
  "Skipping Maintenance Doesn't Save Money",
  "A small fix caught early is inexpensive. The same issue left for a year, discovered after an OS update breaks core functionality, usually costs far more to untangle.",
  "App Store Ratings Reflect Neglect Quickly",
  "Crashes and bugs show up in reviews within days, and low ratings suppress future downloads, proactive maintenance is a growth lever, not just a technical chore.",
  "OS Updates Arrive Whether You're Ready or Not",
  "Apple and Google don't coordinate their release schedules with your roadmap. An unmaintained app accumulates compatibility debt with every update it misses.",
  "Different Apps, Different Risks",
  "An ecommerce app's biggest risk is usually payment integration failure; a SaaS product is usually tenant-level bugs affecting multiple customers at once. Generic, one-size-fits-all monitoring misses what actually matters for your specific app."
]
  const whyChooseUs = service?.whyChooseUs || [
  {
    "title": "Apple and Google both ship major OS updates every year, and neither one waits for your app to be ready. Libraries go out of date, third-party SDKs get deprecated, and a feature that worked fine on last year's OS version can silently break on this year's, often without any warning until a support ticket or a one-star review shows up. What an Android app needs from maintenance looks different from what a SaaS product or an enterprise system needs, and we scope support around your app's actual platform, not a generic monthly checklist.",
    "text": "\"Most app problems don't start as emergencies. They start as a skipped update or an unmonitored crash report, and by the time a user notices, the fix that would've taken an hour now takes a week.\" Platform-Specific Support | Proactive Monitoring | One Team, Any App Type"
  },
  {
    "title": "Our App Maintenance & Support Services",
    "text": "What your app actually needs depends on what kind of app it is, here's how we cover it."
  },
  {
    "title": "OS COMPATIBILITY & UPDATE MANAGEMENT",
    "text": "Keeping the app working correctly as Android and iOS both continue evolving."
  },
  {
    "title": "What We Do",
    "text": "* Android OS Update Testing: Verifying functionality against new Android releases before they reach wide adoption. * iOS Update Testing: Testing against new iOS versions, including Apple's annual major release cycle. * SDK & Dependency Updates: Keeping third-party libraries and frameworks current before they become deprecated liabilities. * App Store Policy Compliance: Tracking changes to App Store and Google Play guidelines that could affect an already-live app. An app that passed review at launch can still fall out of compliance a year later if nobody's tracking policy changes."
  },
  {
    "title": "BUG FIXES & PERFORMANCE MONITORING",
    "text": "Catching issues in real usage, not waiting for a pattern of complaints to surface."
  },
  {
    "title": "What We Do",
    "text": "* Crash Reporting & Triage: Monitoring crash reports and prioritizing fixes based on actual user impact. * Performance Monitoring: Tracking load times, memory usage, and responsiveness as the app scales. * Bug Fix Development: Addressing issues as they're identified, with a clear release cadence rather than an indefinite backlog. * Regression Testing: Confirming a fix for one issue doesn't quietly introduce another. A bug that only shows up for a fraction of users is still costing you reviews, retention, and word of mouth."
  },
  {
    "title": "SECURITY & INFRASTRUCTURE MAINTENANCE",
    "text": "The unglamorous work that keeps an app from becoming a security liability over time."
  },
  {
    "title": "What We Do",
    "text": "* Security Patch Management: Applying security fixes promptly across the app and its backend dependencies. * Backend & Server Maintenance: Keeping infrastructure current, patched, and sized correctly as usage grows. * Data Backup & Recovery: Regular backups and tested recovery procedures, especially for apps handling sensitive user data. * Vulnerability Scanning: Periodic scans to catch security gaps before they become real incidents. Security maintenance is invisible when it's working, and it's exactly the kind of work that gets skipped when nobody's specifically responsible for it."
  },
  {
    "title": "FEATURE UPDATES & PRODUCT EVOLUTION",
    "text": "Supporting the app as your business's needs continue to change after launch."
  },
  {
    "title": "What We Do",
    "text": "* New Feature Development: Building functionality your roadmap calls for, without needing a new full project every time. * A/B Testing Support: Helping test changes with real users before rolling them out to everyone. * Third-Party Integration Updates: Keeping connections to payment processors, CRMs, or other services working as those platforms change. * Analytics Review & Recommendations: Flagging usage patterns and opportunities we notice, even outside the immediate maintenance scope. An app frozen at its launch-day feature set falls behind user expectations faster than most teams expect."
  },
  {
    "title": "REPORTING & DIRECT SUPPORT",
    "text": "Making maintenance work visible instead of something happening quietly in the background."
  },
  {
    "title": "What We Do",
    "text": "* Monthly Maintenance Reports: A clear summary of updates, fixes, and monitoring results each month. * Incident Communication: Direct notification if something significant comes up, not discovered after the fact. * Store Rating & Review Monitoring: Keeping an eye on what users are actually saying in App Store and Play Store reviews. * Direct Access to Your Team: A real point of contact who already knows your app, not a rotating support queue. Maintenance you can't see the results of is hard to trust, reporting is what makes the ongoing work visible. Why Your Business Needs a Real Maintenance Partner Treating an app as finished at launch is one of the most common, and most expensive, assumptions app owners make. Skipping Maintenance Doesn't Save Money A small fix caught early is inexpensive. The same issue left for a year, discovered after an OS update breaks core functionality, usually costs far more to untangle."
  },
  {
    "title": "App Store Ratings Reflect Neglect Quickly",
    "text": "Crashes and bugs show up in reviews within days, and low ratings suppress future downloads, proactive maintenance is a growth lever, not just a technical chore. OS Updates Arrive Whether You're Ready or Not Apple and Google don't coordinate their release schedules with your roadmap. An unmaintained app accumulates compatibility debt with every update it misses. Different Apps, Different Risks An ecommerce app's biggest risk is usually payment integration failure; a SaaS product is usually tenant-level bugs affecting multiple customers at once. Generic, one-size-fits-all monitoring misses what actually matters for your specific app. Why We're Different"
  },
  {
    "title": "One In-House Team",
    "text": "Security, bug fixes, monitoring, and feature updates handled by people who already know your app, not a rotating queue of unfamiliar developers. Platform-Specific, Not Generic We scope maintenance around whether your app is native Android, native iOS, cross-platform, SaaS, or enterprise, each one has genuinely different risks worth watching for."
  },
  {
    "title": "Local & International Coverage",
    "text": "Based in Dhaka. Supporting apps for businesses across Bangladesh, the US, UK, Australia, Canada, and UAE."
  },
  {
    "title": "Transparent Reporting",
    "text": "You get regular, specific reports on what's actually being done, not a maintenance retainer that runs silently and unaccountably in the background."
  },
  {
    "title": "OS Compatibility Management",
    "text": "Testing and updates against new Android and iOS releases, so your app keeps working as the platforms evolve."
  },
  {
    "title": "Bug Fixes & Performance Monitoring",
    "text": "Crash reports and performance data actively monitored, with fixes prioritized by real user impact."
  },
  {
    "title": "Security & Infrastructure Maintenance",
    "text": "Patches, backups, and vulnerability scanning handled proactively, not reactively."
  },
  {
    "title": "Feature Development",
    "text": "Ongoing functionality built as your product roadmap evolves, without starting a new project each time."
  },
  {
    "title": "Monthly Reporting",
    "text": "Clear, regular summaries of what's been done, so maintenance work stays visible."
  },
  {
    "title": "Direct Team Access",
    "text": "A real point of contact who already knows your app's history and architecture."
  }
]

  if (!offerings?.length && !whyMatters?.length) return null

  return (
    <div className="bg-frame-bg text-frame-fg">
      {offerings?.length > 0 && (
        <section className="px-4 py-20 md:px-8 md:py-28">
          <div className="mx-auto max-w-[95vw]">
            <SectionIntro
              eyebrow="Capabilities & Scope"
              title="What We Deliver"
            >
              Structured deliverables and execution phases designed for measurable outcomes and reliable business growth.
            </SectionIntro>

            <div className="grid bg-frame-border gap-px sm:grid-cols-2 lg:grid-cols-3 border-2 border-frame-border">
              {offerings.map((item, index) => (
                <div key={index} className="bg-frame-bg p-7 md:p-8 flex flex-col justify-between">
                  <div>
                    <span className="text-xs font-black uppercase tracking-[0.24em] text-frame-accent">
                      Scope 0{index + 1}
                    </span>
                    <h3 className="mt-3 font-heading text-xl md:text-2xl font-bold uppercase tracking-tight text-frame-fg">
                      {item.title}
                    </h3>
                    {item.description && (
                      <p className="mt-3 text-sm font-medium leading-relaxed text-frame-muted-fg">
                        {item.description}
                      </p>
                    )}
                  </div>
                  {item.bullets?.length > 0 && (
                    <ul className="mt-6 space-y-2 border-t-2 border-frame-border/60 pt-4 text-xs md:text-sm font-medium text-frame-fg/90">
                      {item.bullets.map((bullet, bIdx) => (
                        <li key={bIdx} className="flex items-start gap-2">
                          <span className="text-frame-accent font-bold">✓</span>
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* WHY IT MATTERS & WHY CHOOSE US */}
      {(whyMatters?.length > 0 || whyChooseUs?.length > 0) && (
        <section className="border-t-2 border-frame-border bg-frame-bg px-4 py-20 md:px-8 md:py-28">
          <div className="mx-auto max-w-[95vw]">
            <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
              {whyMatters?.length > 0 && (
                <div className="border-2 border-frame-border bg-frame-bg p-7 md:p-10">
                  <span className="text-xs font-black uppercase tracking-[0.24em] text-frame-accent">
                    Business Context
                  </span>
                  <h2 className="mt-3 font-heading text-2xl md:text-3xl font-bold uppercase tracking-tight text-frame-fg">
                    Why This Matters for Growth
                  </h2>
                  <div className="mt-6 space-y-4 text-sm md:text-base font-medium leading-relaxed text-frame-muted-fg">
                    {whyMatters.map((point, idx) => (
                      <p key={idx}>{point}</p>
                    ))}
                  </div>
                  <div className="mt-8">
                    <PosterButton href="/contact">Book a Strategy Session</PosterButton>
                  </div>
                </div>
              )}

              {whyChooseUs?.length > 0 && (
                <div className="space-y-6">
                  <div>
                    <span className="text-xs font-black uppercase tracking-[0.24em] text-frame-accent">
                      The Frame Cipher Standard
                    </span>
                    <h3 className="mt-2 font-heading text-2xl font-bold uppercase tracking-tight text-frame-fg">
                      Why Choose Frame Cipher
                    </h3>
                  </div>

                  <div className="grid bg-frame-border gap-px border-2 border-frame-border">
                    {whyChooseUs.map((item, index) => (
                      <div key={index} className="bg-frame-bg p-6">
                        <h4 className="font-heading text-base md:text-lg font-bold uppercase tracking-tight text-frame-fg">
                          {item.title}
                        </h4>
                        <p className="mt-2 text-sm font-medium leading-relaxed text-frame-muted-fg">
                          {item.text || item.desc}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>
      )}
    </div>
  )
}
