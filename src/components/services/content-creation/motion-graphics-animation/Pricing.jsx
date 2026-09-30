import { SectionIntro, PosterButton } from '../../../Kinetic'

function CheckIcon({ className = "h-4 w-4 shrink-0 text-frame-accent mt-0.5" }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 20 20" fill="none" className={className}>
      <path d="m4.5 10 3.5 3.5 7.5-7.5" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

const packages = [
  {
    name: 'Logo Animation / Brand Sting',
    price: '৳8,000+',
    period: 'starting',
    bestFor: 'Brand and video identity, intro/outro stings',
    scope: 'Short branded reveal, intro, or outro',
    popular: false,
    deliverables: [
      'Short branded reveal, intro, or outro',
      'Custom motion design based on vector logo',
      'Transparent alpha channel export (ProRes 4444)',
      'Web-ready MP4 exports (16:9 & square)',
      'Sound effects and sonic branding integration',
      'Included revisions'
    ]
  },
  {
    name: 'Social Motion Creative',
    price: '৳15,000+',
    period: 'starting',
    bestFor: 'Social and campaign content, paid ads',
    scope: 'Short motion graphic with text, graphics, and sound',
    popular: false,
    deliverables: [
      'Short motion graphic (15–30s) with text & sound',
      'Kinetic typography and graphic motion',
      'Vertical (9:16) and feed (1:1) formatted cuts',
      'Royalty-free background music and audio sync',
      'Clear call to action integration',
      'Included revisions'
    ]
  },
  {
    name: 'Explainer Animation',
    price: '৳30,000+*',
    period: 'starting',
    bestFor: 'Products, services, SaaS & internal processes',
    scope: 'Script, storyboard, visual design, animation and sound',
    popular: true,
    deliverables: [
      'Full scriptwriting, storyboard & style frames',
      'Custom visual design & 2D motion graphics',
      'Professional voice-over coordination',
      'Sound design, sound effects & licensed music',
      '16:9 master plus social cutdown options',
      'Structured milestone revision rounds'
    ]
  },
  {
    name: 'Data / Infographic Animation',
    price: '৳15,000+',
    period: 'starting',
    bestFor: 'Reports, presentations and campaigns',
    scope: 'Animated charts, statistics or visual comparisons',
    popular: false,
    deliverables: [
      'Animated charts, statistics, or visual comparisons',
      'Custom branded visual hierarchy and layouts',
      'Sequential data reveals for easy comprehension',
      'High-resolution exports for presentations and web',
      'Clean audio cues and motion effects',
      'Included revisions'
    ]
  },
  {
    name: '3D Product Animation',
    price: '৳40,000+*',
    period: 'starting',
    bestFor: 'Product visualization, hardware, technical mechanisms',
    scope: '3D modeling, animation and rendering based on complexity',
    popular: false,
    deliverables: [
      '3D modeling, texturing, and photorealistic lighting',
      '360-degree product rotations and camera sweeps',
      'Internal feature exploded views and walkthroughs',
      'High-resolution 4K render exports',
      'Cinema-grade sound design and mixing',
      'Milestone review checkpoints'
    ]
  }
]

export default function Pricing() {
  return (
    <section id="pricing" className="border-b-2 border-frame-border bg-frame-bg px-4 py-16 md:px-8 md:py-24 scroll-mt-24">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro
          eyebrow="Transparent Investment"
          title="Motion Graphics & Animation Pricing in Bangladesh"
        >
          Animation pricing depends on duration, visual complexity, animation style, number of scenes, illustration or 3D requirements, sound, voice-over, revisions, and final formats.
        </SectionIntro>

        {/* 5 TIERS GRID */}
        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {packages.map((pkg, idx) => (
            <div
              key={idx}
              className={`border-2 p-6 md:p-8 flex flex-col justify-between ${
                pkg.popular
                  ? 'border-frame-accent bg-frame-accent/10 shadow-lg'
                  : 'border-frame-border bg-frame-bg'
              }`}
            >
              <div>
                <div className="flex items-center justify-between border-b-2 border-frame-border/60 pb-3">
                  <span className="text-xs font-black uppercase tracking-[0.2em] text-frame-accent">
                    Package 0{idx + 1}
                  </span>
                  {pkg.popular && (
                    <span className="border-2 border-frame-accent bg-frame-accent px-2.5 py-0.5 text-[10px] font-black uppercase tracking-[0.2em] text-frame-accent-fg">
                      Most Popular
                    </span>
                  )}
                </div>

                <h3 className="mt-4 font-heading text-xl md:text-2xl font-bold uppercase tracking-tight text-frame-fg">
                  {pkg.name}
                </h3>
                <p className="mt-2 text-xs font-medium text-frame-muted-fg leading-relaxed">
                  {pkg.bestFor}
                </p>

                <div className="mt-6 border-y-2 border-frame-border/60 py-4">
                  <span className="text-[10px] font-black uppercase tracking-[0.2em] text-frame-muted-fg">
                    Starting From
                  </span>
                  <div className="mt-1 flex items-baseline gap-1">
                    <span className="font-heading text-3xl font-bold tracking-tight text-frame-fg">
                      {pkg.price}
                    </span>
                  </div>
                  <span className="mt-1 block text-xs font-semibold text-frame-muted-fg">
                    Scope: {pkg.scope}
                  </span>
                </div>

                <ul className="mt-6 space-y-2.5 text-xs sm:text-sm font-medium text-frame-fg">
                  {pkg.deliverables.map((item, dIdx) => (
                    <li key={dIdx} className="flex items-start gap-2">
                      <CheckIcon />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-8 pt-4 border-t border-frame-border/60">
                <PosterButton
                  href="/contact"
                  variant={pkg.popular ? 'accent' : 'outline'}
                  className="w-full justify-center text-xs sm:text-sm"
                >
                  Choose {pkg.name} &rarr;
                </PosterButton>
              </div>
            </div>
          ))}
        </div>

        {/* PRICING NOTE */}
        <div className="mt-8 border border-frame-border/80 bg-frame-muted/30 p-4 text-xs font-medium text-frame-muted-fg text-center">
          * Final pricing is confirmed after reviewing the script, duration, visual style, number of scenes, asset requirements, complexity, and delivery formats.
        </div>

        {/* GEOGRAPHIC SCOPE */}
        <div className="mt-16 border-2 border-frame-border bg-frame-muted/20 p-6 md:p-10">
          <div className="max-w-3xl">
            <span className="text-xs font-black uppercase tracking-[0.24em] text-frame-accent">
              Geographic Scope
            </span>
            <h3 className="mt-2 font-heading text-2xl md:text-3xl font-bold uppercase tracking-tight text-frame-fg">
              Motion Graphics & Animation for Bangladesh & International Markets
            </h3>
          </div>

          <div className="mt-8 grid gap-8 md:grid-cols-2">
            <div className="border border-frame-border bg-frame-bg p-6">
              <span className="text-xs font-black uppercase tracking-wider text-frame-accent">
                Services in Bangladesh
              </span>
              <p className="mt-3 text-xs sm:text-sm font-medium leading-relaxed text-frame-muted-fg">
                Framecipher produces motion graphics and animation for businesses across Bangladesh, including brands that need explainers, product visuals, social content, animated advertising, data visualization, and branded motion assets. For local audiences, projects can incorporate Bangla, English, or bilingual communication where required.
              </p>
            </div>

            <div className="border border-frame-border bg-frame-bg p-6">
              <span className="text-xs font-black uppercase tracking-wider text-frame-accent">
                International Clients (USA, UK, AU, CA & UAE)
              </span>
              <p className="mt-3 text-xs sm:text-sm font-medium leading-relaxed text-frame-muted-fg">
                We also work with businesses targeting international markets. International projects can be planned around the intended audience, language, visual references, platform requirements, and campaign objectives, delivering world-class animation from a high-efficiency production team.
              </p>
            </div>
          </div>

          <div className="mt-8 flex flex-col items-center justify-between gap-4 border-t border-frame-border/60 pt-6 sm:flex-row">
            <p className="text-xs font-medium text-frame-fg">
              Need custom 3D modeling, specialized characters, or multi-language voice-over?
            </p>
            <PosterButton href="/contact" className="shrink-0 text-xs sm:text-sm">
              Discuss Your Market & Project &rarr;
            </PosterButton>
          </div>
        </div>
      </div>
    </section>
  )
}
