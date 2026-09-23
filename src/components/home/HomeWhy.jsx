const reasons = [
  {
    title: 'One team',
    description:
      'Strategy, content, technology, and marketing under one roof.',
  },
  {
    title: 'In-house execution',
    description:
      'Creative, development, and marketing capabilities handled by one coordinated team.',
  },
  {
    title: 'Business first',
    description:
      'We start with the business problem instead of jumping directly into a service.',
  },
  {
    title: 'Connected systems',
    description:
      'Websites, content, advertising, SEO, analytics, and technology work together.',
  },
  {
    title: 'Built for growth',
    description:
      'Projects are designed with future expansion and continuous optimization in mind.',
  },
]

export default function HomeWhy() {
  return (
    <section className="border-y-2 border-frame-border bg-frame-muted px-4 py-20 md:px-8 md:py-32">
      <div className="mx-auto max-w-[95vw]">
        <div className="mb-12 max-w-[95vw]">
          <p className="mb-3 text-xs font-black uppercase tracking-[0.28em] text-frame-accent md:text-sm">
            Why / Frame Cipher
          </p>
          <h2 className="font-heading text-[clamp(2.4rem,7vw,6.5rem)] font-bold uppercase leading-[0.85] tracking-tighter text-frame-fg">
            Why businesses work with Frame Cipher.
          </h2>
          <p className="mt-6 max-w-3xl text-base font-medium leading-relaxed text-frame-muted-fg md:text-xl">
            The difference is not the number of services, it is how they are connected and who
            is held accountable for the result.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {reasons.map((reason, index) => (
            <article
              key={reason.title}
              className="group flex min-h-52 flex-col justify-between border-2 border-frame-border bg-frame-bg p-6 transition-all duration-300 hover:border-frame-accent hover:bg-frame-accent sm:p-8"
            >
              <div>
                <p
                  className="font-heading text-5xl font-bold leading-none tracking-tighter text-frame-muted transition-colors duration-300 group-hover:text-frame-accent-fg sm:text-6xl"
                  aria-hidden="true"
                >
                  {String(index + 1).padStart(2, '0')}
                </p>
                <h3 className="mt-5 font-heading text-2xl font-bold uppercase leading-tight tracking-tighter text-frame-fg transition-colors duration-300 group-hover:text-frame-accent-fg sm:text-3xl">
                  {reason.title}
                </h3>
              </div>
              <p className="mt-5 text-sm font-medium leading-relaxed text-frame-muted-fg transition-colors duration-300 group-hover:text-frame-accent-fg/85 sm:text-base">
                {reason.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}