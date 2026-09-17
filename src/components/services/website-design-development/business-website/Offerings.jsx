import { SectionIntro, SectionLabel } from '../../../Kinetic'

const coreServices = [
  {
    title: 'Strategy & Architecture',
    tag: 'Phase 01',
    description: 'Every business website starts with a plan built around your sales funnel, not a generic template sitemap.',
    bullets: [
      'Buyer Journey Mapping: Structuring pages around how customers decide.',
      'Site Architecture: Clear navigation built for conversion, not just aesthetics.',
      'Competitor Review: Identifying what is missing from sites you are up against.',
      'Content Planning: Defining what each page needs to say and do.',
    ],
  },
  {
    title: 'UI/UX Design',
    tag: 'Phase 02',
    description: 'Design that looks professional while guiding visitors toward an inquiry, not just scrolling past.',
    bullets: [
      'Wireframing: Mapping layout and flow before visual design begins.',
      'Conversion-Focused Layout: CTAs and forms placed where decisions happen.',
      'Brand-Aligned Visuals: Design that matches how your business presents itself.',
      'Mobile-First Design: Built for the device most visitors actually use.',
    ],
  },
  {
    title: 'Development & CRM Integration',
    tag: 'Phase 03',
    description: 'The technical build that connects your website to the tools your sales team already uses.',
    bullets: [
      'Custom Development: Clean, maintainable code, not bloated page-builder output.',
      'CRM Integration: Connecting forms and lead capture to your existing systems.',
      'Analytics Setup: Tracking visitor behavior and conversion points from day one.',
      'Third-Party Integrations: Booking tools, live chat, or marketing platforms as needed.',
    ],
  },
  {
    title: 'Technical Performance',
    tag: 'Phase 04',
    description: 'Speed and stability that keep visitors on the page long enough to convert.',
    bullets: [
      'Speed Optimization: Fast load times across devices and connection speeds.',
      'Mobile Responsiveness: Full functionality on every screen size.',
      'Security Setup: SSL, secure hosting practices, and basic hardening.',
      'Clean Code Structure: Built to be maintained and extended, not rebuilt in a year.',
    ],
  },
  {
    title: 'Ongoing Support & Maintenance',
    tag: 'Phase 05',
    description: 'A website needs regular attention to stay secure, fast, and current as your business changes.',
    bullets: [
      'Security Monitoring & Updates: Keeping core software and dependencies current.',
      'Backup & Recovery: Regular backups so a recoverable version always exists.',
      'Performance Checks: Monitoring speed and uptime before visitors notice.',
      'Content & Feature Updates: Small changes handled without full redevelopment.',
    ],
  },
]

const featuresList = [
  { title: 'Lead Capture Forms', desc: 'Contact, inquiry, quote, and consultation forms collecting the information your sales team needs.' },
  { title: 'CRM Integration', desc: 'Connect website leads directly to your existing CRM without manual copying.' },
  { title: 'Analytics & Conversion Tracking', desc: 'Configure analytics and conversion events so you understand where visitors come from.' },
  { title: 'WhatsApp & Call Integration', desc: 'Add WhatsApp, click-to-call, and direct communication options where appropriate.' },
  { title: 'Booking & Appointment Tools', desc: 'Connect scheduling tools to make it easy for visitors to request consultations.' },
  { title: 'SEO-Ready Technical Structure', desc: 'Clean URL hierarchy, metadata, XML sitemaps, and search-friendly markup built-in.' },
]

const industries = [
  { title: 'Service Businesses', desc: 'Websites built to explain services clearly and generate calls, inquiries, or consultations.' },
  { title: 'Professional Firms', desc: 'Structured websites for consultants, agencies, legal firms, and financial services.' },
  { title: 'Startups & SMEs', desc: 'Scalable websites that establish authority while leaving room for new offerings.' },
  { title: 'Corporate & Brands', desc: 'Larger websites with clear information architecture and multi-audience navigation.' },
  { title: 'Local Businesses', desc: 'Designed around locations, maps, direct calls, and localized customer actions.' },
  { title: 'SaaS & Technology', desc: 'Explains complex products clearly while supporting demos, signups, and app workflows.' },
]

export default function Offerings() {
  return (
    <div className="bg-frame-bg text-frame-fg">
      {/* CORE CAPABILITIES */}
      <section className="px-4 py-20 md:px-8 md:py-28">
        <div className="mx-auto max-w-[95vw]">
          <SectionIntro
            eyebrow="Scope of work"
            title="Our Business Website Development Services"
          >
            We offer end-to-end website development tailored to how your business actually sells.
          </SectionIntro>

          <div className="grid bg-frame-border gap-px md:grid-cols-2 lg:grid-cols-3">
            {coreServices.map((service, index) => (
              <div key={index} className="bg-frame-bg p-7 md:p-8 flex flex-col justify-between">
                <div>
                  <span className="text-xs font-black uppercase tracking-[0.24em] text-frame-accent">{service.tag}</span>
                  <h3 className="mt-3 font-heading text-xl md:text-2xl font-bold uppercase tracking-tight text-frame-fg">
                    {service.title}
                  </h3>
                  <p className="mt-3 text-sm md:text-base font-medium leading-relaxed text-frame-muted-fg">
                    {service.description}
                  </p>
                </div>
                <ul className="mt-6 space-y-2.5 border-t border-frame-border/60 pt-5 text-xs md:text-sm font-medium text-frame-fg/90">
                  {service.bullets.map((bullet, bIdx) => (
                    <li key={bIdx} className="flex items-start gap-2">
                      <span className="text-frame-accent font-bold">✓</span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURES & INTEGRATIONS */}
      <section className="border-t-2 border-frame-border bg-frame-bg px-4 py-20 md:px-8 md:py-28">
        <div className="mx-auto max-w-[95vw]">
          <SectionIntro
            eyebrow="Tools & Capabilities"
            title="Business Website Features & Integrations"
          >
            A business website often needs more than pages. We connect your site to the tools your team uses to manage leads and communication.
          </SectionIntro>

          <div className="grid bg-frame-border gap-px sm:grid-cols-2 lg:grid-cols-3">
            {featuresList.map((feature, index) => (
              <div key={index} className="bg-frame-bg p-7">
                <SectionLabel className="mb-2">Capability {String(index + 1).padStart(2, '0')}</SectionLabel>
                <h3 className="font-heading text-lg md:text-xl font-bold uppercase tracking-tight text-frame-fg">
                  {feature.title}
                </h3>
                <p className="mt-3 text-sm font-medium leading-relaxed text-frame-muted-fg">
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INDUSTRIES */}
      <section className="border-t-2 border-frame-border bg-frame-bg px-4 py-20 md:px-8 md:py-28">
        <div className="mx-auto max-w-[95vw]">
          <SectionIntro
            eyebrow="Market Alignment"
            title="Business Website Solutions for Different Industries"
          >
            Different businesses need different website structures and conversion paths. We adapt around how your customers research, compare, and contact.
          </SectionIntro>

          <div className="grid bg-frame-border gap-px sm:grid-cols-2 lg:grid-cols-3">
            {industries.map((ind, index) => (
              <div key={index} className="bg-frame-bg p-7">
                <h3 className="font-heading text-lg font-bold uppercase tracking-tight text-frame-fg">
                  {ind.title}
                </h3>
                <p className="mt-3 text-sm font-medium leading-relaxed text-frame-muted-fg">
                  {ind.desc}
                </p>
              </div>
            ))}
          </div>

          {/* BANGLADESH & INTERNATIONAL CALLOUT */}
          <div className="mt-12 border-2 border-frame-border bg-frame-muted/30 p-7 md:p-10">
            <h3 className="font-heading text-xl md:text-2xl font-bold uppercase tracking-tight text-frame-fg">
              Business Websites for the Bangladesh Market & Worldwide
            </h3>
            <p className="mt-4 text-sm md:text-base font-medium leading-relaxed text-frame-muted-fg">
              A website for a Bangladeshi business accounts for Bangla-English content, mobile-first connections, WhatsApp direct communication, local office locations, and bKash/Nagad where applicable. For international clients in the US, UK, Australia, Canada, and UAE, we tailor messaging to global market expectations.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
