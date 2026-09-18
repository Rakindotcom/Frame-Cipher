import { SectionLabel, PosterButton } from '../../../Kinetic'

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
  { title: 'Google Ads (Search & Display)', desc: 'Aligned with high-intent keywords, clear solution matching, and immediate response forms.' },
  { title: 'Meta & Social Ads (FB, IG, LinkedIn)', desc: 'Visual hooks, storytelling frameworks, social proof, and fast mobile-optimized checkouts.' },
  { title: 'Email & Retargeting Campaigns', desc: 'Personalized messaging tailored to warm prospects with direct calls to action.' },
  { title: 'Influencer & Partner Traffic', desc: 'Custom welcome greetings, exclusive promotion badges, and clear redemption flows.' },
]

const whyChooseUs = [
  {
    title: 'Laser Focus on ROAS',
    desc: 'We design landing pages specifically to lower Cost Per Acquisition (CPA) and maximize ad spend return.'
  },
  {
    title: 'Message Match Precision',
    desc: 'Headlines, imagery, and hooks align 100% with your ad creatives, eliminating bounce rates.'
  },
  {
    title: 'Full Pixel & Event Tracking',
    desc: 'GA4 custom events, Meta Conversions API (CAPI), and Google Tag Manager configured out of the box.'
  },
  {
    title: 'Sub-Second Load Times',
    desc: 'Zero framework bloat ensures instant visual paint, keeping mobile paid clicks on the page.'
  },
  {
    title: 'A/B Testing Readiness',
    desc: 'Modular components allow you to swap headlines, social proof, or CTAs in minutes for split testing.'
  },
  {
    title: 'One In-House Creative Team',
    desc: 'Conversion strategy, UI design, copywriting guidance, and development delivered under one team.'
  }
]

export default function Offerings() {
  return (
    <div className="bg-frame-bg text-frame-fg">
      {/* CORE CAPABILITIES */}
      <section className="px-4 py-20 md:px-8 md:py-32">
        <div className="mx-auto max-w-[95vw]">
          <div className="mb-14 md:mb-20 max-w-4xl">
            <p className="mb-3 text-xs md:text-sm font-black uppercase tracking-[0.28em] text-frame-accent">
              Campaign Execution / Single-Purpose Design
            </p>
            <h2 className="font-heading text-[clamp(2.4rem,6vw,5rem)] font-bold uppercase leading-[0.88] tracking-tighter text-frame-fg">
              Our Landing Page Development Services
            </h2>
            <p className="mt-6 text-base md:text-xl font-medium leading-relaxed text-frame-muted-fg">
              We build custom landing pages that turn ad clicks and marketing traffic into measurable business conversions.
            </p>
          </div>

          <div className="grid bg-frame-border gap-px border-2 border-frame-border md:grid-cols-2">
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

      {/* CAMPAIGN TYPES */}
      <section className="border-t-2 border-frame-border bg-frame-bg px-4 py-20 md:px-8 md:py-32">
        <div className="mx-auto max-w-[95vw]">
          <div className="mb-14 md:mb-20 max-w-4xl">
            <p className="mb-3 text-xs md:text-sm font-black uppercase tracking-[0.28em] text-frame-accent">
              Conversion Models / Campaign Architecture
            </p>
            <h2 className="font-heading text-[clamp(2.4rem,6vw,5rem)] font-bold uppercase leading-[0.88] tracking-tighter text-frame-fg">
              Landing Pages for Every Campaign Type
            </h2>
            <p className="mt-6 text-base md:text-xl font-medium leading-relaxed text-frame-muted-fg">
              Every marketing initiative requires a tailored landing environment. We architect pages around specific buyer psychology.
            </p>
          </div>

          <div className="grid bg-frame-border gap-px border-2 border-frame-border sm:grid-cols-2 lg:grid-cols-3">
            {campaignTypes.map((type, index) => (
              <div key={index} className="bg-frame-bg p-7 md:p-8">
                <SectionLabel className="mb-2">Type 0{index + 1}</SectionLabel>
                <h3 className="font-heading text-lg md:text-xl font-bold uppercase tracking-tight text-frame-fg">
                  {type.title}
                </h3>
                <p className="mt-3 text-sm font-medium leading-relaxed text-frame-muted-fg">
                  {type.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TRAFFIC SOURCE ALIGNMENT */}
      <section className="border-t-2 border-frame-border bg-frame-bg px-4 py-20 md:px-8 md:py-32">
        <div className="mx-auto max-w-[95vw]">
          <div className="mb-14 md:mb-20 max-w-4xl">
            <p className="mb-3 text-xs md:text-sm font-black uppercase tracking-[0.28em] text-frame-accent">
              Traffic Optimization / Message Match
            </p>
            <h2 className="font-heading text-[clamp(2.4rem,6vw,5rem)] font-bold uppercase leading-[0.88] tracking-tighter text-frame-fg">
              Landing Page Optimization by Traffic Source
            </h2>
            <p className="mt-6 text-base md:text-xl font-medium leading-relaxed text-frame-muted-fg">
              Visitors arriving from search ads behave differently from social scrollers. We calibrate page density accordingly.
            </p>
          </div>

          <div className="grid bg-frame-border gap-px border-2 border-frame-border sm:grid-cols-2 lg:grid-cols-4">
            {trafficSources.map((source, index) => (
              <div key={index} className="bg-frame-bg p-7 md:p-8">
                <span className="text-xs font-black uppercase tracking-[0.24em] text-frame-accent">Channel 0{index + 1}</span>
                <h3 className="mt-3 font-heading text-lg md:text-xl font-bold uppercase tracking-tight text-frame-fg">
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

      {/* WHY CHOOSE US */}
      <section className="border-t-2 border-frame-border bg-frame-bg px-4 py-20 md:px-8 md:py-32">
        <div className="mx-auto max-w-[95vw]">
          <div className="mb-14 md:mb-20 max-w-4xl">
            <p className="mb-3 text-xs md:text-sm font-black uppercase tracking-[0.28em] text-frame-accent">
              The Conversion Advantage / Results-Driven
            </p>
            <h2 className="font-heading text-[clamp(2.4rem,6vw,5rem)] font-bold uppercase leading-[0.88] tracking-tighter text-frame-fg">
              Why Choose Frame Cipher for Landing Pages
            </h2>
            <p className="mt-6 text-base md:text-xl font-medium leading-relaxed text-frame-muted-fg">
              We do not build generic digital flyers. We build high-velocity customer acquisition engines.
            </p>
          </div>

          <div className="grid bg-frame-border gap-px border-2 border-frame-border md:grid-cols-2 lg:grid-cols-3">
            {whyChooseUs.map((adv, idx) => (
              <div key={idx} className="bg-frame-bg p-7 md:p-8 flex flex-col justify-between">
                <div>
                  <span className="text-xs font-black uppercase tracking-[0.24em] text-frame-accent">Pillar 0{idx + 1}</span>
                  <h3 className="mt-3 font-heading text-xl font-bold uppercase tracking-tight text-frame-fg">
                    {adv.title}
                  </h3>
                  <p className="mt-3 text-sm md:text-base font-medium leading-relaxed text-frame-muted-fg">
                    {adv.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <PosterButton href="/contact">Launch Your Campaign Page</PosterButton>
          </div>
        </div>
      </section>
    </div>
  )
}
