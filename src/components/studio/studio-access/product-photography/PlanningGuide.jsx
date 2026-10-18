'use client'

import { SectionIntro } from '../../../Kinetic'

const guideBlocks = [
  {
    title: 'What Full Product Photography Covers',
    body: [
      'Full coverage means one team owns the catalogue from shot list to export: product count, angles, backgrounds, styling, lighting, capture, retouching and marketplace-ratio exports. At FrameCipher Studio this happens in one building at Matikata ECB Chattar, so the stylist who dresses your product works in the same place as the retoucher who finishes it.',
      'That matters because handoffs are where catalogues go wrong. Images shot without a retouch and ratio plan often need reshooting. We agree count, angles, backgrounds and specs in writing before the shoot, so styling and capture both serve where the images will run: Daraz, Shopify, Amazon or paid social.',
    ],
  },
  {
    title: 'Per-Product Sets or Half-Day Banks',
    body: [
      'A per-product set suits small catalogues: you pay ৳1,500 per product for 3 retouched angles with a 5-product minimum. The maths stays honest and comparable.',
      'Inside the ECB Chattar stage, reflection-controlled lighting, tabletop styling and macro optics are already in place. For 10 or more products, a half-day bank at ৳14,000 usually costs less per image than per-product billing, and we will price both so you can compare.',
      'For launches, a lifestyle and model day at ৳34,000 adds styled scenes, hand and face models and campaign hero stills on top of catalogue coverage.',
    ],
  },
  {
    title: 'Which Tier to Choose',
    list: [
      'Catalogue Five: you have up to 5 products and need marketplace-ready white-background stills fast, 3 retouched angles each. Extra products stay at ৳1,500.',
      'Half-Day Bank: you have around 10 products and want styling, macro detail and transparent PNG cuts in one 4-hour block.',
      'Lifestyle + Model Day: the images must advertise, not just list — styled scenes, models and campaign stills plus reel options.',
    ],
  },
  {
    title: 'Dhaka Realities We Plan Around',
    list: [
      'Reflections: polarised control and tent lighting tame glare on glass, metal and glossy packaging common in local catalogues.',
      'Power: building generator plus IPS backup keeps strobes and tethering running through load-shedding and protects your files.',
      'Access: the studio is at Matikata ECB Chattar, reachable from Mirpur DOHS, Banani and Airport Road, with parking beside Eurasia Building.',
    ],
  },
  {
    title: 'Timelines, Revisions and After Delivery',
    body: [
      'Raw captures hand over the same day. Retouched catalogue sets deliver in 3 to 4 business days. Review runs through a cloud gallery with the revision rounds listed in your package.',
      'Express 48-hour retouching is available at a 30% priority fee. Masters are archived for 60 days with free re-exports to new ratios. Plan square, vertical and transparent versions at the brief stage, because adding them later means re-retouching.',
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
          How catalogue production works, when banks beat per-product billing, which tier fits, and what happens after delivery.
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
