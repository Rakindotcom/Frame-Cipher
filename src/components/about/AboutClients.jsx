const clientLogos = [
  { name: 'Sonali Bioplastics', logo: '/client01.webp', industry: 'Bioplastics' },
  { name: 'Spenta', logo: '/client02.webp', industry: 'Immersive Tech' },
  { name: 'Hotel Ashrafee', logo: '/client03.webp', industry: 'Hospitality' },
  { name: 'ALFIS Limited', logo: '/client04.webp', industry: 'Garments Accessories' },
  { name: 'UDRIK', logo: '/client05.webp', industry: 'Product Design' },
  { name: 'Freedom Flotilla Coalition', logo: '/client06.webp', industry: 'Humanitarian Coalition' },
  { name: 'Bangladesh Flotilla', logo: '/client07.webp', industry: 'Humanitarian Advocacy' },
  { name: 'ERL', logo: '/client08.webp', industry: 'Real Estate' },
  { name: 'Coach Kamrul Hasan Network', logo: '/client09.webp', industry: 'Coaching & Leadership' },
  { name: 'UB', logo: '/client10.webp', industry: 'E-Commerce' },
  { name: 'Muhsin Mashkur', logo: '/client11.webp', industry: 'Arabic & Islamic Education' },
  { name: 'SABCCI', logo: '/Client 12.webp', industry: 'Chamber of Commerce' },
  { name: 'Thrive Clothing', logo: '/thrive-clothing.webp', industry: 'Fashion E-Commerce' },
  { name: 'Derma Ghor', logo: '/dg-logo.webp', industry: 'Skincare & Wellness' },
]

// Duplicate for continuous seamless marquee loop
const marqueeList = [...clientLogos, ...clientLogos, ...clientLogos]

export default function AboutClients() {
  return (
    <section className="relative isolate border-t border-white/[0.08] bg-[#09090B] px-4 py-20 text-white md:px-8 md:py-28">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mb-12 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl space-y-3">
            <h2 className="font-heading text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold leading-[0.96] tracking-tight text-highlighted">
              Trusted by Brands Across 20+ Countries.
            </h2>
          </div>
          <div className="max-w-md space-y-3">
            <p className="text-base font-normal leading-relaxed text-zinc-200">
              From category-defining Bangladeshi startups to multinational enterprises in the US, UK, and UAE, we engineer digital systems that scale revenue and market equity.
            </p>
            <div className="flex flex-wrap gap-2 text-xs font-mono uppercase text-zinc-400">
              <span className="rounded-full border border-white/[0.08] bg-[#18181B] px-3 py-1 text-white font-medium">50+ Brands</span>
              <span className="rounded-full border border-white/[0.08] bg-[#18181B] px-3 py-1 text-zinc-300 font-medium">20+ Countries</span>
              <span className="rounded-full border border-white/[0.08] bg-[#18181B] px-3 py-1 text-white font-medium">Zero Outsourcing</span>
            </div>
          </div>
        </div>

        {/* Dynamic Infinite Marquee Track - Clean floating logos with zero background boxes */}
        <div className="relative -mx-4 overflow-hidden border-y border-white/[0.08] bg-[#121214] py-6 md:-mx-8 md:py-8 [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)] [-webkit-mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
          <div className="kinetic-marquee-track kinetic-marquee-track-slow hover:[animation-play-state:paused]" aria-hidden="true">
            {marqueeList.map((client, index) => (
              <div
                key={`${client.name}-${index}`}
                className="group mx-4 flex h-16 w-32 shrink-0 items-center justify-center sm:mx-6 sm:h-20 sm:w-40 md:mx-8 md:h-22 md:w-44"
              >
                <img
                  src={client.logo}
                  alt={client.name}
                  className="max-h-9 sm:max-h-11 md:max-h-12 w-auto max-w-[85%] object-contain opacity-100 transition-all duration-300 group-hover:scale-110"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
