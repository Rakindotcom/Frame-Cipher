import { SectionIntro } from '../../../Kinetic'

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
    <section className="border-t-2 border-frame-border bg-frame-muted/20 px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro eyebrow="Attribution & Telemetry / Zero Guesswork" title="Landing Page Tracking & Analytics">
          A landing page should make campaign performance measurable. We can connect the page to the analytics, advertising, and lead-management tools needed to track the actions that matter.
        </SectionIntro>

        <div className="grid bg-frame-border gap-px border-2 border-frame-border sm:grid-cols-2 lg:grid-cols-3">
          {trackingCapabilities.map((track, index) => (
            <div key={index} className="bg-frame-bg p-7 md:p-8 flex flex-col justify-between">
              <div>
                <span className="text-xs font-black uppercase tracking-[0.24em] text-frame-accent">Telemetry 0{index + 1}</span>
                <h3 className="mt-3 font-heading text-lg md:text-xl font-bold uppercase tracking-tight text-frame-fg">
                  {track.title}
                </h3>
                <p className="mt-3 text-xs md:text-sm font-medium leading-relaxed text-frame-muted-fg">
                  {track.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        <p className="mt-8 text-xs md:text-sm font-medium text-frame-muted-fg border-l-2 border-frame-accent pl-4">
          Tracking availability depends on the advertising platform, analytics system, CRM, APIs, and project scope. We confirm compatibility before implementation.
        </p>
      </div>
    </section>
  )
}