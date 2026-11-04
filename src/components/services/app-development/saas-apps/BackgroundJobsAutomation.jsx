'use client'

import React from 'react'

const backgroundJobItems = [
  {
    title: "Queues & Asynchronous Processing",
    desc: "Move time-consuming operations into background processing when immediate execution would create unnecessary delays."
  },
  {
    title: "Scheduled Jobs",
    desc: "Run recurring tasks such as report generation, synchronization, reminders, subscription checks, and maintenance processes."
  },
  {
    title: "Email & SMS Automation",
    desc: "Trigger communications based on account activity, billing events, workflow changes, reminders, or system events."
  },
  {
    title: "Notification Processing",
    desc: "Handle background notifications without blocking the main customer workflow."
  },
  {
    title: "Report Generation",
    desc: "Large reports and exports can be processed in the background and delivered when complete."
  },
  {
    title: "File Processing",
    desc: "Uploads, document conversion, media processing, and other resource-heavy tasks can run asynchronously when appropriate."
  },
  {
    title: "Billing Events",
    desc: "Background processing can handle asynchronous subscription and payment events before updating the product state."
  },
  {
    title: "Retry & Failure Handling",
    desc: "Automated jobs should have suitable retry and failure-handling logic so important tasks do not silently disappear."
  }
]

export default function BackgroundJobsAutomation() {
  return (
    <section id="background-jobs" className="border-b border-white/[0.08] bg-[#09090B] px-4 py-20 sm:px-6 md:px-8 md:py-28 scroll-mt-20">
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 max-w-3xl space-y-4">
<h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium leading-[0.96] tracking-[-0.03em] text-white">
            Background Jobs &amp;{' '}
            <span className="italic text-frame-accent">SaaS Automation.</span>
          </h2>

          <p className="text-base sm:text-lg leading-relaxed text-zinc-300">
            Not every operation should happen while the customer waits for a screen to finish loading.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-px overflow-hidden rounded-xl border border-white/[0.08] bg-white/[0.08] sm:grid-cols-2 lg:grid-cols-3">
          {backgroundJobItems.map((item, idx) => (
            <div
              key={idx}
              className="flex flex-col justify-between bg-[#0f1011] p-6 sm:p-7 transition-colors hover:bg-[#141516]"
            >
              <div>
                <span className="font-mono text-xs uppercase tracking-wider text-frame-accent">
                  0{idx + 1}
                </span>
                <h3 className="mt-3 font-heading text-lg font-medium tracking-tight text-white">
                  {item.title || item.category || item.name}
                </h3>
                <p className="mt-2.5 text-xs sm:text-sm font-normal leading-relaxed text-zinc-400">
                  {item.desc || item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
