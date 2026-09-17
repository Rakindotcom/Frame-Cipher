import { SectionIntro, SectionLabel } from '../../../Kinetic'

const coreServices = [
  {
    title: 'Campaign Strategy & Offer Structure',
    tag: 'Focus 01',
    description: 'Every landing page starts with a clear goal: one action, one audience, one high-impact message.',
    bullets: [
      'Goal Definition: Driving signups, purchases, bookings, or downloads.',
      'Traffic Source Alignment: Matching messaging to Google, Meta, or email ads.',
      'Offer Clarity: Value proposition understood in seconds, not paragraphs.',
      'Competitor Review: Identifying what similar campaign pages do well or poorly.',
    ],
  },
  {
    title: 'Conversion-Focused Design',
    tag: 'Focus 02',
    description: 'Design stripped of distractions and built around one clear path to action.',
    bullets: [
      'Distraction-Free Layout: No navigation menus or competing links.',
      'Above-the-Fold Clarity: Headline, offer, and CTA visible without scrolling.',
      'Trust Element Placement: Testimonials and proof positioned where hesitation happens.',
      'Mobile-First Design: Built for the device most campaign traffic actually uses.',
    ],
  },
  {
    title: 'Development & Tracking Setup',
    tag: 'Focus 03',
    description: 'The technical build that makes sure every visitor and conversion is measurable.',
    bullets: [
      'Fast, Lightweight Code: Maximum load speed critical for paid traffic.',
      'Form & CTA Integration: Connecting leads directly to your CRM or email platform.',
      'Conversion Tracking Setup: Pixel and GA4 event tracking from day one.',
      'A/B Test-Ready Structure: Built so headline and CTA variants can be tested easily.',
    ],
  },
  {
    title: 'Performance & Speed Optimization',
    tag: 'Focus 04',
    description: 'Speed that keeps paid traffic from bouncing before the page even loads.',
    bullets: [
      'Load Speed Optimization: Fast load times preventing costly ad budget waste.',
      'Mobile Responsiveness: Full functionality across all screen sizes and connection speeds.',
      'Zero Script Bloat: Clean architecture avoiding unnecessary third-party scripts.',
      'Cross-Browser Testing: Consistent performance regardless of visitor browser.',
    ],
  },
]

const campaignTypes = [
  { title: 'Lead Generation Pages', desc: 'Designed to generate qualified inquiries, quote requests, consultation bookings, or sales leads through focused forms.' },
  { title: 'Product & Sales Pages', desc: 'Built around a specific product, offer, or promotion with benefits, social proof, and a clear path to purchase.' },
  { title: 'Paid Advertising Pages', desc: 'Engineered for Google Ads, Meta, TikTok, and LinkedIn traffic where message match and conversion efficiency matter.' },
  { title: 'Webinar & Event Pages', desc: 'Focused on registrations, speaker information, and attendee signups without unnecessary distractions.' },
  { title: 'SaaS & Demo Pages', desc: 'Explains software value clearly and encourages visitors to request demos, start free trials, or book discovery calls.' },
  { title: 'Booking & Consultation', desc: 'Designed for service businesses that want visitors to schedule appointments, consultations, or service audits.' },
]

const trafficSources = [
  { title: 'Google Ads', desc: 'Aligned with search intent, keyword themes, ad copy, and specific offers so visitors immediately feel in the right place.' },
  { title: 'Meta & Instagram Ads', desc: 'Structured around the visual hook, creative angle, and offer introduced in social feeds for smooth continuity.' },
  { title: 'TikTok Campaigns', desc: 'Fast loading, high visual impact, concise messaging, and rapid mobile checkout or signups.' },
  { title: 'LinkedIn & B2B', desc: 'Stronger value propositions, case study proof, qualification fields, and direct routes to sales conversations.' },
]

export default function Offerings() {
  return (
    <div className="bg-frame-bg text-frame-fg">
      {/* CORE CAPABILITIES */}
      <section className="px-4 py-20 md:px-8 md:py-28">
        <div className="mx-auto max-w-[95vw]">
          <SectionIntro
            eyebrow="Scope of work"
            title="Our Landing Page Development Services"
          >
            We offer end-to-end landing page development tailored to your campaign goal, offer structure, and traffic source.
          </SectionIntro>

          <div className="grid bg-frame-border gap-px md:grid-cols-2">
            {coreServices.map((service, index) => (
              <div key={index} className="bg-frame-bg p-7 md:p-8 flex flex-col justify-between">
                <div>
                  <span className="text-xs font-black uppercase tracking-[0.24em] text-frame-accent">{service.tag}</span>
                  <h3 className="mt-3 font-heading text-xl md:text-2xl font-bold uppercase tracking-tight text-frame-fg">
                    {service.title}
                  </h3>
                  <p className="mt-3 text-sm md:text-base font-medium leading-relaxed text-frame-muted-fg">
                    {service.description}
                  </p>
                </div>
                <ul className="mt-6 space-y-2.5 border-t border-frame-border/60 pt-5 text-xs md:text-sm font-medium text-frame-fg/90">
                  {service.bullets.map((bullet, bIdx) => (
                    <li key={bIdx} className="flex items-start gap-2">
                      <span className="text-frame-accent font-bold">✓</span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CAMPAIGN SOLUTIONS */}
      <section className="border-t-2 border-frame-border bg-frame-bg px-4 py-20 md:px-8 md:py-28">
        <div className="mx-auto max-w-[95vw]">
          <SectionIntro
            eyebrow="Campaign Objectives"
            title="Landing Page Solutions for Different Campaign Goals"
          >
            A landing page should be built around the exact action your campaign needs visitors to take.
          </SectionIntro>

          <div className="grid bg-frame-border gap-px sm:grid-cols-2 lg:grid-cols-3">
            {campaignTypes.map((camp, index) => (
              <div key={index} className="bg-frame-bg p-7">
                <SectionLabel className="mb-2">Goal 0{index + 1}</SectionLabel>
                <h3 className="font-heading text-lg md:text-xl font-bold uppercase tracking-tight text-frame-fg">
                  {camp.title}
                </h3>
                <p className="mt-3 text-sm font-medium leading-relaxed text-frame-muted-fg">
                  {camp.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TRAFFIC SOURCES */}
      <section className="border-t-2 border-frame-border bg-frame-bg px-4 py-20 md:px-8 md:py-28">
        <div className="mx-auto max-w-[95vw]">
          <SectionIntro
            eyebrow="Acquisition Channels"
            title="Landing Pages Built for Your Traffic Source"
          >
            Visitors arrive with different expectations depending on channel. We maintain message match from ad click to final CTA.
          </SectionIntro>

          <div className="grid bg-frame-border gap-px sm:grid-cols-2 lg:grid-cols-4">
            {trafficSources.map((source, index) => (
              <div key={index} className="bg-frame-bg p-7">
                <h3 className="font-heading text-lg font-bold uppercase tracking-tight text-frame-fg">
                  {source.title}
                </h3>
                <p className="mt-3 text-sm font-medium leading-relaxed text-frame-muted-fg">
                  {source.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
