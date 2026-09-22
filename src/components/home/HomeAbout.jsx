import Image from 'next/image'
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
    <section className="px-4 py-20 md:px-8 md:py-32">
      <div className="mx-auto max-w-[95vw]">
        <div className="mb-12 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <p className="mb-3 text-xs font-black uppercase tracking-[0.28em] text-frame-accent md:text-sm">
              About / Frame Cipher
            </p>
            <h2 className="font-heading text-[clamp(2.4rem,7vw,6.5rem)] font-bold uppercase leading-[0.85] tracking-tighter text-frame-fg">
              Who is behind the cipher.
            </h2>
          </div>
          <p className="max-w-xl text-base font-medium leading-relaxed text-frame-muted-fg md:text-lg">
            Frame Cipher is a 360 marketing, media, and technology agency headquartered in Mirpur 14, Dhaka,
            Bangladesh. The team works with brands in Bangladesh and worldwide, from B2B and B2C to personal
            brands and e-commerce, with an entirely in-house team across Website Design &amp; Development, App
            Development, SEO, Paid Advertising, Social Media Management, Content Writing, and Content Creation.
          </p>
        </div>

        <div className="grid bg-frame-border gap-px sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <article key={stat.label} className="bg-frame-bg p-6 sm:p-7">
              <p className="font-heading text-5xl font-bold uppercase leading-none tracking-tighter text-frame-fg md:text-6xl">
                {stat.value}
              </p>
              <p className="mt-4 text-[0.7rem] font-black uppercase tracking-[0.22em] text-frame-accent">
                {stat.label}
              </p>
            </article>
          ))}
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {founders.map((founder, index) => (
            <article
              key={founder.name}
              className="group flex flex-col border-2 border-frame-border bg-frame-bg transition-all duration-300 hover:border-frame-accent"
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden border-b-2 border-frame-border bg-zinc-950">
                <Image
                  src={founder.image}
                  alt={founder.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-frame-bg via-transparent to-transparent opacity-50" />
                <span className="absolute left-4 top-4 border border-frame-border/80 bg-frame-bg/90 px-3 py-1 text-[11px] font-black uppercase tracking-[0.2em] text-frame-accent backdrop-blur-sm">
                  0{index + 1} / Founder
                </span>
              </div>

              <div className="flex flex-1 flex-col p-6 md:p-7">
                <p className="text-xs font-black uppercase tracking-[0.24em] text-frame-accent">{founder.role}</p>
                <h3 className="mt-1 font-heading text-2xl font-bold uppercase leading-tight tracking-tight text-frame-fg sm:text-3xl">
                  {founder.name}
                </h3>
                <p className="mt-2 text-xs font-bold uppercase tracking-[0.16em] text-frame-muted-fg">{founder.focus}</p>
                <p className="mt-4 flex-1 text-sm font-medium leading-relaxed text-frame-muted-fg">{founder.bio}</p>

                <div className="mt-6 flex items-center justify-between border-t border-frame-border/80 pt-5">
                  <span className="text-[10px] font-black uppercase tracking-[0.2em] text-frame-muted-fg">Connect</span>
                  <div className="flex items-center gap-2">
                    {founder.socials.map((social) => (
                      <a
                        key={social.platform}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${founder.name} on ${social.platform}`}
                        className="flex h-8 w-8 items-center justify-center border border-frame-border bg-frame-bg text-frame-muted-fg transition-all duration-200 hover:-translate-y-0.5 hover:border-frame-accent hover:bg-frame-accent hover:text-frame-accent-fg"
                      >
                        {social.icon}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <SectionButton href="/about">Meet the full team</SectionButton>
        </div>
      </div>
    </section>
  )
}