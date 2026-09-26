import { SectionIntro, PosterButton } from '../../../Kinetic'

const packages = [
  {
    tier: 'Tier 01',
    name: 'Starter Video',
    price: '৳15,000',
    period: '/video',
    bestFor: 'Talking-head, presenter, simple educational videos',
    volume: '1 video',
    ctaText: 'Start a Video',
    popular: false,
    deliverables: [
      '1 Long-form YouTube video',
      'Outline & basic pre-production planning',
      'Basic outline scripting support',
      'Standard single-camera 4K setup',
      'Studio audio & broadcast lighting included',
      'Basic supporting B-roll capture',
      'Long-form retention editing & dialogue cuts',
      'Basic on-screen graphics & lower-thirds',
      '1 Custom high-CTR YouTube thumbnail',
      'Revisions included',
      'Short-form cutdowns optional'
    ]
  },
  {
    tier: 'Tier 02',
    name: 'Professional Video',
    price: '৳25,000',
    period: '/video',
    bestFor: 'Interviews, founder videos, documentary-style content',
    volume: '1 video',
    ctaText: 'Request a Quote',
    popular: true,
    deliverables: [
      '1 High-production YouTube video',
      'Detailed planning, visual treatment & shot list',
      'Full script or structured talking points',
      'Advanced / multi-camera 4K cinema setup',
      'Professional gaffer lighting & wireless audio',
      'Extended B-roll, lifestyle & workplace footage',
      'Advanced long-form edit with pacing refinement',
      'Custom motion graphics & lower-thirds',
      '1 High-impact thumbnail with dedicated shoot',
      'Revisions included',
      'Short-form cutdowns optional'
    ]
  },
  {
    tier: 'Tier 03',
    name: 'Monthly Production',
    price: '৳55,000',
    period: '/month',
    bestFor: 'Businesses producing consistent monthly YouTube content',
    volume: '4 videos/month',
    ctaText: 'Plan Monthly Production',
    popular: false,
    deliverables: [
      '4 Long-form YouTube videos per month',
      'Content calendar planning for batch production',
      'Scripts or structured outlines for each video',
      'Scheduled batch filming sessions',
      'Professional audio & cinema lighting included',
      'Comprehensive B-roll library integration',
      'Long-form editing for all 4 videos',
      'Custom graphics & branded templates',
      '4 High-CTR custom YouTube thumbnails',
      'Revisions included on all videos',
      'Short-form cutdowns available as add-on'
    ]
  }
]

const comparisonRows = [
  { feature: 'Best For', starter: 'Talking-head, presenter, educational', pro: 'Interviews, founder videos, doc-style', monthly: 'Consistent monthly brand content' },
  { feature: 'Videos Included', starter: '1 video', pro: '1 video', monthly: '4 videos / month' },
  { feature: 'Starting Price', starter: '৳15,000 / video', pro: '৳25,000 / video', monthly: '৳55,000 / month' },
  { feature: 'Pre-Production', starter: 'Outline & basic planning', pro: 'Detailed planning & shot list', monthly: 'Batch content strategy & shot lists' },
  { feature: 'Scripting', starter: 'Basic outline', pro: 'Full script / talking points', monthly: 'Scripts & outlines for each video' },
  { feature: 'Filming Setup', starter: 'Standard 4K single-camera', pro: 'Advanced / multi-camera cinema', monthly: 'Batch filming sessions' },
  { feature: 'Audio & Lighting', starter: '✓ Included', pro: '✓ Included', monthly: '✓ Included' },
  { feature: 'B-Roll Footage', starter: 'Basic B-roll', pro: 'Extended cinematic B-roll', monthly: '✓ Comprehensive B-roll library' },
  { feature: 'Editing Scope', starter: 'Long-form retention edit', pro: 'Advanced pacing & narrative edit', monthly: 'Long-form editing for 4 videos' },
  { feature: 'Graphics & Titles', starter: 'Basic lower-thirds', pro: 'Custom motion graphics', monthly: 'Custom graphics & brand templates' },
  { feature: 'Custom Thumbnails', starter: '1 Thumbnail', pro: '1 Custom Thumbnail', monthly: '4 Custom Thumbnails' },
  { feature: 'Client Revisions', starter: 'Included', pro: 'Included', monthly: 'Included' },
  { feature: 'Short-Form Cutdowns', starter: 'Optional add-on', pro: 'Optional add-on', monthly: 'Available as package add-on' }
]

function CheckIcon({ className = "h-4 w-4 shrink-0 text-frame-accent mt-0.5" }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 20 20" fill="none" className={className}>
      <path d="m4.5 10 3.5 3.5 7.5-7.5" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export default function Pricing() {
  return (
    <section id="pricing" className="border-b-2 border-frame-border bg-frame-bg px-4 py-16 md:px-8 md:py-24 scroll-mt-24">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro
          eyebrow="Transparent Investment"
          title="YouTube Video Production Pricing in Bangladesh"
        >
          YouTube production pricing depends on format, runtime, filming days, locations, crew, equipment, scripting, and editing complexity. Recurring monthly production is structured around batch efficiency.
        </SectionIntro>

        {/* 3 TIERS CARDS */}
        <div className="mt-12 grid gap-8 lg:grid-cols-3">
          {packages.map((pkg, idx) => (
            <div
              key={idx}
              className={`border-2 p-6 md:p-8 flex flex-col justify-between ${
                pkg.popular
                  ? 'border-frame-accent bg-frame-accent/10 shadow-lg'
                  : 'border-frame-border bg-frame-bg'
              }`}
            >
              <div>
                <div className="flex items-center justify-between border-b-2 border-frame-border/60 pb-3">
                  <span className="text-xs font-black uppercase tracking-[0.2em] text-frame-accent">
                    {pkg.tier}
                  </span>
                  {pkg.popular && (
                    <span className="border-2 border-frame-accent bg-frame-accent px-2.5 py-0.5 text-[10px] font-black uppercase tracking-[0.2em] text-frame-accent-fg">
                      Most Popular
                    </span>
                  )}
                </div>

                <h3 className="mt-4 font-heading text-2xl font-bold uppercase tracking-tight text-frame-fg">
                  {pkg.name}
                </h3>
                <p className="mt-2 text-xs font-medium text-frame-muted-fg leading-relaxed">
                  {pkg.bestFor}
                </p>

                <div className="mt-6 border-y-2 border-frame-border/60 py-4">
                  <span className="text-[10px] font-black uppercase tracking-[0.2em] text-frame-muted-fg">
                    Starting From
                  </span>
                  <div className="mt-1 flex items-baseline gap-1">
                    <span className="font-heading text-3xl md:text-4xl font-bold tracking-tight text-frame-fg">
                      {pkg.price}
                    </span>
                    <span className="text-xs font-bold text-frame-muted-fg">
                      {pkg.period}
                    </span>
                  </div>
                  <span className="mt-1 block text-xs font-semibold text-frame-accent">
                    Volume: {pkg.volume}
                  </span>
                </div>

                <ul className="mt-6 space-y-2.5 text-xs sm:text-sm font-medium text-frame-fg">
                  {pkg.deliverables.map((item, dIdx) => (
                    <li key={dIdx} className="flex items-start gap-2">
                      <CheckIcon />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-8 pt-4 border-t border-frame-border/60">
                <PosterButton
                  href="/contact"
                  variant={pkg.popular ? 'accent' : 'outline'}
                  className="w-full justify-center text-xs sm:text-sm"
                >
                  {pkg.ctaText} &rarr;
                </PosterButton>
              </div>
            </div>
          ))}
        </div>

        {/* COMPARISON TABLE */}
        <div className="mt-20">
          <div className="max-w-3xl mb-8">
            <span className="text-xs font-black uppercase tracking-[0.24em] text-frame-accent">
              Detailed Scope Comparison
            </span>
            <h3 className="mt-2 font-heading text-2xl md:text-3xl font-bold uppercase tracking-tight text-frame-fg">
              Compare YouTube Production Packages
            </h3>
          </div>

          <div className="overflow-x-auto border-2 border-frame-border bg-frame-bg">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="border-b-2 border-frame-border bg-frame-muted/30">
                <tr>
                  <th className="p-4 md:p-5 font-black uppercase tracking-wider text-frame-fg">
                    Deliverable / Feature
                  </th>
                  <th className="p-4 md:p-5 font-black uppercase tracking-wider text-frame-fg">
                    Starter Video
                  </th>
                  <th className="p-4 md:p-5 font-black uppercase tracking-wider text-frame-accent bg-frame-accent/10">
                    Professional Video
                  </th>
                  <th className="p-4 md:p-5 font-black uppercase tracking-wider text-frame-fg">
                    Monthly Production
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y-2 divide-frame-border">
                {comparisonRows.map((row, rIdx) => (
                  <tr key={rIdx} className="hover:bg-frame-muted/10 transition-colors">
                    <td className="p-4 md:p-5 font-bold text-frame-fg whitespace-nowrap">
                      {row.feature}
                    </td>
                    <td className="p-4 md:p-5 font-medium text-frame-muted-fg">
                      {row.starter}
                    </td>
                    <td className="p-4 md:p-5 font-medium text-frame-fg bg-frame-accent/5">
                      {row.pro}
                    </td>
                    <td className="p-4 md:p-5 font-medium text-frame-muted-fg">
                      {row.monthly}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* SERVICE REGIONS: BANGLADESH & INTERNATIONAL MARKETS */}
        <div className="mt-20 border-2 border-frame-border bg-frame-muted/20 p-6 md:p-10">
          <div className="max-w-3xl">
            <span className="text-xs font-black uppercase tracking-[0.24em] text-frame-accent">
              Geographic Scope
            </span>
            <h3 className="mt-2 font-heading text-2xl md:text-3xl font-bold uppercase tracking-tight text-frame-fg">
              YouTube Video Production for Bangladesh & International Markets
            </h3>
          </div>

          <div className="mt-8 grid gap-8 md:grid-cols-2">
            <div className="border border-frame-border bg-frame-bg p-6">
              <span className="text-xs font-black uppercase tracking-wider text-frame-accent">
                Services in Bangladesh
              </span>
              <p className="mt-3 text-xs sm:text-sm font-medium leading-relaxed text-frame-muted-fg">
                Framecipher provides YouTube production for businesses across Dhaka and Bangladesh. Content can be produced in Bangla, English, or bilingual formats. Filming can be planned around offices, commercial locations, studios, products, teams, founders, and other suitable environments.
              </p>
            </div>

            <div className="border border-frame-border bg-frame-bg p-6">
              <span className="text-xs font-black uppercase tracking-wider text-frame-accent">
                Clients in USA, UK, Australia, Canada & UAE
              </span>
              <p className="mt-3 text-xs sm:text-sm font-medium leading-relaxed text-frame-muted-fg">
                We also support international clients needing professional YouTube content from a Bangladesh-based creative team. Support includes remote content planning, script development, high-end video editing, motion graphics, custom thumbnail production, supplied-footage editing, and content repurposing.
              </p>
            </div>
          </div>

          <div className="mt-8 flex flex-col items-center justify-between gap-4 border-t border-frame-border/60 pt-6 sm:flex-row">
            <p className="text-xs font-medium text-frame-fg">
              Targeting international viewers or local audiences? We adapt pacing, tone, and typography to your audience profile.
            </p>
            <PosterButton href="/contact" className="shrink-0 text-xs sm:text-sm">
              Discuss Your International YouTube Project &rarr;
            </PosterButton>
          </div>
        </div>
      </div>
    </section>
  )
}
