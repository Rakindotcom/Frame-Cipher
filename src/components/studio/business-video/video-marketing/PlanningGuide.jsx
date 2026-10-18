'use client'

import { SectionIntro } from '../../../Kinetic'

const guideBlocks = [
  {
    title: 'What Video Marketing Covers',
    body: [
      'Video marketing means using video at each stage of how customers find, evaluate and choose a business — and producing every asset from one plan. At FrameCipher Studio this runs under one roof at Matikata ECB Chattar: audience research, funnel roadmap, scripting, studio filming, editing, YouTube packaging and a distribution map your media team can run.',
      'That matters because disconnected videos waste shoots. Footage captured without a funnel plan usually yields one master and nothing else. We agree the funnel stages, search queries, hooks and placements in writing before filming, so one session banks awareness, consideration and conversion assets together.',
    ],
  },
  {
    title: 'Studio Production or Retainer',
    body: [
      'A one-time funnel starter suits teams validating video for the first time: three videos, one distribution map, one metrics review. A growth sprint suits teams with spend behind them: eight assets and 30 days of hook testing with kill-and-scale rules.',
      'Inside the ECB Chattar stage, the controlled setup lets us batch-record funnel sets in single sessions — one lighting setup, multiple scripts, multiple ratios. The always-on engine extends this to a monthly rhythm: two shoot days, 12 or more finished assets and a strategist inside your media-buying loop.',
      'Production and media stay separate on purpose: we produce the creative and hand your team a scaling playbook, so you keep control of budgets and targeting.',
    ],
  },
  {
    title: 'Which Tier to Choose',
    list: [
      'Funnel Starter (৳55,000): a minimum viable video funnel — awareness, explainer and conversion ad with a distribution map. Best for first-time validation.',
      'Growth Sprint (৳1,25,000): a 30-day creative testing sprint with 8 assets, weekly hook rotation and a scaling playbook. Best for accounts ready to spend.',
      'Always-On Engine (৳2,40,000 per month): monthly creative supply with studio days, edit lane and embedded strategist. Best when creative volume is the growth constraint.',
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
      'Asset batches deliver in 5 to 10 working days from the shoot. Sprints run on a fixed 30-day calendar agreed in the quote, with weekly hook rotations. Review runs through a timestamped cloud link with structured revision rounds.',
      'Express 48 to 72-hour delivery is available at a 30% priority fee, and raw captures are available within 24 hours. Masters are archived for 60 days with free re-exports to new aspect ratios. Plan hook variants and captioned versions at the brief stage, because adding them later means re-editing.',
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
          How video marketing works, one-time versus retainer, which tier fits, and what happens after delivery.
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
