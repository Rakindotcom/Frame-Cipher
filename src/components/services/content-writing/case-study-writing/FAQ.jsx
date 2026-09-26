import { SectionIntro } from '../../../Kinetic'

const faqs = [
  {
    q: 'What is included in your Case Study Writing Service?',
    a: 'The standard process includes story selection, research, interviews, narrative development, writing, data and quote integration, revisions, and approval coordination. Additional formats can be included depending on the project scope.',
  },
  {
    q: 'Do you interview our clients directly?',
    a: 'Yes. Direct client interviews are an important part of our preferred research process because conversations often reveal more useful context and detail than a standard written questionnaire.',
  },
  {
    q: 'What if our client cannot share confidential information?',
    a: 'We can work within agreed confidentiality restrictions. Depending on what can be disclosed, the case study may use an anonymized customer, limited company information, or a narrower description of the engagement.',
  },
  {
    q: 'Can you write anonymized case studies?',
    a: 'Yes. An anonymized case study can still communicate the challenge, solution, process, and measurable outcome when the customer cannot be publicly identified. The available evidence and approval requirements will determine how much detail can be included.',
  },
  {
    q: 'Can you work with technical or complex products?',
    a: 'Yes. We can structure technical and implementation-focused case studies around the information relevant to the intended reader. The goal is to preserve important technical detail while keeping the story understandable for the target audience.',
  },
  {
    q: 'Can one case study be repurposed into other content?',
    a: 'Yes. Depending on the original research and project scope, one customer story can be adapted into a summary, sales one-pager, website proof section, social content, email content, presentation material, or other approved formats.',
  },
  {
    q: 'How long does a case study take?',
    a: 'A standard case study typically takes around 2–3 weeks. Interview availability, data collection, revisions, and customer approval can affect the final timeline.',
  },
  {
    q: 'Do you handle client approval?',
    a: 'Yes. Approval coordination can be included in the process when the featured customer needs to review the case study before publication.',
  },
  {
    q: 'Do you write case studies for businesses outside Bangladesh?',
    a: 'Yes. Framecipher works with businesses in Bangladesh and international markets, including the US, UK, Australia, Canada, and UAE.',
  },
  {
    q: 'How much does case study writing cost?',
    a: 'Pricing depends on research requirements, interview complexity, case study length, number of formats, and whether you need one case study or a larger content program. Our current starting packages are listed above, subject to final scope confirmation.',
  },
]

export default function FAQ() {
  return (
    <section className="border-b-2 border-frame-border bg-frame-muted/30 px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro eyebrow="Direct answers" title="Frequently Asked Questions">
          Straight answers about interviews, confidentiality, anonymized work, repurposing, timelines, approval,
          pricing, and what happens before publication.
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
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
