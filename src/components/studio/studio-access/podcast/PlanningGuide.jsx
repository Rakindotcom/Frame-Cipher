'use client'

import { SectionIntro } from '../../../Kinetic'

const guideBlocks = [
  {
    title: 'What Full Podcast Production Covers',
    body: [
      'Full production means one team owns the episode from brief to publish: format definition, talking points, recording, multi-mic audio, 4K capture, editing, colour grading, subtitles and platform-specific exports. At FrameCipher Studio this happens in one building at Matikata ECB Chattar, so the engineer who tracks your audio works in the same place as the editor who cuts it.',
      'That matters because handoffs are where shows lose quality. Audio recorded without an edit plan often needs rescue work later. We agree format, speaker count, branding and deliverables in writing before the session, so recording and editing both serve where the episode will run: Spotify, Apple Podcasts, YouTube or all three.',
    ],
  },
  {
    title: 'Audio-Only or 4K Video Recording',
    body: [
      'An audio-only session removes cameras, lighting design and video edit from the budget. Whether it costs less than video depends on the show, so we itemise both options for you to compare.',
      'Inside the ECB Chattar stage, acoustic isolation, broadcast microphones and backup power are already in place. The 3-camera rig records host, guest and wide master at once, which gives the editor real switching choices instead of a single static frame.',
      'For shows that need both, a video session plus audio mastering covers every platform in one sitting, and we will price it alongside an audio-only booking.',
    ],
  },
  {
    title: 'Which Tier to Choose',
    list: [
      'Audio Podcast Session: you need clean broadcast audio for Spotify and Apple Podcasts, with mastered loudness and raw stems for your own editor. It is recording plus mastering, not video.',
      '4K Video Podcast Session: the episode must also work on YouTube. Three 4K angles, lighting and live switching are what separate it from an audio recording.',
      'Full Production Suite: you want record-to-published with edit, grade, subtitles, vertical clips and packaging handled for you.',
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
      'Audio sessions hand over raw stems the same day with mastered files in 48 hours. Full Production episodes deliver the edited master in 3 to 5 business days. Review runs through a timestamped cloud link with the revision rounds listed in your package.',
      'Express 48-hour delivery is available at a 30% priority fee. Masters are archived for 60 days with free re-exports to new aspect ratios. Plan vertical cutdowns and subtitled versions at the brief stage, because adding them later means re-editing.',
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
          How full podcast production works, when video beats audio-only, which tier fits, and what happens after delivery.
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
