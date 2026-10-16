'use client'

import { SectionIntro } from '../../../Kinetic'

const guideBlocks = [
  {
    title: 'What Documentary Production Covers',
    body: [
      'Full documentary production means one team owns the story from treatment to premiere kit: issue research, character scouting, access negotiation, field cinematography, translation, editing, grading, sound design and versioned masters. At FrameCipher Studio the researchers sit with the editors, so what is promised in the treatment is what gets filmed.',
      'That matters because documentaries answer to demanding audiences: donor boards, broadcast commissioners and festival programmers. We agree the narrative arc, characters, locations and deliverable stack in writing before fieldwork, so filming serves the premiere the film is built for.',
    ],
  },
  {
    title: 'Field Production or Studio Interviews',
    body: [
      'Documentaries are field-led: real lives unfold in villages, factories and neighbourhoods, not on sets. Our crews travel self-sufficiently with cinema cameras, drones, battery banks and weather-sealed audio across Bangladesh.',
      'The ECB Chattar studio supports the production around fieldwork: expert and witness interviews under controlled light and sound, narration recording, and the DaVinci suite where the film is graded and mixed. Studio interviews plus field observation is the standard combination.',
      'For institutional clients we also deliver the full version stack: DCP or ProRes for premieres, loudness-compliant broadcast cuts, subtitled social versions and uncompressed preservation copies.',
    ],
  },
  {
    title: 'Which Tier to Choose',
    list: [
      'Impact Short: one location arc and character-led interviews for donor reporting and CSR pages. A 10–12 minute film with teaser and social cutdowns.',
      'Standard Documentary: multi-district narratives with archival research, original score and festival-plus-broadcast masters — the development-sector standard.',
      'Feature and Series: extended windows, multi-season arcs and distribution-grade finishing for festivals and broadcasters.',
    ],
  },
  {
    title: 'Bangladesh Realities We Plan Around',
    list: [
      'Access: factories, riverine communities and institutions need negotiated permissions — we start access work in pre-production, not on shoot day.',
      'Power: field kits run on battery banks with IPS-protected ingest back at base, so load-shedding never risks footage.',
      'Archives: heritage and compliance stories need rights cleared months ahead; we handle licensing and restoration as a line item, not an afterthought.',
    ],
  },
  {
    title: 'Timelines, Revisions and After Delivery',
    body: [
      'Impact shorts run 3 to 5 weeks from research sign-off to graded master; standard multi-location films run 6 to 10 weeks. Institutional clients should add programme, communications and country-director review rounds into the schedule — our stakeholder review structure plans for them.',
      'Rush delivery is possible for donor deadlines and summit premieres, quoted upfront. Masters are archived for 60 days with free re-exports; additional language versions run ৳25,000–45,000 and are cheapest when planned at the brief stage.',
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
          How documentary production works, when field leads, which tier fits, and what happens after premiere.
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
