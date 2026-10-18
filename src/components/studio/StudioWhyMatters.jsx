'use client'

import { VolumeX, CalendarClock, Smartphone, Layers } from 'lucide-react'
import { SectionIntro } from '../Kinetic'

const reasons = [
  {
    icon: VolumeX,
    title: 'Controlled audio and lighting',
    description: 'Street horns, room echo and uneven shadows pull attention from your message. An acoustically treated room and a calibrated lighting grid fix these before you record.',
  },
  {
    icon: CalendarClock,
    title: 'Planning that prevents reshoots',
    description: 'Shoots run over budget when scripts, talking points, product samples and availability are left to chance. A written brief aligns angles, durations and expectations so studio hours stay efficient.',
  },
  {
    icon: Smartphone,
    title: 'Framing for 16:9 and 9:16',
    description: 'A YouTube master needs a different composition from a vertical Reel or TikTok. Knowing where the video will publish lets the operator frame safe zones for every screen.',
  },
  {
    icon: Layers,
    title: 'Shooting and editing as one workflow',
    description: 'When one team shoots and edits, the director plans reaction cutaways, b-roll, room tone and hooks that make the final edit smoother.',
  },
]

export default function StudioWhyMatters() {
  return (
    <section className="border-b-2 border-frame-border bg-frame-bg px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-[95vw]">
        <div className="mb-16 grid gap-8 lg:grid-cols-2 lg:items-end">
          <div>
            <SectionIntro eyebrow="Why a physical studio" title="Why a physical studio in Dhaka improves your video." index="07" className="mb-0 md:mb-0" />
          </div>
          <p className="text-base font-medium leading-relaxed text-frame-muted-fg md:text-xl">
            Most Dhaka video problems are practical ones: noisy audio, mixed lighting, power cuts mid-take and
            footage that was never planned for its platform. A physical studio removes these with acoustic isolation,
            a softbox lighting grid, IPS and generator backup, and fibre internet.
          </p>
        </div>
        <div className="grid gap-px border-2 border-frame-border bg-frame-border sm:grid-cols-2">
          {reasons.map((item, idx) => {
            const Icon = item.icon
            return (
              <div key={idx} className="group bg-frame-bg p-8 transition-colors duration-300 hover:bg-frame-muted/30">
                <div className="flex h-12 w-12 items-center justify-center border border-frame-border bg-frame-muted/50 text-frame-accent transition-colors duration-300 group-hover:border-frame-accent group-hover:bg-frame-accent group-hover:text-frame-accent-fg">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mt-6 font-heading text-xl font-bold uppercase tracking-tight text-frame-fg md:text-2xl">{item.title}</h3>
                <p className="mt-3 text-sm wide:text-lg font-medium leading-relaxed text-frame-muted-fg md:text-base">{item.description}</p>
              </div>
            )
          })}
        </div>
        <div className="mt-12 border-2 border-frame-border bg-frame-muted/20 p-8 md:p-12">
          <span className="text-[10px] font-black uppercase tracking-[0.22em] text-frame-accent">A studio day versus a location shoot</span>
          <h3 className="mt-2 font-heading text-2xl font-bold uppercase tracking-tight text-frame-fg md:text-3xl">Compare both options in writing</h3>
          <p className="mt-3 max-w-3xl text-sm leading-relaxed text-frame-muted-fg wide:text-lg">
            A studio day often costs less than a location shoot once venue hire, portable lighting, sound treatment,
            travel and weather contingency are added up. We itemise both options so you can compare them.
          </p>
        </div>
      </div>
    </section>
  )
}
