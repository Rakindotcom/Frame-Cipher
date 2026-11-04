const campaignGoals = [
  {
    title: 'Lead Generation Landing Pages',
    desc: 'Designed to generate qualified inquiries, quote requests, consultation bookings, or sales leads through focused forms and clear calls to action.',
  },
  {
    title: 'Product & Sales Landing Pages',
    desc: 'Built around a specific product, offer, or promotion with focused messaging, product benefits, trust signals, and a clear path to purchase.',
  },
  {
    title: 'Paid Advertising Landing Pages',
    desc: 'Designed for campaign traffic from Google Ads, Meta, TikTok, LinkedIn, and other advertising platforms where message match and conversion efficiency matter.',
  },
  {
    title: 'Webinar & Event Landing Pages',
    desc: 'Focused on registrations, event details, speaker information, and a clear registration action without unnecessary navigation or distractions.',
  },
  {
    title: 'SaaS & Demo Landing Pages',
    desc: 'Built to explain software value clearly and encourage visitors to request a demo, start a trial, book a call, or take another defined action.',
  },
  {
    title: 'Booking & Consultation Landing Pages',
    desc: 'Designed for businesses that want visitors to request appointments, consultations, estimates, or service inquiries.',
  },
  {
    title: 'App & Download Landing Pages',
    desc: 'Focused on app installs, downloads, registrations, or other measurable actions connected to the campaign.',
  },
]

export default function Solutions() {
  return (
    <section className="relative border-t border-white/[0.08] bg-[#09090B] py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
        {/* Section Header */}
        <div className="mb-14 max-w-3xl space-y-4">
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium leading-[0.96] tracking-tight text-white">
            Landing Page Solutions for{' '}
            <span className="italic text-frame-accent">Different Campaign Goals.</span>
          </h2>

          <p className="text-base sm:text-lg leading-relaxed text-zinc-300">
            A landing page should be built around the action your campaign needs visitors to take. The page structure, message, proof, and call to action should all support that goal.
          </p>
        </div>

        {/* 3-Column Grid of Goal Cards */}
        <div className="mt-12 grid grid-cols-1 gap-px overflow-hidden rounded-xl border border-white/[0.08] bg-white/[0.08] sm:grid-cols-2 lg:grid-cols-3">
          {campaignGoals.map((goal, index) => (
            <div
              key={index}
              className="group relative flex flex-col justify-between bg-[#0f1011] p-7 sm:p-8 transition-colors duration-200 hover:bg-[#141516]"
            >
              <div>
                <span className="font-mono text-[11px] uppercase tracking-widest text-frame-accent">
                  Goal 0{index + 1}
                </span>
                <h3 className="mt-3 font-heading text-lg md:text-xl font-medium tracking-tight text-white">
                  {goal.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-zinc-300">
                  {goal.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Context Callout */}
        <div className="mt-10 rounded-xl border border-white/[0.08] bg-[#121214] p-6 border-l-2 border-l-frame-accent">
          <p className="text-sm sm:text-base leading-relaxed text-zinc-300">
            The right structure depends on your offer, audience, traffic source, and conversion goal. We recommend the page type around the campaign rather than forcing every project into the same template.
          </p>
        </div>
      </div>
    </section>
  )
}
