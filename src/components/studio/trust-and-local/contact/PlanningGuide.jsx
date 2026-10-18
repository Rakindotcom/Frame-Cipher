'use client'

import { SectionIntro } from '../../../Kinetic'

const guideBlocks = [
  {
    title: 'Three Free Ways to Start',
    body: [
      'WhatsApp quoting is fastest: send the brief, references and deadline to +880 1768-146650 and receive scoping questions within hours plus an itemised quote within 48. Walkthrough visits run same or next day — test the acoustics, inspect the grid, meet the team and record test clips, free of charge.',
      'Technical scouts suit agencies and corporates: vendor documentation, feasibility verdicts and budget-band guidance in writing before procurement moves. All three routes converge on the same written scope and locked calendar.',
    ],
  },
  {
    title: 'What to Include in Your First Message',
    body: [
      'The content type, the publishing destination, the preferred date and the hard deadline. Reference reels or storyboards over WhatsApp let directors assess feasibility immediately.',
      'Budget-band guidance follows before you commit: hourly hire from ৳2,000, sessions from ৳7,500, signature productions ৳45,000–1,85,000, flagship campaigns scoped past ৳5,00,000.',
    ],
  },
  {
    title: 'Which Route Fits You',
    list: [
      'WhatsApp Quote: fastest start for defined briefs needing numbers within 48 hours.',
      'Studio Walkthrough: verification-first buyers who want to test before committing.',
      'Reserved Production: locked calendars with crewed stages and scheduled post.',
    ],
  },
  {
    title: 'Dhaka Realities We Plan Around',
    list: [
      'Responsiveness: same-day replies and 48-hour quotes because vague, slow studios are the top hiring friction in Dhaka.',
      'Power: generator plus IPS backup on every booking, so overnight and early sessions run clean.',
      'Access: Matikata ECB Chattar with parking beside Eurasia Building, elevator to the 6th floor, and 24-hour operation by appointment.',
    ],
  },
  {
    title: 'Payment, Rescheduling and After Booking',
    body: [
      'A 50% advance confirms dates with a VAT-compliant invoice; the balance is due only on final sign-off. Free rescheduling applies with 48-hour notice.',
      'Standard delivery runs 5 to 10 working days with 2 revision rounds and a 60-day archive. Express 48-hour delivery adds 30%.',
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
          How to start free, what to send first, which route fits, and what happens after booking.
        </SectionIntro>

        <div className="grid gap-6 md:grid-cols-2">
          {guideBlocks.map((block, i) => (
            <article key={i} className={`border-2 border-frame-border bg-frame-bg p-6 md:p-8 ${i === 0 ? 'md:col-span-2' : ''}`}>
              <h3 className="font-heading text-lg md:text-xl font-bold uppercase tracking-tight text-frame-fg">
                {block.title}
              </h3>
              {block.body && block.body.map((para, j) => (
                <p key={j} className="mt-4 text-sm wide:text-lg font-medium leading-relaxed text-frame-muted-fg">
                  {para}
                </p>
              ))}
              {block.list && (
                <ul className="mt-4 space-y-2.5">
                  {block.list.map((item, j) => (
                    <li key={j} className="flex items-start gap-2 text-sm wide:text-lg font-medium leading-relaxed text-frame-muted-fg">
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
