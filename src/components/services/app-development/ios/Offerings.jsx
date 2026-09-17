import { SectionIntro, PosterButton } from '../../../Kinetic'

export default function Offerings({ service }) {
  const offerings = service?.offerings || [
  {
    "title": "PRODUCT STRATEGY & ARCHITECTURE",
    "description": "Before a single screen gets designed, we map out what the app actually needs to do and where Apple's rules might get in the way. What We Do A policy conflict caught in planning is a five-minute conversation. Caught after submission, it's a redesign. UI/UX DESIGN FOR iOS The Human Interface Guidelines aren't a suggestion, they're what makes an app feel like it belongs on an iPhone. What We Do Users can tell when an app was designed for a different platform first. It rarely reads as a compliment. NATIVE DEVELOPMENT (SWIFT) This is the part where the plan becomes a working app, built in Apple's current native language, not carried forward from an older one. What We Do Camera access, biometrics, widgets native development gets you there without waiting for a cross-platform framework to catch up. TESTING, DEPLOYMENT & APP STORE LAUNCH Everything gets checked against Apple's actual standards before it ever reaches a reviewer. What We Do Most first-time rejections trace back to one thing: a submission prepared without checking the guidelines that were current on that day.",
    "bullets": [
      "Requirements & Feature Planning: Separating what launches now from what waits for a later update.",
      "Technical Architecture Planning: App structure, data flow, and API needs, decided before development starts.",
      "Device & iOS Version Targeting: Confirming which iPhone models and iOS versions the app actually needs to support.",
      "App Store Policy Review: Checking planned features against current guidelines while there's still time to adjust course.",
      "Human Interface Guideline Implementation: Interfaces built on Apple's own design system, not adapted from somewhere else.",
      "User Flow Mapping: Navigation and key actions structured around how iOS users actually expect them to work.",
      "Adaptive Layouts: Clean scaling across iPhone and iPad, not a single screen size stretched to fit.",
      "Prototype & Usability Testing: Catching friction points on a prototype, before development locks them in.",
      "Swift Development: Modern, maintainable code on Apple's recommended framework, not legacy Objective-C out of habit.",
      "API & Backend Integration: Connecting to your existing backend, third-party services, or an API we build from scratch.",
      "Local Data & Offline Support: Storage and offline functionality, built where the app genuinely needs it.",
      "Push Notification Setup: Apple Push Notification service configured correctly, with permission handling done right.",
      "Device & iOS Version Testing: Current iPhone models and supported iOS versions not just whatever's newest.",
      "Performance & Load Testing: Real usage conditions, not a clean demo environment.",
      "App Store Submission: App Store Connect setup, privacy labels, and current review requirements, handled correctly.",
      "Crash Reporting & Analytics Setup: So what happens after launch is visible, not a guess."
    ]
  },
  {
    "title": "ONGOING SUPPORT & MAINTENANCE",
    "description": "Apple ships a major OS update every year, and it doesn't wait for your app to be ready. What We Do Available as a separate ongoing service - see our [App Maintenance & Support] page for full details, since this isn't included by default in a development engagement.",
    "bullets": [
      "OS Compatibility Updates: Keeping the app working as new iOS versions arrive, annual releases included.",
      "Bug Fixes & Performance Monitoring: Real-world issues, caught and addressed at real-world scale.",
      "Policy Compliance Monitoring: Watching for guideline changes that could affect an app already live.",
      "Feature Updates: New functionality, built as the product actually evolves."
    ]
  }
]
  const whyMatters = service?.whyMatters || [
  "Polish isn't optional on Apple's platform. Neither is compliance.",
  "App Store Review Is a Real Gate",
  "Interface compliance, data handling, policy adherence, Apple checks all of it in detail. Skip the planning, and you're gambling with rejection, delay, and rework right before launch.",
  "iOS Users Expect a Certain Standard",
  "Ignore Apple's design conventions and the app reads as lower quality, no matter how solid the code underneath actually is.",
  "Native Performance, When It's Needed",
  "Camera, biometrics, ARKit features like these often reach native Swift before cross-platform frameworks catch up.",
  "Architecture That Survives an Update",
  "Apple's yearly OS release can quietly break existing behavior. A properly architected app absorbs that no rebuild required."
]
  const whyChooseUs = service?.whyChooseUs || [
  {
    "title": "Apple's review process catches more than bugs, it flags interface inconsistencies, data handling gaps, and subscription rule violations that a working app can still fail on. We build to those requirements from day one instead of treating them as a final checklist before submission, which is why rejections are the exception on our projects, not something we plan for. Years of building for both local and international clients has taught us where Apple's standards actually bite, and where they're more flexible than developers assume.",
    "text": "\"A rejected submission near a launch date is one of the most avoidable delays in app development, and almost always traces back to a decision made months earlier, not a mistake made at the review stage.\" Native Swift Development | Human Interface Guideline Compliant | App Store Deployment Included"
  },
  {
    "title": "Our iOS App Development Services",
    "text": "Your app's requirements decide the build, here's how we approach each part of it."
  },
  {
    "title": "PRODUCT STRATEGY & ARCHITECTURE",
    "text": "Before a single screen gets designed, we map out what the app actually needs to do and where Apple's rules might get in the way."
  },
  {
    "title": "What We Do",
    "text": "* Requirements & Feature Planning: Separating what launches now from what waits for a later update. * Technical Architecture Planning: App structure, data flow, and API needs, decided before development starts. * Device & iOS Version Targeting: Confirming which iPhone models and iOS versions the app actually needs to support. * App Store Policy Review: Checking planned features against current guidelines while there's still time to adjust course. A policy conflict caught in planning is a five-minute conversation. Caught after submission, it's a redesign."
  },
  {
    "title": "UI/UX DESIGN FOR iOS",
    "text": "The Human Interface Guidelines aren't a suggestion, they're what makes an app feel like it belongs on an iPhone."
  },
  {
    "title": "What We Do",
    "text": "* Human Interface Guideline Implementation: Interfaces built on Apple's own design system, not adapted from somewhere else. * User Flow Mapping: Navigation and key actions structured around how iOS users actually expect them to work. * Adaptive Layouts: Clean scaling across iPhone and iPad, not a single screen size stretched to fit. * Prototype & Usability Testing: Catching friction points on a prototype, before development locks them in. Users can tell when an app was designed for a different platform first. It rarely reads as a compliment. NATIVE DEVELOPMENT (SWIFT) This is the part where the plan becomes a working app, built in Apple's current native language, not carried forward from an older one."
  },
  {
    "title": "What We Do",
    "text": "* Swift Development: Modern, maintainable code on Apple's recommended framework, not legacy Objective-C out of habit. * API & Backend Integration: Connecting to your existing backend, third-party services, or an API we build from scratch. * Local Data & Offline Support: Storage and offline functionality, built where the app genuinely needs it. * Push Notification Setup: Apple Push Notification service configured correctly, with permission handling done right. Camera access, biometrics, widgets native development gets you there without waiting for a cross-platform framework to catch up. TESTING, DEPLOYMENT & APP STORE LAUNCH Everything gets checked against Apple's actual standards before it ever reaches a reviewer."
  },
  {
    "title": "What We Do",
    "text": "* Device & iOS Version Testing: Current iPhone models and supported iOS versions not just whatever's newest. * Performance & Load Testing: Real usage conditions, not a clean demo environment. * App Store Submission: App Store Connect setup, privacy labels, and current review requirements, handled correctly. * Crash Reporting & Analytics Setup: So what happens after launch is visible, not a guess. Most first-time rejections trace back to one thing: a submission prepared without checking the guidelines that were current on that day."
  },
  {
    "title": "ONGOING SUPPORT & MAINTENANCE",
    "text": "Apple ships a major OS update every year, and it doesn't wait for your app to be ready."
  },
  {
    "title": "What We Do",
    "text": "* OS Compatibility Updates: Keeping the app working as new iOS versions arrive, annual releases included. * Bug Fixes & Performance Monitoring: Real-world issues, caught and addressed at real-world scale. * Policy Compliance Monitoring: Watching for guideline changes that could affect an app already live. * Feature Updates: New functionality, built as the product actually evolves. Available as a separate ongoing service - see our [App Maintenance & Support] page for full details, since this isn't included by default in a development engagement. Why Your Business Needs a Real iOS Development Partner Polish isn't optional on Apple's platform. Neither is compliance."
  },
  {
    "title": "App Store Review Is a Real Gate",
    "text": "Interface compliance, data handling, policy adherence, Apple checks all of it in detail. Skip the planning, and you're gambling with rejection, delay, and rework right before launch. iOS Users Expect a Certain Standard Ignore Apple's design conventions and the app reads as lower quality, no matter how solid the code underneath actually is. Native Performance, When It's Needed Camera, biometrics, ARKit features like these often reach native Swift before cross-platform frameworks catch up."
  },
  {
    "title": "Architecture That Survives an Update",
    "text": "Apple's yearly OS release can quietly break existing behavior. A properly architected app absorbs that no rebuild required. Why We're Different"
  },
  {
    "title": "One In-House Team",
    "text": "Strategy, design, development, submission one team handles all of it, so nothing gets lost in a handoff between people who never actually talked to each other about how Apple's rules apply here. Built for iOS, Not Ported to It The design starts with Apple's Human Interface Guidelines, not a version of the app that was built for Android first and adjusted afterward."
  },
  {
    "title": "Local & International App Experience",
    "text": "Based in Dhaka. Building for clients across Bangladesh, the US, UK, Australia, Canada, and UAE. Transparent, Review-Based Process You see and approve every stage architecture, design, development, before we move to the next one."
  },
  {
    "title": "Strategy & Architecture",
    "text": "Your app's requirements, target devices, and any relevant App Store policy considerations, mapped out before anything gets built."
  },
  {
    "title": "Human Interface Guideline UI/UX",
    "text": "Interfaces built on Apple's own design language, tested for usability before development even begins."
  },
  {
    "title": "Native Swift Development",
    "text": "Modern native code, with full access to what iOS can actually do."
  },
  {
    "title": "Device & iOS Version Testing",
    "text": "Real testing across current iPhone models and supported OS versions."
  },
  {
    "title": "App Store Deployment",
    "text": "Submission done right, privacy labels, current guidelines, no shortcuts."
  },
  {
    "title": "Transparent Process",
    "text": "Approval checkpoints at every stage. Nothing built without you seeing it first."
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
