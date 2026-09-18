import { SectionIntro, PosterButton } from '../../../Kinetic'

const whatIsSaas = [
  {
    title: "SaaS vs Traditional Software",
    desc: "Traditional software may be sold or deployed as a one-time product. SaaS is typically delivered as an ongoing service that customers access through the web or connected applications."
  },
  {
    title: "SaaS vs a Standard Web Application",
    desc: "A standard web application can serve one company, one workflow, or a limited group of users. A SaaS platform is designed to serve multiple customers with separate accounts, permissions, billing, and customer data."
  },
  {
    title: "Multi-Tenant Software",
    desc: "Multi-tenancy allows multiple customer organizations or accounts to use the same platform while keeping their data and access logically separated."
  },
  {
    title: "Subscription-Based Access",
    desc: "SaaS products commonly use monthly, annual, usage-based, or other recurring plans to provide access to the software."
  },
  {
    title: "Continuous Product Delivery",
    desc: "Because the product is managed centrally, updates, improvements, fixes, and new functionality can be released continuously as the SaaS evolves."
  }
]

const saasServices = [
  {
    title: "Product Strategy & Multi-Tenant Architecture",
    desc: "We define your product structure before development begins. That includes tenants, users, workflows, data models, permissions, integrations, and scalability requirements."
  },
  {
    title: "SaaS UI/UX Design",
    desc: "We design onboarding, dashboards, workflows, settings, billing screens, and role-based interfaces around how different users actually interact with the product."
  },
  {
    title: "Full-Stack SaaS Development",
    desc: "We build the frontend and backend around the approved product scope instead of treating SaaS as a collection of disconnected CRUD screens."
  },
  {
    title: "Subscription & Billing Integration",
    desc: "We integrate the billing system around your business model, including plans, trials, subscription changes, payment events, invoices, and access rules where required."
  },
  {
    title: "API & Backend Development",
    desc: "We build or connect the APIs, authentication systems, databases, admin tools, and third-party services your SaaS product needs."
  },
  {
    title: "Performance, Security & Scalability",
    desc: "We plan infrastructure, performance, tenant isolation, monitoring, and security around current requirements and expected growth."
  },
  {
    title: "Testing & Quality Assurance",
    desc: "We test product workflows, tenant isolation, billing, APIs, permissions, performance, and critical user journeys before launch."
  },
  {
    title: "SaaS Deployment",
    desc: "We prepare the application, environments, infrastructure, domains, release workflow, monitoring, and production deployment based on the approved scope."
  },
  {
    title: "Ongoing Support & Maintenance",
    desc: "After launch, we can continue with bug fixes, framework updates, feature development, performance work, integrations, and technical support."
  }
]

const typesOfSaas = [
  {
    title: "B2B SaaS",
    desc: "Software for companies that need tools for sales, operations, finance, HR, customer management, reporting, or internal workflows."
  },
  {
    title: "B2C SaaS",
    desc: "Subscription-based products for individual customers, including productivity, learning, content, lifestyle, and other consumer services."
  },
  {
    title: "Vertical SaaS",
    desc: "Industry-focused software built around the workflows, terminology, permissions, and requirements of a specific sector."
  },
  {
    title: "CRM & Sales SaaS",
    desc: "Platforms for leads, contacts, pipelines, customer activity, communication, reporting, and sales workflows."
  },
  {
    title: "HR & Workforce SaaS",
    desc: "Software for employee management, recruitment, attendance, scheduling, workforce operations, and related business processes."
  },
  {
    title: "Finance & Accounting SaaS",
    desc: "Products for invoicing, expenses, financial records, payments, reporting, subscription management, and accounting workflows."
  },
  {
    title: "Education SaaS",
    desc: "Learning platforms, course management, student systems, assessments, communication, and education-focused workflows."
  },
  {
    title: "Healthcare SaaS",
    desc: "Software for appointments, records, scheduling, communication, wellness, and other supported healthcare workflows."
  },
  {
    title: "Operations & Workflow SaaS",
    desc: "Platforms for approvals, tasks, field operations, inventory, service management, reporting, and recurring business processes."
  },
  {
    title: "AI-Powered SaaS",
    desc: "Products that use AI within broader business workflows, such as automation, document processing, recommendations, content generation, analysis, or intelligent assistance."
  },
  {
    title: "White-Label SaaS",
    desc: "Platforms that allow businesses or partners to offer the same underlying product under different branding, domains, configurations, or customer-facing identities."
  }
]

const whyBuildSaas = [
  {
    title: "Recurring Revenue Model",
    desc: "Subscription-based access allows businesses to build an ongoing commercial relationship with customers instead of relying only on one-time software purchases."
  },
  {
    title: "Centralized Product Management",
    desc: "A SaaS provider can manage product updates, features, infrastructure, access, billing, and customer experience from a central platform."
  },
  {
    title: "Faster Product Iteration",
    desc: "The product can evolve continuously based on customer feedback, product analytics, support issues, and business priorities."
  },
  {
    title: "Expansion Into New Markets",
    desc: "A well-planned SaaS product can support additional organizations, users, plans, integrations, and markets without creating a completely separate product for every customer."
  },
  {
    title: "Product-Led Growth Opportunities",
    desc: "Trials, onboarding, feature limits, plan upgrades, invitations, usage prompts, and other growth mechanics can be built directly into the product."
  },
  {
    title: "Long-Term Product Value",
    desc: "The objective is not simply to launch software. It is to build a product that can support customers, subscriptions, new features, and operational growth over time."
  }
]

const multiTenantArch = [
  {
    title: "Tenant Data Isolation",
    desc: "Each customer organization should have logically separated data, users, settings, and business records according to the application's security model."
  },
  {
    title: "Shared Database vs Separate Database",
    desc: "Some products can use shared infrastructure with logical tenant separation. Others may benefit from separate schemas or databases based on scale, security, compliance, and operational requirements."
  },
  {
    title: "Schema-Based Isolation",
    desc: "Where appropriate, tenant identifiers and database-level rules can be used to keep customer records logically separated within shared infrastructure."
  },
  {
    title: "Organization & Workspace Structure",
    desc: "A SaaS product can support companies, teams, departments, branches, workspaces, or other organizational structures based on how customers use the platform."
  },
  {
    title: "Tenant-Specific Configuration",
    desc: "Customers may need their own settings, branding, limits, feature access, integrations, or business rules."
  },
  {
    title: "Subdomain & Custom Domain Support",
    desc: "Suitable SaaS products can support dedicated subdomains or connected custom domains for individual customers or organizations."
  },
  {
    title: "White-Label SaaS",
    desc: "The same multi-tenant foundation can support customer-specific logos, branding, domains, and configurable front-end experiences."
  },
  {
    title: "Scaling Tenant Data",
    desc: "The data model should account for growth in tenants, users, records, storage, reports, and activity without making the platform increasingly difficult to maintain."
  }
]

const billingItems = [
  {
    title: "Monthly & Annual Plans",
    desc: "Create recurring subscription plans with different billing intervals and access levels."
  },
  {
    title: "Free Trials",
    desc: "Support trial periods with controlled access, expiration rules, and conversion into paid subscriptions."
  },
  {
    title: "Tiered Pricing",
    desc: "Different plans can unlock different features, limits, storage, users, or usage levels."
  },
  {
    title: "Seat-Based Billing",
    desc: "Charge according to the number of users or licensed seats when the business model requires it."
  },
  {
    title: "Usage-Based Billing",
    desc: "Some SaaS products charge based on transactions, storage, API calls, processed documents, messages, or another measurable unit."
  },
  {
    title: "Upgrades & Downgrades",
    desc: "Plan changes should update account access, limits, billing state, and subscription records consistently."
  },
  {
    title: "Proration",
    desc: "Where supported by the billing model, mid-cycle plan changes can account for partial-period charges or credits."
  },
  {
    title: "Failed Payments & Recovery",
    desc: "Billing systems need a clear workflow for failed payments, retries, account status changes, and access rules."
  },
  {
    title: "Invoices & Receipts",
    desc: "Customers can have access to billing records, invoices, receipts, and transaction history based on the product requirements."
  },
  {
    title: "Feature Gating",
    desc: "Subscription plans can control which features, limits, integrations, or usage levels are available to customers."
  },
  {
    title: "Billing Webhooks",
    desc: "Payment and subscription events can be synchronized with the SaaS platform so billing status and product access remain aligned."
  }
]

const userManagementItems = [
  {
    title: "User Accounts",
    desc: "Manage registration, login, password recovery, profiles, sessions, and account status."
  },
  {
    title: "Organizations & Workspaces",
    desc: "Group users into companies, workspaces, departments, branches, teams, or other structures required by the product."
  },
  {
    title: "Team Invitations",
    desc: "Allow administrators or account owners to invite users and assign appropriate access."
  },
  {
    title: "Roles & Permissions",
    desc: "Define what users can view, create, edit, approve, export, manage, or administer."
  },
  {
    title: "Role-Based Access Control",
    desc: "Permissions should be enforced across the application and backend rather than relying only on interface-level restrictions."
  },
  {
    title: "Enterprise Authentication",
    desc: "For suitable products, authentication can include SSO or other enterprise identity requirements."
  },
  {
    title: "Support & Administrative Access",
    desc: "Controlled support access or administrative impersonation can be implemented when it is useful and appropriate for the product."
  }
]

const onboardingItems = [
  {
    title: "Signup & Account Creation",
    desc: "Keep registration clear while collecting the information required to create the account or workspace."
  },
  {
    title: "Workspace Setup",
    desc: "Guide new customers through company details, preferences, initial configuration, team setup, or other required steps."
  },
  {
    title: "Guided Onboarding",
    desc: "Help users discover the important parts of the platform rather than placing every feature in front of them at once."
  },
  {
    title: "Team Invitations",
    desc: "Allow account owners or administrators to bring additional team members into the product at the right stage."
  },
  {
    title: "Trial Activation",
    desc: "Connect trial creation with plan rules, feature limits, onboarding states, and billing events."
  },
  {
    title: "Feature Discovery",
    desc: "Introduce important functionality through contextual guidance and relevant user flows."
  },
  {
    title: "First-Value Experience",
    desc: "The onboarding process should move users toward the product's first meaningful outcome as efficiently as the workflow allows."
  },
  {
    title: "Email Onboarding & Automation",
    desc: "Where required, onboarding can extend outside the product through email, reminders, notifications, and event-based communication."
  }
]

const analyticsItems = [
  {
    title: "Product Usage Metrics",
    desc: "Track important events such as sessions, activity, feature usage, transactions, or other product-specific actions."
  },
  {
    title: "Activation Tracking",
    desc: "Measure whether users complete the actions that indicate they have started receiving value from the product."
  },
  {
    title: "Feature Adoption",
    desc: "Understand which features customers use and which features remain underused."
  },
  {
    title: "Retention Tracking",
    desc: "Monitor customer activity over time to identify changes in product engagement."
  },
  {
    title: "Churn Analysis",
    desc: "Track subscription cancellations and customer changes to understand where users leave the product."
  },
  {
    title: "Tenant Usage",
    desc: "View activity by organization, workspace, customer, or plan when customer-level usage data is important."
  },
  {
    title: "Revenue Reporting",
    desc: "Connect subscription and transaction information with dashboards that matter to the SaaS business."
  },
  {
    title: "Subscription Metrics",
    desc: "Track plans, trials, active subscriptions, upgrades, downgrades, cancellations, and other subscription activity."
  },
  {
    title: "Admin Dashboards",
    desc: "Provide internal administrators with tools for customers, users, subscriptions, configuration, support, and system management."
  },
  {
    title: "Custom Reports",
    desc: "Create reporting around the specific operational and commercial metrics your SaaS product needs."
  }
]

const apiIntegrationItems = [
  {
    title: "REST APIs",
    desc: "Build structured APIs for web applications, mobile apps, internal tools, partners, or customer integrations."
  },
  {
    title: "GraphQL Where Appropriate",
    desc: "Use GraphQL when flexible data retrieval provides a practical benefit for the application."
  },
  {
    title: "API Authentication",
    desc: "Protect API access with suitable authentication and authorization mechanisms."
  },
  {
    title: "Rate Limiting",
    desc: "Control excessive requests and protect shared infrastructure from unnecessary API traffic."
  },
  {
    title: "Webhook Events",
    desc: "Send or receive events when important actions occur, such as payments, subscription changes, account updates, or workflow events."
  },
  {
    title: "Webhook Retry Handling",
    desc: "Retry logic can help prevent temporary delivery failures from becoming lost events."
  },
  {
    title: "Signature Verification",
    desc: "Where supported by the connected service, incoming webhook signatures can be verified before processing."
  },
  {
    title: "Third-Party Integrations",
    desc: "Connect payment platforms, CRM systems, communication services, analytics tools, storage systems, email providers, and other required platforms."
  },
  {
    title: "Public API Access",
    desc: "For integration-focused SaaS products, public APIs can become part of the customer-facing product itself."
  }
]

const backgroundJobItems = [
  {
    title: "Queues & Asynchronous Processing",
    desc: "Move time-consuming operations into background processing when immediate execution would create unnecessary delays."
  },
  {
    title: "Scheduled Jobs",
    desc: "Run recurring tasks such as report generation, synchronization, reminders, subscription checks, and maintenance processes."
  },
  {
    title: "Email & SMS Automation",
    desc: "Trigger communications based on account activity, billing events, workflow changes, reminders, or system events."
  },
  {
    title: "Notification Processing",
    desc: "Handle background notifications without blocking the main customer workflow."
  },
  {
    title: "Report Generation",
    desc: "Large reports and exports can be processed in the background and delivered when complete."
  },
  {
    title: "File Processing",
    desc: "Uploads, document conversion, media processing, and other resource-heavy tasks can run asynchronously when appropriate."
  },
  {
    title: "Billing Events",
    desc: "Background processing can handle asynchronous subscription and payment events before updating the product state."
  },
  {
    title: "Retry & Failure Handling",
    desc: "Automated jobs should have suitable retry and failure-handling logic so important tasks do not silently disappear."
  }
]

const securityComplianceItems = [
  {
    title: "Tenant Data Isolation",
    desc: "Customer data should remain separated according to the application's tenant and authorization model."
  },
  {
    title: "Authentication & Authorization",
    desc: "Controls should determine both who can sign in and what each user is allowed to access."
  },
  {
    title: "Role-Based Access",
    desc: "Permissions should be enforced across the interface, APIs, and backend."
  },
  {
    title: "Two-Factor Authentication",
    desc: "Multi-factor authentication can be added where stronger account protection is required."
  },
  {
    title: "Encryption",
    desc: "Sensitive data should be protected through appropriate transmission and storage practices for the application's requirements."
  },
  {
    title: "Audit Logs",
    desc: "Important administrative and security-sensitive actions can be logged for accountability and troubleshooting."
  },
  {
    title: "Secure API Access",
    desc: "API endpoints should validate authentication, permissions, request data, and access to tenant-specific resources."
  },
  {
    title: "Data Backups",
    desc: "Backup strategies should consider database recovery and operational continuity."
  },
  {
    title: "Disaster Recovery",
    desc: "Critical SaaS products may require defined recovery priorities, backup restoration procedures, and documented response processes."
  },
  {
    title: "Data Retention",
    desc: "Retention and deletion behavior can be designed around product requirements and applicable legal obligations."
  },
  {
    title: "Enterprise SSO",
    desc: "Enterprise-focused SaaS products may require centralized identity and SSO integrations."
  }
]

const techStackTable = [
  { layer: "Frontend", technologies: "React, Next.js, Vue, or another suitable framework" },
  { layer: "Backend", technologies: "Node.js, Laravel/PHP, Python, or an existing backend" },
  { layer: "Database", technologies: "PostgreSQL, MySQL, MongoDB, or another suitable database" },
  { layer: "Cache", technologies: "Redis or another suitable caching layer" },
  { layer: "Authentication", technologies: "Session-based authentication, JWT, OAuth, SSO" },
  { layer: "Payments", technologies: "Stripe, Paddle, local gateways, or another required provider" },
  { layer: "APIs", technologies: "REST, GraphQL where appropriate" },
  { layer: "Storage", technologies: "Cloud object storage or another suitable solution" },
  { layer: "Background Processing", technologies: "Queues, workers, scheduled jobs" },
  { layer: "Infrastructure", technologies: "AWS, cloud platforms, containers, or project-specific hosting" },
  { layer: "Development", technologies: "Git, GitHub/GitLab, CI/CD workflows" },
  { layer: "Monitoring", technologies: "Logs, error tracking, analytics, uptime monitoring" },
  { layer: "Testing", technologies: "Unit, integration, API, UI, regression, load testing" },
]

const performanceInfraItems = [
  {
    title: "Horizontal Scaling",
    desc: "Suitable applications can distribute workloads across multiple instances instead of relying on one increasingly overloaded server."
  },
  {
    title: "Database Scaling",
    desc: "Database structure, indexing, query performance, connection management, and data growth should be considered from the beginning."
  },
  {
    title: "Caching",
    desc: "Frequently requested data can be cached where appropriate to reduce unnecessary database and processing work."
  },
  {
    title: "CDN & Asset Delivery",
    desc: "Images, files, downloads, and other static assets can use suitable content-distribution infrastructure when required."
  },
  {
    title: "Load Testing",
    desc: "Performance can be tested against representative traffic and data conditions before major launches or planned growth periods."
  },
  {
    title: "Cloud Deployment",
    desc: "Development, staging, and production environments can be structured around the application's operational needs."
  },
  {
    title: "CI/CD",
    desc: "Automated build, test, and deployment workflows can make controlled product releases easier to manage."
  },
  {
    title: "Monitoring & Alerting",
    desc: "Monitor errors, uptime, infrastructure health, and important system events so problems can be identified earlier."
  },
  {
    title: "Error Tracking",
    desc: "Centralized error tracking can help the team investigate issues without relying only on customer reports."
  },
  {
    title: "Backup & Recovery",
    desc: "Infrastructure planning can include suitable backup, restoration, and recovery procedures based on the product's risk profile."
  }
]

const uiUxDesignItems = [
  {
    title: "Onboarding Experience",
    desc: "Guide new customers toward the first meaningful value instead of overwhelming them with every feature."
  },
  {
    title: "Dashboard Design",
    desc: "Prioritize the information and actions each user needs most often."
  },
  {
    title: "Workflow Design",
    desc: "Break complex processes into clear steps so users understand what to do and what happens next."
  },
  {
    title: "Role-Based Interfaces",
    desc: "Different user types can receive different navigation, views, actions, and controls based on their responsibilities."
  },
  {
    title: "Design Systems",
    desc: "Reusable UI components help maintain consistency across dashboards, forms, settings, billing pages, and workflows."
  },
  {
    title: "Responsive SaaS Interfaces",
    desc: "Design the product for desktop, tablet, or mobile access based on how customers use the software."
  },
  {
    title: "Usability Validation",
    desc: "Important workflows can be evaluated through prototypes, feedback, and iterative design before development is finalized."
  }
]

const mvpDevelopmentItems = [
  {
    title: "Problem & Market Definition",
    desc: "Identify the customer problem, primary users, business model, and core workflow before expanding the feature list."
  },
  {
    title: "Core Feature Selection",
    desc: "Separate essential launch features from functionality that can be introduced during later product releases."
  },
  {
    title: "MVP Architecture",
    desc: "Build the initial architecture around the core product while leaving room for future users, features, billing changes, and integrations."
  },
  {
    title: "Billing & Revenue Path",
    desc: "For subscription products, the MVP should have a practical path from signup to trial or payment."
  },
  {
    title: "User Onboarding",
    desc: "The initial release should help early users understand the product and reach its primary value."
  },
  {
    title: "Initial Analytics",
    desc: "Measure important product events from the beginning so real usage can inform later product decisions."
  },
  {
    title: "Launch Preparation",
    desc: "Prepare the application, infrastructure, integrations, accounts, and operating workflow for the first release."
  },
  {
    title: "Feedback & Iteration",
    desc: "Prioritize future improvements using customer feedback, product usage, support data, and business goals."
  }
]

const scalingModernizationItems = [
  {
    title: "Architecture Refactoring",
    desc: "Improve areas of the codebase that become difficult to maintain as features and users increase."
  },
  {
    title: "Database Scaling",
    desc: "Review schema design, indexing, queries, data volume, and infrastructure as usage grows."
  },
  {
    title: "Performance Optimization",
    desc: "Identify slow workflows, expensive operations, large queries, and other bottlenecks."
  },
  {
    title: "New Integrations",
    desc: "Add payment, communication, CRM, analytics, storage, or other integrations as the product expands."
  },
  {
    title: "Enterprise Features",
    desc: "Add advanced permissions, SSO, reporting, audit logs, account controls, and integrations where required."
  },
  {
    title: "Billing Expansion",
    desc: "Move from simple plans toward tiered, seat-based, usage-based, or more advanced billing models as the business evolves."
  },
  {
    title: "Product Analytics",
    desc: "Expand event tracking and reporting as the product needs more visibility into activation, retention, usage, and customer behavior."
  },
  {
    title: "Legacy Modernization",
    desc: "Review older frameworks, dependencies, architecture, and infrastructure before they become larger maintenance problems."
  }
]

const webMobileItems = [
  {
    title: "SaaS Web Applications",
    desc: "Build browser-based experiences for customer accounts, dashboards, workspaces, workflows, billing, and administration."
  },
  {
    title: "iOS SaaS Apps",
    desc: "Extend suitable SaaS products to iPhone and iPad with dedicated mobile experiences connected to the same backend."
  },
  {
    title: "Android SaaS Apps",
    desc: "Provide Android access for customers, field teams, employees, or other mobile users."
  },
  {
    title: "Cross-Platform SaaS Apps",
    desc: "Use Flutter or React Native when a shared mobile development approach fits the product."
  },
  {
    title: "Shared Backend & Authentication",
    desc: "Web and mobile applications can connect to the same APIs, accounts, permissions, billing records, and business data."
  },
  {
    title: "Unified Customer Experience",
    desc: "Customers should be able to move between supported platforms without creating disconnected accounts or inconsistent workflows."
  }
]

const testingQaItems = [
  {
    title: "Functional Testing",
    desc: "Verify registration, authentication, dashboards, forms, workflows, billing, permissions, and core product functionality."
  },
  {
    title: "Multi-Tenant Testing",
    desc: "Test tenant isolation and access controls to confirm that one customer cannot access another customer's data."
  },
  {
    title: "Billing Testing",
    desc: "Test trials, subscriptions, upgrades, downgrades, cancellations, failed payments, invoices, webhooks, and plan-based access."
  },
  {
    title: "API Testing",
    desc: "Validate authentication, permissions, request handling, data responses, and important integration workflows."
  },
  {
    title: "Performance Testing",
    desc: "Test important workflows under representative traffic and data conditions."
  },
  {
    title: "Security Testing",
    desc: "Review authentication, authorization, tenant boundaries, sensitive operations, and security-related behavior."
  },
  {
    title: "Regression Testing",
    desc: "After major changes, affected product areas should be tested again before release."
  },
  {
    title: "User Acceptance Testing",
    desc: "Approved stakeholders can validate important business workflows before production deployment."
  }
]

const deploymentHandoffItems = [
  {
    title: "Source Code Ownership",
    desc: "The agreed source code is delivered according to the project scope and contract terms."
  },
  {
    title: "Cloud Account Ownership",
    desc: "Where appropriate, infrastructure can be maintained under the client's account or another agreed ownership structure."
  },
  {
    title: "Database Access",
    desc: "Appropriate database access, credentials, and documentation can be handed over according to the project's security model."
  },
  {
    title: "Environment Configuration",
    desc: "Development, staging, and production environments can be documented so the application remains understandable after launch."
  },
  {
    title: "Deployment Documentation",
    desc: "Provide the information needed to understand how the application is built, deployed, and maintained."
  },
  {
    title: "API Documentation",
    desc: "Document important APIs and integration points required for ongoing development."
  },
  {
    title: "Admin Access",
    desc: "Provide the agreed access to administrative interfaces and product-management tools."
  },
  {
    title: "Technical Handoff",
    desc: "At project completion, the agreed files, credentials, documentation, and other deliverables are handed over for continued operation."
  }
]

const deliverablesList = [
  {
    title: "Product Strategy",
    desc: "Business requirements, user journeys, product roadmap, SaaS model, and technical planning."
  },
  {
    title: "Multi-Tenant Architecture",
    desc: "Tenant structure, data model, access control, and scalability planning."
  },
  {
    title: "UI/UX",
    desc: "Onboarding flows, dashboards, workflows, design systems, responsive interfaces, and prototypes."
  },
  {
    title: "SaaS Application",
    desc: "Frontend and backend development around the approved features and business workflows."
  },
  {
    title: "Billing & Integrations",
    desc: "Subscription logic, payment integrations, APIs, webhooks, notifications, analytics, and other agreed services."
  },
  {
    title: "Security & Testing",
    desc: "Authentication, permissions, tenant isolation, functional testing, integration testing, performance testing, and release validation."
  },
  {
    title: "Deployment",
    desc: "Production setup, deployment support, monitoring, domains, and other agreed infrastructure work."
  },
  {
    title: "Handoff & Documentation",
    desc: "Source code, technical documentation, API information, access credentials, and other agreed project deliverables."
  }
]

const whyChooseUs = [
  {
    title: "One In-House Team",
    desc: "Strategy, product design, development, integrations, testing, and launch stay within one coordinated team."
  },
  {
    title: "Architecture First, Features Second",
    desc: "We begin with tenant structure, data architecture, business rules, and product requirements before expanding the feature list."
  },
  {
    title: "Business-First Development",
    desc: "We consider how customers will use, pay for, and grow with the product instead of focusing only on technical implementation."
  },
  {
    title: "Scalable Product Thinking",
    desc: "The application is planned around future users, features, integrations, and operational requirements."
  },
  {
    title: "Clear Review Points",
    desc: "Important requirements, designs, product milestones, and release stages are reviewed before moving forward."
  },
  {
    title: "Platform & Technology-Neutral Advice",
    desc: "We recommend the technology and architecture that fit the product rather than forcing every SaaS project into the same solution."
  },
  {
    title: "Long-Term Support",
    desc: "The same team can continue with feature development, maintenance, platform updates, performance work, and integrations after launch."
  }
]

const portfolioFramework = [
  {
    title: "Project Overview",
    desc: "Explain what the SaaS product does, who uses it, and what business model it supports."
  },
  {
    title: "Business Challenge",
    desc: "Describe the customer's operational, revenue, workflow, or product problem before development."
  },
  {
    title: "SaaS Architecture",
    desc: "Show the tenancy model, user structure, billing system, APIs, integrations, or other important architecture decisions."
  },
  {
    title: "Product Features",
    desc: "Highlight the features that make the product useful to customers."
  },
  {
    title: "Technology Stack",
    desc: "Show the actual frontend, backend, database, infrastructure, and integration technologies used."
  },
  {
    title: "Development & Deployment",
    desc: "Explain how the product moved from requirements and design through development, testing, deployment, and iteration."
  },
  {
    title: "Verified Outcome",
    desc: "Use only verified results such as product launch, customer adoption, subscription growth, operational improvements, or other client-approved metrics."
  }
]

export default function Offerings() {
  return (
    <section id="offerings" className="border-t-2 border-frame-border bg-frame-bg px-4 py-20 md:px-8 md:py-32 scroll-mt-20">
      <div className="mx-auto max-w-[95vw]">

        {/* SECTION 1: WHAT IS SAAS APP DEVELOPMENT? */}
        <div>
          <SectionIntro
            eyebrow="Core Definition"
            title="What Is SaaS App Development?"
          >
            SaaS app development is the process of building software that customers access as an ongoing online service instead of installing and managing a separate copy. A SaaS product usually combines the application itself with customer accounts, tenant management, billing, permissions, analytics, integrations, and infrastructure designed for continuous operation.
          </SectionIntro>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {whatIsSaas.map((item, i) => (
              <div
                key={i}
                className="group relative flex flex-col justify-between border-2 border-frame-border bg-frame-bg p-6 md:p-8 transition-colors hover:border-frame-accent"
              >
                <div>
                  <span className="text-xs font-black uppercase tracking-[0.24em] text-frame-accent">
                    Concept 0{i + 1}
                  </span>
                  <h3 className="mt-2 font-heading text-lg md:text-xl font-bold uppercase tracking-tight text-frame-fg">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-xs md:text-sm font-medium leading-relaxed text-frame-muted-fg">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* SECTION 2: OUR SAAS APP DEVELOPMENT SERVICES */}
        <div className="mt-28 border-2 border-frame-border bg-frame-bg p-6 md:p-12">
          <div className="mb-8">
            <span className="text-xs font-black uppercase tracking-[0.28em] text-frame-accent">
              Core Capabilities
            </span>
            <h2 className="mt-2 font-heading text-2xl md:text-4xl font-bold uppercase tracking-tight text-frame-fg">
              Our SaaS App Development Services
            </h2>
            <p className="mt-3 max-w-3xl text-sm md:text-base font-medium leading-relaxed text-frame-muted-fg">
              We build SaaS products around your business model, customer journey, technical requirements, and long-term product roadmap.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {saasServices.map((item, i) => (
              <div
                key={i}
                className="border-2 border-frame-border bg-frame-muted/10 p-6 transition-colors hover:border-frame-accent"
              >
                <span className="text-xs font-black uppercase tracking-[0.2em] text-frame-accent">
                  Service 0{i + 1}
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

        {/* SECTION 3: TYPES OF SAAS WE BUILD */}
        <div className="mt-28 border-2 border-frame-border bg-frame-bg p-6 md:p-12">
          <div className="mb-8">
            <span className="text-xs font-black uppercase tracking-[0.28em] text-frame-accent">
              Industry Verticals &amp; Models
            </span>
            <h2 className="mt-2 font-heading text-2xl md:text-4xl font-bold uppercase tracking-tight text-frame-fg">
              Types of SaaS We Build
            </h2>
            <p className="mt-3 max-w-3xl text-sm md:text-base font-medium leading-relaxed text-frame-muted-fg">
              We build SaaS products around different customer models, industries, and operational workflows.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {typesOfSaas.map((item, i) => (
              <div
                key={i}
                className="border-2 border-frame-border bg-frame-muted/10 p-6 transition-colors hover:border-frame-accent"
              >
                <span className="text-xs font-black uppercase tracking-[0.2em] text-frame-accent">
                  Category {i + 1 < 10 ? `0${i + 1}` : i + 1}
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

        {/* SECTION 4: WHY BUSINESSES BUILD SAAS PRODUCTS */}
        <div className="mt-28 border-2 border-frame-border bg-frame-bg p-6 md:p-12">
          <div className="mb-8">
            <span className="text-xs font-black uppercase tracking-[0.28em] text-frame-accent">
              Strategic Advantages
            </span>
            <h2 className="mt-2 font-heading text-2xl md:text-4xl font-bold uppercase tracking-tight text-frame-fg">
              Why Businesses Build SaaS Products
            </h2>
            <p className="mt-3 max-w-3xl text-sm md:text-base font-medium leading-relaxed text-frame-muted-fg">
              SaaS changes not only how software is delivered, but also how the product is priced, managed, improved, and scaled.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {whyBuildSaas.map((item, i) => (
              <div
                key={i}
                className="border-2 border-frame-border bg-frame-muted/10 p-6 transition-colors hover:border-frame-accent"
              >
                <span className="text-xs font-black uppercase tracking-[0.2em] text-frame-accent">
                  Driver 0{i + 1}
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

        {/* SECTION 5: MULTI-TENANT SAAS ARCHITECTURE */}
        <div className="mt-28 border-2 border-frame-border bg-frame-bg p-6 md:p-12">
          <div className="mb-8">
            <span className="text-xs font-black uppercase tracking-[0.28em] text-frame-accent">
              System Engineering
            </span>
            <h2 className="mt-2 font-heading text-2xl md:text-4xl font-bold uppercase tracking-tight text-frame-fg">
              Multi-Tenant SaaS Architecture
            </h2>
            <p className="mt-3 max-w-3xl text-sm md:text-base font-medium leading-relaxed text-frame-muted-fg">
              Multi-tenancy is one of the core architectural decisions that separates SaaS from ordinary application development.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {multiTenantArch.map((item, i) => (
              <div
                key={i}
                className="border-2 border-frame-border bg-frame-muted/10 p-6 transition-colors hover:border-frame-accent"
              >
                <span className="text-xs font-black uppercase tracking-[0.2em] text-frame-accent">
                  Architectural Pillar 0{i + 1}
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

        {/* SECTION 6: SAAS SUBSCRIPTION BILLING & MONETIZATION */}
        <div className="mt-28 border-2 border-frame-border bg-frame-bg p-6 md:p-12">
          <div className="mb-8">
            <span className="text-xs font-black uppercase tracking-[0.28em] text-frame-accent">
              Revenue Engineering
            </span>
            <h2 className="mt-2 font-heading text-2xl md:text-4xl font-bold uppercase tracking-tight text-frame-fg">
              SaaS Subscription Billing &amp; Monetization
            </h2>
            <p className="mt-3 max-w-3xl text-sm md:text-base font-medium leading-relaxed text-frame-muted-fg">
              Billing is part of the product architecture, not simply a payment form added to the final screen.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {billingItems.map((item, i) => (
              <div
                key={i}
                className="border-2 border-frame-border bg-frame-muted/10 p-6 transition-colors hover:border-frame-accent"
              >
                <span className="text-xs font-black uppercase tracking-[0.2em] text-frame-accent">
                  Monetization Feature {i + 1 < 10 ? `0${i + 1}` : i + 1}
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

        {/* SECTION 7: SAAS USER, TEAM & ROLE MANAGEMENT */}
        <div className="mt-28 border-2 border-frame-border bg-frame-bg p-6 md:p-12">
          <div className="mb-8">
            <span className="text-xs font-black uppercase tracking-[0.28em] text-frame-accent">
              Access Control &amp; RBAC
            </span>
            <h2 className="mt-2 font-heading text-2xl md:text-4xl font-bold uppercase tracking-tight text-frame-fg">
              SaaS User, Team &amp; Role Management
            </h2>
            <p className="mt-3 max-w-3xl text-sm md:text-base font-medium leading-relaxed text-frame-muted-fg">
              Many SaaS products serve organizations rather than individual users, making account structure a core feature.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {userManagementItems.map((item, i) => (
              <div
                key={i}
                className="border-2 border-frame-border bg-frame-muted/10 p-6 transition-colors hover:border-frame-accent"
              >
                <span className="text-xs font-black uppercase tracking-[0.2em] text-frame-accent">
                  Control Module 0{i + 1}
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

        {/* SECTION 8: SAAS ONBOARDING & ACTIVATION */}
        <div className="mt-28 border-2 border-frame-border bg-frame-bg p-6 md:p-12">
          <div className="mb-8">
            <span className="text-xs font-black uppercase tracking-[0.28em] text-frame-accent">
              Product-Led Growth
            </span>
            <h2 className="mt-2 font-heading text-2xl md:text-4xl font-bold uppercase tracking-tight text-frame-fg">
              SaaS Onboarding &amp; Activation
            </h2>
            <p className="mt-3 max-w-3xl text-sm md:text-base font-medium leading-relaxed text-frame-muted-fg">
              Signing up is only the first step. The product also needs to help new customers reach value.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {onboardingItems.map((item, i) => (
              <div
                key={i}
                className="border-2 border-frame-border bg-frame-muted/10 p-6 transition-colors hover:border-frame-accent"
              >
                <span className="text-xs font-black uppercase tracking-[0.2em] text-frame-accent">
                  Activation Flow 0{i + 1}
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

        {/* SECTION 9: SAAS ANALYTICS & ADMIN DASHBOARDS */}
        <div className="mt-28 border-2 border-frame-border bg-frame-bg p-6 md:p-12">
          <div className="mb-8">
            <span className="text-xs font-black uppercase tracking-[0.28em] text-frame-accent">
              Operational Visibility
            </span>
            <h2 className="mt-2 font-heading text-2xl md:text-4xl font-bold uppercase tracking-tight text-frame-fg">
              SaaS Analytics &amp; Admin Dashboards
            </h2>
            <p className="mt-3 max-w-3xl text-sm md:text-base font-medium leading-relaxed text-frame-muted-fg">
              SaaS products need visibility into both customer behavior and business performance.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
            {analyticsItems.map((item, i) => (
              <div
                key={i}
                className="border-2 border-frame-border bg-frame-muted/10 p-6 transition-colors hover:border-frame-accent"
              >
                <span className="text-xs font-black uppercase tracking-[0.2em] text-frame-accent">
                  Telemetry {i + 1 < 10 ? `0${i + 1}` : i + 1}
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

        {/* SECTION 10: SAAS APIS, WEBHOOKS & INTEGRATIONS */}
        <div className="mt-28 border-2 border-frame-border bg-frame-bg p-6 md:p-12">
          <div className="mb-8">
            <span className="text-xs font-black uppercase tracking-[0.28em] text-frame-accent">
              Ecosystem Connectivity
            </span>
            <h2 className="mt-2 font-heading text-2xl md:text-4xl font-bold uppercase tracking-tight text-frame-fg">
              SaaS APIs, Webhooks &amp; Integrations
            </h2>
            <p className="mt-3 max-w-3xl text-sm md:text-base font-medium leading-relaxed text-frame-muted-fg">
              Modern SaaS products often need to connect with other software, services, and customer systems.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {apiIntegrationItems.map((item, i) => (
              <div
                key={i}
                className="border-2 border-frame-border bg-frame-muted/10 p-6 transition-colors hover:border-frame-accent"
              >
                <span className="text-xs font-black uppercase tracking-[0.2em] text-frame-accent">
                  Integration Layer 0{i + 1}
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

        {/* SECTION 11: BACKGROUND JOBS & SAAS AUTOMATION */}
        <div className="mt-28 border-2 border-frame-border bg-frame-bg p-6 md:p-12">
          <div className="mb-8">
            <span className="text-xs font-black uppercase tracking-[0.28em] text-frame-accent">
              Asynchronous Processing
            </span>
            <h2 className="mt-2 font-heading text-2xl md:text-4xl font-bold uppercase tracking-tight text-frame-fg">
              Background Jobs &amp; SaaS Automation
            </h2>
            <p className="mt-3 max-w-3xl text-sm md:text-base font-medium leading-relaxed text-frame-muted-fg">
              Not every operation should happen while the customer waits for a screen to finish loading.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {backgroundJobItems.map((item, i) => (
              <div
                key={i}
                className="border-2 border-frame-border bg-frame-muted/10 p-6 transition-colors hover:border-frame-accent"
              >
                <span className="text-xs font-black uppercase tracking-[0.2em] text-frame-accent">
                  Worker Task 0{i + 1}
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

        {/* SECTION 12: SAAS SECURITY, PRIVACY & COMPLIANCE */}
        <div className="mt-28 border-2 border-frame-border bg-frame-bg p-6 md:p-12">
          <div className="mb-8">
            <span className="text-xs font-black uppercase tracking-[0.28em] text-frame-accent">
              Enterprise Governance
            </span>
            <h2 className="mt-2 font-heading text-2xl md:text-4xl font-bold uppercase tracking-tight text-frame-fg">
              SaaS Security, Privacy &amp; Compliance
            </h2>
            <p className="mt-3 max-w-3xl text-sm md:text-base font-medium leading-relaxed text-frame-muted-fg">
              A SaaS platform can hold customer accounts, business records, payment information, internal workflows, and sensitive operational data.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {securityComplianceItems.map((item, i) => (
              <div
                key={i}
                className="border-2 border-frame-border bg-frame-muted/10 p-6 transition-colors hover:border-frame-accent"
              >
                <span className="text-xs font-black uppercase tracking-[0.2em] text-frame-accent">
                  Security Control {i + 1 < 10 ? `0${i + 1}` : i + 1}
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

        {/* SECTION 13: SAAS TECHNOLOGY STACK */}
        <div className="mt-28 border-2 border-frame-border bg-frame-bg p-6 md:p-12">
          <div className="mb-8">
            <span className="text-xs font-black uppercase tracking-[0.28em] text-frame-accent">
              Architecture &amp; Frameworks
            </span>
            <h2 className="mt-2 font-heading text-2xl md:text-4xl font-bold uppercase tracking-tight text-frame-fg">
              SaaS Technology Stack
            </h2>
            <p className="mt-3 max-w-3xl text-sm md:text-base font-medium leading-relaxed text-frame-muted-fg">
              We choose technologies based on the application&apos;s requirements rather than forcing every SaaS product into one fixed stack.
            </p>
          </div>

          <div className="overflow-x-auto border-2 border-frame-border">
            <table className="w-full text-left text-sm">
              <thead className="border-b-2 border-frame-border bg-frame-muted/50 font-heading text-xs uppercase tracking-wider text-frame-fg">
                <tr>
                  <th className="p-4 border-r-2 border-frame-border w-1/3">Layer</th>
                  <th className="p-4">Technologies</th>
                </tr>
              </thead>
              <tbody className="divide-y-2 divide-frame-border text-frame-muted-fg">
                {techStackTable.map((row, rIdx) => (
                  <tr key={rIdx} className="hover:bg-frame-muted/20 transition-colors">
                    <td className="p-4 font-semibold text-frame-fg border-r-2 border-frame-border">
                      {row.layer}
                    </td>
                    <td className="p-4 font-medium text-frame-fg">
                      {row.technologies}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="mt-6 text-xs md:text-sm font-semibold uppercase tracking-wider text-frame-accent">
            The final stack depends on the product, expected usage, existing systems, security requirements, and long-term roadmap.
          </p>
        </div>

        {/* SECTION 14: SAAS PERFORMANCE, SCALABILITY & CLOUD INFRASTRUCTURE */}
        <div className="mt-28 border-2 border-frame-border bg-frame-bg p-6 md:p-12">
          <div className="mb-8">
            <span className="text-xs font-black uppercase tracking-[0.28em] text-frame-accent">
              High Availability
            </span>
            <h2 className="mt-2 font-heading text-2xl md:text-4xl font-bold uppercase tracking-tight text-frame-fg">
              SaaS Performance, Scalability &amp; Cloud Infrastructure
            </h2>
            <p className="mt-3 max-w-3xl text-sm md:text-base font-medium leading-relaxed text-frame-muted-fg">
              Your infrastructure should support the product you are building today while leaving a clear path for future growth.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
            {performanceInfraItems.map((item, i) => (
              <div
                key={i}
                className="border-2 border-frame-border bg-frame-muted/10 p-6 transition-colors hover:border-frame-accent"
              >
                <span className="text-xs font-black uppercase tracking-[0.2em] text-frame-accent">
                  Infra Component {i + 1 < 10 ? `0${i + 1}` : i + 1}
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

        {/* SECTION 15: SAAS UI/UX & PRODUCT DESIGN */}
        <div className="mt-28 border-2 border-frame-border bg-frame-bg p-6 md:p-12">
          <div className="mb-8">
            <span className="text-xs font-black uppercase tracking-[0.28em] text-frame-accent">
              Interface Ergonomics
            </span>
            <h2 className="mt-2 font-heading text-2xl md:text-4xl font-bold uppercase tracking-tight text-frame-fg">
              SaaS UI/UX &amp; Product Design
            </h2>
            <p className="mt-3 max-w-3xl text-sm md:text-base font-medium leading-relaxed text-frame-muted-fg">
              A SaaS interface often needs to serve new trial users, regular users, team members, managers, and administrators.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {uiUxDesignItems.map((item, i) => (
              <div
                key={i}
                className="border-2 border-frame-border bg-frame-muted/10 p-6 transition-colors hover:border-frame-accent"
              >
                <span className="text-xs font-black uppercase tracking-[0.2em] text-frame-accent">
                  Design Principle 0{i + 1}
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

        {/* SECTION 16: SAAS MVP DEVELOPMENT: FROM IDEA TO FIRST USERS */}
        <div className="mt-28 border-2 border-frame-border bg-frame-bg p-6 md:p-12">
          <div className="mb-8">
            <span className="text-xs font-black uppercase tracking-[0.28em] text-frame-accent">
              Lean Validation
            </span>
            <h2 className="mt-2 font-heading text-2xl md:text-4xl font-bold uppercase tracking-tight text-frame-fg">
              SaaS MVP Development: From Idea to First Users
            </h2>
            <p className="mt-3 max-w-3xl text-sm md:text-base font-medium leading-relaxed text-frame-muted-fg">
              An MVP should validate the core product without creating unnecessary complexity.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {mvpDevelopmentItems.map((item, i) => (
              <div
                key={i}
                className="border-2 border-frame-border bg-frame-muted/10 p-6 transition-colors hover:border-frame-accent"
              >
                <span className="text-xs font-black uppercase tracking-[0.2em] text-frame-accent">
                  MVP Discipline 0{i + 1}
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

        {/* SECTION 17: SAAS SCALING & PRODUCT MODERNIZATION */}
        <div className="mt-28 border-2 border-frame-border bg-frame-bg p-6 md:p-12">
          <div className="mb-8">
            <span className="text-xs font-black uppercase tracking-[0.28em] text-frame-accent">
              Lifecycle Evolution
            </span>
            <h2 className="mt-2 font-heading text-2xl md:text-4xl font-bold uppercase tracking-tight text-frame-fg">
              SaaS Scaling &amp; Product Modernization
            </h2>
            <p className="mt-3 max-w-3xl text-sm md:text-base font-medium leading-relaxed text-frame-muted-fg">
              Growth can expose limitations that were not visible during the initial release.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {scalingModernizationItems.map((item, i) => (
              <div
                key={i}
                className="border-2 border-frame-border bg-frame-muted/10 p-6 transition-colors hover:border-frame-accent"
              >
                <span className="text-xs font-black uppercase tracking-[0.2em] text-frame-accent">
                  Scale Strategy 0{i + 1}
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

        {/* SECTION 18: SAAS WEB & MOBILE APP DEVELOPMENT */}
        <div className="mt-28 border-2 border-frame-border bg-frame-bg p-6 md:p-12">
          <div className="mb-8">
            <span className="text-xs font-black uppercase tracking-[0.28em] text-frame-accent">
              Multi-Device Access
            </span>
            <h2 className="mt-2 font-heading text-2xl md:text-4xl font-bold uppercase tracking-tight text-frame-fg">
              SaaS Web &amp; Mobile App Development
            </h2>
            <p className="mt-3 max-w-3xl text-sm md:text-base font-medium leading-relaxed text-frame-muted-fg">
              Your SaaS product may need to serve customers across more than one interface.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {webMobileItems.map((item, i) => (
              <div
                key={i}
                className="border-2 border-frame-border bg-frame-muted/10 p-6 transition-colors hover:border-frame-accent"
              >
                <span className="text-xs font-black uppercase tracking-[0.2em] text-frame-accent">
                  Platform Surface 0{i + 1}
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

        {/* SECTION 19: SAAS TESTING & QUALITY ASSURANCE */}
        <div className="mt-28 border-2 border-frame-border bg-frame-bg p-6 md:p-12">
          <div className="mb-8">
            <span className="text-xs font-black uppercase tracking-[0.28em] text-frame-accent">
              Systematic QA
            </span>
            <h2 className="mt-2 font-heading text-2xl md:text-4xl font-bold uppercase tracking-tight text-frame-fg">
              SaaS Testing &amp; Quality Assurance
            </h2>
            <p className="mt-3 max-w-3xl text-sm md:text-base font-medium leading-relaxed text-frame-muted-fg">
              A SaaS product needs testing across customer workflows and the systems that support them.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {testingQaItems.map((item, i) => (
              <div
                key={i}
                className="border-2 border-frame-border bg-frame-muted/10 p-6 transition-colors hover:border-frame-accent"
              >
                <span className="text-xs font-black uppercase tracking-[0.2em] text-frame-accent">
                  QA Protocol 0{i + 1}
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

        {/* SECTION 20: SAAS DEPLOYMENT, OWNERSHIP & HANDOFF */}
        <div className="mt-28 border-2 border-frame-border bg-frame-bg p-6 md:p-12">
          <div className="mb-8">
            <span className="text-xs font-black uppercase tracking-[0.28em] text-frame-accent">
              IP &amp; Infrastructure Control
            </span>
            <h2 className="mt-2 font-heading text-2xl md:text-4xl font-bold uppercase tracking-tight text-frame-fg">
              SaaS Deployment, Ownership &amp; Handoff
            </h2>
            <p className="mt-3 max-w-3xl text-sm md:text-base font-medium leading-relaxed text-frame-muted-fg">
              A SaaS project should leave you with a clear understanding of the product and the infrastructure that runs it.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {deploymentHandoffItems.map((item, i) => (
              <div
                key={i}
                className="border-2 border-frame-border bg-frame-muted/10 p-6 transition-colors hover:border-frame-accent"
              >
                <span className="text-xs font-black uppercase tracking-[0.2em] text-frame-accent">
                  Deliverable Standard 0{i + 1}
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

        {/* SECTION 21: WHAT YOU RECEIVE FROM A SAAS DEVELOPMENT PROJECT */}
        <div className="mt-28 border-2 border-frame-border bg-frame-bg p-6 md:p-12">
          <div className="mb-8">
            <span className="text-xs font-black uppercase tracking-[0.28em] text-frame-accent">
              Tangible Outcomes
            </span>
            <h2 className="mt-2 font-heading text-2xl md:text-4xl font-bold uppercase tracking-tight text-frame-fg">
              What You Receive From a SaaS Development Project
            </h2>
            <p className="mt-3 max-w-3xl text-sm md:text-base font-medium leading-relaxed text-frame-muted-fg">
              Your final deliverables depend on the approved project scope, but a complete SaaS engagement can include:
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {deliverablesList.map((item, i) => (
              <div
                key={i}
                className="border-2 border-frame-border bg-frame-muted/10 p-6 transition-colors hover:border-frame-accent"
              >
                <span className="text-xs font-black uppercase tracking-[0.2em] text-frame-accent">
                  Package Element 0{i + 1}
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

        {/* SECTION 22: WHY CHOOSE FRAMECIPHER FOR SAAS APP DEVELOPMENT */}
        <div className="mt-28 border-2 border-frame-border bg-frame-bg p-6 md:p-12">
          <div className="mb-8">
            <span className="text-xs font-black uppercase tracking-[0.28em] text-frame-accent">
              Engineering Excellence
            </span>
            <h2 className="mt-2 font-heading text-2xl md:text-4xl font-bold uppercase tracking-tight text-frame-fg">
              Why Choose Framecipher for SaaS App Development
            </h2>
            <p className="mt-3 max-w-3xl text-sm md:text-base font-medium leading-relaxed text-frame-muted-fg">
              Strategic, technical, and operational reasons to partner with our dedicated in-house product team.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {whyChooseUs.map((item, i) => (
              <div
                key={i}
                className="border-2 border-frame-border bg-frame-muted/10 p-6 transition-colors hover:border-frame-accent"
              >
                <span className="text-xs font-black uppercase tracking-[0.2em] text-frame-accent">
                  Differentiator 0{i + 1}
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

        {/* SECTION 23: SAAS APP DEVELOPMENT PORTFOLIO & CASE STUDIES */}
        <div className="mt-28 border-2 border-frame-border bg-frame-bg p-6 md:p-12">
          <div className="mb-8">
            <span className="text-xs font-black uppercase tracking-[0.28em] text-frame-accent">
              Evidence &amp; Case Studies
            </span>
            <h2 className="mt-2 font-heading text-2xl md:text-4xl font-bold uppercase tracking-tight text-frame-fg">
              SaaS App Development Portfolio &amp; Case Studies
            </h2>
            <p className="mt-3 max-w-3xl text-sm md:text-base font-medium leading-relaxed text-frame-muted-fg">
              Use real product evidence to show what Framecipher has actually built.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {portfolioFramework.map((item, i) => (
              <div
                key={i}
                className="border-2 border-frame-border bg-frame-muted/10 p-6 transition-colors hover:border-frame-accent"
              >
                <span className="text-xs font-black uppercase tracking-[0.2em] text-frame-accent">
                  Evidence Point 0{i + 1}
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
              Only publish genuine Framecipher projects, screenshots, links, and measurable results.
            </p>
          </div>
        </div>

        {/* SECTION 24: SAAS APP DEVELOPMENT SERVICES ACROSS BANGLADESH & WORLDWIDE */}
        <div className="mt-28 border-2 border-frame-border bg-frame-muted/20 p-6 md:p-12">
          <span className="text-xs font-black uppercase tracking-[0.28em] text-frame-accent">
            Domestic &amp; Global Reach
          </span>
          <h2 className="mt-2 font-heading text-2xl md:text-4xl font-bold uppercase tracking-tight text-frame-fg">
            SaaS App Development Services Across Bangladesh &amp; Worldwide
          </h2>
          <div className="mt-6 max-w-4xl space-y-4 text-sm md:text-base font-medium leading-relaxed text-frame-muted-fg">
            <p>
              Framecipher provides SaaS app development services from Dhaka, Bangladesh for startups, businesses, and organizations across the country and international markets.
            </p>
            <p>
              We work with businesses in Dhaka, Chattogram, Sylhet, Rajshahi, Khulna, Gazipur, Narayanganj, and other locations across Bangladesh.
            </p>
            <p>
              Our remote development workflow also supports clients in the USA, UK, Australia, Canada, UAE, and other international markets.
            </p>
            <p className="font-semibold text-frame-fg">
              For Bangladesh-focused SaaS products, local payment integrations can be considered where required. International products can be structured around regional payment, billing, data, and operational requirements based on the project scope.
            </p>
          </div>
          <div className="mt-8">
            <PosterButton href="/contact">Start Your SaaS Project &rarr;</PosterButton>
          </div>
        </div>

      </div>
    </section>
  )
}
