import { SectionIntro, PosterButton } from '../../../Kinetic'

export default function Offerings({ service }) {
  const offerings = service?.offerings || [
  {
    "title": "FRAMEWORK STRATEGY & ARCHITECTURE",
    "description": "Before any code gets written, we decide which framework fits your app and plan around what shared code can and can't cover. What We Do Guessing at framework fit after development has started is how a project ends up rebuilding parts of itself halfway through.",
    "bullets": [
      "Framework Selection: Flutter or React Native, chosen based on your app's specific performance and integration needs.",
      "Requirements & Feature Planning: Deciding what's core to launch versus what waits for a later release.",
      "Shared vs. Native Module Planning: Identifying where shared code works cleanly and where a platform-specific module is the better call.",
      "Technical Architecture Planning: Data flow, state management, and API structure, mapped out before development starts."
    ]
  },
  {
    "title": "UI/UX DESIGN FOR BOTH PLATFORMS",
    "description": "One design system, built to still feel native on both Android's Material Design and Apple's Human Interface Guidelines. What We Do An interface that looks identical on both platforms usually means it feels wrong on at least one of them. CROSS-PLATFORM DEVELOPMENT (FLUTTER / REACT NATIVE) This is where shared code becomes a working app on two operating systems at once. What We Do Most of the app ships from one codebase. The parts that need to be different, still are. TESTING, DEPLOYMENT & DUAL STORE LAUNCH Every build gets tested on both platforms independently, shared code doesn't mean shared results. What We Do Passing on one platform doesn't mean passing on both, we test each one on its own terms.",
    "bullets": [
      "Platform-Aware Interface Design: Shared visual language with adjustments where Android and iOS conventions genuinely diverge.",
      "User Flow Mapping: Navigation and key actions structured so they make sense on both platforms, not just one.",
      "Adaptive Layouts: Consistent behavior across phone and tablet screen sizes on either OS.",
      "Prototype & Usability Testing: Testing the flow on real devices from both ecosystems before development locks it in.",
      "Flutter or React Native Development: Clean, maintainable shared code, built around the framework that actually fits your app.",
      "Native Module Integration: Platform-specific code where the framework's shared layer can't reach a feature you need.",
      "API & Backend Integration: Connecting to your existing backend, third-party services, or a new API built for the app.",
      "Push Notification Setup: Configured for both Firebase Cloud Messaging and Apple Push Notification service, correctly, on each side.",
      "Cross-Device Testing: Real Android and iOS devices, across OS versions, not just one reference phone per platform.",
      "Performance & Load Testing: Confirming the app performs well under real conditions on each operating system.",
      "Dual Store Submission: Google Play and App Store submissions handled together, each to its own current requirements.",
      "Crash Reporting & Analytics Setup: Visibility into how the app performs post-launch on both platforms, not just one."
    ]
  },
  {
    "title": "ONGOING SUPPORT & MAINTENANCE",
    "description": "Two platforms, two sets of OS updates, one app that needs to keep working through both. What We Do Available as a separate ongoing service - see our [App Maintenance & Support] page for full details, since this isn't included by default in a development engagement.",
    "bullets": [
      "OS Compatibility Updates: Keeping the app current as Android and iOS both roll out new versions, on their own schedules.",
      "Bug Fixes & Performance Monitoring: Issues addressed as they surface, on whichever platform they show up.",
      "Framework Version Updates: Keeping Flutter or React Native itself current as the framework evolves.",
      "Feature Updates: New functionality built once, deployed to both platforms together."
    ]
  }
]
  const whyMatters = service?.whyMatters || [
  "The appeal of cross-platform is speed and cost. Losing either one usually means the framework was chosen for the wrong reasons.",
  "Reaching Both Audiences Without Doubling the Budget",
  "Two native builds mean two teams, two timelines, two budgets. One well-built cross-platform app reaches both user bases from a single, coordinated development effort.",
  "Shared Code Still Needs Platform Judgment",
  "Not every feature behaves identically across Android and iOS. Knowing where to insert a native module, instead of forcing a shared-code workaround, is what keeps the app feeling right on both.",
  "Faster Path to Market",
  "One codebase generally means a shorter timeline than building and maintaining two separate native apps in parallel, a real advantage when speed to launch matters.",
  "One App, Consistent Behavior",
  "Bugs fixed once apply to both platforms. Features shipped once reach both platforms together. That consistency is the practical payoff of doing this properly."
]
  const whyChooseUs = service?.whyChooseUs || [
  {
    "title": "A single codebase sounds simple until it isn't, shared logic still has to account for two different operating systems, two different design languages, and two separate app store review processes. We've built enough Flutter and React Native apps to know where that shared-code promise actually holds up and where a native module still needs to step in. Clients get an app that reaches both platforms without either one feeling like an afterthought.",
    "text": "\"Cross-platform doesn't mean identical. It means writing the logic once and still respecting that an Android user and an iOS user expect different things from the same app.\" One Codebase, Two Platforms | Flutter & React Native | Faster Time-to-Market Our Cross-Platform App Development Services Here's what actually goes into building an app that works properly on both platforms at once."
  },
  {
    "title": "FRAMEWORK STRATEGY & ARCHITECTURE",
    "text": "Before any code gets written, we decide which framework fits your app and plan around what shared code can and can't cover."
  },
  {
    "title": "What We Do",
    "text": "* Framework Selection: Flutter or React Native, chosen based on your app's specific performance and integration needs. * Requirements & Feature Planning: Deciding what's core to launch versus what waits for a later release. * Shared vs. Native Module Planning: Identifying where shared code works cleanly and where a platform-specific module is the better call. * Technical Architecture Planning: Data flow, state management, and API structure, mapped out before development starts. Guessing at framework fit after development has started is how a project ends up rebuilding parts of itself halfway through."
  },
  {
    "title": "UI/UX DESIGN FOR BOTH PLATFORMS",
    "text": "One design system, built to still feel native on both Android's Material Design and Apple's Human Interface Guidelines."
  },
  {
    "title": "What We Do",
    "text": "* Platform-Aware Interface Design: Shared visual language with adjustments where Android and iOS conventions genuinely diverge. * User Flow Mapping: Navigation and key actions structured so they make sense on both platforms, not just one. * Adaptive Layouts: Consistent behavior across phone and tablet screen sizes on either OS. * Prototype & Usability Testing: Testing the flow on real devices from both ecosystems before development locks it in. An interface that looks identical on both platforms usually means it feels wrong on at least one of them. CROSS-PLATFORM DEVELOPMENT (FLUTTER / REACT NATIVE) This is where shared code becomes a working app on two operating systems at once."
  },
  {
    "title": "What We Do",
    "text": "* Flutter or React Native Development: Clean, maintainable shared code, built around the framework that actually fits your app. * Native Module Integration: Platform-specific code where the framework's shared layer can't reach a feature you need. * API & Backend Integration: Connecting to your existing backend, third-party services, or a new API built for the app. * Push Notification Setup: Configured for both Firebase Cloud Messaging and Apple Push Notification service, correctly, on each side. Most of the app ships from one codebase. The parts that need to be different, still are. TESTING, DEPLOYMENT & DUAL STORE LAUNCH Every build gets tested on both platforms independently, shared code doesn't mean shared results."
  },
  {
    "title": "What We Do",
    "text": "* Cross-Device Testing: Real Android and iOS devices, across OS versions, not just one reference phone per platform. * Performance & Load Testing: Confirming the app performs well under real conditions on each operating system. * Dual Store Submission: Google Play and App Store submissions handled together, each to its own current requirements. * Crash Reporting & Analytics Setup: Visibility into how the app performs post-launch on both platforms, not just one. Passing on one platform doesn't mean passing on both, we test each one on its own terms."
  },
  {
    "title": "ONGOING SUPPORT & MAINTENANCE",
    "text": "Two platforms, two sets of OS updates, one app that needs to keep working through both."
  },
  {
    "title": "What We Do",
    "text": "* OS Compatibility Updates: Keeping the app current as Android and iOS both roll out new versions, on their own schedules. * Bug Fixes & Performance Monitoring: Issues addressed as they surface, on whichever platform they show up. * Framework Version Updates: Keeping Flutter or React Native itself current as the framework evolves. * Feature Updates: New functionality built once, deployed to both platforms together. Available as a separate ongoing service - see our [App Maintenance & Support] page for full details, since this isn't included by default in a development engagement. Why Your Business Needs a Real Cross-Platform Partner The appeal of cross-platform is speed and cost. Losing either one usually means the framework was chosen for the wrong reasons. Reaching Both Audiences Without Doubling the Budget Two native builds mean two teams, two timelines, two budgets. One well-built cross-platform app reaches both user bases from a single, coordinated development effort."
  },
  {
    "title": "Shared Code Still Needs Platform Judgment",
    "text": "Not every feature behaves identically across Android and iOS. Knowing where to insert a native module, instead of forcing a shared-code workaround, is what keeps the app feeling right on both."
  },
  {
    "title": "Faster Path to Market",
    "text": "One codebase generally means a shorter timeline than building and maintaining two separate native apps in parallel, a real advantage when speed to launch matters. One App, Consistent Behavior Bugs fixed once apply to both platforms. Features shipped once reach both platforms together. That consistency is the practical payoff of doing this properly. Why We're Different"
  },
  {
    "title": "One In-House Team",
    "text": "Strategy, design, development, dual-platform testing, handled by people who talk to each other, not passed between contractors who each only see their own piece. Framework Chosen for Fit, Not Habit We don't default to whichever framework we personally prefer. Flutter and React Native each have real strengths, and we recommend based on what your app actually needs."
  },
  {
    "title": "Local & International App Experience",
    "text": "Based in Dhaka. Building for clients across Bangladesh, the US, UK, Australia, Canada, and UAE. Transparent, Review-Based Process Every stage architecture, design, development, goes through your review before we move to the next one."
  },
  {
    "title": "Strategy & Architecture",
    "text": "Your app's requirements mapped out, with an honest recommendation on Flutter versus React Native."
  },
  {
    "title": "Platform-Aware UI/UX",
    "text": "Interfaces designed to feel native on both Android and iOS, not a compromise that fits neither."
  },
  {
    "title": "Cross-Platform Development",
    "text": "Shared code where it works cleanly, native modules where it doesn't, built by people who know the difference."
  },
  {
    "title": "Dual-Platform Testing",
    "text": "Real devices, both operating systems, tested independently before either submission goes out."
  },
  {
    "title": "Dual Store Deployment",
    "text": "Google Play and App Store submissions, each handled to its own current requirements."
  },
  {
    "title": "Transparent Process",
    "text": "Approval checkpoints at every stage, nothing built without you seeing it first."
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
