import { SectionIntro, PosterButton } from '../../../Kinetic'

const offerings = [
  {
    phase: 'Phase 01',
    title: 'Concept & Hook Development',
    description: 'A short video needs a clear reason to keep watching. We develop concepts and opening approaches around your subject, audience, brand, and intended platform. A hook does not always need to be loud or dramatic—it needs to give the viewer a reason to continue.',
    bullets: [
      'Content concepts & opening line variations',
      'High-retention creative angles & themes',
      'Story ideas & short-form series frameworks',
      'Visual references & platform trend analysis',
      'Multiple hook variations for paid ad testing'
    ]
  },
  {
    phase: 'Phase 02',
    title: 'Script & Content Structure',
    description: 'Some short-form videos need a complete word-for-word script. Others work better with talking points, a structured outline, or guided interview questions depending on the format and presenter.',
    bullets: [
      'Short-form video scripts & punchy dialogue',
      'Structured talking points for founders & experts',
      'Professional voiceover scripts & audio timing',
      'Scene structures & product demo sequences',
      'On-screen messaging, calls to action & shot lists'
    ]
  },
  {
    phase: 'Phase 03',
    title: 'Vertical Video Production',
    description: 'We plan filming around the 9:16 vertical frame from the beginning. Filming can take place at your office, business location, studio, retail environment, outdoor location, or approved setting.',
    bullets: [
      'Talking-head videos & founder presentations',
      'Live product demonstrations & macro feature shots',
      'Customer interviews & workplace culture footage',
      'Lifestyle scenes, directed moments & dynamic b-roll',
      'High-definition mobile-native camera & lighting'
    ]
  },
  {
    phase: 'Phase 04',
    title: 'Short-Form Video Editing',
    description: 'Editing turns footage into a concise piece of content designed for mobile viewing. We use editing techniques according to the content and brand rather than applying the same generic template to every video.',
    bullets: [
      'Fast-paced cuts & pacing refinement for mobile retention',
      'Jump cuts & seamless visual transitions',
      'Dynamic b-roll integration & detail close-ups',
      'Sound effects, licensed music & audio sweetening',
      'Cinematic color correction & grading'
    ]
  },
  {
    phase: 'Phase 05',
    title: 'Captions, Graphics & Sound',
    description: 'Short-form content often needs visual and audio elements that make the message effortless to follow, especially when viewers scroll with sound off.',
    bullets: [
      'Branded captions & animated kinetic subtitles',
      'On-screen typography, titles & lower thirds',
      'Motion graphics, stickers & visual emphasis markers',
      'Audio cleanup, leveling & voiceover integration',
      'Mobile-optimized safe-zone text placement'
    ]
  },
  {
    phase: 'Phase 06',
    title: 'Platform-Ready Delivery',
    description: 'We prepare final videos tailored to the platforms included in your project, adapting the same production into different cuts, durations, or platform formats rather than delivering one generic file.',
    bullets: [
      'Instagram Reels with optimized feed cover framing',
      'TikTok videos formatted for organic feed velocity',
      'YouTube Shorts with custom preview thumbnail frames',
      'Facebook Reels & performance paid social creatives',
      'Website & landing page vertical video loops'
    ]
  }
]

export default function Offerings() {
  return (
    <section id="offerings" className="border-t-2 border-frame-border bg-frame-bg px-4 py-20 md:px-8 md:py-28 scroll-mt-24">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro
          eyebrow="Full-Cycle Scope"
          title="What Our Short-Form Video Production Service Includes"
          index="01"
        >
          Our Short-Form Video Production Service covers the complete workflow from creative planning to final delivery under one coordinated team.
        </SectionIntro>

        <div className="grid border-2 border-frame-border bg-frame-border gap-px sm:grid-cols-2 lg:grid-cols-3">
          {offerings.map((item, index) => (
            <div
              key={index}
              className="bg-frame-bg p-7 md:p-8 flex flex-col justify-between"
            >
              <div>
                <span className="text-xs font-black uppercase tracking-[0.24em] text-frame-accent">
                  {item.phase}
                </span>
                <h3 className="mt-3 font-heading text-xl md:text-2xl font-bold uppercase tracking-tight text-frame-fg">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm font-medium leading-relaxed text-frame-muted-fg">
                  {item.description}
                </p>

                {item.bullets?.length > 0 && (
                  <ul className="mt-6 space-y-2 border-t-2 border-frame-border/60 pt-4 text-xs md:text-sm font-medium text-frame-fg/90">
                    {item.bullets.map((bullet, bIdx) => (
                      <li key={bIdx} className="flex items-start gap-2">
                        <span className="text-frame-accent font-bold">✓</span>
                        <span className="leading-snug">{bullet}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 border-2 border-frame-border bg-frame-muted/30 p-6 md:p-8">
          <div>
            <span className="text-xs font-black uppercase tracking-[0.24em] text-frame-accent">
              Batch Production Efficiency
            </span>
            <h4 className="mt-1 font-heading text-xl font-bold uppercase tracking-tight text-frame-fg">
              Ready to produce a batch of high-retention vertical videos?
            </h4>
            <p className="mt-1 text-xs md:text-sm font-medium text-frame-muted-fg">
              We plan, film, and edit multiple Reels, TikToks, and Shorts in coordinated monthly sessions.
            </p>
          </div>
          <PosterButton href="/contact" className="shrink-0">
            Get a Production Consultation &rarr;
          </PosterButton>
        </div>
      </div>
    </section>
  )
}
