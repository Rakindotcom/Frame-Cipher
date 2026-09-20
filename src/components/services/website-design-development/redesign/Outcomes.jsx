import { SectionIntro } from '../../../Kinetic'

const improvements = [
  {
    title: 'Better User Experience',
    description: 'Clearer navigation, stronger information hierarchy, easier interactions, and fewer unnecessary steps help visitors find what they need faster.',
  },
  {
    title: 'Stronger Conversion Paths',
    description: 'Visitors should understand what to do next, whether that means contacting your team, requesting a quote, booking a service, buying a product, or exploring more content.',
  },
  {
    title: 'Faster Performance',
    description: 'The redesign should address the technical causes of slow pages instead of relying only on superficial image or asset compression.',
  },
  {
    title: 'Better Mobile Experience',
    description: 'Important pages, forms, navigation, content, and conversion actions should work properly across smaller screens and different devices.',
  },
  {
    title: 'Stronger SEO Foundations',
    description: 'The new structure should protect valuable SEO assets while creating a cleaner technical and content foundation for future growth.',
  },
  {
    title: 'Easier Content Management',
    description: 'Your team should be able to update important content without fighting an outdated, restrictive, or unnecessarily complicated system.',
  },
  {
    title: 'Better Measurement',
    description: 'Analytics, forms, conversion tracking, and important business events should remain measurable after the redesign so future improvements can be based on real data.',
  },
]

export default function Outcomes() {
  return (
    <section className="border-t-2 border-frame-border bg-frame-bg px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro eyebrow="Core Outcomes" title="What a Successful Website Redesign Should Improve">
          A redesign should produce more than a newer-looking interface. The finished website should make important parts of the business easier to use, manage, find, and measure.
        </SectionIntro>

        <div className="grid bg-frame-border gap-px sm:grid-cols-2 lg:grid-cols-3 border-2 border-frame-border">
          {improvements.map((imp, idx) => (
            <div key={idx} className="bg-frame-bg p-7 sm:p-8 md:p-10 flex flex-col justify-between hover:bg-frame-muted/10 transition-colors">
              <div>
                <span className="text-xs font-black uppercase tracking-[0.2em] text-frame-accent">
                  Outcome 0{idx + 1}
                </span>
                <h3 className="mt-4 font-heading text-xl sm:text-2xl font-bold uppercase tracking-tight text-frame-fg">
                  {imp.title}
                </h3>
                <p className="mt-4 text-sm sm:text-base font-medium leading-relaxed text-frame-muted-fg">
                  {imp.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}