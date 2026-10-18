'use client'

import { SectionIntro } from '../../../Kinetic'

const guideBlocks = [
  {
    title: 'What Cinematic Wedding Coverage Covers',
    body: [
      'Cinematic wedding coverage means one consistent team owns your celebration end to end: a story meeting, ritual and schedule mapping, discreet multi-angle capture, licensed scoring, feature-grade colour and a premiere sequence of teaser, highlight and ceremony edits. At FrameCipher Studio the crew that films your Holud edits your premiere, so the story stays coherent across functions.',
      'That matters because Bangladeshi weddings unfold across functions with distinct emotional registers: Holud’s playfulness, the ceremony’s gravity, the reception’s celebration. Single-event edits capture moments; multi-event narratives capture arcs — the same faces across days, jokes that pay off, elders’ blessings that bookend the story.',
    ],
  },
  {
    title: 'On-Location Celebration or Studio Sessions',
    body: [
      'Weddings are filmed where they happen: venues, family homes and destinations across Bangladesh. Our crews move discreetly with low-light cinema cameras, wireless audio and backup power, and coordinate with planners and photographers so coverage never collides.',
      'The ECB Chattar studio supports the production around the dates: pre-event couple portrait sessions, family interview chapters and the full DaVinci edit suite where teasers are cut within days. Couple sessions plus celebration coverage is the signature combination.',
      'Destination weddings across Sylhet, Chattogram and Cox’s Bazar — and international assignments — quote travel transparently with the same creative team, because consistency across functions matters more than local crew savings.',
    ],
  },
  {
    title: 'Which Tier to Choose',
    list: [
      'Single Event Cinema: one Holud, wedding or reception filmed cinematically with teaser, highlight and ceremony edits. Best when one function carries the story.',
      'Two-Event Story: Holud plus wedding (or wedding plus reception) woven into one narrative with a couple session and heirloom USB box.',
      'Signature Celebration: 3–4 functions with two cinematographers throughout, drone where permitted, parents’ story chapter and a private premiere.',
    ],
  },
  {
    title: 'Dhaka Realities We Plan Around',
    list: [
      'Season: November–February peak weekends book 1–3 months ahead; weekday and off-season dates confirm faster.',
      'Power: load-shedding hits mid-ceremony. Battery-backed cameras and IPS-protected ingest keep every ritual recorded.',
      'Logistics: venue rules, baraat routes and Dhaka traffic between functions decide crew positions — mapped in the story meeting, not improvised.',
    ],
  },
  {
    title: 'Timelines, Revisions and After Delivery',
    body: [
      'The 60-second teaser delivers within 7 days of the event. Highlight and ceremony films premiere in 3 to 4 weeks. Review runs through a private screening link with the revision rounds in your package, followed by grade, sound finish and 4K masters.',
      'Raw captures are available within 24 hours on request, and masters are archived for 60 days with free re-exports. Plan the parents’ chapter and 4K delivery at the brief stage — adding them after the premiere means re-editing.',
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
          How wedding films work, when location leads, which tier fits, and what happens after the dates.
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
