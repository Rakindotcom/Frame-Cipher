const clients = [
  { name: 'Sonali Bioplastics', logo: '/client01.webp' },
  { name: 'Client 02', logo: '/client02.webp' },
  { name: 'Client 03', logo: '/client03.webp' },
  { name: 'Client 04', logo: '/client04.webp' },
  { name: 'Client 05', logo: '/client05.webp' },
  { name: 'Client 06', logo: '/client06.webp' },
  { name: 'Client 07', logo: '/client07.webp' },
  { name: 'Client 08', logo: '/client08.webp' },
  { name: 'Client 09', logo: '/client09.webp' },
  { name: 'Client 10', logo: '/client10.webp' },
  { name: 'Client 11', logo: '/client11.webp' },
]

// Duplicate list for seamless 50% infinite loop
const baseClients = [...clients, ...clients]
const marqueeClients = [...baseClients, ...baseClients]

export default function Clients() {
  return (
    <section className="relative isolate border-y-2 border-zinc-200 bg-[#fafafa] px-4 py-16 text-zinc-950 md:px-8 md:py-24">
      <div className="mx-auto max-w-[95vw]">
        {/* Header & Meta */}
        <div className="mb-10 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <div>
            <div className="mb-3 flex items-center gap-2">
              <span className="inline-block h-2 w-2 rounded-full bg-emerald-500" />
              <p className="text-xs font-black uppercase tracking-[0.28em] text-frame-accent">
                Client Roster / Verification
              </p>
            </div>
            <h2 className="font-heading text-[clamp(2.2rem,6.5vw,5.5rem)] font-bold uppercase leading-[0.85] tracking-tighter text-zinc-950">
              Brands we have helped move forward
            </h2>
          </div>
          <p className="max-w-md text-sm font-semibold leading-snug text-zinc-600 md:text-base">
            From regional category leaders to global platforms, we deliver integrated growth, media, and digital infrastructure.
          </p>
        </div>

        {/* Auto-scrolling logo marquee with edge fading */}
        <div className="relative -mx-4 overflow-hidden border-y-2 border-zinc-300 bg-zinc-100 py-6 md:-mx-8 md:py-8 [mask-image:linear-gradient(to_right,transparent,black_6%,black_94%,transparent)] [-webkit-mask-image:linear-gradient(to_right,transparent,black_6%,black_94%,transparent)]">
          <p className="sr-only">A continuous auto-scrolling showcase of client logos that Frame Cipher has worked with.</p>
          
          <div
            className="kinetic-marquee-track kinetic-marquee-track-slow hover:[animation-play-state:paused]"
            aria-hidden="true"
          >
            {marqueeClients.map((client, index) => (
              <div
                key={`${client.name}-${index}`}
                className="group mx-2 flex h-20 w-36 shrink-0 items-center justify-center border-2 border-zinc-300 bg-white px-5 transition-all duration-300 hover:-translate-y-1 hover:border-frame-accent hover:shadow-[0_12px_24px_rgba(168,85,247,0.18)] sm:h-24 sm:w-48 sm:px-6 md:h-28 md:w-56 md:px-8"
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

        {/* Bottom meta bar */}
        <div className="mt-4 flex flex-wrap items-center justify-between gap-3 text-[11px] font-black uppercase tracking-[0.2em] text-zinc-500">
          <span>Continuous Execution / 10+ Brands</span>
          <span className="hidden sm:inline">Auto-scrolling · Hover to inspect</span>
          <span>B2B · B2C · Personal Brand · E-Commerce</span>
        </div>
      </div>
    </section>
  )
}
