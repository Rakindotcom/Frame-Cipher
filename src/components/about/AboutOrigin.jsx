import Link from 'next/link'
import { InversionCard, SectionIntro } from '../Kinetic'

const inlineLinkClass = "underline decoration-frame-accent/40 hover:decoration-frame-accent hover:text-frame-accent transition-colors font-semibold"

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
    <section className="px-4 py-24 md:px-8 md:py-32">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro eyebrow="Origin Story / The Thesis" title="The agency is the operating system.">
          We do not treat brand, content, software engineering, search visibility, and paid advertising like disconnected lanes. The true commercial breakthrough happens at the exact point where those lanes collide.
        </SectionIntro>

        <div className="grid bg-frame-border gap-px sm:grid-cols-2 lg:grid-cols-4">
          {storyBlocks.map((item, index) => (
            <InversionCard key={item.title} eyebrow={item.eyebrow} title={item.title} number={`0${index + 1}`}>
              <p>{item.description}</p>
            </InversionCard>
          ))}
        </div>
      </div>
    </section>
  )
}
