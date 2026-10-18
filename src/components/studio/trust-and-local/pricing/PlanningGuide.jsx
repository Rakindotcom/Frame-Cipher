'use client'

import { SectionIntro } from '../../../Kinetic'

const guideBlocks = [
  {
    title: 'How Scope-Based Quoting Works',
    body: [
      'Scope-based quoting means the price follows the work: studio hours, crew roles, equipment lines and post-production deliverables are each listed with quantities and rates. At FrameCipher Studio the quote arrives in writing within 48 hours of a completed brief — before any payment is accepted.',
      'This protects both sides. You see exactly what the cheaper competing quote omitted — crew roles, backup power, revision rounds, music licensing, subtitle languages, aspect-ratio versions, archiving — because our quote lists every one.',
    ],
  },
  {
    title: 'Reading the Five Rate Bands',
    body: [
      'Hourly hire from ৳2,000 covers room, operated and booth time for comparing facility costs. Sessions from ৳7,500 cover podcasts and catalogue sets with honest per-unit maths.',
      'Signature productions from ৳45,000 to ৳1,85,000 cover profiles, OVCs, wedding narratives and catalogue banks in fixed scopes. Flagship campaigns scoped past ৳5,00,000 cover TVCs, multi-film campaigns, documentaries and summits with dedicated producers.',
    ],
  },
  {
    title: 'Which Lane to Choose',
    list: [
      'Hourly and Session Hire: you need facility time and can compare our equipped middle against basic rooms.',
      'Signature Productions: most Dhaka brands buy here — fixed scopes with 2 revision rounds and itemised quotes.',
      'Flagship and Campaign: multi-film, multi-day and broadcast scopes needing producers and priority lanes.',
    ],
  },
  {
    title: 'Dhaka Realities We Plan Around',
    list: [
      'Comparability: ask every studio whether crew roles, backup power, revisions, licensing, subtitles, versions and archiving are included before comparing numbers.',
      'Power: building generator plus IPS backup is included in our hire — not added as a surprise line.',
      'Access: quotes, walkthroughs and consultations are free; you only pay when cameras roll.',
    ],
  },
  {
    title: 'Payment, Revisions and After Delivery',
    body: [
      'A 50% advance confirms dates with a VAT-compliant invoice; the balance is due only on final sign-off. Free rescheduling applies with 48-hour notice.',
      'Two structured revision rounds and a 60-day archive with free re-exports come standard. Express 48-hour delivery is available at a 30% priority fee.',
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
          How quoting works, what each band buys, which lane fits, and what happens after you approve.
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
