'use client'

import React from 'react'
import {
  CreditCard,
  Users,
  Layers,
  ShoppingBag,
  Building2,
  Truck,
  Cloud,
  Database,
} from 'lucide-react'

const thirdPartyIntegrations = [
  {
    title: "Payment Gateway Integration",
    desc: "We integrate payment services into websites and applications based on the project's requirements. This can include bKash, Nagad, Stripe, PayPal, and other supported payment services. We handle payment requests, responses, transaction status, callbacks, and relevant error scenarios within the agreed project scope.",
    icon: CreditCard,
  },
  {
    title: "CRM Integration",
    desc: "Connect your website, application, or internal system with CRM platforms to move customers and lead information between systems. Typical workflows include lead creation, customer synchronization, contact updates, form submission transfer, sales-status updates, and marketing data synchronization.",
    icon: Users,
  },
  {
    title: "ERP & Accounting Integration",
    desc: "We connect applications with ERP, accounting, inventory, and business-management systems where APIs are available. This can help synchronize products, customers, orders, inventory, invoices, payment information, and operational data.",
    icon: Layers,
  },
  {
    title: "Ecommerce API Integration",
    desc: "We integrate ecommerce systems with other services required by the business, such as payment systems, inventory systems, CRM platforms, shipping services, accounting software, ERP systems, and marketing platforms.",
    icon: ShoppingBag,
  },
  {
    title: "Banking & Financial API Integration",
    desc: "For projects that require financial or banking connectivity, we can integrate supported banking and financial APIs. The exact integration depends on the provider's API, authentication requirements, access permissions, and available documentation.",
    icon: Building2,
  },
  {
    title: "Logistics & Shipping API Integration",
    desc: "Connect ecommerce and business systems with logistics or delivery platforms. Possible workflows include order submission, shipment creation, tracking updates, delivery status, customer notifications, and delivery-data synchronization.",
    icon: Truck,
  },
  {
    title: "SaaS & Third-Party Platform Integration",
    desc: "We connect your application with SaaS platforms and external services when their APIs support the required workflow. The integration can include authentication, data mapping, scheduled synchronization, webhooks, error handling, and monitoring.",
    icon: Cloud,
  },
  {
    title: "Legacy System Integration",
    desc: "Older systems often cannot be replaced immediately. We can build an integration layer between legacy systems and newer applications where the available interfaces and project requirements support it. This can reduce the need for direct point-to-point connections across every system.",
    icon: Database,
  }
]

export default function Integrations() {
  return (
    <section id="integrations" className="border-b border-white/[0.08] bg-[#09090B] px-4 py-20 sm:px-6 md:px-8 md:py-28 scroll-mt-20">
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 max-w-3xl space-y-4">
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium leading-[0.96] tracking-[-0.03em] text-white">
            Third-Party API Integration Services.
          </h2>

          <p className="text-base sm:text-lg leading-relaxed text-zinc-300">
            Connecting an API is not simply about sending a request and receiving a response. The integration must account for authentication, data mapping, validation, errors, timeouts, rate limits, webhooks, and changes on the connected platform.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {thirdPartyIntegrations.map((item, idx) => {
            const Icon = item.icon
            return (
              <div
                key={idx}
                className="group relative overflow-hidden flex flex-col justify-between rounded-xl border border-white/[0.08] bg-[#121214] p-6 sm:p-7 transition-colors hover:border-white/[0.16] hover:bg-[#18181B] before:pointer-events-none before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-gradient-to-r before:from-transparent before:via-purple-600/40 before:to-transparent"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="font-mono text-xs uppercase tracking-wider text-purple-600 font-semibold">
                      0{idx + 1}
                    </span>
                    <Icon className="h-5 w-5 text-purple-600" strokeWidth={2} />
                  </div>
                  <h3 className="mt-3 font-heading text-lg font-medium tracking-tight text-white">
                    {item.title}
                  </h3>
                  <p className="mt-2.5 text-xs sm:text-sm font-normal leading-relaxed text-zinc-300">
                    {item.desc}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
