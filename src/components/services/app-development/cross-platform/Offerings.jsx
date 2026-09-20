import Link from 'next/link'
import { SectionIntro, PosterButton } from '../../../Kinetic'

const coreServices = [
  {
    title: "Framework Strategy & Architecture",
    desc: "Before development starts, we assess your requirements and decide whether Flutter, React Native, native development, or a hybrid approach fits the product. We map shared business logic, platform-specific functionality, API needs, state management, data flow, and scalability requirements before coding begins."
  },
  {
    title: "UI/UX Design for Both Platforms",
    desc: "We design a consistent product experience while respecting the conventions users expect on Android and iOS. That includes user flows, adaptive layouts, platform-aware navigation, interaction states, prototypes, and interface systems that work across supported devices."
  },
  {
    title: "Cross-Platform Development - Flutter / React Native",
    desc: "We build the shared application layer with Flutter or React Native based on the needs of your project. Common business logic, application workflows, API communication, and reusable components can be shared, while platform-specific features can be handled through native modules."
  },
  {
    title: "Testing, Deployment & Dual Store Launch",
    desc: "We test Android and iOS independently instead of assuming one working build guarantees the other will behave the same way. The release process can include real-device testing, regression checks, TestFlight, Google Play testing, App Store Connect, Play Console, and production deployment."
  },
  {
    title: "Ongoing Support & Maintenance",
    desc: "After launch, we can continue supporting the application through bug fixes, framework updates, operating-system compatibility work, performance improvements, and new feature development."
  }
]

const appsWeBuild = [
  {
    title: "E-commerce & Retail Apps",
    desc: "Build mobile shopping experiences with product discovery, search, customer accounts, carts, checkout, payments, order tracking, and notifications."
  },
  {
    title: "Delivery & Logistics Apps",
    desc: "Connect customers, drivers, delivery teams, and operations through ordering, location tracking, route-related workflows, status updates, and notifications."
  },
  {
    title: "Booking & Service Apps",
    desc: "Manage appointments, reservations, scheduling, availability, service requests, reminders, and customer communication from mobile devices."
  },
  {
    title: "Marketplace & On-Demand Apps",
    desc: "Support customers, vendors, providers, and partners with profiles, listings, search, messaging, transactions, reviews, and service workflows."
  },
  {
    title: "Business & Internal Apps",
    desc: "Create staff, field-force, dealer, vendor, CRM, reporting, approval, and operational applications around your existing business processes."
  },
  {
    title: "FinTech & Payment Apps",
    desc: "Build transaction-focused experiences with authentication, account workflows, payment integrations, notifications, and financial data flows based on your product requirements."
  },
  {
    title: "Healthcare & Education Apps",
    desc: "Develop patient, wellness, learning, student, content, scheduling, tracking, and communication experiences for supported business models."
  },
  {
    title: "SaaS & Product Apps",
    desc: "Extend an existing SaaS platform, website, or digital service into a dedicated mobile experience connected to your existing backend and user accounts."
  }
]

const whyChooseCrossPlatform = [
  {
    title: "Reach Android & iOS From One Product Build",
    desc: "A shared codebase can allow common business logic and application features to be developed once and delivered across both platforms."
  },
  {
    title: "Faster Product Iteration",
    desc: "When a large portion of the application is shared, teams can coordinate feature development and updates across Android and iOS without duplicating every implementation."
  },
  {
    title: "Lower Duplicate Development Effort",
    desc: "Shared code can reduce repeated work across business logic, API integration, validation, and other common application components."
  },
  {
    title: "Consistent Product Experience",
    desc: "A shared foundation can help keep important business rules and core workflows aligned between Android and iOS."
  },
  {
    title: "Easier MVP Validation",
    desc: "For startups and growing businesses, launching on both platforms from a shared development approach can provide a practical way to validate the product with both audiences."
  }
]

const crossVsNativeTable = [
  { factor: "Code sharing", cross: "High for suitable application logic", native: "Separate platform codebases" },
  { factor: "Android + iOS", cross: "One coordinated development approach", native: "Separate implementations" },
  { factor: "Development effort", cross: "Can reduce duplicated work", native: "More platform-specific work" },
  { factor: "Platform-specific features", cross: "Supported with plugins or native modules", native: "Direct native access" },
  { factor: "UI approach", cross: "Shared foundation with platform-aware adjustments", native: "Fully platform-specific" },
  { factor: "Maintenance", cross: "Common code may simplify updates", native: "Separate platform maintenance" },
  { factor: "Best fit", cross: "Products with substantial shared logic", native: "Products needing deeper platform specialization" }
]

const flutterVsReactTable = [
  { factor: "Primary language", flutter: "Dart", react: "JavaScript / TypeScript" },
  { factor: "UI approach", flutter: "Flutter widgets and rendering", react: "React-based development with platform integration" },
  { factor: "Visual control", flutter: "Strong", react: "Strong with platform-aware implementation" },
  { factor: "Existing React ecosystem", flutter: "Limited relevance", react: "Major advantage" },
  { factor: "Native integration", flutter: "Native platform integration available", react: "Native modules and platform integration available" },
  { factor: "Strong fit", flutter: "Custom interfaces and controlled cross-platform experiences", react: "Products aligned with React or JavaScript/TypeScript" }
]

const featuresAndIntegrations = [
  {
    title: "User Accounts & Authentication",
    desc: "Support email and phone login, social sign-in, secure sessions, biometrics, account recovery, and role-based access."
  },
  {
    title: "User Roles & Permissions",
    desc: "Create different experiences for customers, employees, vendors, drivers, providers, managers, administrators, and other user types."
  },
  {
    title: "Payments & Transactions",
    desc: "Integrate supported payment gateways, subscriptions, checkout workflows, transaction records, and payment-related application logic."
  },
  {
    title: "Push Notifications",
    desc: "Configure push notifications for both Android and iOS using the appropriate platform services and event flows."
  },
  {
    title: "GPS, Maps & Location",
    desc: "Build location-aware experiences for delivery, booking, field operations, route tracking, nearby services, and other location-based products."
  },
  {
    title: "Camera & Media",
    desc: "Support camera access, image uploads, document capture, media selection, and other device-based content workflows."
  },
  {
    title: "Chat & Real-Time Features",
    desc: "Build messaging, live status updates, real-time notifications, and other connected functionality where the application requires it."
  },
  {
    title: "Analytics & Crash Monitoring",
    desc: "Connect analytics and crash-monitoring tools to understand application behavior and identify issues after release."
  },
  {
    title: "CRM, ERP & Business Systems",
    desc: "Connect your mobile application with existing CRM, ERP, inventory, accounting, customer support, or internal business systems."
  },
  {
    title: "Third-Party API Integration",
    desc: "Integrate external services for payments, maps, shipping, authentication, communication, analytics, and other required workflows."
  }
]

const architecturePillars = [
  {
    title: "Shared Application Logic",
    desc: "Common business rules, validation, models, workflows, and reusable application functionality can be structured for both platforms."
  },
  {
    title: "State Management",
    desc: "We organize application state so screens, sessions, data, and user actions remain predictable as the product grows."
  },
  {
    title: "API & Data Layer",
    desc: "Networking, authentication, models, API responses, local data, and error handling are structured separately from the interface where appropriate."
  },
  {
    title: "Local Storage",
    desc: "Applications that need local data can use suitable device storage for cached content, preferences, offline workflows, and temporary application state."
  },
  {
    title: "Modular Structure",
    desc: "Features can be organized into maintainable modules so the application remains easier to extend as the product becomes larger."
  },
  {
    title: "Scalable Backend Connection",
    desc: "The mobile architecture is planned around the backend it depends on, including authentication, APIs, file handling, notifications, business logic, and administrative workflows."
  }
]

const nativeModulePillars = [
  {
    title: "iOS Native Modules",
    desc: "Selected features can use native iOS technologies when deeper access to Apple APIs, device capabilities, or platform-specific behavior is required."
  },
  {
    title: "Android Native Modules",
    desc: "The same approach can be used for Android-specific functionality that requires direct access to Android APIs or device capabilities."
  },
  {
    title: "Device & Hardware Features",
    desc: "Camera, Bluetooth, biometrics, location, sensors, notifications, background functionality, and other device features may require platform-aware implementation."
  },
  {
    title: "Platform-Specific Business Logic",
    desc: "Some workflows may need different behavior on Android and iOS because the platforms expose different capabilities or follow different interaction patterns."
  },
  {
    title: "Native Where Needed, Shared Where Possible",
    desc: "Our goal is not maximum code sharing at any cost. We share what benefits from sharing and use native implementation when it produces a cleaner and more reliable product."
  }
]

const uiUxDesignPillars = [
  {
    title: "Platform-Aware Interface Design",
    desc: "We maintain a consistent brand experience while adapting navigation, controls, spacing, interactions, and interface patterns where Android and iOS differ."
  },
  {
    title: "User Flow Mapping",
    desc: "We map important user journeys before development so customers can complete key actions naturally on both platforms."
  },
  {
    title: "Adaptive Layouts",
    desc: "Interfaces are designed around supported device sizes rather than one fixed mobile layout."
  },
  {
    title: "Prototype & Usability Review",
    desc: "Important flows can be validated through prototypes and early device testing before development is finalized."
  }
]

const techStack = [
  { layer: "Cross-Platform", tech: "Flutter, React Native" },
  { layer: "Languages", tech: "Dart, JavaScript, TypeScript" },
  { layer: "Android", tech: "Android SDK, Kotlin for native modules" },
  { layer: "iOS", tech: "iOS SDK, Swift for native modules" },
  { layer: "UI", tech: "Flutter widgets, React Native, platform-specific UI" },
  { layer: "Networking", tech: "REST APIs, JSON, GraphQL where required" },
  { layer: "Backend", tech: "Node.js, PHP/Laravel, or existing client backend" },
  { layer: "Database", tech: "MySQL, PostgreSQL, Firebase, SQLite/local storage" },
  { layer: "Services", tech: "Firebase, push notifications, analytics, crash monitoring" },
  { layer: "Development", tech: "Xcode, Android Studio, Git" },
  { layer: "Testing", tech: "Unit, integration, UI, device, regression testing" },
  { layer: "Release", tech: "TestFlight, App Store Connect, Google Play Console" }
]

const securityPillars = [
  {
    title: "Secure Authentication",
    desc: "Implement suitable authentication, session handling, account recovery, and access control based on application requirements."
  },
  {
    title: "Role-Based Authorization",
    desc: "Different users should only access the data and features assigned to their roles."
  },
  {
    title: "API Security",
    desc: "We account for authentication, authorization, validation, secure communication, and appropriate backend controls."
  },
  {
    title: "Secure Data Storage",
    desc: "Sensitive information is handled using suitable storage and transmission practices for the product."
  },
  {
    title: "Payment Security",
    desc: "Payment workflows are implemented around the selected provider and its required security model without storing unnecessary sensitive payment information inside the application."
  },
  {
    title: "Permission Management",
    desc: "Camera, location, notifications, contacts, Bluetooth, and other permissions are requested based on actual feature requirements."
  },
  {
    title: "Dependency Maintenance",
    desc: "Frameworks, plugins, packages, and dependencies need ongoing review as the application evolves and platform versions change."
  }
]

const accessibilityLocalization = [
  {
    title: "Accessible Navigation",
    desc: "We consider clear navigation, readable content, suitable touch targets, and screen-reader-friendly structures where required."
  },
  {
    title: "Text Scaling & Contrast",
    desc: "Interfaces can be designed to remain usable when users increase text size or need stronger visual contrast."
  },
  {
    title: "Bangla & English Support",
    desc: "For Bangladesh-focused products, interfaces can be prepared for both Bangla and English users."
  },
  {
    title: "Multilingual Interfaces",
    desc: "Additional languages can be planned into the design and development structure for international products."
  }
]

const offlineConditions = [
  {
    title: "Offline Data Access",
    desc: "Applications can store suitable information locally when users need to continue working without a reliable connection."
  },
  {
    title: "Sync & Recovery",
    desc: "Offline changes can be synchronized when connectivity returns, based on the product's data rules."
  },
  {
    title: "Retry Handling",
    desc: "Network requests can be designed to recover from temporary failures rather than leaving users with incomplete workflows."
  },
  {
    title: "Slow Network Support",
    desc: "Loading states, retries, caching, timeouts, and clear feedback can help maintain usability under weaker network conditions."
  },
  {
    title: "Conflict Handling",
    desc: "For products where multiple users can change the same information, synchronization rules should define how conflicting changes are handled."
  }
]

const performanceCompatibility = [
  {
    title: "Android Device Compatibility",
    desc: "We account for the supported Android versions, screen sizes, hardware differences, and agreed device range."
  },
  {
    title: "iPhone & iPad Compatibility",
    desc: "Supported Apple devices and operating-system versions are considered throughout development and testing."
  },
  {
    title: "App Startup & Rendering",
    desc: "We review launch behavior, screen rendering, animations, data-heavy views, and other performance-sensitive areas."
  },
  {
    title: "Memory & Resource Usage",
    desc: "Resource-heavy workflows and performance-sensitive screens are reviewed to reduce unnecessary device strain."
  },
  {
    title: "API & Network Performance",
    desc: "We review API response handling, loading states, caching, timeouts, and network-dependent workflows."
  },
  {
    title: "Real-Device Validation",
    desc: "Where required, testing includes physical Android and Apple devices rather than relying only on emulators and simulators."
  }
]

const testingStages = [
  {
    title: "Functional Testing",
    desc: "We verify authentication, navigation, forms, business rules, user flows, notifications, and core features."
  },
  {
    title: "Android Testing",
    desc: "Supported Android devices, versions, screen sizes, permissions, and platform-specific behavior are tested within the agreed scope."
  },
  {
    title: "iOS Testing",
    desc: "Supported Apple devices, iOS versions, permissions, navigation patterns, and platform-specific behavior are tested independently."
  },
  {
    title: "Integration Testing",
    desc: "We test APIs, payment systems, authentication, maps, notifications, analytics, and third-party services."
  },
  {
    title: "Performance Testing",
    desc: "We review loading, rendering, memory-sensitive workflows, API behavior, and other important application performance areas."
  },
  {
    title: "Network Testing",
    desc: "Slow connections, temporary service failures, interrupted requests, and recovery behavior are tested where relevant."
  },
  {
    title: "Regression Testing",
    desc: "After important changes, affected workflows are tested again before release."
  },
  {
    title: "Release Validation",
    desc: "Both platform builds are reviewed against the approved scope before submission."
  }
]

const dualStoreDeployment = [
  {
    title: "iOS Release Preparation",
    desc: "We prepare the iOS build, signing configuration, App Store Connect information, and TestFlight workflow within the agreed scope."
  },
  {
    title: "Android Release Preparation",
    desc: "We prepare the Android production build, signing configuration, Play Console information, testing track, and release workflow."
  },
  {
    title: "TestFlight Beta Testing",
    desc: "iOS builds can be distributed through TestFlight for controlled pre-release testing and feedback."
  },
  {
    title: "Google Play Testing",
    desc: "Android builds can be validated through appropriate Play testing tracks before production release."
  },
  {
    title: "Store Submission",
    desc: "We prepare the application and relevant release information for both platforms based on the approved project scope."
  },
  {
    title: "Release Handoff",
    desc: "After deployment, project files, documentation, and relevant release information are handed over for ongoing management."
  }
]

const migrationModernization = [
  {
    title: "Native Android to Cross-Platform",
    desc: "Existing Android applications can be evaluated for migration when a shared Android and iOS architecture better supports the future roadmap."
  },
  {
    title: "Native iOS to Cross-Platform",
    desc: "Existing iOS products can be assessed for shared-code development while retaining native implementation for features that need it."
  },
  {
    title: "React Native Migration",
    desc: "Older React Native applications can be reviewed for dependency updates, architecture improvements, performance work, and framework modernization."
  },
  {
    title: "Flutter Modernization",
    desc: "Existing Flutter applications can be reviewed for outdated packages, maintainability, architecture issues, and performance concerns."
  },
  {
    title: "Legacy Dependency Review",
    desc: "We identify outdated libraries, unstable integrations, technical debt, and dependencies that may create future compatibility problems."
  },
  {
    title: "Feature & Data Migration",
    desc: "Existing business logic, APIs, user accounts, workflows, and data requirements can be mapped into the new architecture according to the migration scope."
  }
]

const deliverables = [
  {
    category: "Strategy & Architecture",
    desc: "Requirements, framework recommendation, technical architecture, shared-vs-native decisions, and project planning."
  },
  {
    category: "UI/UX",
    desc: "Platform-aware user flows, interface design, prototypes, adaptive layouts, and approved design assets."
  },
  {
    category: "Cross-Platform Application",
    desc: "Flutter or React Native development with shared application logic and native modules where required."
  },
  {
    category: "Backend & Integrations",
    desc: "API connections, authentication, payment services, notifications, analytics, business systems, and other agreed integrations."
  },
  {
    category: "Testing & Release",
    desc: "Android and iOS testing, production builds, TestFlight support, Google Play testing, and store submission assistance."
  },
  {
    category: "Handoff & Documentation",
    desc: "Source code, project files, technical documentation, access handover where applicable, and relevant release information."
  }
]

const whyChooseUs = [
  {
    title: "One In-House Team",
    desc: "Strategy, design, development, integrations, testing, and release stay within one coordinated team."
  },
  {
    title: "Framework Chosen for Fit",
    desc: "We do not sell one framework to every client. We evaluate Flutter, React Native, native development, or a hybrid approach around your actual requirements."
  },
  {
    title: "Shared Where It Makes Sense",
    desc: "We use shared code where it improves development and maintenance without forcing platform-specific functionality into awkward workarounds."
  },
  {
    title: "Built for Both Platforms",
    desc: "Android and iOS are tested independently because a working build on one platform does not automatically guarantee the same result on the other."
  },
  {
    title: "Business-First Development",
    desc: "We start with the product goals, users, workflows, and technical requirements before deciding how the application should be built."
  },
  {
    title: "Clear Review Points",
    desc: "Important requirements, designs, builds, and release milestones are reviewed with you before the next stage begins."
  },
  {
    title: "Long-Term Support",
    desc: "The same team can continue with bug fixes, framework updates, platform changes, performance work, and new feature development after launch."
  }
]


export default function Offerings() {
  return (
    <section id="offerings" className="border-t-2 border-frame-border bg-frame-bg px-4 py-20 md:px-8 md:py-32 scroll-mt-20">
      <div className="mx-auto max-w-[95vw]">

        {/* SECTION 1: OUR CROSS-PLATFORM APP DEVELOPMENT SERVICES */}
        <div>
          <SectionIntro
            eyebrow="End-To-End Delivery"
            title="Our Cross-Platform App Development Services"
          >
            We build cross-platform applications around your product goals, users, integrations, and long-term roadmap.
          </SectionIntro>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {coreServices.map((svc, i) => (
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

        {/* SECTION 2: CROSS-PLATFORM APPS WE BUILD */}
        <div className="mt-28">
          <SectionIntro
            eyebrow="Targeted Solutions"
            title="Cross-Platform Apps We Build"
          >
            We develop cross-platform apps for customer-facing products, internal business systems, marketplaces, and connected digital services.
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

        {/* SECTION 3: WHY CHOOSE CROSS-PLATFORM APP DEVELOPMENT? */}
        <div className="mt-28 border-2 border-frame-border bg-frame-bg p-6 md:p-12">
          <div className="mb-8">
            <span className="text-xs font-black uppercase tracking-[0.28em] text-frame-accent">
              Unified Advantage
            </span>
            <h2 className="mt-2 font-heading text-2xl md:text-4xl font-bold uppercase tracking-tight text-frame-fg">
              Why Choose Cross-Platform App Development?
            </h2>
            <p className="mt-3 max-w-3xl text-sm md:text-base font-medium leading-relaxed text-frame-muted-fg">
              Cross-platform development works well when your Android and iOS products share substantial functionality and you want a coordinated approach to development and maintenance.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {whyChooseCrossPlatform.map((reason, i) => (
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

          <div className="mt-8 border-t-2 border-frame-border pt-6">
            <h3 className="font-heading text-lg font-bold uppercase text-frame-accent">
              When Cross-Platform May Not Be the Right Fit
            </h3>
            <p className="mt-2 text-sm md:text-base font-medium leading-relaxed text-frame-muted-fg">
              Cross-platform is not automatically the right choice for every product. Apps that rely heavily on specialized hardware, advanced graphics, deeply platform-specific behavior, or highly customized native experiences may benefit more from native development. The right decision depends on the product, not the framework.
            </p>
          </div>
        </div>

        {/* SECTION 4: CROSS-PLATFORM VS NATIVE APP DEVELOPMENT */}
        <div className="mt-28 border-2 border-frame-border bg-frame-bg p-6 md:p-12">
          <div className="mb-8">
            <span className="text-xs font-black uppercase tracking-[0.28em] text-frame-accent">
              Architecture Comparison
            </span>
            <h2 className="mt-2 font-heading text-2xl md:text-4xl font-bold uppercase tracking-tight text-frame-fg">
              Cross-Platform vs Native App Development
            </h2>
            <p className="mt-3 max-w-3xl text-sm md:text-base font-medium leading-relaxed text-frame-muted-fg">
              The right development model depends on your feature set, platform requirements, budget, timeline, and long-term roadmap.
            </p>
          </div>

          <div className="overflow-x-auto border-2 border-frame-border">
            <table className="w-full text-left text-sm">
              <thead className="border-b-2 border-frame-border bg-frame-muted/50 font-heading text-xs uppercase tracking-wider text-frame-fg">
                <tr>
                  <th className="p-4 border-r-2 border-frame-border">Factor</th>
                  <th className="p-4 border-r-2 border-frame-border">Cross-Platform</th>
                  <th className="p-4">Native</th>
                </tr>
              </thead>
              <tbody className="divide-y-2 divide-frame-border text-frame-muted-fg">
                {crossVsNativeTable.map((row, rIdx) => (
                  <tr key={rIdx} className="hover:bg-frame-muted/20 transition-colors">
                    <td className="p-4 font-semibold text-frame-fg border-r-2 border-frame-border">
                      {row.factor}
                    </td>
                    <td className="p-4 font-medium text-frame-accent border-r-2 border-frame-border">
                      {row.cross}
                    </td>
                    <td className="p-4 font-medium text-frame-fg">
                      {row.native}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            <div className="border-2 border-frame-border bg-frame-muted/10 p-6">
              <h4 className="font-heading text-base font-bold uppercase text-frame-fg">
                When Cross-Platform Makes Sense
              </h4>
              <p className="mt-2 text-xs md:text-sm font-medium leading-relaxed text-frame-muted-fg">
                Cross-platform is often a practical fit when you need both Android and iOS, share substantial business logic, have a controlled feature set, and want a coordinated development approach.
              </p>
            </div>

            <div className="border-2 border-frame-border bg-frame-muted/10 p-6">
              <h4 className="font-heading text-base font-bold uppercase text-frame-fg">
                When Native Development Makes More Sense
              </h4>
              <p className="mt-2 text-xs md:text-sm font-medium leading-relaxed text-frame-muted-fg">
                Native development can be more suitable when your application depends heavily on platform-specific APIs, specialized hardware, advanced graphics, or highly customized platform behavior.
              </p>
            </div>

            <div className="border-2 border-frame-border bg-frame-muted/10 p-6">
              <h4 className="font-heading text-base font-bold uppercase text-frame-fg">
                Cost, Timeline &amp; Maintenance
              </h4>
              <p className="mt-2 text-xs md:text-sm font-medium leading-relaxed text-frame-muted-fg">
                Cross-platform development can reduce duplicated implementation when large parts of the application can be shared. However, total cost still depends on architecture, native modules, backend systems, design complexity, integrations, testing, and ongoing support.
              </p>
            </div>

            <div className="border-2 border-frame-border bg-frame-muted/10 p-6">
              <h4 className="font-heading text-base font-bold uppercase text-frame-fg">
                Performance &amp; Platform-Specific Features
              </h4>
              <p className="mt-2 text-xs md:text-sm font-medium leading-relaxed text-frame-muted-fg">
                Cross-platform applications can provide strong performance for many business and consumer products. Performance-sensitive or deeply platform-specific features may still require native code to deliver the right result.
              </p>
            </div>

            <div className="border-2 border-frame-border bg-frame-muted/10 p-6">
              <h4 className="font-heading text-base font-bold uppercase text-frame-fg">
                Hybrid Development: Shared + Native
              </h4>
              <p className="mt-2 text-xs md:text-sm font-medium leading-relaxed text-frame-muted-fg">
                A hybrid approach can use shared cross-platform code for the majority of the application while implementing selected features with native iOS or Android technologies.
              </p>
            </div>

            <div className="border-2 border-frame-border bg-frame-muted/10 p-6">
              <h4 className="font-heading text-base font-bold uppercase text-frame-fg">
                How We Choose the Right Approach
              </h4>
              <p className="mt-2 text-xs md:text-sm font-medium leading-relaxed text-frame-muted-fg">
                We review your target users, features, integrations, device requirements, roadmap, timeline, and budget before recommending a development approach.
              </p>
            </div>
          </div>
        </div>

        {/* SECTION 5: FLUTTER VS REACT NATIVE: WHICH SHOULD YOU CHOOSE? */}
        <div className="mt-28 border-2 border-frame-border bg-frame-bg p-6 md:p-12">
          <div className="mb-8">
            <span className="text-xs font-black uppercase tracking-[0.28em] text-frame-accent">
              Framework Evaluation
            </span>
            <h2 className="mt-2 font-heading text-2xl md:text-4xl font-bold uppercase tracking-tight text-frame-fg">
              Flutter vs React Native: Which Should You Choose?
            </h2>
            <p className="mt-3 max-w-3xl text-sm md:text-base font-medium leading-relaxed text-frame-muted-fg">
              Flutter and React Native can both support serious Android and iOS applications. The right choice depends on your product and technical context.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 mb-8">
            <div className="border-2 border-frame-border bg-frame-muted/10 p-6">
              <h3 className="font-heading text-lg font-bold uppercase text-frame-fg">
                Flutter App Development
              </h3>
              <p className="mt-3 text-sm font-medium leading-relaxed text-frame-muted-fg">
                Flutter can be a strong fit for products that need a highly controlled interface, reusable components, and a consistent cross-platform visual system. It can work particularly well when the application has substantial custom UI requirements and the project is being designed around a fresh cross-platform architecture.
              </p>
            </div>

            <div className="border-2 border-frame-border bg-frame-muted/10 p-6">
              <h3 className="font-heading text-lg font-bold uppercase text-frame-fg">
                React Native App Development
              </h3>
              <p className="mt-3 text-sm font-medium leading-relaxed text-frame-muted-fg">
                React Native can be a strong fit for products that benefit from the JavaScript or TypeScript ecosystem, existing React knowledge, or an established React-based technology environment. It can also be practical when a product or internal team already works heavily with the broader React ecosystem.
              </p>
            </div>
          </div>

          <div className="overflow-x-auto border-2 border-frame-border">
            <table className="w-full text-left text-sm">
              <thead className="border-b-2 border-frame-border bg-frame-muted/50 font-heading text-xs uppercase tracking-wider text-frame-fg">
                <tr>
                  <th className="p-4 border-r-2 border-frame-border">Factor</th>
                  <th className="p-4 border-r-2 border-frame-border">Flutter</th>
                  <th className="p-4">React Native</th>
                </tr>
              </thead>
              <tbody className="divide-y-2 divide-frame-border text-frame-muted-fg">
                {flutterVsReactTable.map((row, rIdx) => (
                  <tr key={rIdx} className="hover:bg-frame-muted/20 transition-colors">
                    <td className="p-4 font-semibold text-frame-fg border-r-2 border-frame-border">
                      {row.factor}
                    </td>
                    <td className="p-4 font-medium text-frame-accent border-r-2 border-frame-border">
                      {row.flutter}
                    </td>
                    <td className="p-4 font-medium text-frame-fg">
                      {row.react}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-6 border-t-2 border-frame-border/60 pt-4 space-y-2">
            <p className="text-sm font-semibold italic text-frame-fg">
              Which Framework Fits Your Product? The decision depends on your UI requirements, existing systems, development team, integrations, performance needs, and future product direction.
            </p>
            <p className="text-sm font-medium leading-relaxed text-frame-muted-fg">
              What We Recommend Based on Your Requirements: We do not force every client into the same framework. We recommend Flutter, React Native, native development, or a hybrid model based on what your application actually needs.
            </p>
          </div>
        </div>

        {/* SECTION 6: CROSS-PLATFORM APP FEATURES & INTEGRATIONS */}
        <div className="mt-28">
          <SectionIntro
            eyebrow="Capabilities &amp; APIs"
            title="Cross-Platform App Features &amp; Integrations"
          >
            We build the application around the workflows, users, and integrations required by your business.
          </SectionIntro>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
            {featuresAndIntegrations.map((feat, i) => (
              <div
                key={i}
                className="border-2 border-frame-border bg-frame-bg p-6 transition-colors hover:border-frame-accent"
              >
                <span className="text-xs font-black uppercase tracking-[0.2em] text-frame-accent">
                  Module 0{i + 1}
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

        {/* SECTION 7: CROSS-PLATFORM APP ARCHITECTURE */}
        <div className="mt-28 border-2 border-frame-border bg-frame-bg p-6 md:p-12">
          <div className="mb-8">
            <span className="text-xs font-black uppercase tracking-[0.28em] text-frame-accent">
              Systems Design
            </span>
            <h2 className="mt-2 font-heading text-2xl md:text-4xl font-bold uppercase tracking-tight text-frame-fg">
              Cross-Platform App Architecture
            </h2>
            <p className="mt-3 max-w-3xl text-sm md:text-base font-medium leading-relaxed text-frame-muted-fg">
              A reliable cross-platform application should share the right code without forcing every feature into the same implementation.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {architecturePillars.map((item, i) => (
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

        {/* SECTION 8: SHARED CODE & NATIVE MODULE INTEGRATION */}
        <div className="mt-28 border-2 border-frame-border bg-frame-bg p-6 md:p-12">
          <div className="mb-8">
            <span className="text-xs font-black uppercase tracking-[0.28em] text-frame-accent">
              Hybrid Native Bridges
            </span>
            <h2 className="mt-2 font-heading text-2xl md:text-4xl font-bold uppercase tracking-tight text-frame-fg">
              Shared Code &amp; Native Module Integration
            </h2>
            <p className="mt-3 max-w-3xl text-sm md:text-base font-medium leading-relaxed text-frame-muted-fg">
              Cross-platform does not mean every part of the application must be identical on both operating systems.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {nativeModulePillars.map((item, i) => (
              <div
                key={i}
                className="border-2 border-frame-border bg-frame-muted/10 p-6 transition-colors hover:border-frame-accent"
              >
                <span className="text-xs font-black uppercase tracking-[0.2em] text-frame-accent">
                  Module 0{i + 1}
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

        {/* SECTION 9: PLATFORM-AWARE UI/UX DESIGN */}
        <div className="mt-28 border-2 border-frame-border bg-frame-bg p-6 md:p-12">
          <div className="mb-8">
            <span className="text-xs font-black uppercase tracking-[0.28em] text-frame-accent">
              Adaptive Design
            </span>
            <h2 className="mt-2 font-heading text-2xl md:text-4xl font-bold uppercase tracking-tight text-frame-fg">
              Platform-Aware UI/UX Design
            </h2>
            <p className="mt-3 max-w-3xl text-sm md:text-base font-medium leading-relaxed text-frame-muted-fg">
              A shared application foundation does not require an identical interface on every platform.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {uiUxDesignPillars.map((item, i) => (
              <div
                key={i}
                className="border-2 border-frame-border bg-frame-muted/10 p-6 transition-colors hover:border-frame-accent"
              >
                <span className="text-xs font-black uppercase tracking-[0.2em] text-frame-accent">
                  Design Element 0{i + 1}
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

        {/* SECTION 10: CROSS-PLATFORM APP TECHNOLOGY STACK */}
        <div className="mt-28 border-2 border-frame-border bg-frame-bg p-6 md:p-12">
          <div className="mb-8">
            <span className="text-xs font-black uppercase tracking-[0.28em] text-frame-accent">
              Engineering Stack
            </span>
            <h2 className="mt-2 font-heading text-2xl md:text-4xl font-bold uppercase tracking-tight text-frame-fg">
              Cross-Platform App Technology Stack
            </h2>
            <p className="mt-3 max-w-3xl text-sm md:text-base font-medium leading-relaxed text-frame-muted-fg">
              We choose technologies based on the application rather than forcing every project into one fixed stack.
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
              The final stack depends on the product, existing systems, project scope, and long-term maintenance requirements.
            </p>
          </div>
        </div>

        {/* SECTION 11: CROSS-PLATFORM APP SECURITY & DATA PROTECTION */}
        <div className="mt-28">
          <SectionIntro
            eyebrow="Security &amp; Privacy"
            title="Cross-Platform App Security &amp; Data Protection"
          >
            Security needs to be considered as part of architecture and application development.
          </SectionIntro>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
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

        {/* SECTION 12: ACCESSIBILITY & LOCALIZATION FOR CROSS-PLATFORM APPS */}
        <div className="mt-28 border-2 border-frame-border bg-frame-bg p-6 md:p-12">
          <div className="mb-8">
            <span className="text-xs font-black uppercase tracking-[0.28em] text-frame-accent">
              Inclusive Reach
            </span>
            <h2 className="mt-2 font-heading text-2xl md:text-4xl font-bold uppercase tracking-tight text-frame-fg">
              Accessibility &amp; Localization for Cross-Platform Apps
            </h2>
            <p className="mt-3 max-w-3xl text-sm md:text-base font-medium leading-relaxed text-frame-muted-fg">
              A cross-platform application should work across different users, devices, and markets.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {accessibilityLocalization.map((item, i) => (
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
        </div>

        {/* SECTION 13: OFFLINE FUNCTIONALITY & REAL-WORLD APP CONDITIONS */}
        <div className="mt-28">
          <SectionIntro
            eyebrow="Network Resilience"
            title="Offline Functionality &amp; Real-World App Conditions"
          >
            Mobile users may not always have a fast or stable internet connection.
          </SectionIntro>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {offlineConditions.map((cond, i) => (
              <div
                key={i}
                className="border-2 border-frame-border bg-frame-bg p-6 transition-colors hover:border-frame-accent"
              >
                <span className="text-xs font-black uppercase tracking-[0.2em] text-frame-accent">
                  Condition 0{i + 1}
                </span>
                <h3 className="mt-2 font-heading text-lg font-bold uppercase text-frame-fg">
                  {cond.title}
                </h3>
                <p className="mt-3 text-xs md:text-sm font-medium leading-relaxed text-frame-muted-fg">
                  {cond.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* SECTION 14: CROSS-PLATFORM PERFORMANCE & DEVICE COMPATIBILITY */}
        <div className="mt-28">
          <SectionIntro
            eyebrow="Hardware Optimization"
            title="Cross-Platform Performance &amp; Device Compatibility"
          >
            A cross-platform application still runs across different devices, operating systems, screen sizes, and hardware conditions.
          </SectionIntro>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {performanceCompatibility.map((item, i) => (
              <div
                key={i}
                className="border-2 border-frame-border bg-frame-bg p-6 transition-colors hover:border-frame-accent"
              >
                <span className="text-xs font-black uppercase tracking-[0.2em] text-frame-accent">
                  Optimization 0{i + 1}
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

        {/* SECTION 15: CROSS-PLATFORM APP TESTING & QUALITY ASSURANCE */}
        <div className="mt-28">
          <SectionIntro
            eyebrow="Quality Assurance"
            title="Cross-Platform App Testing &amp; Quality Assurance"
          >
            Shared code does not guarantee identical behavior across both platforms.
          </SectionIntro>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
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

        {/* SECTION 16: APP STORE & GOOGLE PLAY DEPLOYMENT */}
        <div className="mt-28 border-2 border-frame-border bg-frame-bg p-6 md:p-12">
          <div className="mb-8">
            <span className="text-xs font-black uppercase tracking-[0.28em] text-frame-accent">
              Dual Store Release
            </span>
            <h2 className="mt-2 font-heading text-2xl md:text-4xl font-bold uppercase tracking-tight text-frame-fg">
              App Store &amp; Google Play Deployment
            </h2>
            <p className="mt-3 max-w-3xl text-sm md:text-base font-medium leading-relaxed text-frame-muted-fg">
              A cross-platform application still has two separate store-release processes.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {dualStoreDeployment.map((step, i) => (
              <div
                key={i}
                className="border-2 border-frame-border bg-frame-muted/10 p-6 transition-colors hover:border-frame-accent"
              >
                <span className="text-xs font-black uppercase tracking-[0.2em] text-frame-accent">
                  Release Step 0{i + 1}
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

        {/* SECTION 17: CROSS-PLATFORM APP MIGRATION & MODERNIZATION */}
        <div className="mt-28 border-2 border-frame-border bg-frame-bg p-6 md:p-12">
          <div className="mb-8">
            <span className="text-xs font-black uppercase tracking-[0.28em] text-frame-accent">
              Codebase Evolution
            </span>
            <h2 className="mt-2 font-heading text-2xl md:text-4xl font-bold uppercase tracking-tight text-frame-fg">
              Cross-Platform App Migration &amp; Modernization
            </h2>
            <p className="mt-3 max-w-3xl text-sm md:text-base font-medium leading-relaxed text-frame-muted-fg">
              Already have an application? We can review the existing product before deciding whether migration or modernization is the right move.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {migrationModernization.map((item, i) => (
              <div
                key={i}
                className="border-2 border-frame-border bg-frame-muted/10 p-6 transition-colors hover:border-frame-accent"
              >
                <span className="text-xs font-black uppercase tracking-[0.2em] text-frame-accent">
                  Modernization 0{i + 1}
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

        {/* SECTION 18: WHAT YOU RECEIVE FROM A CROSS-PLATFORM DEVELOPMENT PROJECT */}
        <div className="mt-28">
          <SectionIntro
            eyebrow="Deliverables &amp; Handoff"
            title="What You Receive From a Cross-Platform Development Project"
          >
            Your final deliverables depend on the approved scope, but a complete engagement can include:
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

        {/* SECTION 19: WHY CHOOSE FRAMECIPHER FOR CROSS-PLATFORM APP DEVELOPMENT */}
        <div className="mt-28 border-2 border-frame-border bg-frame-bg p-6 md:p-12">
          <div className="mb-8">
            <span className="text-xs font-black uppercase tracking-[0.28em] text-frame-accent">
              Agency Differentiators
            </span>
            <h2 className="mt-2 font-heading text-2xl md:text-4xl font-bold uppercase tracking-tight text-frame-fg">
              Why Choose Framecipher for Cross-Platform App Development
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
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


        {/* SECTION 21: CROSS-PLATFORM APP DEVELOPMENT SERVICES ACROSS BANGLADESH & WORLDWIDE */}
        <div className="mt-28 border-2 border-frame-border bg-frame-muted/20 p-6 md:p-12">
          <span className="text-xs font-black uppercase tracking-[0.28em] text-frame-accent">
            Domestic &amp; Global Reach
          </span>
          <h2 className="mt-2 font-heading text-2xl md:text-4xl font-bold uppercase tracking-tight text-frame-fg">
            Cross-Platform App Development Services Across Bangladesh &amp; Worldwide
          </h2>
          <div className="mt-6 max-w-4xl space-y-4 text-sm md:text-base font-medium leading-relaxed text-frame-muted-fg">
            <p>
              Framecipher provides cross-platform app development services from Dhaka, Bangladesh for businesses, startups, and organizations across Bangladesh and international markets.
            </p>
            <p>
              We work with businesses in Dhaka, Chattogram, Sylhet, Rajshahi, Khulna, Gazipur, Narayanganj, and other locations across Bangladesh.
            </p>
            <p>
              Our remote workflow also supports clients in the USA, UK, Australia, Canada, UAE, and other international markets.
            </p>
            <p className="font-semibold text-frame-fg">
              Whether you need an MVP, customer-facing app, internal business system, marketplace, or larger digital product, we manage strategy, design, development, integration, testing, and release through one in-house team.
            </p>
          </div>
          <div className="mt-8">
            <PosterButton href="/contact">Start Your Cross-Platform App Project &rarr;</PosterButton>
          </div>
        </div>

      </div>
    </section>
  )
}
