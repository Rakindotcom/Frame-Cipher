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
    <div className="mt-28 border-2 border-frame-border bg-frame-bg p-6 md:p-12">
      <div className="mb-8">
        <span className="text-xs font-black uppercase tracking-[0.28em] text-frame-accent">
          Asynchronous Processing
        </span>
        <h2 className="mt-2 font-heading text-2xl md:text-4xl font-bold uppercase tracking-tight text-frame-fg">
          Background Jobs &amp; SaaS Automation
        </h2>
        <p className="mt-3 max-w-3xl text-sm md:text-base font-medium leading-relaxed text-frame-muted-fg">
          Not every operation should happen while the customer waits for a screen to finish loading.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {backgroundJobItems.map((item, i) => (
          <div
            key={i}
            className="border-2 border-frame-border bg-frame-muted/10 p-6 transition-colors hover:border-frame-accent"
          >
            <span className="text-xs font-black uppercase tracking-[0.2em] text-frame-accent">
              Worker Task 0{i + 1}
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