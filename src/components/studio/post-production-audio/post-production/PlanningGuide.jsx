'use client'

import { SectionIntro } from '../../../Kinetic'

const guideBlocks = [
  {
    title: 'What Post-Production Covers',
    body: [
      'Post-production is everything after the shoot: conforming camera files, building the story, matching colour across cameras, restoring dialogue, designing sound, adding graphics and subtitles, and exporting platform-specific masters. At FrameCipher Studio this happens in one finishing suite at Matikata ECB Chattar, so the editor, colourist and sound engineer work from the same project — not three disconnected vendors.',
      'That matters most for externally shot footage. Material filmed across different cameras, lights and rooms only becomes one film in the finish. We verify your handoff on intake and tell you in writing what the footage can and cannot support before you commit to a tier.',
    ],
  },
  {
    title: 'File-Handoff Specs: Codecs, LOG Profiles, Drive and Cloud',
    body: [
      'Send camera originals wherever possible: MP4 or MOV H.264/H.265, ProRes, BRAW, REDCODE or XAVC, with LOG profiles (S-Log3, C-Log, LogC) intact — never pre-baked phone filters. Keep folder names by camera card and day so conform stays fast.',
      'Deliver on a portable SSD in person at ECB Chattar, or by Google Drive or Dropbox links with full-resolution files, not compressed previews. Include separate audio recorder files with matching time-of-day stamps for clean sync.',
    ],
  },
  {
    title: 'Which Tier to Choose',
    list: [
      'Essential Finish: straightforward footage under 5 minutes that needs clean assembly, balanced correction and subtitles — interviews, event highlights, single explainers.',
      'Commercial Grade: the video must persuade through ads, launches or brand channels. Cinematic grade, full sound design, motion graphics and multi-ratio versions are what separate it from a correction pass.',
      'Feature Finish: documentaries, course series and multi-episode work needing conform continuity, VFX cleanup, stems and archival masters.',
    ],
  },
  {
    title: 'Dhaka Realities We Plan Around',
    list: [
      'Noisy location audio: traffic horns, construction and room echo are restored with spectral de-noise and de-reverb rather than reshoots.',
      'Mixed cameras: phone, mirrorless and cinema footage shot by different people gets shot-matched in DaVinci Resolve so cuts stop jumping.',
      'Power and internet: generator plus IPS backup and fibre internet keep rendering, review uploads and cloud handoffs moving through outages.',
    ],
  },
  {
    title: 'Timelines, Revisions and After Delivery',
    body: [
      'Standard finishing delivers in 5–10 working days from verified intake. Review runs through a timestamped cloud link with 2 structured revision rounds on full scopes, followed by grade, sound finish and platform masters.',
      'Express 48–72 hour finishing is available at a 30% priority fee, and raw or proxy files are available within 24 hours. Finished masters are archived for 60 days with free re-exports to new aspect ratios. Plan vertical versions and subtitled languages at the brief stage, because adding them later means re-editing.',
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
          How finishing works, what to send us, which tier fits, and what happens after delivery.
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
