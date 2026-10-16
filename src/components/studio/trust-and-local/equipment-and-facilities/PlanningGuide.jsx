'use client'

import { SectionIntro } from '../../../Kinetic'

const guideBlocks = [
  {
    title: 'What Verification Means Here',
    body: [
      'Verification means testing the room before money moves: clap-test the acoustics, inspect the grid load and dimming, check camera bodies and audio kit, confirm generator plus IPS behaviour, and record test clips on your own media. At FrameCipher Studio walkthroughs run same-day or next-day at ECB Chattar, free of charge.',
      'This is standard practice among serious hirers in Dhaka. Basic rooms at ৳1,000–1,500/hour and equipped stages at ৳2,000–3,000/hour look identical in photos — the differences only appear under test: echo decay, light flicker, power sag and backup switchover.',
    ],
  },
  {
    title: 'Room-Only, Operated or Crewed',
    body: [
      'Room-only access at ৳2,000/hour suits fully equipped crews: isolated stage, grid, backdrops, power, internet and an assistant. Operated sessions at ৳2,500/hour add our 4K camera, operator, lighting design, teleprompter and monitoring.',
      'Half-day caps at ৳12,000 and full-day caps at ৳22,000 bound the hourly maths for longer bookings. A crewed production day at ৳38,000 puts a director, DOP and sound engineer on the stage with dailies graded overnight.',
    ],
  },
  {
    title: 'Which Hire to Choose',
    list: [
      'Room-Only Access: your crew brings cameras and needs an isolated, powered, pre-rigged stage.',
      'Operated Session: interviews, podcasts and talking-head shoots needing camera, operator and setup.',
      'Crewed Production Day: full productions needing direction, multi-camera coverage and overnight dailies.',
    ],
  },
  {
    title: 'Dhaka Realities We Plan Around',
    list: [
      'Noise: 6th-floor elevation plus acoustic treatment keeps horns, construction and traffic out of microphones.',
      'Power: conditioned power with generator plus IPS backup protects cameras, strobes and tethering through load-shedding.',
      'Access: elevator to the 6th floor, parking beside Eurasia Building, and fibre internet for streaming and remote monitoring.',
    ],
  },
  {
    title: 'Booking, Rescheduling and After Wrap',
    body: [
      'Itemised quotes arrive within 48 hours; a 50% advance locks dates with a VAT-compliant invoice. Free rescheduling applies with 48-hour notice.',
      'Operated sessions hand raw media to your drives the same day. Specialist operators for drone, keying and teleprompter work are quoted per session.',
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
          How to verify a stage, which hire fits your crew, and what happens after you book.
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
