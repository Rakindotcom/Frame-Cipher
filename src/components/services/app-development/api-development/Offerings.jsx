import { SectionIntro, PosterButton } from '../../../Kinetic'

const apiServices = [
  {
    title: "API Strategy & Planning",
    desc: "A reliable API starts with understanding how your business systems work together. We first map your requirements, existing infrastructure, data flows, and integration dependencies before development begins.",
    bullets: [
      "Business and technical requirements",
      "Existing systems and infrastructure",
      "API consumers and connected applications",
      "Data flow between systems",
      "Third-party integration dependencies",
      "REST or GraphQL approach",
      "Scalability and performance requirements",
      "Project constraints and implementation priorities",
      "Long-term maintenance considerations"
    ],
    footer: "This gives the project a clear direction before we move into technical API architecture and contract design."
  },
  {
    title: "Custom API Development",
    desc: "We build custom APIs around your application's actual business logic and data model. Depending on the project, this can include REST or GraphQL APIs for websites, mobile apps, SaaS products, internal systems, and partner platforms.",
    bullets: [
      "REST API development",
      "GraphQL API development",
      "Authentication and authorization",
      "Request validation",
      "Response formatting",
      "Error handling",
      "Pagination and filtering",
      "API versioning",
      "Database integration",
      "Webhook endpoints"
    ],
    footer: "The result is an API that your own applications, partners, or approved third-party systems can consume."
  },
  {
    title: "API Integration & Connectivity",
    desc: "We connect your application with the external systems it needs to exchange data with. This may include payment platforms, CRMs, ERPs, ecommerce systems, banking services, logistics platforms, SaaS tools, and other business applications. Our integration work covers authentication, data mapping, request and response handling, webhooks, error handling, and integration testing based on each system's requirements."
  },
  {
    title: "API Testing & Quality Assurance",
    desc: "An API should not only work when everything goes right. We test normal requests, invalid inputs, authentication failures, integration errors, webhook behavior, and other realistic conditions.",
    bullets: [
      "Functional API testing",
      "Integration testing",
      "Endpoint testing",
      "Authentication testing",
      "Error-response testing",
      "Contract testing",
      "Load testing",
      "Performance testing",
      "Failure-scenario testing",
      "Regression testing"
    ],
    footer: "This helps identify problems before they affect customers or connected systems."
  },
  {
    title: "API Monitoring & Observability",
    desc: "API reliability does not end when an integration goes live. We monitor critical API behavior so problems can be identified before they disrupt connected systems.",
    bullets: [
      "API uptime and availability",
      "Response-time monitoring",
      "Error-rate tracking",
      "Webhook status",
      "Health checks",
      "API and application logs",
      "Failure alerts"
    ]
  },
  {
    title: "API Maintenance & Support",
    desc: "APIs need ongoing attention as applications, traffic, and connected platforms change. We provide maintenance when your API needs updates, troubleshooting, or continued technical support.",
    bullets: [
      "API version updates",
      "Third-party API change updates",
      "Documentation updates",
      "Performance improvements",
      "Security updates",
      "Integration troubleshooting",
      "Bug fixes and technical adjustments",
      "Monitoring and reliability improvements"
    ],
    footer: "Ongoing maintenance is available separately when a project requires continued API support."
  }
]

const apiTypes = [
  {
    title: "REST API Development",
    desc: "We build REST APIs with structured resources, predictable endpoints, appropriate HTTP methods, validation, authentication, error handling, pagination, and versioning. REST APIs work well for websites, mobile applications, SaaS platforms, internal systems, and third-party integrations."
  },
  {
    title: "GraphQL API Development",
    desc: "GraphQL can help applications request the specific data they need through a defined schema. We can develop GraphQL APIs when the application's data structure and client requirements make the approach appropriate."
  },
  {
    title: "Web API Development",
    desc: "We build web-facing APIs that allow applications and services to exchange data over web protocols. Depending on the project, a web API can support browser-based applications, mobile applications, backend services, client portals, dashboards, external integrations, and internal business tools. The API design depends on the application's consumers, data requirements, security model, and integration needs."
  },
  {
    title: "Internal APIs",
    desc: "Internal APIs connect different applications or services within the same organization. They can help separate systems while maintaining controlled communication between them.",
    examples: [
      "Website to ERP",
      "Ecommerce platform to inventory system",
      "CRM to internal application",
      "Mobile app to backend",
      "Admin panel to business system"
    ]
  },
  {
    title: "Public & Partner APIs",
    desc: "If your customers, vendors, developers, or business partners need controlled access to your platform, we can design APIs around that requirement.",
    capabilities: [
      "Authentication & authorization",
      "API keys or tokens",
      "Access scopes & rate limits",
      "Versioning & documentation",
      "Usage controls & partner onboarding"
    ]
  },
  {
    title: "Webhook & Event APIs",
    desc: "Webhooks allow one system to notify another when something happens. We can implement webhook-based workflows for events such as payment confirmation, order creation, shipment updates, customer updates, subscription events, inventory changes, and status notifications. Where required, we add retry and failure handling so temporary delivery problems do not silently lose important events."
  },
  {
    title: "Microservice APIs",
    desc: "For applications using multiple services, APIs can provide controlled communication between independent components. We can design service-to-service APIs around the application's architecture, data requirements, authentication model, and scaling needs."
  }
]

const thirdPartyIntegrations = [
  {
    title: "Payment Gateway Integration",
    desc: "We integrate payment services into websites and applications based on the project's requirements. This can include bKash, Nagad, Stripe, PayPal, and other supported payment services. We handle payment requests, responses, transaction status, callbacks, and relevant error scenarios within the agreed project scope."
  },
  {
    title: "CRM Integration",
    desc: "Connect your website, application, or internal system with CRM platforms to move customers and lead information between systems. Typical workflows include lead creation, customer synchronization, contact updates, form submission transfer, sales-status updates, and marketing data synchronization."
  },
  {
    title: "ERP & Accounting Integration",
    desc: "We connect applications with ERP, accounting, inventory, and business-management systems where APIs are available. This can help synchronize products, customers, orders, inventory, invoices, payment information, and operational data."
  },
  {
    title: "Ecommerce API Integration",
    desc: "We integrate ecommerce systems with other services required by the business, such as payment systems, inventory systems, CRM platforms, shipping services, accounting software, ERP systems, and marketing platforms."
  },
  {
    title: "Banking & Financial API Integration",
    desc: "For projects that require financial or banking connectivity, we can integrate supported banking and financial APIs. The exact integration depends on the provider's API, authentication requirements, access permissions, and available documentation."
  },
  {
    title: "Logistics & Shipping API Integration",
    desc: "Connect ecommerce and business systems with logistics or delivery platforms. Possible workflows include order submission, shipment creation, tracking updates, delivery status, customer notifications, and delivery-data synchronization."
  },
  {
    title: "SaaS & Third-Party Platform Integration",
    desc: "We connect your application with SaaS platforms and external services when their APIs support the required workflow. The integration can include authentication, data mapping, scheduled synchronization, webhooks, error handling, and monitoring."
  },
  {
    title: "Legacy System Integration",
    desc: "Older systems often cannot be replaced immediately. We can build an integration layer between legacy systems and newer applications where the available interfaces and project requirements support it. This can reduce the need for direct point-to-point connections across every system."
  }
]

const contractDesignItems = [
  "Resource and endpoint design",
  "Request and response schemas",
  "OpenAPI and API specifications",
  "Security requirements and access model",
  "API versioning",
  "Backward compatibility",
  "Data validation rules",
  "Error response standards",
  "Integration and dependency mapping",
  "Contract design for connected applications"
]

const securityAccessItems = [
  {
    title: "Authentication",
    desc: "Authentication verifies who or what is making an API request. Depending on the project, this may use API keys, tokens, OAuth, or another appropriate authentication mechanism."
  },
  {
    title: "Authorization",
    desc: "Authentication alone does not determine what a consumer can access. Authorization controls which resources and actions each user, application, or partner can access."
  },
  {
    title: "Rate Limiting",
    desc: "Rate limiting helps control excessive requests and protect APIs from unexpected traffic or abuse. Limits are planned around the API's expected usage and business requirements."
  },
  {
    title: "Input Validation",
    desc: "Incoming data should not be trusted automatically. We validate requests and reject invalid or unexpected data before it reaches sensitive business logic or connected systems."
  },
  {
    title: "API Gateway Security",
    desc: "Where the architecture requires an API gateway, it can provide a centralized layer for authentication, routing, rate limiting, traffic control, and monitoring."
  },
  {
    title: "Sensitive Data Protection",
    desc: "API responses should expose only the data required by the consumer. We consider data exposure, access permissions, credentials, and sensitive information when designing API workflows."
  },
  {
    title: "Security Testing",
    desc: "Security checks can be included within API testing based on the project's scope and requirements."
  }
]

const reliabilityItems = [
  "Retry and backoff logic",
  "Idempotency for duplicate requests",
  "Timeout and error handling",
  "Webhook retry and delivery reliability",
  "Failure recovery workflows",
  "Logging and observability",
  "Critical failure alerting",
  "Partial-failure handling",
  "Recovery and troubleshooting procedures"
]

const performanceScalability = [
  {
    title: "Response Time Optimization",
    desc: "We identify slow endpoints and reduce unnecessary processing where possible."
  },
  {
    title: "Database Query Optimization",
    desc: "Slow database queries can become an API bottleneck. We review database interactions and optimize queries where the project requires it."
  },
  {
    title: "Caching",
    desc: "Caching can reduce repeated processing and database load for suitable data. We use caching only where the data and freshness requirements make it appropriate."
  },
  {
    title: "Pagination & Data Retrieval",
    desc: "Large datasets should not always be returned in one response. Pagination and controlled data retrieval can improve response size and application performance."
  },
  {
    title: "Load & Stress Testing",
    desc: "Testing under increased traffic helps reveal bottlenecks before production. The testing level depends on the expected traffic and project scope."
  },
  {
    title: "Horizontal Scaling",
    desc: "Applications with growing traffic may need additional application instances or other scaling strategies. We consider scalability during architecture planning when the expected workload requires it."
  },
  {
    title: "Performance Monitoring",
    desc: "Response time, error rate, traffic, and other relevant metrics can be monitored after deployment. This gives the team visibility as API usage changes."
  }
]

const documentationItems = [
  {
    title: "OpenAPI & Swagger Documentation",
    desc: "Where appropriate, we provide API documentation using OpenAPI/Swagger or another suitable documentation approach. Documentation can cover endpoints, parameters, authentication, responses, and errors."
  },
  {
    title: "Interactive API Documentation",
    desc: "Interactive documentation can allow developers to understand and test available endpoints more easily. The exact documentation setup depends on the API architecture and project requirements."
  },
  {
    title: "Request & Response Examples",
    desc: "Examples make API documentation easier to follow. We can document sample requests, responses, parameters, authentication requirements, and common error scenarios."
  },
  {
    title: "Developer Onboarding",
    desc: "When another developer or team needs to consume the API, clear documentation reduces unnecessary back-and-forth. We structure documentation around the information they actually need to integrate."
  },
  {
    title: "Sandbox Environments",
    desc: "For suitable projects, a sandbox or testing environment can allow consumers to test API workflows without affecting live production data."
  },
  {
    title: "Partner API Documentation",
    desc: "If your API is intended for vendors, customers, or business partners, documentation can include onboarding instructions and access requirements."
  },
  {
    title: "API Handoff & Knowledge Transfer",
    desc: "At project completion, we provide the agreed documentation and handoff materials so your team can understand and continue working with the API."
  }
]

const auditModernization = [
  {
    title: "Existing API Assessment",
    desc: "We review the current architecture, endpoints, integrations, documentation, and known operational issues."
  },
  {
    title: "API Security Review",
    desc: "We assess authentication, authorization, exposed data, access controls, and other relevant security areas within the agreed scope."
  },
  {
    title: "API Performance Audit",
    desc: "We identify slow endpoints, inefficient queries, excessive requests, and other performance bottlenecks."
  },
  {
    title: "API Refactoring",
    desc: "Existing API code can become difficult to maintain as a product grows. We can refactor suitable parts while preserving required functionality."
  },
  {
    title: "Legacy API Modernization",
    desc: "Older APIs may need improved documentation, security, architecture, or integration patterns. We can modernize legacy API components where the existing system and available interfaces allow it."
  },
  {
    title: "Versioning & Deprecation Planning",
    desc: "If an existing API has multiple consumers, changes need careful planning. We can help structure versioning and deprecation so consumers have a clear migration path."
  },
  {
    title: "Integration Troubleshooting",
    desc: "If an integration already exists but does not behave reliably, we can investigate the data flow and identify the failure point."
  }
]

const technologyTooling = [
  "REST APIs",
  "GraphQL",
  "Webhooks",
  "OpenAPI and Swagger",
  "OAuth and token-based authentication",
  "API keys and access controls",
  "Database integration",
  "Caching",
  "Automated API testing",
  "Logging and monitoring",
  "Cloud and existing infrastructure"
]

const useCases = [
  {
    title: "Web & Mobile Applications",
    desc: "Connect web and mobile applications to backend systems, databases, authentication services, and business logic."
  },
  {
    title: "SaaS Platforms",
    desc: "Build APIs that allow SaaS applications to communicate with web clients, mobile applications, integrations, and external users."
  },
  {
    title: "Ecommerce Systems",
    desc: "Connect stores with payment, inventory, CRM, ERP, accounting, shipping, and marketing systems."
  },
  {
    title: "Payment & Financial Workflows",
    desc: "Connect applications with supported payment gateways, banking services, transaction systems, and financial workflows."
  },
  {
    title: "CRM & ERP Connectivity",
    desc: "Synchronize customer, order, inventory, accounting, and operational data between systems."
  },
  {
    title: "Internal Business Systems",
    desc: "Connect internal applications, dashboards, admin panels, databases, and operational tools."
  },
  {
    title: "Partner Platforms",
    desc: "Build controlled API access for vendors, customers, affiliates, marketplaces, and other approved partners."
  },
  {
    title: "Real-Time Data Synchronization",
    desc: "Use webhooks and event-based workflows where systems need timely updates without constant polling."
  },
  {
    title: "Business Automation",
    desc: "Connect multiple systems so repetitive data-transfer workflows can happen automatically."
  }
]

const whyRealPartner = [
  {
    title: "Silent Failures Are the Real Risk",
    desc: "A failed API request is not always obvious. Data may stop syncing. A webhook may fail. A payment status may not update. An external service may return an unexpected response. We design integrations to detect and handle these situations rather than assuming every request will succeed."
  },
  {
    title: "Third-Party APIs Keep Changing",
    desc: "Your integration depends partly on another company's system. Third-party providers can change endpoints, authentication requirements, response formats, rate limits, or API versions. That is why version planning, error handling, monitoring, and ongoing maintenance matter."
  },
  {
    title: "APIs Become Long-Term Infrastructure",
    desc: "An API can become the connection point between your website, mobile app, internal systems, partners, and external services. A rushed API decision can create maintenance problems later. We focus on clear architecture and documentation so the API remains useful as your business grows."
  }
]

const whyChooseUs = [
  {
    title: "One In-House Team",
    desc: "Strategy, development, integration, testing, and communication stay within one team. You do not need to coordinate separate vendors for each technical stage."
  },
  {
    title: "Built for Failure, Not Just Success",
    desc: "We do not treat the successful API response as the entire integration. Timeouts, errors, failed webhooks, unavailable services, and unexpected responses are part of real-world API behavior."
  },
  {
    title: "Architecture Before Implementation",
    desc: "We define the API structure, authentication approach, data flow, and integration requirements before development gets too far."
  },
  {
    title: "Built Around Your Existing Systems",
    desc: "We work around the systems you already use instead of assuming everything needs to be replaced."
  },
  {
    title: "Local & International Integration Experience",
    desc: "Framecipher is based in Dhaka and serves businesses in Bangladesh alongside clients in the UAE, US, UK, Australia, and Canada. Our integration work can involve local platforms such as bKash and Nagad alongside international services."
  },
  {
    title: "Transparent Review Process",
    desc: "You receive defined review points throughout the project. The goal is to make technical progress visible instead of presenting everything only at the end."
  },
  {
    title: "Long-Term Support",
    desc: "API work often continues after launch. When needed, we can support version updates, third-party API changes, performance improvements, security updates, and integration troubleshooting."
  }
]

const portfolioElements = [
  "Business challenge",
  "Existing systems",
  "API architecture",
  "Connected integrations",
  "Security and reliability considerations",
  "Deployment approach",
  "Verified project outcomes"
]

export default function Offerings() {
  return (
    <section id="offerings" className="border-t-2 border-frame-border bg-frame-bg px-4 py-20 md:px-8 md:py-32 scroll-mt-20">
      <div className="mx-auto max-w-[95vw]">

        {/* SECTION 1: OUR API DEVELOPMENT & INTEGRATION SERVICES */}
        <div>
          <SectionIntro
            eyebrow="Core Offerings"
            title="Our API Development & Integration Services"
          >
            We handle API projects from architecture and development through integration, testing, monitoring, and ongoing improvement.
          </SectionIntro>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {apiServices.map((svc, i) => (
              <div
                key={i}
                className="flex flex-col justify-between border-2 border-frame-border bg-frame-bg p-6 md:p-8 transition-colors hover:border-frame-accent"
              >
                <div>
                  <span className="text-xs font-black uppercase tracking-[0.24em] text-frame-accent">
                    Service 0{i + 1}
                  </span>
                  <h3 className="mt-2 font-heading text-xl font-bold uppercase tracking-tight text-frame-fg">
                    {svc.title}
                  </h3>
                  <p className="mt-3 text-sm font-medium leading-relaxed text-frame-muted-fg">
                    {svc.desc}
                  </p>

                  {svc.bullets && (
                    <ul className="mt-4 space-y-2 border-t border-frame-border/60 pt-4 text-xs font-medium text-frame-fg">
                      {svc.bullets.map((b, bIdx) => (
                        <li key={bIdx} className="flex items-start gap-2">
                          <span className="flex h-4 w-4 shrink-0 items-center justify-center border border-frame-accent bg-frame-accent/10 text-frame-accent">
                            <svg className="h-2.5 w-2.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                            </svg>
                          </span>
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>

                {svc.footer && (
                  <div className="mt-6 border-t border-frame-border/60 pt-3">
                    <p className="text-xs font-semibold italic text-frame-muted-fg">
                      {svc.footer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="mt-8 flex justify-center">
            <PosterButton href="/contact">Discuss Your API Requirements &rarr;</PosterButton>
          </div>
        </div>

        {/* SECTION 2: API TYPES WE BUILD */}
        <div className="mt-28 border-2 border-frame-border bg-frame-bg p-6 md:p-12">
          <div className="mb-8">
            <span className="text-xs font-black uppercase tracking-[0.28em] text-frame-accent">
              Architecture Styles
            </span>
            <h2 className="mt-2 font-heading text-2xl md:text-4xl font-bold uppercase tracking-tight text-frame-fg">
              API Types We Build
            </h2>
            <p className="mt-3 max-w-3xl text-sm md:text-base font-medium leading-relaxed text-frame-muted-fg">
              Different applications need different API architectures. We select the approach based on how your systems exchange and consume data.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {apiTypes.map((type, i) => (
              <div
                key={i}
                className="border-2 border-frame-border bg-frame-muted/10 p-6 transition-colors hover:border-frame-accent"
              >
                <span className="text-xs font-black uppercase tracking-[0.2em] text-frame-accent">
                  Type 0{i + 1}
                </span>
                <h3 className="mt-2 font-heading text-lg font-bold uppercase text-frame-fg">
                  {type.title}
                </h3>
                <p className="mt-3 text-xs md:text-sm font-medium leading-relaxed text-frame-muted-fg">
                  {type.desc}
                </p>

                {type.examples && (
                  <div className="mt-4 border-t border-frame-border/60 pt-3">
                    <p className="text-[11px] font-bold uppercase tracking-wider text-frame-fg">
                      Examples:
                    </p>
                    <ul className="mt-2 space-y-1 text-xs text-frame-muted-fg">
                      {type.examples.map((ex, exIdx) => (
                        <li key={exIdx}>• {ex}</li>
                      ))}
                    </ul>
                  </div>
                )}

                {type.capabilities && (
                  <div className="mt-4 border-t border-frame-border/60 pt-3">
                    <p className="text-[11px] font-bold uppercase tracking-wider text-frame-fg">
                      Includes:
                    </p>
                    <ul className="mt-2 space-y-1 text-xs text-frame-muted-fg">
                      {type.capabilities.map((cap, capIdx) => (
                        <li key={capIdx}>• {cap}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* SECTION 3: THIRD-PARTY API INTEGRATION SERVICES */}
        <div className="mt-28 border-2 border-frame-border bg-frame-bg p-6 md:p-12">
          <div className="mb-8">
            <span className="text-xs font-black uppercase tracking-[0.28em] text-frame-accent">
              Third-Party Ecosystems
            </span>
            <h2 className="mt-2 font-heading text-2xl md:text-4xl font-bold uppercase tracking-tight text-frame-fg">
              Third-Party API Integration Services
            </h2>
            <p className="mt-3 max-w-3xl text-sm md:text-base font-medium leading-relaxed text-frame-muted-fg">
              Connecting an API is not simply about sending a request and receiving a response. The integration must account for authentication, data mapping, validation, errors, timeouts, rate limits, webhooks, and changes on the connected platform.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {thirdPartyIntegrations.map((item, i) => (
              <div
                key={i}
                className="border-2 border-frame-border bg-frame-muted/10 p-6 transition-colors hover:border-frame-accent"
              >
                <span className="text-xs font-black uppercase tracking-[0.2em] text-frame-accent">
                  Connector 0{i + 1}
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

        {/* SECTION 4: API ARCHITECTURE & CONTRACT DESIGN */}
        <div className="mt-28 border-2 border-frame-border bg-frame-bg p-6 md:p-12">
          <div className="mb-8">
            <span className="text-xs font-black uppercase tracking-[0.28em] text-frame-accent">
              Schema &amp; Specifications
            </span>
            <h2 className="mt-2 font-heading text-2xl md:text-4xl font-bold uppercase tracking-tight text-frame-fg">
              API Architecture &amp; Contract Design
            </h2>
            <p className="mt-3 max-w-3xl text-sm md:text-base font-medium leading-relaxed text-frame-muted-fg">
              Once the project requirements are clear, we define the technical structure of the API. This creates a predictable contract between your application, users, and connected systems.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
            {contractDesignItems.map((item, i) => (
              <div key={i} className="flex items-center gap-3 border-2 border-frame-border bg-frame-muted/10 p-4">
                <span className="flex h-5 w-5 shrink-0 items-center justify-center border border-frame-accent bg-frame-accent/10 text-frame-accent">
                  <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </span>
                <span className="text-xs md:text-sm font-semibold text-frame-fg">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* SECTION 5: API SECURITY & ACCESS CONTROL */}
        <div className="mt-28 border-2 border-frame-border bg-frame-bg p-6 md:p-12">
          <div className="mb-8">
            <span className="text-xs font-black uppercase tracking-[0.28em] text-frame-accent">
              Access Governance
            </span>
            <h2 className="mt-2 font-heading text-2xl md:text-4xl font-bold uppercase tracking-tight text-frame-fg">
              API Security &amp; Access Control
            </h2>
            <p className="mt-3 max-w-3xl text-sm md:text-base font-medium leading-relaxed text-frame-muted-fg">
              Security needs to be considered before an API reaches production. We design security controls around the application&apos;s users, integrations, data, and access requirements.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {securityAccessItems.map((item, i) => (
              <div
                key={i}
                className="border-2 border-frame-border bg-frame-muted/10 p-6 transition-colors hover:border-frame-accent"
              >
                <span className="text-xs font-black uppercase tracking-[0.2em] text-frame-accent">
                  Security Pillar 0{i + 1}
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

        {/* SECTION 6: API RELIABILITY & FAILURE HANDLING */}
        <div className="mt-28 border-2 border-frame-border bg-frame-bg p-6 md:p-12">
          <div className="mb-8">
            <span className="text-xs font-black uppercase tracking-[0.28em] text-frame-accent">
              Resilience Engineering
            </span>
            <h2 className="mt-2 font-heading text-2xl md:text-4xl font-bold uppercase tracking-tight text-frame-fg">
              API Reliability &amp; Failure Handling
            </h2>
            <p className="mt-3 max-w-3xl text-sm md:text-base font-medium leading-relaxed text-frame-muted-fg">
              Connected systems can fail for many reasons. An API may time out, receive duplicate requests, lose a third-party connection, or return an unexpected response. We design failure handling around these scenarios:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {reliabilityItems.map((item, i) => (
              <div key={i} className="flex items-center gap-3 border-2 border-frame-border bg-frame-muted/10 p-4">
                <span className="flex h-5 w-5 shrink-0 items-center justify-center border border-frame-accent bg-frame-accent/10 text-frame-accent">
                  <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </span>
                <span className="text-xs md:text-sm font-semibold text-frame-fg">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* SECTION 7: API PERFORMANCE & SCALABILITY */}
        <div className="mt-28 border-2 border-frame-border bg-frame-bg p-6 md:p-12">
          <div className="mb-8">
            <span className="text-xs font-black uppercase tracking-[0.28em] text-frame-accent">
              Throughput &amp; Latency
            </span>
            <h2 className="mt-2 font-heading text-2xl md:text-4xl font-bold uppercase tracking-tight text-frame-fg">
              API Performance &amp; Scalability
            </h2>
            <p className="mt-3 max-w-3xl text-sm md:text-base font-medium leading-relaxed text-frame-muted-fg">
              An API that works with ten users may behave differently when traffic grows. We consider performance during architecture, development, testing, and optimization.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {performanceScalability.map((item, i) => (
              <div
                key={i}
                className="border-2 border-frame-border bg-frame-muted/10 p-6 transition-colors hover:border-frame-accent"
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

        {/* SECTION 8: API DOCUMENTATION & DEVELOPER EXPERIENCE */}
        <div className="mt-28 border-2 border-frame-border bg-frame-bg p-6 md:p-12">
          <div className="mb-8">
            <span className="text-xs font-black uppercase tracking-[0.28em] text-frame-accent">
              DX &amp; Tooling
            </span>
            <h2 className="mt-2 font-heading text-2xl md:text-4xl font-bold uppercase tracking-tight text-frame-fg">
              API Documentation &amp; Developer Experience
            </h2>
            <p className="mt-3 max-w-3xl text-sm md:text-base font-medium leading-relaxed text-frame-muted-fg">
              A technically good API can still create problems if nobody knows how to use it. Documentation should help your internal developers, external partners, and future team members understand the API without reverse-engineering the code.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {documentationItems.map((item, i) => (
              <div
                key={i}
                className="border-2 border-frame-border bg-frame-muted/10 p-6 transition-colors hover:border-frame-accent"
              >
                <span className="text-xs font-black uppercase tracking-[0.2em] text-frame-accent">
                  DX Pillar 0{i + 1}
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

        {/* SECTION 9: API AUDIT, OPTIMIZATION & MODERNIZATION */}
        <div className="mt-28 border-2 border-frame-border bg-frame-bg p-6 md:p-12">
          <div className="mb-8">
            <span className="text-xs font-black uppercase tracking-[0.28em] text-frame-accent">
              Refactoring &amp; Upgrade
            </span>
            <h2 className="mt-2 font-heading text-2xl md:text-4xl font-bold uppercase tracking-tight text-frame-fg">
              API Audit, Optimization &amp; Modernization
            </h2>
            <div className="mt-3 max-w-3xl space-y-1 text-sm md:text-base font-medium leading-relaxed text-frame-muted-fg">
              <p>You do not always need a new API. Sometimes the existing API is the problem.</p>
              <p>We can review an existing API and identify areas that need improvement.</p>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {auditModernization.map((item, i) => (
              <div
                key={i}
                className="border-2 border-frame-border bg-frame-muted/10 p-6 transition-colors hover:border-frame-accent"
              >
                <span className="text-xs font-black uppercase tracking-[0.2em] text-frame-accent">
                  Audit Area 0{i + 1}
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

        {/* SECTION 10: API TECHNOLOGY & TOOLING */}
        <div className="mt-28 border-2 border-frame-border bg-frame-bg p-6 md:p-12">
          <div className="mb-8">
            <span className="text-xs font-black uppercase tracking-[0.28em] text-frame-accent">
              Stack &amp; Frameworks
            </span>
            <h2 className="mt-2 font-heading text-2xl md:text-4xl font-bold uppercase tracking-tight text-frame-fg">
              API Technology &amp; Tooling
            </h2>
            <p className="mt-3 max-w-3xl text-sm md:text-base font-medium leading-relaxed text-frame-muted-fg">
              We select API technologies and supporting tools based on your application&apos;s requirements, existing infrastructure, integration needs, and long-term maintenance. Our API projects can involve:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {technologyTooling.map((tech, i) => (
              <div key={i} className="flex items-center gap-3 border-2 border-frame-border bg-frame-muted/10 p-4">
                <span className="flex h-5 w-5 shrink-0 items-center justify-center border border-frame-accent bg-frame-accent/10 text-frame-accent">
                  <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </span>
                <span className="text-xs md:text-sm font-semibold text-frame-fg">
                  {tech}
                </span>
              </div>
            ))}
          </div>

          <p className="mt-6 text-xs md:text-sm font-semibold uppercase tracking-wider text-frame-accent border-t border-frame-border/60 pt-4">
              The final technology choices depend on the project&apos;s architecture, existing systems, and technical requirements.
          </p>
        </div>

        {/* SECTION 11: API DEVELOPMENT USE CASES */}
        <div className="mt-28 border-2 border-frame-border bg-frame-bg p-6 md:p-12">
          <div className="mb-8">
            <span className="text-xs font-black uppercase tracking-[0.28em] text-frame-accent">
              Business Workflows
            </span>
            <h2 className="mt-2 font-heading text-2xl md:text-4xl font-bold uppercase tracking-tight text-frame-fg">
              API Development Use Cases
            </h2>
            <p className="mt-3 max-w-3xl text-sm md:text-base font-medium leading-relaxed text-frame-muted-fg">
              APIs support many different business workflows. We design the API around what your application and connected systems actually need to accomplish.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {useCases.map((uc, i) => (
              <div
                key={i}
                className="border-2 border-frame-border bg-frame-muted/10 p-6 transition-colors hover:border-frame-accent"
              >
                <span className="text-xs font-black uppercase tracking-[0.2em] text-frame-accent">
                  Use Case 0{i + 1}
                </span>
                <h3 className="mt-2 font-heading text-lg font-bold uppercase text-frame-fg">
                  {uc.title}
                </h3>
                <p className="mt-3 text-xs md:text-sm font-medium leading-relaxed text-frame-muted-fg">
                  {uc.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* SECTION 12: WHY YOUR BUSINESS NEEDS A REAL API PARTNER */}
        <div className="mt-28 border-2 border-frame-border bg-frame-bg p-6 md:p-12">
          <div className="mb-8">
            <span className="text-xs font-black uppercase tracking-[0.28em] text-frame-accent">
              Infrastructure Risk
            </span>
            <h2 className="mt-2 font-heading text-2xl md:text-4xl font-bold uppercase tracking-tight text-frame-fg">
              Why Your Business Needs a Real API Partner
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {whyRealPartner.map((item, i) => (
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

        {/* SECTION 13: WHY CHOOSE FRAMECIPHER FOR API DEVELOPMENT & INTEGRATION */}
        <div className="mt-28 border-2 border-frame-border bg-frame-bg p-6 md:p-12">
          <div className="mb-8">
            <span className="text-xs font-black uppercase tracking-[0.28em] text-frame-accent">
              Agency Differentiators
            </span>
            <h2 className="mt-2 font-heading text-2xl md:text-4xl font-bold uppercase tracking-tight text-frame-fg">
              Why Choose Framecipher for API Development &amp; Integration
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {whyChooseUs.map((item, i) => (
              <div
                key={i}
                className="border-2 border-frame-border bg-frame-muted/10 p-6 transition-colors hover:border-frame-accent"
              >
                <span className="text-xs font-black uppercase tracking-[0.2em] text-frame-accent">
                  Advantage 0{i + 1}
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

        {/* SECTION 14: API DEVELOPMENT PORTFOLIO & CASE STUDIES */}
        <div className="mt-28 border-2 border-frame-border bg-frame-bg p-6 md:p-12">
          <div className="mb-8">
            <span className="text-xs font-black uppercase tracking-[0.28em] text-frame-accent">
              Case Evidence
            </span>
            <h2 className="mt-2 font-heading text-2xl md:text-4xl font-bold uppercase tracking-tight text-frame-fg">
              API Development Portfolio &amp; Case Studies
            </h2>
            <p className="mt-3 max-w-3xl text-sm md:text-base font-medium leading-relaxed text-frame-muted-fg">
              Every API project has different systems, data flows, and technical constraints. Our case studies can show how we approach those challenges without exposing confidential client information. Where project details can be shared, we highlight:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {portfolioElements.map((el, i) => (
              <div key={i} className="flex items-center gap-3 border-2 border-frame-border bg-frame-muted/10 p-4">
                <span className="flex h-5 w-5 shrink-0 items-center justify-center border border-frame-accent bg-frame-accent/10 text-frame-accent">
                  <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </span>
                <span className="text-xs md:text-sm font-semibold text-frame-fg">
                  {el}
                </span>
              </div>
            ))}
          </div>

          <p className="mt-6 text-xs md:text-sm font-semibold uppercase tracking-wider text-frame-accent border-t border-frame-border/60 pt-4">
            We publish only project details and results that are approved and supported by actual project evidence.
          </p>
        </div>

        {/* SECTION 15: API DEVELOPMENT SERVICES ACROSS BANGLADESH & WORLDWIDE */}
        <div className="mt-28 border-2 border-frame-border bg-frame-muted/20 p-6 md:p-12">
          <span className="text-xs font-black uppercase tracking-[0.28em] text-frame-accent">
            Domestic &amp; Global Reach
          </span>
          <h2 className="mt-2 font-heading text-2xl md:text-4xl font-bold uppercase tracking-tight text-frame-fg">
            API Development Services Across Bangladesh &amp; Worldwide
          </h2>
          <div className="mt-6 max-w-4xl space-y-4 text-sm md:text-base font-medium leading-relaxed text-frame-muted-fg">
            <p>
              Framecipher is based in Dhaka, Bangladesh, and provides API development and integration services for businesses in Bangladesh and international markets.
            </p>
            <div>
              <h4 className="font-heading text-base font-bold uppercase text-frame-fg">
                Bangladesh
              </h4>
              <p className="mt-1">
                For Bangladeshi businesses, API projects can include local payment and banking integrations alongside international platforms. Common requirements may include: bKash integration, Nagad integration, local banking APIs, ecommerce integrations, CRM and ERP connectivity, logistics integrations, and internal business systems.
              </p>
            </div>
            <div>
              <h4 className="font-heading text-base font-bold uppercase text-frame-fg">
                International Clients
              </h4>
              <p className="mt-1">
                We also work with clients in the United States, United Kingdom, Australia, Canada, and United Arab Emirates. Framecipher has worked with businesses across 20+ countries, supporting API and integration projects across different markets and technical environments.
              </p>
            </div>
            <p className="font-semibold text-frame-fg">
              Different markets can involve different payment providers, systems, access requirements, and compliance considerations. We account for those differences during project discovery.
            </p>
          </div>
          <div className="mt-8">
            <PosterButton href="/contact">Start Your API Project &rarr;</PosterButton>
          </div>
        </div>

        {/* SECTION 16: PROJECT SCOPE, REVIEW & SUPPORT */}
        <div className="mt-28 border-2 border-frame-border bg-frame-bg p-6 md:p-12">
          <span className="text-xs font-black uppercase tracking-[0.28em] text-frame-accent">
            Clear Engagement Terms
          </span>
          <h2 className="mt-2 font-heading text-2xl md:text-4xl font-bold uppercase tracking-tight text-frame-fg">
            Project Scope, Review &amp; Support
          </h2>
          <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              ['Project Scope', 'Clear scope helps prevent unexpected development changes. Before development starts, we define the agreed functionality, integrations, deliverables, timeline, and responsibilities.'],
              ['Stakeholder Reviews', 'Architecture, development, and testing stages include review points where applicable. Your approval helps ensure the project continues in the agreed direction.'],
              ['Third-Party Dependencies', 'Some API behavior depends on external providers. We cannot guarantee that a third-party service will never experience an outage, change its API, reject requests, or introduce new requirements. We can, however, build agreed error handling, retry logic, monitoring, and recovery mechanisms around those dependencies.'],
              ['Change Requests', 'Requests outside the agreed scope may require additional development time and cost. Any significant scope change should be reviewed before implementation.'],
              ['Post-Launch Support', 'Launch support can include checking the deployed integration, confirming expected data flow, and addressing agreed launch issues. Ongoing API maintenance is available separately.'],
              ['Workmanship Warranty', 'Any workmanship warranty should follow the warranty period and terms stated in the final proposal or project agreement. Third-party outages, provider-side API changes, new requirements, and functionality outside the approved scope are not treated as development defects.'],
            ].map(([title, description]) => (
              <div key={title} className="border-2 border-frame-border bg-frame-muted/10 p-5 md:p-6">
                <h3 className="font-heading text-lg font-bold uppercase text-frame-fg">{title}</h3>
                <p className="mt-3 text-sm font-medium leading-relaxed text-frame-muted-fg">{description}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
