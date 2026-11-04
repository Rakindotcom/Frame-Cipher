const copyStrategies = [
  {
    title: 'Headline & Value Proposition',
    desc: 'The opening section should make the offer, audience, and primary benefit clear without forcing visitors to search for the point.',
  },
  {
    title: 'Benefit-Focused Messaging',
    desc: 'We organize product or service information around the outcomes and benefits that matter most to the campaign audience.',
  },
  {
    title: 'CTA Messaging',
    desc: 'The primary call to action should tell visitors exactly what happens when they click, submit, book, purchase, or register.',
  },
  {
    title: 'Trust & Objection Handling',
    desc: 'Relevant testimonials, reviews, guarantees, case studies, FAQs, credentials, or other trust signals can be placed where they help address hesitation.',
  },
  {
    title: 'Message Match',
    desc: 'The language on the landing page should match the campaign, advertisement, search intent, email, or social content that brought the visitor there.',
  },
]

export default function CopyStrategy() {
  return (
    <section className="relative border-t border-white/[0.08] bg-[#09090B] py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
        {/* Section Header */}
        <div className="mb-14 max-w-3xl space-y-4">
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium leading-[0.96] tracking-tight text-white">
            Landing Page Copy &amp;{' '}
            <span className="italic text-frame-accent">Message Strategy.</span>
          </h2>

          <p className="text-base sm:text-lg leading-relaxed text-zinc-300">
            A landing page can have excellent design and still fail when visitors do not understand the offer quickly. We structure the message around what the audience needs to know before taking action.
          </p>
        </div>

        {/* 3-Column Grid of Principle Cards */}
        <div className="mt-12 grid grid-cols-1 gap-px overflow-hidden rounded-xl border border-white/[0.08] bg-white/[0.08] sm:grid-cols-2 lg:grid-cols-3">
          {copyStrategies.map((copy, index) => (
            <div
              key={index}
              className="group relative flex flex-col justify-between bg-[#0f1011] p-7 sm:p-8 transition-colors duration-200 hover:bg-[#141516]"
            >
              <div>
                <span className="font-mono text-[11px] uppercase tracking-widest text-frame-accent">
                  Principle 0{index + 1}
                </span>
                <h3 className="mt-3 font-heading text-lg md:text-xl font-medium tracking-tight text-white">
                  {copy.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-zinc-300">
                  {copy.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Context Callout */}
        <div className="mt-10 rounded-xl border border-white/[0.08] bg-[#121214] p-6 border-l-2 border-l-frame-accent">
          <p className="text-sm sm:text-base leading-relaxed text-zinc-300">
            Copywriting can be included within the project scope when required. Otherwise, we can work with your existing copy and structure it for the landing-page experience.
          </p>
        </div>
      </div>
    </section>
  )
}
