'use client'

import { SectionIntro } from '../../../Kinetic'

const guideBlocks = [
  {
    title: 'What Corporate Video Production Covers',
    body: [
      'Corporate video means one team owns the message from brief to export: audience definition, script and talking points, teleprompter direction, studio and b-roll filming, broadcast audio, editing, colour grading, motion graphics and stakeholder-ready masters. At FrameCipher Studio this happens under one roof at Matikata ECB Chattar, so the crew that lights your executive works in the same place as the editor who grades the film.',
      'That matters because handoffs are where corporate films go wrong. Footage shot without a grading and versioning plan often needs a second vendor to rescue it. We agree audience, message, length and screen placements in writing before the shoot, so filming and editing both serve the boardroom, the website and LinkedIn alike.',
    ],
  },
  {
    title: 'Studio Shooting or Location Shooting',
    body: [
      'A studio day removes venue hire, portable lighting, sound treatment and weather or traffic contingency from the budget. For executive interviews and leadership messages, the studio is usually the simpler and more predictable option.',
      'Inside the ECB Chattar stage, acoustic isolation, the overhead softbox grid and backup power are already in place. The dual-camera rig records a wide master and a tight editorial angle at once, which shortens the time your leaders spend in front of the lens.',
      'For company profiles, we usually combine a controlled studio interview with one location b-roll day at your office or facility. Field days are quoted separately with crew, gear and travel itemised.',
    ],
  },
  {
    title: 'Which Tier to Choose',
    list: [
      'Executive Interview (৳48,000): one leader, one polished message, plus a LinkedIn highlight reel. Best when the script or talking points are ready.',
      'Company Profile Film (৳95,000): the complete capability story — studio interviews plus office and facility b-roll, motion graphics and investor-grade finish.',
      'Enterprise AV Suite (৳2,60,000 and up): multi-film suites for AGMs, investor decks and employer branding across several leaders, locations and languages.',
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
      'Company profile films deliver in 5 to 7 working days from the final shoot day. Review runs through a timestamped cloud link with the revision rounds listed in your package, followed by grade, sound finish and platform masters.',
      'Express 48-hour delivery is available at a 30% priority fee for board meetings and investor pitches, and raw captures are available within 24 hours. Masters are archived for 60 days with free re-exports to new aspect ratios. Plan subtitled and language versions at the brief stage, because adding them later means re-editing.',
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
          How corporate production works, when the studio beats location, which tier fits, and what happens after delivery.
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
