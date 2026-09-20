import { SectionIntro, SectionLabel } from '../../../Kinetic'

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
    <section className="border-t-2 border-frame-border bg-frame-muted/20 px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro eyebrow="Campaign Objectives / Target Alignment" title="Landing Page Solutions for Different Campaign Goals">
          A landing page should be built around the action your campaign needs visitors to take. The page structure, message, proof, and call to action should all support that goal.
        </SectionIntro>

        <div className="grid bg-frame-border gap-px border-2 border-frame-border sm:grid-cols-2 lg:grid-cols-3">
          {campaignGoals.map((goal, index) => (
            <div key={index} className="bg-frame-bg p-7 md:p-8 flex flex-col justify-between">
              <div>
                <SectionLabel className="mb-2">Goal 0{index + 1}</SectionLabel>
                <h3 className="font-heading text-lg md:text-xl font-bold uppercase tracking-tight text-frame-fg">
                  {goal.title}
                </h3>
                <p className="mt-3 text-xs md:text-sm font-medium leading-relaxed text-frame-muted-fg">
                  {goal.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        <p className="mt-8 text-xs md:text-sm font-medium text-frame-muted-fg border-l-2 border-frame-accent pl-4">
          The right structure depends on your offer, audience, traffic source, and conversion goal. We recommend the page type around the campaign rather than forcing every project into the same template.
        </p>
      </div>
    </section>
  )
}