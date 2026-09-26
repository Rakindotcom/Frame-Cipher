import { SectionIntro } from '../../../Kinetic'

const groups = [
  {
    number: '01',
    title: 'Offer &amp; Business Information',
    body: [
      'The product or service, pricing, terms, guarantees, availability, and anything a visitor would need in order to make a decision.',
    ],
  },
  {
    number: '02',
    title: 'Audience &amp; Market',
    body: [
      'Who the offer is for, which market they are in, their main problem, and what they already know about the category.',
    ],
  },
  {
    number: '03',
    title: 'Traffic Source',
    body: [
      'Where the traffic will come from, such as Google Ads, Meta Ads, search, email, social, a referral, or a promotion.',
    ],
  },
  {
    number: '04',
    title: 'Proof &amp; Trust Assets',
    body: [
      'Testimonials, case studies, results, client names, credentials, screenshots, statistics, or any other genuine evidence you can share.',
    ],
  },
  {
    number: '05',
    title: 'Brand Guidelines &amp; Existing Materials',
    body: [
      'Tone of voice, terminology, existing page copy, offer documents, competitor examples, and any previous campaign material.',
    ],
  },
]

export default function WhatWeNeed() {
  return (
    <section className="border-b-2 border-frame-border bg-frame-muted/30 px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro eyebrow="Client inputs" title="What We Need From You">
          Good landing page copy depends on real business information. The more accurate the input, the more
          specific the copy can be.
        </SectionIntro>

        <div className="grid gap-px border-2 border-frame-border bg-frame-border md:grid-cols-2">
          {groups.map((group) => (
            <article key={group.number} className="flex gap-5 bg-frame-bg p-7 md:p-8 transition-colors duration-200 hover:bg-frame-muted/40">
              <span className="font-heading text-4xl font-bold leading-none tracking-tighter text-frame-muted">
                {group.number}
              </span>
              <div>
                <h3
                  className="font-heading text-base font-bold uppercase leading-tight tracking-tight text-frame-fg md:text-lg"
                  dangerouslySetInnerHTML={{ __html: group.title }}
                />
                <p className="mt-3 text-sm font-medium leading-relaxed text-frame-muted-fg">{group.body[0]}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
