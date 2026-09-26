import { SectionIntro } from '../../../Kinetic'

const faqs = [
  {
    q: 'What is a Sales Copywriting Service?',
    a: 'A Sales Copywriting Service creates persuasive business copy designed to help a specific audience understand an offer and take a defined next step. Depending on the project, the copy can be used for sales pages, proposals, pitch decks, VSL scripts, sales collateral, and other direct-response materials.',
  },
  {
    q: 'How is Sales Copywriting different from Landing Page Copywriting?',
    a: 'Sales Copywriting focuses on the underlying persuasion argument. Landing Page Copywriting focuses specifically on writing copy for a landing-page format. The two often work together because a landing page may need a strong sales argument within its page structure.',
  },
  {
    q: 'Do you write sales copy for B2B businesses?',
    a: 'Yes. B2B sales copy can support proposals, pitch decks, service pages, sales materials, enterprise offers, and other assets used during longer buying processes.',
  },
  {
    q: 'Do you write sales copy for ecommerce businesses?',
    a: 'Yes. We can write sales pages, offer messaging, campaign copy, and other sales-focused materials for ecommerce businesses. For large product catalogs, our Product Description Writing service is more appropriate when the primary requirement is SKU-level product content.',
  },
  {
    q: 'Can you write a sales page from scratch?',
    a: 'Yes. We can handle the research, argument structure, headlines, body copy, proof integration, objection handling, offer messaging, and CTA copy within the agreed scope.',
  },
  {
    q: 'Can you rewrite an existing sales page?',
    a: 'Yes. We can review the existing copy, identify messaging and persuasion weaknesses, and rewrite the page around a clearer sales argument.',
  },
  {
    q: 'Do you use copywriting formulas such as AIDA or PAS?',
    a: 'Frameworks can be useful during planning, but we do not force every project into a named formula. The structure depends on the offer, audience, awareness level, proof, objections, and buying context.',
  },
  {
    q: 'Will you use urgency or scarcity?',
    a: 'Only when it reflects a genuine condition of the offer. We do not create fake deadlines, false scarcity, or unsupported pressure tactics.',
  },
  {
    q: 'Can you write pitch decks and proposals?',
    a: 'Yes. We can structure and write proposal and pitch-deck copy around the business problem, proposed solution, value, proof, differentiation, objections, and next step.',
  },
  {
    q: 'Can you write VSL scripts?',
    a: 'Yes. We write VSL and sales scripts with spoken pacing, persuasion structure, CTA messaging, and visual notes where required.',
  },
  {
    q: 'Do you provide Sales Copywriting Service outside Bangladesh?',
    a: 'Yes. Framecipher works with businesses in Bangladesh as well as clients targeting the US, UK, Australia, and Canada.',
  },
  {
    q: 'How much does Sales Copywriting cost?',
    a: 'Our starting prices currently include:',
    list: [
      'Sales page / long-form copy: from ৳15,000',
      'Proposal/pitch deck copy: from ৳12,000',
      'VSL / sales script: from ৳10,000',
    ],
    tail: 'Final pricing depends on the scope, research requirements, format, and complexity.',
  },
  {
    q: 'Can you guarantee more sales or conversions?',
    a: 'No specific sales or conversion outcome can responsibly be guaranteed through copywriting alone. We focus on creating a clear, well-researched sales argument based on the information, proof, offer, and audience available.',
  },
  {
    q: 'What do you need from us before starting?',
    a: 'The more useful evidence we have, the more specific the sales argument can become. Usually that means:',
    list: [
      'Product or service information',
      'Target audience details',
      'Offer and pricing information',
      'Existing marketing materials',
      'Customer research, if available',
      'Testimonials or case studies',
      'Verified statistics or results',
      'Competitor information, where relevant',
      'Desired CTA',
      'Brand guidelines or existing messaging',
    ],
  },
]

export default function FAQ() {
  return (
    <section className="border-b-2 border-frame-border bg-frame-muted/30 px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro eyebrow="Direct answers" title="Frequently Asked Questions">
          Straight answers about formats, formulas, urgency, pricing, guarantees, and what we need from you before
          starting.
        </SectionIntro>

        <div className="space-y-4 max-w-4xl">
          {faqs.map((faq) => (
            <details
              key={faq.q}
              className="group border-2 border-frame-border bg-frame-bg transition-colors open:border-frame-accent"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 p-6 font-heading text-base font-bold uppercase leading-snug tracking-tight text-frame-fg marker:content-none md:text-lg">
                <span>{faq.q}</span>
                <span
                  aria-hidden="true"
                  className="ml-4 flex h-8 w-8 shrink-0 items-center justify-center border-2 border-frame-border text-frame-accent transition-transform duration-200 group-open:rotate-45"
                >
                  +
                </span>
              </summary>
              <div className="border-t-2 border-frame-border p-6">
                <p className="text-sm font-medium leading-relaxed text-frame-muted-fg md:text-base">{faq.a}</p>

                {faq.list && (
                  <ul className="mt-4 space-y-2">
                    {faq.list.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-2.5 text-sm font-medium leading-relaxed text-frame-fg"
                      >
                        <span aria-hidden="true" className="mt-1.5 h-2 w-2 shrink-0 bg-frame-accent" />
                        {item}
                      </li>
                    ))}
                  </ul>
                )}

                {faq.tail && (
                  <p className="mt-4 text-sm font-medium leading-relaxed text-frame-muted-fg md:text-base">
                    {faq.tail}
                  </p>
                )}
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
