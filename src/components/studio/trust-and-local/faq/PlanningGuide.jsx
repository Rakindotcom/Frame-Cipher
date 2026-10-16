'use client'

import { SectionIntro } from '../../../Kinetic'

const guideBlocks = [
  {
    title: 'How to Use These Answers',
    body: [
      'Start with your topic: booking and payment, room and kit, access and location, reviews and revisions, or delivery and formats. Each answer states the fact first — prices, timelines, inclusions — then the reasoning behind it.',
      'Anything unanswered gets a same-day reply on WhatsApp at +880 1768-146650. Answers convert into itemised quotes within 48 hours of a completed brief, so a question asked today can be a locked booking this week.',
    ],
  },
  {
    title: 'Booking Facts Worth Knowing First',
    body: [
      'Answers, quotes and walkthroughs are free. Sessions start from ৳2,000/hour, productions are scoped and itemised, and a 50% advance confirms dates with the balance due only on final sign-off.',
      'Rescheduling is free with 48-hour notice. Every payment — bKash, Nagad, bank, cheque or cash — gets a VAT-compliant invoice for corporate accounting.',
    ],
  },
  {
    title: 'Which Channel Fits Your Question',
    list: [
      'Quick question or availability check: WhatsApp for a same-day reply.',
      'Numbers for your scope: brief plus references for a 48-hour itemised quote.',
      'Room, kit or power doubts: free walkthrough with test recordings at ECB Chattar.',
    ],
  },
  {
    title: 'Dhaka Realities These Answers Address',
    list: [
      'Noise and power: acoustic isolation plus generator and IPS backup on every booking.',
      'Access: Matikata ECB Chattar with parking beside Eurasia Building and elevator to the 6th floor.',
      'Comparability: ask every studio about crew roles, backup, revisions, licensing and archiving before comparing quotes.',
    ],
  },
  {
    title: 'Timelines, Revisions and After Delivery',
    body: [
      'Standard delivery runs 5 to 10 working days with 2 structured revision rounds through a timestamped cloud link. Raw captures arrive within 24 hours.',
      'Express 48-hour delivery is available at a 30% priority fee. Masters are archived for 60 days with free re-exports to new aspect ratios.',
    ],
  },
]

export default function PlanningGuide() {
  return (
    <section id="planning-guide" className="border-t-2 border-frame-border bg-frame-muted/10 px-4 py-20 md:px-8 md:py-28 scroll-mt-24">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro
          eyebrow="Planning Guide"
          title="Quality, Budget and Delivery"
          index="06"
        >
          How to use these answers, which channel fits, and what happens after you ask.
        </SectionIntro>

        <div className="grid gap-6 md:grid-cols-2">
          {guideBlocks.map((block, i) => (
            <article key={i} className={`border-2 border-frame-border bg-frame-bg p-6 md:p-8 ${i === 0 ? 'md:col-span-2' : ''}`}>
              <h3 className="font-heading text-lg md:text-xl font-bold uppercase tracking-tight text-frame-fg">
                {block.title}
              </h3>
              {block.body && block.body.map((para, j) => (
                <p key={j} className="mt-4 text-sm font-medium leading-relaxed text-frame-muted-fg">
                  {para}
                </p>
              ))}
              {block.list && (
                <ul className="mt-4 space-y-2.5">
                  {block.list.map((item, j) => (
                    <li key={j} className="flex items-start gap-2 text-sm font-medium leading-relaxed text-frame-muted-fg">
                      <span className="text-frame-accent font-bold">✓</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
