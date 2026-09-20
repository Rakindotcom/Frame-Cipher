import Link from 'next/link'
import { SectionIntro } from '../../../Kinetic'

const coreServices = [
  {
    title: 'STRATEGY & ARCHITECTURE',
    tag: 'Phase 01',
    description: 'Every business website starts with a plan built around your sales funnel, not a generic template sitemap.',
    bullets: [
      'Buyer Journey Mapping: Structuring pages around how customers actually decide.',
      'Site Architecture: Clear navigation built for conversion, not just aesthetics.',
      'Competitor Review: Identifying what\'s missing from sites you\'re up against.',
      'Content Planning: Defining what each page needs to say and do.',
    ],
    takeaway: 'Good architecture means visitors find what they need without friction and take the next step.',
    link: '/contact',
  },
  {
    title: 'UI/UX DESIGN',
    tag: 'Phase 02',
    description: 'Design that looks professional while guiding visitors toward an inquiry, not just scrolling past.',
    bullets: [
      'Wireframing: Mapping layout and flow before visual design begins.',
      'Conversion-Focused Layout: CTAs and forms placed where decisions happen.',
      'Brand-Aligned Visuals: Design that matches how your business presents itself.',
      'Mobile-First Design: Built for the device most visitors actually use.',
    ],
    takeaway: 'Design isn\'t decoration here; every layout choice is tied to a reason a visitor should act.',
    link: '/services/website-design-development/ui-ux-design',
  },
  {
    title: 'DEVELOPMENT & CRM INTEGRATION',
    tag: 'Phase 03',
    description: 'The technical build that connects your website to the tools your sales team already uses.',
    bullets: [
      'Custom Development: Clean, maintainable code, not bloated page-builder output.',
      'CRM Integration: Connecting forms and lead capture to your existing systems.',
      'Analytics Setup: Tracking visitor behavior and conversion points from day one.',
      'Third-Party Integrations: Booking tools, live chat, or marketing platforms as needed.',
    ],
    takeaway: 'A website that doesn\'t talk to your CRM is a website your sales team has to work around.',
    link: '/contact',
  },
  {
    title: 'TECHNICAL PERFORMANCE',
    tag: 'Phase 04',
    description: 'Speed and stability that keep visitors on the page long enough to convert.',
    bullets: [
      'Speed Optimization: Fast load times across devices and connection speeds.',
      'Mobile Responsiveness: Full functionality on every screen size.',
      'Security Setup: SSL, secure hosting practices, and basic hardening.',
      'Clean Code Structure: Built to be maintained and extended, not rebuilt in a year.',
    ],
    takeaway: 'Technical performance is invisible when it works, and costly when it doesn\'t.',
    link: '/contact',
  },
  {
    title: 'ONGOING SUPPORT & MAINTENANCE',
    tag: 'Phase 05',
    description: 'A website\'s job isn\'t done at launch; it needs regular attention to stay secure, fast, and current as your business changes.',
    bullets: [
      'Security Monitoring & Updates: Keeping core software, plugins, and dependencies current and patched.',
      'Backup & Recovery: Regular backups so a recoverable version of the site always exists.',
      'Performance Checks: Monitoring speed and uptime, and fixing issues before visitors notice them.',
      'Content & Feature Updates: Small changes and additions handled without a full redevelopment project.',
    ],
    takeaway: 'Available as a separate ongoing service, see our Website Maintenance page for full details, since this isn\'t included by default in a development engagement.',
    link: '/services/website-design-development/maintenance',
  },
]

export default function Offerings() {
  return (
    <section className="border-t-2 border-frame-border bg-frame-bg px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro eyebrow="End-to-End Capabilities / Sales Alignment" title="Our Business Website Development Services" index="02">
          We offer end-to-end website development tailored to how your business actually sells.
        </SectionIntro>

        <div className="grid bg-frame-border gap-px border-2 border-frame-border md:grid-cols-2 lg:grid-cols-3">
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

                <div className="mt-6 border-t border-frame-border/60 pt-5">
                  <span className="text-xs font-black uppercase tracking-widest text-frame-accent">What We Do</span>
                  <ul className="mt-3 space-y-2.5 text-xs md:text-sm font-medium text-frame-fg/90">
                    {service.bullets.map((bullet, bIdx) => (
                      <li key={bIdx} className="flex items-start gap-2">
                        <span className="text-frame-accent font-bold">✓</span>
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-8 border-t border-frame-border/60 pt-5">
                <p className="text-xs font-medium italic leading-relaxed text-frame-muted-fg mb-4">
                  {service.takeaway}
                </p>
                <Link
                  href={service.link}
                  className="inline-flex items-center text-xs font-black uppercase tracking-wider text-frame-accent hover:underline"
                >
                  Learn More &rarr;
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}