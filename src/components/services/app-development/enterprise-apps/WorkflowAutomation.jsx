'use client'

import React from 'react'

const workflowAutomation = [
  {
    title: "Approval Workflows",
    desc: "Build approval paths for purchases, expenses, contracts, documents, requests, and other controlled processes."
  },
  {
    title: "Multi-Level Authorization",
    desc: "Route actions through different approval levels based on amount, department, role, location, or defined rules."
  },
  {
    title: "Departmental Workflows",
    desc: "Connect finance, HR, sales, operations, procurement, service, and management processes where information needs to move between teams."
  },
  {
    title: "Task Automation",
    desc: "Automatically create tasks, update records, assign responsibilities, or trigger actions based on business rules."
  },
  {
    title: "Notifications & Escalation",
    desc: "Notify users when an action is required and escalate overdue or unresolved tasks according to defined workflows."
  },
  {
    title: "Rules-Based Processing",
    desc: "Business rules can determine what happens when a record reaches a particular state, threshold, or condition."
  },
  {
    title: "Scheduled Processes",
    desc: "Automate recurring reports, synchronization tasks, reminders, data processing, and other scheduled operations."
  },
  {
    title: "Cross-System Workflows",
    desc: "Connect actions across multiple systems so employees do not repeatedly move the same information between disconnected tools."
  },
  {
    title: "Audit Trails",
    desc: "Record important workflow actions so organizations can trace approvals, changes, and administrative activity."
  }
]

export default function WorkflowAutomation() {
  return (
    <section id="workflow-automation" className="border-b border-white/[0.08] bg-[#09090B] px-4 py-20 sm:px-6 md:px-8 md:py-28 scroll-mt-20">
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 max-w-3xl space-y-4">
<h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium leading-[0.96] tracking-[-0.03em] text-white">
            Business Process &amp; <span className="italic text-frame-accent">Workflow Automation.</span>
          </h2>

          <p className="text-base sm:text-lg leading-relaxed text-zinc-300">
            The goal is to make business processes easier to execute, track, and control.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-px overflow-hidden rounded-xl border border-white/[0.08] bg-white/[0.08] sm:grid-cols-2 lg:grid-cols-3">
          {workflowAutomation.map((item, idx) => (
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
