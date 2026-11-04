import Link from 'next/link'

const inlineLinkClass = "text-white underline underline-offset-4 decoration-purple-400/50 hover:text-purple-300 transition-colors font-medium"

const storyBlocks = [
  {
    eyebrow: '01 / The Catalyst',
    title: 'The Fragmented Agency Crisis',
    description: (
      <>
        Historically, brands were forced to hire four or five disparate vendors: an offshore team for <Link href="/services/website-design-development" className={inlineLinkClass}>web development</Link>, a local agency for <Link href="/services/content-creation/branding" className={inlineLinkClass}>branding</Link>, a video studio for <Link href="/services/content-creation/video-production" className={inlineLinkClass}>commercials</Link>, and a third-party freelancer for <Link href="/services/paid-advertising" className={inlineLinkClass}>paid ads</Link>. The result was always the same: catastrophic communication lag, finger-pointing, and campaigns that failed to perform.
      </>
    ),
  },
  {
    eyebrow: '02 / The Architecture',
    title: 'Unifying Code, Media & Performance',
    description: (
      <>
        Frame Cipher was founded to eliminate that friction forever. We built an integrated multidisciplinary powerhouse where software engineers, cinematic directors, conversion copywriters, and performance media buyers sit at the same table. When our developers write Next.js code, they engineer it for <Link href="/services/seo" className={inlineLinkClass}>SEO dominance</Link> and 95+ Core Web Vitals. When our directors shoot video, it is structured specifically to lower ad cost-per-acquisition.
      </>
    ),
  },
  {
    eyebrow: '03 / The Dhaka Engine',
    title: 'Harnessing Bangladesh’s Talent Renaissance',
    description: (
      <>
        Headquartered in Dhaka, we draw from an extraordinary reservoir of young, relentless software developers, UI/UX architects, and visual storytellers. By maintaining a 100% in-house engineering and production studio, we preserve absolute craft integrity, enterprise security, and peerless cost efficiency for our global partners.
      </>
    ),
  },
  {
    eyebrow: '04 / The Global Standard',
    title: 'Compounding Value Worldwide',
    description: (
      <>
        What began as an elite visual studio in Dhaka has evolved into a multinational growth infrastructure company. Today, Frame Cipher powers digital systems for brands across 20+ countries, proving that sovereign engineering and world-class creative leadership can thrive from the heart of Bangladesh.
      </>
    ),
  },
]

export default function AboutOrigin() {
  return (
    <section className="relative isolate border-t border-white/[0.08] bg-[#09090B] px-4 py-20 text-white md:px-8 md:py-28">
      <div className="mx-auto max-w-7xl">
        {/* Section Intro */}
        <div className="mb-14 max-w-4xl space-y-4">
          <h2 className="font-heading text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-medium leading-[0.96] tracking-tight text-white">
            The agency is the{' '}
            <span className="italic text-frame-accent">
              operating system.
            </span>
          </h2>
          <p className="text-base font-normal leading-relaxed text-zinc-300 md:text-lg">
            We do not treat brand, content, software engineering, search visibility, and paid advertising like disconnected lanes. The true commercial breakthrough happens at the exact point where those lanes collide.
          </p>
        </div>

        {/* Modality 1: Editorial Divided Rows (Anti-Card Fatigue) */}
        <div className="border-t border-b border-white/[0.08] divide-y divide-white/[0.08]">
          {storyBlocks.map((item, idx) => (
            <article
              key={item.title}
              className="py-10 md:py-12 grid grid-cols-1 md:grid-cols-12 md:items-baseline md:gap-8 gap-4 transition-colors duration-200 hover:bg-white/[0.015]"
            >
              {/* Col-span-2: Monospace Identifier */}
              <div className="md:col-span-2">
                <span className="font-mono text-xs uppercase tracking-[1.1px] text-frame-accent flex items-center gap-2 tabular-nums">
                  <span className="h-1.5 w-1.5 rounded-full bg-frame-accent" />
                  <span>0{idx + 1}</span>
                </span>
              </div>

              {/* Col-span-4: Stage Headline */}
              <div className="md:col-span-4">
                <h3 className="font-heading text-xl sm:text-2xl font-medium leading-snug text-white">
                  {item.title}
                </h3>
              </div>

              {/* Col-span-6: Narrative Description */}
              <div className="md:col-span-6 text-sm sm:text-base font-normal leading-relaxed text-zinc-300">
                {item.description}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
