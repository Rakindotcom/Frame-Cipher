import Image from 'next/image'
import { founders } from '../../data/founders'

export default function AboutFounders() {
  return (
    <section className="relative isolate border-t border-white/[0.08] bg-[#09090B] px-4 py-20 text-white md:px-8 md:py-28">
      <div className="mx-auto max-w-7xl">
        {/* Section Intro */}
        <div className="mb-14 max-w-4xl space-y-4">
          <h2 className="font-heading text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-medium leading-[0.96] tracking-tight text-white">
            The operators building the{' '}
            <span className="italic text-frame-accent">
              multinational machine.
            </span>
          </h2>
          <p className="text-base font-normal leading-relaxed text-zinc-300 md:text-lg">
            Frame Cipher is founded and led by hands-on technical and creative operators who design, engineer, shoot, and scale directly alongside our global enterprise partners. From our Dhaka headquarters, our leadership ensures zero passive bureaucracy, strict adherence to global engineering standards, and direct executive accountability.
          </p>
        </div>

        {/* Founders Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {founders.map((founder, index) => (
            <article
              key={founder.name}
              className="group flex flex-col justify-between overflow-hidden rounded-xl border border-white/[0.08] bg-[#121214] transition-colors duration-200 hover:border-white/[0.14]"
            >
              <div>
                {/* Pure Image Frame (Unobstructed Portrait) */}
                <div className="relative aspect-[4/5] w-full overflow-hidden border-b border-white/[0.08] bg-[#18181B]">
                  <Image
                    src={founder.image}
                    alt={founder.name}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className={`transition-transform duration-500 ease-out group-hover:scale-[1.02] ${
                      founder.name === 'Mahedi Hasan'
                        ? 'object-cover object-top bg-gradient-to-b from-zinc-900 to-black'
                        : 'object-cover object-top'
                    }`}
                  />
                </div>

                {/* Content */}
                <div className="p-6 sm:p-7 space-y-3">
                  <div className="flex items-center justify-between">
                    <p className="font-mono text-[10px] uppercase tracking-[1.1px] text-frame-accent">
                      {founder.role}
                    </p>
                    {founder.portfolio && (
                      <a
                        href={founder.portfolio}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 rounded-full border border-white/[0.12] bg-[#18181B] px-3 py-1 text-[11px] font-medium text-white transition-all duration-200 hover:border-frame-accent/60 hover:bg-frame-accent hover:text-white"
                      >
                        <span>Portfolio</span>
                        <span aria-hidden="true">&rarr;</span>
                      </a>
                    )}
                  </div>
                  <h3 className="font-heading text-xl sm:text-2xl font-medium leading-tight text-white group-hover:text-frame-accent transition-colors">
                    {founder.name}
                  </h3>
                  <p className="font-mono text-xs text-zinc-400">
                    {founder.focus}
                  </p>
                  <p className="text-xs sm:text-sm font-normal leading-relaxed text-zinc-300 pt-1">
                    {founder.bio}
                  </p>
                </div>
              </div>

              {/* Footer / Social links */}
              <div className="border-t border-white/[0.08] bg-[#18181B]/50 px-6 py-3.5 sm:px-7">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[10px] uppercase tracking-wider text-zinc-500">
                    Connect
                  </span>
                  <div className="flex items-center gap-2">
                    {founder.socials.map((social) => (
                      <a
                        key={social.platform}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${founder.name} on ${social.platform}`}
                        className="flex h-9 w-9 sm:h-8 sm:w-8 min-h-[36px] min-w-[36px] items-center justify-center rounded-lg border border-white/[0.08] bg-[#18181B] text-zinc-400 transition-colors hover:border-white/[0.2] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-frame-accent touch-manipulation"
                      >
                        {social.icon}
                        <span className="sr-only">{founder.name} on {social.platform}</span>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
