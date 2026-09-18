import Link from 'next/link'
import { SectionIntro, PosterButton } from '../../../Kinetic'

const iosServices = [
  {
    title: "Product Strategy & Architecture",
    desc: "We define your core features, user journeys, technical requirements, integrations, and application structure before development begins."
  },
  {
    title: "UI/UX Design for iOS",
    desc: "We design clear iOS interfaces around user flow, accessibility, responsive layouts, and familiar platform interaction patterns."
  },
  {
    title: "Native iOS Development",
    desc: "We develop native applications with Swift, SwiftUI, UIKit, and Apple frameworks based on the needs of your product."
  },
  {
    title: "API & Backend Integration",
    desc: "We connect your iOS application with APIs, databases, authentication systems, payment services, admin panels, and other required platforms."
  },
  {
    title: "Testing & Quality Assurance",
    desc: "We test application functionality, supported devices, integrations, performance, and critical user journeys before release."
  },
  {
    title: "App Store Launch",
    desc: "We prepare the production build, TestFlight testing, App Store Connect setup, submission, and technical release workflow."
  },
  {
    title: "iOS App Support & Maintenance",
    desc: "We continue supporting your application with bug fixes, updates, improvements, new features, and ongoing technical maintenance."
  }
]

const appsWeBuild = [
  {
    title: "E-commerce & Retail Apps",
    desc: "Build mobile shopping experiences with product browsing, search, accounts, carts, checkout, payments, order tracking, and customer notifications."
  },
  {
    title: "Booking & Service Apps",
    desc: "Handle appointments, reservations, scheduling, availability, service requests, reminders, and customer communication from one iOS application."
  },
  {
    title: "Delivery & On-Demand Apps",
    desc: "Connect customers, drivers, delivery teams, or service providers through ordering, location tracking, status updates, notifications, and operational workflows."
  },
  {
    title: "Business & Internal Apps",
    desc: "Create internal tools for teams, field staff, sales operations, approvals, reporting, CRM workflows, and business management."
  },
  {
    title: "Marketplace & Community Apps",
    desc: "Support multiple user types with profiles, listings, search, messaging, reviews, transactions, and moderation features."
  },
  {
    title: "SaaS & Product Apps",
    desc: "Extend your existing SaaS product or web platform into a dedicated iOS experience connected to your backend, APIs, and customer accounts."
  },
  {
    title: "Education, Health & Lifestyle Apps",
    desc: "Build learning, fitness, wellness, content, tracking, subscription, and other user-focused mobile products around your business model."
  },
  {
    title: "Companion & Connected Apps",
    desc: "Create iOS companion apps for websites, software platforms, connected devices, wearables, or existing digital services."
  }
]

const whyRealPartner = [
  {
    title: "App Store Review Is a Real Gate",
    desc: "An iOS application must meet Apple's technical, content, privacy, and submission requirements before it can reach users through the App Store. We plan for those requirements during development instead of treating submission as an afterthought."
  },
  {
    title: "iOS Users Expect a Native Experience",
    desc: "Your app should feel natural on the platform. Navigation, gestures, layouts, typography, states, and interactions all need to work together as one product."
  },
  {
    title: "Native Performance When It Matters",
    desc: "Some applications depend heavily on device capabilities, performance, background behavior, or platform-specific features. In those cases, native iOS development gives us direct access to the tools the platform provides."
  },
  {
    title: "Architecture That Survives iOS Updates",
    desc: "An application should not need a major rebuild every time the platform evolves. We structure the codebase and dependencies with future updates and maintenance in mind."
  }
]

const featuresAndIntegrations = [
  {
    title: "User Accounts & Authentication",
    desc: "Support email and phone login, secure sessions, Sign in with Apple, biometric authentication, account recovery, and role-based access."
  },
  {
    title: "Notifications & Engagement",
    desc: "Use push notifications, deep links, widgets, reminders, and other supported iOS capabilities to keep users connected to important updates."
  },
  {
    title: "Apple Payments & Monetization",
    desc: "Depending on your business model, we can plan Apple Pay, in-app purchases, subscriptions, and related payment workflows."
  },
  {
    title: "Device & Location Features",
    desc: "Integrate supported device capabilities such as camera access, photo libraries, GPS, maps, Bluetooth, NFC, and location-based functionality."
  },
  {
    title: "Data, Storage & Sync",
    desc: "Connect your app to APIs, local storage, secure device storage, cloud services, and synchronization workflows based on product requirements."
  },
  {
    title: "Health & Specialized Features",
    desc: "For products that require them, supported Apple frameworks can be used for health, fitness, device, media, or other specialized application features."
  },
  {
    title: "Analytics & Crash Monitoring",
    desc: "Connect analytics and crash-monitoring tools to understand application behavior, identify issues, and improve future releases."
  }
]

const swiftSwiftUiPoints = [
  {
    title: "Swift Development",
    desc: "We use Swift to build application logic, networking, data handling, integrations, and native iOS functionality."
  },
  {
    title: "SwiftUI Interfaces",
    desc: "SwiftUI provides a modern way to build interfaces with reusable components, adaptive layouts, and a structured UI development workflow."
  },
  {
    title: "UIKit When It Makes Sense",
    desc: "UIKit remains useful for existing applications, specific interface requirements, advanced controls, and projects that need to work with an established UIKit codebase."
  },
  {
    title: "Native iOS Capabilities",
    desc: "When your product depends on platform-specific behavior, device features, performance, background activity, or Apple frameworks, native development provides direct access to the required iOS capabilities."
  },
  {
    title: "Modernization Without an Unnecessary Rewrite",
    desc: "For existing applications, SwiftUI can be introduced gradually alongside UIKit instead of forcing the entire application into a single framework."
  }
]

const appleEcosystem = [
  {
    title: "iPhone App Development",
    desc: "Build the primary mobile experience around modern iPhone screen sizes, touch interactions, supported iOS versions, and your core user journeys."
  },
  {
    title: "iPad App Development",
    desc: "Extend the product to iPad with layouts and interaction patterns designed for larger screens rather than simply stretching the iPhone interface."
  },
  {
    title: "Apple Watch Integration",
    desc: "For suitable products, we can plan companion experiences for quick actions, notifications, tracking, and wearable workflows."
  },
  {
    title: "Apple TV & Other Apple Platforms",
    desc: "When your product needs a broader Apple presence, additional platform experiences can be considered as part of the overall application strategy."
  },
  {
    title: "Mac Catalyst",
    desc: "Existing iPad applications can be evaluated for Mac Catalyst when extending the product to Mac supports your business goals."
  }
]

const techStack = [
  { layer: "Language", tech: "Swift" },
  { layer: "UI", tech: "SwiftUI, UIKit" },
  { layer: "Development", tech: "Xcode, Apple SDKs" },
  { layer: "Architecture", tech: "MVVM, modular architecture, or another suitable pattern" },
  { layer: "Networking", tech: "REST APIs, JSON-based services" },
  { layer: "Authentication", tech: "Secure session-based authentication, Sign in with Apple, biometric flows" },
  { layer: "Local Data", tech: "Local persistence and secure device storage" },
  { layer: "Cloud & Services", tech: "Firebase, analytics, crash reporting, push notifications" },
  { layer: "Apple Services", tech: "StoreKit, MapKit, Core Location, UserNotifications, HealthKit and other supported frameworks" },
  { layer: "Testing", tech: "Unit testing, UI testing, device testing, regression testing" },
  { layer: "Release", tech: "TestFlight, certificates, signing, provisioning, App Store Connect" }
]

const strategyArchitecture = [
  {
    title: "Requirements & Feature Planning",
    desc: "We define the primary user journeys, business rules, account types, key features, integrations, and technical requirements before development starts."
  },
  {
    title: "iOS Device & Version Planning",
    desc: "We identify the supported iPhone and iPad devices and iOS versions based on your audience, required features, and project scope."
  },
  {
    title: "Backend & API Planning",
    desc: "We map the data your app needs, API connections, authentication, admin workflows, notifications, and third-party services."
  },
  {
    title: "Scalability Planning",
    desc: "The architecture is planned around future features, increasing users, new integrations, and ongoing product updates."
  },
  {
    title: "Technical Risk Review",
    desc: "We identify complex integrations, platform limitations, performance-sensitive features, and dependencies early so they do not become expensive surprises later."
  }
]

const codeQuality = [
  {
    title: "Structured Codebase",
    desc: "We separate interface, business logic, networking, data, and reusable components where the project benefits from that structure."
  },
  {
    title: "Maintainable Components",
    desc: "Reusable components reduce unnecessary duplication and make future feature updates easier to manage."
  },
  {
    title: "API & Data Layers",
    desc: "Networking, models, local data, and application state are organized so the codebase remains easier to test and extend."
  },
  {
    title: "Dependency Management",
    desc: "Project dependencies are reviewed for compatibility, maintenance, and their impact on future iOS updates."
  },
  {
    title: "Code Review & Quality Checks",
    desc: "Important areas are reviewed for structure, reliability, maintainability, and consistency before release."
  }
]

const uiUxPoints = [
  {
    title: "Apple Human Interface Guidelines",
    desc: "We use established iOS interface patterns where they improve usability while keeping the product's own brand identity."
  },
  {
    title: "User Flows & Interaction Design",
    desc: "We map key journeys before visual design so the interface supports the actual task a user needs to complete."
  },
  {
    title: "Responsive iPhone & iPad Layouts",
    desc: "Layouts are adapted to the supported screen sizes and device requirements instead of relying on one fixed design."
  },
  {
    title: "Prototyping & Usability",
    desc: "Interactive prototypes help validate important flows before development and reduce avoidable design changes later."
  }
]

const securityPillars = [
  {
    title: "Secure Authentication",
    desc: "Authentication flows are designed around secure sessions, account recovery, access control, and suitable authentication methods."
  },
  {
    title: "Protected Data",
    desc: "Sensitive information is handled using appropriate storage and transmission practices based on the application's requirements."
  },
  {
    title: "API Security",
    desc: "We account for authenticated endpoints, authorization, validation, secure communication, and backend access controls."
  },
  {
    title: "Permission Management",
    desc: "Camera, location, photos, notifications, Bluetooth, and other permissions are requested based on actual product needs."
  },
  {
    title: "Privacy-Aware Development",
    desc: "We review what data the app collects and how permissions, disclosures, and user-facing privacy requirements affect the product."
  }
]

const accessibilityLocalization = [
  {
    title: "Accessibility Support",
    desc: "We consider VoiceOver, readable typography, suitable touch targets, contrast, dynamic text sizing, and accessible interaction patterns where required."
  },
  {
    title: "Bangla & English Interfaces",
    desc: "For businesses serving Bangladesh, we can prepare interfaces for Bangla and English users."
  },
  {
    title: "Multilingual Localization",
    desc: "Additional languages can be planned around your target markets and application scope."
  },
  {
    title: "Localization-Ready Layouts",
    desc: "Text length, translated labels, dates, numbers, and interface changes are considered during design so localization does not create avoidable layout problems later."
  }
]

const performanceCompatibility = [
  {
    title: "Device Compatibility",
    desc: "We test the agreed device range so layouts and functionality remain consistent across supported iPhone and iPad configurations."
  },
  {
    title: "iOS Version Support",
    desc: "Supported iOS versions are defined during planning and considered throughout development and testing."
  },
  {
    title: "Network Conditions",
    desc: "Apps that depend on APIs, media, or live data should handle slow connections, interrupted requests, and temporary service failures."
  },
  {
    title: "Performance Optimization",
    desc: "We review loading behavior, API response handling, memory-sensitive screens, rendering, and other performance-sensitive areas."
  },
  {
    title: "Real-Device Validation",
    desc: "Where required, testing is performed on physical Apple devices rather than relying only on simulators."
  }
]

const testFlightValidation = [
  {
    title: "Internal Testing",
    desc: "Early builds can be reviewed by your internal team before broader testing begins."
  },
  {
    title: "External Beta Testing",
    desc: "Selected testers can evaluate real workflows, device behavior, usability, and edge cases before launch."
  },
  {
    title: "Feedback & Revision",
    desc: "Testing feedback is reviewed, prioritized, and converted into required fixes or approved changes."
  },
  {
    title: "Release Readiness",
    desc: "The final build is checked against the agreed feature scope and release requirements before production submission."
  }
]

const testingStages = [
  {
    title: "Functional Testing",
    desc: "We verify authentication, navigation, forms, business rules, user flows, notifications, and core application behavior."
  },
  {
    title: "Device Testing",
    desc: "Supported iPhone and iPad configurations are tested according to the agreed device and iOS version scope."
  },
  {
    title: "Integration Testing",
    desc: "We test APIs, payments, authentication services, maps, notifications, analytics, and other connected systems."
  },
  {
    title: "Performance Testing",
    desc: "We review loading states, API behavior, memory-sensitive screens, and common performance issues."
  },
  {
    title: "Regression Testing",
    desc: "After major fixes or feature updates, affected workflows are tested again to reduce release-related problems."
  },
  {
    title: "Pre-Release Testing",
    desc: "The application is reviewed against the agreed scope before the production build is prepared."
  }
]

const appStoreRelease = [
  {
    title: "Production Build & Signing",
    desc: "We prepare the release build and work through the required signing, certificates, and provisioning configuration."
  },
  {
    title: "App Store Connect Setup",
    desc: "We assist with app configuration, build management, metadata, screenshots, and other required release information."
  },
  {
    title: "TestFlight & Release Tracks",
    desc: "Pre-release builds can be distributed through TestFlight before moving to the production release."
  },
  {
    title: "App Store Submission",
    desc: "We prepare the production build and submission workflow based on the agreed release scope."
  },
  {
    title: "Review Support",
    desc: "Apple reviews apps and updates submitted to the App Store. We help address technical or submission changes within the agreed project scope."
  },
  {
    title: "Release Handoff",
    desc: "After launch, you receive the relevant project files, documentation, and release information needed for ongoing management."
  }
]

const portingMigration = [
  {
    title: "Existing iOS App Modernization",
    desc: "We can review older iOS applications and update architecture, dependencies, interface components, supported iOS versions, or technical functionality."
  },
  {
    title: "UIKit to SwiftUI Transition",
    desc: "Where appropriate, parts of an existing application can be modernized with SwiftUI without requiring an unnecessary full rewrite."
  },
  {
    title: "Legacy Code & Dependency Review",
    desc: "We identify outdated libraries, technical debt, unstable integrations, and areas that may create future maintenance problems."
  },
  {
    title: "Android-to-iOS Development",
    desc: "When you already have an Android product, we can use the existing business logic and workflows as a reference while creating a proper iOS experience."
  },
  {
    title: "Feature Migration",
    desc: "Existing accounts, integrations, data workflows, and product functionality can be reviewed for reuse, redesign, or replacement during migration."
  }
]

const deliverables = [
  {
    category: "Product & UX",
    desc: "Requirements, user flows, wireframes, interface design, prototypes, and iOS-specific interaction patterns."
  },
  {
    category: "iOS Application",
    desc: "A production-ready iOS application built around the approved features, workflows, and supported devices."
  },
  {
    category: "Backend & Integrations",
    desc: "Required APIs, backend connections, authentication, payments, notifications, analytics, and third-party integrations."
  },
  {
    category: "Testing & Release",
    desc: "QA testing, release builds, TestFlight support, App Store submission assistance, and launch preparation."
  },
  {
    category: "Handoff & Documentation",
    desc: "Source code, project files, technical documentation, access handover where applicable, and release information."
  }
]

const whyChooseUs = [
  {
    title: "One In-House Team",
    desc: "Strategy, UI/UX, development, integrations, testing, and launch stay within one team instead of being divided between multiple vendors."
  },
  {
    title: "Built for iOS",
    desc: "We design around iOS interaction patterns and Apple platform requirements instead of treating iOS as a resized version of another platform."
  },
  {
    title: "Platform-Neutral Advice",
    desc: "We recommend native, cross-platform, or another approach based on your product, users, timeline, and budget."
  },
  {
    title: "Business-First Development",
    desc: "We begin with what the application needs to achieve. Then we decide what should be built and how it should work."
  },
  {
    title: "Clear Scope & Review",
    desc: "You review important requirements, designs, builds, and release stages before the project moves forward."
  },
  {
    title: "Long-Term Partnership",
    desc: "After launch, we can continue supporting bug fixes, platform updates, feature enhancements, and ongoing technical maintenance."
  }
]

const portfolioFramework = [
  {
    title: "Project Overview",
    desc: "Explain the product, target users, business model, and platforms involved."
  },
  {
    title: "Business Challenge",
    desc: "Describe the problem the application needed to solve before development began."
  },
  {
    title: "Product & Technical Solution",
    desc: "Show the important features, integrations, architecture, and iOS-specific decisions used in the project."
  },
  {
    title: "Development & Release",
    desc: "Explain how the application moved from planning and design through development, testing, and release."
  },
  {
    title: "Measurable Outcome",
    desc: "Use verified results such as launch status, user adoption, conversion changes, operational improvements, or other client-approved metrics."
  }
]

export default function Offerings() {
  return (
    <section id="offerings" className="border-t-2 border-frame-border bg-frame-bg px-4 py-20 md:px-8 md:py-32 scroll-mt-20">
      <div className="mx-auto max-w-[95vw]">

        {/* SECTION 1: OUR IOS APP DEVELOPMENT SERVICES */}
        <div>
          <SectionIntro
            eyebrow="Specialized iOS Engineering"
            title="Our iOS App Development Services"
          >
            We build iOS applications around your business model, users, technical requirements, and long-term goals.
          </SectionIntro>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {iosServices.map((svc, i) => (
              <div
                key={i}
                className="flex flex-col justify-between border-2 border-frame-border bg-frame-bg p-6 md:p-8 hover:border-frame-accent transition-colors"
              >
                <div>
                  <span className="text-xs font-black uppercase tracking-[0.24em] text-frame-accent">
                    Service 0{i + 1}
                  </span>
                  <h3 className="mt-3 font-heading text-xl md:text-2xl font-bold uppercase tracking-tight text-frame-fg">
                    {svc.title}
                  </h3>
                  <p className="mt-4 text-sm font-medium leading-relaxed text-frame-muted-fg">
                    {svc.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* SECTION 2: IOS APPS WE BUILD */}
        <div className="mt-28">
          <SectionIntro
            eyebrow="Targeted Solutions"
            title="iOS Apps We Build"
          >
            We develop iOS apps around the way your customers, employees, or business processes actually work.
          </SectionIntro>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {appsWeBuild.map((app, i) => (
              <div
                key={i}
                className="border-2 border-frame-border bg-frame-bg p-6 transition-colors hover:border-frame-accent"
              >
                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-frame-accent">
                  Solution 0{i + 1}
                </span>
                <h3 className="mt-2 font-heading text-lg font-bold uppercase text-frame-fg">
                  {app.title}
                </h3>
                <p className="mt-3 text-xs md:text-sm font-medium leading-relaxed text-frame-muted-fg">
                  {app.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* SECTION 3: WHY YOUR BUSINESS NEEDS A REAL IOS DEVELOPMENT PARTNER */}
        <div className="mt-28 border-2 border-frame-border bg-frame-bg p-6 md:p-12">
          <div className="mb-8">
            <span className="text-xs font-black uppercase tracking-[0.28em] text-frame-accent">
              Platform Engineering Reality
            </span>
            <h2 className="mt-2 font-heading text-2xl md:text-4xl font-bold uppercase tracking-tight text-frame-fg">
              Why Your Business Needs a Real iOS Development Partner
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {whyRealPartner.map((reason, i) => (
              <div
                key={i}
                className="border-2 border-frame-border bg-frame-muted/10 p-6 transition-colors hover:border-frame-accent"
              >
                <span className="text-xs font-black uppercase tracking-[0.2em] text-frame-accent">
                  Factor 0{i + 1}
                </span>
                <h3 className="mt-2 font-heading text-lg font-bold uppercase text-frame-fg">
                  {reason.title}
                </h3>
                <p className="mt-3 text-xs md:text-sm font-medium leading-relaxed text-frame-muted-fg">
                  {reason.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* SECTION 4: IOS APP FEATURES & APPLE INTEGRATIONS */}
        <div className="mt-28">
          <SectionIntro
            eyebrow="Apple Ecosystem Features"
            title="iOS App Features &amp; Apple Integrations"
          >
            Your iOS app can use native Apple capabilities when they improve the user experience or support an important business workflow.
          </SectionIntro>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {featuresAndIntegrations.map((feat, i) => (
              <div
                key={i}
                className="border-2 border-frame-border bg-frame-bg p-6 transition-colors hover:border-frame-accent"
              >
                <span className="text-xs font-black uppercase tracking-[0.2em] text-frame-accent">
                  Integration 0{i + 1}
                </span>
                <h3 className="mt-2 font-heading text-lg font-bold uppercase text-frame-fg">
                  {feat.title}
                </h3>
                <p className="mt-3 text-xs md:text-sm font-medium leading-relaxed text-frame-muted-fg">
                  {feat.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* SECTION 5: NATIVE IOS DEVELOPMENT WITH SWIFT & SWIFTUI */}
        <div className="mt-28 border-2 border-frame-border bg-frame-bg p-6 md:p-12">
          <div className="mb-8">
            <span className="text-xs font-black uppercase tracking-[0.28em] text-frame-accent">
              Platform Native
            </span>
            <h2 className="mt-2 font-heading text-2xl md:text-4xl font-bold uppercase tracking-tight text-frame-fg">
              Native iOS Development With Swift &amp; SwiftUI
            </h2>
            <p className="mt-3 max-w-3xl text-sm md:text-base font-medium leading-relaxed text-frame-muted-fg">
              We build native iOS applications with Swift and use SwiftUI, UIKit, or both depending on the product requirements.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {swiftSwiftUiPoints.map((item, i) => (
              <div
                key={i}
                className="border-2 border-frame-border bg-frame-muted/10 p-6 transition-colors hover:border-frame-accent"
              >
                <span className="text-xs font-black uppercase tracking-[0.2em] text-frame-accent">
                  Pillar 0{i + 1}
                </span>
                <h3 className="mt-2 font-heading text-lg font-bold uppercase text-frame-fg">
                  {item.title}
                </h3>
                <p className="mt-3 text-xs md:text-sm font-medium leading-relaxed text-frame-muted-fg">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* SECTION 6: APPLE ECOSYSTEM APP DEVELOPMENT */}
        <div className="mt-28 border-2 border-frame-border bg-frame-bg p-6 md:p-12">
          <div className="mb-8">
            <span className="text-xs font-black uppercase tracking-[0.28em] text-frame-accent">
              Multi-Device Apple Suite
            </span>
            <h2 className="mt-2 font-heading text-2xl md:text-4xl font-bold uppercase tracking-tight text-frame-fg">
              Apple Ecosystem App Development
            </h2>
            <p className="mt-3 max-w-3xl text-sm md:text-base font-medium leading-relaxed text-frame-muted-fg">
              Your product may need more than an iPhone app. We define the Apple-platform scope around your users and the way your product will be used.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {appleEcosystem.map((item, i) => (
              <div
                key={i}
                className="border-2 border-frame-border bg-frame-muted/10 p-6 transition-colors hover:border-frame-accent"
              >
                <span className="text-xs font-black uppercase tracking-[0.2em] text-frame-accent">
                  Platform 0{i + 1}
                </span>
                <h3 className="mt-2 font-heading text-lg font-bold uppercase text-frame-fg">
                  {item.title}
                </h3>
                <p className="mt-3 text-xs md:text-sm font-medium leading-relaxed text-frame-muted-fg">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* SECTION 7: IOS TECHNOLOGY STACK */}
        <div className="mt-28 border-2 border-frame-border bg-frame-bg p-6 md:p-12">
          <div className="mb-8">
            <span className="text-xs font-black uppercase tracking-[0.28em] text-frame-accent">
              Engineering Foundations
            </span>
            <h2 className="mt-2 font-heading text-2xl md:text-4xl font-bold uppercase tracking-tight text-frame-fg">
              iOS Technology Stack
            </h2>
            <p className="mt-3 max-w-3xl text-sm md:text-base font-medium leading-relaxed text-frame-muted-fg">
              We choose the technology stack around your application&apos;s requirements, existing systems, supported devices, and long-term maintenance needs.
            </p>
          </div>

          <div className="overflow-x-auto border-2 border-frame-border">
            <table className="w-full text-left text-sm">
              <thead className="border-b-2 border-frame-border bg-frame-muted/50 font-heading text-xs uppercase tracking-wider text-frame-fg">
                <tr>
                  <th className="p-4 border-r-2 border-frame-border w-1/4">Layer</th>
                  <th className="p-4">Technologies</th>
                </tr>
              </thead>
              <tbody className="divide-y-2 divide-frame-border text-frame-muted-fg">
                {techStack.map((row, rIdx) => (
                  <tr key={rIdx} className="hover:bg-frame-muted/20 transition-colors">
                    <td className="p-4 font-semibold text-frame-fg border-r-2 border-frame-border">
                      {row.layer}
                    </td>
                    <td className="p-4 font-medium text-frame-accent">
                      {row.tech}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-6 border-t-2 border-frame-border/60 pt-4">
            <p className="text-sm font-medium leading-relaxed text-frame-muted-fg">
              The final stack depends on the application rather than following a fixed technology list.
            </p>
          </div>
        </div>

        {/* SECTION 8: PRODUCT STRATEGY & ARCHITECTURE */}
        <div className="mt-28 border-2 border-frame-border bg-frame-bg p-6 md:p-12">
          <div className="mb-8">
            <span className="text-xs font-black uppercase tracking-[0.28em] text-frame-accent">
              Blueprint &amp; Scoping
            </span>
            <h2 className="mt-2 font-heading text-2xl md:text-4xl font-bold uppercase tracking-tight text-frame-fg">
              Product Strategy &amp; Architecture
            </h2>
            <p className="mt-3 max-w-3xl text-sm md:text-base font-medium leading-relaxed text-frame-muted-fg">
              A successful iOS app starts with decisions made before development begins.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {strategyArchitecture.map((item, i) => (
              <div
                key={i}
                className="border-2 border-frame-border bg-frame-muted/10 p-6 transition-colors hover:border-frame-accent"
              >
                <span className="text-xs font-black uppercase tracking-[0.2em] text-frame-accent">
                  Pillar 0{i + 1}
                </span>
                <h3 className="mt-2 font-heading text-lg font-bold uppercase text-frame-fg">
                  {item.title}
                </h3>
                <p className="mt-3 text-xs md:text-sm font-medium leading-relaxed text-frame-muted-fg">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* SECTION 9: IOS APP ARCHITECTURE & CODE QUALITY */}
        <div className="mt-28 border-2 border-frame-border bg-frame-bg p-6 md:p-12">
          <div className="mb-8">
            <span className="text-xs font-black uppercase tracking-[0.28em] text-frame-accent">
              Codebase Standards
            </span>
            <h2 className="mt-2 font-heading text-2xl md:text-4xl font-bold uppercase tracking-tight text-frame-fg">
              iOS App Architecture &amp; Code Quality
            </h2>
            <p className="mt-3 max-w-3xl text-sm md:text-base font-medium leading-relaxed text-frame-muted-fg">
              Good iOS development is not only about how the application looks. The underlying code should remain understandable as the product grows.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {codeQuality.map((item, i) => (
              <div
                key={i}
                className="border-2 border-frame-border bg-frame-muted/10 p-6 transition-colors hover:border-frame-accent"
              >
                <span className="text-xs font-black uppercase tracking-[0.2em] text-frame-accent">
                  Standard 0{i + 1}
                </span>
                <h3 className="mt-2 font-heading text-lg font-bold uppercase text-frame-fg">
                  {item.title}
                </h3>
                <p className="mt-3 text-xs md:text-sm font-medium leading-relaxed text-frame-muted-fg">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* SECTION 10: UI/UX DESIGN FOR IOS */}
        <div className="mt-28 border-2 border-frame-border bg-frame-bg p-6 md:p-12">
          <div className="mb-8">
            <span className="text-xs font-black uppercase tracking-[0.28em] text-frame-accent">
              Native Experience
            </span>
            <h2 className="mt-2 font-heading text-2xl md:text-4xl font-bold uppercase tracking-tight text-frame-fg">
              UI/UX Design for iOS
            </h2>
            <p className="mt-3 max-w-3xl text-sm md:text-base font-medium leading-relaxed text-frame-muted-fg">
              We design your application around how iOS users move through tasks, screens, and actions.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {uiUxPoints.map((item, i) => (
              <div
                key={i}
                className="border-2 border-frame-border bg-frame-muted/10 p-6 transition-colors hover:border-frame-accent"
              >
                <span className="text-xs font-black uppercase tracking-[0.2em] text-frame-accent">
                  UX Focus 0{i + 1}
                </span>
                <h3 className="mt-2 font-heading text-lg font-bold uppercase text-frame-fg">
                  {item.title}
                </h3>
                <p className="mt-3 text-xs md:text-sm font-medium leading-relaxed text-frame-muted-fg">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* SECTION 11: IOS SECURITY, PRIVACY & PERMISSIONS */}
        <div className="mt-28">
          <SectionIntro
            eyebrow="Privacy By Design"
            title="iOS Security, Privacy &amp; Permissions"
          >
            Security decisions should be considered during product development, not added as a final checklist.
          </SectionIntro>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {securityPillars.map((sec, i) => (
              <div
                key={i}
                className="border-2 border-frame-border bg-frame-bg p-6 transition-colors hover:border-frame-accent"
              >
                <span className="text-xs font-black uppercase tracking-[0.2em] text-frame-accent">
                  Security Protocol 0{i + 1}
                </span>
                <h3 className="mt-2 font-heading text-lg font-bold uppercase text-frame-fg">
                  {sec.title}
                </h3>
                <p className="mt-3 text-xs md:text-sm font-medium leading-relaxed text-frame-muted-fg">
                  {sec.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* SECTION 12: IOS ACCESSIBILITY & LOCALIZATION */}
        <div className="mt-28 border-2 border-frame-border bg-frame-bg p-6 md:p-12">
          <div className="mb-8">
            <span className="text-xs font-black uppercase tracking-[0.28em] text-frame-accent">
              Inclusive Design
            </span>
            <h2 className="mt-2 font-heading text-2xl md:text-4xl font-bold uppercase tracking-tight text-frame-fg">
              iOS Accessibility &amp; Localization
            </h2>
            <p className="mt-3 max-w-3xl text-sm md:text-base font-medium leading-relaxed text-frame-muted-fg">
              Your app should remain usable across different users, languages, devices, and accessibility needs.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {accessibilityLocalization.map((item, i) => (
              <div
                key={i}
                className="border-2 border-frame-border bg-frame-muted/10 p-6 transition-colors hover:border-frame-accent"
              >
                <span className="text-xs font-black uppercase tracking-[0.2em] text-frame-accent">
                  Accessibility 0{i + 1}
                </span>
                <h3 className="mt-2 font-heading text-lg font-bold uppercase text-frame-fg">
                  {item.title}
                </h3>
                <p className="mt-3 text-xs md:text-sm font-medium leading-relaxed text-frame-muted-fg">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* SECTION 13: IOS PERFORMANCE & DEVICE COMPATIBILITY */}
        <div className="mt-28">
          <SectionIntro
            eyebrow="Device Optimization"
            title="iOS Performance &amp; Device Compatibility"
          >
            An application needs to work well outside a controlled development environment.
          </SectionIntro>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {performanceCompatibility.map((item, i) => (
              <div
                key={i}
                className="border-2 border-frame-border bg-frame-bg p-6 transition-colors hover:border-frame-accent"
              >
                <span className="text-xs font-black uppercase tracking-[0.2em] text-frame-accent">
                  Compatibility 0{i + 1}
                </span>
                <h3 className="mt-2 font-heading text-lg font-bold uppercase text-frame-fg">
                  {item.title}
                </h3>
                <p className="mt-3 text-xs md:text-sm font-medium leading-relaxed text-frame-muted-fg">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* SECTION 14: TESTFLIGHT BETA TESTING & PRE-RELEASE VALIDATION */}
        <div className="mt-28 border-2 border-frame-border bg-frame-bg p-6 md:p-12">
          <div className="mb-8">
            <span className="text-xs font-black uppercase tracking-[0.28em] text-frame-accent">
              Beta Validation
            </span>
            <h2 className="mt-2 font-heading text-2xl md:text-4xl font-bold uppercase tracking-tight text-frame-fg">
              TestFlight Beta Testing &amp; Pre-Release Validation
            </h2>
            <p className="mt-3 max-w-3xl text-sm md:text-base font-medium leading-relaxed text-frame-muted-fg">
              Before public release, we can use TestFlight to validate the application with controlled testers.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {testFlightValidation.map((item, i) => (
              <div
                key={i}
                className="border-2 border-frame-border bg-frame-muted/10 p-6 transition-colors hover:border-frame-accent"
              >
                <span className="text-xs font-black uppercase tracking-[0.2em] text-frame-accent">
                  Stage 0{i + 1}
                </span>
                <h3 className="mt-2 font-heading text-lg font-bold uppercase text-frame-fg">
                  {item.title}
                </h3>
                <p className="mt-3 text-xs md:text-sm font-medium leading-relaxed text-frame-muted-fg">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* SECTION 15: IOS APP TESTING & QUALITY ASSURANCE */}
        <div className="mt-28">
          <SectionIntro
            eyebrow="Verification Matrix"
            title="iOS App Testing &amp; Quality Assurance"
          >
            Testing covers more than checking whether each button works.
          </SectionIntro>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {testingStages.map((stage, i) => (
              <div
                key={i}
                className="border-2 border-frame-border bg-frame-bg p-6 transition-colors hover:border-frame-accent"
              >
                <span className="text-xs font-black uppercase tracking-[0.2em] text-frame-accent">
                  QA Phase 0{i + 1}
                </span>
                <h3 className="mt-2 font-heading text-lg font-bold uppercase text-frame-fg">
                  {stage.title}
                </h3>
                <p className="mt-3 text-xs md:text-sm font-medium leading-relaxed text-frame-muted-fg">
                  {stage.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* SECTION 16: APP STORE CONNECT & IOS RELEASE SUPPORT */}
        <div className="mt-28 border-2 border-frame-border bg-frame-bg p-6 md:p-12">
          <div className="mb-8">
            <span className="text-xs font-black uppercase tracking-[0.28em] text-frame-accent">
              Store Publishing
            </span>
            <h2 className="mt-2 font-heading text-2xl md:text-4xl font-bold uppercase tracking-tight text-frame-fg">
              App Store Connect &amp; iOS Release Support
            </h2>
            <p className="mt-3 max-w-3xl text-sm md:text-base font-medium leading-relaxed text-frame-muted-fg">
              Launching an iOS app involves more than uploading a production file.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {appStoreRelease.map((step, i) => (
              <div
                key={i}
                className="border-2 border-frame-border bg-frame-muted/10 p-6 transition-colors hover:border-frame-accent"
              >
                <span className="text-xs font-black uppercase tracking-[0.2em] text-frame-accent">
                  Release Phase 0{i + 1}
                </span>
                <h3 className="mt-2 font-heading text-lg font-bold uppercase text-frame-fg">
                  {step.title}
                </h3>
                <p className="mt-3 text-xs md:text-sm font-medium leading-relaxed text-frame-muted-fg">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* SECTION 17: IOS APP PORTING & MIGRATION */}
        <div className="mt-28 border-2 border-frame-border bg-frame-bg p-6 md:p-12">
          <div className="mb-8">
            <span className="text-xs font-black uppercase tracking-[0.28em] text-frame-accent">
              Codebase Modernization
            </span>
            <h2 className="mt-2 font-heading text-2xl md:text-4xl font-bold uppercase tracking-tight text-frame-fg">
              iOS App Porting &amp; Migration
            </h2>
            <p className="mt-3 max-w-3xl text-sm md:text-base font-medium leading-relaxed text-frame-muted-fg">
              Already have an application? We can improve or extend the product you already built.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {portingMigration.map((item, i) => (
              <div
                key={i}
                className="border-2 border-frame-border bg-frame-muted/10 p-6 transition-colors hover:border-frame-accent"
              >
                <span className="text-xs font-black uppercase tracking-[0.2em] text-frame-accent">
                  Upgrade 0{i + 1}
                </span>
                <h3 className="mt-2 font-heading text-lg font-bold uppercase text-frame-fg">
                  {item.title}
                </h3>
                <p className="mt-3 text-xs md:text-sm font-medium leading-relaxed text-frame-muted-fg">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* SECTION 18: WHAT YOU RECEIVE FROM AN IOS DEVELOPMENT PROJECT */}
        <div className="mt-28">
          <SectionIntro
            eyebrow="Deliverables &amp; Handoff"
            title="What You Receive From an iOS Development Project"
          >
            Your final deliverables depend on the approved project scope, but a complete iOS engagement can include:
          </SectionIntro>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {deliverables.map((del, i) => (
              <div
                key={i}
                className="border-2 border-frame-border bg-frame-bg p-6 md:p-8 flex flex-col justify-between"
              >
                <div>
                  <span className="text-xs font-black uppercase tracking-[0.24em] text-frame-accent">
                    Package 0{i + 1}
                  </span>
                  <h3 className="mt-2 font-heading text-xl font-bold uppercase text-frame-fg">
                    {del.category}
                  </h3>
                  <p className="mt-4 text-sm font-medium leading-relaxed text-frame-muted-fg border-t border-frame-border/60 pt-4">
                    {del.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* SECTION 19: WHY CHOOSE FRAMECIPHER FOR IOS APP DEVELOPMENT */}
        <div className="mt-28 border-2 border-frame-border bg-frame-bg p-6 md:p-12">
          <div className="mb-8">
            <span className="text-xs font-black uppercase tracking-[0.28em] text-frame-accent">
              Agency Differentiators
            </span>
            <h2 className="mt-2 font-heading text-2xl md:text-4xl font-bold uppercase tracking-tight text-frame-fg">
              Why Choose Framecipher for iOS App Development
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {whyChooseUs.map((reason, i) => (
              <div
                key={i}
                className="border-2 border-frame-border bg-frame-muted/10 p-6 transition-colors hover:border-frame-accent"
              >
                <span className="text-xs font-black uppercase tracking-[0.2em] text-frame-accent">
                  Advantage 0{i + 1}
                </span>
                <h3 className="mt-2 font-heading text-lg font-bold uppercase text-frame-fg">
                  {reason.title}
                </h3>
                <p className="mt-3 text-xs md:text-sm font-medium leading-relaxed text-frame-muted-fg">
                  {reason.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* SECTION 20: IOS APP DEVELOPMENT PORTFOLIO & CASE STUDIES */}
        <div className="mt-28 border-2 border-frame-border bg-frame-bg p-6 md:p-12">
          <div className="mb-8">
            <span className="text-xs font-black uppercase tracking-[0.28em] text-frame-accent">
              Case Study Standards
            </span>
            <h2 className="mt-2 font-heading text-2xl md:text-4xl font-bold uppercase tracking-tight text-frame-fg">
              iOS App Development Portfolio &amp; Case Studies
            </h2>
            <p className="mt-3 max-w-3xl text-sm md:text-base font-medium leading-relaxed text-frame-muted-fg">
              Show what we have actually built rather than relying only on service descriptions.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {portfolioFramework.map((item, i) => (
              <div
                key={i}
                className="border-2 border-frame-border bg-frame-muted/10 p-6 transition-colors hover:border-frame-accent"
              >
                <span className="text-xs font-black uppercase tracking-[0.2em] text-frame-accent">
                  Element 0{i + 1}
                </span>
                <h3 className="mt-2 font-heading text-lg font-bold uppercase text-frame-fg">
                  {item.title}
                </h3>
                <p className="mt-3 text-xs md:text-sm font-medium leading-relaxed text-frame-muted-fg">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-6 border-t-2 border-frame-border/60 pt-4">
            <p className="text-xs md:text-sm font-semibold uppercase tracking-wider text-frame-accent">
              Only publish genuine Framecipher projects, screenshots, links, and verified results.
            </p>
          </div>
        </div>

        {/* SECTION 21: IOS APP DEVELOPMENT SERVICES ACROSS BANGLADESH & WORLDWIDE */}
        <div className="mt-28 border-2 border-frame-border bg-frame-muted/20 p-6 md:p-12">
          <span className="text-xs font-black uppercase tracking-[0.28em] text-frame-accent">
            Domestic &amp; Global Delivery
          </span>
          <h2 className="mt-2 font-heading text-2xl md:text-4xl font-bold uppercase tracking-tight text-frame-fg">
            iOS App Development Services Across Bangladesh &amp; Worldwide
          </h2>
          <div className="mt-6 max-w-4xl space-y-4 text-sm md:text-base font-medium leading-relaxed text-frame-muted-fg">
            <p>
              Framecipher provides iOS app development services from Dhaka, Bangladesh for businesses, startups, and organizations across Bangladesh and international markets.
            </p>
            <p>
              We work with clients based in Dhaka, Chattogram, Sylhet, Rajshahi, Khulna, Gazipur, Narayanganj, and other locations across Bangladesh.
            </p>
            <p>
              Our remote development workflow also supports businesses in the USA, UK, Australia, Canada, UAE, and other international markets.
            </p>
            <p className="font-semibold text-frame-fg">
              Whether you need an MVP, a customer-facing application, an internal business tool, or a larger digital product, we manage strategy, design, development, integration, testing, and release through one in-house team.
            </p>
          </div>
          <div className="mt-8">
            <PosterButton href="/contact">Start Your iOS App Project &rarr;</PosterButton>
          </div>
        </div>

      </div>
    </section>
  )
}
