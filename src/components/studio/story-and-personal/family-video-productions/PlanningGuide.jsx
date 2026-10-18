'use client'

import { SectionIntro } from '../../../Kinetic'

const guideBlocks = [
  {
    title: 'What Family and Legacy Films Cover',
    body: [
      'A family film means one team owns the memory end to end: a story consultation, gentle interview sessions, milestone event coverage, photograph and VHS restoration, chaptered editing, then an heirloom USB box and a private cloud vault. At FrameCipher Studio the interviewer, restorer and editor work under one roof, so your family’s story never passes through strangers’ hands.',
      'That matters because these films answer to the toughest audience: your own grandchildren. We design questions that draw out narrative, not facts — childhood streets, first earnings, wedding-day details, hardships overcome, advice for the future — prompts that unlock stories nobody ever asked about in quite this way.',
    ],
  },
  {
    title: 'Home Sessions or Studio Sessions',
    body: [
      'Elders speak most freely in familiar surroundings. Our team brings portable softbox lighting, acoustic blankets and quiet audio gear to your family residence anywhere in Dhaka, and sessions run at the elder’s pace with breaks whenever needed.',
      'The ECB Chattar studio suits milestone interviews needing controlled light and absolute quiet, plus anniversary event coverage edited alongside the interviews. Many families combine both: event day on location, legacy interviews in-studio.',
      'Camera-shy elders and children are met with conversation, not interrogation. Our director chats casually and lets stories unfold — patience and respect are contractual, not aspirational.',
    ],
  },
  {
    title: 'Which Tier to Choose',
    list: [
      'Milestone Film: one anniversary or birthday with a gentle interview, event coverage and 30 restored photographs in a 15-minute keepsake.',
      'Legacy Documentary: an elder’s full life story across 2–3 unhurried sessions with 100 restorations, chapters and a trailer cut.',
      'Heritage Archive: the complete multi-generation record — up to 5 members, business and property chapters, bilingual narration and a 5-year searchable vault.',
    ],
  },
  {
    title: 'Dhaka Realities We Plan Around',
    list: [
      'Comfort: session length follows the elder’s energy, with home acoustics treated by blankets and close-pattern mics against horns and traffic.',
      'Power: battery-backed kits and IPS-protected ingest keep interviews and archive transfers safe through load-shedding.',
      'Scheduling: family availability across siblings and generations decides session order — we plan around Dhaka traffic and prayer times.',
    ],
  },
  {
    title: 'Timelines, Revisions and After Delivery',
    body: [
      'Films deliver in 5 to 10 working days after the final session. Review runs through a private family link with the revision rounds in your package, followed by restoration finishing, grading and USB mastering.',
      'Raw interview archives are available within 24 hours on request. Masters live in a private cloud vault with multi-year access, and extra USB box sets for siblings are ৳3,500 — plan copies at the brief stage so every household receives one.',
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
          How family films work, where sessions happen, which tier fits, and what happens after delivery.
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
