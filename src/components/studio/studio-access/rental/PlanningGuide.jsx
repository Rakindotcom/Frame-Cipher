'use client'

import { SectionIntro } from '../../../Kinetic'

const guideBlocks = [
  {
    title: 'What Ready Stage Hire Covers',
    body: [
      'Ready hire means the room works before your crew arrives: acoustic isolation, overhead softbox grid, pre-rigged backdrop, conditioned power with generator and IPS backup, fibre internet, makeup and changing areas, and an on-site assistant. At FrameCipher Studio this is one 6th-floor stage at Matikata ECB Chattar, so the assistant who rigs your backdrop is in the same room as your shoot.',
      'That matters because setup eats crew hours. Stages without pre-rigging turn your first paid hour into furniture moving. We agree date, hours, backdrop, power needs and support in writing before the booking, so shooting starts on arrival.',
    ],
  },
  {
    title: 'Room-Only or Operated Sessions',
    body: [
      'Room-only hire at ৳2,000/hour suits crews arriving fully equipped: you get the isolated stage, grid, backdrop, power, internet and assistant. The 2-hour minimum keeps short sessions viable.',
      'Operated sessions at ৳2,500/hour add our camera, lights and operator with teleprompter and live monitoring — the practical middle for interviews, podcasts and talking-head shoots without hiring a full crew.',
      'For batch recording and campaign days, the half-day block at ৳12,000 and full-day lockout at ৳22,000 cap the hourly maths, and we will price both against your hour count so you can compare.',
    ],
  },
  {
    title: 'Which Tier to Choose',
    list: [
      'Hourly Flex: you have your own crew and need 2 to 4 hours on a ready stage, room-only or with our camera and operator.',
      'Half-Day Block: interviews, podcast batches, catalogue shoots or YouTube sessions needing 4 exclusive hours with operator support.',
      'Full Production Day: multi-setup campaign shoots and batch recording needing a 9-hour lockout with backdrop changes and priority rebooking.',
    ],
  },
  {
    title: 'Dhaka Realities We Plan Around',
    list: [
      'Noise: the sound-isolated stage and 6th-floor elevation keep horns, construction and street traffic out of your microphones.',
      'Power: building generator plus IPS backup keeps lights, cameras and tethering running through load-shedding.',
      'Access: the studio is at Matikata ECB Chattar, reachable from Mirpur DOHS, Banani and Airport Road, with parking beside Eurasia Building and elevator access to the 6th floor.',
    ],
  },
  {
    title: 'Timelines, Overtime and After Wrap',
    body: [
      'The stage is rigged and tested before your call time, with the backdrop of choice ready on arrival. Operated sessions hand over raw media to your drives the same day.',
      'Overtime past the agreed wrap is confirmed in writing at the hourly rate, so there are no surprise invoices. Weekend and overnight sessions run at standard rates by advance reservation.',
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
          How ready stage hire works, when operated beats room-only, which block fits, and what happens after wrap.
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
