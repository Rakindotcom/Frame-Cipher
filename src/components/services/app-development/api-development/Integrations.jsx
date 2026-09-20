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

export default function Integrations() {
  return (
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
  )
}