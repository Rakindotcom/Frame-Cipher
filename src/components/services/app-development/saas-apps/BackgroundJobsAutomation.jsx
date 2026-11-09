'use client'

import React from 'react'
import {
  Cpu,
  Clock,
  Mail,
  Bell,
  FileText,
  HardDrive,
  CreditCard,
  RotateCcw,
} from 'lucide-react'

const backgroundJobItems = [
  {
    icon: Cpu,
    title: "Queues & Asynchronous Processing",
    desc: "Move time-consuming operations into background processing when immediate execution would create unnecessary delays."
  },
  {
    icon: Clock,
    title: "Scheduled Jobs",
    desc: "Run recurring tasks such as report generation, synchronization, reminders, subscription checks, and maintenance processes."
  },
  {
    icon: Mail,
    title: "Email & SMS Automation",
    desc: "Trigger communications based on account activity, billing events, workflow changes, reminders, or system events."
  },
  {
    icon: Bell,
    title: "Notification Processing",
    desc: "Handle background notifications without blocking the main customer workflow."
  },
  {
    icon: FileText,
    title: "Report Generation",
    desc: "Large reports and exports can be processed in the background and delivered when complete."
  },
  {
    icon: HardDrive,
    title: "File Processing",
    desc: "Uploads, document conversion, media processing, and other resource-heavy tasks can run asynchronously when appropriate."
  },
  {
    icon: CreditCard,
    title: "Billing Events",
    desc: "Background processing can handle asynchronous subscription and payment events before updating the product state."
  },
  {
    icon: RotateCcw,
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
            Background Jobs &amp; SaaS Automation.
          </h2>

          <p className="text-base sm:text-lg leading-relaxed text-zinc-300">
            Not every operation should happen while the customer waits for a screen to finish loading.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {backgroundJobItems.map((item, idx) => {
            const Icon = item.icon
            return (
              <div
                key={idx}
                className="group relative flex flex-col justify-between rounded-2xl border border-white/[0.08] bg-[#0D0D0F] p-8 md:p-10 transition-all duration-300 hover:border-white/[0.16] before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-gradient-to-r before:from-transparent before:via-purple-600/40 before:to-transparent"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-purple-500/20 bg-purple-500/10 text-purple-600">
                      <Icon className="h-6 w-6 text-purple-600" />
                    </div>
                    <span className="font-mono text-xs uppercase tracking-wider text-purple-400">
                      {String(idx + 1).padStart(2, '0')}
                    </span>
                  </div>
                  <h3 className="font-heading text-xl font-medium text-white">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-xs sm:text-sm font-normal leading-relaxed text-zinc-300">
                    {item.desc}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
