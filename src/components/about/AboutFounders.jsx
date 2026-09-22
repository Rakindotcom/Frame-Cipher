import Image from 'next/image'
import { founders } from '../../data/founders'
import { SectionIntro } from '../Kinetic'

export default function AboutFounders() {
  return (
    <section className="border-t-2 border-frame-border bg-frame-bg px-4 py-24 md:px-8 md:py-32">
      <div className="mx-auto max-w-[95vw]">
        {/* Section Intro */}
        <SectionIntro eyebrow="Leadership / Founders" title="The operators building the machine.">
          Frame Cipher is built and run by hands-on operators who design, engineer, shoot, and scale alongside our client partners. No passive layers. Direct accountability.
        </SectionIntro>

        {/* Founders Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {founders.map((founder, index) => (
            <article
              key={founder.name}
              className="group relative flex flex-col justify-between border-2 border-frame-border bg-frame-muted/30 transition-all duration-300 hover:border-frame-accent hover:shadow-[0_20px_40px_rgba(168,85,247,0.14)]"
            >
              {/* Corner brutalist accents */}
              <span className="absolute -left-1 -top-1 h-2 w-2 bg-frame-accent opacity-0 transition-opacity duration-300 group-hover:opacity-100" aria-hidden="true" />
              <span className="absolute -bottom-1 -right-1 h-2 w-2 bg-frame-accent opacity-0 transition-opacity duration-300 group-hover:opacity-100" aria-hidden="true" />

              <div>
                {/* Image Frame */}
                <div className="relative aspect-[4/5] w-full overflow-hidden border-b-2 border-frame-border bg-zinc-950">
                  <Image
                    src={founder.image}
                    alt={founder.name}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className={`transition-transform duration-700 ease-out group-hover:scale-105 ${founder.name === 'Mahedi Hasan'
                      ? 'object-cover object-top bg-gradient-to-b from-zinc-900 to-black'
                      : 'object-cover object-top'
                      }`}
                  />
                  {/* Subtle vignette gradient */}
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-frame-bg via-transparent to-transparent opacity-60" />

                  {/* Top Badge */}
                  <div className="absolute left-4 top-4 flex items-center gap-2 border border-frame-border/80 bg-frame-bg/90 px-3 py-1 text-[11px] font-black uppercase tracking-[0.2em] text-frame-accent backdrop-blur-sm">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                    <span>0{index + 1} / Founder</span>
                  </div>

                  {/* Portfolio link quick tag if available */}
                  {founder.portfolio && (
                    <a
                      href={founder.portfolio}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="absolute bottom-4 right-4 flex items-center gap-1.5 border border-frame-accent/40 bg-frame-accent/90 px-3 py-1.5 text-[11px] font-black uppercase tracking-[0.16em] text-frame-accent-fg shadow-lg backdrop-blur-sm transition-all duration-300 hover:bg-frame-accent hover:scale-105"
                    >
                      <span>Portfolio</span>
                      <span className="text-xs">↗</span>
                    </a>
                  )}
                </div>

                {/* Content */}
                <div className="p-6 sm:p-8">
                  <p className="text-xs font-black uppercase tracking-[0.24em] text-frame-accent">
                    {founder.role}
                  </p>
                  <h3 className="mt-1 font-heading text-2xl font-bold uppercase leading-tight tracking-tight text-frame-fg sm:text-3xl">
                    {founder.name}
                  </h3>
                  <p className="mt-2 text-xs font-bold uppercase tracking-[0.16em] text-frame-muted-fg">
                    {founder.focus}
                  </p>
                  <p className="mt-4 text-xs font-medium leading-relaxed text-frame-muted-fg sm:text-sm">
                    {founder.bio}
                  </p>
                </div>
              </div>

              {/* Footer / Social links */}
              <div className="border-t border-frame-border/80 bg-frame-bg/60 px-6 py-4 sm:px-8">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-black uppercase tracking-[0.2em] text-frame-muted-fg">
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
      </div>
    </section>
  )
}
