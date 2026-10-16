'use client'

import { SectionIntro } from '../../../Kinetic'

const guideBlocks = [
  {
    title: 'What Professional Editing Covers',
    body: [
      'Editing is story decisions, not just cuts: which moments survive, what order they play in, where the hook lands and how long each shot holds. At FrameCipher Studio the same editor who assembles your narrative also finishes grade, sound and captions, so pacing choices survive into the final master instead of being flattened by a handoff.',
      'That matters because most raw footage is 5–10x longer than the finished video. A two-hour podcast becomes a 20-minute episode plus five shorts; a full shoot day becomes a 90-second commercial. We agree the target runtime and platform before cutting, so nothing gets edited twice.',
    ],
  },
  {
    title: 'File-Handoff Specs: Codecs, LOG Profiles, Drive and Cloud',
    body: [
      'Send camera originals wherever possible: MP4 or MOV H.264/H.265, ProRes, BRAW or XAVC, with LOG profiles (S-Log3, C-Log, LogC) intact. Keep folder names by camera card and day, and include separate audio recorder files for clean sync.',
      'Deliver on a portable SSD in person at ECB Chattar, or by Google Drive or Dropbox links with full-resolution files — never compressed WhatsApp previews. Add two or three reference videos whose pacing you like; they shorten revision rounds measurably.',
    ],
  },
  {
    title: 'Which Tier to Choose',
    list: [
      'Shorts Pack ×5: you have long video or raw clips and need five hook-first verticals with captions, SFX and cover frames for Reels, Shorts and TikTok.',
      'Creator Edit: YouTube episodes, commercial cuts and podcast edits up to 15 minutes needing multi-cam sync, graphics, grade and two extracted cutdowns.',
      'Studio Suite: commercials, courses and long-form up to 30 minutes needing chapter architecture, a full motion package and a dedicated editor.',
    ],
  },
  {
    title: 'Dhaka Realities We Plan Around',
    list: [
      'Mixed phone and camera footage: clips shot by different people on different devices get exposure-matched and shot-matched so cuts stop jumping.',
      'Noisy audio: horns, fans and room echo are cleaned with de-noise and de-reverb; licensed music beds keep you clear of copyright strikes.',
      'Caption culture: most Dhaka viewers watch muted first, so kinetic Bangla or English captions are cut into the edit, not bolted on after.',
    ],
  },
  {
    title: 'Timelines, Revisions and After Delivery',
    body: [
      'Standard edits deliver in 3–5 working days from verified intake. Review runs through a timestamped cloud link with 2 structured revision rounds, followed by grade, sound finish, captions and platform masters.',
      'Express 48-hour delivery is available at a 30% priority fee, and proxy previews are available within 24 hours. Masters are archived for 60 days with free re-exports to new aspect ratios. Plan cutdowns and subtitle languages at the brief stage, because adding them later means re-editing.',
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
          How editing works, what to send us, which tier fits, and what happens after delivery.
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
