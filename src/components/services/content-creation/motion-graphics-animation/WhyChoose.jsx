import Link from 'next/link'
import { SectionIntro, PosterButton } from '../../../Kinetic'

const pillars = [
  {
    num: '01',
    title: 'One In-House Creative Team',
    desc: 'Strategy, design, vector illustration, 2D/3D keyframing, audio editing, and sound design stay within one synchronized team. No disjointed vendor handoffs or fractured communication.'
  },
  {
    num: '02',
    title: 'Animation Planned Around the Message',
    desc: 'We do not pick an animation trend and force your product into it. We analyze what your audience needs to understand, then craft the visual hierarchy, pacing, and motion to deliver that clarity.'
  },
  {
    num: '03',
    title: 'Brand-Consistent Motion Language',
    desc: 'Your motion assets will look seamlessly connected to your brand. We adapt typography, color codes, vector style, easing curves, and UI patterns directly from your brand guidelines.'
  },
  {
    num: '04',
    title: 'Built for Bangladesh & Global Markets',
    desc: 'Bilingual Bangla-English capability for local enterprise campaigns, plus world-class visual aesthetics and standards for international clients across the US, UK, Australia, Canada, and UAE.'
  },
  {
    num: '05',
    title: 'Integrated Creative Coordination',
    desc: 'Motion graphics works side-by-side with our live-action video, paid media, and copywriting teams, ensuring unified messaging across all digital touchpoints.'
  }
]

const relatedServices = [
  { name: 'Video Production', path: '/services/content-creation/video-production' },
  { name: 'YouTube Video Production', path: '/services/content-creation/youtube-videos' },
  { name: 'Graphic Design', path: '/services/content-creation/graphic-design' },
  { name: 'Branding', path: '/services/content-creation/branding' },
  { name: 'Logo Design', path: '/services/content-creation/logo-design' },
  { name: 'Paid Advertising', path: '/services/paid-advertising' },
  { name: 'Content Writing', path: '/services/content-writing' }
]

export default function WhyChoose() {
  return (
    <section className="border-b-2 border-frame-border bg-frame-bg px-4 py-16 md:px-8 md:py-24">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro
          eyebrow="The Framecipher Difference"
          title="Why Choose Framecipher for Motion Graphics & Animation"
        >
          We treat motion graphics not as visual decoration, but as an indispensable engineering tool for commercial clarity and audience action.
        </SectionIntro>

        {/* 5 PILLARS */}
        <div className="mt-12 grid gap-px border-2 border-frame-border bg-frame-border sm:grid-cols-2 lg:grid-cols-3">
          {pillars.map((item, idx) => (
            <div
              key={item.num}
              className={`bg-frame-bg p-6 md:p-8 flex flex-col justify-between ${
                idx === 4 ? 'sm:col-span-2 lg:col-span-2' : ''
              }`}
            >
              <div>
                <span className="font-mono text-xs font-black text-frame-accent">
                  Standard {item.num}
                </span>
                <h3 className="mt-3 font-heading text-lg md:text-xl font-bold uppercase tracking-tight text-frame-fg">
                  {item.title}
                </h3>
                <p className="mt-3 text-xs sm:text-sm font-medium leading-relaxed text-frame-muted-fg">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CROSS-SERVICE COORDINATION */}
        <div className="mt-16 border-2 border-frame-border bg-frame-muted/20 p-6 md:p-8">
          <span className="text-xs font-black uppercase tracking-[0.24em] text-frame-accent">
            Cross-Service Ecosystem
          </span>
          <h4 className="mt-2 font-heading text-xl md:text-2xl font-bold uppercase tracking-tight text-frame-fg">
            Coordinated With Other Creative Services
          </h4>
          <p className="mt-2 text-xs sm:text-sm font-medium text-frame-muted-fg max-w-3xl">
            Where your campaign demands live-action integration, paid ad management, or full brand identity design, motion graphics connects seamlessly across our in-house departments:
          </p>

          <div className="mt-6 flex flex-wrap gap-2">
            {relatedServices.map((svc, idx) => (
              <Link
                key={idx}
                href={svc.path}
                className="border border-frame-border bg-frame-bg px-3.5 py-2 text-xs font-bold uppercase tracking-wider text-frame-fg transition-colors hover:border-frame-accent hover:text-frame-accent"
              >
                {svc.name} &rarr;
              </Link>
            ))}
          </div>
        </div>

        {/* PORTFOLIO SHOWCASE */}
        <div className="mt-16 border-2 border-frame-accent bg-frame-bg p-6 md:p-10">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between border-b-2 border-frame-accent/40 pb-6">
            <div>
              <span className="text-xs font-black uppercase tracking-[0.24em] text-frame-accent">
                Verified Portfolio
              </span>
              <h3 className="mt-2 font-heading text-2xl md:text-3xl font-bold uppercase tracking-tight text-frame-fg">
                Selected Motion Graphics & Animation Work
              </h3>
              <p className="mt-2 text-xs sm:text-sm font-medium text-frame-muted-fg max-w-2xl">
                Explore real Framecipher client productions across 2D explainers, 3D product visualizations, kinetic typography, and SaaS interface animations.
              </p>
            </div>
            <PosterButton href="/projects#animation-work" variant="outline" className="shrink-0">
              View Our Motion Graphics Portfolio &rarr;
            </PosterButton>
          </div>

          <div className="mt-6 grid gap-2 sm:grid-cols-2 md:grid-cols-4 text-xs font-bold uppercase tracking-wider text-frame-fg text-center">
            <div className="border border-frame-border/80 bg-frame-muted/30 p-3">SaaS & Tech Explainers</div>
            <div className="border border-frame-border/80 bg-frame-muted/30 p-3">3D Product Visuals</div>
            <div className="border border-frame-border/80 bg-frame-muted/30 p-3">Brand Motion & Stings</div>
            <div className="border border-frame-border/80 bg-frame-muted/30 p-3">Data & Metric Graphics</div>
          </div>
        </div>
      </div>
    </section>
  )
}
