import { SectionIntro } from '../../../Kinetic'

const blocks = [
  {
    number: '01',
    title: 'Lead With the Information That Matters',
    body: [
      'Important product information should not be buried at the end of a long paragraph. We prioritize information based on the product and buyer journey. That may include:',
    ],
    bullets: [
      'Primary benefit',
      'Key specification',
      'Main use case',
      'Compatibility',
      'Size or material',
      'Important limitation',
      'Differentiating feature',
    ],
  },
  {
    number: '02',
    title: 'Use Bullets Where They Improve Clarity',
    body: ['Bullets work well for information shoppers need to compare quickly. They can highlight:'],
    bullets: [
      'Features',
      'Benefits',
      'Specifications',
      'Included items',
      'Compatibility',
      'Product dimensions',
      'Key use cases',
    ],
  },
  {
    number: '03',
    title: 'Replace Vague Claims With Specific Information',
    body: [
      'Words such as “premium,” “high-quality,” and “durable” have little value without supporting information. Where verified evidence exists, we use specific details instead. That makes the product easier to evaluate and the copy more credible.',
    ],
  },
  {
    number: '04',
    title: 'Address Purchase Questions',
    body: [
      'Good product copy should reduce uncertainty. Depending on the product, shoppers may want to know:',
    ],
    bullets: [
      'Who should use it?',
      'What is it made from?',
      'How does it fit?',
      'What does it include?',
      'Is it compatible with another product?',
      'How should it be used?',
      'How should it be maintained?',
      'What makes it different?',
      'Which version should they choose?',
    ],
    note: 'We structure the description around the questions that matter most for that product.',
  },
]

export default function HowWeWrite() {
  return (
    <section className="border-y-2 border-frame-border bg-frame-bg px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro
          eyebrow="Writing method"
          title="How We Write Product Descriptions That Buyers Can Scan"
        >
          Most product pages are scanned rather than read word by word. The copy therefore needs a clear
          information hierarchy.
        </SectionIntro>

        <div className="grid gap-px border-2 border-frame-border bg-frame-border md:grid-cols-2">
          {blocks.map((block) => (
            <article key={block.number} className="flex flex-col justify-between bg-frame-bg p-7 md:p-8 transition-colors duration-200 hover:bg-frame-muted/40">
              <div>
                <div className="flex items-baseline gap-4">
                  <span className="font-heading text-4xl font-bold leading-none tracking-tighter text-frame-muted">
                    {block.number}
                  </span>
                  <h3 className="font-heading text-base font-bold uppercase leading-tight tracking-tight text-frame-fg md:text-lg">
                    {block.title}
                  </h3>
                </div>

                {block.body.map((paragraph) => (
                  <p
                    key={paragraph}
                    className="mt-4 text-sm font-medium leading-relaxed text-frame-muted-fg md:text-base"
                  >
                    {paragraph}
                  </p>
                ))}

                {block.bullets && (
                  <ul className="mt-4 space-y-2">
                    {block.bullets.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-2 text-sm font-medium leading-relaxed text-frame-fg"
                      >
                        <span aria-hidden="true" className="mt-1 text-frame-accent">
                          &bull;
                        </span>
                        {item}
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              {block.note && (
                <p className="mt-5 border-l-2 border-frame-accent bg-frame-muted/10 p-3 text-xs font-medium leading-relaxed text-frame-muted-fg">
                  {block.note}
                </p>
              )}
            </article>
          ))}
        </div>

        <div className="mt-8 border-t-2 border-frame-border pt-8">
          <h3 className="font-heading text-lg font-bold uppercase leading-tight tracking-tight text-frame-fg md:text-xl">
            Product Page SEO Without Keyword Stuffing
          </h3>
          <p className="mt-3 max-w-4xl text-sm font-medium leading-relaxed text-frame-muted-fg md:text-base">
            Product-page SEO requires more than inserting a product name several times. It is covered in detail
            in the next section.
          </p>
        </div>
      </div>
    </section>
  )
}
