import Link from 'next/link'
import { SectionLabel, PosterButton } from '../../../Kinetic'

const coreServices = [
  {
    title: 'CAMPAIGN STRATEGY & OFFER STRUCTURE',
    tag: 'Track 01',
    description: 'Every landing page starts with a clear goal, one action, one audience, one message.',
    bullets: [
      'Goal Definition: Identifying the single action the page needs to drive (signup, purchase, booking, download).',
      'Traffic Source Alignment: Matching page messaging to where visitors are coming from ads, email, or social.',
      'Offer Clarity: Structuring the value proposition so it\'s understood in seconds, not paragraphs.',
      'Competitor Review: Identifying what similar campaign pages are doing well or poorly.',
    ],
    takeaway: 'A landing page without a clear single goal usually fails before design even starts.',
    link: '/contact',
  },
  {
    title: 'CONVERSION-FOCUSED DESIGN',
    tag: 'Track 02',
    description: 'Design stripped of distractions and built around one path to action.',
    bullets: [
      'Distraction-Free Layout: No navigation menu, no competing links pulling visitors away.',
      'Above-the-Fold Clarity: Headline, offer, and call-to-action visible without scrolling.',
      'Trust Element Placement: Testimonials, guarantees, or social proof positioned where hesitation happens.',
      'Mobile-First Design: Built for the device most campaign traffic actually arrives on.',
    ],
    takeaway: 'Every design decision on a landing page is judged by one standard: does it move the visitor toward the action.',
    link: '/services/website-design-development/ui-ux-design',
  },
  {
    title: 'DEVELOPMENT & TRACKING SETUP',
    tag: 'Track 03',
    description: 'The technical build that makes sure every visitor and conversion is measurable.',
    bullets: [
      'Fast, Lightweight Development: Clean code built for speed critical for paid traffic pages.',
      'Form & CTA Integration: Connecting lead capture directly to your CRM or email platform.',
      'Conversion Tracking Setup: Pixel and analytics integration so every campaign result is measurable.',
      'A/B Test-Ready Structure: Built so headline, offer, or layout variants can be tested without a rebuild.',
    ],
    takeaway: 'A landing page you can\'t measure is a page you\'re running on guesswork.',
    link: '/contact',
  },
  {
    title: 'PERFORMANCE & SPEED OPTIMIZATION',
    tag: 'Track 04',
    description: 'Speed that keeps paid traffic from bouncing before the page even loads.',
    bullets: [
      'Load Speed Optimization: Fast load times, since paid traffic is the least patient traffic you\'ll get.',
      'Mobile Responsiveness: Full functionality across every screen size and connection speed.',
      'Minimal Third-Party Bloat: Avoiding unnecessary scripts that slow the page down.',
      'Cross-Browser Testing: Consistent performance regardless of how the visitor arrives.',
    ],
    takeaway: 'Every second of load time on a campaign page is spent at risk of being wasted.',
    link: '/contact',
  },
]

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

const trafficSources = [
  {
    title: 'Google Ads Landing Pages',
    desc: 'We align the landing page with the search intent, keyword theme, ad message, offer, and conversion goal so visitors immediately understand they are in the right place.',
  },
  {
    title: 'Meta & Instagram Ad Landing Pages',
    desc: 'The page can be structured around the audience, creative, offer, and message introduced in the ad, creating a smoother transition from social click to conversion.',
  },
  {
    title: 'TikTok Campaign Landing Pages',
    desc: 'For mobile-first audiences, we focus on fast loading, strong visual communication, concise messaging, and a clear action that matches the campaign.',
  },
  {
    title: 'LinkedIn & B2B Landing Pages',
    desc: 'B2B campaigns often need stronger value propositions, proof, trust signals, qualification questions, and a clear path to a demo, consultation, or sales conversation.',
  },
  {
    title: 'Email & Social Campaign Landing Pages',
    desc: 'Dedicated pages can be created for product launches, promotions, registrations, downloads, events, and other campaign-specific actions.',
  },
]

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

const conversionOptimizations = [
  {
    title: 'Message-to-Market Match',
    desc: 'The headline, offer, imagery, benefits, and CTA should reflect what visitors expected when they clicked the campaign.',
  },
  {
    title: 'Conversion-Focused Page Structure',
    desc: 'We structure the page around the information visitors need before acting, including the value proposition, benefits, proof, objections, and final CTA.',
  },
  {
    title: 'CTA & Form Optimization',
    desc: 'We consider CTA wording, placement, form length, required fields, and the amount of information requested based on the conversion goal.',
  },
  {
    title: 'Trust & Social Proof',
    desc: 'Relevant testimonials, ratings, client logos, results, guarantees, or other proof can be used to reduce hesitation where genuine evidence is available.',
  },
  {
    title: 'A/B Testing Readiness',
    desc: 'Where included in the project, we can structure the page so headlines, offers, CTAs, sections, or design variations can be tested without rebuilding the entire page.',
  },
]

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

const whyDedicatedPage = [
  {
    title: 'Paid Traffic Needs a Focused Destination',
    desc: 'Sending ad traffic to a general homepage gives visitors too many paths to explore. A dedicated landing page keeps the message and action aligned with the campaign.',
  },
  {
    title: 'Message Match Builds Continuity',
    desc: 'When the landing page reflects the promise, language, and offer from the ad or campaign, visitors can understand the connection faster.',
  },
  {
    title: 'One Primary CTA Reduces Distraction',
    desc: 'A focused CTA gives visitors a clear next step instead of asking them to decide where to go across a full website.',
  },
  {
    title: 'Faster Launch Supports Faster Testing',
    desc: 'Landing pages can be launched faster than full website projects, allowing campaigns to move from idea to live testing without waiting for a broader website rebuild.',
  },
  {
    title: 'Better Tracking Supports Better Decisions',
    desc: 'When the page, traffic source, and conversion events are properly tracked, campaign data can help identify what needs improvement.',
  },
]

const whyChooseUs = [
  {
    title: 'One In-House Team',
    desc: 'Strategy, messaging, design, development, tracking, and technical implementation stay under one team, creating a clearer path from campaign idea to live page.',
  },
  {
    title: 'Built Around Your Campaign',
    desc: 'We start with your offer, audience, traffic source, and conversion goal rather than choosing a generic landing-page template first.',
  },
  {
    title: 'Conversion-Focused Development',
    desc: 'The page structure, CTA, forms, trust elements, mobile experience, and tracking are considered as part of one conversion system.',
  },
  {
    title: 'Platform & Integration Flexibility',
    desc: 'We can work with the platform, CRM, analytics tools, and campaign technology required by the project, subject to technical compatibility.',
  },
  {
    title: 'Transparent Review Process',
    desc: 'You review key stages of strategy, messaging, design, and development before we move forward.',
  },
  {
    title: 'Built for Testing & Improvement',
    desc: 'Where the project requires it, the page can be structured for tracking, variants, experimentation, and future campaign optimization rather than treated as a one-time static asset.',
  },
]

export default function Offerings() {
  return (
    <div className="bg-frame-bg text-frame-fg">
      {/* 1. OUR LANDING PAGE DEVELOPMENT SERVICES */}
      <section className="px-4 py-20 md:px-8 md:py-32">
        <div className="mx-auto max-w-[95vw]">
          <div className="mb-14 md:mb-20 max-w-4xl">
            <p className="mb-3 text-xs md:text-sm font-black uppercase tracking-[0.28em] text-frame-accent">
              Core Capabilities / High-Velocity Build
            </p>
            <h2 className="font-heading text-[clamp(2.4rem,6vw,5rem)] font-bold uppercase leading-[0.88] tracking-tighter text-frame-fg">
              Our Landing Page Development Services
            </h2>
            <p className="mt-6 text-base md:text-xl font-medium leading-relaxed text-frame-muted-fg">
              We offer end-to-end landing page development tailored to your campaign goal and traffic source.
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

                  <div className="mt-6 border-t border-frame-border/60 pt-5">
                    <span className="text-xs font-black uppercase tracking-widest text-frame-accent">What We Do</span>
                    <ul className="mt-3 space-y-2.5 text-xs md:text-sm font-medium text-frame-fg/90">
                      {service.bullets.map((bullet, bIdx) => (
                        <li key={bIdx} className="flex items-start gap-2">
                          <span className="text-frame-accent font-bold">✓</span>
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-8 border-t border-frame-border/60 pt-5">
                  <p className="text-xs font-medium italic leading-relaxed text-frame-muted-fg mb-4">
                    {service.takeaway}
                  </p>
                  <Link
                    href={service.link}
                    className="inline-flex items-center text-xs font-black uppercase tracking-wider text-frame-accent hover:underline"
                  >
                    Learn More &rarr;
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 2. LANDING PAGE SOLUTIONS FOR DIFFERENT CAMPAIGN GOALS */}
      <section className="border-t-2 border-frame-border bg-frame-muted/20 px-4 py-20 md:px-8 md:py-32">
        <div className="mx-auto max-w-[95vw]">
          <div className="mb-14 md:mb-20 max-w-4xl">
            <p className="mb-3 text-xs md:text-sm font-black uppercase tracking-[0.28em] text-frame-accent">
              Campaign Objectives / Target Alignment
            </p>
            <h2 className="font-heading text-[clamp(2.4rem,6vw,5rem)] font-bold uppercase leading-[0.88] tracking-tighter text-frame-fg">
              Landing Page Solutions for Different Campaign Goals
            </h2>
            <p className="mt-6 text-base md:text-xl font-medium leading-relaxed text-frame-muted-fg">
              A landing page should be built around the action your campaign needs visitors to take. The page structure, message, proof, and call to action should all support that goal.
            </p>
          </div>

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

      {/* 3. LANDING PAGES BUILT FOR YOUR TRAFFIC SOURCE */}
      <section className="border-t-2 border-frame-border bg-frame-bg px-4 py-20 md:px-8 md:py-32">
        <div className="mx-auto max-w-[95vw]">
          <div className="mb-14 md:mb-20 max-w-4xl">
            <p className="mb-3 text-xs md:text-sm font-black uppercase tracking-[0.28em] text-frame-accent">
              Traffic Source Continuity / Message Matching
            </p>
            <h2 className="font-heading text-[clamp(2.4rem,6vw,5rem)] font-bold uppercase leading-[0.88] tracking-tighter text-frame-fg">
              Landing Pages Built for Your Traffic Source
            </h2>
            <p className="mt-6 text-base md:text-xl font-medium leading-relaxed text-frame-muted-fg">
              Visitors arrive with different expectations depending on where they came from. A landing page should carry the same message and intent from the traffic source through to the final action.
            </p>
          </div>

          <div className="grid bg-frame-border gap-px border-2 border-frame-border sm:grid-cols-2 lg:grid-cols-3">
            {trafficSources.map((source, index) => (
              <div key={index} className="bg-frame-bg p-7 md:p-8 flex flex-col justify-between">
                <div>
                  <span className="text-xs font-black uppercase tracking-[0.24em] text-frame-accent">Channel 0{index + 1}</span>
                  <h3 className="mt-3 font-heading text-lg md:text-xl font-bold uppercase tracking-tight text-frame-fg">
                    {source.title}
                  </h3>
                  <p className="mt-3 text-xs md:text-sm font-medium leading-relaxed text-frame-muted-fg">
                    {source.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <p className="mt-8 text-xs md:text-sm font-medium text-frame-muted-fg border-l-2 border-frame-accent pl-4">
            The traffic source helps shape the headline, offer, proof, CTA, and page structure. We build the landing experience around the audience you actually paid or worked to reach.
          </p>
        </div>
      </section>

      {/* 4. LANDING PAGE COPY & MESSAGE STRATEGY */}
      <section className="border-t-2 border-frame-border bg-frame-muted/20 px-4 py-20 md:px-8 md:py-32">
        <div className="mx-auto max-w-[95vw]">
          <div className="mb-14 md:mb-20 max-w-4xl">
            <p className="mb-3 text-xs md:text-sm font-black uppercase tracking-[0.28em] text-frame-accent">
              Persuasion Architecture / Value Articulation
            </p>
            <h2 className="font-heading text-[clamp(2.4rem,6vw,5rem)] font-bold uppercase leading-[0.88] tracking-tighter text-frame-fg">
              Landing Page Copy & Message Strategy
            </h2>
            <p className="mt-6 text-base md:text-xl font-medium leading-relaxed text-frame-muted-fg">
              A landing page can have excellent design and still fail when visitors do not understand the offer quickly. We structure the message around what the audience needs to know before taking action.
            </p>
          </div>

          <div className="grid bg-frame-border gap-px border-2 border-frame-border sm:grid-cols-2 lg:grid-cols-3">
            {copyStrategies.map((copy, index) => (
              <div key={index} className="bg-frame-bg p-7 md:p-8 flex flex-col justify-between">
                <div>
                  <span className="text-xs font-black uppercase tracking-[0.24em] text-frame-accent">Principle 0{index + 1}</span>
                  <h3 className="mt-3 font-heading text-lg md:text-xl font-bold uppercase tracking-tight text-frame-fg">
                    {copy.title}
                  </h3>
                  <p className="mt-3 text-xs md:text-sm font-medium leading-relaxed text-frame-muted-fg">
                    {copy.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <p className="mt-8 text-xs md:text-sm font-medium text-frame-muted-fg border-l-2 border-frame-accent pl-4">
            Copywriting can be included within the project scope when required. Otherwise, we can work with your existing copy and structure it for the landing-page experience.
          </p>
        </div>
      </section>

      {/* 5. CONVERSION OPTIMIZATION FOR LANDING PAGES */}
      <section className="border-t-2 border-frame-border bg-frame-bg px-4 py-20 md:px-8 md:py-32">
        <div className="mx-auto max-w-[95vw]">
          <div className="mb-14 md:mb-20 max-w-4xl">
            <p className="mb-3 text-xs md:text-sm font-black uppercase tracking-[0.28em] text-frame-accent">
              CRO Framework / Frictional Elimination
            </p>
            <h2 className="font-heading text-[clamp(2.4rem,6vw,5rem)] font-bold uppercase leading-[0.88] tracking-tighter text-frame-fg">
              Conversion Optimization for Landing Pages
            </h2>
            <p className="mt-6 text-base md:text-xl font-medium leading-relaxed text-frame-muted-fg">
              A landing page should make the desired action easier, clearer, and more convincing. We consider the full conversion path rather than treating design as the finished product.
            </p>
          </div>

          <div className="grid bg-frame-border gap-px border-2 border-frame-border sm:grid-cols-2 lg:grid-cols-3">
            {conversionOptimizations.map((opt, index) => (
              <div key={index} className="bg-frame-bg p-7 md:p-8 flex flex-col justify-between">
                <div>
                  <span className="text-xs font-black uppercase tracking-[0.24em] text-frame-accent">CRO Element 0{index + 1}</span>
                  <h3 className="mt-3 font-heading text-lg md:text-xl font-bold uppercase tracking-tight text-frame-fg">
                    {opt.title}
                  </h3>
                  <p className="mt-3 text-xs md:text-sm font-medium leading-relaxed text-frame-muted-fg">
                    {opt.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 border-2 border-frame-border bg-frame-muted/20 p-6">
            <p className="text-xs md:text-sm font-medium leading-relaxed text-frame-muted-fg">
              <strong className="text-frame-fg uppercase tracking-wider">Please Note:</strong> A landing page is rarely improved by one design decision alone. Performance comes from the relationship between the offer, message, traffic, user experience, and conversion path.
            </p>
          </div>
        </div>
      </section>

      {/* 6. LANDING PAGE TRACKING & ANALYTICS */}
      <section className="border-t-2 border-frame-border bg-frame-muted/20 px-4 py-20 md:px-8 md:py-32">
        <div className="mx-auto max-w-[95vw]">
          <div className="mb-14 md:mb-20 max-w-4xl">
            <p className="mb-3 text-xs md:text-sm font-black uppercase tracking-[0.28em] text-frame-accent">
              Attribution & Telemetry / Zero Guesswork
            </p>
            <h2 className="font-heading text-[clamp(2.4rem,6vw,5rem)] font-bold uppercase leading-[0.88] tracking-tighter text-frame-fg">
              Landing Page Tracking & Analytics
            </h2>
            <p className="mt-6 text-base md:text-xl font-medium leading-relaxed text-frame-muted-fg">
              A landing page should make campaign performance measurable. We can connect the page to the analytics, advertising, and lead-management tools needed to track the actions that matter.
            </p>
          </div>

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

      {/* 7. WHY A DEDICATED LANDING PAGE CAN IMPROVE CAMPAIGN PERFORMANCE */}
      <section className="border-t-2 border-frame-border bg-frame-bg px-4 py-20 md:px-8 md:py-32">
        <div className="mx-auto max-w-[95vw]">
          <div className="mb-14 md:mb-20 max-w-4xl">
            <p className="mb-3 text-xs md:text-sm font-black uppercase tracking-[0.28em] text-frame-accent">
              Strategic Advantages / Ad Spend Efficiency
            </p>
            <h2 className="font-heading text-[clamp(2.4rem,6vw,5rem)] font-bold uppercase leading-[0.88] tracking-tighter text-frame-fg">
              Why a Dedicated Landing Page Can Improve Campaign Performance
            </h2>
            <p className="mt-6 text-base md:text-xl font-medium leading-relaxed text-frame-muted-fg">
              A landing page gives a campaign a focused destination built around one audience, one offer, and one primary action.
            </p>
          </div>

          <div className="grid bg-frame-border gap-px border-2 border-frame-border sm:grid-cols-2 lg:grid-cols-3">
            {whyDedicatedPage.map((item, index) => (
              <div key={index} className="bg-frame-bg p-7 md:p-8 flex flex-col justify-between">
                <div>
                  <span className="text-xs font-black uppercase tracking-[0.24em] text-frame-accent">Factor 0{index + 1}</span>
                  <h3 className="mt-3 font-heading text-lg md:text-xl font-bold uppercase tracking-tight text-frame-fg">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-xs md:text-sm font-medium leading-relaxed text-frame-muted-fg">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 border-2 border-frame-border bg-frame-muted/20 p-6">
            <p className="text-xs md:text-sm font-medium leading-relaxed text-frame-muted-fg">
              <strong className="text-frame-fg uppercase tracking-wider">Please Note:</strong> A dedicated landing page does not guarantee campaign success. Traffic quality, offer strength, targeting, pricing, and market demand still play major roles.
            </p>
          </div>
        </div>
      </section>

      {/* 8. WHY CHOOSE FRAME CIPHER FOR LANDING PAGE DEVELOPMENT */}
      <section className="border-t-2 border-frame-border bg-frame-muted/30 px-4 py-20 md:px-8 md:py-32">
        <div className="mx-auto max-w-[95vw]">
          <div className="mb-14 md:mb-20 max-w-4xl">
            <p className="mb-3 text-xs md:text-sm font-black uppercase tracking-[0.28em] text-frame-accent">
              Accountability & Impact / Growth Standards
            </p>
            <h2 className="font-heading text-[clamp(2.4rem,6vw,5rem)] font-bold uppercase leading-[0.88] tracking-tighter text-frame-fg">
              Why Choose Frame Cipher for Landing Page Development
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
            <PosterButton href="/contact">Request a Custom Quote &rarr;</PosterButton>
          </div>
        </div>
      </section>
    </div>
  )
}
