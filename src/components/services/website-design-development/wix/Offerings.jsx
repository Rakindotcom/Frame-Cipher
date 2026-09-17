import { SectionIntro, PosterButton } from '../../../Kinetic'

export default function Offerings({ service }) {
  const offerings = service?.offerings || [
  {
    "title": "SITE STRATEGY & PLANNING",
    "description": "Every Wix build starts with a clear plan for what the site needs to do and how you'll manage it afterward. What We Do A clear plan upfront means the editor stays simple to use later, instead of becoming a tangled mess of sections.",
    "bullets": [
      "Goal Definition: Identifying what the site needs to achieve inquiries, bookings, or basic online presence.",
      "Page Structure Planning: Organizing pages around what your customers actually need to find.",
      "Template Selection: Starting from the right base structure for your business type, not a mismatched template.",
      "Content Planning: Defining what each page needs to say before design begins."
    ]
  },
  {
    "title": "CUSTOM DESIGN ON WIX",
    "description": "Design that looks professional and matches your brand not an unedited stock template. What We Do Off-the-shelf templates are a starting point; the design work is making it look like your business, not a demo site.",
    "bullets": [
      "Custom Visual Design: Layout, color, and typography matched to your brand within Wix's design system.",
      "Mobile Optimization: Wix's mobile editor is configured so the site works properly on phones, not just desktop.",
      "Wix Studio / Editor X Builds: For businesses needing more design flexibility than the standard editor allows.",
      "Booking & Form Setup: Wix Bookings, contact forms, and inquiry capture configured correctly."
    ]
  },
  {
    "title": "DEVELOPMENT & INTEGRATION",
    "description": "The technical setup that connects your Wix site to the tools your business actually uses. What We Do Most Wix projects don't need custom code but when they do, we use Velo instead of forcing a workaround through apps.",
    "bullets": [
      "Wix Velo Development: Custom code for functionality beyond what the standard editor supports, when genuinely needed.",
      "App & Integration Setup: Connecting Wix's app marketplace tools booking, email marketing, chat cleanly.",
      "Domain & Hosting Setup: Connecting your domain and configuring Wix's hosting correctly from the start.",
      "Basic Wix Stores Setup: Simple product listings and payment setup for small catalogs, where Wix Stores fits."
    ]
  },
  {
    "title": "PERFORMANCE & SEO SETUP",
    "description": "Making sure the site loads well and has a real chance of being found in search. What We Do Wix has real SEO limitations compared to more flexible platforms where we set up what's controllable and are upfront about what isn't.",
    "bullets": [
      "On-Page SEO Setup: Title tags, meta descriptions, and Wix SEO settings configured correctly from launch.",
      "Speed Optimization: Image compression and structure choices that keep load times reasonable within Wix's platform limits.",
      "Mobile Responsiveness Check: Confirming the site performs properly across devices, not just looks right in the editor preview.",
      "Analytics Setup: Connecting Wix Analytics or Google Analytics so you can see how the site is performing."
    ]
  },
  {
    "title": "ONGOING SUPPORT & MAINTENANCE",
    "description": "A Wix site's job isn't done at launch, small updates and occasional platform changes still benefit from a second look. What We Do Available as a separate ongoing service - see our [Website Maintenance] page for full details, since this isn't included by default in a development engagement.",
    "bullets": [
      "Content Update Support: Helping with edits your team isn't confident making alone.",
      "App & Integration Checks: Confirming connected tools (booking, forms, payment) keep working as Wix updates its platform.",
      "Performance Reviews: Periodic checks on speed and mobile display as the site grows.",
      "Editor Troubleshooting: Fixing layout issues that come up from in-editor changes."
    ]
  }
]
  const whyMatters = service?.whyMatters || [
  "A DIY Wix site built without a plan often looks exactly like that of a DIY site.",
  "Fast Launch Without Looking Rushed",
  "Wix is fast to build on, but a rushed build looks like one. A properly planned and designed Wix site gets you online quickly without an amateur appearance costing you credibility.",
  "Trust & First Impressions",
  "A generic template with placeholder text left in, or a layout that breaks on mobile, undermines trust before a visitor even reads what you offer.",
  "Editable Without Breaking",
  "A site built without a clear structure becomes fragile, one wrong edit in the editor and sections shift or break. A properly planned build stays stable even as you make changes yourself.",
  "Right-Sized for the Business",
  "Not every business needs a fully custom platform. Wix is a legitimate, cost-effective choice when the site's needs match what the platform is actually built for."
]
  const whyChooseUs = service?.whyChooseUs || [
  {
    "title": "As a Wix development company, we focus on getting small businesses online quickly without sacrificing design quality or leaving you dependent on us for every small change. Our clients get sites built on Wix's drag-and-drop editor, set up cleanly enough that they can genuinely manage updates themselves afterward. With hands-on experience building for both Bangladeshi and international small businesses, we know when Wix is the right fit, and we'll tell you honestly when it isn't.",
    "text": "\"Wix works best when the project doesn't need custom backend logic or a large product catalog. For a straightforward small business site, it gets you online fast without the overhead of a fully custom build.\" Fast Launch | Easy Self-Editing | Budget-Friendly"
  },
  {
    "title": "Our Wix Development Services",
    "text": "We offer end-to-end Wix development tailored to how small businesses actually need a site to work."
  },
  {
    "title": "SITE STRATEGY & PLANNING",
    "text": "Every Wix build starts with a clear plan for what the site needs to do and how you'll manage it afterward."
  },
  {
    "title": "What We Do",
    "text": "* Goal Definition: Identifying what the site needs to achieve inquiries, bookings, or basic online presence. * Page Structure Planning: Organizing pages around what your customers actually need to find. * Template Selection: Starting from the right base structure for your business type, not a mismatched template. * Content Planning: Defining what each page needs to say before design begins. A clear plan upfront means the editor stays simple to use later, instead of becoming a tangled mess of sections."
  },
  {
    "title": "CUSTOM DESIGN ON WIX",
    "text": "Design that looks professional and matches your brand not an unedited stock template."
  },
  {
    "title": "What We Do",
    "text": "* Custom Visual Design: Layout, color, and typography matched to your brand within Wix's design system. * Mobile Optimization: Wix's mobile editor is configured so the site works properly on phones, not just desktop. * Wix Studio / Editor X Builds: For businesses needing more design flexibility than the standard editor allows. * Booking & Form Setup: Wix Bookings, contact forms, and inquiry capture configured correctly. Off-the-shelf templates are a starting point; the design work is making it look like your business, not a demo site."
  },
  {
    "title": "DEVELOPMENT & INTEGRATION",
    "text": "The technical setup that connects your Wix site to the tools your business actually uses."
  },
  {
    "title": "What We Do",
    "text": "* Wix Velo Development: Custom code for functionality beyond what the standard editor supports, when genuinely needed. * App & Integration Setup: Connecting Wix's app marketplace tools booking, email marketing, chat cleanly. * Domain & Hosting Setup: Connecting your domain and configuring Wix's hosting correctly from the start. * Basic Wix Stores Setup: Simple product listings and payment setup for small catalogs, where Wix Stores fits. Most Wix projects don't need custom code but when they do, we use Velo instead of forcing a workaround through apps."
  },
  {
    "title": "PERFORMANCE & SEO SETUP",
    "text": "Making sure the site loads well and has a real chance of being found in search."
  },
  {
    "title": "What We Do",
    "text": "* On-Page SEO Setup: Title tags, meta descriptions, and Wix SEO settings configured correctly from launch. * Speed Optimization: Image compression and structure choices that keep load times reasonable within Wix's platform limits. * Mobile Responsiveness Check: Confirming the site performs properly across devices, not just looks right in the editor preview. * Analytics Setup: Connecting Wix Analytics or Google Analytics so you can see how the site is performing. Wix has real SEO limitations compared to more flexible platforms where we set up what's controllable and are upfront about what isn't."
  },
  {
    "title": "ONGOING SUPPORT & MAINTENANCE",
    "text": "A Wix site's job isn't done at launch, small updates and occasional platform changes still benefit from a second look."
  },
  {
    "title": "What We Do",
    "text": "* Content Update Support: Helping with edits your team isn't confident making alone. * App & Integration Checks: Confirming connected tools (booking, forms, payment) keep working as Wix updates its platform. * Performance Reviews: Periodic checks on speed and mobile display as the site grows. * Editor Troubleshooting: Fixing layout issues that come up from in-editor changes. Available as a separate ongoing service - see our [Website Maintenance] page for full details, since this isn't included by default in a development engagement. Why Your Business Needs a Real Wix Development Partner A DIY Wix site built without a plan often looks exactly like that of a DIY site."
  },
  {
    "title": "Fast Launch Without Looking Rushed",
    "text": "Wix is fast to build on, but a rushed build looks like one. A properly planned and designed Wix site gets you online quickly without an amateur appearance costing you credibility."
  },
  {
    "title": "Trust & First Impressions",
    "text": "A generic template with placeholder text left in, or a layout that breaks on mobile, undermines trust before a visitor even reads what you offer."
  },
  {
    "title": "Editable Without Breaking",
    "text": "A site built without a clear structure becomes fragile, one wrong edit in the editor and sections shift or break. A properly planned build stays stable even as you make changes yourself."
  },
  {
    "title": "Right-Sized for the Business",
    "text": "Not every business needs a fully custom platform. Wix is a legitimate, cost-effective choice when the site's needs match what the platform is actually built for. Why We're Different We're not positioning ourselves as the biggest agency; we're built to be the most accountable one."
  },
  {
    "title": "One In-House Team",
    "text": "Strategy, design, and setup handled by one team, not handed off between freelancers who've never spoken to each other."
  },
  {
    "title": "Honest About Platform Fit",
    "text": "We'll recommend Wix when it genuinely fits your needs and tell you directly if your project has outgrown it and needs a custom or WordPress build instead. Local & International Small Business Experience Based in Dhaka, building Wix sites for small businesses across Bangladesh as well as internationally, including the US, UK, Australia, Canada, and UAE. Transparent, Review-Based Process Every stage (structure, design, setup) goes through your review and approval before we move forward."
  },
  {
    "title": "Strategy & Consultation",
    "text": "We start by understanding your business, your goals for the site, and how confident you are in managing it afterward."
  },
  {
    "title": "Page Structure & Planning",
    "text": "A clear site structure built around what your customers need to find, not a generic template sitemap."
  },
  {
    "title": "Custom Design",
    "text": "A design that matches your brand within Wix's editor, not an unedited stock template with your logo added."
  },
  {
    "title": "Development & App Integration",
    "text": "Booking, forms, and any needed app integrations set up correctly, with Velo custom code used only where genuinely needed."
  },
  {
    "title": "SEO & Performance Setup",
    "text": "On-page SEO and speed settings configured correctly from launch, with honest limitations explained upfront."
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
