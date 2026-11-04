'use client'

import React from 'react'

const rolloutChangeManagement = [
  {
    title: "Department-Based Rollout",
    desc: "Introduce the application to selected departments or teams in stages when a phased rollout is appropriate."
  },
  {
    title: "Pilot Deployment",
    desc: "Test the system with a controlled group of users before expanding it across the organization."
  },
  {
    title: "User Training",
    desc: "Provide appropriate guidance for employees, managers, administrators, and other user groups based on their responsibilities."
  },
  {
    title: "Documentation",
    desc: "Document important workflows, system behavior, administrative tasks, and operating procedures."
  },
  {
    title: "Admin Training",
    desc: "Prepare the internal team responsible for managing users, permissions, configurations, and business workflows."
  },
  {
    title: "Feedback Collection",
    desc: "Collect feedback from representative users during pilot and post-launch periods to identify usability and workflow issues."
  },
  {
    title: "Adoption Monitoring",
    desc: "Review suitable indicators such as workflow completion, feature usage, support requests, and other operational signals to understand how the system is being adopted."
  },
  {
    title: "Post-Rollout Review",
    desc: "After the initial rollout, we review adoption signals, usability feedback, and workflow observations to identify improvements for the next phase."
  }
]

export default function RolloutChange() {
  return (
    <section id="rollout" className="border-b border-white/[0.08] bg-[#09090B] px-4 py-20 sm:px-6 md:px-8 md:py-28 scroll-mt-20">
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 max-w-3xl space-y-4">
<h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium leading-[0.96] tracking-[-0.03em] text-white">
            Change Management, Training &amp; <span className="italic text-frame-accent">Rollout.</span>
          </h2>

          <p className="text-base sm:text-lg leading-relaxed text-zinc-300">
            Introducing an enterprise application involves more than putting software into production. Employees, managers, administrators, and other stakeholders need a practical path to adopt the new system.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-px overflow-hidden rounded-xl border border-white/[0.08] bg-white/[0.08] sm:grid-cols-2 lg:grid-cols-3">
          {rolloutChangeManagement.map((item, idx) => (
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
