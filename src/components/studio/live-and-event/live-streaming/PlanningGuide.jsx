'use client'

import { SectionIntro } from '../../../Kinetic'

const guideBlocks = [
  {
    title: 'What Live Streaming Production Covers',
    body: [
      'Live streaming means directing a programme in real time: camera switching, audio mixing, graphics, slides, remote guests and platform delivery, all happening at once with no second take. At FrameCipher Studio one team owns the full chain, from the tech check to the recording backup, so a failure in any link is caught by the person responsible for it.',
      'That matters because live has no edit to hide behind. A frozen frame or lost audio reaches every viewer instantly. We agree the rundown, platforms, graphics and backup plan in writing before the day, and we rehearse speakers and remote guests so the live hour runs like a rehearsed show.',
    ],
  },
  {
    title: 'Studio Streaming or Venue Streaming',
    body: [
      'In-studio streaming at ECB Chattar removes venue internet risk, hall acoustics and setup-window pressure: bonded fibre, treated sound and backup power are already in place. It suits webinars, talk formats, launches and training that do not need a live audience in frame.',
      'Venue streaming covers conferences, expos, AGMs and celebrations where the event itself is the content. We recce the hall, confirm a wired internet drop plus cellular backup, coordinate with the venue AV desk for board feeds, and arrive early enough to test every line before doors open.',
      'Hybrid briefs are common: keynote streamed live from the venue while panel intros or host links are recorded in-studio. We price both options side by side so you can compare.',
    ],
  },
  {
    title: 'Which Tier to Choose',
    list: [
      'Single-Cam Live: one speaker or panel, one programme feed, up to 2 hours. Best for webinars, small launches and training where reliability matters more than camera variety.',
      'Multi-Cam Broadcast: switched three-camera production with simulcast and a 72-hour highlight recap. Choose it when the audience is public and the recording must work on demand afterwards.',
      'Summit Command: full-day, multi-room conference coverage with roaming gimbal and same-day teasers for PR.',
    ],
  },
  {
    title: 'Dhaka Realities We Plan Around',
    list: [
      'Internet: venue Wi-Fi is never trusted for broadcast. We bring bonded fibre plus multi-SIM cellular backup and test failover before air.',
      'Power: building generator plus IPS backup keeps the switcher, encoders and recording running through load-shedding.',
      'Access: venue loading rules, parking at ECB Chattar, and Dhaka traffic windows decide call times — we confirm setup access with the venue in writing.',
    ],
  },
  {
    title: 'Timelines, Revisions and After Delivery',
    body: [
      'The live hour is fixed; post work follows fast. Highlight recaps deliver within 72 hours on multi-cam tiers, same-day teasers are scoped for summit days, and full masters are available within 24 hours of wrap. Review runs through a timestamped cloud link with the revision rounds in your package.',
      'Masters are archived for 60 days with free re-exports to new aspect ratios. Plan on-demand chapters, subtitled versions and vertical cutdowns at the brief stage, because re-cutting the archive later costs more than versioning it now.',
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
          How live broadcasts work, when the studio beats the venue, which tier fits, and what happens after air.
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
