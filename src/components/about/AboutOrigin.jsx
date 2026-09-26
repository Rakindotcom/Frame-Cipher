import Link from 'next/link'
import { InversionCard, SectionIntro } from '../Kinetic'

const inlineLinkClass = "underline decoration-frame-accent/40 hover:decoration-frame-accent hover:text-frame-accent transition-colors"

const storyBlocks = [
  {
    eyebrow: 'Why we exist',
    title: 'Connect the work growth depends on',
    description: (
      <>
        Many brands hire one person for <Link href="/services/paid-advertising" className={inlineLinkClass}>ads</Link>, another for <Link href="/services/content-creation/graphic-design" className={inlineLinkClass}>design</Link>, another for <Link href="/services/content-creation/commercial-video" className={inlineLinkClass}>video</Link>, and another for <Link href="/services/website-design-development" className={inlineLinkClass}>websites</Link>. The result is slow execution and campaigns that do not feel connected.
      </>
    ),
  },
  {
    eyebrow: 'What changes',
    title: 'Scattered execution becomes one operating system',
    description: (
      <>
        We bring <Link href="/services/content-creation/branding" className={inlineLinkClass}>strategy</Link>, <Link href="/services/content-creation" className={inlineLinkClass}>creative</Link>, <Link href="/services/content-creation/commercial-video" className={inlineLinkClass}>media</Link>, <Link href="/services/app-development" className={inlineLinkClass}>software</Link>, and <Link href="/services/paid-advertising" className={inlineLinkClass}>performance work</Link> into one workflow so content, platforms, campaigns, and data can support the same business goal.
      </>
    ),
  },
  {
    eyebrow: 'How it started',
    title: 'From visual production to growth infrastructure',
    description: (
      <>
        Frame Cipher began with visual execution and expanded toward the systems that make creative work perform: <Link href="/services/content-creation/branding" className={inlineLinkClass}>positioning</Link>, <Link href="/services/website-design-development" className={inlineLinkClass}>websites</Link>, campaign planning, software, and <Link href="/services/seo" className={inlineLinkClass}>optimization</Link>.
      </>
    ),
  },
]

export default function AboutOrigin() {
  return (
    <section className="px-4 py-24 md:px-8 md:py-32">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro eyebrow="Origin" title="The agency is the system.">
          We do not treat brand, content, web, ads, and automation like separate lanes. The useful
          work happens where those lanes collide.
        </SectionIntro>

        <div className="grid bg-frame-border gap-px lg:grid-cols-3">
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
