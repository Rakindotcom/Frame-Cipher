import Image from 'next/image'
import Link from 'next/link'
import { founders } from '../../data/founders'
import SectionButton from './SectionButton'

const stats = [
  { value: '74', label: 'Services across 7 core areas' },
  { value: '50+', label: 'Brands served' },
  { value: '20+', label: 'Countries served' },
  { value: '100%', label: 'In-house team' },
]

export default function HomeAbout() {
  return (
    <section className="relative isolate border-b border-white/[0.08] bg-[#09090B] px-4 py-20 text-white md:px-8 md:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium leading-[0.96] tracking-tight text-white">
              A Multinational Tech Machine{' '}
              <span className="italic text-frame-accent">
                Born in Dhaka.
              </span>
            </h2>
          </div>
          <div className="max-w-xl space-y-4">
            <p className="text-base font-normal leading-relaxed text-zinc-300 md:text-lg">
              Frame Cipher is building a sovereign, multinational technology, media, and growth powerhouse headquartered in Ecb Chattar, Matikata, Dhaka. We combine full-stack custom software engineering, cinematic media production, and mathematical performance marketing under one unified operating system.
            </p>
            <p className="text-sm font-normal leading-relaxed text-zinc-400">
              Serving fast-growing startups and global enterprises across 20+ countries worldwide with an entirely in-house team across <Link href="/services/website-design-development" className="text-white underline decoration-frame-accent/50 hover:text-frame-accent transition-colors">Web &amp; Software Development</Link>, <Link href="/services/seo" className="text-white underline decoration-frame-accent/50 hover:text-frame-accent transition-colors">SEO</Link>, <Link href="/services/paid-advertising" className="text-white underline decoration-frame-accent/50 hover:text-frame-accent transition-colors">Paid Ads</Link>, <Link href="/services/content-creation" className="text-white underline decoration-frame-accent/50 hover:text-frame-accent transition-colors">Cinematic Media</Link>, and our dedicated <Link href="/studio" className="text-white underline decoration-frame-accent/50 hover:text-frame-accent transition-colors">creative video &amp; podcast studio in Dhaka</Link>.
            </p>
          </div>
        </div>

        {/* Facts */}
        <div className="grid gap-4 grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <article key={stat.label} className="group relative overflow-hidden rounded-xl border border-white/[0.08] bg-[#121214] p-6 transition-colors duration-300 hover:border-white/[0.16] sm:p-7 before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-gradient-to-r before:from-transparent before:via-frame-accent/40 before:to-transparent before:opacity-0 hover:before:opacity-100">
              <p className="font-heading text-4xl sm:text-5xl font-medium leading-none text-white md:text-6xl tabular-nums">
                {stat.value}
              </p>
              <p className="mt-4 text-[11px] text-frame-accent">
                {stat.label}
              </p>
            </article>
          ))}
        </div>

        {/* Editorial photographs for founders */}
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {founders.map((founder, index) => (
            <article
              key={founder.name}
              className="group relative flex flex-col rounded-xl border border-white/[0.08] bg-[#121214] overflow-hidden transition-colors duration-300 hover:border-white/[0.16] before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-gradient-to-r before:from-transparent before:via-frame-accent/40 before:to-transparent before:opacity-0 hover:before:opacity-100"
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-zinc-900 border-b border-white/[0.08]">
                <Image
                  src={founder.image}
                  alt={founder.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              <div className="flex flex-1 flex-col p-6 md:p-7">
                <span className="text-[11px] text-frame-accent">{founder.role}</span>
                <h3 className="mt-2 font-heading text-2xl font-medium text-white group-hover:text-frame-accent transition-colors sm:text-3xl">
                  {founder.name}
                </h3>
                <p className="mt-2 text-xs text-zinc-400">{founder.focus}</p>
                <p className="mt-4 flex-1 text-sm font-normal leading-relaxed text-zinc-400 group-hover:text-zinc-200 transition-colors">{founder.bio}</p>

                <div className="mt-6 flex items-center justify-between border-t border-white/[0.08] pt-5">
                  <span className="text-[11px] text-zinc-500">Connect</span>
                  <div className="flex items-center gap-2">
                    {founder.socials.map((social) => (
                      <a
                        key={social.platform}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${founder.name} on ${social.platform}`}
                        className="flex h-9 w-9 sm:h-8 sm:w-8 min-h-[36px] min-w-[36px] items-center justify-center rounded-full border border-white/[0.14] bg-white/[0.04] text-zinc-400 transition-colors duration-200 hover:border-white/[0.2] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-frame-accent touch-manipulation"
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

        <div className="mt-14 flex justify-center">
          <SectionButton href="/about">Explore Global Vision &amp; Team</SectionButton>
        </div>
      </div>
    </section>
  )
}
