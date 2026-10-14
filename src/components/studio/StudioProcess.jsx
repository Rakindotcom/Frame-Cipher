'use client'

import { MessageSquare, FileCheck2, CalendarCheck, Clapperboard, CheckCheck } from 'lucide-react'

const steps = [
  {
    step: '01',
    title: 'Discuss Your Project',
    icon: MessageSquare,
    description:
      'Tell us what you want to produce, who the content is for, and where it will be published. Share reference videos, scripts, or examples if available.',
    action: 'Initial creative brief & format alignment',
  },
  {
    step: '02',
    title: 'Define Production Requirements',
    icon: FileCheck2,
    description:
      'We establish session duration, participant count, production support, equipment needs, lighting requirements, and post-production editing scope.',
    action: 'Deliverable count & setup confirmation',
  },
  {
    step: '03',
    title: 'Confirm The Booking',
    icon: CalendarCheck,
    description:
      'Once schedule, price, and scope are agreed upon, the studio confirms your reserved slot and provides preparation instructions and advance guidelines.',
    action: 'Calendar reservation & advance terms',
  },
  {
    step: '04',
    title: 'Prepare & Record',
    icon: Clapperboard,
    description:
      'The studio team prepares your setup and checks sound and lighting conditions before filming. Clients arrive with products, participants, scripts, or notes.',
    action: 'Live studio shoot with real-time monitoring',
  },
  {
    step: '05',
    title: 'Edit & Deliver',
    icon: CheckCheck,
    description:
      'When post-production is included, our editors craft the cuts according to agreed specifications. We handle feedback rounds and deliver platform-ready master files.',
    action: 'Final exports, captions & cloud delivery',
  },
]

export default function StudioProcess() {
  return (
    <section id="process" className="border-b-2 border-frame-border bg-frame-bg px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-[95vw]">
        {/* Header */}
        <div className="mb-14 max-w-3xl">
          <p className="text-xs font-black uppercase tracking-[0.28em] text-frame-accent">
            Workflow & Delivery
          </p>
          <h2 className="mt-3 font-heading text-[clamp(2rem,4.5vw,4.5rem)] font-bold uppercase leading-[0.95] tracking-tighter text-frame-fg">
            Our 5-Step Studio Workflow.
          </h2>
          <p className="mt-4 text-base font-medium leading-relaxed text-frame-muted-fg">
            FrameCipher Studio follows a project-based workflow connecting initial planning, studio production, and post-production. The objective is to establish clear requirements before our crew touches a camera.
          </p>
        </div>

        {/* 5 Steps Horizontal/Vertical Grid */}
        <div className="grid gap-px border-2 border-frame-border bg-frame-border md:grid-cols-5">
          {steps.map((st) => {
            const Icon = st.icon
            return (
              <div
                key={st.step}
                className="group relative flex flex-col justify-between bg-frame-bg p-6 md:p-7 transition-colors duration-300 hover:bg-frame-muted/30"
              >
                <div>
                  <div className="flex items-center justify-between border-b border-frame-border/60 pb-4">
                    <span className="font-heading text-3xl font-extrabold text-frame-accent">
                      {st.step}
                    </span>
                    <Icon className="h-5 w-5 text-frame-muted-fg transition-colors group-hover:text-frame-accent" />
                  </div>

                  <h3 className="mt-5 font-heading text-lg font-bold uppercase tracking-tight text-frame-fg">
                    {st.title}
                  </h3>

                  <p className="mt-3 text-xs leading-relaxed text-frame-muted-fg">
                    {st.description}
                  </p>
                </div>

                <div className="mt-6 border-t border-frame-border/60 pt-4">
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-frame-accent">
                    {st.action}
                  </span>
                </div>
              </div>
            )
          })}
        </div>

        {/* Process CTA */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-between gap-4 border border-frame-border bg-frame-muted/20 p-6">
          <p className="text-sm font-medium text-frame-muted-fg">
            Ready to plan your session? Share your target dates and a brief description of the content you want to create.
          </p>
          <a
            href="#booking"
            className="inline-flex shrink-0 items-center justify-center border-2 border-frame-accent bg-frame-accent px-6 py-3 text-xs font-black uppercase tracking-wider text-frame-accent-fg transition-all duration-300 hover:bg-frame-accent/90"
          >
            Plan Your Studio Session
          </a>
        </div>
      </div>
    </section>
  )
}
