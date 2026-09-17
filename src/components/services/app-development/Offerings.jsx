import { SectionIntro, PosterButton } from '../../Kinetic'

export default function Offerings({ service }) {
  const offerings = service?.offerings || [
  {
    "title": "App development is the design, development, and launch of mobile and web applications, covering native Android and iOS builds, cross-platform apps, SaaS products, and enterprise systems. It typically includes technical architecture, UI/UX design, front-end and back-end development, API integration, and app store deployment, and is best suited for startups, SMEs, and enterprises that need one accountable team handling the full build rather than juggling separate mobile and backend contractors.",
    "description": "Android App Development Native Android builds for businesses that need full access to platform-specific features and performance, built in Kotlin, optimized for the Google Play ecosystem and the wide range of Android devices in real use. iOS App Development Native iOS builds in Swift, optimized for App Store guidelines and Apple's design standards, the right choice when your app needs deep integration with iOS-specific features or your primary audience is Apple users. Cross-Platform App Development Single-codebase apps built in Flutter or React Native that run on both Android and iOS, a strong fit for businesses wanting faster time-to-market and lower cost without committing to two separate native builds. SaaS App Development Multi-tenant, subscription-based web applications built for businesses selling software as an ongoing service, including user account management, billing integration, and infrastructure built to scale with your customer base. Enterprise App Development Custom internal or B2B applications built around your organization's specific workflows, data systems, and security requirements, not a consumer app template adapted for internal use. API Development & Integration Building and connecting the APIs your app depends on, whether that's a custom backend for your own app or integrating third-party services like payment processors, CRMs, or external data providers. MVP Development A focused, functional first version of your app built to test the core idea with real users before committing to full-scale development, built lean, but built properly enough to gather real feedback. App Maintenance & Support Ongoing updates, bug fixes, OS compatibility updates, and security patching after launch, because an app's job isn't done the day it goes live on the store.",
    "bullets": []
  }
]
  const whyMatters = service?.whyMatters || [
  "Every month an app idea stays unbuilt, competitors testing similar ideas get closer to market first, and app store visibility compounds the same way SEO rankings do, making early movers harder to catch up to over time. A poorly planned app also carries a specific risk most first-time founders underestimate: a rejected App Store submission, an untested backend that can't handle real user load, or a native app built on the wrong platform for the target audience can cost months of rework.",
  "A common misunderstanding is treating an app like a website built once, done. Apps require ongoing maintenance just to stay functional, since OS updates from Apple and Google can break existing functionality without warning, and skipping post-launch support usually means discovering that the hard way."
]
  const whyChooseUs = service?.whyChooseUs || [
  {
    "title": "Framecipher runs an in-house team across product strategy, design, mobile development, and backend engineering, so your app isn't split across a freelance iOS developer, a separate Android contractor, and a backend team that's never spoken to either of them. Every stage, from wireframes to a working build, goes through your review and approval before moving forward, which keeps you informed instead of finding out what was built after the fact.",
    "text": "We work with both Bangladeshi startups and international clients in the US, UK, Australia, Canada, and UAE, and we're honest about platform fit recommending cross-platform when it genuinely serves your timeline and budget, and native when your app's requirements actually need it, rather than defaulting to whichever build is easier for us to deliver."
  }
]

  if (!offerings?.length && !whyMatters?.length) return null

  return (
    <div className="bg-frame-bg text-frame-fg">
      {offerings?.length > 0 && (
        <section className="px-4 py-20 md:px-8 md:py-28">
          <div className="mx-auto max-w-[95vw]">
            <SectionIntro
              eyebrow="Capabilities & Scope"
              title="What We Deliver"
            >
              Structured deliverables and execution phases designed for measurable outcomes and reliable business growth.
            </SectionIntro>

            <div className="grid bg-frame-border gap-px sm:grid-cols-2 lg:grid-cols-3 border-2 border-frame-border">
              {offerings.map((item, index) => (
                <div key={index} className="bg-frame-bg p-7 md:p-8 flex flex-col justify-between">
                  <div>
                    <span className="text-xs font-black uppercase tracking-[0.24em] text-frame-accent">
                      Scope 0{index + 1}
                    </span>
                    <h3 className="mt-3 font-heading text-xl md:text-2xl font-bold uppercase tracking-tight text-frame-fg">
                      {item.title}
                    </h3>
                    {item.description && (
                      <p className="mt-3 text-sm font-medium leading-relaxed text-frame-muted-fg">
                        {item.description}
                      </p>
                    )}
                  </div>
                  {item.bullets?.length > 0 && (
                    <ul className="mt-6 space-y-2 border-t-2 border-frame-border/60 pt-4 text-xs md:text-sm font-medium text-frame-fg/90">
                      {item.bullets.map((bullet, bIdx) => (
                        <li key={bIdx} className="flex items-start gap-2">
                          <span className="text-frame-accent font-bold">✓</span>
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* WHY IT MATTERS & WHY CHOOSE US */}
      {(whyMatters?.length > 0 || whyChooseUs?.length > 0) && (
        <section className="border-t-2 border-frame-border bg-frame-bg px-4 py-20 md:px-8 md:py-28">
          <div className="mx-auto max-w-[95vw]">
            <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
              {whyMatters?.length > 0 && (
                <div className="border-2 border-frame-border bg-frame-bg p-7 md:p-10">
                  <span className="text-xs font-black uppercase tracking-[0.24em] text-frame-accent">
                    Business Context
                  </span>
                  <h2 className="mt-3 font-heading text-2xl md:text-3xl font-bold uppercase tracking-tight text-frame-fg">
                    Why This Matters for Growth
                  </h2>
                  <div className="mt-6 space-y-4 text-sm md:text-base font-medium leading-relaxed text-frame-muted-fg">
                    {whyMatters.map((point, idx) => (
                      <p key={idx}>{point}</p>
                    ))}
                  </div>
                  <div className="mt-8">
                    <PosterButton href="/contact">Book a Strategy Session</PosterButton>
                  </div>
                </div>
              )}

              {whyChooseUs?.length > 0 && (
                <div className="space-y-6">
                  <div>
                    <span className="text-xs font-black uppercase tracking-[0.24em] text-frame-accent">
                      The Frame Cipher Standard
                    </span>
                    <h3 className="mt-2 font-heading text-2xl font-bold uppercase tracking-tight text-frame-fg">
                      Why Choose Frame Cipher
                    </h3>
                  </div>

                  <div className="grid bg-frame-border gap-px border-2 border-frame-border">
                    {whyChooseUs.map((item, index) => (
                      <div key={index} className="bg-frame-bg p-6">
                        <h4 className="font-heading text-base md:text-lg font-bold uppercase tracking-tight text-frame-fg">
                          {item.title}
                        </h4>
                        <p className="mt-2 text-sm font-medium leading-relaxed text-frame-muted-fg">
                          {item.text || item.desc}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>
      )}
    </div>
  )
}
