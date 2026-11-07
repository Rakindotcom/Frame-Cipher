import Link from 'next/link'
import SectionButton from '../home/SectionButton'

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

const directoryList = [
  {
    name: 'Clutch',
    logo: '/Listed%20In/Clutch-transparent.webp',
    status: 'Verified Agency',
    badge: 'Top B2B & Tech Partner',
    rating: '5.0 ★ Rating',
  },
  {
    name: 'Trustpilot',
    logo: '/Listed%20In/Trustpilot-transparent.webp',
    status: '5.0 Score',
    badge: 'Verified Client Reviews',
    rating: 'Excellent',
  },
  {
    name: 'SelectedFirms',
    logo: '/Listed%20In/SelectedFirms-transparent.webp',
    status: 'Top Marketing Agency',
    badge: 'Ranked Global Company',
    rating: 'Official Badge',
    url: 'https://selectedfirms.co/companies/digital-marketing-agencies?utm_source=framecipher&utm_medium=badge&utm_campaign=digital_marketing_agencies&utm_term=top_digital_marketing_company&utm_content=agency_badge&utm_marketing_tactic=badge_organic',
  },
  {
    name: 'GoodFirms',
    logo: '/Listed%20In/GoodFirms-transparent.webp',
    status: 'Top Rated Company',
    badge: 'Software & Growth',
    rating: 'Verified Leader',
  },
  {
    name: 'ShortList',
    logo: '/Listed%20In/ShortList-transparent.webp',
    status: 'Featured Partner',
    badge: 'Curated Agency Directory',
    rating: 'Official Listing',
  },
]

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
            <p className="text-base font-normal leading-relaxed text-zinc-300">
              From category-defining Bangladeshi startups to multinational enterprises in the US, UK, and UAE, we engineer digital systems that scale revenue and market equity.
            </p>
            <div className="flex flex-wrap gap-2 text-xs font-mono uppercase text-zinc-400">
              <span className="rounded-full border border-white/[0.08] bg-[#18181B] px-3 py-1 text-purple-600 font-semibold">50+ Brands</span>
              <span className="rounded-full border border-white/[0.08] bg-[#18181B] px-3 py-1 text-zinc-300">20+ Countries</span>
              <span className="rounded-full border border-purple-600/30 bg-purple-950/40 px-3 py-1 text-purple-200">Zero Outsourcing</span>
            </div>
          </div>
        </div>

        {/* Dynamic Infinite Marquee Track - Clean floating logos with zero background boxes */}
        <div className="relative -mx-4 mb-8 overflow-hidden border-y border-white/[0.08] bg-[#121214] py-6 md:-mx-8 md:py-8 [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)] [-webkit-mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
          <div className="kinetic-marquee-track kinetic-marquee-track-slow hover:[animation-play-state:paused]" aria-hidden="true">
            {marqueeList.map((client, index) => (
              <div
                key={`${client.name}-${index}`}
                className="group mx-4 flex h-16 w-32 shrink-0 items-center justify-center sm:mx-6 sm:h-20 sm:w-40 md:mx-8 md:h-22 md:w-44"
              >
                <img
                  src={client.logo}
                  alt={client.name}
                  className="max-h-9 sm:max-h-11 md:max-h-12 w-auto max-w-[85%] object-contain opacity-50 grayscale brightness-125 contrast-125 transition-opacity duration-300 group-hover:opacity-100 group-hover:grayscale-0 group-hover:scale-110"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Provenance Context Bar */}
        <div className="mb-14 flex flex-col sm:flex-row items-center justify-between gap-4 border-b border-white/[0.08] pb-8 text-xs text-zinc-400">
          <p className="font-normal text-center sm:text-left text-zinc-300 max-w-2xl leading-relaxed">
            From stealth-stage startups to international enterprises, our clients stay with us because we take sovereign ownership over every deliverable.
          </p>
          <SectionButton href="/projects" className="font-mono text-xs uppercase tracking-wider">
            View Case Studies &amp; Work
          </SectionButton>
        </div>

        {/* Elevated "Recognized & Listed On" Architectural Trust Ribbon */}
        <div className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div>
              <h3 className="font-heading text-xl sm:text-2xl font-semibold tracking-tight text-highlighted">
                Recognized &amp; Listed On
              </h3>
            </div>
            <p className="font-mono text-xs text-zinc-500 uppercase">
              Independent Agency Ratings &amp; Verified Reviews
            </p>
          </div>

          {/* 5-Column High-End Architectural Directory Cards */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {directoryList.map((dir) => {
              const cardContent = (
                <div className="relative rounded-2xl border border-white/[0.08] bg-[#121214] p-5 md:p-6 flex flex-col justify-between h-full hover:border-purple-600/40 hover:bg-[#18181B] transition-colors duration-300 group overflow-hidden before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-gradient-to-r before:from-transparent before:via-purple-600/40 before:to-transparent before:opacity-0 hover:before:opacity-100">
                  <div>
                    <div className="flex items-center justify-between border-b border-white/[0.06] pb-2.5">
                      <span className="font-mono text-[10px] uppercase tracking-[1.1px] text-purple-600 font-medium">
                        {dir.rating}
                      </span>
                      <span className="h-1.5 w-1.5 rounded-full bg-purple-600/60 group-hover:bg-purple-600 transition-colors" />
                    </div>

                    <div className="flex h-12 items-center justify-start my-3">
                      <img
                        src={dir.logo}
                        alt={dir.name}
                        className="max-h-8 max-w-[130px] w-auto object-contain filter brightness-105 contrast-110 opacity-80 group-hover:opacity-100 transition-opacity duration-300"
                        loading="lazy"
                      />
                    </div>

                    <div className="space-y-1">
                      <h4 className="font-heading text-sm md:text-base font-semibold tracking-tight text-highlighted">
                        {dir.name}
                      </h4>
                      <p className="font-mono text-[10px] uppercase text-zinc-400">
                        {dir.status}
                      </p>
                    </div>
                  </div>

                  <div className="pt-3 border-t border-white/[0.04] mt-3">
                    <span className="font-mono text-[10px] uppercase tracking-wider text-zinc-500 group-hover:text-zinc-300 transition-colors">
                      {dir.badge}
                    </span>
                  </div>
                </div>
              )

              if (dir.url) {
                return (
                  <a
                    key={dir.name}
                    href={dir.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    title={`${dir.name} - ${dir.status}`}
                    className="block h-full"
                  >
                    {cardContent}
                  </a>
                )
              }

              return (
                <div key={dir.name} className="h-full">
                  {cardContent}
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
