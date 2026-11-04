import { Check } from 'lucide-react'
import Link from 'next/link'

const coreServices = [
  {
    title: 'Campaign Strategy & Offer Structure',
    tag: '01',
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
    title: 'Conversion-Focused Design',
    tag: '02',
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
    title: 'Development & Tracking Setup',
    tag: '03',
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
    title: 'Performance & Speed Optimization',
    tag: '04',
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
    <section className="relative border-t border-white/[0.08] bg-[#09090B] py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
        {/* Section Header */}
        <div className="mb-14 max-w-3xl space-y-4">
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium leading-[0.96] tracking-tight text-white">
            Our Landing Page Development{' '}
            <span className="italic text-frame-accent">Services.</span>
          </h2>

          <p className="text-base sm:text-lg leading-relaxed text-zinc-300">
            We offer end-to-end landing page development tailored to your campaign goal and traffic source.
          </p>
        </div>

        {/* 2x2 Grid of Track Cards */}
        <div className="grid gap-6 md:grid-cols-2">
          {coreServices.map((service, index) => (
            <div
              key={index}
              className="flex flex-col justify-between rounded-xl border border-white/[0.08] bg-[#121214] p-7 md:p-8 transition-colors duration-200 hover:border-white/[0.14]"
            >
              <div>
                <span className="font-mono text-[11px] uppercase tracking-widest text-frame-accent">
                  {service.tag}
                </span>
                <h3 className="mt-3 font-heading text-xl md:text-2xl font-medium tracking-tight text-white">
                  {service.title}
                </h3>
                <p className="mt-3 text-sm md:text-base leading-relaxed text-zinc-300">
                  {service.description}
                </p>

                <div className="mt-6 border-t border-white/[0.08] pt-5">
                  <span className="font-mono text-[11px] uppercase tracking-widest text-frame-accent">
                    What We Do
                  </span>
                  <ul className="mt-3 space-y-2.5 text-xs md:text-sm text-zinc-300">
                    {service.bullets.map((bullet, bIdx) => (
                      <li key={bIdx} className="flex items-start gap-2.5">
                        <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-frame-accent/30 bg-frame-accent/10 text-frame-accent mt-0.5">
                          <Check className="h-3 w-3 stroke-[2.5]" />
                        </span>
                        <span className="leading-relaxed">{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-8 border-t border-white/[0.08] pt-5">
                <p className="text-xs font-normal italic leading-relaxed text-zinc-400 mb-4">
                  {service.takeaway}
                </p>
                <Link
                  href={service.link}
                  className="inline-flex items-center font-mono text-xs uppercase tracking-wider text-frame-accent hover:text-white transition-colors"
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
