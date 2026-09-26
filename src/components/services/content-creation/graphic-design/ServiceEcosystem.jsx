import Link from 'next/link'
import { SectionIntro } from '../../../Kinetic'

const ecosystem = [
  {
    service: 'Graphic Design',
    badge: 'This Service',
    highlight: true,
    desc: 'Business communication and marketing assets: presentations, pitch decks, company profiles, brochures, catalogues, packaging, print collateral, advertisements, sales collateral, and infographics.',
    link: null
  },
  {
    service: 'Logo Design',
    badge: 'Visual Mark',
    highlight: false,
    desc: 'Creates or refines the core visual mark and foundational emblem that identifies your business across all mediums.',
    link: { text: 'Explore Logo Design', href: '/services/content-creation/logo-design' }
  },
  {
    service: 'Branding & Identity',
    badge: 'System Design',
    highlight: false,
    desc: 'Establishes the broader visual identity, brand guidelines, color palettes, and typographic rules that graphic design executes against.',
    link: { text: 'Explore Branding Services', href: '/services/content-creation/branding' }
  },
  {
    service: 'Social Media Graphics',
    badge: 'Channel Feeds',
    highlight: false,
    desc: 'Platform-specific social feed content, carousels, and stories produced for ongoing social media publishing schedules.',
    link: { text: 'Explore Social Media Graphics', href: '/services/content-creation/social-media-graphics' }
  },
  {
    service: 'Motion Graphics & Animation',
    badge: 'Kinetic Video',
    highlight: false,
    desc: 'Adds movement, UI transitions, kinetic typography, and 2D/3D visual storytelling to video and digital marketing campaigns.',
    link: { text: 'Explore Motion Graphics', href: '/services/content-creation/motion-graphics-animation' }
  }
]

export default function ServiceEcosystem() {
  return (
    <section className="border-b-2 border-frame-border bg-frame-bg px-4 py-16 md:px-8 md:py-24">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro
          eyebrow="Creative Discipline Clarity"
          title="Where Graphic Design Fits With Our Other Creative Services"
        >
          Graphic design works alongside several creative disciplines, but each serves a distinct operational purpose. Keeping them clearly scoped eliminates overlap while ensuring seamless cross-discipline collaboration.
        </SectionIntro>

        <div className="mt-12 grid gap-px border-2 border-frame-border bg-frame-border md:grid-cols-2 lg:grid-cols-3">
          {ecosystem.map((item, idx) => (
            <div
              key={idx}
              className={`p-6 md:p-8 flex flex-col justify-between ${
                item.highlight
                  ? 'border-2 border-frame-accent bg-frame-accent/5 md:col-span-2 lg:col-span-1'
                  : 'bg-frame-bg'
              }`}
            >
              <div>
                <div className="flex items-center justify-between border-b border-frame-border/60 pb-3">
                  <span className={`text-xs font-black uppercase tracking-[0.2em] ${
                    item.highlight ? 'text-frame-accent' : 'text-frame-muted-fg'
                  }`}>
                    {item.badge}
                  </span>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-frame-muted-fg">
                    Discipline
                  </span>
                </div>
                <h3 className="mt-4 font-heading text-lg md:text-xl font-bold uppercase tracking-tight text-frame-fg">
                  {item.service}
                </h3>
                <p className="mt-3 text-xs sm:text-sm font-medium leading-relaxed text-frame-muted-fg">
                  {item.desc}
                </p>
              </div>

              {item.link && (
                <div className="mt-8 pt-4 border-t border-frame-border/60">
                  <Link
                    href={item.link.href}
                    className="text-xs font-bold uppercase tracking-wider text-frame-accent hover:underline inline-flex items-center gap-1"
                  >
                    {item.link.text} &rarr;
                  </Link>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
