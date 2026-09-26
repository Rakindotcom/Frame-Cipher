import { SectionIntro } from '../../../Kinetic'

const blocks = [
  {
    number: '01',
    title: 'Audience & Buying Context',
    lead: 'We identify:',
    items: [
      'Who receives the email',
      'Why they joined the list',
      'What they already know',
      'What they may need next',
      'What motivates action',
      'What objections may exist',
      'Where they are in the customer journey',
    ],
    note: 'The same offer can require completely different messaging for a new subscriber, existing customer, and inactive buyer.',
  },
  {
    number: '02',
    title: 'One Clear Job Per Email',
    lead: 'Every email should have a primary purpose. That might be to:',
    items: [
      'Learn something',
      'Read an article',
      'Activate a product',
      'Book a call',
      'Start a trial',
      'View a product',
      'Complete a purchase',
      'Return to an unfinished action',
      'Understand a new offer',
    ],
    note: 'One email can contain supporting information, but the main action should remain clear.',
  },
  {
    number: '03',
    title: 'Subject Line, Preview & Opening',
    lead: 'These three elements are written as one unit:',
    items: [
      'The subject line earns attention.',
      'The preview text supports that first impression.',
      'The opening then needs to give the reader a reason to continue.',
    ],
    note: 'We write these elements together so the subject does not promise something the body fails to deliver.',
  },
  {
    number: '04',
    title: 'Message & Offer',
    lead: 'The body copy explains why the message matters. Depending on the email, that can involve:',
    items: [
      'A customer problem',
      'A useful insight',
      'A product benefit',
      'A new development',
      'An offer',
      'A story',
      'A proof point',
      'A specific opportunity',
    ],
    note: 'The writing stays focused on what the reader needs to understand rather than how much information the business wants to include.',
  },
  {
    number: '05',
    title: 'Proof, Relevance & Objections',
    lead: 'When a reader needs more confidence, relevant evidence can help. Depending on what is available, we can work with:',
    items: [
      'Customer testimonials',
      'Case studies',
      'Product evidence',
      'Verified results',
      'Demonstrations',
      'Reviews',
      'Specific examples',
      'Relevant data',
    ],
    note: 'For sales-focused emails, common objections can also be addressed before the CTA.',
    note2: 'We do not invent proof, results, or urgency to make an email appear stronger.',
  },
  {
    number: '06',
    title: 'CTA & Next Step',
    lead: 'The reader should understand what to do next. Depending on the objective, the CTA may be:',
    items: [
      'Shop now',
      'Read more',
      'Book a call',
      'Start a trial',
      'View the product',
      'Complete an action',
      'Request information',
      'Reply to the email',
    ],
    note: "The CTA is matched to the email's purpose and the recipient's stage in the journey.",
  },
  {
    number: '07',
    title: 'Sequence Flow',
    lead: 'A sequence should feel like a series rather than a pile of unrelated emails. We map:',
    items: [
      'What each email needs to accomplish',
      'What the reader should already know',
      'What changes after each message',
      'Where proof belongs',
      'When an offer is introduced',
      'When objections should be addressed',
      'How the sequence ends',
    ],
    note: 'This is especially important for welcome, nurture, launch, and win-back campaigns.',
  },
]

export default function HowWeBuild() {
  return (
    <section className="border-b-2 border-frame-border bg-frame-muted/30 px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro eyebrow="Method" title="How We Build Email Copy That Moves Readers Forward">
          We do not start by writing a clever subject line. We start by understanding what the email needs to
          accomplish.
        </SectionIntro>

        <div className="grid gap-px border-2 border-frame-border bg-frame-border md:grid-cols-2 lg:grid-cols-3">
          {blocks.map((block) => (
            <article key={block.number} className="flex flex-col justify-between bg-frame-bg p-7 md:p-8 transition-colors duration-200 hover:bg-frame-muted/40">
              <div>
                <span className="font-heading text-4xl font-bold leading-none tracking-tighter text-frame-accent">
                  {block.number}
                </span>
                <h3 className="mt-5 font-heading text-base font-bold uppercase leading-tight tracking-tight text-frame-fg md:text-lg">
                  {block.title}
                </h3>
                <p className="mt-4 text-sm font-medium leading-relaxed text-frame-muted-fg">{block.lead}</p>

                <ul className="mt-4 space-y-2">
                  {block.items.map((item) => (
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
              </div>

              {block.note && (
                <div className="mt-5 border-l-2 border-frame-accent bg-frame-muted/10 p-3 text-xs font-medium leading-relaxed text-frame-muted-fg">
                  <p>{block.note}</p>
                  {block.note2 && <p className="mt-2">{block.note2}</p>}
                </div>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
