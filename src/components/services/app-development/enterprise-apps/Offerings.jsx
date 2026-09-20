import { SectionIntro, PosterButton } from '../../../Kinetic'

const whatIsEnterprise = [
  {
    title: "Enterprise vs Business Applications",
    desc: "A business application may support one team or a limited workflow. Enterprise applications often need to support multiple departments, locations, roles, systems, and approval structures."
  },
  {
    title: "Enterprise vs Off-the-Shelf Software",
    desc: "Off-the-shelf software provides a predefined way to work. Custom enterprise software can be designed around the organization's existing processes, rules, data, and operational requirements."
  },
  {
    title: "Multi-Department Systems",
    desc: "Enterprise applications can connect finance, HR, sales, operations, procurement, logistics, customer service, and management through shared workflows and controlled access."
  },
  {
    title: "Mission-Critical Business Applications",
    desc: "Some enterprise systems support daily operations that employees rely on continuously. Availability, data integrity, security, and dependable integrations therefore become core requirements."
  },
  {
    title: "Enterprise Web & Mobile Applications",
    desc: "Enterprise solutions can include web platforms, employee portals, customer systems, dashboards, mobile applications, and connected operational tools."
  }
]

const enterpriseServices = [
  {
    title: "Discovery & Stakeholder Alignment",
    desc: "We identify business goals, user groups, workflows, existing systems, technical constraints, and project requirements before development begins."
  },
  {
    title: "System Architecture & Integration Planning",
    desc: "We define the application structure, data flow, security model, integrations, dependencies, and scalability requirements based on the project."
  },
  {
    title: "Enterprise UI/UX Design",
    desc: "We design role-based dashboards, forms, navigation, workflows, and interfaces around how employees, managers, customers, and other users interact with the system."
  },
  {
    title: "Custom Enterprise Application Development",
    desc: "We develop web, mobile, or connected enterprise applications around approved business requirements, workflows, and technical architecture."
  },
  {
    title: "Enterprise Systems Integration",
    desc: "We connect the application with ERP, CRM, HRMS, accounting platforms, legacy databases, identity providers, APIs, and other required systems."
  },
  {
    title: "Legacy Application Modernization",
    desc: "We modernize outdated applications, interfaces, databases, or infrastructure while preserving the business capabilities the organization still depends on."
  },
  {
    title: "Enterprise Mobile App Development",
    desc: "We build mobile applications for employees, field teams, sales representatives, customers, managers, and other enterprise users."
  },
  {
    title: "Quality Assurance & Testing",
    desc: "We validate functionality, integrations, permissions, security, performance, and critical business workflows before production release."
  },
  {
    title: "Deployment & Release Support",
    desc: "We support environment preparation, production deployment, release coordination, launch activities, and initial post-release monitoring according to project scope."
  },
  {
    title: "Ongoing Support \u0026 Maintenance",
    desc: "We provide post-launch bug fixes, security updates, integration support, performance optimization, maintenance, and future development through an agreed support arrangement."
  },
  {
    title: "Post-Launch Review",
    desc: "After the initial release, we review production performance, user adoption signals, and operational issues to identify early improvements."
  },
  {
    title: "Training \u0026 Knowledge Transfer",
    desc: "We help the organization understand how the new application works, including user guides, admin documentation, and team handoff materials."
  }
]

const enterpriseApps = [
  {
    title: "ERP & Business Management Systems",
    desc: "Custom modules and business platforms for finance, inventory, procurement, operations, reporting, and related processes."
  },
  {
    title: "CRM & Customer Platforms",
    desc: "Applications for customer records, leads, sales workflows, service operations, communication, and customer self-service."
  },
  {
    title: "HRMS & Workforce Systems",
    desc: "Software for employee records, attendance, leave, recruitment, workforce management, scheduling, and internal HR workflows."
  },
  {
    title: "Finance & Accounting Applications",
    desc: "Applications for invoices, expenses, approvals, financial records, reporting, payment workflows, and accounting operations."
  },
  {
    title: "Supply Chain & Logistics Platforms",
    desc: "Systems for purchasing, inventory, warehouses, orders, transportation, delivery, and supply-chain management."
  },
  {
    title: "Procurement Systems",
    desc: "Platforms for purchase requests, vendor management, approval workflows, purchase orders, procurement tracking, and reporting."
  },
  {
    title: "Customer & Employee Portals",
    desc: "Secure portals that give customers, employees, partners, or vendors access to approved information and business workflows."
  },
  {
    title: "Field Operations Applications",
    desc: "Applications for technicians, inspectors, sales representatives, delivery teams, service staff, and other field-based workers."
  },
  {
    title: "Enterprise Mobile Apps",
    desc: "Mobile applications that connect employees, customers, partners, or field teams with enterprise systems."
  },
  {
    title: "Internal Operations Platforms",
    desc: "Custom tools for task management, approvals, operations, records, reporting, and department-specific workflows."
  },
  {
    title: "Reporting & Management Systems",
    desc: "Dashboards and reporting platforms that organize operational information for managers and decision-makers."
  }
]

const whyMoreThanCoding = [
  {
    title: "Complex Business Workflows",
    desc: "Enterprise processes can involve several roles, departments, approvals, conditions, and handoffs. The application must reflect those relationships accurately."
  },
  {
    title: "Existing System Dependencies",
    desc: "Your new system may need to work with platforms that already support critical business operations. Replacing everything at once is not always practical."
  },
  {
    title: "Security & Governance",
    desc: "Enterprise systems may handle sensitive business, employee, customer, or financial information. Access, security, and auditability need to be considered from the beginning."
  },
  {
    title: "Data & Integration Complexity",
    desc: "Important information may exist across multiple systems. The application needs reliable ways to exchange and synchronize data without creating unnecessary manual work."
  },
  {
    title: "User Adoption",
    desc: "A technically functional system can still create problems when its workflows do not match how employees actually work."
  },
  {
    title: "Long-Term Reliability",
    desc: "Enterprise software may remain in use for years. Architecture, infrastructure, documentation, monitoring, and maintenance therefore need to be considered from the first release."
  }
]

const enterpriseArchitecture = [
  {
    title: "Modular Architecture",
    desc: "Separate business capabilities into manageable modules so individual areas can evolve without making every change risky."
  },
  {
    title: "Monolith vs Microservices",
    desc: "A well-structured modular application can be appropriate for many enterprise environments. Microservices can be useful when independent deployment, team ownership, scale, or service boundaries justify the added complexity."
  },
  {
    title: "API-First Architecture",
    desc: "APIs provide controlled interfaces between web applications, mobile applications, internal platforms, and third-party services."
  },
  {
    title: "Event-Driven Architecture",
    desc: "For suitable systems, events can connect asynchronous workflows and services without forcing every process into a single synchronous transaction."
  },
  {
    title: "Service-to-Service Communication",
    desc: "Connected services need defined interfaces, authentication, data contracts, error handling, and monitoring."
  },
  {
    title: "Data Architecture",
    desc: "We map important business entities, relationships, transactions, permissions, and reporting requirements."
  },
  {
    title: "High Availability",
    desc: "Where availability is critical, architecture can include redundancy, health checks, recovery planning, and appropriate failover strategies."
  },
  {
    title: "Fault Tolerance",
    desc: "Important workflows can be designed to handle selected service failures without bringing down the entire application."
  }
]

const systemsIntegration = [
  {
    title: "ERP Integration",
    desc: "Connect applications with ERP platforms for finance, inventory, procurement, operations, and other business workflows."
  },
  {
    title: "CRM Integration",
    desc: "Synchronize customers, leads, accounts, sales activities, and service information with existing CRM platforms."
  },
  {
    title: "HRMS Integration",
    desc: "Connect employee records, organizational structures, attendance, leave, and other required HR workflows."
  },
  {
    title: "Accounting Systems",
    desc: "Exchange financial information with accounting and finance platforms based on the required process."
  },
  {
    title: "Legacy Database Integration",
    desc: "Connecting modern applications with existing databases when replacing the underlying system is not practical."
  },
  {
    title: "API Integration",
    desc: "Use secure APIs to connect internal applications, mobile clients, third-party services, and business platforms."
  },
  {
    title: "Middleware & Integration Layers",
    desc: "Complex environments may benefit from an integration layer that manages routing, transformation, authentication, and communication between systems."
  },
  {
    title: "Real-Time Data Exchange",
    desc: "Where required, systems can exchange information through APIs, events, webhooks, or other appropriate mechanisms."
  },
  {
    title: "Third-Party Services",
    desc: "Integrate approved services for payments, communication, analytics, identity, storage, logistics, or other business needs."
  }
]

const workflowAutomation = [
  {
    title: "Approval Workflows",
    desc: "Build approval paths for purchases, expenses, contracts, documents, requests, and other controlled processes."
  },
  {
    title: "Multi-Level Authorization",
    desc: "Route actions through different approval levels based on amount, department, role, location, or defined rules."
  },
  {
    title: "Departmental Workflows",
    desc: "Connect finance, HR, sales, operations, procurement, service, and management processes where information needs to move between teams."
  },
  {
    title: "Task Automation",
    desc: "Automatically create tasks, update records, assign responsibilities, or trigger actions based on business rules."
  },
  {
    title: "Notifications & Escalation",
    desc: "Notify users when an action is required and escalate overdue or unresolved tasks according to defined workflows."
  },
  {
    title: "Rules-Based Processing",
    desc: "Business rules can determine what happens when a record reaches a particular state, threshold, or condition."
  },
  {
    title: "Scheduled Processes",
    desc: "Automate recurring reports, synchronization tasks, reminders, data processing, and other scheduled operations."
  },
  {
    title: "Cross-System Workflows",
    desc: "Connect actions across multiple systems so employees do not repeatedly move the same information between disconnected tools."
  },
  {
    title: "Audit Trails",
    desc: "Record important workflow actions so organizations can trace approvals, changes, and administrative activity."
  }
]

const securityCompliance = [
  {
    title: "Identity & Access Management",
    desc: "Control authentication and access across users, departments, applications, and connected enterprise systems."
  },
  {
    title: "Role-Based Access Control",
    desc: "Define which users can view, create, edit, approve, export, or administer specific information and functions."
  },
  {
    title: "Single Sign-On",
    desc: "Integrate supported identity providers so employees can use existing organizational authentication."
  },
  {
    title: "Multi-Factor Authentication",
    desc: "Add additional authentication factors where the application's security requirements call for them."
  },
  {
    title: "Data Encryption",
    desc: "Protect sensitive information during transmission and through appropriate storage practices."
  },
  {
    title: "Audit Logs",
    desc: "Record important administrative, security, and business actions for accountability and investigation."
  },
  {
    title: "API Security",
    desc: "Secure APIs through authentication, authorization, validation, access controls, and suitable rate controls."
  },
  {
    title: "Security Monitoring",
    desc: "Monitor important security and application events so unusual activity and technical issues can be identified earlier."
  },
  {
    title: "Data Retention",
    desc: "Define retention, archival, and deletion behavior according to business and legal requirements."
  },
  {
    title: "Compliance Requirements",
    desc: "Enterprise applications can be designed around the regulatory, contractual, or internal security requirements that apply to the organization."
  },
  {
    title: "Network \u0026 Infrastructure Security",
    desc: "Network-level controls, access rules, and infrastructure hardening can be included where the application's risk profile and deployment environment require them."
  },
  {
    title: "Third-Party Security Review",
    desc: "Connected external services, vendors, and integrations can introduce additional risk. Where appropriate, third-party interfaces and access are reviewed alongside the application itself."
  }
]

const dataReporting = [
  {
    title: "Centralized Business Data",
    desc: "Organize relevant business information within a structured application while maintaining appropriate access and ownership boundaries."
  },
  {
    title: "Data Modeling",
    desc: "Define relationships between customers, employees, products, transactions, departments, locations, and other important business entities."
  },
  {
    title: "Data Validation",
    desc: "Use business rules and validation controls to reduce incomplete, inconsistent, or incorrect records."
  },
  {
    title: "Data Governance",
    desc: "Define appropriate ownership, access, retention, and handling rules for important business information."
  },
  {
    title: "Operational Dashboards",
    desc: "Give teams visibility into the metrics, tasks, alerts, and information required for daily operations."
  },
  {
    title: "Management Reporting",
    desc: "Build reports around financial activity, operational performance, organizational KPIs, and other management requirements."
  },
  {
    title: "Data Exports",
    desc: "Provide controlled export functionality for approved reporting, analysis, audit, or operational purposes."
  },
  {
    title: "Audit Reporting",
    desc: "Support traceability for important changes, approvals, transactions, and administrative activity."
  },
  {
    title: "Business Intelligence Integration",
    desc: "Connect suitable BI and analytics platforms when an organization requires more advanced reporting or analysis."
  }
]

const mobileOfflineItems = [
  {
    title: "Employee Apps",
    desc: "Give employees mobile access to approved tasks, information, notifications, internal services, and selected business workflows."
  },
  {
    title: "Field Force Apps",
    desc: "Support sales representatives, inspectors, technicians, delivery teams, service staff, and other field workers who need access to business systems while working outside the office."
  },
  {
    title: "Sales & CRM Apps",
    desc: "Allow sales teams to access customer records, manage leads, update activities, review accounts, and complete important sales workflows from mobile devices."
  },
  {
    title: "Approval Apps",
    desc: "Allow authorized managers to review and approve requests, expenses, documents, purchases, and other workflows from mobile devices."
  },
  {
    title: "Inventory & Warehouse Apps",
    desc: "Support stock checks, receiving, dispatch, barcode workflows, warehouse activity, and other inventory operations where required."
  },
  {
    title: "Customer Self-Service Apps",
    desc: "Give customers access to approved services such as orders, accounts, documents, support requests, service information, or other business workflows."
  },
  {
    title: "Executive Dashboards",
    desc: "Provide management with mobile access to selected KPIs, reports, alerts, and operational information."
  },
  {
    title: "ERP & Business System Access",
    desc: "Connect mobile workflows with enterprise APIs and backend systems while limiting access to only the functionality required by each user role."
  },
  {
    title: "Offline Data Access",
    desc: "Field users can continue selected workflows when a device temporarily loses network connectivity."
  },
  {
    title: "Local Data Storage",
    desc: "Store approved information locally so supported tasks can continue without a constant internet connection."
  },
  {
    title: "Sync Queues",
    desc: "Queue changes made while offline and synchronize them with the central system when connectivity returns."
  },
  {
    title: "Conflict Resolution",
    desc: "Define how conflicting updates are handled when the same information changes from different devices or locations."
  },
  {
    title: "Retry Handling",
    desc: "Recover from temporary network or service failures without forcing users to repeat completed actions."
  },
  {
    title: "Weak Network Support",
    desc: "Design important mobile workflows for environments where connectivity may be slow, inconsistent, or temporarily unavailable."
  }
]

const modernizationMigration = [
  {
    title: "Legacy System Assessment",
    desc: "Review existing code, databases, integrations, technical debt, business rules, and operational dependencies before selecting a modernization path."
  },
  {
    title: "Monolith Re-Architecture",
    desc: "Break large, difficult-to-maintain systems into more manageable modules or services when the project justifies it."
  },
  {
    title: "Database Modernization",
    desc: "Improve schema structure, queries, indexing, storage, and data-access patterns while protecting important business information."
  },
  {
    title: "Cloud Migration",
    desc: "Move suitable workloads from on-premises or outdated infrastructure toward an appropriate cloud environment."
  },
  {
    title: "API Layer for Legacy Systems",
    desc: "Create controlled APIs that allow newer applications to communicate with legacy systems without exposing unnecessary internal implementation details."
  },
  {
    title: "UI/UX Modernization",
    desc: "Replace outdated interfaces while preserving business logic and workflows that the organization still relies on."
  },
  {
    title: "Data Migration",
    desc: "Move required information into the new platform with validation, reconciliation, and controlled migration stages."
  },
  {
    title: "Phased Migration",
    desc: "Modernize selected components first instead of forcing the organization through one disruptive transition."
  },
  {
    title: "Minimal-Disruption Rollout",
    desc: "Plan migration and release stages around business continuity so essential operations remain available during the transition."
  }
]

const cloudPerformance = [
  {
    title: "Cloud Architecture",
    desc: "Design cloud infrastructure around users, workloads, integrations, data, availability, and expected growth."
  },
  {
    title: "Load Balancing",
    desc: "Distribute application traffic across appropriate instances when the workload requires it."
  },
  {
    title: "Auto Scaling",
    desc: "Where supported and appropriate, resources can adjust around changing demand."
  },
  {
    title: "Database Performance",
    desc: "Review queries, indexing, connections, storage, and workloads to reduce avoidable bottlenecks."
  },
  {
    title: "Caching",
    desc: "Cache suitable frequently accessed information to reduce repeated processing and database load."
  },
  {
    title: "High Availability",
    desc: "Critical systems can use redundancy, health checks, failover planning, and monitored services where required."
  },
  {
    title: "Disaster Recovery",
    desc: "Define backup, restoration, recovery priorities, and operational procedures for important systems."
  },
  {
    title: "Monitoring & Observability",
    desc: "Monitor logs, errors, performance signals, infrastructure health, and important operational events."
  },
  {
    title: "Capacity Planning",
    desc: "Plan future infrastructure needs around users, transactions, data volume, locations, and expected business growth."
  }
]

const devOpsManagement = [
  {
    title: "Development Environments",
    desc: "Maintain suitable development, staging, and production environments to reduce deployment risk."
  },
  {
    title: "CI/CD",
    desc: "Automate appropriate build, testing, and deployment steps for more consistent releases."
  },
  {
    title: "Automated Builds",
    desc: "Generate predictable application builds and deployment artifacts through controlled processes."
  },
  {
    title: "Infrastructure as Code",
    desc: "Where appropriate, manage infrastructure configuration through version-controlled definitions rather than repeated manual changes."
  },
  {
    title: "Database Migrations",
    desc: "Apply schema changes through tested migration processes with appropriate rollback planning."
  },
  {
    title: "Release Controls",
    desc: "Use approval and release procedures suited to the organization's risk and governance requirements."
  },
  {
    title: "Rollback Planning",
    desc: "Maintain a practical recovery path when a deployment creates unexpected production issues."
  },
  {
    title: "Post-Deployment Monitoring",
    desc: "Monitor production behavior after releases to identify errors, performance changes, and integration issues early."
  }
]

const techStackTable = [
  { layer: "Frontend", technologies: "React, Next.js, Angular, Vue, or another suitable framework" },
  { layer: "Backend", technologies: "Node.js, .NET, Java, Python, Laravel/PHP, or an existing backend" },
  { layer: "Database", technologies: "PostgreSQL, MySQL, MongoDB, Oracle, or another suitable system" },
  { layer: "APIs", technologies: "REST, GraphQL, gRPC, Webhooks" },
  { layer: "Authentication", technologies: "SSO, OAuth, JWT, enterprise identity providers" },
  { layer: "Cache & Data", technologies: "Redis, queues, suitable messaging systems" },
  { layer: "Cloud", technologies: "AWS, Azure, Google Cloud, or project-specific infrastructure" },
  { layer: "Infrastructure", technologies: "Docker, Kubernetes, CI/CD, automation where required" },
  { layer: "Testing", technologies: "Unit, integration, API, security, performance, load, regression testing" },
  { layer: "Monitoring", technologies: "Logs, metrics, error tracking, uptime and application monitoring" },
]

const uiUxAdoption = [
  {
    title: "Role-Based Interfaces",
    desc: "Different departments and job functions can receive interfaces that show the actions and information relevant to their responsibilities."
  },
  {
    title: "Workflow-First Design",
    desc: "We start with the task users need to complete before deciding how the interface should be structured."
  },
  {
    title: "Information Architecture",
    desc: "Large enterprise applications need clear navigation, search, filtering, hierarchy, and predictable access to important information."
  },
  {
    title: "Dashboard Design",
    desc: "Dashboards are structured around the metrics, tasks, alerts, and decisions relevant to each role."
  },
  {
    title: "Accessibility",
    desc: "Interfaces can include readable content, suitable controls, keyboard support, screen-reader considerations, and other accessibility requirements where applicable."
  },
  {
    title: "Training-Minimal Interfaces",
    desc: "Clear labels, familiar patterns, consistent interactions, and useful feedback can reduce unnecessary learning effort."
  },
  {
    title: "Usability Validation",
    desc: "Important workflows can be reviewed with representative users and stakeholders before development is finalized."
  },
  {
    title: "Responsive Design",
    desc: "Enterprise interfaces may need to support desktop workstations, tablets, and mobile devices depending on how different user groups access the application."
  }
]

const rolloutChangeManagement = [
  {
    title: "Department-Based Rollout",
    desc: "Introduce the application to selected departments or teams in stages when a phased rollout is appropriate."
  },
  {
    title: "Pilot Deployment",
    desc: "Test the system with a controlled group of users before expanding it across the organization."
  },
  {
    title: "User Training",
    desc: "Provide appropriate guidance for employees, managers, administrators, and other user groups based on their responsibilities."
  },
  {
    title: "Documentation",
    desc: "Document important workflows, system behavior, administrative tasks, and operating procedures."
  },
  {
    title: "Admin Training",
    desc: "Prepare the internal team responsible for managing users, permissions, configurations, and business workflows."
  },
  {
    title: "Feedback Collection",
    desc: "Collect feedback from representative users during pilot and post-launch periods to identify usability and workflow issues."
  },
  {
    title: "Adoption Monitoring",
    desc: "Review suitable indicators such as workflow completion, feature usage, support requests, and other operational signals to understand how the system is being adopted."
  },
  {
    title: "Post-Rollout Review",
    desc: "After the initial rollout, we review adoption signals, usability feedback, and workflow observations to identify improvements for the next phase."
  }
]

const testingQa = [
  {
    title: "Functional Testing",
    desc: "Verify workflows, forms, permissions, business rules, dashboards, and core application functionality."
  },
  {
    title: "Integration Testing",
    desc: "Test communication between the application, ERP, CRM, HRMS, databases, APIs, and third-party services."
  },
  {
    title: "API Testing",
    desc: "Validate authentication, requests, responses, permissions, error handling, and important API endpoints."
  },
  {
    title: "Security Testing",
    desc: "Review authentication, authorization, permissions, sensitive operations, and security-related application behavior."
  },
  {
    title: "Performance Testing",
    desc: "Test important workflows under representative user, transaction, and data conditions."
  },
  {
    title: "Load & Stress Testing",
    desc: "Evaluate system behavior as concurrent users, transactions, and processing workloads increase."
  },
  {
    title: "User Acceptance Testing",
    desc: "Allow approved stakeholders to validate important business workflows before production rollout."
  },
  {
    title: "Regression Testing",
    desc: "Retest affected functionality after major changes, integrations, or fixes."
  },
  {
    title: "Cross-System Testing",
    desc: "Validate workflows that move data across multiple enterprise platforms."
  },
  {
    title: "Disaster Recovery Testing",
    desc: "For systems with defined recovery requirements, test restoration and recovery procedures instead of assuming they will work as expected."
  },
  {
    title: "Data Migration Testing",
    desc: "Validate the accuracy and completeness of migrated data through comparison, reconciliation, and record-level checks."
  },
  {
    title: "End-to-End Testing",
    desc: "Trace complete business workflows across multiple systems to confirm that the full process works correctly under representative conditions."
  }
]

const dataMigration = [
  {
    title: "Data Assessment",
    desc: "Identify important tables, records, relationships, dependencies, duplicates, and data-quality issues."
  },
  {
    title: "Data Mapping",
    desc: "Map legacy fields and structures to the data model used by the new application."
  },
  {
    title: "Data Transformation",
    desc: "Convert formats, codes, values, relationships, and structures where required."
  },
  {
    title: "Data Validation",
    desc: "Compare migrated information against the source system using defined validation and reconciliation rules."
  },
  {
    title: "Incremental Migration",
    desc: "For larger environments, migrate information in controlled stages instead of relying on one high-risk migration event."
  },
  {
    title: "Migration Testing",
    desc: "Test the migration process with representative data and validate record accuracy, relationships, transformations, and reconciliation."
  },
  {
    title: "Rollback Planning",
    desc: "Define how the organization can recover if an unexpected migration problem affects production."
  },
  {
    title: "Post-Migration Validation",
    desc: "Compare records after migration to confirm accuracy, completeness, and referential integrity before the legacy system is decommissioned."
  }
]

const engagementModels = [
  {
    title: "Custom Enterprise Project",
    desc: "A complete engagement for designing and building a new enterprise application around a defined business requirement."
  },
  {
    title: "Legacy Modernization",
    desc: "Modernize an existing application while preserving the business capabilities and data the organization still depends on."
  },
  {
    title: "Dedicated Development Team",
    desc: "Provide ongoing development capacity for organizations with a larger internal product roadmap or continuous application requirements."
  },
  {
    title: "Feature & Enhancement Development",
    desc: "Extend an existing enterprise platform with new workflows, modules, integrations, reports, or other functionality."
  },
  {
    title: "Integration Projects",
    desc: "Connect existing enterprise systems through APIs, middleware, synchronization, or other suitable integration methods."
  },
  {
    title: "Long-Term Development & Support",
    desc: "Continue developing and maintaining an enterprise application as business requirements, integrations, and operational needs evolve."
  }
]

const deliverablesList = [
  {
    title: "Business & Technical Planning",
    desc: "Requirements documentation, workflow analysis, system architecture, integration planning, and project roadmap."
  },
  {
    title: "Enterprise UI/UX",
    desc: "User flows, role-based interfaces, dashboards, prototypes, responsive layouts, and approved design assets."
  },
  {
    title: "Enterprise Application",
    desc: "The agreed web, mobile, or connected enterprise application built around the approved requirements."
  },
  {
    title: "Integrations",
    desc: "Agreed ERP, CRM, HRMS, legacy, API, identity, database, payment, communication, or third-party integrations."
  },
  {
    title: "Security & Testing",
    desc: "Authentication, permissions, security controls, integration testing, performance testing, user acceptance testing, and release validation according to project scope."
  },
  {
    title: "Deployment & Rollout",
    desc: "Environment preparation, deployment support, production launch assistance, and agreed rollout activities."
  },
  {
    title: "Documentation & Handoff",
    desc: "Source code, technical documentation, API information, environment details, relevant credentials, and other agreed handoff materials."
  },
  {
    title: "Ongoing Support Arrangement",
    desc: "Post-launch support, maintenance, enhancement, and development can continue under a separate agreed support arrangement."
  }
]

const whyChooseUs = [
  {
    title: "One In-House Team",
    desc: "Discovery, architecture, design, development, integrations, testing, and launch stay within one coordinated team."
  },
  {
    title: "We Start With the Organization",
    desc: "We understand how people, processes, systems, and information work together before turning requirements into application features."
  },
  {
    title: "Architecture Before Implementation",
    desc: "We map workflows, integrations, security, data, and scalability before committing the project to implementation."
  },
  {
    title: "Built Around Existing Systems",
    desc: "Where replacement is not practical, we design the new application to work alongside the platforms your organization already depends on."
  },
  {
    title: "Business-First Development",
    desc: "The objective is not simply to produce software. It is to improve the workflow the software is responsible for supporting."
  },
  {
    title: "Clear Stakeholder Reviews",
    desc: "Important requirements, designs, architecture decisions, and release milestones are reviewed before moving forward."
  },
  {
    title: "Long-Term Support",
    desc: "The same team can continue supporting application updates, integrations, performance, security, and future development after launch."
  },
  {
    title: "Platform \u0026 Technology Advice",
    desc: "We recommend the architecture, technologies, and integration approach that fit the organization's actual requirements rather than forcing every project into one fixed solution."
  }
]


export default function Offerings() {
  return (
    <section id="offerings" className="border-t-2 border-frame-border bg-frame-bg px-4 py-20 md:px-8 md:py-32 scroll-mt-20">
      <div className="mx-auto max-w-[95vw]">

        {/* SECTION 1: WHAT IS ENTERPRISE APP DEVELOPMENT? */}
        <div>
          <SectionIntro
            eyebrow="Core Scope"
            title="What Is Enterprise App Development?"
          >
            Enterprise app development is the process of building software for organizations with complex workflows, multiple user groups, existing systems, security requirements, and long-term operational needs. An enterprise application may connect departments, automate processes, manage sensitive information, integrate with legacy systems, and support large numbers of users or transactions.
          </SectionIntro>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {whatIsEnterprise.map((item, i) => (
              <div
                key={i}
                className="group relative flex flex-col justify-between border-2 border-frame-border bg-frame-bg p-6 md:p-8 transition-colors hover:border-frame-accent"
              >
                <div>
                  <span className="text-xs font-black uppercase tracking-[0.24em] text-frame-accent">
                    Scope Concept 0{i + 1}
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

        {/* SECTION 2: OUR ENTERPRISE APP DEVELOPMENT SERVICES */}
        <div className="mt-28 border-2 border-frame-border bg-frame-bg p-6 md:p-12">
          <div className="mb-8">
            <span className="text-xs font-black uppercase tracking-[0.28em] text-frame-accent">
              Core Capabilities
            </span>
            <h2 className="mt-2 font-heading text-2xl md:text-4xl font-bold uppercase tracking-tight text-frame-fg">
              Our Enterprise App Development Services
            </h2>
            <p className="mt-3 max-w-3xl text-sm md:text-base font-medium leading-relaxed text-frame-muted-fg">
              We build enterprise applications around your organization&apos;s workflows, users, systems, and operational requirements. Our in-house team can support the project from discovery and architecture through development, integration, testing, launch, and ongoing support.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {enterpriseServices.map((item, i) => (
              <div
                key={i}
                className="border-2 border-frame-border bg-frame-muted/10 p-6 transition-colors hover:border-frame-accent"
              >
                <span className="text-xs font-black uppercase tracking-[0.2em] text-frame-accent">
                  Service {i + 1 < 10 ? `0${i + 1}` : i + 1}
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

        {/* SECTION 3: ENTERPRISE APPLICATIONS WE BUILD */}
        <div className="mt-28 border-2 border-frame-border bg-frame-bg p-6 md:p-12">
          <div className="mb-8">
            <span className="text-xs font-black uppercase tracking-[0.28em] text-frame-accent">
              System Classifications
            </span>
            <h2 className="mt-2 font-heading text-2xl md:text-4xl font-bold uppercase tracking-tight text-frame-fg">
              Enterprise Applications We Build
            </h2>
            <p className="mt-3 max-w-3xl text-sm md:text-base font-medium leading-relaxed text-frame-muted-fg">
              We develop enterprise software around departments, workflows, operational requirements, and customer-facing needs.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {enterpriseApps.map((item, i) => (
              <div
                key={i}
                className="border-2 border-frame-border bg-frame-muted/10 p-6 transition-colors hover:border-frame-accent"
              >
                <span className="text-xs font-black uppercase tracking-[0.2em] text-frame-accent">
                  Class {i + 1 < 10 ? `0${i + 1}` : i + 1}
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

        {/* SECTION 4: WHY ENTERPRISE APP DEVELOPMENT REQUIRES MORE THAN CODING */}
        <div className="mt-28 border-2 border-frame-border bg-frame-bg p-6 md:p-12">
          <div className="mb-8">
            <span className="text-xs font-black uppercase tracking-[0.28em] text-frame-accent">
              Organizational Reality
            </span>
            <h2 className="mt-2 font-heading text-2xl md:text-4xl font-bold uppercase tracking-tight text-frame-fg">
              Why Enterprise App Development Requires More Than Coding
            </h2>
            <p className="mt-3 max-w-3xl text-sm md:text-base font-medium leading-relaxed text-frame-muted-fg">
              Enterprise applications sit inside an organization that already has people, processes, systems, policies, and dependencies.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {whyMoreThanCoding.map((item, i) => (
              <div
                key={i}
                className="border-2 border-frame-border bg-frame-muted/10 p-6 transition-colors hover:border-frame-accent"
              >
                <span className="text-xs font-black uppercase tracking-[0.2em] text-frame-accent">
                  Factor 0{i + 1}
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

        {/* SECTION 5: ENTERPRISE APPLICATION ARCHITECTURE */}
        <div className="mt-28 border-2 border-frame-border bg-frame-bg p-6 md:p-12">
          <div className="mb-8">
            <span className="text-xs font-black uppercase tracking-[0.28em] text-frame-accent">
              System Engineering
            </span>
            <h2 className="mt-2 font-heading text-2xl md:text-4xl font-bold uppercase tracking-tight text-frame-fg">
              Enterprise Application Architecture
            </h2>
            <p className="mt-3 max-w-3xl text-sm md:text-base font-medium leading-relaxed text-frame-muted-fg">
              Enterprise architecture should provide structure, reliability, and flexibility without creating unnecessary complexity.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {enterpriseArchitecture.map((item, i) => (
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

        {/* SECTION 6: ENTERPRISE SYSTEMS INTEGRATION */}
        <div className="mt-28 border-2 border-frame-border bg-frame-bg p-6 md:p-12">
          <div className="mb-8">
            <span className="text-xs font-black uppercase tracking-[0.28em] text-frame-accent">
              Ecosystem Connectivity
            </span>
            <h2 className="mt-2 font-heading text-2xl md:text-4xl font-bold uppercase tracking-tight text-frame-fg">
              Enterprise Systems Integration
            </h2>
            <p className="mt-3 max-w-3xl text-sm md:text-base font-medium leading-relaxed text-frame-muted-fg">
              New enterprise software often succeeds or fails based on how well it works with existing systems.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {systemsIntegration.map((item, i) => (
              <div
                key={i}
                className="border-2 border-frame-border bg-frame-muted/10 p-6 transition-colors hover:border-frame-accent"
              >
                <span className="text-xs font-black uppercase tracking-[0.2em] text-frame-accent">
                  Integration Area 0{i + 1}
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

        {/* SECTION 7: ENTERPRISE BUSINESS PROCESS & WORKFLOW AUTOMATION */}
        <div className="mt-28 border-2 border-frame-border bg-frame-bg p-6 md:p-12">
          <div className="mb-8">
            <span className="text-xs font-black uppercase tracking-[0.28em] text-frame-accent">
              Process Optimization
            </span>
            <h2 className="mt-2 font-heading text-2xl md:text-4xl font-bold uppercase tracking-tight text-frame-fg">
              Enterprise Business Process &amp; Workflow Automation
            </h2>
            <p className="mt-3 max-w-3xl text-sm md:text-base font-medium leading-relaxed text-frame-muted-fg">
              The goal is to make business processes easier to execute, track, and control.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {workflowAutomation.map((item, i) => (
              <div
                key={i}
                className="border-2 border-frame-border bg-frame-muted/10 p-6 transition-colors hover:border-frame-accent"
              >
                <span className="text-xs font-black uppercase tracking-[0.2em] text-frame-accent">
                  Automation Module 0{i + 1}
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

        {/* SECTION 8: ENTERPRISE SECURITY, GOVERNANCE & COMPLIANCE */}
        <div className="mt-28 border-2 border-frame-border bg-frame-bg p-6 md:p-12">
          <div className="mb-8">
            <span className="text-xs font-black uppercase tracking-[0.28em] text-frame-accent">
              Security Standards
            </span>
            <h2 className="mt-2 font-heading text-2xl md:text-4xl font-bold uppercase tracking-tight text-frame-fg">
              Enterprise Security, Governance &amp; Compliance
            </h2>
            <p className="mt-3 max-w-3xl text-sm md:text-base font-medium leading-relaxed text-frame-muted-fg">
              Security should be built into the architecture rather than added near the end of the project.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
            {securityCompliance.map((item, i) => (
              <div
                key={i}
                className="border-2 border-frame-border bg-frame-muted/10 p-6 transition-colors hover:border-frame-accent"
              >
                <span className="text-xs font-black uppercase tracking-[0.2em] text-frame-accent">
                  Control {i + 1 < 10 ? `0${i + 1}` : i + 1}
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

        {/* SECTION 9: ENTERPRISE DATA MANAGEMENT & REPORTING */}
        <div className="mt-28 border-2 border-frame-border bg-frame-bg p-6 md:p-12">
          <div className="mb-8">
            <span className="text-xs font-black uppercase tracking-[0.28em] text-frame-accent">
              Data Layer &amp; BI
            </span>
            <h2 className="mt-2 font-heading text-2xl md:text-4xl font-bold uppercase tracking-tight text-frame-fg">
              Enterprise Data Management &amp; Reporting
            </h2>
            <p className="mt-3 max-w-3xl text-sm md:text-base font-medium leading-relaxed text-frame-muted-fg">
              Enterprise applications often become a central operational layer for information used across departments and connected systems. We structure data around business entities, workflows, permissions, validation, reporting, and operational requirements.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {dataReporting.map((item, i) => (
              <div
                key={i}
                className="border-2 border-frame-border bg-frame-muted/10 p-6 transition-colors hover:border-frame-accent"
              >
                <span className="text-xs font-black uppercase tracking-[0.2em] text-frame-accent">
                  Data Capability 0{i + 1}
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

        {/* SECTION 10: ENTERPRISE MOBILE & OFFLINE-FIRST APP DEVELOPMENT */}
        <div className="mt-28 border-2 border-frame-border bg-frame-bg p-6 md:p-12">
          <div className="mb-8">
            <span className="text-xs font-black uppercase tracking-[0.28em] text-frame-accent">
              Field &amp; Mobile Operations
            </span>
            <h2 className="mt-2 font-heading text-2xl md:text-4xl font-bold uppercase tracking-tight text-frame-fg">
              Enterprise Mobile &amp; Offline-First App Development
            </h2>
            <p className="mt-3 max-w-3xl text-sm md:text-base font-medium leading-relaxed text-frame-muted-fg">
              Enterprise mobile applications can extend internal systems and business workflows beyond the desktop. We build mobile experiences around the needs of employees, field teams, sales representatives, customers, managers, and other enterprise users.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {mobileOfflineItems.map((item, i) => (
              <div
                key={i}
                className="border-2 border-frame-border bg-frame-muted/10 p-6 transition-colors hover:border-frame-accent"
              >
                <span className="text-xs font-black uppercase tracking-[0.2em] text-frame-accent">
                  Mobile Workflow {i + 1 < 10 ? `0${i + 1}` : i + 1}
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

        {/* SECTION 11: LEGACY APPLICATION MODERNIZATION & MIGRATION */}
        <div className="mt-28 border-2 border-frame-border bg-frame-bg p-6 md:p-12">
          <div className="mb-8">
            <span className="text-xs font-black uppercase tracking-[0.28em] text-frame-accent">
              Application Modernization
            </span>
            <h2 className="mt-2 font-heading text-2xl md:text-4xl font-bold uppercase tracking-tight text-frame-fg">
              Legacy Application Modernization &amp; Migration
            </h2>
            <p className="mt-3 max-w-3xl text-sm md:text-base font-medium leading-relaxed text-frame-muted-fg">
              Replacing a legacy system does not always mean rebuilding everything from scratch.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {modernizationMigration.map((item, i) => (
              <div
                key={i}
                className="border-2 border-frame-border bg-frame-muted/10 p-6 transition-colors hover:border-frame-accent"
              >
                <span className="text-xs font-black uppercase tracking-[0.2em] text-frame-accent">
                  Modernization Strategy 0{i + 1}
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

        {/* SECTION 12: ENTERPRISE CLOUD, PERFORMANCE & HIGH AVAILABILITY */}
        <div className="mt-28 border-2 border-frame-border bg-frame-bg p-6 md:p-12">
          <div className="mb-8">
            <span className="text-xs font-black uppercase tracking-[0.28em] text-frame-accent">
              Reliability Engineering
            </span>
            <h2 className="mt-2 font-heading text-2xl md:text-4xl font-bold uppercase tracking-tight text-frame-fg">
              Enterprise Cloud, Performance &amp; High Availability
            </h2>
            <p className="mt-3 max-w-3xl text-sm md:text-base font-medium leading-relaxed text-frame-muted-fg">
              Enterprise infrastructure should match the application&apos;s workload and operational risk.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {cloudPerformance.map((item, i) => (
              <div
                key={i}
                className="border-2 border-frame-border bg-frame-muted/10 p-6 transition-colors hover:border-frame-accent"
              >
                <span className="text-xs font-black uppercase tracking-[0.2em] text-frame-accent">
                  Infra Pillar 0{i + 1}
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

        {/* SECTION 13: ENTERPRISE DEVOPS & RELEASE MANAGEMENT */}
        <div className="mt-28 border-2 border-frame-border bg-frame-bg p-6 md:p-12">
          <div className="mb-8">
            <span className="text-xs font-black uppercase tracking-[0.28em] text-frame-accent">
              Release Governance
            </span>
            <h2 className="mt-2 font-heading text-2xl md:text-4xl font-bold uppercase tracking-tight text-frame-fg">
              Enterprise DevOps &amp; Release Management
            </h2>
            <p className="mt-3 max-w-3xl text-sm md:text-base font-medium leading-relaxed text-frame-muted-fg">
              Enterprise releases need controlled processes, not manual deployment alone.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {devOpsManagement.map((item, i) => (
              <div
                key={i}
                className="border-2 border-frame-border bg-frame-muted/10 p-6 transition-colors hover:border-frame-accent"
              >
                <span className="text-xs font-black uppercase tracking-[0.2em] text-frame-accent">
                  DevOps Practice 0{i + 1}
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

        {/* SECTION 14: ENTERPRISE TECHNOLOGY STACK */}
        <div className="mt-28 border-2 border-frame-border bg-frame-bg p-6 md:p-12">
          <div className="mb-8">
            <span className="text-xs font-black uppercase tracking-[0.28em] text-frame-accent">
              Technology Standards
            </span>
            <h2 className="mt-2 font-heading text-2xl md:text-4xl font-bold uppercase tracking-tight text-frame-fg">
              Enterprise Technology Stack
            </h2>
            <p className="mt-3 max-w-3xl text-sm md:text-base font-medium leading-relaxed text-frame-muted-fg">
              We choose technologies around the organization&apos;s requirements, existing systems, security needs, and long-term maintenance plan.
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

          <div className="mt-6 space-y-2 border-t-2 border-frame-border/60 pt-4">
            <p className="text-xs md:text-sm font-semibold text-frame-muted-fg">
              The final technology stack is selected around the project rather than using the same tools for every enterprise system.
            </p>
            <p className="text-xs md:text-sm font-semibold uppercase tracking-wider text-frame-accent">
              Only keep technologies here that Framecipher genuinely uses and supports.
            </p>
          </div>
        </div>

        {/* SECTION 15: ENTERPRISE UI/UX & USER ADOPTION */}
        <div className="mt-28 border-2 border-frame-border bg-frame-bg p-6 md:p-12">
          <div className="mb-8">
            <span className="text-xs font-black uppercase tracking-[0.28em] text-frame-accent">
              User-Centric Enterprise Design
            </span>
            <h2 className="mt-2 font-heading text-2xl md:text-4xl font-bold uppercase tracking-tight text-frame-fg">
              Enterprise UI/UX &amp; User Adoption
            </h2>
            <p className="mt-3 max-w-3xl text-sm md:text-base font-medium leading-relaxed text-frame-muted-fg">
              Enterprise software needs to make complex work easier for people who may use it every day.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {uiUxAdoption.map((item, i) => (
              <div
                key={i}
                className="border-2 border-frame-border bg-frame-muted/10 p-6 transition-colors hover:border-frame-accent"
              >
                <span className="text-xs font-black uppercase tracking-[0.2em] text-frame-accent">
                  Design Standard 0{i + 1}
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

        {/* SECTION 16: ENTERPRISE ROLLOUT & CHANGE MANAGEMENT */}
        <div className="mt-28 border-2 border-frame-border bg-frame-bg p-6 md:p-12">
          <div className="mb-8">
            <span className="text-xs font-black uppercase tracking-[0.28em] text-frame-accent">
              Change Governance
            </span>
            <h2 className="mt-2 font-heading text-2xl md:text-4xl font-bold uppercase tracking-tight text-frame-fg">
              Enterprise Rollout &amp; Change Management
            </h2>
            <p className="mt-3 max-w-3xl text-sm md:text-base font-medium leading-relaxed text-frame-muted-fg">
              Introducing an enterprise application involves more than putting software into production. Employees, managers, administrators, and other stakeholders need a practical path to adopt the new system.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {rolloutChangeManagement.map((item, i) => (
              <div
                key={i}
                className="border-2 border-frame-border bg-frame-muted/10 p-6 transition-colors hover:border-frame-accent"
              >
                <span className="text-xs font-black uppercase tracking-[0.2em] text-frame-accent">
                  Rollout Phase 0{i + 1}
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

        {/* SECTION 17: ENTERPRISE TESTING & QUALITY ASSURANCE */}
        <div className="mt-28 border-2 border-frame-border bg-frame-bg p-6 md:p-12">
          <div className="mb-8">
            <span className="text-xs font-black uppercase tracking-[0.28em] text-frame-accent">
              Quality Assurance
            </span>
            <h2 className="mt-2 font-heading text-2xl md:text-4xl font-bold uppercase tracking-tight text-frame-fg">
              Enterprise Testing &amp; Quality Assurance
            </h2>
            <p className="mt-3 max-w-3xl text-sm md:text-base font-medium leading-relaxed text-frame-muted-fg">
              Enterprise testing needs to validate both the application and the systems connected to it. We test important business workflows, integrations, permissions, data handling, and technical behavior according to project requirements.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
            {testingQa.map((item, i) => (
              <div
                key={i}
                className="border-2 border-frame-border bg-frame-muted/10 p-6 transition-colors hover:border-frame-accent"
              >
                <span className="text-xs font-black uppercase tracking-[0.2em] text-frame-accent">
                  Test Discipline {i + 1 < 10 ? `0${i + 1}` : i + 1}
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

        {/* SECTION 18: ENTERPRISE DATA MIGRATION */}
        <div className="mt-28 border-2 border-frame-border bg-frame-bg p-6 md:p-12">
          <div className="mb-8">
            <span className="text-xs font-black uppercase tracking-[0.28em] text-frame-accent">
              Data Integrity
            </span>
            <h2 className="mt-2 font-heading text-2xl md:text-4xl font-bold uppercase tracking-tight text-frame-fg">
              Enterprise Data Migration
            </h2>
            <p className="mt-3 max-w-3xl text-sm md:text-base font-medium leading-relaxed text-frame-muted-fg">
              Enterprise data migration focuses on moving required information from an existing system into a new application while protecting data quality, relationships, and business continuity.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {dataMigration.map((item, i) => (
              <div
                key={i}
                className="border-2 border-frame-border bg-frame-muted/10 p-6 transition-colors hover:border-frame-accent"
              >
                <span className="text-xs font-black uppercase tracking-[0.2em] text-frame-accent">
                  Migration Step 0{i + 1}
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

        {/* SECTION 19: ENTERPRISE DEVELOPMENT ENGAGEMENT MODELS */}
        <div className="mt-28 border-2 border-frame-border bg-frame-bg p-6 md:p-12">
          <div className="mb-8">
            <span className="text-xs font-black uppercase tracking-[0.28em] text-frame-accent">
              Engagement Structures
            </span>
            <h2 className="mt-2 font-heading text-2xl md:text-4xl font-bold uppercase tracking-tight text-frame-fg">
              Enterprise Development Engagement Models
            </h2>
            <p className="mt-3 max-w-3xl text-sm md:text-base font-medium leading-relaxed text-frame-muted-fg">
              Different organizations require different delivery structures depending on their existing systems, internal teams, project scope, and long-term roadmap.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {engagementModels.map((item, i) => (
              <div
                key={i}
                className="border-2 border-frame-border bg-frame-muted/10 p-6 transition-colors hover:border-frame-accent"
              >
                <span className="text-xs font-black uppercase tracking-[0.2em] text-frame-accent">
                  Model 0{i + 1}
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

        {/* SECTION 20: WHAT YOU RECEIVE FROM AN ENTERPRISE APP DEVELOPMENT PROJECT */}
        <div className="mt-28 border-2 border-frame-border bg-frame-bg p-6 md:p-12">
          <div className="mb-8">
            <span className="text-xs font-black uppercase tracking-[0.28em] text-frame-accent">
              Tangible Deliverables
            </span>
            <h2 className="mt-2 font-heading text-2xl md:text-4xl font-bold uppercase tracking-tight text-frame-fg">
              What You Receive From an Enterprise App Development Project
            </h2>
            <p className="mt-3 max-w-3xl text-sm md:text-base font-medium leading-relaxed text-frame-muted-fg">
              Your final deliverables depend on the approved scope, but an enterprise engagement can include the following:
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
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

        {/* SECTION 21: WHY CHOOSE FRAMECIPHER FOR ENTERPRISE APP DEVELOPMENT */}
        <div className="mt-28 border-2 border-frame-border bg-frame-bg p-6 md:p-12">
          <div className="mb-8">
            <span className="text-xs font-black uppercase tracking-[0.28em] text-frame-accent">
              Engineering Value
            </span>
            <h2 className="mt-2 font-heading text-2xl md:text-4xl font-bold uppercase tracking-tight text-frame-fg">
              Why Choose Framecipher for Enterprise App Development
            </h2>
            <p className="mt-3 max-w-3xl text-sm md:text-base font-medium leading-relaxed text-frame-muted-fg">
              Partnering with Framecipher means building robust enterprise systems with an experienced, accountable in-house team.
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


        {/* SECTION 23: ENTERPRISE APP DEVELOPMENT SERVICES ACROSS BANGLADESH & WORLDWIDE */}
        <div className="mt-28 border-2 border-frame-border bg-frame-muted/20 p-6 md:p-12">
          <span className="text-xs font-black uppercase tracking-[0.28em] text-frame-accent">
            Domestic &amp; Global Reach
          </span>
          <h2 className="mt-2 font-heading text-2xl md:text-4xl font-bold uppercase tracking-tight text-frame-fg">
            Enterprise App Development Services Across Bangladesh &amp; Worldwide
          </h2>
          <div className="mt-6 max-w-4xl space-y-4 text-sm md:text-base font-medium leading-relaxed text-frame-muted-fg">
            <p>
              Framecipher provides enterprise app development services from Dhaka, Bangladesh for organizations across the country and international markets.
            </p>
            <p>
              We work with businesses in Dhaka, Chattogram, Sylhet, Rajshahi, Khulna, Gazipur, Narayanganj, and other locations across Bangladesh.
            </p>
            <p>
              Our remote development workflow also supports clients in the USA, UK, Australia, Canada, UAE, and other international markets.
            </p>
            <p className="font-semibold text-frame-fg">
              Enterprise requirements vary by organization. We account for existing systems, local operations, security requirements, integration dependencies, and project governance rather than applying the same implementation to every market.
            </p>
          </div>
          <div className="mt-8">
            <PosterButton href="/contact">Start Your Enterprise Project &rarr;</PosterButton>
          </div>
        </div>

      </div>
    </section>
  )
}
