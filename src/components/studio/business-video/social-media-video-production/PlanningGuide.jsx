'use client'

import { SectionIntro } from '../../../Kinetic'

const guideBlocks = [
  {
    title: 'What Social Video Production Covers',
    body: [
      'Social production means one team owns the vertical pipeline from hook to posting calendar: script and hook review, batch recording, vertical-composed 4K capture, kinetic captions, trend-aware sound design, cover frames and a posting order. At FrameCipher Studio this happens under one roof at Matikata ECB Chattar, so the crew that lights your session works in the same place as the editor who captions the clips.',
      'That matters because platforms punish trimmed-down landscape footage. Subjects drift under UI buttons, captions get cropped, and retention collapses. We agree the platforms, clip count, hooks and posting calendar in writing before recording, so one session banks weeks of native vertical content.',
    ],
  },
  {
    title: 'Batch Recording or Monthly Engine',
    body: [
      'A batch pack suits creators and brands with scripts ready: 10 clips in a half-day visit, 20 in a full day, each with kinetic Bangla or English captions, cover frames and SRT files.',
      'Inside the ECB Chattar stage, vertical-composed rigs, backdrop changes and styling swaps are already in place. Recording 10 to 20 clips in one visit compresses the expensive part — shoot time — so per-clip cost falls 40 to 60 percent versus filming each reel separately.',
      'The monthly engine suits teams that must never face an empty calendar: a monthly shoot day, 30 or more finished verticals, trend-response pickups and a performance review that feeds winning hooks back into the next batch.',
    ],
  },
  {
    title: 'Which Tier to Choose',
    list: [
      'Batch-10 Pack (৳32,000): 10 scripted verticals in one 4-hour visit with captions and cover frames. Best for testing a format or banking two weeks of posts.',
      'Batch-20 Pack (৳62,000): a full-day content bank of 20 verticals with b-roll overlays, styling changes and a 30-day posting calendar. Best for a month of consistent posting.',
      'Monthly Engine (৳1,15,000 per month): 30 or more clips monthly with trend response and analytics review. Best for always-posting brands and creators.',
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
      'Batch-10 packs deliver in 3 to 5 working days; Batch-20 packs in 5 to 7 working days. Review runs through a timestamped cloud link with structured revision rounds, followed by caption finishing, cover frames and platform-ready MP4s with SRT files.',
      'A 48-hour rush edit lane is available at a 25% priority fee, and raw captures are available within 24 hours. Masters are archived for 60 days with free re-exports to new ratios. Plan hook variants and trend-response slots at the brief stage, because trends expire fast.',
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
          How batch social production works, batch versus retainer, which tier fits, and what happens after delivery.
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
