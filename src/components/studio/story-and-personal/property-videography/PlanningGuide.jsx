'use client'

import { SectionIntro } from '../../../Kinetic'

const guideBlocks = [
  {
    title: 'What Property Videography Covers',
    body: [
      'Property videography means one team owns the listing asset end to end: staging guidance, orientation-based scheduling, gimbal walkthroughs, balanced exposure, drone aerials, host direction, then graded tours, vertical reels and stills. At FrameCipher Studio the crew that walks your property works with the editor who grades it, so the light captured on site is the light in the final film.',
      'That matters because listings compete on first impression. A flat, shaky walkthrough signals a flat property; a smooth, well-lit tour with real spatial flow books viewings. We agree the deliverable set in writing before the shoot — tour length, reel count, stills — so the shoot day captures everything the listing needs.',
    ],
  },
  {
    title: 'On-Site Shoots or Studio Support',
    body: [
      'Property films are shot on location: the space, light and neighbourhood only exist at the address. Our crews arrive with ultra-wide cinema lenses, gimbals, practical lighting and licensed drones, and finish most apartments in a single half-day visit.',
      'The ECB Chattar studio supports the production around the shoot: agent host links and voice-over recorded under controlled sound, plus the DaVinci suite where tours are graded and reels are cut. Host intros recorded in-studio over field footage is a practical luxury-tier combination.',
      'For project launches we quote the full funnel alongside the tour: portal listings, Facebook lead ads with vertical cuts, sales-gallery loops and agent briefing versions.',
    ],
  },
  {
    title: 'Which Tier to Choose',
    list: [
      'Apartment Tour: resale and rental listings needing a polished 2–3 minute walkthrough with vertical reels. Gimbal and grade cover most listings completely.',
      'Luxury Villa + Drone: high-end presentation with host direction, aerial neighbourhood context and day-to-dusk colour timing.',
      'Commercial Tower: developers and REITs needing multi-unit coverage, amenity films, testimonial integration and investor-ready narrative.',
    ],
  },
  {
    title: 'Dhaka Realities We Plan Around',
    list: [
      'Light: morning flatters east-facing living spaces, afternoons warm bedrooms, dusk makes towers iconic — we schedule around orientation, not convenience.',
      'Access: management permissions, parking and loading rules are confirmed before the crew rolls, so shoot windows are never lost at the gate.',
      'Power: battery-backed kits with IPS-protected ingest back at base keep capture and files safe through load-shedding.',
    ],
  },
  {
    title: 'Timelines, Revisions and After Delivery',
    body: [
      'Tours and reels deliver in 3 to 4 business days after the shoot. Review runs through a timestamped cloud link with the revision rounds in your package, followed by grade, reel cuts and still exports.',
      'Urgent 48-hour listing delivery is available at +25% for live portals and campaign launches. Masters are archived for 60 days with free re-exports to new aspect ratios — plan vertical and subtitled versions at the brief stage.',
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
          How property tours work, when location leads, which tier fits, and what happens after delivery.
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
