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
    <div className="mt-28 border-2 border-frame-border bg-frame-bg p-6 md:p-12">
      <div className="mb-8">
        <span className="text-xs font-black uppercase tracking-[0.28em] text-frame-accent">
          Process Optimization
        </span>
        <h2 className="mt-2 font-heading text-2xl md:text-4xl font-bold uppercase tracking-tight text-frame-fg">
          Enterprise Business Process &amp; Workflow Automation
        </h2>
        <p className="mt-3 max-w-3xl text-sm md:text-base font-medium leading-relaxed text-frame-muted-fg">
          The goal is to make business processes easier to execute, track, and control.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {workflowAutomation.map((item, i) => (
          <div
            key={i}
            className="border-2 border-frame-border bg-frame-muted/10 p-6 transition-colors hover:border-frame-accent"
          >
            <span className="text-xs font-black uppercase tracking-[0.2em] text-frame-accent">
              Automation Module 0{i + 1}
            </span>
            <h3 className="mt-2 font-heading text-lg font-bold uppercase text-frame-fg">
              {item.title}
            </h3>
            <p className="mt-3 text-xs md:text-sm font-medium leading-relaxed text-frame-muted-fg">
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}