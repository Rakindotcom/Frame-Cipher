import Link from 'next/link'
import {
  StudioSubHero,
  StudioSubOverview,
  StudioSubDeliverables,
  StudioSubPricingFactors,
  StudioSubProcess,
  StudioSubFaq,
  StudioSubClusterNav,
  StudioBookingForm,
} from '../index'
import VideoPortfolioPreview from '../../projects/VideoPortfolioPreview'
import { studioServices } from '../../../data/studioServices'
import { ArrowRight, CheckCircle2, MapPin, Sparkles, Phone, MessageSquare } from 'lucide-react'

export default function StudioServiceLayout({
  service,
  h1,
  lead,
  whatIncluded = [],
  serviceTypes = [],
  whyMatters = '',
  howRuns = [],
  costFactors = [],
  timeline = '',
  faqs = [],
  linksOut = [],
  extraSections,
  videoCategory = null,
  videoPortfolioTitle = null,
  videoPortfolioDescription = null,
}) {
  const currentService = service || {}

  return (
    <div className="bg-frame-bg text-frame-fg min-h-screen">
      {/* 1. Sub-Hero with Breadcrumbs & Action Buttons */}
      <StudioSubHero service={currentService} />

      {/* 2. Primary Deep-Dive Content Section */}
      <section className="border-b-2 border-frame-border bg-frame-bg px-4 py-16 md:px-8 md:py-24">
        <div className="mx-auto max-w-[95vw]">
          <div className="grid gap-12 lg:grid-cols-12">
            <div className="lg:col-span-8 space-y-12">
              {/* Introduction & Value Proposition */}
              <div className="border-2 border-frame-border bg-frame-muted/10 p-6 md:p-10">
                <div className="flex items-center gap-2 mb-3">
                  <span className="h-2 w-2 bg-frame-accent rounded-full animate-pulse" />
                  <span className="text-xs md:text-sm font-black uppercase tracking-[0.28em] text-frame-accent">
                    {currentService.shortTitle || 'Studio Service'} • In-House Dhaka Execution
                  </span>
                </div>
                <h2 className="font-heading text-[clamp(2.2rem,5.5vw,4.5rem)] font-bold uppercase leading-[0.9] tracking-tighter text-frame-fg">
                  {h1 || currentService.h1}
                </h2>
                <p className="mt-6 text-base md:text-xl font-medium leading-relaxed text-frame-muted-fg">
                  {lead || currentService.intro}
                </p>
                {currentService.detailedDescription && (
                  <p className="mt-4 text-sm md:text-base font-medium leading-relaxed text-frame-muted-fg">
                    {currentService.detailedDescription}
                  </p>
                )}
              </div>

              {/* What Is Included */}
              {whatIncluded && whatIncluded.length > 0 && (
                <div className="border-2 border-frame-border bg-frame-bg p-6 md:p-8">
                  <h3 className="font-heading text-xl md:text-2xl font-bold uppercase tracking-tight text-frame-fg mb-6 flex items-center gap-2">
                    <span className="text-frame-accent">◆</span> What This Service Includes
                  </h3>
                  <div className="grid gap-4 sm:grid-cols-2">
                    {whatIncluded.map((item, idx) => (
                      <div
                        key={idx}
                        className="flex items-start gap-3 border border-frame-border/80 bg-frame-muted/20 p-4"
                      >
                        <CheckCircle2 className="h-5 w-5 text-frame-accent shrink-0 mt-0.5" />
                        <span className="text-sm font-medium text-frame-fg">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Types of Content / Sub-Services */}
              {serviceTypes && serviceTypes.length > 0 && (
                <div className="border-2 border-frame-border bg-frame-bg p-6 md:p-8">
                  <h3 className="font-heading text-xl md:text-2xl font-bold uppercase tracking-tight text-frame-fg mb-6 flex items-center gap-2">
                    <span className="text-frame-accent">◆</span> Types We Produce & Deliver
                  </h3>
                  <div className="grid gap-4 sm:grid-cols-2">
                    {serviceTypes.map((type, idx) => (
                      <div
                        key={idx}
                        className="border border-frame-border bg-frame-bg p-5 hover:border-frame-accent transition-colors"
                      >
                        <span className="text-[10px] font-black uppercase tracking-wider text-frame-accent">
                          Format 0{idx + 1}
                        </span>
                        <h4 className="mt-1 font-heading text-base font-bold uppercase text-frame-fg">
                          {typeof type === 'string' ? type : type.title}
                        </h4>
                        {typeof type === 'object' && type.desc && (
                          <p className="mt-2 text-xs text-frame-muted-fg leading-relaxed">
                            {type.desc}
                          </p>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Why Professional Studio Production Matters */}
              {whyMatters && (
                <div className="border-2 border-frame-accent/40 bg-frame-accent/5 p-6 md:p-8">
                  <span className="text-xs font-black uppercase tracking-widest text-frame-accent">
                    Controlled Environment & Quality Control
                  </span>
                  <h3 className="mt-2 font-heading text-xl md:text-2xl font-bold uppercase tracking-tight text-frame-fg">
                    Why Professional Studio Production Matters
                  </h3>
                  <p className="mt-4 text-sm md:text-base font-medium leading-relaxed text-frame-fg/90">
                    {whyMatters}
                  </p>
                </div>
              )}

              {/* How a Project Runs */}
              {howRuns && howRuns.length > 0 && (
                <div className="border-2 border-frame-border bg-frame-bg p-6 md:p-8">
                  <h3 className="font-heading text-xl md:text-2xl font-bold uppercase tracking-tight text-frame-fg mb-6 flex items-center gap-2">
                    <span className="text-frame-accent">◆</span> How a Project Runs
                  </h3>
                  <div className="space-y-3">
                    {howRuns.map((step, idx) => (
                      <div
                        key={idx}
                        className="flex items-start gap-4 border border-frame-border/80 bg-frame-muted/10 p-4"
                      >
                        <span className="flex h-7 w-7 shrink-0 items-center justify-center border border-frame-accent bg-frame-accent text-frame-bg font-mono text-xs font-black">
                          {idx + 1}
                        </span>
                        <span className="text-sm font-medium text-frame-fg pt-1">{step}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* In-Depth Technical & Production Standards (E-E-A-T Depth) */}
              <div className="border-2 border-frame-border bg-frame-bg p-6 md:p-8 space-y-8">
                <div>
                  <span className="text-xs font-black uppercase tracking-widest text-frame-accent">
                    Production Engineering & Standards
                  </span>
                  <h3 className="mt-2 font-heading text-xl md:text-3xl font-bold uppercase tracking-tight text-frame-fg">
                    Technical Architecture & Quality Guarantees
                  </h3>
                  <p className="mt-3 text-sm md:text-base leading-relaxed text-frame-muted-fg">
                    FrameCipher Studio operates under strict broadcast engineering guidelines to eliminate the unpredictable variables of video production in Dhaka. From calibrated acoustic decay rates to 10-bit cinema color pipelines, our production methodology guarantees institutional polish across every deliverable.
                  </p>
                </div>

                <div className="grid gap-6 md:grid-cols-2">
                  <div className="border border-frame-border/80 bg-frame-muted/10 p-5 space-y-2">
                    <h4 className="font-heading text-sm font-bold uppercase text-frame-fg flex items-center gap-2">
                      <span className="text-frame-accent">01.</span> Acoustic Decoupling & Voice Clarity
                    </h4>
                    <p className="text-xs text-frame-muted-fg leading-relaxed">
                      Dhaka’s urban density creates intense acoustic contamination from hydraulic horns, traffic, and construction noise. Our soundstage features a floating floor, dense decoupled rockwool insulation, and acoustic diffusion baffles achieving an RT60 reverberation time under 0.25 seconds. Dialogue is recorded via balanced discrete preamps with 32-bit float headroom, guaranteeing crystal-clear vocal presence without room echo.
                    </p>
                  </div>

                  <div className="border border-frame-border/80 bg-frame-muted/10 p-5 space-y-2">
                    <h4 className="font-heading text-sm font-bold uppercase text-frame-fg flex items-center gap-2">
                      <span className="text-frame-accent">02.</span> Calibrated High-CRI Lighting Science
                    </h4>
                    <p className="text-xs text-frame-muted-fg leading-relaxed">
                      Uncalibrated domestic or commercial fluorescent lights introduce green/magenta color spikes that distort human skin tones on 4K digital sensors. Our overhead DMX-controlled lighting grid utilizes high-output continuous LED fixtures with CRI 96+ and TLCI 98+ ratings. Diffused through oversized honeycomb softboxes, our key lights wrap flatteringly around subjects, eliminating harsh facial shadows and glare.
                    </p>
                  </div>

                  <div className="border border-frame-border/80 bg-frame-muted/10 p-5 space-y-2">
                    <h4 className="font-heading text-sm font-bold uppercase text-frame-fg flex items-center gap-2">
                      <span className="text-frame-accent">03.</span> Cinema 4K Dynamic Range & Color Grading
                    </h4>
                    <p className="text-xs text-frame-muted-fg leading-relaxed">
                      We capture video in 10-bit 4:2:2 and 12-bit RAW logarithmic color profiles with 14+ stops of dynamic range. Footage is graded on calibrated reference OLED displays inside our dedicated DaVinci Resolve Studio color suite. This guarantees that your brand colors, corporate visual identity, and human skin tones render accurately across both mobile OLED smartphones and enterprise boardroom displays.
                    </p>
                  </div>

                  <div className="border border-frame-border/80 bg-frame-muted/10 p-5 space-y-2">
                    <h4 className="font-heading text-sm font-bold uppercase text-frame-fg flex items-center gap-2">
                      <span className="text-frame-accent">04.</span> Multi-Ratio Mobile & Web Architecture
                    </h4>
                    <p className="text-xs text-frame-muted-fg leading-relaxed">
                      Modern commercial video cannot exist in a single aspect ratio. We compose scenes with dual framelines: center-weighted framing for vertical 9:16 (Instagram Reels, YouTube Shorts, and TikTok) and widescreen 16:9 for YouTube and website heroes. Every production includes bilingual subtitle authoring in Unicode Bangla and international English for maximum cross-channel retention.
                    </p>
                  </div>
                </div>

                {/* Standard Production Pricing & Scope Matrix */}
                <div className="mt-8 pt-8 border-t border-frame-border/60">
                  <h4 className="font-heading text-base font-bold uppercase text-frame-fg mb-4">
                    Standard Studio Engagement Tiers (Dhaka)
                  </h4>
                  <div className="overflow-x-auto border-2 border-frame-border">
                    <table className="w-full text-left text-xs">
                      <thead className="border-b-2 border-frame-border bg-frame-muted/30 text-frame-accent font-mono uppercase">
                        <tr>
                          <th className="px-4 py-3 font-bold">Engagement Level</th>
                          <th className="px-4 py-3 font-bold">Scope & Deliverables</th>
                          <th className="px-4 py-3 font-bold">Turnaround</th>
                          <th className="px-4 py-3 font-bold">Indicative BDT Range</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-frame-border/50">
                        <tr className="hover:bg-frame-muted/10">
                          <td className="px-4 py-3 font-bold text-frame-fg">Studio Session / Interview</td>
                          <td className="px-4 py-3 text-frame-muted-fg">Half-day soundstage shoot, 2x 4K cameras, teleprompter, sound engineer, 1x master cut + 2x vertical reels</td>
                          <td className="px-4 py-3 text-frame-muted-fg font-mono">3 - 5 Days</td>
                          <td className="px-4 py-3 font-mono font-bold text-frame-accent">BDT 45,000 - 85,000</td>
                        </tr>
                        <tr className="hover:bg-frame-muted/10">
                          <td className="px-4 py-3 font-bold text-frame-fg">Full Commercial / Corporate Film</td>
                          <td className="px-4 py-3 text-frame-muted-fg">Full-day filming (studio + on-location office/factory), cinema crew, drone, motion graphics, DaVinci grade</td>
                          <td className="px-4 py-3 text-frame-muted-fg font-mono">10 - 15 Days</td>
                          <td className="px-4 py-3 font-mono font-bold text-frame-accent">BDT 120,000 - 250,000</td>
                        </tr>
                        <tr className="hover:bg-frame-muted/10">
                          <td className="px-4 py-3 font-bold text-frame-fg">Enterprise Brand Campaign</td>
                          <td className="px-4 py-3 text-frame-muted-fg">Multi-day narrative production, actors/models, scriptwriting, custom score, TVC broadcast compliance + social suite</td>
                          <td className="px-4 py-3 text-frame-muted-fg font-mono">3 - 5 Weeks</td>
                          <td className="px-4 py-3 font-mono font-bold text-frame-accent">BDT 300,000 - 650,000+</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>

              {/* Extra Custom Sections */}
              {extraSections}
            </div>

            {/* Sidebar with Location, Rapid Booking & Internal Linking */}
            <div className="lg:col-span-4 space-y-6">
              {/* Studio Location Badge */}
              <div className="border-2 border-frame-border bg-frame-bg p-6">
                <div className="flex items-center gap-2 text-frame-accent mb-3">
                  <MapPin className="h-5 w-5" />
                  <span className="text-xs font-black uppercase tracking-wider">
                    Dhaka Studio Facility
                  </span>
                </div>
                <h4 className="font-heading text-base font-bold uppercase text-frame-fg">
                  FrameCipher Studio
                </h4>
                <p className="mt-2 text-xs text-frame-muted-fg leading-relaxed">
                  6th Floor, Eurasia Building, Khan Polli Jame Masjid, Matikata Road, ECB Chattar, Dhaka 1206.
                </p>
                <div className="mt-4 pt-4 border-t border-frame-border/60 flex flex-col gap-2 text-xs font-mono">
                  <div className="flex justify-between text-frame-muted-fg">
                    <span>Phone:</span>
                    <a href="tel:+8801768146650" className="text-frame-fg hover:text-frame-accent">
                      +880 1768-146650
                    </a>
                  </div>
                  <div className="flex justify-between text-frame-muted-fg">
                    <span>Booking:</span>
                    <span className="text-emerald-500 font-bold">Open 24 Hours / 7 Days</span>
                  </div>
                </div>
                <div className="mt-6 flex flex-col gap-2">
                  <a
                    href="https://wa.me/8801768146650"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 border border-frame-accent bg-frame-accent px-4 py-2.5 text-xs font-black uppercase text-frame-bg hover:opacity-90 transition-opacity"
                  >
                    <MessageSquare className="h-4 w-4" />
                    WhatsApp Direct Inquiry
                  </a>
                  <a
                    href="tel:+8801768146650"
                    className="flex items-center justify-center gap-2 border border-frame-border bg-frame-bg px-4 py-2.5 text-xs font-black uppercase text-frame-fg hover:border-frame-fg transition-colors"
                  >
                    <Phone className="h-4 w-4" />
                    Call Studio Directly
                  </a>
                </div>
              </div>

              {/* What Affects Price */}
              {costFactors && costFactors.length > 0 && (
                <div className="border-2 border-frame-border bg-frame-muted/10 p-6">
                  <h4 className="font-heading text-sm font-bold uppercase tracking-wider text-frame-fg mb-4 flex items-center gap-2">
                    <span className="text-frame-accent">◆</span> Pricing Factors
                  </h4>
                  <ul className="space-y-2.5 text-xs font-medium text-frame-muted-fg">
                    {costFactors.map((factor, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-frame-accent font-bold mt-0.5">•</span>
                        <span>{factor}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="mt-4 pt-4 border-t border-frame-border/60 text-[11px] text-frame-muted-fg">
                    Every project is scoped individually rather than arbitrary fixed pricing.
                  </p>
                </div>
              )}

              {/* Related Cluster Links (Links Out) */}
              {linksOut && linksOut.length > 0 && (
                <div className="border-2 border-frame-border bg-frame-bg p-6">
                  <h4 className="font-heading text-xs font-black uppercase tracking-widest text-frame-accent mb-4">
                    Related Studio Services
                  </h4>
                  <div className="space-y-2">
                    {linksOut.map((link, idx) => (
                      <Link
                        key={idx}
                        href={link.href}
                        className="group flex items-center justify-between border border-frame-border/80 bg-frame-muted/10 px-3 py-2 text-xs font-semibold text-frame-fg hover:border-frame-accent hover:text-frame-accent transition-all"
                      >
                        <span>{link.label}</span>
                        <ArrowRight className="h-3 w-3 text-frame-muted-fg group-hover:text-frame-accent transition-colors" />
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Extra Custom Injected Content / Groupings */}
      {extraSections && (
        <section className="border-b-2 border-frame-border bg-frame-bg px-4 py-12 md:px-8">
          <div className="mx-auto max-w-[95vw]">{extraSections}</div>
        </section>
      )}

      {/* Category-Tailored Video Portfolio Showcase */}
      {videoCategory && (
        <VideoPortfolioPreview
          category={videoCategory}
          title={videoPortfolioTitle || 'Selected Video Work & Commercial Reels'}
          eyebrow="Studio Deployments"
          description={
            videoPortfolioDescription ||
            'Explore commercial productions, promotional video reels, and studio podcast sessions filmed and edited by Frame Cipher.'
          }
        />
      )}

      {/* 3. In-Depth Capabilities & Technical Inclusions */}
      <StudioSubOverview service={currentService} />

      {/* 4. Confirmed Deliverables, File Formats & Aspect Ratios */}
      <StudioSubDeliverables service={currentService} />

      {/* 5. Production Process (5-Step Framework) */}
      <StudioSubProcess service={currentService} />

      {/* 6. Pricing Factors, Turnaround Times & Revision Policy */}
      <StudioSubPricingFactors service={currentService} />

      {/* 7. Service Specific FAQ Accordion */}
      <StudioSubFaq service={currentService} />

      {/* 8. Koray Sibling & Complementary Cluster Navigation */}
      <StudioSubClusterNav currentService={currentService} allServices={studioServices} />

      {/* 9. Interactive Booking & WhatsApp Lead Dispatch Form */}
      <StudioBookingForm />
    </div>
  )
}
