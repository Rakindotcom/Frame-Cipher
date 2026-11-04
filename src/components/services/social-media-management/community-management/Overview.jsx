import React from 'react'
import PosterButton from '../../../home/PosterButton'

const priorities = [
  {
    number: '01',
    title: 'Responsive communication',
    body: 'Customers should not have to repeatedly ask for an answer.',
  },
  {
    number: '02',
    title: 'Consistent brand voice',
    body: 'Responses should sound like your business across every platform.',
  },
  {
    number: '03',
    title: 'Clear escalation',
    body: 'Complex or sensitive issues should reach the right person quickly.',
  },
  {
    number: '04',
    title: 'Useful community insight',
    body: 'Recurring questions and feedback can inform content, customer experience, and marketing decisions.',
  },
]

export default function Overview() {
  return (
    <section className="relative isolate border-t border-white/[0.08] bg-[#09090B] px-4 py-20 text-white md:px-8 md:py-28">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mb-14 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl space-y-4">
            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium leading-[0.96] tracking-tight text-white">
              Community management built around customer response &amp;{' '}
              <span className="italic text-frame-accent">brand trust.</span>
            </h2>
          </div>
          <p className="max-w-md text-base font-normal leading-relaxed text-zinc-300">
            Community management is more than replying to comments. It is the ongoing work of listening to your audience, answering questions, handling feedback, and protecting your brand voice.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-12 lg:items-start lg:gap-10">
          <div className="space-y-6 lg:col-span-7">
            <p className="text-base font-normal leading-relaxed text-zinc-300 md:text-lg">
              It is the ongoing work of listening to your audience, answering questions, handling feedback,
              identifying issues, protecting your brand voice, and knowing when a conversation needs to move
              to your internal team.
            </p>

            {/* Context Callout Box (Surface 2 -> Surface 3) */}
            <div className="relative overflow-hidden rounded-xl border border-white/[0.08] bg-[#121214] p-7 md:p-8 before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-gradient-to-r before:from-transparent before:via-frame-accent/50 before:to-transparent">
              <h3 className="font-heading text-xl font-medium text-white">
                Contextual Precision, Never Scripted Templates
              </h3>
              <p className="mt-3 text-base font-medium leading-relaxed text-zinc-200">
                The goal is not to reply to everything with the same template.
              </p>
              <p className="mt-2 text-sm font-normal leading-relaxed text-zinc-400">
                The goal is to respond appropriately, consistently, and with enough context to be useful.
              </p>
            </div>

            <p className="text-sm font-normal leading-relaxed text-zinc-400 md:text-base">
              We combine timely response, brand voice, escalation workflows, moderation, and community engagement into one coordinated system.
            </p>

            <div className="pt-2">
              <PosterButton href="/contact">
                Discuss Your Community Management Needs &rarr;
              </PosterButton>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-xl border border-white/[0.08] bg-[#121214] p-7 md:p-8 lg:col-span-5 before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-gradient-to-r before:from-transparent before:via-frame-accent/40 before:to-transparent">
            <h3 className="font-heading text-lg font-medium text-white">
              Our approach is built around four priorities
            </h3>
            <ul className="mt-6 space-y-4">
              {priorities.map((priority) => (
                <li
                  key={priority.title}
                  className="rounded-lg border border-white/[0.04] bg-[#18181B] p-4 transition-colors hover:border-white/[0.08]"
                >
                  <div className="flex items-start gap-3.5">
                    <span className="font-mono text-xs text-frame-accent tabular-nums tracking-wider mt-0.5">
                      {priority.number}
                    </span>
                    <div>
                      <h4 className="font-heading text-base font-medium text-white">
                        {priority.title}
                      </h4>
                      <p className="mt-1 text-sm font-normal leading-relaxed text-zinc-300">
                        {priority.body}
                      </p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
