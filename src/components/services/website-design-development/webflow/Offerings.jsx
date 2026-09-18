const coreServices = [
  {
    tag: 'Service 01',
    title: 'Webflow CMS & Component Architecture',
    description: 'We structure CMS collections and reusable components so non-technical team members can publish new content effortlessly.',
    bullets: [
      'CMS Collection schema architecture and custom reference fields.',
      'Dynamic collection page templates for blogs, case studies, and teams.',
      'Modular reusable components with customizable properties.',
      'Editor-friendly naming conventions following Client-First standards.',
    ],
  },
  {
    tag: 'Service 02',
    title: 'Custom Interactions & Micro-Animations',
    description: 'Engaging user interfaces brought to life through native Webflow interactions, scroll-based effects, and smooth transitions.',
    bullets: [
      'Pixel-accurate visual layouts across standard and custom breakpoints.',
      'Scroll-triggered reveal animations and interactive parallax effects.',
      'Micro-interactions, magnetic buttons, and custom hover states.',
      'Mobile-optimized touch gestures and performance-tuned frame rates.',
    ],
  },
  {
    tag: 'Service 03',
    title: 'Figma to Webflow Development',
    description: 'Direct translation of approved Figma designs into responsive, clean, and semantically structured Webflow production code.',
    bullets: [
      'Strict adherence to Figma layouts, typography, and spacing scales.',
      'Component-based design system conversion with global styles.',
      'Responsive adaptations for tablet, mobile landscape, and mobile portrait.',
      'Interactive form styling, success states, and modal overlays.',
    ],
  },
  {
    tag: 'Service 04',
    title: 'Webflow Apps, APIs & Custom Code',
    description: 'Extending Webflow functionality with custom JavaScript, third-party business apps, and backend API connections.',
    bullets: [
      'Custom JavaScript embeds, third-party libraries, and calculators.',
      'CRM integrations (HubSpot, Salesforce, ActiveCampaign, Mailchimp).',
      'Zapier and Make automations for lead pipelines and webhooks.',
      'Interactive search and filtering tools (Finsweet Attributes).',
    ],
  },
  {
    tag: 'Service 05',
    title: 'Webflow Migration & Replatforming',
    description: 'Rebuilding outdated WordPress, Squarespace, or Wix sites in Webflow while protecting search visibility and organic traffic.',
    bullets: [
      'Complete content, imagery, and database collection extraction.',
      'Comprehensive 301 URL redirect mapping to avoid broken links.',
      'SEO metadata, canonical tags, and Open Graph schema migration.',
      'Pre-launch staging validation and post-launch crawl verification.',
    ],
  },
  {
    tag: 'Service 06',
    title: 'Webflow Localization & Multilingual',
    description: 'Building multi-region websites with localized content, country-specific subdirectories, and international SEO tags.',
    bullets: [
      'Native Webflow localization setup across multiple target locales.',
      'Localized static pages, CMS collection entries, and image assets.',
      'Language selector components with automatic geo-detection.',
      'Locale-specific URLs, hreflang tag configurations, and meta tags.',
    ],
  },
  {
    tag: 'Service 07',
    title: 'Webflow Ecommerce Development',
    description: 'Design-led ecommerce storefronts engineered for boutique brands requiring bespoke product presentation and smooth checkout.',
    bullets: [
      'Custom product and category catalog page design.',
      'Tailored shopping cart overlays and customized checkout flows.',
      'Stripe / PayPal payment processing and automated tax calculations.',
      'Product-level SEO schema markup and social sharing assets.',
    ],
  },
  {
    tag: 'Service 08',
    title: 'SEO, Accessibility & Performance QA',
    description: 'Ensuring your site loads in milliseconds, passes Core Web Vitals, and adheres to modern web accessibility standards.',
    bullets: [
      'Semantic HTML tags, proper heading structures, and alt text.',
      'WebP image compression, asset minification, and lazy loading.',
      'WCAG contrast checks, focus outlines, and screen reader labels.',
      'Automated XML sitemaps, robots.txt, and Google Search Console setup.',
    ],
  },
  {
    tag: 'Service 09',
    title: 'Client CMS Training & Handover',
    description: 'Empowering your marketing team to edit copy, update images, and publish new case studies without writing code.',
    bullets: [
      'Recorded video walkthrough tutorials customized to your build.',
      'Live training session on Webflow Editor mode for marketing staff.',
      'Documentation covering reusable components and CMS fields.',
      'Full workspace or site transfer directly to your Webflow account.',
    ],
  },
]

const businessNeeds = [
  {
    title: 'Design-Led Brand Flagships',
    desc: 'Bespoke agency, architectural, and luxury brand websites where creative visual presentation and typography define credibility.',
  },
  {
    title: 'SaaS & Tech Marketing Websites',
    desc: 'High-growth tech companies needing modular landing pages, interactive product feature tours, and seamless CRM integrations.',
  },
  {
    title: 'Content & Thought Leadership Hubs',
    desc: 'Publishers, consultants, and research firms using structured CMS collections with categorized articles, author bios, and search.',
  },
  {
    title: 'Creative Portfolios & Showcases',
    desc: 'Photographers, motion designers, and creative directors needing seamless video embeds, gallery grids, and project case studies.',
  },
  {
    title: 'Multilingual Global Websites',
    desc: 'International brands serving audiences in multiple languages through Webflow localization and localized SEO architectures.',
  },
  {
    title: 'Boutique Ecommerce Stores',
    desc: 'Curated direct-to-consumer brands offering unique products that require elevated storytelling and visual craftsmanship.',
  },
]

const comparisonData = [
  {
    factor: 'Visual Design Control',
    webflow: 'Exceptional (Full CSS box-model & typography control)',
    wordpress: 'High with custom themes; moderate with builders',
    wix: 'Good (Drag-and-drop within platform constraints)',
    highlight: 'webflow',
  },
  {
    factor: 'CMS Architecture',
    webflow: 'Outstanding structured collections & dynamic binding',
    wordpress: 'Very high via Custom Post Types & ACF',
    wix: 'Moderate via Wix CMS collections',
    highlight: 'webflow',
  },
  {
    factor: 'Custom Code & Scripts',
    webflow: 'Clean HTML/CSS/JS embeds, API webhooks, headless',
    wordpress: 'Unlimited PHP, database, and server access',
    wix: 'Velo code & supported API tools',
  },
  {
    factor: 'Hosting & Security',
    webflow: 'Fastly CDN cloud hosting; automated SSL & backups',
    wordpress: 'Requires self-managed hosting, SSL & security updates',
    wix: 'Fully managed cloud hosting ecosystem',
    highlight: 'webflow',
  },
  {
    factor: 'Animation & Interactions',
    webflow: 'Native visual timeline interaction engine',
    wordpress: 'Requires external JS animation libraries (GSAP)',
    wix: 'Basic built-in scroll & fade animations',
    highlight: 'webflow',
  },
  {
    factor: 'Client Publishing Experience',
    webflow: 'Clean Editor view preventing layout breaks',
    wordpress: 'Good with Gutenberg; risk of layout shifts',
    wix: 'Direct visual canvas drag-and-drop',
    highlight: 'webflow',
  },
  {
    factor: 'Best Suited For',
    webflow: 'Design-forward brands, tech startups, marketing teams',
    wordpress: 'Large content platforms, directories, custom portals',
    wix: 'Straightforward small business & startup launches',
  },
]

const differentiators = [
  {
    title: 'Unified Design & Dev Team',
    desc: 'Our engineers are trained designers, meaning your approved Figma files are translated with millimeter precision into Webflow.',
  },
  {
    title: 'Client-First Class Naming',
    desc: 'We use established class naming systems (Client-First), ensuring your project remains clean, organized, and easy for any developer to scale.',
  },
  {
    title: 'Platform-Neutral Honesty',
    desc: 'We recommend Webflow when design control and marketing agility matter most; we never force Webflow when WordPress or custom code fits better.',
  },
  {
    title: 'Zero SEO Equity Loss',
    desc: 'We conduct meticulous 301 URL redirect mapping, structured data setups, and Google Search Console verifications on all replatforming projects.',
  },
  {
    title: 'Performance-Tuned Interactions',
    desc: 'We craft smooth, micro-interactions and scroll animations that delight visitors without triggering layout shifts or slow page loads.',
  },
  {
    title: 'True Client Autonomy',
    desc: 'You receive full site transfer, comprehensive documentation, and personalized video training so your team can publish independently.',
  },
]

export default function Offerings() {
  return (
    <div className="bg-frame-bg text-frame-fg">
      {/* PART 1: CORE SERVICES */}
      <section className="px-4 py-20 md:px-8 md:py-32 border-b-2 border-frame-border">
        <div className="mx-auto max-w-[95vw]">
          <div className="mb-14 md:mb-20 max-w-4xl">
            <p className="mb-3 text-xs md:text-sm font-black uppercase tracking-[0.28em] text-frame-accent">
              Visual Craft / Capabilities
            </p>
            <h2 className="font-heading text-[clamp(2.4rem,6vw,5rem)] font-bold uppercase leading-[0.88] tracking-tighter text-frame-fg">
              Our Webflow Services
            </h2>
            <p className="mt-6 max-w-3xl text-base md:text-xl font-medium leading-relaxed text-frame-muted-fg">
              We build Webflow websites that balance extraordinary visual craft with structured CMS architecture, lightning-fast hosting, and client autonomy.
            </p>
          </div>

          <div className="grid bg-frame-border gap-px sm:grid-cols-2 lg:grid-cols-3 border-2 border-frame-border">
            {coreServices.map((service, index) => (
              <article
                key={index}
                className="group flex flex-col justify-between bg-frame-bg p-7 sm:p-9 transition-colors duration-300 hover:bg-frame-muted/30"
              >
                <div>
                  <span className="text-xs font-black uppercase tracking-[0.28em] text-frame-accent">
                    {service.tag}
                  </span>
                  <h3 className="mt-4 font-heading text-xl sm:text-2xl font-bold uppercase tracking-tight text-frame-fg">
                    {service.title}
                  </h3>
                  <p className="mt-4 text-sm sm:text-base font-medium leading-relaxed text-frame-muted-fg">
                    {service.description}
                  </p>
                </div>
                <ul className="mt-8 space-y-3 border-t-2 border-frame-border/60 pt-6 text-xs sm:text-sm font-medium text-frame-fg/90">
                  {service.bullets.map((bullet, bIdx) => (
                    <li key={bIdx} className="flex items-start gap-2.5">
                      <span className="text-frame-accent font-bold">✓</span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* PART 2: SOLUTIONS FOR BUSINESS NEEDS */}
      <section className="bg-frame-muted/20 px-4 py-20 md:px-8 md:py-32 border-b-2 border-frame-border">
        <div className="mx-auto max-w-[95vw]">
          <div className="mb-14 md:mb-20 max-w-4xl">
            <p className="mb-3 text-xs md:text-sm font-black uppercase tracking-[0.28em] text-frame-accent">
              Aesthetic Systems / Solutions
            </p>
            <h2 className="font-heading text-[clamp(2.4rem,6vw,5rem)] font-bold uppercase leading-[0.88] tracking-tighter text-frame-fg">
              Webflow for Distinct Brand Needs
            </h2>
            <p className="mt-6 max-w-3xl text-base md:text-xl font-medium leading-relaxed text-frame-muted-fg">
              Webflow is the ideal environment for brands that view design, typography, and speed as core commercial advantages.
            </p>
          </div>

          <div className="grid bg-frame-border gap-px sm:grid-cols-2 lg:grid-cols-3 border-2 border-frame-border">
            {businessNeeds.map((item, index) => (
              <article key={index} className="flex flex-col justify-between bg-frame-bg p-7 sm:p-9 transition-colors duration-300 hover:bg-frame-muted/30">
                <div>
                  <span className="text-[11px] font-black uppercase tracking-[0.24em] text-frame-accent block mb-2">
                    Solution 0{index + 1}
                  </span>
                  <h3 className="font-heading text-lg sm:text-xl md:text-2xl font-bold uppercase tracking-tight text-frame-fg">
                    {item.title}
                  </h3>
                </div>
                <p className="mt-5 text-sm sm:text-base font-medium leading-relaxed text-frame-muted-fg">
                  {item.desc}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* PART 3: COMPARISON MATRIX */}
      <section className="px-4 py-20 md:px-8 md:py-32 border-b-2 border-frame-border">
        <div className="mx-auto max-w-[95vw]">
          <div className="mb-14 md:mb-20 max-w-4xl">
            <p className="mb-3 text-xs md:text-sm font-black uppercase tracking-[0.28em] text-frame-accent">
              Platform Decision / Matrix
            </p>
            <h2 className="font-heading text-[clamp(2.4rem,6vw,5rem)] font-bold uppercase leading-[0.88] tracking-tighter text-frame-fg">
              Webflow vs WordPress vs Wix
            </h2>
            <p className="mt-6 max-w-3xl text-base md:text-xl font-medium leading-relaxed text-frame-muted-fg">
              Compare creative flexibility, CMS capabilities, and infrastructure to make the right platform decision for your business.
            </p>
          </div>

          <div className="overflow-x-auto border-2 border-frame-border bg-frame-bg shadow-sm">
            <table className="w-full text-left min-w-[680px]">
              <thead className="border-b-2 border-frame-border bg-frame-muted/40">
                <tr>
                  <th className="p-5 md:p-7 text-xs md:text-sm font-black uppercase tracking-[0.24em] text-frame-accent">Factor</th>
                  <th className="p-5 md:p-7 text-xs md:text-sm font-black uppercase tracking-[0.24em] text-frame-accent">Webflow</th>
                  <th className="p-5 md:p-7 text-xs md:text-sm font-black uppercase tracking-[0.24em] text-frame-accent">WordPress</th>
                  <th className="p-5 md:p-7 text-xs md:text-sm font-black uppercase tracking-[0.24em] text-frame-accent">Wix</th>
                </tr>
              </thead>
              <tbody className="divide-y-2 divide-frame-border text-sm md:text-base font-medium">
                {comparisonData.map((row, idx) => (
                  <tr key={idx} className="hover:bg-frame-muted/20 transition-colors">
                    <td className="p-5 md:p-7 font-bold text-frame-fg">{row.factor}</td>
                    <td className={`p-5 md:p-7 ${row.highlight === 'webflow' ? 'font-bold text-frame-accent' : 'text-frame-fg'}`}>
                      {row.webflow}
                    </td>
                    <td className="p-5 md:p-7 text-frame-muted-fg">{row.wordpress}</td>
                    <td className="p-5 md:p-7 text-frame-muted-fg">{row.wix}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* PART 4: WHY CHOOSE US */}
      <section className="bg-frame-muted/10 px-4 py-20 md:px-8 md:py-32">
        <div className="mx-auto max-w-[95vw]">
          <div className="mb-14 md:mb-20 max-w-4xl">
            <p className="mb-3 text-xs md:text-sm font-black uppercase tracking-[0.28em] text-frame-accent">
              The Framecipher Advantage
            </p>
            <h2 className="font-heading text-[clamp(2.4rem,6vw,5rem)] font-bold uppercase leading-[0.88] tracking-tighter text-frame-fg">
              Why Choose Us for Webflow Development
            </h2>
            <p className="mt-6 max-w-3xl text-base md:text-xl font-medium leading-relaxed text-frame-muted-fg">
              We engineer Webflow projects with disciplined architecture, structured naming, and rigorous cross-device testing.
            </p>
          </div>

          <div className="grid bg-frame-border gap-px sm:grid-cols-2 lg:grid-cols-3 border-2 border-frame-border">
            {differentiators.map((diff, idx) => (
              <article key={idx} className="flex flex-col justify-between bg-frame-bg p-7 sm:p-9 transition-colors duration-300 hover:bg-frame-muted/30">
                <div>
                  <span className="text-xs font-black uppercase tracking-[0.24em] text-frame-accent">
                    Differentiator 0{idx + 1}
                  </span>
                  <h3 className="mt-4 font-heading text-lg sm:text-xl md:text-2xl font-bold uppercase tracking-tight text-frame-fg">
                    {diff.title}
                  </h3>
                </div>
                <p className="mt-5 text-sm sm:text-base font-medium leading-relaxed text-frame-muted-fg">
                  {diff.desc}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
