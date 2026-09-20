const reliabilityItems = [
  "Retry and backoff logic",
  "Idempotency for duplicate requests",
  "Timeout and error handling",
  "Webhook retry and delivery reliability",
  "Failure recovery workflows",
  "Logging and observability",
  "Critical failure alerting",
  "Partial-failure handling",
  "Recovery and troubleshooting procedures"
]

export default function Reliability() {
  return (
    <div className="mt-28 border-2 border-frame-border bg-frame-bg p-6 md:p-12">
      <div className="mb-8">
        <span className="text-xs font-black uppercase tracking-[0.28em] text-frame-accent">
          Resilience Engineering
        </span>
        <h2 className="mt-2 font-heading text-2xl md:text-4xl font-bold uppercase tracking-tight text-frame-fg">
          API Reliability &amp; Failure Handling
        </h2>
        <p className="mt-3 max-w-3xl text-sm md:text-base font-medium leading-relaxed text-frame-muted-fg">
          Connected systems can fail for many reasons. An API may time out, receive duplicate requests, lose a third-party connection, or return an unexpected response. We design failure handling around these scenarios:
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {reliabilityItems.map((item, i) => (
          <div key={i} className="flex items-center gap-3 border-2 border-frame-border bg-frame-muted/10 p-4">
            <span className="flex h-5 w-5 shrink-0 items-center justify-center border border-frame-accent bg-frame-accent/10 text-frame-accent">
              <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </span>
            <span className="text-xs md:text-sm font-semibold text-frame-fg">
              {item}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}