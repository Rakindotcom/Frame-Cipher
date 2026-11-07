import Image from 'next/image'
import Link from 'next/link'
import { Layers, Users, Globe2, CheckCircle2 } from 'lucide-react'
import { founders } from '../../data/founders'
import SectionButton from './SectionButton'
import AnimatedCounter from './AnimatedCounter'

const stats = [
  { value: '74', suffix: '', label: 'Services across 7 core areas', icon: Layers },
  { value: '50', suffix: '+', label: 'Brands served', icon: Users },
  { value: '20', suffix: '+', label: 'Countries served', icon: Globe2 },
  { value: '100', suffix: '%', label: 'In-house team', icon: CheckCircle2 },
]

export default function HomeAbout() {
  return (
    <section className="relative isolate border-b border-white/[0.08] bg-[#09090B] px-4 py-20 text-white md:px-8 md:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <h2 className="font-heading text-3xl sm:text-5xl font-semibold leading-[1.05] tracking-tight text-highlighted">
              A multinational tech machine born in Dhaka
            </h2>
          </div>
          <div className="max-w-xl space-y-4">
            <p className="text-base font-normal leading-relaxed text-muted md:text-lg">
              Frame Cipher is building a sovereign, multinational technology, media, and growth powerhouse headquartered in Ecb Chattar, Matikata, Dhaka. We combine full-stack custom software engineering, cinematic media production, and mathematical performance marketing under one unified operating system.
            </p>
            <p className="text-sm font-normal leading-relaxed text-muted">
              Serving fast-growing startups and global enterprises across 20+ countries worldwide with an entirely in-house team across <Link href="/services/website-design-development" className="text-white underline decoration-frame-accent/50 hover:text-frame-accent transition-colors">Web &amp; Software Development</Link>, <Link href="/services/seo" className="text-white underline decoration-frame-accent/50 hover:text-frame-accent transition-colors">SEO</Link>, <Link href="/services/paid-advertising" className="text-white underline decoration-frame-accent/50 hover:text-frame-accent transition-colors">Paid Ads</Link>, <Link href="/services/content-creation" className="text-white underline decoration-frame-accent/50 hover:text-frame-accent transition-colors">Cinematic Media</Link>, and our dedicated <Link href="/studio" className="text-white underline decoration-frame-accent/50 hover:text-frame-accent transition-colors">creative video &amp; podcast studio in Dhaka</Link>.
            </p>
          </div>
        </div>

        {/* Facts with glowing Lucide icons and counting numbers */}
        <div className="grid gap-4 grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon
            return (
              <article key={stat.label} className="group relative overflow-hidden rounded-2xl border border-white/[0.08] bg-[#121214] p-6 transition-all duration-300 hover:border-white/[0.2] hover:bg-[#151518] sm:p-7 before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-gradient-to-r before:from-transparent before:via-purple-600/40 before:to-transparent before:opacity-0 hover:before:opacity-100">
                <div className="flex items-center justify-between border-b border-white/[0.06] pb-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg border border-purple-600/30 bg-purple-600/10 text-purple-600">
                    <IconComponent className="h-4 w-4" />
                  </div>
                  <span className="font-mono text-[11px] text-zinc-500">Verified</span>
                </div>
                <p className="mt-4 font-heading text-4xl sm:text-5xl font-semibold leading-none text-highlighted md:text-6xl tabular-nums">
                  <AnimatedCounter
                    value={stat.value}
                    suffix={stat.suffix}
                    duration={1800}
                    delay={index * 120}
                    suffixClassName="text-purple-600"
                  />
                </p>
                <p className="mt-4 font-mono text-xs uppercase tracking-wider text-purple-600">
                  {stat.label}
                </p>
              </article>
            )
          })}
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
                <span className="font-mono text-xs uppercase tracking-wider text-frame-accent">{founder.role}</span>
                <h3 className="mt-2 font-heading text-xl sm:text-2xl font-semibold text-highlighted tracking-tight">
                  {founder.name}
                </h3>
                <p className="mt-2 font-mono text-xs text-muted">{founder.focus}</p>
                <p className="mt-4 flex-1 text-sm font-normal leading-relaxed text-muted group-hover:text-default transition-colors">{founder.bio}</p>

                <div className="mt-6 flex items-center justify-between border-t border-white/[0.08] pt-5">
                  <span className="font-mono text-[11px] uppercase tracking-wider text-zinc-500">Connect</span>
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
