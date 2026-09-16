import Image from 'next/image'
import { SectionIntro } from '../Kinetic'

const founders = [
  {
    name: 'Rakin Al Shahriar',
    role: 'Co-Founder & CEO',
    focus: 'Product Architecture · Strategy · Operating Systems',
    bio: 'Directs agency vision, full-stack product building, and systems engineering. Specializing in turning complex business workflows into high-velocity digital assets and compounding growth engines.',
    image: '/Founders/Rakin Al Shahriar.png',
    portfolio: 'https://rakin.framecipher.info/',
    socials: [
      {
        platform: 'Website',
        url: 'https://rakin.framecipher.info/',
        label: 'Personal Website',
        icon: (
          <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
        ),
      },
      {
        platform: 'LinkedIn',
        url: 'https://www.linkedin.com/in/rakinalshahriar/',
        label: 'LinkedIn Profile',
        icon: (
          <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
            <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.45a1.64 1.64 0 0 0-1.64 1.64c0 .9.74 1.64 1.64 1.64.9 0 1.64-.74 1.64-1.64 0-.9-.74-1.64-1.64-1.64Z" />
          </svg>
        ),
      },
      {
        platform: 'Facebook',
        url: 'https://www.facebook.com/rakinalshahriar',
        label: 'Facebook Profile',
        icon: (
          <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
            <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95z" />
          </svg>
        ),
      },
      {
        platform: 'Instagram',
        url: 'https://www.instagram.com/rakinalshahriar/',
        label: 'Instagram Profile',
        icon: (
          <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.79-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
          </svg>
        ),
      },
    ],
  },
  {
    name: 'Mahedi Hasan',
    role: 'Co-Founder & COO',
    focus: 'Full-Stack Web · SEO Architecture · Performance',
    bio: 'Architects modern web platforms, digital systems, and data-driven organic growth engines that convert attention into compounding pipeline and measurable revenue.',
    image: '/Founders/Mahedi Hasan Perves.png',
    portfolio: 'https://mahedi.framecipher.info/',
    socials: [
      {
        platform: 'Website',
        url: 'https://mahedi.framecipher.info/',
        label: 'Personal Website',
        icon: (
          <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
        ),
      },
      {
        platform: 'LinkedIn',
        url: 'https://www.linkedin.com/in/mahedi-hasan003/',
        label: 'LinkedIn Profile',
        icon: (
          <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
            <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.45a1.64 1.64 0 0 0-1.64 1.64c0 .9.74 1.64 1.64 1.64.9 0 1.64-.74 1.64-1.64 0-.9-.74-1.64-1.64-1.64Z" />
          </svg>
        ),
      },
      {
        platform: 'Facebook',
        url: 'https://www.facebook.com/mahedihasan.perves',
        label: 'Facebook Profile',
        icon: (
          <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
            <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95z" />
          </svg>
        ),
      },
      {
        platform: 'Instagram',
        url: 'https://www.instagram.com/_.mahedi_',
        label: 'Instagram Profile',
        icon: (
          <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.79-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
          </svg>
        ),
      },
    ],
  },
  {
    name: 'Nahid Bin Zaman',
    role: 'Co-Founder & Head of Operations',
    focus: 'Media Production · Campaign Delivery · Client Ops',
    bio: 'Spearheads media strategy, creative execution, and cross-functional operations ensuring every campaign ships with velocity, pristine creative fidelity, and rigorous operational control.',
    image: '/Founders/Nahid Bin Zaman.jpeg',
    portfolio: null,
    socials: [
      {
        platform: 'LinkedIn',
        url: 'https://www.linkedin.com/in/nahid-bin-zaman-680386339/',
        label: 'LinkedIn Profile',
        icon: (
          <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
            <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.45a1.64 1.64 0 0 0-1.64 1.64c0 .9.74 1.64 1.64 1.64.9 0 1.64-.74 1.64-1.64 0-.9-.74-1.64-1.64-1.64Z" />
          </svg>
        ),
      },
      {
        platform: 'Facebook',
        url: 'https://www.facebook.com/nahid.bin.zaman.2025',
        label: 'Facebook Profile',
        icon: (
          <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
            <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95z" />
          </svg>
        ),
      },
      {
        platform: 'Instagram',
        url: 'https://www.instagram.com/wbu.nahid_/',
        label: 'Instagram Profile',
        icon: (
          <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.79-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
          </svg>
        ),
      },
    ],
  },
]

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
