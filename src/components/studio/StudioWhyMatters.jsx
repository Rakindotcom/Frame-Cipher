'use client'

import { VolumeX, Camera, CalendarClock, Smartphone, Sparkles, Layers } from 'lucide-react'

const considerations = [
  {
    icon: VolumeX,
    title: 'Inconsistent Audio & Lighting Ruins Credibility',
    description:
      'Dhaka street horns, room reverberation, uneven shadows and muffled audio distract audiences from your message. While basic filtering can be attempted in software, nothing replaces an acoustically treated room and calibrated lighting grids before rolling.',
  },
  {
    icon: CalendarClock,
    title: 'Pre-Production Planning Eliminates Reshoots',
    description:
      'Shoots exceed budgets when scripts, talking points, product samples and participant availability are left to chance. Our upfront briefing aligns camera angles, durations and expectations so studio hours stay efficient and on target.',
  },
  {
    icon: Smartphone,
    title: 'Framing for Final Distribution (16:9 vs 9:16)',
    description:
      'A master video for YouTube requires different composition from vertical reels for Meta or TikTok. By knowing where your content will live before shooting, our camera operators compose safe zones that protect your framing across all screens.',
  },
  {
    icon: Layers,
    title: 'Capture & Post-Production in One Workflow',
    description:
      'When shooting and editing are handled by the same team, our directors shoot with the edit in mind—capturing reaction cutaways, b-roll overlays, room tone, and visual hooks that make final video assembly seamless.',
  },
]

export default function StudioWhyMatters() {
  return (
    <section className="border-b-2 border-frame-border bg-frame-bg px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-[95vw]">
        {/* Eyebrow and Headline */}
        <div className="grid gap-8 lg:grid-cols-2 lg:items-end mb-16">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.28em] text-frame-accent">
              Production Standards
            </p>
            <h2 className="mt-3 font-heading text-[clamp(2rem,4.5vw,4.5rem)] font-bold uppercase leading-[0.95] tracking-tighter text-frame-fg">
              Why In-House Studio Production Matters.
            </h2>
          </div>
          <p className="text-base font-medium leading-relaxed text-frame-muted-fg">
            Professional studio production gives businesses and creators a controlled environment for consistent audio, video and photographic content—reducing recording errors, cutting coordination friction, and accelerating publishing schedules.
          </p>
        </div>

        {/* 4 Pillar Grid */}
        <div className="grid gap-px border-2 border-frame-border bg-frame-border sm:grid-cols-2">
          {considerations.map((item, idx) => {
            const Icon = item.icon
            return (
              <div
                key={idx}
                className="group bg-frame-bg p-8 transition-colors duration-300 hover:bg-frame-muted/30"
              >
                <div className="flex h-12 w-12 items-center justify-center border border-frame-border bg-frame-muted/50 text-frame-accent transition-colors duration-300 group-hover:border-frame-accent group-hover:bg-frame-accent group-hover:text-frame-accent-fg">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mt-6 font-heading text-xl font-bold uppercase tracking-tight text-frame-fg">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-frame-muted-fg">
                  {item.description}
                </p>
              </div>
            )
          })}
        </div>

        {/* Studio Philosophy Banner */}
        <div className="mt-12 border-2 border-frame-border bg-frame-muted/20 p-8 md:p-12">
          <div className="grid gap-6 lg:grid-cols-[1.5fr_1fr] lg:items-center">
            <div>
              <span className="text-[10px] font-black uppercase tracking-[0.22em] text-frame-accent">
                Our Operating Philosophy
              </span>
              <h3 className="mt-2 font-heading text-2xl md:text-3xl font-bold uppercase tracking-tight text-frame-fg">
                Defined Scope Before Production. No Guesswork.
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-frame-muted-fg">
                We recommend agreeing on shoot duration, crew roles, technical specifications, revision rounds and delivery formats before confirming your session. We do not rely on inflated claims or unverified awards—just clear production craftsmanship that fulfills your commercial objective.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row lg:flex-col gap-3 lg:items-end">
              <a
                href="#booking"
                className="inline-flex items-center justify-center border-2 border-frame-accent bg-frame-accent px-6 py-3.5 text-xs font-black uppercase tracking-wider text-frame-accent-fg transition-all duration-300 hover:bg-frame-accent/90"
              >
                Discuss Your Scope
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
