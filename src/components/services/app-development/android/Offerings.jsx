import { SectionIntro, PosterButton } from '../../../Kinetic'

export default function Offerings({ service }) {
  const offerings = service?.offerings || [
  {
    "title": "PRODUCT STRATEGY & ARCHITECTURE",
    "description": "Every Android build starts with a plan for what the app needs to do and how it needs to scale. What We Do Architecture decided upfront prevents the expensive restructuring that comes from bolting features onto an unplanned foundation.",
    "bullets": [
      "Requirements & Feature Planning: Defining core functionality and what belongs in a later update instead of launch.",
      "Technical Architecture Planning: Designing app structure, data flow, and API needs before development begins.",
      "Device & OS Version Targeting: Deciding which Android versions and device tiers the app needs to reliably support.",
      "Competitor & Platform Review: Understanding what similar Android apps do well or poorly in your category."
    ]
  },
  {
    "title": "UI/UX DESIGN FOR ANDROID",
    "description": "Design built around Android's own design language and interaction patterns, not a generic cross-platform layout. What We Do An app that looks like an iOS app ported to Android usually feels wrong to Android users, even if they can't immediately say why. NATIVE DEVELOPMENT (KOTLIN) The technical build itself, written in Android's modern native language for performance and long-term maintainability. What We Do Native development means direct access to Android's full feature set, without waiting on a cross-platform framework to catch up to new OS capabilities. TESTING, DEPLOYMENT & PLAY STORE LAUNCH Making sure the app actually works across real devices before it reaches real users. What We Do A build that's only been tested on the developer's own phone is the most common reason Android apps get inconsistent reviews after launch.",
    "bullets": [
      "Material Design Implementation: Interfaces built around Google's Material Design system, so the app feels native to Android.",
      "User Flow Mapping: Structuring navigation and key tasks around how Android users actually expect an app to behave.",
      "Adaptive Layouts: Design that holds up across phones, tablets, and foldables, not just one reference screen size.",
      "Prototype & Usability Testing: Validating the flow before development, catching friction points early.",
      "Kotlin Development: Clean, modern native code, not legacy Java carried forward out of habit.",
      "API & Backend Integration: Connecting the app to your backend, third-party services, or a custom API we build.",
      "Local Data & Offline Support: Handling data storage and offline functionality where the app genuinely needs it.",
      "Push Notification Setup: Firebase Cloud Messaging integration for reliable, properly configured notifications.",
      "Device & OS Version Testing: Testing across a genuine range of hardware and Android versions, not just the latest flagship.",
      "Performance & Load Testing: Confirming the app performs well under real usage conditions, not just in a controlled demo.",
      "Google Play Submission: Handling Play Store listing setup and submission, including navigating current review requirements.",
      "Crash Reporting & Analytics Setup: Configuring tools so issues and usage patterns are visible after launch, not a black box."
    ]
  },
  {
    "title": "ONGOING SUPPORT & MAINTENANCE",
    "description": "An Android app's job isn't done at launch, OS updates and device changes require ongoing attention. What We Do Available as a separate ongoing service - see our [App Maintenance & Support] page for full details, since this isn't included by default in a development engagement.",
    "bullets": [
      "OS Compatibility Updates: Keeping the app working correctly as new Android versions roll out.",
      "Bug Fixes & Performance Monitoring: Addressing issues that surface once the app is in real use, at scale.",
      "Security & Dependency Updates: Keeping libraries and dependencies current and patched.",
      "Feature Updates: Building new functionality as the product evolves post-launch."
    ]
  }
]
  const whyMatters = service?.whyMatters || [
  "Android's openness and device diversity are real advantages, and real engineering challenges if the build doesn't account for them properly.",
  "Device Fragmentation Isn't Optional to Plan For",
  "Android runs across thousands of device and OS version combinations. An app that only works well on premium hardware is quietly failing a large share of the actual Android user base.",
  "Trust & Store Reviews",
  "A crash-prone or slow app gets reflected directly in Play Store ratings, and low ratings suppress future downloads, making early quality control a growth issue, not just a technical one.",
  "Native Performance Where It Matters",
  "For apps with performance-sensitive features camera, location, background processing, native Kotlin development gives direct access to platform capabilities a cross-platform framework may not fully expose.",
  "Built to Update, Not Just Launch",
  "Unlike a one-time build, a properly architected Android app can absorb OS updates and new feature requests without requiring a rebuild, that's the difference proper initial architecture makes."
]
  const whyChooseUs = service?.whyChooseUs || [
  {
    "title": "As an Android development company, we build in Kotlin the platform's modern standard rather than treating Android as an afterthought to an iOS-first build. Our clients get apps that account for the real diversity of Android hardware, screen sizes, and OS versions in active use, since what works cleanly on one flagship device can break on a mid-range phone running an older Android version. With hands-on experience building for both Bangladeshi and international markets, we know Android's device fragmentation isn't a minor detail, it's the core engineering challenge the platform presents.",
    "text": "\"Android isn't one device, it's thousands of them, running different OS versions, at wildly different price points. An app tested only on a flagship phone is an app that hasn't actually been tested for most of its real users.\" Native Kotlin Development | Built for Device Diversity | Play Store Deployment Included"
  },
  {
    "title": "Our Android App Development Services",
    "text": "We offer end-to-end Android development tailored to your app's actual requirements."
  },
  {
    "title": "PRODUCT STRATEGY & ARCHITECTURE",
    "text": "Every Android build starts with a plan for what the app needs to do and how it needs to scale."
  },
  {
    "title": "What We Do",
    "text": "* Requirements & Feature Planning: Defining core functionality and what belongs in a later update instead of launch. * Technical Architecture Planning: Designing app structure, data flow, and API needs before development begins. * Device & OS Version Targeting: Deciding which Android versions and device tiers the app needs to reliably support. * Competitor & Platform Review: Understanding what similar Android apps do well or poorly in your category. Architecture decided upfront prevents the expensive restructuring that comes from bolting features onto an unplanned foundation."
  },
  {
    "title": "UI/UX DESIGN FOR ANDROID",
    "text": "Design built around Android's own design language and interaction patterns, not a generic cross-platform layout."
  },
  {
    "title": "What We Do",
    "text": "* Material Design Implementation: Interfaces built around Google's Material Design system, so the app feels native to Android. * User Flow Mapping: Structuring navigation and key tasks around how Android users actually expect an app to behave. * Adaptive Layouts: Design that holds up across phones, tablets, and foldables, not just one reference screen size. * Prototype & Usability Testing: Validating the flow before development, catching friction points early. An app that looks like an iOS app ported to Android usually feels wrong to Android users, even if they can't immediately say why. NATIVE DEVELOPMENT (KOTLIN) The technical build itself, written in Android's modern native language for performance and long-term maintainability."
  },
  {
    "title": "What We Do",
    "text": "* Kotlin Development: Clean, modern native code, not legacy Java carried forward out of habit. * API & Backend Integration: Connecting the app to your backend, third-party services, or a custom API we build. * Local Data & Offline Support: Handling data storage and offline functionality where the app genuinely needs it. * Push Notification Setup: Firebase Cloud Messaging integration for reliable, properly configured notifications. Native development means direct access to Android's full feature set, without waiting on a cross-platform framework to catch up to new OS capabilities. TESTING, DEPLOYMENT & PLAY STORE LAUNCH Making sure the app actually works across real devices before it reaches real users."
  },
  {
    "title": "What We Do",
    "text": "* Device & OS Version Testing: Testing across a genuine range of hardware and Android versions, not just the latest flagship. * Performance & Load Testing: Confirming the app performs well under real usage conditions, not just in a controlled demo. * Google Play Submission: Handling Play Store listing setup and submission, including navigating current review requirements. * Crash Reporting & Analytics Setup: Configuring tools so issues and usage patterns are visible after launch, not a black box. A build that's only been tested on the developer's own phone is the most common reason Android apps get inconsistent reviews after launch."
  },
  {
    "title": "ONGOING SUPPORT & MAINTENANCE",
    "text": "An Android app's job isn't done at launch, OS updates and device changes require ongoing attention."
  },
  {
    "title": "What We Do",
    "text": "* OS Compatibility Updates: Keeping the app working correctly as new Android versions roll out. * Bug Fixes & Performance Monitoring: Addressing issues that surface once the app is in real use, at scale. * Security & Dependency Updates: Keeping libraries and dependencies current and patched. * Feature Updates: Building new functionality as the product evolves post-launch. Available as a separate ongoing service - see our [App Maintenance & Support] page for full details, since this isn't included by default in a development engagement. Why Your Business Needs a Real Android Development Partner Android's openness and device diversity are real advantages, and real engineering challenges if the build doesn't account for them properly. Device Fragmentation Isn't Optional to Plan For Android runs across thousands of device and OS version combinations. An app that only works well on premium hardware is quietly failing a large share of the actual Android user base."
  },
  {
    "title": "Trust & Store Reviews",
    "text": "A crash-prone or slow app gets reflected directly in Play Store ratings, and low ratings suppress future downloads, making early quality control a growth issue, not just a technical one."
  },
  {
    "title": "Native Performance Where It Matters",
    "text": "For apps with performance-sensitive features camera, location, background processing, native Kotlin development gives direct access to platform capabilities a cross-platform framework may not fully expose. Built to Update, Not Just Launch Unlike a one-time build, a properly architected Android app can absorb OS updates and new feature requests without requiring a rebuild, that's the difference proper initial architecture makes. Why We're Different We're not positioning ourselves as the biggest agency, we're built to be the most accountable one."
  },
  {
    "title": "One In-House Team",
    "text": "Strategy, design, development, and deployment handled by one team, not handed off between a designer and a developer who never spoke to each other about how Android actually behaves. Built for Android, Not Ported to It We design and develop specifically around Android's platform conventions and device diversity, not a generic app adapted after being designed for iOS first."
  },
  {
    "title": "Local & International App Experience",
    "text": "Based in Dhaka, building Android apps for businesses across Bangladesh as well as internationally, including the US, UK, Australia, Canada, and UAE. Transparent, Review-Based Process Every stage of architecture, design, development, goes through your review and approval before we move forward."
  },
  {
    "title": "Strategy & Architecture",
    "text": "We start by understanding your app's requirements, target devices, and how it needs to scale."
  },
  {
    "title": "Material Design UI/UX",
    "text": "Interfaces built around Android's own design language, tested for usability before development begins."
  },
  {
    "title": "Native Kotlin Development",
    "text": "Clean, modern native code with direct access to Android's full platform capabilities."
  },
  {
    "title": "Device & OS Testing",
    "text": "Real testing across device tiers and OS versions, not just a single reference device."
  },
  {
    "title": "Play Store Deployment",
    "text": "Submission handled correctly, including navigating current Google Play review requirements."
  },
  {
    "title": "Transparent Process",
    "text": "Review checkpoints at every stage, so you approve direction before it's built - not after."
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
