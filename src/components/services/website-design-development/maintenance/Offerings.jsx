import { SectionIntro, PosterButton } from '../../../Kinetic'

export default function Offerings({ service }) {
  const offerings = service?.offerings || [
  {
    "title": "SECURITY & UPDATE MANAGEMENT",
    "description": "Keeping the software your site runs on current, patched, and protected against known vulnerabilities. What We Do Outdated software is the single most common way a site gets compromised, this is the maintenance work that prevents it.",
    "bullets": [
      "Core, Theme & Plugin Updates: Keeping WordPress, Shopify apps, or custom dependencies current without breaking the live site.",
      "Security Patch Management: Applying security fixes promptly, especially on platforms like WordPress and Magento that are common attack targets.",
      "Malware & Vulnerability Scanning: Regular scans to catch security issues before they become real incidents.",
      "SSL & Access Control Review: Confirming certificates stay valid and login/access permissions remain appropriately restricted."
    ]
  },
  {
    "title": "BACKUP & DISASTER RECOVERY",
    "description": "Making sure a recoverable version of your site always exists, no matter what goes wrong. What We Do A backup you've never tested restoring is a backup you can't actually rely on, we treat recovery testing as part of the job, not an afterthought.",
    "bullets": [
      "Scheduled Backups: Regular, automated backups appropriate to how often your site's content actually changes.",
      "Off-Site Backup Storage: Backups stored separately from the live site, so a server issue doesn't take out your backup too.",
      "Recovery Testing: Periodically confirming backups actually restore correctly, not just that they exist.",
      "Emergency Recovery Support: Fast response and restoration if something goes wrong between scheduled checks."
    ]
  },
  {
    "title": "PERFORMANCE & UPTIME MONITORING",
    "description": "Watching speed and availability continuously, not just checking in once a month. What We Do A slow site or unnoticed outage costs visitors and sales in real time, monitoring is what turns that into something caught in minutes, not days.",
    "bullets": [
      "Uptime Monitoring: Continuous checks so downtime gets caught and addressed quickly, not discovered by a customer first.",
      "Speed & Performance Tracking: Monitoring load times and flagging degradation before it affects visitors or conversions.",
      "Traffic Spike Readiness: Checking that hosting and infrastructure can handle seasonal or campaign-driven traffic increases.",
      "Broken Link & Error Monitoring: Catching 404s, broken integrations, or functionality failures before they pile up."
    ]
  },
  {
    "title": "CONTENT & FUNCTIONALITY SUPPORT",
    "description": "Handling the small, ongoing changes that don't need a full development project. What We Do Not every change needs a new project, routine maintenance covers the small, ongoing needs that come up between bigger initiatives.",
    "bullets": [
      "Content Updates: Text, image, and page changes handled without requiring you to touch the backend yourself.",
      "Minor Feature Adjustments: Small functionality tweaks and fixes that come up as the business evolves.",
      "Plugin/App Stack Review: Periodic audits to remove unused or conflicting tools before they slow the site down.",
      "Third-Party Integration Checks: Confirming CRM, payment, or marketing tool connections keep working as those platforms update."
    ]
  },
  {
    "title": "REPORTING & COMMUNICATION",
    "description": "Keeping you informed about what's being done and why, not maintenance happening silently in the background. What We Do Maintenance you can't see the results of is hard to trust, reporting is what makes the work visible.",
    "bullets": [
      "Monthly Maintenance Reports: A clear summary of updates, backups, monitoring results, and any issues addressed.",
      "Incident Communication: Direct notification if something significant comes up, not discovered after the fact.",
      "Proactive Recommendations: Flagging risks or improvements we notice, even outside the immediate maintenance scope.",
      "Direct Access to Your Team: A real point of contact, not a ticket queue that takes days to get a response from."
    ]
  }
]
  const whyMatters = service?.whyMatters || [
  "Treating a website as a one-time project instead of ongoing infrastructure is one of the most common and costly assumptions businesses make.",
  "Skipping Maintenance Doesn't Save Money",
  "A small fix caught early is inexpensive. The same issue left unaddressed for months often becomes an emergency rebuild, skipping maintenance usually costs more later, not less.",
  "Security Risk Grows Silently",
  "An unpatched vulnerability doesn't announce itself, it sits until it's exploited. Regular updates and monitoring are what keep that risk from accumulating unnoticed.",
  "Downtime Has a Real Cost",
  "Every hour a site is down or broken is lost traffic, lost sales, and lost trust, proactive monitoring exists specifically to catch problems before they reach that point.",
  "Different Platforms, Different Risks",
  "A WordPress site's biggest risk is usually plugin-related security exposure; an ecommerce store's is usually payment or inventory integration failures. Maintenance scoped to your actual platform catches what generic, one-size-fits-all monitoring misses."
]
  const whyChooseUs = service?.whyChooseUs || [
  {
    "title": "As a website maintenance company, we treat launch as the starting point, not the finish line. Our clients get regular security updates, monitored uptime, and a team that catches issues before visitors do, because a site's maintenance needs depend entirely on what it actually is: a WooCommerce store has different risks than a WordPress blog, which has different risks than a custom Next.js application. We scope maintenance around your specific platform and site type, not a generic monthly checklist.",
    "text": "\"Most site problems don't happen suddenly, they build up quietly through skipped updates, growing plugin conflicts, or unmonitored uptime, until something finally breaks in front of a customer. Maintenance is what catches that before it happens.\" Platform-Specific Care | Proactive Monitoring | One Team, Any Site Type"
  },
  {
    "title": "Our Website Maintenance Services",
    "text": "We offer ongoing maintenance tailored to your platform and what your specific site actually needs."
  },
  {
    "title": "SECURITY & UPDATE MANAGEMENT",
    "text": "Keeping the software your site runs on current, patched, and protected against known vulnerabilities."
  },
  {
    "title": "What We Do",
    "text": "* Core, Theme & Plugin Updates: Keeping WordPress, Shopify apps, or custom dependencies current without breaking the live site. * Security Patch Management: Applying security fixes promptly, especially on platforms like WordPress and Magento that are common attack targets. * Malware & Vulnerability Scanning: Regular scans to catch security issues before they become real incidents. * SSL & Access Control Review: Confirming certificates stay valid and login/access permissions remain appropriately restricted. Outdated software is the single most common way a site gets compromised, this is the maintenance work that prevents it."
  },
  {
    "title": "BACKUP & DISASTER RECOVERY",
    "text": "Making sure a recoverable version of your site always exists, no matter what goes wrong."
  },
  {
    "title": "What We Do",
    "text": "* Scheduled Backups: Regular, automated backups appropriate to how often your site's content actually changes. * Off-Site Backup Storage: Backups stored separately from the live site, so a server issue doesn't take out your backup too. * Recovery Testing: Periodically confirming backups actually restore correctly, not just that they exist. * Emergency Recovery Support: Fast response and restoration if something goes wrong between scheduled checks. A backup you've never tested restoring is a backup you can't actually rely on, we treat recovery testing as part of the job, not an afterthought."
  },
  {
    "title": "PERFORMANCE & UPTIME MONITORING",
    "text": "Watching speed and availability continuously, not just checking in once a month."
  },
  {
    "title": "What We Do",
    "text": "* Uptime Monitoring: Continuous checks so downtime gets caught and addressed quickly, not discovered by a customer first. * Speed & Performance Tracking: Monitoring load times and flagging degradation before it affects visitors or conversions. * Traffic Spike Readiness: Checking that hosting and infrastructure can handle seasonal or campaign-driven traffic increases. * Broken Link & Error Monitoring: Catching 404s, broken integrations, or functionality failures before they pile up. A slow site or unnoticed outage costs visitors and sales in real time, monitoring is what turns that into something caught in minutes, not days."
  },
  {
    "title": "CONTENT & FUNCTIONALITY SUPPORT",
    "text": "Handling the small, ongoing changes that don't need a full development project."
  },
  {
    "title": "What We Do",
    "text": "* Content Updates: Text, image, and page changes handled without requiring you to touch the backend yourself. * Minor Feature Adjustments: Small functionality tweaks and fixes that come up as the business evolves. * Plugin/App Stack Review: Periodic audits to remove unused or conflicting tools before they slow the site down. * Third-Party Integration Checks: Confirming CRM, payment, or marketing tool connections keep working as those platforms update. Not every change needs a new project, routine maintenance covers the small, ongoing needs that come up between bigger initiatives."
  },
  {
    "title": "REPORTING & COMMUNICATION",
    "text": "Keeping you informed about what's being done and why, not maintenance happening silently in the background."
  },
  {
    "title": "What We Do",
    "text": "* Monthly Maintenance Reports: A clear summary of updates, backups, monitoring results, and any issues addressed. * Incident Communication: Direct notification if something significant comes up, not discovered after the fact. * Proactive Recommendations: Flagging risks or improvements we notice, even outside the immediate maintenance scope. * Direct Access to Your Team: A real point of contact, not a ticket queue that takes days to get a response from. Maintenance you can't see the results of is hard to trust, reporting is what makes the work visible. Why Your Business Needs a Real Maintenance Partner Treating a website as a one-time project instead of ongoing infrastructure is one of the most common and costly assumptions businesses make. Skipping Maintenance Doesn't Save Money A small fix caught early is inexpensive. The same issue left unaddressed for months often becomes an emergency rebuild, skipping maintenance usually costs more later, not less."
  },
  {
    "title": "Security Risk Grows Silently",
    "text": "An unpatched vulnerability doesn't announce itself, it sits until it's exploited. Regular updates and monitoring are what keep that risk from accumulating unnoticed."
  },
  {
    "title": "Downtime Has a Real Cost",
    "text": "Every hour a site is down or broken is lost traffic, lost sales, and lost trust, proactive monitoring exists specifically to catch problems before they reach that point. Different Platforms, Different Risks A WordPress site's biggest risk is usually plugin-related security exposure; an ecommerce store's is usually payment or inventory integration failures. Maintenance scoped to your actual platform catches what generic, one-size-fits-all monitoring misses. Why We're Different We're not positioning ourselves as the biggest agency, we're built to be the most accountable one."
  },
  {
    "title": "One In-House Team",
    "text": "Security, backups, monitoring, and support handled by one team that already knows your site, not a rotating queue of unfamiliar technicians. Platform-Specific, Not Generic We scope maintenance around what your specific site actually is: WordPress, Shopify, Magento, Webflow, or custom, not a one-size-fits-all monthly checklist applied regardless of platform."
  },
  {
    "title": "Local & International Coverage",
    "text": "Based in Dhaka, maintaining sites for businesses across Bangladesh as well as internationally, including the US, UK, Australia, Canada, and UAE."
  },
  {
    "title": "Transparent Reporting",
    "text": "You receive regular reports on what's actually being done, not a maintenance retainer that runs silently in the background."
  },
  {
    "title": "Security & Update Management",
    "text": "Core, theme, plugin, and dependency updates handled proactively, with prompt security patching."
  },
  {
    "title": "Backup & Recovery",
    "text": "Scheduled, off-site backups with periodic recovery testing, so a working restore point always exists."
  },
  {
    "title": "Performance & Uptime Monitoring",
    "text": "Continuous tracking of speed and availability, with issues caught before visitors notice them."
  },
  {
    "title": "Content & Functionality Support",
    "text": "Routine changes and small fixes handled without needing a new project every time."
  },
  {
    "title": "Monthly Reporting",
    "text": "Clear, regular summaries of what's been done, so maintenance work stays visible, not invisible."
  },
  {
    "title": "Direct Team Access",
    "text": "A real point of contact who already knows your site, not a rotating support queue."
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
