import Link from 'next/link'
import { SectionIntro, PosterButton } from '../../../Kinetic'

const androidServices = [
  {
    title: "Product Strategy & Architecture",
    desc: "We define the core functionality, user requirements, technical structure, supported devices, and future roadmap before development begins."
  },
  {
    title: "UI/UX Design for Android",
    desc: "We design user flows, interfaces, interactions, and responsive layouts around Android conventions and the actual tasks users need to complete."
  },
  {
    title: "Native Android Development",
    desc: "We build native Android applications in Kotlin with direct access to Android platform capabilities."
  },
  {
    title: "API & Backend Integration",
    desc: "We connect the Android app with custom backends, APIs, databases, payment systems, CRMs, and other required services."
  },
  {
    title: "Testing & Quality Assurance",
    desc: "We test important features, integrations, supported devices, Android versions, and performance conditions before release."
  },
  {
    title: "Google Play Launch",
    desc: "We prepare the production build and support the Google Play submission and release process where included."
  },
  {
    title: "Post-Launch Support",
    desc: "We can continue with bug fixes, OS compatibility updates, dependency maintenance, performance improvements, and new feature development after launch."
  }
]

const appsWeBuild = [
  {
    title: "Ecommerce & Retail Apps",
    desc: "Android shopping apps for product discovery, categories, search, cart, checkout, payments, order tracking, accounts, and customer communication."
  },
  {
    title: "Delivery & Logistics Apps",
    desc: "Applications for customers, drivers, dispatch teams, order tracking, location services, delivery status, and operational workflows."
  },
  {
    title: "Booking & Service Apps",
    desc: "Apps for appointments, reservations, schedules, availability, reminders, service selection, and customer management."
  },
  {
    title: "Business & Internal Apps",
    desc: "Custom tools for staff workflows, inventory, reporting, approvals, field operations, CRM processes, and internal coordination."
  },
  {
    title: "Marketplace & On-Demand Apps",
    desc: "Multi-user applications connecting customers with sellers, service providers, professionals, drivers, or other participant groups."
  },
  {
    title: "Customer & Companion Apps",
    desc: "Dedicated Android experiences for customer accounts, service management, subscriptions, support, notifications, and connected business platforms."
  },
  {
    title: "SaaS & Product Apps",
    desc: "Android applications that extend a SaaS or web product with mobile access to dashboards, workflows, notifications, approvals, and account features."
  },
  {
    title: "Enterprise Android Apps",
    desc: "Custom applications for organizations with complex permissions, operational workflows, integrations, and security requirements."
  }
]

const whyRealPartner = [
  {
    title: "Device Diversity Needs Planning",
    desc: "Android products can run across different screen sizes, hardware configurations, memory levels, and operating-system versions. Your supported environment should be defined during planning rather than discovered after launch."
  },
  {
    title: "Performance Affects Usability",
    desc: "Slow startup, heavy screens, excessive network requests, and inefficient background processing can create a poor user experience even when the application technically works."
  },
  {
    title: "Platform Features Need Native Consideration",
    desc: "Apps that depend on GPS, camera, notifications, biometrics, background tasks, Bluetooth, or other Android capabilities may need platform-specific implementation."
  },
  {
    title: "Errors Need Proper Handling",
    desc: "Network failures, API errors, expired sessions, payment interruptions, and unavailable services can break important workflows. The application should have clear loading, error, fallback, and recovery states."
  },
  {
    title: "Android Apps Need Long-Term Maintenance",
    desc: "Android versions, dependencies, devices, and connected services change over time. A maintainable application makes future updates and feature development easier."
  }
]

const featuresAndIntegrations = [
  {
    title: "User Accounts & Authentication",
    desc: "Signup, login, password recovery, profiles, session management, social authentication, and role-based access where required."
  },
  {
    title: "Firebase & Push Notifications",
    desc: "Firebase services can support authentication, cloud messaging, analytics, crash reporting, and other application requirements where appropriate."
  },
  {
    title: "Payments & Subscriptions",
    desc: "Payment gateways, transaction workflows, recurring billing, refunds, and subscription features based on the selected provider."
  },
  {
    title: "Maps, GPS & Location",
    desc: "Maps, location services, delivery tracking, address selection, distance calculations, and location-based functionality."
  },
  {
    title: "Camera & Device Features",
    desc: "Camera access, media selection, biometric authentication, file handling, Bluetooth, and other Android device capabilities where required."
  },
  {
    title: "Offline Storage & Synchronization",
    desc: "Local storage and synchronization for applications that need useful functionality during limited or unstable connectivity."
  },
  {
    title: "Admin Dashboards",
    desc: "Interfaces for managing users, products, orders, content, reports, transactions, permissions, and settings."
  },
  {
    title: "Analytics & Crash Monitoring",
    desc: "Event tracking, usage information, performance monitoring, and crash reporting where included in the project."
  },
  {
    title: "Third-Party Integrations",
    desc: "Connections with CRMs, payment providers, external APIs, communication services, business software, and other required systems."
  }
]

const nativeKotlinPoints = [
  {
    title: "Kotlin Development",
    desc: "Modern native Android development focused on maintainability, platform compatibility, and the application's actual requirements."
  },
  {
    title: "Android SDK Integration",
    desc: "Using Android platform APIs and services directly for the features and behaviors your application requires."
  },
  {
    title: "Local Data & Offline Support",
    desc: "Supporting local persistence, caching, and synchronization where the product requires offline or low-connectivity workflows."
  },
  {
    title: "Push Notification Setup",
    desc: "Integrating Firebase Cloud Messaging and related notification workflows where applicable."
  },
  {
    title: "Background Processing",
    desc: "Supporting background tasks and scheduled work where the application's functionality requires them."
  },
  {
    title: "Device & Hardware Integration",
    desc: "Working with relevant Android features such as camera, GPS, biometrics, Bluetooth, media, and other supported device capabilities."
  }
]

const techStack = [
  {
    area: "Core Android",
    details: "Kotlin • Android SDK • Android Jetpack"
  },
  {
    area: "UI Development",
    details: "Jetpack Compose and Android interface components, where appropriate for the project."
  },
  {
    area: "Local Data",
    details: "Room and other suitable Android storage approaches where local persistence is required."
  },
  {
    area: "APIs & Networking",
    details: "REST APIs and appropriate networking tools for communication between the Android application and backend systems."
  },
  {
    area: "Firebase & Cloud Services",
    details: "Firebase services where authentication, notifications, analytics, crash reporting, or related capabilities are required."
  },
  {
    area: "Location & Device Services",
    details: "Google Maps and Android device APIs where location or hardware functionality is part of the product."
  }
]

const strategyArchitecture = [
  {
    title: "Requirements & Feature Planning",
    desc: "We identify the core features, user roles, key workflows, and functionality required for the initial release."
  },
  {
    title: "Device & OS Targeting",
    desc: "We define the Android versions, device categories, screen sizes, and other compatibility requirements relevant to the target users."
  },
  {
    title: "Data & API Planning",
    desc: "We determine what data the application needs, where it comes from, and how the Android client communicates with backend systems."
  },
  {
    title: "Scalability Planning",
    desc: "The architecture is planned around the expected product roadmap so future features can be added without unnecessarily restructuring the application."
  }
]

const codeQuality = [
  {
    title: "Clear Separation of Responsibilities",
    desc: "Keeping interface, business logic, data access, and external services organized so changes remain easier to manage."
  },
  {
    title: "Modern Android Architecture",
    desc: "Using established Android patterns such as MVVM where appropriate for the product and development requirements."
  },
  {
    title: "Reusable Components",
    desc: "Creating reusable code and interface components where practical to reduce duplication and support consistency."
  },
  {
    title: "API & Data Layers",
    desc: "Separating network communication, local storage, and business logic for a more predictable application structure."
  },
  {
    title: "Dependency Management",
    desc: "Keeping frameworks, libraries, and dependencies organized and maintained throughout development."
  },
  {
    title: "Testing & Code Review",
    desc: "Using appropriate testing and review practices to identify problems early and support long-term maintainability."
  }
]

const uiUxPoints = [
  {
    title: "User Flow Mapping",
    desc: "We structure navigation and important tasks before visual design begins."
  },
  {
    title: "Material Design",
    desc: "We use Android interface conventions and Material Design principles where they improve consistency and usability."
  },
  {
    title: "Adaptive Layouts",
    desc: "We design for the screen sizes, orientations, and device categories relevant to the application's target audience."
  },
  {
    title: "Interaction & State Design",
    desc: "We plan loading, empty, error, success, disabled, and other important interface states."
  },
  {
    title: "Prototype & Usability Testing",
    desc: "Where included, we validate important flows before development so usability issues can be identified earlier."
  }
]

const securityPillars = [
  {
    title: "Secure Authentication",
    desc: "Protecting account access through suitable authentication and authorization methods."
  },
  {
    title: "Role-Based Access",
    desc: "Controlling what customers, staff, administrators, and other users can view or modify."
  },
  {
    title: "Secure API Communication",
    desc: "Protecting information exchanged between the application, backend, and connected services."
  },
  {
    title: "Data Protection",
    desc: "Handling sensitive customer and business information according to the application's requirements."
  },
  {
    title: "Dependency Maintenance",
    desc: "Keeping relevant libraries, frameworks, and platform components maintained to reduce avoidable security and compatibility risks."
  },
  {
    title: "Secure Payment Workflows",
    desc: "Using appropriate payment-provider integrations and following the required transaction flow."
  }
]

const realWorldConditions = [
  {
    title: "Device & Screen Compatibility",
    desc: "Testing relevant device categories and screen sizes instead of relying on one reference phone."
  },
  {
    title: "Android Version Support",
    desc: "Defining the supported Android range during planning and testing against the required versions."
  },
  {
    title: "Low-Bandwidth Conditions",
    desc: "Considering loading, retry, timeout, caching, and synchronization behavior for limited connectivity."
  },
  {
    title: "Offline Workflows",
    desc: "Supporting local data and synchronization where the application needs useful functionality without a constant connection."
  },
  {
    title: "Performance Constraints",
    desc: "Considering startup time, memory usage, network requests, media size, and other factors that affect responsiveness."
  },
  {
    title: "API & Service Failures",
    desc: "Planning appropriate loading, fallback, error, and recovery states when connected services do not respond as expected."
  }
]

const testingStages = [
  {
    title: "Functional Testing",
    desc: "Checking important features and workflows against the approved requirements."
  },
  {
    title: "Device & OS Testing",
    desc: "Testing relevant device types, screen sizes, and supported Android versions."
  },
  {
    title: "Performance Testing",
    desc: "Reviewing loading behavior, responsiveness, API interactions, and other performance concerns."
  },
  {
    title: "Integration Testing",
    desc: "Testing APIs, payments, Firebase services, maps, notifications, authentication, and other connected systems."
  },
  {
    title: "Regression Testing",
    desc: "Rechecking previously completed functionality after major changes or new development."
  },
  {
    title: "Pre-Release Testing",
    desc: "Performing final checks on the production-ready build before Google Play submission."
  },
  {
    title: "Crash Monitoring",
    desc: "Setting up appropriate crash and issue reporting where included in the project scope."
  }
]

const playStoreRelease = [
  {
    title: "Production Build Preparation",
    desc: "Preparing the release build and configuration required for production."
  },
  {
    title: "App Signing & Release Configuration",
    desc: "Supporting the required signing and release configuration for the Android application where included."
  },
  {
    title: "Play Console Support",
    desc: "Assisting with the relevant Google Play Console release workflow and configuration."
  },
  {
    title: "Store Listing Support",
    desc: "Supporting app information, screenshots, descriptions, categories, and other required materials where included."
  },
  {
    title: "Testing & Release Tracks",
    desc: "Supporting appropriate testing or release-track workflows when required by the project."
  },
  {
    title: "Production Submission",
    desc: "Preparing and submitting the application for production release."
  },
  {
    title: "Review Feedback",
    desc: "If Google requests technical or product changes during review, we can help identify the required updates for resubmission."
  }
]

const modernizationItems = [
  "Legacy Android codebase modernization",
  "Java-to-Kotlin migration where appropriate",
  "Android version compatibility updates",
  "Outdated dependency replacement",
  "Architecture improvements",
  "UI/UX modernization",
  "Performance optimization",
  "Security improvements",
  "API and backend updates",
  "New feature development",
  "Third-party integration updates"
]

const deliverables = [
  {
    category: "Product & UX",
    items: [
      "User flows",
      "Wireframes",
      "Android UI/UX designs",
      "Interactive prototypes where required",
      "Design system or reusable components where scoped"
    ]
  },
  {
    category: "Android Application",
    items: [
      "Production-ready Android application",
      "Native Kotlin source code",
      "Configured features",
      "Supported platform functionality",
      "Required integrations"
    ]
  },
  {
    category: "Backend & APIs",
    items: [
      "API connections",
      "Backend services where scoped",
      "Database integration",
      "Authentication",
      "Required third-party integrations"
    ]
  },
  {
    category: "Testing & Release",
    items: [
      "Tested Android build",
      "Production configuration",
      "Release-ready package",
      "Google Play submission support where included"
    ]
  },
  {
    category: "Handoff & Documentation",
    items: [
      "Source code",
      "Design files where applicable",
      "Technical documentation",
      "Deployment information",
      "Relevant access and account documentation"
    ]
  }
]

const whyChooseUs = [
  {
    title: "One In-House Team",
    desc: "Strategy, design, development, testing, and deployment stay connected rather than being divided between unrelated contractors."
  },
  {
    title: "Built for Android, Not Simply Ported to It",
    desc: "We consider Android platform conventions, device diversity, supported versions, and native capabilities from the beginning."
  },
  {
    title: "Platform-Neutral Advice",
    desc: "Although this page focuses on Android, we can also advise when cross-platform development or another technical approach makes more sense for your wider product."
  },
  {
    title: "Development-Aware UI/UX",
    desc: "Our design decisions consider responsive behavior, interaction states, implementation requirements, and Android-specific conventions."
  },
  {
    title: "Transparent Review Process",
    desc: "Key stages can include review and approval checkpoints so you remain involved throughout the project."
  },
  {
    title: "Full-Cycle Support",
    desc: "We can support the product from discovery and architecture through development, testing, Google Play release, and post-launch improvements."
  }
]


export default function Offerings() {
  return (
    <section id="offerings" className="border-t-2 border-frame-border bg-frame-bg px-4 py-20 md:px-8 md:py-32 scroll-mt-20">
      <div className="mx-auto max-w-[95vw]">

        {/* SECTION 1: OUR ANDROID APP DEVELOPMENT SERVICES */}
        <div>
          <SectionIntro
            eyebrow="Core Specialization"
            title="Our Android App Development Services"
          >
            We provide end-to-end Android development from product planning and UI/UX through native development, testing, deployment, and post-launch support.
          </SectionIntro>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {androidServices.map((svc, i) => (
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

        {/* SECTION 2: ANDROID APPS WE BUILD */}
        <div className="mt-28">
          <SectionIntro
            eyebrow="Targeted Solutions"
            title="Android Apps We Build"
          >
            Different Android products require different user flows, features, and technical approaches. We build around the business use case rather than applying the same application structure to every project.
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

        {/* SECTION 3: WHY YOUR BUSINESS NEEDS A REAL ANDROID PARTNER */}
        <div className="mt-28 border-2 border-frame-border bg-frame-bg p-6 md:p-12">
          <div className="mb-8">
            <span className="text-xs font-black uppercase tracking-[0.28em] text-frame-accent">
              Engineering Reliability
            </span>
            <h2 className="mt-2 font-heading text-2xl md:text-4xl font-bold uppercase tracking-tight text-frame-fg">
              Why Your Business Needs a Real Android Development Partner
            </h2>
            <p className="mt-3 max-w-3xl text-sm md:text-base font-medium leading-relaxed text-frame-muted-fg">
              Android applications need more than functional code. They need to work across the devices, operating systems, network conditions, and user environments relevant to the product.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
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

          <div className="mt-8 border-t-2 border-frame-border pt-6">
            <p className="text-sm md:text-base font-semibold italic text-frame-fg">
              A strong Android development process considers what happens after the app works on the developer&apos;s device.
            </p>
          </div>
        </div>

        {/* SECTION 4: ANDROID APP FEATURES & INTEGRATIONS */}
        <div className="mt-28">
          <SectionIntro
            eyebrow="Capabilities & Modules"
            title="Android App Features &amp; Integrations"
          >
            The exact functionality depends on the application, but we can build and integrate common Android capabilities required by modern business and consumer products.
          </SectionIntro>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
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

        {/* SECTION 5: NATIVE ANDROID DEVELOPMENT WITH KOTLIN */}
        <div className="mt-28 border-2 border-frame-border bg-frame-bg p-6 md:p-12">
          <div className="mb-8">
            <span className="text-xs font-black uppercase tracking-[0.28em] text-frame-accent">
              Platform Native
            </span>
            <h2 className="mt-2 font-heading text-2xl md:text-4xl font-bold uppercase tracking-tight text-frame-fg">
              Native Android Development With Kotlin
            </h2>
            <p className="mt-3 max-w-3xl text-sm md:text-base font-medium leading-relaxed text-frame-muted-fg">
              We build native Android applications in Kotlin when the project requires direct access to Android capabilities, platform-specific behavior, or tighter control over the Android experience.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {nativeKotlinPoints.map((item, i) => (
              <div
                key={i}
                className="border-2 border-frame-border bg-frame-muted/10 p-6 transition-colors hover:border-frame-accent"
              >
                <span className="text-xs font-black uppercase tracking-[0.2em] text-frame-accent">
                  Capability 0{i + 1}
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
            <p className="text-sm font-semibold italic text-frame-fg">
              Native development gives the application direct access to Android capabilities rather than relying on a shared abstraction for every platform feature.
            </p>
          </div>
        </div>

        {/* SECTION 6: ANDROID TECHNOLOGY STACK */}
        <div className="mt-28 border-2 border-frame-border bg-frame-bg p-6 md:p-12">
          <div className="mb-8">
            <span className="text-xs font-black uppercase tracking-[0.28em] text-frame-accent">
              Engineering Stack
            </span>
            <h2 className="mt-2 font-heading text-2xl md:text-4xl font-bold uppercase tracking-tight text-frame-fg">
              Android Technology Stack
            </h2>
            <p className="mt-3 max-w-3xl text-sm md:text-base font-medium leading-relaxed text-frame-muted-fg">
              We choose the technology stack based on the application&apos;s requirements, supported devices, maintainability, and long-term roadmap.
            </p>
          </div>

          <div className="overflow-x-auto border-2 border-frame-border">
            <table className="w-full text-left text-sm">
              <thead className="border-b-2 border-frame-border bg-frame-muted/50 font-heading text-xs uppercase tracking-wider text-frame-fg">
                <tr>
                  <th className="p-4 border-r-2 border-frame-border w-1/3">Layer / Area</th>
                  <th className="p-4 w-2/3">Technologies &amp; Frameworks</th>
                </tr>
              </thead>
              <tbody className="divide-y-2 divide-frame-border text-frame-muted-fg">
                {techStack.map((row, rIdx) => (
                  <tr key={rIdx} className="hover:bg-frame-muted/20 transition-colors">
                    <td className="p-4 font-semibold text-frame-fg border-r-2 border-frame-border">
                      {row.area}
                    </td>
                    <td className="p-4 font-medium text-frame-accent">
                      {row.details}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-6 border-t-2 border-frame-border/60 pt-4">
            <p className="text-sm font-medium leading-relaxed text-frame-muted-fg">
              The final stack is selected for the application rather than added simply to make the technology list longer.
            </p>
          </div>
        </div>

        {/* SECTION 7: PRODUCT STRATEGY & ARCHITECTURE */}
        <div className="mt-28 border-2 border-frame-border bg-frame-bg p-6 md:p-12">
          <div className="mb-8">
            <span className="text-xs font-black uppercase tracking-[0.28em] text-frame-accent">
              Blueprint &amp; Roadmap
            </span>
            <h2 className="mt-2 font-heading text-2xl md:text-4xl font-bold uppercase tracking-tight text-frame-fg">
              Product Strategy &amp; Architecture
            </h2>
            <p className="mt-3 max-w-3xl text-sm md:text-base font-medium leading-relaxed text-frame-muted-fg">
              Before development starts, we establish how the application should work as a product and as a technical system.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
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

          <div className="mt-6 border-t-2 border-frame-border/60 pt-4">
            <p className="text-sm font-semibold italic text-frame-fg">
              Good architecture reduces uncertainty later. It should support the product without introducing unnecessary technical complexity.
            </p>
          </div>
        </div>

        {/* SECTION 8: ANDROID APP ARCHITECTURE & CODE QUALITY */}
        <div className="mt-28 border-2 border-frame-border bg-frame-bg p-6 md:p-12">
          <div className="mb-8">
            <span className="text-xs font-black uppercase tracking-[0.28em] text-frame-accent">
              Engineering Standards
            </span>
            <h2 className="mt-2 font-heading text-2xl md:text-4xl font-bold uppercase tracking-tight text-frame-fg">
              Android App Architecture &amp; Code Quality
            </h2>
            <p className="mt-3 max-w-3xl text-sm md:text-base font-medium leading-relaxed text-frame-muted-fg">
              A maintainable Android application needs a clear code structure as well as functional features. Depending on the project, architecture can include:
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

          <div className="mt-6 border-t-2 border-frame-border/60 pt-4">
            <p className="text-sm font-medium leading-relaxed text-frame-muted-fg">
              The architecture should fit the product. We do not add patterns simply to make the technical stack look more complex.
            </p>
          </div>
        </div>

        {/* SECTION 9: UI/UX DESIGN FOR ANDROID */}
        <div className="mt-28 border-2 border-frame-border bg-frame-bg p-6 md:p-12">
          <div className="mb-8">
            <span className="text-xs font-black uppercase tracking-[0.28em] text-frame-accent">
              Platform Native UX
            </span>
            <h2 className="mt-2 font-heading text-2xl md:text-4xl font-bold uppercase tracking-tight text-frame-fg">
              UI/UX Design for Android
            </h2>
            <p className="mt-3 max-w-3xl text-sm md:text-base font-medium leading-relaxed text-frame-muted-fg">
              Android interfaces should feel natural to Android users while supporting the goals of the product.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {uiUxPoints.map((item, i) => (
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

          <div className="mt-6 border-t-2 border-frame-border/60 pt-4">
            <p className="text-sm font-semibold italic text-frame-fg">
              The goal is to create an interface that feels designed for Android rather than simply displayed on an Android device.
            </p>
          </div>
        </div>

        {/* SECTION 10: ANDROID APP SECURITY & DATA PROTECTION */}
        <div className="mt-28">
          <SectionIntro
            eyebrow="Security &amp; Privacy"
            title="Android App Security &amp; Data Protection"
          >
            Security should be considered throughout the development process rather than added just before launch.
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

          <div className="mt-6 p-4 border-2 border-frame-border bg-frame-muted/10">
            <p className="text-xs md:text-sm font-medium leading-relaxed text-frame-muted-fg">
              Security requirements depend on the product, data, integrations, and business context, so the exact implementation is defined during technical planning.
            </p>
          </div>
        </div>

        {/* SECTION 11: ANDROID APPS BUILT FOR REAL-WORLD CONDITIONS */}
        <div className="mt-28">
          <SectionIntro
            eyebrow="Real-World Resilience"
            title="Android Apps Built for Real-World Conditions"
          >
            An Android application can work perfectly in development and still behave differently in real-world use. We consider the environment in which the target users will actually use the product.
          </SectionIntro>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {realWorldConditions.map((cond, i) => (
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

          <div className="mt-6 p-4 border-2 border-frame-border bg-frame-muted/10">
            <p className="text-xs md:text-sm font-semibold italic text-frame-fg">
              Building for Android means planning for variation rather than testing only the easiest case.
            </p>
          </div>
        </div>

        {/* SECTION 12: APP TESTING, QUALITY ASSURANCE & PLAY STORE RELEASE */}
        <div className="mt-28">
          <SectionIntro
            eyebrow="Testing &amp; Verification"
            title="App Testing, Quality Assurance &amp; Play Store Release"
          >
            Testing takes place throughout development so issues can be identified before the final release.
          </SectionIntro>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {testingStages.map((stage, i) => (
              <div
                key={i}
                className="border-2 border-frame-border bg-frame-bg p-6 transition-colors hover:border-frame-accent"
              >
                <span className="text-xs font-black uppercase tracking-[0.2em] text-frame-accent">
                  Testing Stage 0{i + 1}
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

          <div className="mt-6 p-4 border-2 border-frame-border bg-frame-muted/10">
            <p className="text-xs md:text-sm font-medium leading-relaxed text-frame-muted-fg">
              Quality assurance is not limited to confirming that the app opens. The goal is to verify that important workflows continue working under supported conditions.
            </p>
          </div>
        </div>

        {/* SECTION 13: GOOGLE PLAY STORE LAUNCH & RELEASE SUPPORT */}
        <div className="mt-28 border-2 border-frame-border bg-frame-bg p-6 md:p-12">
          <div className="mb-8">
            <span className="text-xs font-black uppercase tracking-[0.28em] text-frame-accent">
              Store Deployment
            </span>
            <h2 className="mt-2 font-heading text-2xl md:text-4xl font-bold uppercase tracking-tight text-frame-fg">
              Google Play Store Launch &amp; Release Support
            </h2>
            <p className="mt-3 max-w-3xl text-sm md:text-base font-medium leading-relaxed text-frame-muted-fg">
              Building a production-ready Android application is only part of the release process. We can support the preparation and submission of the app to Google Play.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {playStoreRelease.map((step, i) => (
              <div
                key={i}
                className="border-2 border-frame-border bg-frame-muted/10 p-6 transition-colors hover:border-frame-accent"
              >
                <span className="text-xs font-black uppercase tracking-[0.2em] text-frame-accent">
                  Release Task 0{i + 1}
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

          <div className="mt-6 border-t-2 border-frame-border/60 pt-4">
            <p className="text-xs md:text-sm font-semibold uppercase tracking-wider text-frame-accent">
              Google makes the final publishing and policy decisions, so no development partner can guarantee approval on a first submission.
            </p>
          </div>
        </div>

        {/* SECTION 14: ANDROID APP MODERNIZATION & MIGRATION */}
        <div className="mt-28 border-2 border-frame-border bg-frame-bg p-6 md:p-12">
          <div className="mb-8">
            <span className="text-xs font-black uppercase tracking-[0.28em] text-frame-accent">
              Legacy Modernization
            </span>
            <h2 className="mt-2 font-heading text-2xl md:text-4xl font-bold uppercase tracking-tight text-frame-fg">
              Android App Modernization &amp; Migration
            </h2>
            <p className="mt-3 max-w-3xl text-sm md:text-base font-medium leading-relaxed text-frame-muted-fg">
              An existing Android application may not need to be completely rebuilt. Sometimes the better approach is to modernize the current codebase and improve the areas causing problems. We can support:
            </p>
          </div>

          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {modernizationItems.map((item, idx) => (
              <div
                key={idx}
                className="flex items-center gap-3 border-2 border-frame-border bg-frame-muted/10 p-4"
              >
                <span className="flex h-5 w-5 shrink-0 items-center justify-center border border-frame-accent bg-frame-accent/10 text-frame-accent">
                  <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </span>
                <span className="text-sm font-semibold text-frame-fg">
                  {item}
                </span>
              </div>
            ))}
          </div>

          <div className="mt-6 border-t-2 border-frame-border/60 pt-4">
            <p className="text-sm font-medium leading-relaxed text-frame-muted-fg">
              Before major changes begin, we assess the existing codebase, architecture, dependencies, integrations, and current issues. The recommendation may be modernization, migration, partial redevelopment, or a full rebuild depending on the condition of the application.
            </p>
          </div>
        </div>

        {/* SECTION 15: WHAT YOU RECEIVE FROM AN ANDROID DEVELOPMENT PROJECT */}
        <div className="mt-28">
          <SectionIntro
            eyebrow="Deliverables &amp; Handoff"
            title="What You Receive From an Android Development Project"
          >
            The final deliverables depend on the agreed scope, but a typical Android project can include:
          </SectionIntro>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {deliverables.map((del, i) => (
              <div
                key={i}
                className="border-2 border-frame-border bg-frame-bg p-6 md:p-8 flex flex-col justify-between"
              >
                <div>
                  <span className="text-xs font-black uppercase tracking-[0.24em] text-frame-accent">
                    Deliverable 0{i + 1}
                  </span>
                  <h3 className="mt-2 font-heading text-xl font-bold uppercase text-frame-fg">
                    {del.category}
                  </h3>
                  <ul className="mt-4 space-y-2 border-t border-frame-border/60 pt-4">
                    {del.items.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs md:text-sm font-medium text-frame-muted-fg">
                        <span className="text-frame-accent font-bold">&bull;</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 p-4 border-2 border-frame-border bg-frame-muted/10">
            <p className="text-xs md:text-sm font-medium leading-relaxed text-frame-muted-fg">
              The exact deliverables, source-code ownership, documentation level, and support terms are defined before development begins.
            </p>
          </div>
        </div>

        {/* SECTION 16: WHY CHOOSE FRAMECIPHER FOR ANDROID APP DEVELOPMENT */}
        <div className="mt-28 border-2 border-frame-border bg-frame-bg p-6 md:p-12">
          <div className="mb-8">
            <span className="text-xs font-black uppercase tracking-[0.28em] text-frame-accent">
              Agency Differentiators
            </span>
            <h2 className="mt-2 font-heading text-2xl md:text-4xl font-bold uppercase tracking-tight text-frame-fg">
              Why Choose Framecipher for Android App Development
            </h2>
            <p className="mt-3 max-w-3xl text-sm md:text-base font-medium leading-relaxed text-frame-muted-fg">
              Framecipher connects product planning, Android UI/UX, native development, backend engineering, testing, and Google Play release within one coordinated in-house workflow.
            </p>
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

        {/* SECTION 18: ANDROID APP DEVELOPMENT SERVICES ACROSS BANGLADESH & WORLDWIDE */}
        <div className="mt-28 border-2 border-frame-border bg-frame-muted/20 p-6 md:p-12">
          <span className="text-xs font-black uppercase tracking-[0.28em] text-frame-accent">
            Domestic Presence &amp; Global Reach
          </span>
          <h2 className="mt-2 font-heading text-2xl md:text-4xl font-bold uppercase tracking-tight text-frame-fg">
            Android App Development Services Across Bangladesh &amp; Worldwide
          </h2>
          <p className="mt-4 text-base font-medium leading-relaxed text-frame-muted-fg">
            Framecipher provides Android app development services for startups, SMEs, established businesses, and digital product teams across Bangladesh and international markets.
          </p>

          <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3">
            <div className="border-2 border-frame-border bg-frame-bg p-6">
              <h3 className="font-heading text-lg font-bold uppercase text-frame-fg">
                Android App Development in Bangladesh
              </h3>
              <p className="mt-3 text-sm font-medium leading-relaxed text-frame-muted-fg">
                We work with businesses in Dhaka, Gazipur, Chattogram, Narayanganj, Sylhet, Cumilla, Rajshahi, Khulna, Rangpur, Barishal, and Mymensingh, as well as clients in other parts of Bangladesh.
              </p>
              <p className="mt-3 text-sm font-medium leading-relaxed text-frame-muted-fg">
                For Bangladesh-focused Android products, we can plan around the device range, connectivity, language, payment workflows, and business systems relevant to the target users. Where required and technically supported, this can include local services such as bKash and Nagad.
              </p>
            </div>

            <div className="border-2 border-frame-border bg-frame-bg p-6">
              <h3 className="font-heading text-lg font-bold uppercase text-frame-fg">
                Android App Development for International Businesses
              </h3>
              <p className="mt-3 text-sm font-medium leading-relaxed text-frame-muted-fg">
                We also work with businesses and product teams serving customers in the United States, United Kingdom, Canada, Australia, and UAE.
              </p>
              <p className="mt-3 text-sm font-medium leading-relaxed text-frame-muted-fg">
                International projects can be planned around the target market, supported devices, third-party services, payment providers, backend systems, and Google Play release requirements.
              </p>
            </div>

            <div className="border-2 border-frame-border bg-frame-bg p-6">
              <h3 className="font-heading text-lg font-bold uppercase text-frame-fg">
                Remote Android Development
              </h3>
              <p className="mt-3 text-sm font-medium leading-relaxed text-frame-muted-fg">
                You do not need to be based in Dhaka or Bangladesh to work with Framecipher. We can collaborate remotely through online consultations, project management, design reviews, development updates, testing, and release coordination.
              </p>
            </div>
          </div>

          <div className="mt-8 border-t-2 border-frame-border pt-6">
            <p className="text-sm md:text-base font-semibold text-frame-fg">
              Whether you&apos;re launching a local business app in Bangladesh or building an Android product for an international audience, our development process is structured around your users, technical requirements, and business goals.
            </p>
            <div className="mt-6">
              <PosterButton href="/contact">Book an Android Consultation &rarr;</PosterButton>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
