const trackingCapabilities = [
  {
    title: 'Conversion Event Setup',
    desc: 'Track important actions such as form submissions, purchases, bookings, signups, downloads, or other campaign goals.',
  },
  {
    title: 'GA4 & Analytics',
    desc: 'Configure relevant analytics tracking so you can understand traffic sources, engagement, and conversion activity.',
  },
  {
    title: 'Advertising Platform Tracking',
    desc: 'Where supported, we can configure relevant pixels and conversion events for platforms such as Google Ads, Meta, TikTok, or LinkedIn.',
  },
  {
    title: 'CRM & Lead Routing',
    desc: 'Lead forms can connect with supported CRM, email, or marketing platforms so campaign leads move into the appropriate follow-up workflow.',
  },
  {
    title: 'Funnel Measurement',
    desc: 'Tracking can help identify where visitors enter, engage, drop off, and convert across the landing-page journey.',
  },
  {
    title: 'Reporting & Campaign Insights',
    desc: 'Where included in the project scope, analytics can be structured around the campaign\'s primary KPIs so performance is easier to monitor and improve.',
  },
]

export default function Tracking() {
  return (
    <section className="relative border-t border-white/[0.08] bg-[#09090B] py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
        {/* Section Header */}
        <div className="mb-14 max-w-3xl space-y-4">
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium leading-[0.96] tracking-tight text-white">
            Landing Page Tracking &amp;{' '}
            <span className="italic text-frame-accent">Analytics.</span>
          </h2>

          <p className="text-base sm:text-lg leading-relaxed text-zinc-300">
            A landing page should make campaign performance measurable. We can connect the page to the analytics, advertising, and lead-management tools needed to track the actions that matter.
          </p>
        </div>

        {/* 3-Column Grid of Telemetry Cards */}
        <div className="mt-12 grid grid-cols-1 gap-px overflow-hidden rounded-xl border border-white/[0.08] bg-white/[0.08] sm:grid-cols-2 lg:grid-cols-3">
          {trackingCapabilities.map((track, index) => (
            <div
              key={index}
              className="group relative flex flex-col justify-between bg-[#0f1011] p-7 sm:p-8 transition-colors duration-200 hover:bg-[#141516]"
            >
              <div>
                <span className="font-mono text-[11px] uppercase tracking-widest text-frame-accent">
                  Telemetry 0{index + 1}
                </span>
                <h3 className="mt-3 font-heading text-lg md:text-xl font-medium tracking-tight text-white">
                  {track.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-zinc-300">
                  {track.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Context Callout */}
        <div className="mt-10 rounded-xl border border-white/[0.08] bg-[#121214] p-6 border-l-2 border-l-frame-accent">
          <p className="text-sm sm:text-base leading-relaxed text-zinc-300">
            Tracking availability depends on the advertising platform, analytics system, CRM, APIs, and project scope. We confirm compatibility before implementation.
          </p>
        </div>
      </div>
    </section>
  )
}
