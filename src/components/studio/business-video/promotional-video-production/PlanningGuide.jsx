'use client'

import { SectionIntro } from '../../../Kinetic'

const guideBlocks = [
  {
    title: 'What Promotional Video Production Covers',
    body: [
      'Promotional production means one team owns the conversion from brief to export: offer definition, hook-first scripting, product staging, studio or field filming, kinetic motion graphics, sound design and platform-specific masters. At FrameCipher Studio this happens under one roof at Matikata ECB Chattar, so the crew that stages your product works in the same place as the editor who animates the offer.',
      'That matters because promos live or die on clarity. A single call to action, a visible price or deadline, and framing that survives every feed — these are agreed in writing before the shoot, so filming and editing both serve the response you need: awareness, leads, flash sales or announcements.',
    ],
  },
  {
    title: 'Studio Shooting or Location Shooting',
    body: [
      'A studio day removes venue hire, portable lighting and weather contingency from the budget, and gives you product staging tables, high-CRI continuous lighting and macro lenses that location shoots cannot match cheaply.',
      'Inside the ECB Chattar stage, gel lighting, turntable staging and backup power are already in place. For showroom launches and retail campaigns, we add a field-shoot day at your outlet, quoted with crew, gear and travel itemised.',
      'A studio hero plus one showroom b-roll day is often the practical middle option for seasonal campaigns, and we will price it alongside a full field shoot.',
    ],
  },
  {
    title: 'Which Tier to Choose',
    list: [
      'Launch Cut (৳28,000): one punchy 30 to 60 second promo with a hook, demo, kinetic price tag and hard call to action. Best for a single offer.',
      'Campaign Pack (৳58,000): a coordinated set — hero video, two hook variants and teaser cuts sized for every feed. Best for launches that must run across placements.',
      'Seasonal Blitz (৳1,25,000): full seasonal coverage with up to 4 product promos, daily story drops and retail-screen versions. Best for Eid, Puja and 11.11 peaks.',
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
      'Simple social promos take 3 to 5 working days from brief to delivery. Comprehensive launch campaigns with multi-ratio deliverables take 1 to 2 weeks. Review runs through a timestamped cloud link with structured revision rounds.',
      'Express 48-hour delivery is available for flash sales at a 25% priority fee, and raw captures are available within 24 hours. Masters are archived for 60 days with free re-exports to new aspect ratios. Plan hook variants and Bangla offer badges at the brief stage, because adding them later means re-editing.',
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
          How promo production works, studio versus location, which tier fits, and what happens after delivery.
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
