import Link from 'next/link'
import { SectionIntro, PosterButton } from '../../Kinetic'

const coreOfferings = [
  {
    title: "Android App Development",
    slug: "/services/app-development/android",
    desc: "Native Android applications built for performance, device compatibility, and the Google Play ecosystem. We develop around the features, devices, and user requirements that matter to your product."
  },
  {
    title: "iOS App Development",
    slug: "/services/app-development/ios",
    desc: "Native iOS applications built with platform-specific requirements in mind, including Apple interface conventions, device behavior, and App Store release requirements."
  },
  {
    title: "Cross-Platform App Development",
    slug: "/services/app-development/cross-platform",
    desc: "Applications built with technologies such as Flutter or React Native when a shared codebase makes sense for the project. This can be useful for businesses that need to reach Android and iOS users without maintaining two completely separate application codebases."
  },
  {
    title: "SaaS App Development",
    slug: "/services/app-development/saas-apps",
    desc: "Web-based software products with features such as user accounts, subscriptions, dashboards, permissions, billing, and recurring workflows. We build the product around the business model and user roles rather than treating SaaS as a standard website."
  },
  {
    title: "Enterprise App Development",
    slug: "/services/app-development/enterprise-apps",
    desc: "Custom internal and B2B applications designed around business workflows, data, permissions, reporting, integrations, and operational requirements."
  },
  {
    title: "API Development & Integration",
    slug: "/services/app-development/api-development",
    desc: "Custom APIs and third-party integrations that connect the application with payment providers, CRMs, analytics tools, maps, business software, and other required systems."
  },
  {
    title: "MVP Development",
    slug: "/services/app-development/mvp-development",
    desc: "Focused first versions that include the core functionality needed to test a product idea with real users before committing to a larger feature set."
  }
]

const appTypes = [
  {
    title: "Ecommerce & Retail Apps",
    desc: "Mobile shopping experiences for product discovery, search, filtering, cart, checkout, payments, orders, accounts, and customer communication."
  },
  {
    title: "Booking & Appointment Apps",
    desc: "Applications for appointments, reservations, schedules, availability, reminders, service selection, and customer management."
  },
  {
    title: "Delivery & Logistics Apps",
    desc: "Apps for delivery tracking, driver workflows, order status, location services, route-related features, and operational coordination."
  },
  {
    title: "Marketplace & On-Demand Apps",
    desc: "Multi-sided platforms that connect customers with sellers, service providers, professionals, drivers, or other user groups."
  },
  {
    title: "Internal Business Apps",
    desc: "Custom software for inventory, staff management, reporting, approvals, field operations, CRM workflows, and internal coordination."
  },
  {
    title: "Customer & Service Apps",
    desc: "Applications for service requests, customer accounts, communication, subscriptions, support, and recurring customer interactions."
  },
  {
    title: "SaaS & Web Applications",
    desc: "Browser-based applications with dashboards, accounts, subscriptions, permissions, workflows, reporting, and other product features."
  },
  {
    title: "MVP & Startup Apps",
    desc: "Focused products designed to validate the core idea with real users before expanding into a larger application."
  }
]

const whyCustomApps = [
  {
    title: "Direct Customer Experience",
    desc: "A dedicated application can make recurring actions such as ordering, booking, account management, and communication easier to access."
  },
  {
    title: "Business Process Automation",
    desc: "Custom applications can replace spreadsheets, manual approvals, repeated data entry, and disconnected workflows with structured digital processes."
  },
  {
    title: "Access to Device Features",
    desc: "Mobile applications can use capabilities such as push notifications, GPS, camera, biometrics, and other platform functions where they support the product."
  },
  {
    title: "Greater Product Control",
    desc: "A custom application gives your business more control over workflows, integrations, user experience, and future product development."
  },
  {
    title: "Scalable Digital Products",
    desc: "A well-planned application can grow from an MVP into a larger SaaS product, marketplace, customer platform, or business system."
  }
]

const appCapabilities = [
  {
    title: "User Accounts & Authentication",
    desc: "Signup, login, password recovery, profiles, authentication, and role-based access where required."
  },
  {
    title: "Push Notifications",
    desc: "Notifications for orders, bookings, messages, reminders, updates, promotions, and other important events."
  },
  {
    title: "Payment & Subscription Integration",
    desc: "Payment gateways, recurring billing, transaction workflows, refunds, and subscription management where required."
  },
  {
    title: "Maps, GPS & Location",
    desc: "Maps, location services, delivery tracking, distance calculations, and other geographic functionality."
  },
  {
    title: "Chat & Communication",
    desc: "In-app messaging, support workflows, SMS, email, and notification systems where needed."
  },
  {
    title: "Admin Dashboards",
    desc: "Interfaces for managing users, products, orders, content, transactions, reports, permissions, and settings."
  },
  {
    title: "Analytics & Monitoring",
    desc: "Event tracking, usage data, crash monitoring, and performance information where required by the product."
  },
  {
    title: "Offline & Data Synchronization",
    desc: "Offline functionality and synchronization can be designed for applications that need to continue operating during limited connectivity."
  }
]

const nativeVsCrossRows = [
  {
    native: "Built specifically for Android or iOS",
    cross: "Uses a shared codebase across platforms"
  },
  {
    native: "Greater control over platform-specific features",
    cross: "Efficient for reaching multiple platforms"
  },
  {
    native: "Useful for highly platform-specific products",
    cross: "Suitable for many business and consumer applications"
  },
  {
    native: "Separate platform development may be required",
    cross: "Reduces duplicated development work"
  },
  {
    native: "Can be appropriate for demanding platform integrations",
    cross: "Can support faster multi-platform delivery"
  }
]

const uiUxPoints = [
  "User journey mapping",
  "Task and conversion flows",
  "Information architecture",
  "Wireframes",
  "Interactive prototypes",
  "High-fidelity interface design",
  "Design systems",
  "Responsive and accessibility-aware design",
  "Usability testing where scoped"
]

const backendAreas = [
  "Backend architecture",
  "Database design",
  "API development",
  "Authentication and authorization",
  "Business logic",
  "Admin systems",
  "File and media handling",
  "Data validation",
  "Third-party connections",
  "Deployment and environment setup",
  "Scalability planning"
]

const integrationTypes = [
  "Payment gateways",
  "bKash and Nagad where applicable",
  "CRM systems",
  "Maps and location services",
  "SMS and email services",
  "Social authentication",
  "Analytics platforms",
  "Cloud services",
  "External APIs",
  "Existing business software"
]

const securityPillars = [
  {
    title: "Secure Authentication",
    desc: "Protecting accounts through appropriate authentication and authorization methods."
  },
  {
    title: "Role-Based Access",
    desc: "Controlling what customers, staff, administrators, and other user types can view or modify."
  },
  {
    title: "Secure API Communication",
    desc: "Protecting data exchanged between the application, backend, and third-party services."
  },
  {
    title: "Data Protection",
    desc: "Handling customer and business information according to the application's actual requirements."
  },
  {
    title: "Dependency & Platform Maintenance",
    desc: "Keeping relevant frameworks, libraries, and platform components updated to reduce avoidable security and compatibility risks."
  },
  {
    title: "Secure Payment Workflows",
    desc: "Using appropriate payment-provider integrations and following the provider's required transaction flow."
  }
]

const realWorldConditions = [
  {
    title: "Device Compatibility",
    desc: "Designing and testing around the devices and screen sizes relevant to the target audience."
  },
  {
    title: "Slow or Unstable Networks",
    desc: "Considering loading, retry, timeout, error, and synchronization behavior when connectivity is limited."
  },
  {
    title: "Offline Workflows",
    desc: "Supporting offline functionality or data synchronization when the business case requires continued operation."
  },
  {
    title: "API & Service Failures",
    desc: "Planning appropriate loading, timeout, fallback, and recovery states when connected services fail."
  },
  {
    title: "Performance",
    desc: "Considering API response times, asset size, memory use, loading behavior, and other factors that affect responsiveness."
  }
]

const testingStages = [
  {
    title: "Functional Testing",
    desc: "Checking features and important workflows against the approved requirements."
  },
  {
    title: "Device & OS Testing",
    desc: "Testing supported devices and operating-system versions relevant to the project."
  },
  {
    title: "Performance Testing",
    desc: "Reviewing loading, responsiveness, API behavior, and other performance concerns."
  },
  {
    title: "Integration Testing",
    desc: "Testing payments, APIs, notifications, maps, authentication, and other connected systems."
  },
  {
    title: "Usability Testing",
    desc: "Reviewing important journeys and interface behavior to identify friction before release."
  },
  {
    title: "Regression Testing",
    desc: "Checking previously completed features after major changes or new development."
  },
  {
    title: "Pre-Release Testing",
    desc: "Performing final checks on the production-ready build before store submission or deployment."
  }
]

const storeLaunchPillars = [
  {
    title: "Release Preparation",
    desc: "Preparing the production build, configuration, release information, and required assets."
  },
  {
    title: "Store Listing Support",
    desc: "Supporting required app information, screenshots, descriptions, categories, and other submission materials where included."
  },
  {
    title: "Google Play Submission",
    desc: "Preparing and submitting the Android application through the Google Play release process."
  },
  {
    title: "Apple App Store Submission",
    desc: "Preparing and submitting the iOS application through Apple's publishing workflow."
  },
  {
    title: "Review Feedback",
    desc: "If Apple or Google requests changes, we can help identify the required technical or product updates for resubmission."
  }
]

const mvpStages = [
  {
    title: "Idea & Feature Prioritization",
    desc: "We identify the core problem, target audience, and features required for the first usable product."
  },
  {
    title: "UX & Product Structure",
    desc: "We design the essential flows and screens around the main user tasks."
  },
  {
    title: "Focused Development",
    desc: "We build the agreed core functionality without adding unnecessary features that delay validation."
  },
  {
    title: "Testing & Launch",
    desc: "The MVP is tested and prepared for real-world use so the team can begin collecting feedback."
  },
  {
    title: "Iteration",
    desc: "User feedback can then inform the next development phase instead of committing the entire budget before the product is validated."
  }
]

const modernizationAreas = [
  "Legacy technology modernization",
  "UI/UX redesign",
  "New feature development",
  "Backend or API improvements",
  "Performance optimization",
  "OS compatibility updates",
  "Security improvements",
  "Integration updates",
  "Codebase improvements",
  "Architecture modernization"
]

const deliverables = [
  {
    category: "Product & UX",
    items: [
      "User flows",
      "Wireframes",
      "UI/UX designs",
      "Interactive prototypes where required"
    ]
  },
  {
    category: "Application",
    items: [
      "Production-ready mobile or web application",
      "Configured features",
      "User workflows",
      "Platform-specific builds where applicable"
    ]
  },
  {
    category: "Backend & APIs",
    items: [
      "Backend services",
      "Database structure",
      "APIs",
      "Authentication and permissions",
      "Required integrations"
    ]
  },
  {
    category: "Testing & Release",
    items: [
      "Tested production build",
      "Release configuration",
      "Store submission support where included"
    ]
  },
  {
    category: "Handoff & Documentation",
    items: [
      "Source code",
      "Design files where applicable",
      "Technical documentation",
      "Deployment information",
      "Access and account documentation"
    ]
  }
]

const whyChooseUs = [
  {
    title: "One In-House Team",
    desc: "You don't need separate teams for design, mobile development, backend development, and technical coordination."
  },
  {
    title: "Platform-Neutral Recommendations",
    desc: "We recommend native, cross-platform, SaaS, web, or MVP approaches based on the project's actual requirements."
  },
  {
    title: "Design Before Development",
    desc: "User flows and interface structure are considered before development so technical work isn't built around unclear product decisions."
  },
  {
    title: "Development-Aware UI/UX",
    desc: "Our designers and developers can work within the same project context, making the transition from approved design to implementation clearer."
  },
  {
    title: "Transparent Review Process",
    desc: "Major stages can include review and approval checkpoints so you remain involved throughout development."
  },
  {
    title: "Full-Cycle Support",
    desc: "From discovery and architecture through testing, launch, and post-launch improvements, the project stays within one coordinated workflow."
  }
]

const portfolioFramework = [
  {
    title: "Project Overview",
    desc: "Show the product type, target users, platforms, core objective, and project scope."
  },
  {
    title: "Challenge",
    desc: "Explain the business, operational, customer, or technical problem the application needed to solve."
  },
  {
    title: "Solution",
    desc: "Describe the application architecture, UX approach, core features, integrations, and technical decisions."
  },
  {
    title: "Development",
    desc: "Show the relevant platforms, technologies, backend systems, integrations, and testing approach."
  },
  {
    title: "Outcome",
    desc: "Where verified data exists, show measurable outcomes such as successful launch, improved workflows, resolved technical problems, user adoption, or other documented results."
  }
]

const startRequirements = [
  "Business or product idea",
  "Target users",
  "Core features",
  "Preferred platforms, if known",
  "Existing website or software",
  "Required integrations",
  "Backend or API requirements",
  "Brand assets or design references",
  "Existing application access, if this is a modernization project",
  "App Store or Google Play account details when required"
]

export default function Offerings() {
  return (
    <section id="offerings" className="border-t-2 border-frame-border bg-frame-bg px-4 py-20 md:px-8 md:py-32 scroll-mt-20">
      <div className="mx-auto max-w-[95vw]">
        
        {/* SECTION 1: WHAT WE OFFER */}
        <div>
          <SectionIntro
            eyebrow="End-To-End Delivery"
            title="What We Offer"
          >
            Framecipher provides end-to-end app development for startups, businesses, and growing digital products. We handle strategy, UI/UX, architecture, development, integrations, testing, launch, and post-launch support through one in-house team.
          </SectionIntro>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {coreOfferings.map((item, i) => (
              <div
                key={i}
                className="flex flex-col justify-between border-2 border-frame-border bg-frame-bg p-6 md:p-8 hover:border-frame-accent transition-colors group"
              >
                <div>
                  <span className="text-xs font-black uppercase tracking-[0.24em] text-frame-accent">
                    Offering 0{i + 1}
                  </span>
                  <h3 className="mt-3 font-heading text-xl md:text-2xl font-bold uppercase tracking-tight text-frame-fg group-hover:text-frame-accent transition-colors">
                    {item.title}
                  </h3>
                  <p className="mt-4 text-sm font-medium leading-relaxed text-frame-muted-fg">
                    {item.desc}
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-frame-border/60">
                  <Link
                    href={item.slug}
                    className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-wider text-frame-accent hover:underline"
                  >
                    Explore Service &rarr;
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* SECTION 2: WHAT TYPE OF APP DO YOU NEED? */}
        <div className="mt-28">
          <SectionIntro
            eyebrow="Targeted Use Cases"
            title="What Type of App Do You Need?"
          >
            The right application depends on what your users need to accomplish and how your business operates. We build around the use case rather than forcing every project into the same application model.
          </SectionIntro>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {appTypes.map((type, i) => (
              <div
                key={i}
                className="border-2 border-frame-border bg-frame-bg p-6 transition-colors hover:border-frame-accent"
              >
                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-frame-accent">
                  Type 0{i + 1}
                </span>
                <h3 className="mt-2 font-heading text-lg font-bold uppercase text-frame-fg">
                  {type.title}
                </h3>
                <p className="mt-3 text-xs md:text-sm font-medium leading-relaxed text-frame-muted-fg">
                  {type.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* SECTION 3: WHY BUSINESSES BUILD CUSTOM APPS */}
        <div className="mt-28 border-2 border-frame-border bg-frame-bg p-6 md:p-12">
          <div className="mb-8">
            <span className="text-xs font-black uppercase tracking-[0.28em] text-frame-accent">
              Strategic Value
            </span>
            <h2 className="mt-2 font-heading text-2xl md:text-4xl font-bold uppercase tracking-tight text-frame-fg">
              Why Businesses Build Custom Apps
            </h2>
            <p className="mt-3 max-w-3xl text-sm md:text-base font-medium leading-relaxed text-frame-muted-fg">
              A custom app can solve problems that a standard website, plugin, or off-the-shelf platform cannot handle efficiently.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {whyCustomApps.map((reason, i) => (
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

          <div className="mt-8 border-t-2 border-frame-border pt-6">
            <p className="text-sm md:text-base font-semibold italic text-frame-fg">
              The reason to build an app should be clear before development starts. The technology should support that reason rather than become the reason itself.
            </p>
          </div>
        </div>

        {/* SECTION 4: APP FEATURES & CAPABILITIES */}
        <div className="mt-28">
          <SectionIntro
            eyebrow="Core Functionality"
            title="App Features & Capabilities"
          >
            Application features vary by product, user roles, platform, and business requirements. Common capabilities can include:
          </SectionIntro>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {appCapabilities.map((cap, i) => (
              <div
                key={i}
                className="border-2 border-frame-border bg-frame-bg p-6 transition-colors hover:border-frame-accent"
              >
                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-frame-accent">
                  Capability 0{i + 1}
                </span>
                <h3 className="mt-2 font-heading text-lg font-bold uppercase text-frame-fg">
                  {cap.title}
                </h3>
                <p className="mt-3 text-xs md:text-sm font-medium leading-relaxed text-frame-muted-fg">
                  {cap.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* SECTION 5: NATIVE VS CROSS-PLATFORM COMPARISON */}
        <div className="mt-28 border-2 border-frame-border bg-frame-bg p-6 md:p-12">
          <div className="mb-8">
            <span className="text-xs font-black uppercase tracking-[0.28em] text-frame-accent">
              Platform Architecture
            </span>
            <h2 className="mt-2 font-heading text-2xl md:text-4xl font-bold uppercase tracking-tight text-frame-fg">
              Native vs Cross-Platform App Development
            </h2>
            <p className="mt-3 max-w-3xl text-sm md:text-base font-medium leading-relaxed text-frame-muted-fg">
              Choosing between native and cross-platform development depends on your product requirements rather than a fixed rule.
            </p>
          </div>

          <div className="overflow-x-auto border-2 border-frame-border">
            <table className="w-full text-left text-sm">
              <thead className="border-b-2 border-frame-border bg-frame-muted/50 font-heading text-xs uppercase tracking-wider text-frame-fg">
                <tr>
                  <th className="p-4 border-r-2 border-frame-border w-1/2">Native App Development</th>
                  <th className="p-4 w-1/2">Cross-Platform App Development</th>
                </tr>
              </thead>
              <tbody className="divide-y-2 divide-frame-border text-frame-muted-fg">
                {nativeVsCrossRows.map((row, rIdx) => (
                  <tr key={rIdx} className="hover:bg-frame-muted/20 transition-colors">
                    <td className="p-4 border-r-2 border-frame-border font-medium text-frame-fg">
                      {row.native}
                    </td>
                    <td className="p-4 font-medium text-frame-accent">
                      {row.cross}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-6 border-t-2 border-frame-border/60 pt-4">
            <p className="text-sm font-medium leading-relaxed text-frame-muted-fg">
              We consider the target users, required features, performance needs, timeline, budget, integrations, and long-term roadmap before recommending a technology.
            </p>
          </div>
        </div>

        {/* SECTION 6: UI/UX DESIGN FOR APPS */}
        <div className="mt-28 border-2 border-frame-border bg-frame-bg p-6 md:p-12">
          <div className="mb-8">
            <span className="text-xs font-black uppercase tracking-[0.28em] text-frame-accent">
              Interface &amp; Flow
            </span>
            <h2 className="mt-2 font-heading text-2xl md:text-4xl font-bold uppercase tracking-tight text-frame-fg">
              UI/UX Design for Apps
            </h2>
            <p className="mt-3 max-w-3xl text-sm md:text-base font-medium leading-relaxed text-frame-muted-fg">
              A successful app needs a clear experience before it needs more code. Our app UI/UX work can include:
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
            {uiUxPoints.map((point, idx) => (
              <div
                key={idx}
                className="flex items-center gap-3 border-2 border-frame-border bg-frame-muted/10 p-4 transition-colors hover:border-frame-accent"
              >
                <span className="flex h-5 w-5 shrink-0 items-center justify-center border border-frame-accent bg-frame-accent/10 text-frame-accent">
                  <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </span>
                <span className="text-sm font-semibold text-frame-fg">
                  {point}
                </span>
              </div>
            ))}
          </div>

          <div className="mt-6 border-t-2 border-frame-border/60 pt-4">
            <p className="text-sm font-medium leading-relaxed text-frame-muted-fg">
              We connect UX planning with development requirements so the final interface is designed around actual user actions rather than isolated screens.
            </p>
          </div>
        </div>

        {/* SECTION 7: APP ARCHITECTURE & BACKEND DEVELOPMENT */}
        <div className="mt-28 border-2 border-frame-border bg-frame-bg p-6 md:p-12">
          <div className="mb-8">
            <span className="text-xs font-black uppercase tracking-[0.28em] text-frame-accent">
              Systems Engineering
            </span>
            <h2 className="mt-2 font-heading text-2xl md:text-4xl font-bold uppercase tracking-tight text-frame-fg">
              App Architecture &amp; Backend Development
            </h2>
            <p className="mt-3 max-w-3xl text-sm md:text-base font-medium leading-relaxed text-frame-muted-fg">
              The mobile interface is only one part of a working application. Backend systems, databases, APIs, authentication, business logic, and infrastructure determine how the product operates behind the interface. Depending on the project, we can handle:
            </p>
          </div>

          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {backendAreas.map((area, idx) => (
              <div
                key={idx}
                className="flex items-center gap-3 border-2 border-frame-border bg-frame-muted/10 p-4"
              >
                <span className="text-xs font-black text-frame-accent font-mono">
                  {(idx + 1).toString().padStart(2, '0')}.
                </span>
                <span className="text-sm font-semibold text-frame-fg">
                  {area}
                </span>
              </div>
            ))}
          </div>

          <div className="mt-6 border-t-2 border-frame-border/60 pt-4">
            <p className="text-sm font-medium leading-relaxed text-frame-muted-fg">
              We treat the application as one connected system rather than separating the mobile interface from the backend architecture.
            </p>
          </div>
        </div>

        {/* SECTION 8: API, PAYMENT & THIRD-PARTY INTEGRATIONS */}
        <div className="mt-28 border-2 border-frame-border bg-frame-bg p-6 md:p-12">
          <div className="mb-8">
            <span className="text-xs font-black uppercase tracking-[0.28em] text-frame-accent">
              Ecosystem Connectivity
            </span>
            <h2 className="mt-2 font-heading text-2xl md:text-4xl font-bold uppercase tracking-tight text-frame-fg">
              API, Payment &amp; Third-Party Integrations
            </h2>
            <p className="mt-3 max-w-3xl text-sm md:text-base font-medium leading-relaxed text-frame-muted-fg">
              Modern applications often depend on external services. We plan integrations around the required data flow, authentication, business rules, and failure conditions. Integrations can include:
            </p>
          </div>

          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {integrationTypes.map((item, idx) => (
              <div
                key={idx}
                className="flex items-center gap-3 border-2 border-frame-border bg-frame-muted/10 p-4"
              >
                <span className="h-2 w-2 bg-frame-accent"></span>
                <span className="text-sm font-semibold text-frame-fg">
                  {item}
                </span>
              </div>
            ))}
          </div>

          <div className="mt-6 border-t-2 border-frame-border/60 pt-4">
            <p className="text-sm font-medium leading-relaxed text-frame-muted-fg">
              The exact integration scope depends on the provider, available APIs, authentication requirements, data flow, and project complexity.
            </p>
          </div>
        </div>

        {/* SECTION 9: APP SECURITY & DATA PROTECTION */}
        <div className="mt-28">
          <SectionIntro
            eyebrow="Protection & Compliance"
            title="App Security & Data Protection"
          >
            Security should be considered throughout application development rather than added at the end. Depending on the product, security planning can include:
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
              Security requirements vary by product, industry, data, and integrations, so the exact approach is defined during technical planning.
            </p>
          </div>
        </div>

        {/* SECTION 10: BUILT FOR REAL-WORLD APP CONDITIONS */}
        <div className="mt-28">
          <SectionIntro
            eyebrow="Resilient Performance"
            title="Built for Real-World App Conditions"
          >
            An application can work in development and still fail under real-world conditions. We consider how your users will actually access and use the product.
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
            <p className="text-xs md:text-sm font-medium leading-relaxed text-frame-muted-fg">
              The goal is to build for real usage conditions, not only controlled development environments.
            </p>
          </div>
        </div>

        {/* SECTION 11: APP TESTING & QUALITY ASSURANCE */}
        <div className="mt-28">
          <SectionIntro
            eyebrow="Quality Assurance"
            title="App Testing & Quality Assurance"
          >
            Testing is performed throughout development rather than saved for the final stage.
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
        </div>

        {/* SECTION 12: APP STORE & GOOGLE PLAY LAUNCH */}
        <div className="mt-28">
          <SectionIntro
            eyebrow="Store Publishing"
            title="App Store & Google Play Launch"
          >
            Development does not end when the application builds successfully. We can support the preparation and submission process for the relevant app stores.
          </SectionIntro>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {storeLaunchPillars.map((pillar, i) => (
              <div
                key={i}
                className="border-2 border-frame-border bg-frame-bg p-6 transition-colors hover:border-frame-accent"
              >
                <span className="text-xs font-black uppercase tracking-[0.2em] text-frame-accent">
                  Launch Step 0{i + 1}
                </span>
                <h3 className="mt-2 font-heading text-lg font-bold uppercase text-frame-fg">
                  {pillar.title}
                </h3>
                <p className="mt-3 text-xs md:text-sm font-medium leading-relaxed text-frame-muted-fg">
                  {pillar.desc}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-6 p-4 border-2 border-frame-border bg-frame-muted/10">
            <p className="text-xs md:text-sm font-medium leading-relaxed text-frame-muted-fg">
              Final approval remains under the control of Apple and Google.
            </p>
          </div>
        </div>

        {/* SECTION 13: MVP APP DEVELOPMENT FOR STARTUPS */}
        <div className="mt-28 border-2 border-frame-border bg-frame-bg p-6 md:p-12">
          <div className="mb-8">
            <span className="text-xs font-black uppercase tracking-[0.28em] text-frame-accent">
              Lean Validation
            </span>
            <h2 className="mt-2 font-heading text-2xl md:text-4xl font-bold uppercase tracking-tight text-frame-fg">
              MVP App Development for Startups
            </h2>
            <p className="mt-3 max-w-3xl text-sm md:text-base font-medium leading-relaxed text-frame-muted-fg">
              Not every product needs its complete feature set on the first release. An MVP focuses on the smallest practical version needed to test the core idea with real users.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {mvpStages.map((stage, i) => (
              <div
                key={i}
                className="border-2 border-frame-border bg-frame-muted/10 p-6 transition-colors hover:border-frame-accent"
              >
                <span className="text-xs font-black uppercase tracking-[0.2em] text-frame-accent">
                  Phase 0{i + 1}
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

          <div className="mt-6 border-t-2 border-frame-border/60 pt-4">
            <p className="text-sm font-semibold italic text-frame-fg">
              An MVP should be focused, not carelessly incomplete. The goal is to learn from a usable product.
            </p>
          </div>
        </div>

        {/* SECTION 14: APP MODERNIZATION & EXISTING APPLICATION DEVELOPMENT */}
        <div className="mt-28 border-2 border-frame-border bg-frame-bg p-6 md:p-12">
          <div className="mb-8">
            <span className="text-xs font-black uppercase tracking-[0.28em] text-frame-accent">
              Codebase Evolution
            </span>
            <h2 className="mt-2 font-heading text-2xl md:text-4xl font-bold uppercase tracking-tight text-frame-fg">
              App Modernization &amp; Existing Application Development
            </h2>
            <p className="mt-3 max-w-3xl text-sm md:text-base font-medium leading-relaxed text-frame-muted-fg">
              You may already have an application that works but needs technical, usability, or product improvements. We can support existing applications that require:
            </p>
          </div>

          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {modernizationAreas.map((item, idx) => (
              <div
                key={idx}
                className="flex items-center gap-3 border-2 border-frame-border bg-frame-muted/10 p-4"
              >
                <span className="h-2 w-2 bg-frame-accent"></span>
                <span className="text-sm font-semibold text-frame-fg">
                  {item}
                </span>
              </div>
            ))}
          </div>

          <div className="mt-6 border-t-2 border-frame-border/60 pt-4">
            <p className="text-sm font-medium leading-relaxed text-frame-muted-fg">
              Before major changes begin, we review the existing technology stack, dependencies, architecture, integrations, and current problems so the modernization approach reflects the actual condition of the product.
            </p>
          </div>
        </div>

        {/* SECTION 15: WHAT YOU RECEIVE FROM AN APP DEVELOPMENT PROJECT */}
        <div className="mt-28">
          <SectionIntro
            eyebrow="Deliverables & Handoff"
            title="What You Receive From an App Development Project"
          >
            The final deliverables depend on the agreed scope, but a typical project can include:
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
              The exact deliverables, source-code ownership, documentation, and support terms are defined in the project agreement.
            </p>
          </div>
        </div>

        {/* SECTION 16: WHY CHOOSE FRAMECIPHER FOR APP DEVELOPMENT */}
        <div className="mt-28 border-2 border-frame-border bg-frame-bg p-6 md:p-12">
          <div className="mb-8">
            <span className="text-xs font-black uppercase tracking-[0.28em] text-frame-accent">
              Agency Accountability
            </span>
            <h2 className="mt-2 font-heading text-2xl md:text-4xl font-bold uppercase tracking-tight text-frame-fg">
              Why Choose Framecipher for App Development
            </h2>
            <p className="mt-3 max-w-3xl text-sm md:text-base font-medium leading-relaxed text-frame-muted-fg">
              Framecipher connects product strategy, UI/UX, application development, backend engineering, and launch support within one in-house team.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {whyChooseUs.map((reason, i) => (
              <div
                key={i}
                className="border-2 border-frame-border bg-frame-muted/10 p-6 transition-colors hover:border-frame-accent"
              >
                <span className="text-xs font-black uppercase tracking-[0.2em] text-frame-accent">
                  Standard 0{i + 1}
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

        {/* SECTION 17: APP DEVELOPMENT PORTFOLIO & CASE STUDIES */}
        <div className="mt-28 border-2 border-frame-border bg-frame-bg p-6 md:p-12">
          <div className="mb-8">
            <span className="text-xs font-black uppercase tracking-[0.28em] text-frame-accent">
              Case Study Methodology
            </span>
            <h2 className="mt-2 font-heading text-2xl md:text-4xl font-bold uppercase tracking-tight text-frame-fg">
              App Development Portfolio &amp; Case Studies
            </h2>
            <p className="mt-3 max-w-3xl text-sm md:text-base font-medium leading-relaxed text-frame-muted-fg">
              A strong app-development portfolio should show more than screenshots. It should explain what was built, why it was built, and how the project was approached.
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
              Only publish ratings, download numbers, revenue figures, performance results, project counts, or other measurable claims when supported by actual evidence.
            </p>
          </div>
        </div>

        {/* SECTION 18: WHAT WE NEED TO START YOUR APP PROJECT */}
        <div className="mt-28 border-2 border-frame-border bg-frame-bg p-6 md:p-12">
          <div className="mb-8">
            <span className="text-xs font-black uppercase tracking-[0.28em] text-frame-accent">
              Onboarding Checklist
            </span>
            <h2 className="mt-2 font-heading text-2xl md:text-4xl font-bold uppercase tracking-tight text-frame-fg">
              What We Need to Start Your App Project
            </h2>
            <p className="mt-3 max-w-3xl text-sm md:text-base font-medium leading-relaxed text-frame-muted-fg">
              You do not need to have the complete technical architecture figured out before contacting us. We can help define the right approach during discovery. We may need:
            </p>
          </div>

          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {startRequirements.map((req, idx) => (
              <div
                key={idx}
                className="flex items-center gap-3 border-2 border-frame-border bg-frame-muted/10 p-4"
              >
                <span className="text-xs font-black text-frame-accent font-mono">
                  {(idx + 1).toString().padStart(2, '0')}.
                </span>
                <span className="text-sm font-semibold text-frame-fg">
                  {req}
                </span>
              </div>
            ))}
          </div>

          <div className="mt-6 border-t-2 border-frame-border/60 pt-4">
            <p className="text-sm font-medium leading-relaxed text-frame-muted-fg">
              The clearer the initial requirements, the easier it is to recommend the right scope and technology.
            </p>
          </div>
        </div>

        {/* SECTION 19: APP DEVELOPMENT SERVICES IN BANGLADESH & WORLDWIDE */}
        <div className="mt-28 border-2 border-frame-border bg-frame-muted/20 p-6 md:p-12">
          <span className="text-xs font-black uppercase tracking-[0.28em] text-frame-accent">
            Global Delivery &amp; Domestic Reach
          </span>
          <h2 className="mt-2 font-heading text-2xl md:text-4xl font-bold uppercase tracking-tight text-frame-fg">
            App Development Services in Bangladesh &amp; Worldwide
          </h2>
          <div className="mt-6 max-w-4xl space-y-4 text-sm md:text-base font-medium leading-relaxed text-frame-muted-fg">
            <p>
              Framecipher provides app development services for businesses across Bangladesh, including Dhaka, as well as international clients.
            </p>
            <p>
              We work with products targeting markets such as the UAE, US, UK, Australia, and Canada, adapting the technology, integrations, user experience, and release process to the project&apos;s requirements.
            </p>
            <p>
              For Bangladesh-focused products, we can support relevant local integrations such as bKash or Nagad where applicable. International products may require different payment providers, business systems, or market-specific requirements.
            </p>
            <p className="font-semibold text-frame-fg">
              Our goal is to build the right application for the product and market rather than apply the same development approach to every client.
            </p>
          </div>
          <div className="mt-8">
            <PosterButton href="/contact">Start Your Project Consultation &rarr;</PosterButton>
          </div>
        </div>

      </div>
    </section>
  )
}
