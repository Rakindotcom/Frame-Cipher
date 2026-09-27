import Link from 'next/link'

const clientLogos = [
  { name: 'Sonali Bioplastics', logo: '/client01.webp', industry: 'Sustainable Tech' },
  { name: 'Client 02', logo: '/client02.webp', industry: 'E-Commerce' },
  { name: 'Client 03', logo: '/client03.webp', industry: 'Healthcare' },
  { name: 'Client 04', logo: '/client04.webp', industry: 'Retail & Consumer' },
  { name: 'Client 05', logo: '/client05.webp', industry: 'B2B Services' },
  { name: 'Client 06', logo: '/client06.webp', industry: 'SaaS Platform' },
  { name: 'Client 07', logo: '/client07.webp', industry: 'Technology' },
  { name: 'Client 08', logo: '/client08.webp', industry: 'Fashion & Lifestyle' },
  { name: 'Client 09', logo: '/client09.webp', industry: 'Direct-to-Consumer' },
  { name: 'Client 10', logo: '/client10.webp', industry: 'Logistics & Supply' },
  { name: 'Client 11', logo: '/client11.webp', industry: 'Fintech & Solutions' },
  { name: 'Client 12', logo: '/Client 12.png', industry: 'Enterprise Partner' },
]

// Duplicate for continuous seamless marquee loop
const marqueeList = [...clientLogos, ...clientLogos, ...clientLogos]

export default function AboutClients() {
  return (
    <section className="border-t-2 border-frame-border bg-frame-bg px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-[95vw]">
        {/* Section Header */}
        <div className="mb-12 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <div className="mb-3 flex items-center gap-2">
              <span className="inline-block h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
              <p className="text-xs font-black uppercase tracking-[0.28em] text-frame-accent md:text-sm">
                Verified Roster / Social Proof
              </p>
            </div>
            <h2 className="font-heading text-[clamp(2.4rem,7vw,6.5rem)] font-bold uppercase leading-[0.85] tracking-tighter text-frame-fg">
              Trusted by Brands Across 20+ Countries.
            </h2>
          </div>
          <div className="max-w-md space-y-3">
            <p className="text-base font-medium leading-relaxed text-frame-muted-fg md:text-lg">
              From category-defining Bangladeshi startups to multinational enterprises in the US, UK, and UAE, we engineer digital systems that scale revenue and market equity.
            </p>
            <div className="flex flex-wrap gap-2 text-[10px] font-mono font-bold uppercase text-frame-accent">
              <span className="border border-frame-border bg-frame-card px-2 py-0.5">50+ Brands</span>
              <span className="border border-frame-border bg-frame-card px-2 py-0.5">20+ Countries</span>
              <span className="border border-frame-border bg-frame-card px-2 py-0.5">Zero Outsourcing</span>
            </div>
          </div>
        </div>

        {/* Dynamic Infinite Marquee Track */}
        <div className="relative -mx-4 mb-16 overflow-hidden border-y-2 border-frame-border bg-frame-card py-6 md:-mx-8 md:py-8 [mask-image:linear-gradient(to_right,transparent,black_5%,black_95%,transparent)] [-webkit-mask-image:linear-gradient(to_right,transparent,black_5%,black_95%,transparent)]">
          <div className="kinetic-marquee-track kinetic-marquee-track-slow" aria-hidden="true">
            {marqueeList.map((client, index) => (
              <div
                key={`${client.name}-${index}`}
                className="group mx-2 flex h-20 w-36 shrink-0 items-center justify-center border-2 border-zinc-200 bg-white px-5 transition-all duration-300 hover:-translate-y-1 hover:border-frame-accent hover:shadow-[0_12px_24px_rgba(168,85,247,0.22)] sm:h-24 sm:w-48 sm:px-6 md:h-28 md:w-56 md:px-8"
              >
                <img
                  src={client.logo}
                  alt={client.name}
                  className="max-h-12 w-full object-contain filter transition duration-300 group-hover:scale-105 sm:max-h-14 md:max-h-16"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Structured 12-Logo Cyber-Brutalist Grid */}
        <div className="border-2 border-frame-border bg-frame-card p-6 md:p-10">
          <div className="mb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-frame-border/80 pb-4">
            <div>
              <span className="font-mono text-xs font-bold uppercase tracking-widest text-frame-accent">
                VERIFIED PORTFOLIO ROSTER
              </span>
              <h3 className="font-heading text-lg font-bold uppercase tracking-tight text-frame-fg sm:text-xl">
                Partner Brands &amp; Client Deployments
              </h3>
            </div>
            <span className="font-mono text-xs font-semibold text-frame-muted-fg">
              12 Client Showcases Displayed
            </span>
          </div>

          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 sm:gap-4">
            {clientLogos.map((client, idx) => (
              <div
                key={client.name}
                className="group relative flex flex-col items-center justify-between border border-frame-border bg-white p-4 transition-all duration-300 hover:-translate-y-1 hover:border-frame-accent hover:shadow-[0_10px_25px_rgba(168,85,247,0.2)]"
              >
                <span className="self-start font-mono text-[9px] font-bold text-zinc-400 group-hover:text-frame-accent transition-colors">
                  0{idx + 1}
                </span>
                <div className="flex h-16 w-full items-center justify-center py-2">
                  <img
                    src={client.logo}
                    alt={client.name}
                    className="max-h-12 max-w-full object-contain filter transition-transform duration-300 group-hover:scale-110"
                    loading="lazy"
                  />
                </div>
                <span className="mt-1 text-center font-mono text-[9px] font-bold uppercase tracking-wider text-zinc-500 truncate w-full">
                  {client.industry}
                </span>
              </div>
            ))}
          </div>

          {/* Bottom Trust Quote */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-frame-border/80 pt-6 text-xs text-frame-muted-fg">
            <p className="font-medium text-center sm:text-left">
              From stealth-stage startups to international enterprises, our clients stay with us because we take sovereign ownership over every deliverable.
            </p>
            <Link
              href="/projects"
              className="inline-flex shrink-0 items-center gap-1.5 font-bold uppercase tracking-wider text-frame-accent hover:text-white transition-colors"
            >
              <span>View Case Studies &amp; Work</span>
              <span aria-hidden="true">&rarr;</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
