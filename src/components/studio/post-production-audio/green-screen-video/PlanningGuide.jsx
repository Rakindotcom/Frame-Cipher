'use client'

import { SectionIntro } from '../../../Kinetic'

const guideBlocks = [
  {
    title: 'What Green Screen Production Covers',
    body: [
      'Green screen production is a lit stage, a directed shoot and a keyed composite in one booking: we light the chroma wall evenly, frame and record presenters with live key preview, then replace the green with virtual sets, slides or 3D environments — colour-matched so subjects sit inside the background instead of floating on it.',
      'That matters because compositing quality is decided on the shoot day, not in post. Even light, correct wall distance and spill control at capture are what make edges crisp. We check all three before the first take, which is why our keys rarely need rescue work.',
    ],
  },
  {
    title: 'Lighting, Keying and Wardrobe Notes',
    body: [
      'The seamless green wall is lit by a calibrated overhead softbox grid tuned for zero hot spots and even falloff, with dedicated rim and backlight on subjects to cancel green reflections on hair and shoulders. A hardware keyer shows the live composite on floor monitors while you record.',
      'Avoid green clothing, reflective jewellery, shiny silk and thin green-tinted glasses. Bring wardrobe options; we check each outfit against spill risk on the monitors. Send slides, logos and background references before the session so sets are built before you arrive.',
    ],
  },
  {
    title: 'Which Tier to Choose',
    list: [
      'Chroma Session: you need clean keyable footage fast — walk in, present to teleprompter, leave with flat-profile 4K the same day and composite elsewhere or with us later.',
      'Virtual Half-Day: presentations needing finished backgrounds — newsroom, classroom or brand sets with slides, lower thirds and chapter graphics composited in-house.',
      'VFX Production Day: effects-heavy work — multi-subject keys, moving cameras, 3D environments, tracking and rotoscoping for difficult edges.',
    ],
  },
  {
    title: 'Dhaka Realities We Plan Around',
    list: [
      'Uneven rental stages: many rooms call a painted wall a green screen. Our pre-lit grid and separation depth exist precisely to avoid the spill and ragged edges those rooms produce.',
      'Load-shedding: building generator plus IPS backup keeps the lighting grid, cameras and keyer running without flicker or dropped takes.',
      'Access: the studio is at Matikata ECB Chattar, reachable from Mirpur DOHS, Banani and Airport Road, with parking beside Eurasia Building.',
    ],
  },
  {
    title: 'Timelines, Revisions and After Delivery',
    body: [
      'Raw keyable footage hands over the same day. Finished composites deliver in 5–7 working days on standard tiers. Review runs through a timestamped cloud link with 2 structured revision rounds on full scopes, followed by final colour matching and multi-ratio masters.',
      'Express 48–72 hour compositing is available at a 30% priority fee. Masters and transparent ProRes files are archived for 60 days with free re-exports to new aspect ratios. Confirm backgrounds, slides and graphics at the brief stage, because new sets after delivery mean re-compositing.',
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
          How chroma production works, what to wear and send, which tier fits, and what happens after delivery.
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
