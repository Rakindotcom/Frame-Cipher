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
    <section className="relative isolate border-b border-white/[0.08] bg-[#09090B] px-4 py-20 text-white md:px-8 md:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Left Column: Header & The Result Anchor */}
          <div className="lg:col-span-5">
            <div className="lg:sticky lg:top-28">
              <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium leading-[0.96] tracking-tight text-white">
                Why businesses work with{' '}
                <span className="italic text-frame-accent">
                  Frame Cipher.
                </span>
              </h2>
              <p className="mt-6 text-base font-normal leading-relaxed text-zinc-300 md:text-lg">
                The difference is not the number of services, it is how they are connected and who
                is held accountable for the result.
              </p>

              {/* The Result Highlight Box */}
              <div className="relative overflow-hidden mt-10 rounded-xl border border-white/[0.08] bg-[#121214] p-7 before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-gradient-to-r before:from-transparent before:via-frame-accent/50 before:to-transparent">
                <h3 className="font-heading text-2xl font-medium text-white">
                  Zero Vendor Friction
                </h3>
                <p className="mt-3 text-sm font-normal leading-relaxed text-zinc-300">
                  One disciplined partner holding total accountability for your brand, media, web, campaigns, and compounding growth.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Divided List of Reasons */}
          <div className="border-t border-white/[0.08] lg:col-span-7">
            {reasons.map((reason, index) => (
              <article
                key={reason.title}
                className="group border-b border-white/[0.08] py-8 transition-colors duration-200 hover:bg-white/[0.02] sm:py-10"
              >
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs text-frame-accent tabular-nums tracking-wider">
                    0{index + 1}
                  </span>
                </div>
                <h3 className="mt-4 font-heading text-2xl font-medium text-white transition-colors duration-200 group-hover:text-frame-accent sm:text-3xl">
                  {reason.title}
                </h3>
                <p className="mt-4 max-w-2xl text-sm md:text-base font-normal leading-relaxed text-zinc-400 transition-colors duration-200 group-hover:text-zinc-200">
                  {reason.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
