import { SectionIntro, PosterButton } from '../../../Kinetic'

function CheckIcon({ className = "h-4 w-4 shrink-0 text-[#A855F7] mt-0.5" }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 20 20" fill="none" className={className}>
      <path d="m4.5 10 3.5 3.5 7.5-7.5" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

const packages = [
  {
    name: "Single Graphic",
    price: "৳1,000",
    unit: "per graphic",
    badge: "Tier 01",
    popular: false,
    bestFor: "Occasional or standalone design needs",
    summary: "One platform-formatted feed or Story graphic designed around your content and brand cues.",
    whatsIncluded: [
      "1 custom platform-formatted feed or Story graphic",
      "Layout crafted around your supplied copy",
      "Strict safe-zone & crop compliance check",
      "Brand font, color, and motif alignment",
      "High-resolution WebP / PNG / JPG export",
      "One round of revisions included"
    ]
  },
  {
    name: "Carousel Package",
    price: "৳4,000",
    unit: "per carousel",
    badge: "Most Popular",
    popular: true,
    bestFor: "Educational, promotional, or storytelling",
    summary: "Full multi-slide carousel sequence engineered to earn the swipe from hook to conversion CTA.",
    whatsIncluded: [
      "Full carousel sequence design (up to 8 slides)",
      "High-CTR opening hook & swipe prompt",
      "Visual continuity & seamless slide progression",
      "Dedicated closing slide with decisive CTA",
      "Square (1:1) or portrait (4:5) vertical exports",
      "One round of revisions included"
    ]
  },
  {
    name: "Template System",
    price: "৳12,000",
    unit: "one-time",
    badge: "System Tier",
    popular: false,
    bestFor: "Teams managing recurring content internally",
    summary: "Modular, editable master template suite built for fast internal weekly social production.",
    whatsIncluded: [
      "3 to 5 reusable, editable master templates",
      "Covers quotes, educational tips, and promos",
      "Delivered in Figma or Canva editable format",
      "Locked background branding & editable text fields",
      "Font, color, and spacing guidelines handoff",
      "One round of revisions included"
    ]
  },
  {
    name: "Monthly Graphics Retainer",
    price: "৳20,000",
    unit: "per month",
    badge: "Retainer Tier",
    popular: false,
    bestFor: "Businesses needing regular creative support",
    summary: "Dedicated ongoing monthly production capacity with structured turnaround schedules.",
    whatsIncluded: [
      "Ongoing graphic production at agreed monthly volume",
      "Flexible mix of feed posts, Stories & carousels",
      "Dedicated turnaround queue & delivery schedule",
      "Cross-platform aspect ratio resizing included",
      "Direct designer collaboration channel",
      "Continuous brand consistency governance"
    ]
  }
]

const qualityCheckpoints = [
  { item: "Brand Consistency", desc: "Typography, color codes, and visual motifs strictly conform to brand identity guidelines." },
  { item: "Layout & Hierarchy", desc: "Primary message hook, supporting information, and CTAs follow intuitive eye-tracking flow." },
  { item: "Platform Formatting", desc: "Exported to exact pixel dimensions (1080x1080, 1080x1350, 1080x1920) without distortion." },
  { item: "Crop & Safe-Zone Adherence", desc: "Text and interactive elements sit safely inside platform UI overlay boundaries." },
  { item: "Text Readability", desc: "High contrast ratios and generous mobile font sizes guarantee fast reading in motion." },
  { item: "Export Requirements", desc: "Lossless compression balancing pin-sharp edge rendering with rapid mobile feed loading." },
  { item: "File Organization", desc: "Delivered in structured folders categorized by platform, campaign, and date." }
]

export default function Pricing() {
  return (
    <section id="pricing" className="border-b border-white/[0.08] bg-[#09090B] px-4 py-20 md:px-8 md:py-28 scroll-mt-20">
      <div className="mx-auto max-w-7xl">
        
        {/* HEADER */}
        <SectionIntro
          eyebrow="Commercial Investment"
          title="Social Media Graphics Pricing in Bangladesh"
          align="center"
        >
          Pricing depends on graphic volume, format, content complexity, platform adaptations, template requirements, and production frequency.
        </SectionIntro>

        {/* 4-TIER PACKAGE GRID */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {packages.map((pkg, index) => (
            <div
              key={index}
              className={`border-2 p-6 md:p-7 flex flex-col justify-between transition-all ${
                pkg.popular
                  ? 'border-[#A855F7]/40 bg-[#A855F7]/10 shadow-lg'
                  : 'border-white/[0.08] bg-[#09090B] hover:border-frame-fg'
              }`}
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="font-mono text-[10px] font-black uppercase tracking-[0.2em] text-[#A855F7]">
                    {pkg.badge}
                  </span>
                  {pkg.popular && (
                    <span className="border border-[#A855F7]/40 bg-frame-accent px-2 py-0.5 text-[9px] font-black uppercase tracking-wider text-[#FAFAFA]">
                      Recommended
                    </span>
                  )}
                </div>

                <h3 className="font-heading text-lg md:text-xl font-bold tracking-tight text-[#FAFAFA] leading-snug">
                  {pkg.name}
                </h3>

                <div className="mt-4 border-y border-white/[0.06] py-3">
                  <div className="flex items-baseline gap-1">
                    <span className="font-heading text-3xl font-black text-[#FAFAFA]">
                      {pkg.price}
                    </span>
                    <span className="text-xs font-mono text-[#A1A1AA] font-bold">
                      /{pkg.unit}
                    </span>
                  </div>
                  <span className="text-[10px] font-mono text-[#A855F7] uppercase tracking-wider block mt-0.5">
                    Starting reference rate
                  </span>
                </div>

                <div className="mt-3">
                  <span className="text-[11px] font-mono font-bold text-[#FAFAFA] block">Best For:</span>
                  <p className="text-xs font-medium text-[#A1A1AA] mt-0.5">{pkg.bestFor}</p>
                </div>

                <p className="mt-3 text-xs font-medium text-[#A1A1AA] leading-relaxed border-t border-white/[0.06] pt-2">
                  {pkg.summary}
                </p>

                <div className="mt-5 border-t border-white/[0.06] pt-4">
                  <span className="font-mono text-[10px] font-black uppercase tracking-[0.2em] text-[#A855F7] block mb-2.5">
                    What&apos;s Included
                  </span>
                  <ul className="space-y-2 text-xs font-medium text-[#FAFAFA]">
                    {pkg.whatsIncluded.map((feat, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-2">
                        <CheckIcon className="h-3.5 w-3.5 mt-0.5" />
                        <span className="leading-snug">{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-white/[0.06]">
                <PosterButton
                  href="/contact"
                  variant={pkg.popular ? 'accent' : 'outline'}
                  className="w-full text-center"
                >
                  Choose {pkg.name.split(' ')[0]}
                </PosterButton>
              </div>
            </div>
          ))}
        </div>

        {/* PRICING NOTE & CUSTOM QUOTE */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 border border-white/[0.08] bg-[#121214] p-5 md:p-6 text-xs font-mono text-[#A1A1AA]">
          <p className="max-w-3xl leading-relaxed text-center sm:text-left">
            * Note: Figures shown above are starting references. Exact pricing is confirmed with Framecipher after defining your specific monthly volume, formats, and template scope.
          </p>
          <div className="shrink-0">
            <PosterButton href="/contact">
              Get a Custom Social Media Graphics Quote &rarr;
            </PosterButton>
          </div>
        </div>

        {/* QUALITY REVIEW & REVISIONS PANEL */}
        <div className="mt-20 border border-white/[0.08] bg-[#09090B] p-6 md:p-10">
          <div className="max-w-3xl mb-8">
            <span className="font-mono text-xs font-black uppercase tracking-[0.2em] text-[#A855F7] block mb-2">
              Production Standards
            </span>
            <h3 className="font-heading text-2xl md:text-3xl font-bold tracking-tight text-[#FAFAFA]">
              Quality Review & Revisions
            </h3>
            <p className="mt-2 text-xs sm:text-sm font-medium text-[#A1A1AA] leading-relaxed wide:text-lg">
              Every design batch goes through our 7-point review before final delivery. We verify the agreed graphics against strict visual criteria:
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {qualityCheckpoints.map((chk, cIdx) => (
              <div
                key={cIdx}
                className={`border border-white/[0.08] bg-[#121214] p-4 flex flex-col justify-between ${
                  cIdx === 6 ? 'sm:col-span-2 lg:col-span-1' : ''
                }`}
              >
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <CheckIcon className="h-4 w-4 text-[#A855F7]" />
                    <h4 className="font-heading text-xs font-bold tracking-tight text-[#FAFAFA]">
                      {chk.item}
                    </h4>
                  </div>
                  <p className="text-xs font-medium text-[#A1A1AA] leading-relaxed">
                    {chk.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 border-t border-white/[0.08] pt-6 grid gap-6 md:grid-cols-2 text-xs md:text-sm font-medium text-[#A1A1AA] leading-relaxed wide:text-lg">
            <div className="border-l-2 border-[#A855F7]/40 pl-4 space-y-2">
              <strong className="text-[#FAFAFA] block font-mono uppercase text-xs">Included Revision Round</strong>
              <p>
                One round of revisions is included where specified in the selected package or project scope (e.g. typography adjustment, color balancing, or asset swapping).
              </p>
              <p className="text-xs text-[#A1A1AA]/80">
                Additional revision rounds or substantial changes to an already-approved visual direction can be scoped separately.
              </p>
            </div>

            <div className="border-l-2 border-white/[0.08] pl-4 space-y-2">
              <strong className="text-[#FAFAFA] block font-mono uppercase text-xs">Realistic Performance Disclosure</strong>
              <p>
                We do not guarantee a specific follower growth rate or viral reach from graphics alone. Performance depends on distribution timing, paid ad spend, and algorithm factors.
              </p>
              <p className="text-xs text-[#A855F7] font-mono font-bold">
                Our guarantee is graphics genuinely built for real display constraints and verified mobile safe zones.
              </p>
            </div>
          </div>
        </div>

        {/* GEOGRAPHIC COVERAGE: BANGLADESH & INTERNATIONAL */}
        <div className="mt-12 border border-white/[0.08] bg-[#121214] p-6 md:p-10">
          <div className="grid gap-8 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-8 space-y-3">
              <span className="font-mono text-xs font-black uppercase tracking-[0.2em] text-[#A855F7] block">
                Studio Reach & Bilingual Design
              </span>
              <h3 className="font-heading text-2xl md:text-3xl font-bold tracking-tight text-[#FAFAFA]">
                Social Media Graphics Services in Bangladesh & International Markets
              </h3>
              <p className="text-xs sm:text-sm wide:text-lg font-medium leading-relaxed text-[#A1A1AA]">
                Framecipher is based in Dhaka and provides social media graphics services for businesses across Bangladesh and international markets including the US, UK, Australia, and Canada.
              </p>
              <div className="grid sm:grid-cols-2 gap-4 pt-2 text-xs font-medium text-[#FAFAFA]">
                <div className="p-3 border border-white/[0.08] bg-[#09090B]">
                  <strong className="text-[#A855F7] block font-mono uppercase text-[11px] mb-1">Bangla-English & Bilingual Design:</strong>
                  For Bangladeshi brands, we craft bilingual typography ensuring complex Bangla glyphs and English copy remain balanced and legible in safe zones.
                </div>
                <div className="p-3 border border-white/[0.08] bg-[#09090B]">
                  <strong className="text-[#A855F7] block font-mono uppercase text-[11px] mb-1">International Remote Production:</strong>
                  Seamless remote workflow working from digital briefs, brand books, Figma libraries, and asynchronous Slack/WhatsApp collaboration.
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 border border-white/[0.08] bg-[#09090B] p-6 text-center space-y-4">
              <span className="font-mono text-xs font-black uppercase tracking-wider text-[#A855F7] block">
                Ready For Consistent Social Graphics?
              </span>
              <p className="text-xs font-medium text-[#A1A1AA] leading-relaxed">
                Send your content calendar or upcoming launch brief to our creative team for immediate scoping.
              </p>
              <PosterButton href="/contact" className="w-full text-center">
                Talk to Our Creative Team &rarr;
              </PosterButton>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
