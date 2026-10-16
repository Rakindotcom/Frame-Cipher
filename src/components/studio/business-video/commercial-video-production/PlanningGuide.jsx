'use client'

import { SectionIntro } from '../../../Kinetic'

const guideBlocks = [
  {
    title: 'What Commercial Video Production Covers',
    body: [
      'Commercial production means one team owns the persuasion from concept to broadcast file: hook-first scripting, storyboard, casting and art direction, studio filming, broadcast audio, editing, colour grading, sound design and placement-specific masters. At FrameCipher Studio this happens under one roof at Matikata ECB Chattar, so the crew that lights your product works in the same place as the editor who builds the cutdowns.',
      'That matters because placements punish unplanned footage. A TVC needs broadcast loudness compliance and exact durations; paid social needs vertical safe zones and a hook inside three seconds. We agree the offer, audience, placements and cutdown set in writing before the shoot, so one production serves television, YouTube and Meta alike.',
    ],
  },
  {
    title: 'OVC or Broadcast TVC',
    body: [
      'A digital OVC is built for targeting and testing: multiple hooks, multiple lengths, fast turnaround, media budgets you can adjust in real time. A broadcast TVC is built for mass reach and authority: casting, styling, art direction and channel-compliant masters.',
      'Inside the ECB Chattar stage, commercial lighting design, tabletop staging and backup power are already in place. For broadcast work we add casting, wardrobe, makeup artistry and specialty optics, each itemised so you can see what the jump from OVC to TVC actually buys.',
      'Brands running both television and digital campaigns can produce an integrated TVC-plus-OVC package from a single production, which keeps art direction consistent and avoids paying for two separate shoots.',
    ],
  },
  {
    title: 'Which Tier to Choose',
    list: [
      'Digital OVC (৳88,000): a performance-built online commercial with 15s, 30s and 60s cutdowns plus verticals. Best for Meta, YouTube and TikTok campaigns.',
      'Broadcast TVC (from ৳3,60,000): television-compliant commercial with casting, styling, art direction and broadcast mastering. Best for national channels and cinema.',
      'National Campaign (৳12,50,000 and up): a multi-film universe — hero TVC, OVC series, retail cutdowns and stills under one art direction.',
    ],
  },
  {
    title: 'Dhaka Realities We Plan Around',
    list: [
      'Noise: the sound-isolated room and close-pattern broadcast microphones keep out horns, construction and traffic.',
      'Power: building generator plus IPS backup keeps recording running through load-shedding and protects your files.',
      'Access: the studio is at Matikata ECB Chattar, reachable from Mirpur DOHS, Banani and Airport Road, with parking beside Eurasia Building.',
    ],
  },
  {
    title: 'Timelines, Revisions and After Delivery',
    body: [
      'Commercial campaigns typically take 7 to 10 working days from storyboard approval to final masters, covering set preparation, filming, effects and colour timing. Review runs through a timestamped cloud link with structured revision rounds, followed by loudness-compliant finishing and platform masters.',
      'Express 48 to 72-hour delivery is available at a 30% priority fee, and raw captures are available within 24 hours. Masters are archived for 60 days with free re-exports to new aspect ratios. Plan hook variants and language versions at the brief stage, because adding them later means re-editing.',
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
          How commercial production works, OVC versus TVC, which tier fits, and what happens after delivery.
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
