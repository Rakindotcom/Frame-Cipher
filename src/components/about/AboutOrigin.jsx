import { InversionCard, SectionIntro } from '../Kinetic'

const storyBlocks = [
  {
    eyebrow: 'Why we exist',
    title: 'Connect the work growth depends on',
    description:
      'Many brands hire one person for ads, another for design, another for video, and another for websites. The result is slow execution and campaigns that do not feel connected.',
  },
  {
    eyebrow: 'What changes',
    title: 'Scattered execution becomes one operating system',
    description:
      'We bring strategy, creative, media, software, and performance work into one workflow so content, platforms, campaigns, and data can support the same business goal.',
  },
  {
    eyebrow: 'How it started',
    title: 'From visual production to growth infrastructure',
    description:
      'Frame Cipher began with visual execution and expanded toward the systems that make creative work perform: positioning, websites, campaign planning, software, and optimization.',
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
