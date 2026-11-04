import Link from 'next/link'
import { Check } from 'lucide-react'

const coreServices = [
  {
    title: 'Strategy & Architecture',
    tag: '01',
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
    title: 'UI/UX Design',
    tag: '02',
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
    title: 'Development & CRM Integration',
    tag: '03',
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
    title: 'Technical Performance',
    tag: '04',
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
    title: 'Ongoing Support & Maintenance',
    tag: '05',
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
    <section className="relative border-t border-white/[0.08] bg-[#09090B] py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
        {/* Section Header */}
        <div className="mb-14 max-w-3xl space-y-4">
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium leading-[0.96] tracking-tight text-white">
            Our Business Website{' '}
            <span className="italic text-frame-accent">Development Services.</span>
          </h2>
          <p className="text-base text-zinc-400 sm:text-lg">
            We offer end-to-end website development tailored to how your business actually sells.
          </p>
        </div>

        {/* Modality 3: Blueprint Matrix */}
        <div className="grid grid-cols-1 border-t border-l border-white/[0.08] md:grid-cols-2 lg:grid-cols-3">
          {coreServices.map((service, index) => (
            <div
              key={index}
              className="group relative flex flex-col justify-between border-r border-b border-white/[0.08] bg-[#09090B] p-6 transition-colors duration-200 hover:bg-[#121214] sm:p-8"
            >
              <div>
                <h3 className="mt-6 font-heading text-xl md:text-2xl font-medium tracking-tight text-white transition-colors duration-200 group-hover:text-frame-accent">
                  {service.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-zinc-300">
                  {service.description}
                </p>

                <div className="mt-6 border-t border-white/[0.06] pt-5">
                  <span className="font-mono text-xs uppercase tracking-wider text-zinc-400">What We Do</span>
                  <ul className="mt-3 space-y-2.5 text-xs sm:text-sm text-zinc-300">
                    {service.bullets.map((bullet, bIdx) => (
                      <li key={bIdx} className="flex items-start gap-2">
                        <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-frame-accent" />
                        <span className="leading-snug">{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-8 border-t border-white/[0.06] pt-4">
                <p className="font-mono text-xs text-zinc-400 leading-relaxed mb-4">
                  {service.takeaway}
                </p>
                <Link href={service.link} className="inline-flex min-h-[44px] h-[44px] w-full items-center justify-between rounded-full border border-white/[0.14] bg-white/[0.03] px-5 text-[13px] font-medium text-white transition-colors duration-200 hover:border-white/[0.25] hover:bg-white/[0.08]"><span>Explore Details</span><span aria-hidden="true" className="transition-transform duration-200 group-hover:translate-x-1">&rarr;</span></Link>
              </div>
            </div>
          ))}

          {/* 6th Slot: Direct Engagement Blueprint Callout to complete 3x2 grid */}
          <div className="group relative flex flex-col justify-between border-r border-b border-white/[0.08] bg-[#121214] p-6 sm:p-8">
            <div className="space-y-4">
              <span className="font-mono text-xs uppercase tracking-wider text-frame-accent">
                Custom Architecture
              </span>
              <h3 className="font-heading text-xl md:text-2xl font-medium tracking-tight text-white">
                Have Custom Technical or Stack Requirements?
              </h3>
              <p className="text-sm leading-relaxed text-zinc-300">
                If your business requires custom API workflows, multi-tiered permission management, or specialized backend infrastructure, we build tailored technical architectures.
              </p>
            </div>
            <div className="mt-8 border-t border-white/[0.08] pt-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-1.5 font-mono text-xs uppercase tracking-wider text-white hover:text-frame-accent transition-colors"
              >
                <span>Request Custom Scoping</span>
                <span aria-hidden="true">&rarr;</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
