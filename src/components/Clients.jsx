import AnimatedCounter from './home/AnimatedCounter'

const clients = [
  { name: 'Sonali Bioplastics', logo: '/client01.webp' },
  { name: 'Spenta', logo: '/client02.webp' },
  { name: 'Hotel Ashrafee', logo: '/client03.webp' },
  { name: 'ALFIS Limited', logo: '/client04.webp' },
  { name: 'UDRIK', logo: '/client05.webp' },
  { name: 'Freedom Flotilla Coalition', logo: '/client06.webp' },
  { name: 'Bangladesh Flotilla', logo: '/client07.webp' },
  { name: 'ERL', logo: '/client08.webp' },
  { name: 'Coach Kamrul Hasan Network', logo: '/client09.webp' },
  { name: 'UB', logo: '/client10.webp' },
  { name: 'Muhsin Mashkur', logo: '/client11.webp' },
  { name: 'SABCCI', logo: '/Client 12.webp' },
  { name: 'Thrive Clothing', logo: '/thrive-clothing.webp' },
  { name: 'Derma Ghor', logo: '/dg-logo.webp' },
]

// Duplicate list for seamless 50% infinite loop
const baseClients = [...clients, ...clients]
const marqueeClients = [...baseClients, ...baseClients]

export default function Clients() {
  return (
    <section className="relative isolate border-b border-white/[0.08] bg-[#09090B] px-4 py-16 text-white md:px-8 md:py-24 overflow-hidden">
      <div className="mx-auto max-w-7xl">
        {/* Header & Meta */}
        <div className="mb-10 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <h2 className="font-heading text-3xl sm:text-5xl font-semibold leading-[1.05] tracking-tight text-highlighted">
              Brands we have helped move forward
            </h2>
          </div>
          <p className="max-w-md text-base font-normal leading-relaxed text-muted">
            From regional category leaders to global platforms, we deliver integrated growth, media, and digital infrastructure.
          </p>
        </div>

        {/* Auto-scrolling logo marquee with edge fading */}
        <div className="relative -mx-4 overflow-hidden border-y border-white/[0.08] bg-[#121214] py-6 md:-mx-8 md:py-8 [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)] [-webkit-mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)] before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-gradient-to-r before:from-transparent before:via-purple-600/40 before:to-transparent">
          <p className="sr-only">A continuous auto-scrolling showcase of client logos that Frame Cipher has worked with.</p>

          <div
            className="kinetic-marquee-track kinetic-marquee-track-slow hover:[animation-play-state:paused]"
            aria-hidden="true"
          >
            {marqueeClients.map((client, index) => (
              <div
                key={`${client.name}-${index}`}
                className="group mx-4 flex h-16 w-32 shrink-0 items-center justify-center sm:mx-6 sm:h-20 sm:w-44 md:mx-8 md:h-24 md:w-52"
              >
                <img
                  src={client.logo}
                  alt={client.name}
                  className="max-h-10 sm:max-h-12 md:max-h-14 w-auto max-w-[85%] object-contain opacity-50 grayscale brightness-125 contrast-125 transition-opacity duration-300 group-hover:opacity-100 group-hover:grayscale-0 group-hover:scale-110"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Bottom meta bar */}
        <div className="mt-6 flex flex-wrap items-center justify-between gap-3 font-mono text-[11px] uppercase tracking-[1.1px] text-muted">
          <span className="flex items-center gap-2 text-zinc-300">
            <span className="h-1.5 w-1.5 rounded-full bg-purple-600" />
            <AnimatedCounter value={50} suffix="+" duration={1400} suffixClassName="text-purple-600" /> Brands
          </span>
          <span className="hidden sm:inline-flex items-center gap-2 text-zinc-300">
            <span className="h-1.5 w-1.5 rounded-full bg-purple-600" />
            <AnimatedCounter value={100} suffix="%" duration={1600} suffixClassName="text-purple-600" /> Satisfied Clients
          </span>
          <span className="text-zinc-500">B2B · B2C · Personal Brand · E-Commerce</span>
        </div>
      </div>
    </section>
  )
}
