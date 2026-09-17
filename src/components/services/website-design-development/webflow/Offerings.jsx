import { SectionIntro, PosterButton } from '../../../Kinetic'

export default function Offerings({ service }) {
  const offerings = service?.offerings || [
  {
    "title": "CMS ARCHITECTURE & CONTENT MODELING",
    "description": "Every Webflow build starts with a content structure that makes future updates simple, not fragile. What We Do Poorly planned CMS structure is the most common reason a Webflow site becomes hard to maintain six months after launch.",
    "bullets": [
      "Collection Structure Planning: Designing CMS Collections around how your content actually needs to be organized and reused.",
      "Dynamic Content Templates: Building templates that update automatically as new CMS items are added, blog posts, case studies, products.",
      "Content Relationships: Structuring reference and multi-reference fields so related content connects correctly.",
      "Editor-Friendly Setup: Naming and organizing fields so your team can add content without needing to understand the build."
    ]
  },
  {
    "title": "CUSTOM DESIGN & INTERACTIONS",
    "description": "Design that takes full advantage of what Webflow's visual canvas actually allows. What We Do Webflow's interaction tools are powerful and easy to misuse, the difference is restraint, using motion to support the experience, not distract from it.",
    "bullets": [
      "Pixel-Precise Visual Design: Layouts built directly in Webflow's Designer, matching approved design files exactly.",
      "Custom Animations & Interactions: Scroll-triggered animations, micro-interactions, and transitions built natively in Webflow.",
      "Responsive Design Across Breakpoints: Careful control over how layouts adapt, not just a generic mobile fallback.",
      "Component & Style System Setup: Reusable components and consistent styling so design stays coherent as the site grows."
    ]
  },
  {
    "title": "DEVELOPMENT & INTEGRATIONS",
    "description": "The technical setup that connects Webflow to the tools and functionality your site actually needs. What We Do Webflow handles most needs natively, custom code is used deliberately, not as a default workaround.",
    "bullets": [
      "Custom Code Embeds: Adding custom HTML, CSS, or JavaScript for functionality beyond Webflow's native tools, when genuinely needed.",
      "Form & CRM Integration: Connecting Webflow forms to your CRM or email marketing platform.",
      "Third-Party Integrations: Booking tools, chat widgets, or analytics platforms configured cleanly.",
      "Webflow Ecommerce Setup: Product catalogs and checkout for brands needing a design-forward store with a smaller catalog."
    ]
  },
  {
    "title": "PERFORMANCE & SEO SETUP",
    "description": "Making sure a visually rich site still loads fast and performs well in search. What We Do Design-heavy sites are the ones most likely to load slowly if performance isn't actively managed, we treat it as part of the build, not an afterthought.",
    "bullets": [
      "Speed Optimization: Image compression, lazy loading, and clean structure to keep animation-heavy pages fast.",
      "On-Page SEO Setup: Meta tags, alt text, sitemap, and Webflow's native SEO controls configured correctly.",
      "Clean, Semantic Code Export: Webflow's exported code kept structured and readable, not bloated with unnecessary divs.",
      "Mobile Performance Check: Confirming interactions and animations perform properly on mobile devices, not just desktop."
    ]
  },
  {
    "title": "ONGOING SUPPORT & MAINTENANCE",
    "description": "A Webflow site's job isn't done at launch, CMS content grows and occasional design or functionality updates come up. What We Do Available as a separate ongoing service - see our [Website Maintenance] page for full details, since this isn't included by default in a development engagement.",
    "bullets": [
      "CMS Content Support: Helping structure new content types or collections as your site's needs evolve.",
      "Design & Interaction Updates: Adjustments to layout, animations, or components without a full rebuild.",
      "Integration Checks: Confirming connected forms, CRM, and third-party tools keep working correctly.",
      "Performance Reviews: Periodic checks on speed as CMS content and page count grow."
    ]
  }
]
  const whyMatters = service?.whyMatters || [
  "A Webflow site built without planning often ends up either visually impressive but hard to update, or easy to update but generic-looking, rarely both.",
  "Design Control Without Losing Manageability",
  "Webflow's design freedom is only an advantage if the CMS structure behind it is planned properly, otherwise every content update risks breaking the visual design.",
  "Trust & Brand Perception",
  "For design-forward brands and agencies, a site that looks templated undercuts the credibility the brand is trying to build in the first place.",
  "Content That Scales Without Developer Dependency",
  "A properly structured CMS means your team can add blog posts, case studies, or listings without touching the design or needing a developer involved.",
  "Right-Sized for Marketing-Led Brands",
  "Webflow is a strong fit when design and content are the priority. For heavy backend logic or large-scale ecommerce, a fully custom build is usually the better investment, we'll tell you which situation you're in."
]
  const whyChooseUs = service?.whyChooseUs || [
  {
    "title": "As a Webflow development company, we work on the platform built specifically for pixel-precise design paired with genuine content management, not a compromise between the two. Our clients get custom interactions, CMS-driven content structures, and clean, semantic code without needing a developer for every visual tweak. With hands-on experience building for both Bangladeshi and international brands, we know how to use Webflow's design freedom without letting a build become unmanageable.",
    "text": "\"Webflow gives you design control most platforms can't match, but that freedom is exactly how a build turns into a mess of unstructured sections if it isn't planned properly. We architect the CMS and design system first.\" Design-Forward Builds | CMS-Driven Content | Clean, Structured Code"
  },
  {
    "title": "Our Webflow Development Services",
    "text": "We offer end-to-end Webflow development tailored to brands that need design control and content structure together."
  },
  {
    "title": "CMS ARCHITECTURE & CONTENT MODELING",
    "text": "Every Webflow build starts with a content structure that makes future updates simple, not fragile."
  },
  {
    "title": "What We Do",
    "text": "* Collection Structure Planning: Designing CMS Collections around how your content actually needs to be organized and reused. * Dynamic Content Templates: Building templates that update automatically as new CMS items are added, blog posts, case studies, products. * Content Relationships: Structuring reference and multi-reference fields so related content connects correctly. * Editor-Friendly Setup: Naming and organizing fields so your team can add content without needing to understand the build. Poorly planned CMS structure is the most common reason a Webflow site becomes hard to maintain six months after launch."
  },
  {
    "title": "CUSTOM DESIGN & INTERACTIONS",
    "text": "Design that takes full advantage of what Webflow's visual canvas actually allows."
  },
  {
    "title": "What We Do",
    "text": "* Pixel-Precise Visual Design: Layouts built directly in Webflow's Designer, matching approved design files exactly. * Custom Animations & Interactions: Scroll-triggered animations, micro-interactions, and transitions built natively in Webflow. * Responsive Design Across Breakpoints: Careful control over how layouts adapt, not just a generic mobile fallback. * Component & Style System Setup: Reusable components and consistent styling so design stays coherent as the site grows. Webflow's interaction tools are powerful and easy to misuse, the difference is restraint, using motion to support the experience, not distract from it."
  },
  {
    "title": "DEVELOPMENT & INTEGRATIONS",
    "text": "The technical setup that connects Webflow to the tools and functionality your site actually needs."
  },
  {
    "title": "What We Do",
    "text": "* Custom Code Embeds: Adding custom HTML, CSS, or JavaScript for functionality beyond Webflow's native tools, when genuinely needed. * Form & CRM Integration: Connecting Webflow forms to your CRM or email marketing platform. * Third-Party Integrations: Booking tools, chat widgets, or analytics platforms configured cleanly. * Webflow Ecommerce Setup: Product catalogs and checkout for brands needing a design-forward store with a smaller catalog. Webflow handles most needs natively, custom code is used deliberately, not as a default workaround."
  },
  {
    "title": "PERFORMANCE & SEO SETUP",
    "text": "Making sure a visually rich site still loads fast and performs well in search."
  },
  {
    "title": "What We Do",
    "text": "* Speed Optimization: Image compression, lazy loading, and clean structure to keep animation-heavy pages fast. * On-Page SEO Setup: Meta tags, alt text, sitemap, and Webflow's native SEO controls configured correctly. * Clean, Semantic Code Export: Webflow's exported code kept structured and readable, not bloated with unnecessary divs. * Mobile Performance Check: Confirming interactions and animations perform properly on mobile devices, not just desktop. Design-heavy sites are the ones most likely to load slowly if performance isn't actively managed, we treat it as part of the build, not an afterthought."
  },
  {
    "title": "ONGOING SUPPORT & MAINTENANCE",
    "text": "A Webflow site's job isn't done at launch, CMS content grows and occasional design or functionality updates come up."
  },
  {
    "title": "What We Do",
    "text": "* CMS Content Support: Helping structure new content types or collections as your site's needs evolve. * Design & Interaction Updates: Adjustments to layout, animations, or components without a full rebuild. * Integration Checks: Confirming connected forms, CRM, and third-party tools keep working correctly. * Performance Reviews: Periodic checks on speed as CMS content and page count grow. Available as a separate ongoing service - see our [Website Maintenance] page for full details, since this isn't included by default in a development engagement. Why Your Business Needs a Real Webflow Development Partner A Webflow site built without planning often ends up either visually impressive but hard to update, or easy to update but generic-looking, rarely both. Design Control Without Losing Manageability Webflow's design freedom is only an advantage if the CMS structure behind it is planned properly, otherwise every content update risks breaking the visual design."
  },
  {
    "title": "Trust & Brand Perception",
    "text": "For design-forward brands and agencies, a site that looks templated undercuts the credibility the brand is trying to build in the first place. Content That Scales Without Developer Dependency A properly structured CMS means your team can add blog posts, case studies, or listings without touching the design or needing a developer involved."
  },
  {
    "title": "Right-Sized for Marketing-Led Brands",
    "text": "Webflow is a strong fit when design and content are the priority. For heavy backend logic or large-scale ecommerce, a fully custom build is usually the better investment, we'll tell you which situation you're in. Why We're Different We're not positioning ourselves as the biggest agency, we're built to be the most accountable one."
  },
  {
    "title": "One In-House Team",
    "text": "Design, CMS architecture, and development handled by one team, not handed off between a designer and developer working from different files."
  },
  {
    "title": "Honest About Platform Fit",
    "text": "We'll recommend Webflow when design flexibility and content management are the priority, and tell you directly if your project needs a fully custom build instead."
  },
  {
    "title": "Local & International Brand Experience",
    "text": "Based in Dhaka, building Webflow sites for brands across Bangladesh as well as internationally, including the US, UK, Australia, Canada, and UAE. Transparent, Review-Based Process Every stage of CMS structure, design, development goes through your review and approval before we move forward."
  },
  {
    "title": "Strategy & Consultation",
    "text": "We start by understanding your brand, content needs, and how your team plans to manage the site after launch."
  },
  {
    "title": "CMS Architecture",
    "text": "Collection structures and content relationships planned around how your content actually needs to work, not a generic setup."
  },
  {
    "title": "Custom Design & Interactions",
    "text": "Pixel-precise design and purposeful animation built directly in Webflow's Designer, matched to your brand."
  },
  {
    "title": "Development & Integrations",
    "text": "Forms, CRM connections, and any needed custom code built cleanly, with custom code used only where genuinely necessary."
  },
  {
    "title": "Performance & SEO Setup",
    "text": "Speed and search settings configured correctly from launch, even on visually rich, animation-heavy pages."
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
