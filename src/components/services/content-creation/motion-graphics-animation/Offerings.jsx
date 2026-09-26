import { SectionIntro, PosterButton } from '../../../Kinetic'

function CheckIcon({ className = "h-4 w-4 shrink-0 text-frame-accent mt-0.5" }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 20 20" fill="none" className={className}>
      <path d="m4.5 10 3.5 3.5 7.5-7.5" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

const offerings = [
  {
    category: 'Format 01',
    title: 'Explainer & Process Animation',
    desc: 'Explainer animation makes complex products, services, processes, or concepts easier to follow. We develop the script, visual structure, storyboard, style frames, animation, voice-over coordination, and sound design as part of the agreed scope.',
    bullets: [
      'Product and service explainer videos',
      'Process, system & workflow animation',
      'SaaS and technology interface explainers',
      'App and software walkthrough animations',
      'Educational and internal training animation'
    ],
    ctaText: 'Request an Explainer Quote',
    ctaLink: '/contact'
  },
  {
    category: 'Format 02',
    title: 'Kinetic Typography & Text Animation',
    desc: 'Sometimes the message itself is the visual. Kinetic typography uses movement, timing, typography, and sound to give written or spoken words a stronger visual hierarchy and emotional resonance.',
    bullets: [
      'Kinetic typography campaign videos',
      'Animated quotes, reviews & testimonials',
      'Text-led promotional & announcement content',
      'Lyric and audio-synced typography animations',
      'Social-first branded animated captions'
    ]
  },
  {
    category: 'Format 03',
    title: 'Logo Animation & Brand Motion',
    desc: 'A static identity can also have a signature motion language. We create short animated brand elements for videos, campaigns, pitch decks, websites, and social channels to keep content connected.',
    bullets: [
      'Signature logo reveals & brand stings',
      'Animated video intros, outros & end cards',
      'Broadcast title cards & motion lower-thirds',
      'Branded scene transitions & UI motion assets',
      'Motion guidelines for future brand assets'
    ],
    ctaText: 'Animate Your Brand',
    ctaLink: '/contact'
  },
  {
    category: 'Format 04',
    title: 'Data & Infographic Animation',
    desc: 'Large numbers and static charts can be difficult to process quickly. Animated data visualization reveals information in a controlled sequence so audiences understand relationships and trends easily.',
    bullets: [
      'Animated financial charts and metric graphs',
      'Data visualization & research report animation',
      'Animated whitepaper infographics & stats',
      'Before-and-after visual comparisons',
      'Executive presentation graphics & pitch decks'
    ]
  },
  {
    category: 'Format 05',
    title: 'Animated Ads & Social Content',
    desc: 'Motion creates campaign assets without requiring a full live-action shoot. For paid campaigns, motion assets are coordinated with our Paid Advertising team for maximum conversion velocity.',
    bullets: [
      'High-converting animated social media ads',
      'Product feature spotlight animations',
      'Feed (1:1) and story/Reels (9:16) motion cuts',
      'Display ads, web banners & animated GIFs',
      'Seasonal campaign & promotional creatives'
    ]
  },
  {
    category: 'Format 06',
    title: 'Product, UI & App Animation',
    desc: 'Digital products often need to show functionality that traditional video cannot capture cleanly. We animate web and mobile interfaces to showcase intuitive user flows and onboarding.',
    bullets: [
      'Web, mobile app, and SaaS UI walkthroughs',
      'Feature demonstrations & interaction states',
      'Customer onboarding & product adoption loops',
      'Micro-interactions & screen transitions',
      'Digital product concepts & design prototypes'
    ]
  },
  {
    category: 'Format 07',
    title: '2D Character & 3D Product Animation',
    desc: 'Some projects need a more developed animation style. We produce illustrated 2D characters, mascots, and photorealistic 3D product visualizations with custom lighting, camera sweeps, and exploded views.',
    bullets: [
      '2D character animation & illustrated narratives',
      'Custom brand mascot development & motion',
      '3D product modeling, rendering & rotations',
      'Internal hardware exploded views & cutaways',
      'Hybrid 2D and 3D mixed-media productions'
    ]
  }
]

export default function Offerings() {
  return (
    <section className="border-b-2 border-frame-border bg-frame-bg px-4 py-16 md:px-8 md:py-24">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro
          eyebrow="Specialized Capabilities"
          title="Our Motion Graphics & Animation Services"
        >
          We build different animation formats around the message, audience, platform, and production requirements—from swift logo stings to full-length SaaS explainers and 3D product films.
        </SectionIntro>

        <div className="mt-12 grid gap-px border-2 border-frame-border bg-frame-border md:grid-cols-2 lg:grid-cols-3">
          {offerings.map((item, index) => (
            <div
              key={index}
              className={`bg-frame-bg p-6 md:p-8 flex flex-col justify-between transition-colors hover:bg-frame-accent/5 ${
                index === 6 ? 'md:col-span-2 lg:col-span-1' : ''
              }`}
            >
              <div>
                <div className="flex items-center justify-between border-b border-frame-border/60 pb-3">
                  <span className="text-xs font-black uppercase tracking-[0.24em] text-frame-accent">
                    {item.category}
                  </span>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-frame-muted-fg">
                    Specialized
                  </span>
                </div>
                <h3 className="mt-4 font-heading text-lg md:text-xl font-bold uppercase tracking-tight text-frame-fg">
                  {item.title}
                </h3>
                <p className="mt-3 text-xs sm:text-sm font-medium leading-relaxed text-frame-muted-fg">
                  {item.desc}
                </p>

                <ul className="mt-6 space-y-2 border-t border-frame-border/60 pt-4 text-xs sm:text-sm font-medium text-frame-fg/90">
                  {item.bullets.map((bullet, bIdx) => (
                    <li key={bIdx} className="flex items-start gap-2">
                      <CheckIcon />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {item.ctaText && (
                <div className="mt-8 pt-4 border-t border-frame-border/60">
                  <PosterButton href={item.ctaLink} variant="outline" className="w-full justify-center text-xs">
                    {item.ctaText} &rarr;
                  </PosterButton>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
