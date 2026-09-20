import Link from 'next/link'
import { SectionIntro } from '../../../Kinetic'

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

export default function Offerings() {
  return (
    <section className="border-t-2 border-frame-border bg-frame-bg px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro eyebrow="Core Capabilities / High-Velocity Build" title="Our Landing Page Development Services" index="04">
          We offer end-to-end landing page development tailored to your campaign goal and traffic source.
        </SectionIntro>

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
  )
}