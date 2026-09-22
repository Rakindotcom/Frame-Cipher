import { industryDetails } from '../../data/agency'
import { SectionIntro } from '../Kinetic'

export default function ServicesIndustries() {
  return (
    <section className="border-b-2 border-frame-border bg-frame-muted px-4 py-24 md:px-8 md:py-32">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro
          eyebrow="Industries / built for"
          title="Built for different types of businesses."
          index="10"
        >
          The services adapt around the market, but the operating model stays the same: strategy,
          creative, web, media, and performance connected under one roof.
        </SectionIntro>

        <div className="grid gap-px bg-frame-border sm:grid-cols-2 lg:grid-cols-3">
          {industryDetails.map((item, index) => (
            <article
              key={item.industry}
              className="group bg-frame-bg p-6 transition-colors duration-300 hover:bg-frame-muted/40 md:p-7"
            >
                <p
                  className="font-heading text-3xl font-bold leading-none tracking-tighter text-frame-muted transition-colors duration-300 group-hover:text-frame-accent md:text-4xl"
                  aria-hidden="true"
                >
                  {String(index + 1).padStart(2, '0')}
                </p>
                <h3 className="mt-5 font-heading text-xl font-bold uppercase leading-tight tracking-tight text-frame-fg sm:text-2xl">
                  {item.industry}
                </h3>
                <p className="mt-3 text-sm font-medium leading-relaxed text-frame-muted-fg">{item.line}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}