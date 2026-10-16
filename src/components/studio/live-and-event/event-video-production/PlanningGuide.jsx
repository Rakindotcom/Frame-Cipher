'use client'

import { SectionIntro } from '../../../Kinetic'

const guideBlocks = [
  {
    title: 'What Event Videography Covers',
    body: [
      'Event videography means one team owns the day and the cut: a coverage plan built on your agenda, mobile multi-camera capture, board-feed audio, delegate interviews, then a teaser, an aftermovie and full session recordings. At FrameCipher Studio the crew that films your keynote works in the same building as the editor who grades it, so nothing is lost between field and finish.',
      'That matters because events cannot be restaged. A missed keynote or distorted speech track cannot be fixed in post. We agree the shot plan, crew positions and deliverables in writing before doors open, so filming and editing both serve what the footage must do: PR, sponsor reporting and next-year promotion.',
    ],
  },
  {
    title: 'Field Coverage or Studio Support',
    body: [
      'Events are field-first: the content only exists at your venue. Our crews travel self-sufficiently with cinema cameras, gimbals, wireless audio and backup power, and coordinate with the venue AV desk for board feeds and lighting positions.',
      'The ECB Chattar studio supports the production around the day: pre-event speaker links, branded interview backdrops, and the full DaVinci edit suite where teasers are cut overnight. A studio-recorded host intro plus field coverage is a practical combination for flagship recaps.',
      'For launches that also need a live audience online, we quote simulcast streaming alongside recorded coverage so both outputs share one crew plan.',
    ],
  },
  {
    title: 'Which Tier to Choose',
    list: [
      'Half-Day Cover: one launch, panel or awards evening up to 4 hours. Single crew, full recordings and a 24-hour teaser — capture plus a fast PR asset.',
      'Full-Day Crew: conferences up to 9 hours needing stage plus audience coverage, an interview corner and a cinematic aftermovie alongside the teaser.',
      'Multi-Day Summit: expos and summits across halls and days, with daily social drops during the event and a flagship recap plus the full archive.',
    ],
  },
  {
    title: 'Dhaka Realities We Plan Around',
    list: [
      'Audio: hall echo and crowd noise ruin speeches. Direct board feeds plus lavaliers keep dialogue clean in noisy convention centres.',
      'Power: load-shedding hits mid-keynote. Battery-backed cameras and IPS-protected ingest keep recording continuous.',
      'Access: venue loading rules, parking and Dhaka traffic decide call times — we confirm setup windows with the venue in writing, and travel crews reach Chattogram, Sylhet and Cox’s Bazar.',
    ],
  },
  {
    title: 'Timelines, Revisions and After Delivery',
    body: [
      'The 60-second teaser delivers within 24 hours of event close on full-day tiers. Aftermovies follow in 5 to 10 working days. Review runs through a timestamped cloud link with the revision rounds in your package, followed by grade, sound finish and vertical cutdowns.',
      'Same-day evening edits are available at +30% for closing-ceremony screenings and press deadlines. Raw session recordings are available within 24 hours, and masters are archived for 60 days with free re-exports to new aspect ratios.',
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
          How event coverage works, when field beats studio, which tier fits, and what happens after the day.
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
