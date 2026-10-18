'use client'

import { SectionIntro } from '../../../Kinetic'

const guideBlocks = [
  {
    title: 'What Full-Service Video Production Covers',
    body: [
      'Full-service means one team owns the outcome from brief to export: audience definition, script and shot list, filming, lighting, broadcast audio, editing, colour grading, sound design and platform-specific masters. At FrameCipher Studio this happens in one building at Matikata ECB Chattar, so the crew that lights your interview works in the same place as the editor who grades it.',
      'That matters because handoffs are where productions go wrong. Footage shot without an audio and grading plan often needs a second vendor to rescue it. We agree purpose, audience, format and deliverables in writing before the shoot, so filming and editing both serve where the video will run: YouTube, Meta ads, a website hero or an investor deck.',
    ],
  },
  {
    title: 'Studio Shooting or Location Shooting',
    body: [
      'A studio day removes venue hire, portable lighting, sound treatment and weather or traffic contingency from the budget. Whether it costs less than a location shoot depends on the script, so we itemise both options for you to compare.',
      'Inside the ECB Chattar stage, acoustic isolation, the overhead softbox grid and backup power are already in place. The multi-camera rig records a wide master and tight angles at once, which shortens the time your speakers spend in front of the lens.',
      'For factory, plant or multi-location work, we quote field production separately, with crew, gear and travel days itemised. A studio interview plus one field b-roll day is often a practical middle option, and we will price it alongside a full field shoot.',
    ],
  },
  {
    title: 'Which Tier to Choose',
    list: [
      'Studio Day Essential: you have a finished script and need one polished asset fast, such as a founder introduction, testimonial, course lesson or product announcement. It is capture plus a clean edit, not creative development.',
      'Signature Commercial: the video must persuade through paid social, website conversion or a launch. Concept, multi-camera coverage, grade and cutdowns are what separate it from a recording.',
      'Flagship Brand Film: you need multi-location storytelling, casting, motion graphics or broadcast deliverables.',
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
      'Studio Day Essential delivers in 3 to 5 business days. Signature Commercial and Flagship timelines are set in your written quote. Review runs through a timestamped cloud link with the revision rounds listed in your package, followed by grade, sound finish and platform masters.',
      'Express 48-hour delivery is available at a 30% priority fee, and raw captures are available within 24 hours. Masters are archived for 60 days with free re-exports to new aspect ratios. Plan vertical cutdowns and subtitled versions at the brief stage, because adding them later means re-editing.',
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
          How full-service production works, when the studio beats location, which tier fits, and what happens after delivery.
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
