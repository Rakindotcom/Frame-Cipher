'use client'

import { SectionIntro } from '../../../Kinetic'

const guideBlocks = [
  {
    title: 'Why Process Determines Quality',
    body: [
      'A great shoot is 80% preparation. The camera records what the preparation allows: aligned objectives, tested setups, scheduled participants and an edit plan that matches the publishing format. At FrameCipher Studio, briefing and scoping happen before scheduling — never after.',
      'Every delay we have post-mortemed traced to skipped briefing or unscoped feedback. The 5-stage workflow below structurally prevents both: written scope gates the shoot, and timestamped review gates the revisions.',
    ],
  },
  {
    title: 'Standard, Priority and Retainer Lanes',
    body: [
      'The Standard lane delivers in 5 to 10 working days with 2 structured revision rounds — the right default for interviews, profiles, catalogues and planned campaigns.',
      'The Priority lane compresses to 48 to 72 hours at a 30% fee with same-day scoping, standby crew and an overlapping shoot-and-edit pipeline. The Retainer lane reserves monthly studio and edit capacity for always-on brands at 10 to 20% effective savings versus spot booking.',
    ],
  },
  {
    title: 'Which Lane to Choose',
    list: [
      'Standard Lane: planned productions with normal stakeholder approvals and no hard news-cycle deadline.',
      'Priority Lane: board meetings, launches and news cycles where the date cannot move.',
      'Retainer Lane: weekly shows, monthly reels and quarterly campaigns that need standing capacity.',
    ],
  },
  {
    title: 'Dhaka Realities We Plan Around',
    list: [
      'Noise: sound-isolated capture and close-pattern microphones keep horns, construction and traffic out of the record.',
      'Power: building generator plus IPS backup keeps recording and editing running through load-shedding.',
      'Access: the studio is at Matikata ECB Chattar, reachable from Mirpur DOHS, Banani and Airport Road, with parking beside Eurasia Building.',
    ],
  },
  {
    title: 'Timelines, Revisions and After Delivery',
    body: [
      'Raw captures are guaranteed within 24 hours on every production. Review runs through a timestamped cloud link, followed by grade, sound finish and platform masters across 16:9, 1:1, 9:16 and 4:5 where scoped.',
      'Masters are archived for 60 days with free re-exports to new aspect ratios. Plan vertical cutdowns and subtitled versions at the brief stage, because adding them later means re-editing.',
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
          Why preparation decides outcomes, which lane fits your deadline, and what happens after delivery.
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
