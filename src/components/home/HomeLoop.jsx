const operatingLoop = ['Audit', 'Position', 'Produce', 'Build', 'Launch', 'Measure', 'Scale']

export default function HomeLoop() {
  return (
    <section className="relative isolate border-b border-white/[0.08] bg-[#09090B] px-4 py-20 text-white md:px-8 md:py-28">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
        <div className="lg:sticky lg:top-28">
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium leading-[0.96] tracking-tight text-white">
            Not a campaign.
            <br />
            <span className="italic text-frame-accent">
              A machine.
            </span>
          </h2>
          <p className="mt-5 max-w-lg text-base font-normal leading-relaxed text-zinc-300 md:text-lg">
            Every client engagement moves through a closed-loop system designed to turn raw attention into qualified pipeline, customer retention, and compounding enterprise value.
          </p>
        </div>

        <div className="relative divide-y divide-white/[0.08] rounded-xl border border-white/[0.08] bg-[#121214] overflow-hidden before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-gradient-to-r before:from-transparent before:via-frame-accent/40 before:to-transparent">
          {operatingLoop.map((step, index) => (
            <div
              key={step}
              className="group grid min-h-20 items-center p-5 transition-colors duration-200 grid-cols-[auto_1fr_auto] gap-4 md:min-h-24 md:p-6 md:grid-cols-[0.24fr_1fr_auto] hover:bg-[#18181B]"
            >
              <span className="font-mono text-3xl sm:text-4xl md:text-5xl font-medium leading-none text-white/20 transition-colors duration-200 group-hover:text-frame-accent tabular-nums">
                {String(index + 1).padStart(2, '0')}
              </span>
              <h3 className="font-heading text-xl sm:text-2xl md:text-3xl font-medium leading-[0.96] text-white transition-colors duration-200 group-hover:text-frame-accent">
                {step}
              </h3>
              <span
                aria-hidden="true"
                className="hidden sm:inline-block font-heading text-xl font-medium text-zinc-600 transition-colors duration-200 group-hover:text-frame-accent group-hover:translate-x-1"
              >
                &rarr;
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
