import { SectionIntro } from '../../../Kinetic'

const principles = [
  {
    number: '01',
    title: 'Short Sections &amp; Clear Hierarchy',
    body: [
      'Most landing page traffic is viewed on a phone, often quickly. Short sections with clear headings make the page easier to scan on a small screen.',
    ],
  },
  {
    number: '02',
    title: 'CTA Visibility &amp; Repetition',
    body: [
      'The primary call to action should be easy to find without scrolling through the entire page, and it can be repeated at natural decision points.',
    ],
  },
  {
    number: '03',
    title: 'Form and Microcopy Considerations',
    body: [
      'Button text, form labels, helper text, and error messages should tell visitors exactly what will happen after they act.',
    ],
  },
  {
    number: '04',
    title: 'Mobile Reading Flow',
    body: [
      'Headings, supporting copy, proof, and the CTA should appear in an order that still makes sense when the page is read in a single vertical column.',
    ],
  },
]

export default function MobileFirst() {
  return (
    <section className="border-b-2 border-frame-border bg-frame-muted/30 px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro
          eyebrow="Mobile experience"
          title="Mobile-First Landing Page Copy That Is Easy to Scan"
        >
          Landing page copy should be written to work in a small, fast-scrolling reading environment. That affects
          how much we write, how we break it up, and where we repeat the CTA.
        </SectionIntro>

        <div className="grid gap-px border-2 border-frame-border bg-frame-border md:grid-cols-2 lg:grid-cols-4">
          {principles.map((item) => (
            <article key={item.number} className="bg-frame-bg p-7 md:p-8 transition-colors duration-200 hover:bg-frame-muted/40">
              <span className="font-heading text-4xl font-bold leading-none tracking-tighter text-frame-muted">
                {item.number}
              </span>
              <h3
                className="mt-5 font-heading text-base font-bold uppercase leading-tight tracking-tight text-frame-fg md:text-lg"
                dangerouslySetInnerHTML={{ __html: item.title }}
              />
              <p className="mt-3 text-sm font-medium leading-relaxed text-frame-muted-fg">{item.body[0]}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
