'use client'

import { MessageSquare, Sliders, Clapperboard, RefreshCw, CheckCheck } from 'lucide-react'

const defaultSteps = [
  {
    num: '01',
    title: 'Consultation & Creative Brief',
    desc: 'We clarify the video format, target audience, core talking points, visual references, and distribution channels.',
    icon: MessageSquare,
  },
  {
    num: '02',
    title: 'Pre-Production & Technical Scope',
    desc: 'We finalize the shot list, participant scheduling, lighting setup, audio requirements, and deliverable specs.',
    icon: Sliders,
  },
  {
    num: '03',
    title: 'Studio Production & Capture',
    desc: 'The shoot takes place at our ECB Chattar studio with calibrated lighting, real-time audio monitoring, and 4K cameras.',
    icon: Clapperboard,
  },
  {
    num: '04',
    title: 'Post-Production & Client Review',
    desc: 'Our editors assemble the cuts, color grade in DaVinci, clean dialogue, and integrate your structured revision notes.',
    icon: RefreshCw,
  },
  {
    num: '05',
    title: 'Final Platform Delivery',
    desc: 'We deliver your finished high-bitrate master exports, vertical social cuts, and subtitle files via high-speed cloud drive.',
    icon: CheckCheck,
  },
]

export default function StudioSubProcess({ service }) {
  const steps = service.customSteps || defaultSteps

  return (
    <section className="border-b-2 border-frame-border bg-frame-muted/10 px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-[95vw]">
        {/* Header */}
        <div className="mb-14 max-w-3xl">
          <p className="text-xs font-black uppercase tracking-[0.28em] text-frame-accent">
            Workflow & Execution
          </p>
          <h2 className="mt-3 font-heading text-[clamp(2rem,4.5vw,4.5rem)] font-bold uppercase leading-[0.95] tracking-tighter text-frame-fg">
            How Your Shoot Moves From Brief To Delivery.
          </h2>
          <p className="mt-4 text-base font-medium leading-relaxed text-frame-muted-fg">
            Every step is designed to keep your project organized, avoid last-minute surprises, and produce content ready for immediate commercial publication.
          </p>
        </div>

        {/* 5-Step Cards */}
        <div className="grid gap-px border-2 border-frame-border bg-frame-border md:grid-cols-5">
          {steps.map((st) => {
            const Icon = st.icon || CheckCheck
            return (
              <div key={st.num} className="bg-frame-bg p-6 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between border-b border-frame-border/60 pb-3 mb-4">
                    <span className="font-heading text-2xl font-black text-frame-accent">
                      {st.num}
                    </span>
                    <Icon className="h-4 w-4 text-frame-muted-fg" />
                  </div>
                  <h3 className="font-heading text-base font-bold uppercase text-frame-fg">
                    {st.title}
                  </h3>
                  <p className="mt-2 text-xs text-frame-muted-fg leading-relaxed">
                    {st.desc}
                  </p>
                </div>
                <div className="mt-6 pt-3 border-t border-frame-border/50 text-[10px] font-mono text-frame-accent uppercase font-bold">
                  Stage Verified
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
