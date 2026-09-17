import { SectionIntro, PosterButton } from '../../../Kinetic'

export default function Offerings({ service }) {
  const offerings = service?.offerings || [
  {
    "title": "SITE AUDIT & DIAGNOSIS",
    "description": "Every redesign starts with understanding exactly what's underperforming and why. What We Do Redesigning without an audit first means guessing at what's actually broken - the audit is what turns guesswork into a plan.",
    "bullets": [
      "Technical Audit: Reviewing site speed, mobile responsiveness, crawl errors, and technical health.",
      "Content & Structure Review: Identifying what content and site architecture is worth keeping versus what needs rebuilding.",
      "Conversion Path Analysis: Finding where visitors are dropping off or where the path to action is unclear.",
      "SEO & Ranking Baseline: Documenting current rankings, backlinks, and organic traffic before any changes are made."
    ]
  },
  {
    "title": "DESIGN & UX OVERHAUL",
    "description": "Visual and structural design changes built around what the audit actually found. What We Do Design changes here are tied directly to audit findings, not a redesign for the sake of looking different.",
    "bullets": [
      "Updated Visual Design: A modern, on-brand look that replaces what's genuinely outdated, not changed for its own sake.",
      "Navigation & Information Architecture: Restructuring how content is organized if the current structure is part of the problem.",
      "Conversion-Focused Layout Changes: Adjusting page layout and calls-to-action based on where the audit found visitors dropping off.",
      "Mobile-First Redesign: Rebuilding for proper mobile performance if the current site wasn't built mobile-first originally."
    ]
  },
  {
    "title": "TECHNICAL REBUILD & MIGRATION",
    "description": "The development work that fixes the underlying platform issues a new design alone can't solve. What We Do A redesign that breaks URLs without proper redirects can undo years of SEO progress in a single launch, this is treated as a technical project, not an afterthought.",
    "bullets": [
      "Platform Migration: Moving to a better-suited platform if the current one is the actual bottleneck, without losing content or SEO value.",
      "Speed & Performance Fixes: Addressing the technical causes of slow load times, not just compressing a few images.",
      "Clean Code Rebuild: Replacing bloated, legacy code with a maintainable, modern foundation.",
      "URL & Redirect Mapping: Careful redirect planning so existing rankings and backlinks transfer to the new structure."
    ]
  },
  {
    "title": "SEO & RANKING PRESERVATION",
    "description": "Making sure the redesign improves the site without costing you the visibility you've already earned. What We Do Losing rankings during a redesign is one of the most common and most avoidable mistakes in this kind of project, this is where that risk gets managed directly.",
    "bullets": [
      "Content Migration with SEO Intact: Preserving ranking content and metadata through the rebuild process.",
      "301 Redirect Strategy: Mapping every old URL to its new equivalent to preserve link equity and rankings.",
      "Post-Launch Ranking Monitoring: Tracking rankings and traffic closely in the weeks after launch to catch issues early.",
      "Schema & Technical SEO Refresh: Updating structured data and technical SEO elements as part of the rebuild."
    ]
  },
  {
    "title": "ONGOING SUPPORT & MAINTENANCE",
    "description": "A redesigned site's job isn't done at launch; the same platform still needs regular attention afterward. What We Do Available as a separate ongoing service - see our [Website Maintenance] page for full details, since this isn't included by default in a redesign engagement.",
    "bullets": [
      "Post-Launch Monitoring: Close tracking of speed, rankings, and functionality in the critical weeks after launch.",
      "Security & Update Management: Keeping the rebuilt platform current and patched going forward.",
      "Performance Reviews: Ongoing checks to confirm the redesign's improvements are holding up over time.",
      "Content & Feature Updates: Small changes handled without needing another full redesign project."
    ]
  },
  {
    "title": "Website Redesign for Every Niche and Purpose",
    "description": "An outdated site looks different depending on what kind of site it is, and so does the fix. Business & Corporate Websites Redesigns focused on credibility, clearer service pages, and a stronger path from visitor to inquiry. Ecommerce Stores Redesigns focused on checkout friction, product page conversion, and fixing the technical issues that slow down large catalogs. Blogs & Content Publications Redesigns focused on readability, content discoverability, and publishing workflows that have outgrown the current setup. Portfolios & Personal Brands Redesigns focused on visual presentation and making the work itself easier to find and evaluate. Membership & Community Sites Redesigns focused on account experience, content gating, and functionality that's become outdated or clunky. Directories & Listings Redesigns focused on search, filtering, and structured content that's become hard to navigate as listings grow. We scope the audit and redesign around what your specific site type actually needs fixed, not a generic business-site checklist applied regardless of purpose.",
    "bullets": []
  }
]
  const whyMatters = service?.whyMatters || [
  "An outdated site doesn't just look unprofessional, it actively loses visitors and rankings the longer it's left unaddressed.",
  "The Cost of Waiting Compounds",
  "Every month spent on an underperforming site is traffic and credibility lost to competitors whose sites already convert better, and that gap widens over time, it doesn't stay flat.",
  "Trust & First Impressions",
  "A slow or dated-looking site undermines credibility before a visitor even reads what you offer, regardless of how good the underlying business actually is.",
  "Rankings Are an Asset Worth Protecting",
  "A site with years of built-up SEO value represents real, hard-earned equity; a careless redesign can erase that in a single launch if redirects and content migration aren't handled properly.",
  "The Difference Between a Facelift and a Fix",
  "A visual-only redesign on top of a broken structure or slow platform will underperform again within a year, the audit-first approach is what prevents needing to redesign the redesign."
]
  const whyChooseUs = service?.whyChooseUs || [
  {
    "title": "As a website redesign company, we start with an audit, not a new design file. Our clients get a clear picture of what's actually underperforming, structure, speed, conversion path, or just visual datedness, before any redesign work begins, since a redesign that only changes the visuals while leaving the underlying structure broken usually underperforms just as badly as the original site. A blog's redesign priorities aren't a store's, and a store's aren't a portfolio's, we diagnose based on what the specific site actually needs to do, not a generic checklist.",
    "text": "\"A redesign isn't just a new coat of paint on the same broken structure. If the site still has no clear conversion path after the redesign, it'll underperform regardless of how polished it looks.\" Audit-First, Any Niche | SEO & Ranking Preservation | Fixes Structure, Not Just Visuals"
  },
  {
    "title": "Our Website Redesign Services",
    "text": "We offer end-to-end redesign work tailored to what your current site actually needs fixed."
  },
  {
    "title": "SITE AUDIT & DIAGNOSIS",
    "text": "Every redesign starts with understanding exactly what's underperforming and why."
  },
  {
    "title": "What We Do",
    "text": "* Technical Audit: Reviewing site speed, mobile responsiveness, crawl errors, and technical health. * Content & Structure Review: Identifying what content and site architecture is worth keeping versus what needs rebuilding. * Conversion Path Analysis: Finding where visitors are dropping off or where the path to action is unclear. * SEO & Ranking Baseline: Documenting current rankings, backlinks, and organic traffic before any changes are made. Redesigning without an audit first means guessing at what's actually broken - the audit is what turns guesswork into a plan."
  },
  {
    "title": "DESIGN & UX OVERHAUL",
    "text": "Visual and structural design changes built around what the audit actually found."
  },
  {
    "title": "What We Do",
    "text": "* Updated Visual Design: A modern, on-brand look that replaces what's genuinely outdated, not changed for its own sake. * Navigation & Information Architecture: Restructuring how content is organized if the current structure is part of the problem. * Conversion-Focused Layout Changes: Adjusting page layout and calls-to-action based on where the audit found visitors dropping off. * Mobile-First Redesign: Rebuilding for proper mobile performance if the current site wasn't built mobile-first originally. Design changes here are tied directly to audit findings, not a redesign for the sake of looking different."
  },
  {
    "title": "TECHNICAL REBUILD & MIGRATION",
    "text": "The development work that fixes the underlying platform issues a new design alone can't solve."
  },
  {
    "title": "What We Do",
    "text": "* Platform Migration: Moving to a better-suited platform if the current one is the actual bottleneck, without losing content or SEO value. * Speed & Performance Fixes: Addressing the technical causes of slow load times, not just compressing a few images. * Clean Code Rebuild: Replacing bloated, legacy code with a maintainable, modern foundation. * URL & Redirect Mapping: Careful redirect planning so existing rankings and backlinks transfer to the new structure. A redesign that breaks URLs without proper redirects can undo years of SEO progress in a single launch, this is treated as a technical project, not an afterthought."
  },
  {
    "title": "SEO & RANKING PRESERVATION",
    "text": "Making sure the redesign improves the site without costing you the visibility you've already earned."
  },
  {
    "title": "What We Do",
    "text": "* Content Migration with SEO Intact: Preserving ranking content and metadata through the rebuild process. * 301 Redirect Strategy: Mapping every old URL to its new equivalent to preserve link equity and rankings. * Post-Launch Ranking Monitoring: Tracking rankings and traffic closely in the weeks after launch to catch issues early. * Schema & Technical SEO Refresh: Updating structured data and technical SEO elements as part of the rebuild. Losing rankings during a redesign is one of the most common and most avoidable mistakes in this kind of project, this is where that risk gets managed directly."
  },
  {
    "title": "ONGOING SUPPORT & MAINTENANCE",
    "text": "A redesigned site's job isn't done at launch; the same platform still needs regular attention afterward."
  },
  {
    "title": "What We Do",
    "text": "* Post-Launch Monitoring: Close tracking of speed, rankings, and functionality in the critical weeks after launch. * Security & Update Management: Keeping the rebuilt platform current and patched going forward. * Performance Reviews: Ongoing checks to confirm the redesign's improvements are holding up over time. * Content & Feature Updates: Small changes handled without needing another full redesign project. Available as a separate ongoing service - see our [Website Maintenance] page for full details, since this isn't included by default in a redesign engagement. Website Redesign for Every Niche and Purpose An outdated site looks different depending on what kind of site it is, and so does the fix."
  },
  {
    "title": "Business & Corporate Websites",
    "text": "Redesigns focused on credibility, clearer service pages, and a stronger path from visitor to inquiry."
  },
  {
    "title": "Ecommerce Stores",
    "text": "Redesigns focused on checkout friction, product page conversion, and fixing the technical issues that slow down large catalogs."
  },
  {
    "title": "Blogs & Content Publications",
    "text": "Redesigns focused on readability, content discoverability, and publishing workflows that have outgrown the current setup."
  },
  {
    "title": "Portfolios & Personal Brands",
    "text": "Redesigns focused on visual presentation and making the work itself easier to find and evaluate."
  },
  {
    "title": "Membership & Community Sites",
    "text": "Redesigns focused on account experience, content gating, and functionality that's become outdated or clunky."
  },
  {
    "title": "Directories & Listings",
    "text": "Redesigns focused on search, filtering, and structured content that's become hard to navigate as listings grow. We scope the audit and redesign around what your specific site type actually needs fixed, not a generic business-site checklist applied regardless of purpose. Why Your Business Needs a Real Redesign Partner An outdated site doesn't just look unprofessional, it actively loses visitors and rankings the longer it's left unaddressed."
  },
  {
    "title": "The Cost of Waiting Compounds",
    "text": "Every month spent on an underperforming site is traffic and credibility lost to competitors whose sites already convert better, and that gap widens over time, it doesn't stay flat."
  },
  {
    "title": "Trust & First Impressions",
    "text": "A slow or dated-looking site undermines credibility before a visitor even reads what you offer, regardless of how good the underlying business actually is."
  },
  {
    "title": "Rankings Are an Asset Worth Protecting",
    "text": "A site with years of built-up SEO value represents real, hard-earned equity; a careless redesign can erase that in a single launch if redirects and content migration aren't handled properly. The Difference Between a Facelift and a Fix A visual-only redesign on top of a broken structure or slow platform will underperform again within a year, the audit-first approach is what prevents needing to redesign the redesign. Why We're Different We're not positioning ourselves as the biggest agency, we're built to be the most accountable one."
  },
  {
    "title": "One In-House Team",
    "text": "Audit, strategy, design, and development handled by one team, not handed off between a designer who never saw the technical audit and a developer who never saw the strategy. Audit Before Design, Always We don't start with a new design file. We start by understanding exactly what's broken for your specific type of site, so every change made is tied to a real reason, not a generic redesign checklist."
  },
  {
    "title": "Local & International Redesign Experience",
    "text": "Based in Dhaka, redesigning sites for businesses across Bangladesh as well as internationally, including the US, UK, Australia, Canada, and UAE. Transparent, Review-Based Process Every stage of audit findings, design, development, goes through your review and approval before we move forward."
  },
  {
    "title": "Site Audit & Diagnosis",
    "text": "A clear, written picture of what's actually underperforming, technical, structural, or visual, before any redesign work starts."
  },
  {
    "title": "Design & UX Overhaul",
    "text": "Visual and structural changes tied directly to what the audit found, not change for the sake of looking different."
  },
  {
    "title": "Technical Rebuild",
    "text": "A clean, modern platform foundation, with migration handled carefully if the current platform is part of the problem."
  },
  {
    "title": "SEO & Ranking Preservation",
    "text": "Redirect mapping and content migration planned to protect the rankings and traffic you've already built."
  },
  {
    "title": "Post-Launch Monitoring",
    "text": "Close tracking of speed, rankings, and functionality in the weeks immediately following launch."
  },
  {
    "title": "Transparent Process",
    "text": "Review checkpoints at every stage, so you approve direction before it's built, not after."
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
