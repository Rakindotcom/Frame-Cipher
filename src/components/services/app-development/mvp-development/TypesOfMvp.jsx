'use client'

import React from 'react'
import {
  Layers,
  Layout,
  Smartphone,
  Store,
  ShoppingBag,
  Sparkles,
  Wrench,
  Rocket,
  Check
} from 'lucide-react'

const mvpTypes = [
  {
    icon: Layers,
    title: "SaaS MVPs",
    desc: "We build focused SaaS products around the core workflow users need to experience. We prioritize the functionality required to test whether users will adopt the service.",
    features: [
      "User registration & authentication",
      "Account management",
      "Core product functionality",
      "Dashboard",
      "Subscription or payment functionality",
      "Admin controls",
      "Notifications",
      "Basic analytics"
    ]
  },
  {
    icon: Layout,
    title: "Web Application MVPs",
    desc: "Web application MVPs can provide a complete browser-based product experience without requiring a native mobile application. The scope depends on the core workflow being validated.",
    features: [
      "User accounts",
      "Dashboards",
      "Forms and workflows",
      "Search and filtering",
      "Admin functionality",
      "API integrations",
      "Payments",
      "Business automation"
    ]
  },
  {
    icon: Smartphone,
    title: "Mobile App MVPs",
    desc: "We develop focused mobile experiences around the features required for initial validation. The platform strategy depends on the target users, product requirements, and validation goals.",
    features: [
      "User registration & profiles",
      "Core app functionality",
      "Push notifications",
      "Location features",
      "Payments",
      "API connectivity",
      "User feedback",
      "Analytics"
    ]
  },
  {
    icon: Store,
    title: "Marketplace MVPs",
    desc: "Marketplace MVPs connect different user groups around a specific transaction or interaction. We focus on the smallest complete marketplace workflow that can be tested with real participants.",
    features: [
      "Buyer and seller accounts",
      "Listings & search",
      "Product or service details",
      "Messaging where required",
      "Transactions & payments",
      "Order or booking workflows",
      "Admin controls"
    ]
  },
  {
    icon: ShoppingBag,
    title: "Ecommerce MVPs",
    desc: "An ecommerce MVP can test whether customers will discover, evaluate, and purchase a defined product range. The MVP scope depends on the products, sales workflow, and systems involved.",
    features: [
      "Product catalog & product pages",
      "Cart & checkout",
      "Payment integration",
      "Order management",
      "Customer accounts",
      "Inventory connection",
      "Delivery integration"
    ]
  },
  {
    icon: Sparkles,
    title: "AI-Powered MVPs",
    desc: "AI products require careful scope because model behavior, data requirements, and user expectations can affect the product experience. We focus on the AI workflow that needs to be validated rather than adding AI features simply because they are technically possible.",
    features: [
      "AI-assisted workflows",
      "Text generation & classification",
      "Semantic search & recommendations",
      "Document processing",
      "AI chat interfaces",
      "External AI API integration",
      "Usage tracking & token management"
    ]
  },
  {
    icon: Wrench,
    title: "Internal Tool MVPs",
    desc: "An internal MVP can help an organization test whether a new workflow or operational tool solves a real business problem. The first release can remain focused on the workflow that needs to be validated.",
    features: [
      "Internal dashboards",
      "Approval workflows",
      "Inventory tools",
      "Reporting systems",
      "CRM extensions",
      "Operations management tools",
      "Employee portals",
      "Internal automation"
    ]
  },
  {
    icon: Rocket,
    title: "Other Product-Specific MVPs",
    desc: "Some products do not fit neatly into a standard category. The common principle remains the same: identify the core user journey and build what is required to test it.",
    features: [
      "Booking platforms",
      "On-demand services",
      "Customer portals",
      "Business automation products",
      "Community platforms",
      "Subscription products",
      "Data-driven applications",
      "Product-specific web or mobile apps"
    ]
  }
]

export default function TypesOfMvp() {
  return (
    <section id="mvp-types" className="relative border-b border-white/10 bg-[#0A0A0C] px-4 py-20 sm:px-6 md:px-8 md:py-28 scroll-mt-20">
      <div className="mx-auto max-w-7xl">
        {/* Left-Aligned Header Block */}
        <div className="mb-14 max-w-3xl space-y-4">
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium leading-[0.96] tracking-[-0.03em] text-white">
            Types of MVPs We Build.
          </h2>

          <p className="text-base sm:text-lg leading-relaxed text-zinc-300">
            The right MVP structure depends on the product model, users, and core workflow.
          </p>
        </div>

        {/* 8 Cards in Discrete Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {mvpTypes.map((type, idx) => {
            const Icon = type.icon
            return (
              <div
                key={idx}
                className="group relative flex flex-col justify-between overflow-hidden rounded-xl border border-white/10 bg-[#0D0D0F] p-6 sm:p-7 transition-all duration-300 hover:border-white/20 hover:bg-[#121214] before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-gradient-to-r before:from-transparent before:via-purple-600/40 before:to-transparent"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-purple-600/20 bg-purple-600/10 text-purple-600">
                      <Icon className="h-5 w-5" />
                    </div>
                    <span className="font-mono text-xs uppercase tracking-wider text-purple-600/80">
                      0{idx + 1}
                    </span>
                  </div>

                  <h3 className="mt-4 font-heading text-lg font-medium tracking-tight text-white">
                    {type.title}
                  </h3>

                  <p className="mt-2.5 text-xs sm:text-sm font-normal leading-relaxed text-zinc-300">
                    {type.desc}
                  </p>

                  <div className="mt-5 border-t border-white/10 pt-3.5">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-purple-400 block mb-2">
                      Core Scope Elements:
                    </span>
                    <ul className="space-y-1.5 text-xs text-zinc-300 font-sans">
                      {type.features.map((f, fIdx) => (
                        <li key={fIdx} className="flex items-start gap-2">
                          <Check className="h-3 w-3 text-emerald-400 shrink-0 mt-0.5" strokeWidth={2.5} />
                          <span>{f}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
