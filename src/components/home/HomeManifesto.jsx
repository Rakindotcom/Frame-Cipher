const manifesto = [
  {
    number: '01',
    title: 'Stop buying fragments',
    description:
      'A brand does not grow because one vendor made a logo, another edited reels, and a third shipped a landing page. Growth needs one connected operating rhythm.',
  },
  {
    number: '02',
    title: 'Make the system visible',
    description:
      'We map the offer, message, creative, web flow, campaigns, automations, and data so every moving part knows what the others are doing.',
  },
  {
    number: '03',
    title: 'Ship with pressure',
    description:
      'Frame Cipher turns strategy into assets, assets into launches, launches into data, and data into the next sharper move.',
  },
]

export default function HomeManifesto() {
  return (
    <section className="px-4 py-20 md:px-8 md:py-32">
      <div className="mx-auto max-w-[95vw]">
        <div className="mb-12 max-w-[95vw]">
          <p className="mb-3 text-xs font-black uppercase tracking-[0.28em] text-frame-accent md:text-sm">
            Manifesto
          </p>
          <h2 className="font-heading text-[clamp(2.4rem,7vw,6.5rem)] font-bold uppercase leading-[0.85] tracking-tighter text-frame-fg">
            The old agency stack is broken.
          </h2>
          <p className="mt-6 max-w-3xl text-base font-medium leading-relaxed text-frame-muted-fg md:text-xl">
            Disconnected work creates slow teams, mixed messages, weaker campaigns, and websites that cannot carry the weight of the offer.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {manifesto.map((item) => (
            <article
              key={item.number}
              className="flex flex-col justify-between border-2 border-frame-border bg-frame-bg p-7 sm:p-8 lg:sticky lg:top-28 md:p-10"
            >
              <div>
                <p
                  className="font-heading text-[clamp(5rem,10vw,9rem)] font-bold leading-[0.75] tracking-tighter text-frame-muted"
                  aria-hidden="true"
                >
                  {item.number}
                </p>
                <h3 className="mt-6 font-heading text-2xl font-bold uppercase leading-tight tracking-tighter text-frame-fg sm:text-3xl md:text-5xl">
                  {item.title}
                </h3>
              </div>
              <p className="mt-6 text-sm font-medium leading-relaxed text-frame-muted-fg sm:text-base md:text-lg">
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
