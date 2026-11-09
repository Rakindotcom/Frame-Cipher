'use client'

import React from 'react'
import {
  Building2,
  Target,
  GraduationCap,
  FileText,
  UserCheck,
  MessageSquare,
  Activity,
  RefreshCw
} from 'lucide-react'

const rolloutChangeManagement = [
  {
    icon: Building2,
    title: "Department-Based Rollout",
    desc: "Introduce the application to selected departments or teams in stages when a phased rollout is appropriate."
  },
  {
    icon: Target,
    title: "Pilot Deployment",
    desc: "Test the system with a controlled group of users before expanding it across the organization."
  },
  {
    icon: GraduationCap,
    title: "User Training",
    desc: "Provide appropriate guidance for employees, managers, administrators, and other user groups based on their responsibilities."
  },
  {
    icon: FileText,
    title: "Documentation",
    desc: "Document important workflows, system behavior, administrative tasks, and operating procedures."
  },
  {
    icon: UserCheck,
    title: "Admin Training",
    desc: "Prepare the internal team responsible for managing users, permissions, configurations, and business workflows."
  },
  {
    icon: MessageSquare,
    title: "Feedback Collection",
    desc: "Collect feedback from representative users during pilot and post-launch periods to identify usability and workflow issues."
  },
  {
    icon: Activity,
    title: "Adoption Monitoring",
    desc: "Review suitable indicators such as workflow completion, feature usage, support requests, and other operational signals to understand how the system is being adopted."
  },
  {
    icon: RefreshCw,
    title: "Post-Rollout Review",
    desc: "After the initial rollout, we review adoption signals, usability feedback, and workflow observations to identify improvements for the next phase."
  }
]

export default function RolloutChange() {
  return (
    <section id="rollout" className="relative border-b border-white/10 bg-[#0A0A0C] px-4 py-20 sm:px-6 md:px-8 md:py-28 scroll-mt-20">
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 max-w-3xl space-y-4">
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium leading-[0.96] tracking-[-0.03em] text-white">
            Change Management, Training &amp; Rollout.
          </h2>

          <p className="text-base sm:text-lg leading-relaxed text-zinc-300">
            Introducing an enterprise application involves more than putting software into production. Employees, managers, administrators, and other stakeholders need a practical path to adopt the new system.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {rolloutChangeManagement.map((item, idx) => {
            const Icon = item.icon
            return (
              <div
                key={idx}
                className="group relative flex flex-col justify-between overflow-hidden rounded-xl border border-white/10 bg-[#0D0D0F] p-6 sm:p-7 transition-all duration-300 hover:border-white/20 hover:bg-[#121214] before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-gradient-to-r before:from-transparent before:via-purple-600/40 before:to-transparent"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-purple-600/20 bg-purple-600/10 text-purple-600">
                      <Icon className="h-5 w-5" />
                    </div>
                    <span className="font-mono text-xs uppercase tracking-wider text-purple-600/80">
                      0{idx + 1}
                    </span>
                  </div>
                  <h3 className="mt-4 font-heading text-lg font-medium tracking-tight text-white">
                    {item.title}
                  </h3>
                  <p className="mt-2.5 text-xs sm:text-sm font-normal leading-relaxed text-zinc-300">
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
