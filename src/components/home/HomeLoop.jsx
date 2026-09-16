const operatingLoop = ['Audit', 'Position', 'Produce', 'Build', 'Launch', 'Measure', 'Scale']

export default function HomeLoop() {
  return (
    <section className="border-y-2 border-frame-border bg-frame-muted px-4 py-20 md:px-8 md:py-32">
      <div className="mx-auto grid max-w-[95vw] gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
        <div className="lg:sticky lg:top-28">
          <p className="mb-3 text-xs font-black uppercase tracking-[0.28em] text-frame-accent md:text-sm">
            Growth loop
          </p>
          <h2 className="font-heading text-[clamp(2.4rem,6.5vw,5.5rem)] font-bold uppercase leading-[0.85] tracking-tighter text-frame-fg">
            Not a campaign.
            <br />
            A machine.
          </h2>
          <p className="mt-5 max-w-lg text-sm font-medium leading-relaxed text-frame-muted-fg md:text-lg">
            Every client engagement moves through a closed-loop system designed to turn raw attention into qualified pipeline, customer retention, and compounding enterprise value.
          </p>
        </div>

        <div className="grid bg-frame-border gap-px">
          {operatingLoop.map((step, index) => (
            <div
              key={step}
              className="group grid min-h-24 items-center bg-frame-bg p-5 transition-colors duration-300 hover:bg-frame-accent grid-cols-[auto_1fr] gap-4 md:min-h-28 md:p-6 md:grid-cols-[0.26fr_1fr]"
            >
              <span className="font-heading text-4xl font-bold leading-none tracking-tighter text-frame-muted transition-colors duration-300 group-hover:text-frame-accent-fg sm:text-6xl md:text-7xl">
                {String(index + 1).padStart(2, '0')}
              </span>
              <h3 className="font-heading text-2xl font-bold uppercase leading-none tracking-tighter text-frame-fg transition-transform duration-300 group-hover:translate-x-3 group-hover:text-frame-accent-fg sm:text-4xl md:text-6xl">
                {step}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
