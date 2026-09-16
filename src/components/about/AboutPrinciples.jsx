import { SectionIntro } from '../Kinetic'

const principles = [
  'Strategy before production',
  'Creative that supports the offer',
  'Technology that makes growth easier to manage',
  'Clear handoffs, clear ownership, clear reporting',
]

export default function AboutPrinciples() {
  return (
    <section className="px-4 py-20 md:px-8 md:py-32">
      <div className="mx-auto grid max-w-[95vw] gap-12 lg:grid-cols-[0.78fr_1.22fr]">
        <div className="lg:sticky lg:top-28 self-start">
          <SectionIntro eyebrow="Principles" title="No soft middle. No mystery handoffs." />
        </div>

        <div className="grid bg-frame-border gap-px">
          {principles.map((principle, index) => (
            <article
              key={principle}
              className="group grid min-h-28 items-center bg-frame-bg p-6 transition-colors duration-300 hover:bg-frame-accent grid-cols-[auto_1fr] gap-4 sm:p-7 md:grid-cols-[0.22fr_1fr]"
            >
              <p className="font-heading text-3xl font-bold leading-none tracking-tighter text-frame-muted transition-colors duration-300 group-hover:text-frame-accent-fg sm:text-5xl md:text-6xl">
                {String(index + 1).padStart(2, '0')}
              </p>
              <h3 className="font-heading text-lg font-bold uppercase leading-tight tracking-tighter text-frame-fg transition-transform duration-300 group-hover:translate-x-3 group-hover:text-frame-accent-fg sm:text-2xl md:text-3xl">
                {principle}
              </h3>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
