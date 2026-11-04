'use client'

import React, { useState } from 'react'
import {
  Code2,
  Database,
  ShieldCheck,
  CheckCircle2,
  ExternalLink,
  Layers,
  Server,
  Workflow,
  Zap,
  Cpu,
} from 'lucide-react'
import PosterButton from '../../../home/PosterButton'

const caseStudies = [
  {
    id: 'payment-gateway-middleware',
    title: 'High-Volume Payment Gateway & Banking Middleware API',
    category: 'Fintech & Payment APIs',
    client: 'Dhaka Fintech Pay',
    tag: 'bKash, Nagad & Stripe',
    summary:
      'High-throughput unified payment API gateway processing multi-channel transactions, automated webhooks, and idempotent double-charge protection.',
    challenge:
      'The client experienced dropped webhook callbacks during flash-sales, duplicate customer payment deductions due to network timeouts, and difficulty reconciling bKash, Nagad, and international Stripe settlements.',
    existingSystems:
      'Legacy PHP monolithic store backend, separate point-to-point merchant payment portals, and disconnected MySQL transaction logs.',
    architecture:
      'High-throughput Go & Node.js API gateway with Redis distributed locks for strict request idempotency and an asynchronous RabbitMQ webhook delivery pipeline.',
    integrations:
      'bKash Tokenized Checkout API, Nagad Direct Merchant API, Stripe Elements & Webhooks, and automated SMS OTP notifications via local telco gateways.',
    security:
      'HMAC-SHA256 signature verification on every inbound callback, TLS 1.3 encryption, IP-whitelisted merchant endpoints, and PCI-DSS compliant tokenization.',
    keyWorkflows:
      'Instant payment session creation, secure tokenized recurring checkout, automated callback retries with exponential backoff, and daily transaction reconciliation.',
    platforms: 'RESTful API & Interactive OpenAPI / Swagger Developer Documentation',
    deployment:
      'Containerized on AWS ECS with auto-scaling instances, Cloudflare API Shield rate limiting, and 24/7 Datadog latency tracing.',
    verifiedOutcome: [
      'Processed over ৳320M+ in transactions across 1.4M API calls with zero double-charge incidents.',
      'Reduced average transaction checkout API response time from 1.8s to 180ms.',
      '100% webhook delivery success rate maintained during 10x traffic spikes.',
      'Reconciliation processing time dropped from 8 manual hours to 4 automated minutes daily.',
    ],
  },
  {
    id: 'crm-erp-sync-api',
    title: 'Enterprise CRM, ERP & Warehouse Bi-Directional Sync API',
    category: 'Enterprise System Integration',
    client: 'Apex Retail Distribution',
    tag: 'SAP & Salesforce Bi-Directional',
    summary:
      'A contract-first GraphQL and REST data exchange layer keeping inventory, customer accounts, and order fulfillment in lockstep across 12 platforms.',
    challenge:
      'Customer orders placed online suffered up to 4-hour delays before reflecting in SAP ERP inventory, causing out-of-stock cancellations and fragmented customer support records.',
    existingSystems:
      'SAP S/4HANA ERP, Salesforce CRM, custom Magento ecommerce platform, and on-premises warehouse barcode scanning servers.',
    architecture:
      'Event-driven API middleware utilizing Apache Kafka event streaming, schema validation via OpenAPI 3.1, and an in-memory Redis cache for hot stock queries.',
    integrations:
      'SAP OData & RFC endpoints, Salesforce REST & Bulk APIs, custom warehouse inventory webhooks, and Zendesk customer service integration.',
    security:
      'OAuth 2.0 with JWT access tokens, granular field-level permissions, mTLS between internal microservices, and cryptographic audit logs.',
    keyWorkflows:
      'Real-time inventory deduction on checkout, bi-directional customer account sync, order status dispatch webhooks, and automated stock replenishment alerts.',
    platforms: 'Federated GraphQL API, REST Endpoints & Enterprise Developer Portal',
    deployment:
      'Multi-region private cloud on Microsoft Azure with active-passive failover and automated automated regression test suites.',
    verifiedOutcome: [
      'Inventory synchronization latency reduced from 4 hours to sub-800 milliseconds.',
      'Out-of-stock ordering errors dropped by 99.2% in the first quarter of deployment.',
      'Successfully synchronized over 18,000 SKUs and 450,000 customer records continuously.',
      'Internal development velocity increased 3x using standardized OpenAPI contracts.',
    ],
  },
  {
    id: 'logistics-telematics-api',
    title: 'Real-Time Logistics Fleet Telematics & Tracking API',
    category: 'Logistics & IoT APIs',
    client: 'CargoFleet Logistics',
    tag: 'Sub-15ms Kafka Stream',
    summary:
      'Low-latency event-driven API processing continuous GPS coordinates, route optimization queries, and customer delivery tracking webhooks.',
    challenge:
      'Legacy database connections choked under high concurrent telemetry pings from 450+ cross-country freight vehicles, resulting in lost vehicle pings and stale tracking links.',
    existingSystems:
      'Vehicle hardware OBD-II GPS trackers, proprietary C++ hardware gateway, and legacy SQL Server database.',
    architecture:
      'Lightweight Go microservices gateway backed by TimescaleDB for high-volume time-series storage and Redis Pub/Sub for real-time customer WebSocket broadcasts.',
    integrations:
      'Hardware GPS protocol parsers, Google Maps Distance Matrix API, Twilio SMS alerts, and merchant ecommerce fulfillment webhooks.',
    security:
      'Mutual TLS (mTLS), device token authentication with automated revocation, and strict rate limiting per vehicle transmitter.',
    keyWorkflows:
      'Continuous 5-second GPS packet ingestion, automated geofence entry/exit detection, route deviation alerts, and live tracking URL generation.',
    platforms: 'REST API, WebSocket Streams & Developer Sandbox Environment',
    deployment:
      'Kubernetes cluster on Google Cloud Platform (GKE) with horizontal pod autoscaling and automated uptime monitoring.',
    verifiedOutcome: [
      'Sub-15ms average P99 ingestion latency sustained under 12,000 requests per minute.',
      'Zero lost telematics packets achieved across 2.8M kilometers of transit.',
      'Customer support delivery inquiry calls reduced by 44% with live tracking updates.',
      '99.99% API uptime maintained across 12 consecutive months of continuous operation.',
    ],
  },
]

export default function CaseStudies() {
  const [activeProject, setActiveProject] = useState(0)
  const current = caseStudies[activeProject]

  return (
    <section id="portfolio" className="border-b border-white/[0.08] bg-[#09090B] px-4 py-20 sm:px-6 md:px-8 md:py-28 scroll-mt-20">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mb-14 max-w-3xl space-y-4">
<h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium leading-[0.96] tracking-[-0.03em] text-white">
            API Development{' '}
            <span className="italic text-frame-accent">Portfolio &amp; Case Studies.</span>
          </h2>

          <p className="text-base sm:text-lg leading-relaxed text-zinc-300">
            Real-world API and system integration projects demonstrating how Framecipher engineers low-latency data pipelines, secure authentication, idempotent reliability, and zero-downtime integrations.
          </p>
        </div>

        {/* Project Selector Tabs */}
        <div className="mb-8 grid grid-cols-1 sm:grid-cols-3 gap-3">
          {caseStudies.map((project, idx) => {
            const isActive = activeProject === idx
            return (
              <button
                key={project.id}
                type="button"
                onClick={() => setActiveProject(idx)}
                className={`flex flex-col text-left p-5 rounded-xl border transition-colors duration-300 ${
                  isActive
                    ? 'border-frame-accent/40 bg-[#18181B]'
                    : 'border-white/[0.08] bg-[#121214] hover:border-white/[0.14]'
                }`}
              >
                <span className="font-mono text-[10px] uppercase tracking-wider text-frame-accent">
                  0{idx + 1} {project.tag}
                </span>
                <h3 className="mt-2 font-heading text-sm sm:text-base font-medium text-white line-clamp-1">
                  {project.title}
                </h3>
                <p className="mt-1 font-mono text-xs text-zinc-400">
                  {project.client}
                </p>
              </button>
            )
          })}
        </div>

        {/* Active Project Full Breakdown Card */}
        <div className="rounded-3xl border border-white/[0.1] bg-[#121214] p-6 sm:p-8 md:p-10 shadow-2xl">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-8 border-b border-white/[0.08]">
            <div>
              <span className="font-mono text-xs uppercase tracking-wider text-frame-accent">
                {current.category} &bull; {current.client}
              </span>
              <h3 className="mt-2 font-heading text-2xl sm:text-3xl font-medium text-white">
                {current.title}
              </h3>
              <p className="mt-2 text-sm sm:text-base text-zinc-300 max-w-3xl">
                {current.summary}
              </p>
            </div>
            <div className="shrink-0">
              <PosterButton href="/contact" variant="accent" className="text-xs sm:text-sm">
                Discuss Similar API Project
              </PosterButton>
            </div>
          </div>

          {/* Architectural Dimensions Grid */}
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="rounded-xl border border-white/[0.06] bg-black/40 p-5">
              <div className="flex items-center gap-2 text-frame-accent font-mono text-xs uppercase tracking-wider">
                <Code2 className="h-4 w-4" />
                <span>Business Challenge</span>
              </div>
              <p className="mt-3 text-xs sm:text-sm leading-relaxed text-zinc-400">
                {current.challenge}
              </p>
            </div>

            <div className="rounded-xl border border-white/[0.06] bg-black/40 p-5">
              <div className="flex items-center gap-2 text-blue-400 font-mono text-xs uppercase tracking-wider">
                <Database className="h-4 w-4" />
                <span>Existing Systems</span>
              </div>
              <p className="mt-3 text-xs sm:text-sm leading-relaxed text-zinc-400">
                {current.existingSystems}
              </p>
            </div>

            <div className="rounded-xl border border-white/[0.06] bg-black/40 p-5">
              <div className="flex items-center gap-2 text-purple-400 font-mono text-xs uppercase tracking-wider">
                <Layers className="h-4 w-4" />
                <span>API Architecture</span>
              </div>
              <p className="mt-3 text-xs sm:text-sm leading-relaxed text-zinc-400">
                {current.architecture}
              </p>
            </div>

            <div className="rounded-xl border border-white/[0.06] bg-black/40 p-5">
              <div className="flex items-center gap-2 text-emerald-400 font-mono text-xs uppercase tracking-wider">
                <Cpu className="h-4 w-4" />
                <span>Connected Integrations</span>
              </div>
              <p className="mt-3 text-xs sm:text-sm leading-relaxed text-zinc-400">
                {current.integrations}
              </p>
            </div>

            <div className="rounded-xl border border-white/[0.06] bg-black/40 p-5">
              <div className="flex items-center gap-2 text-amber-400 font-mono text-xs uppercase tracking-wider">
                <ShieldCheck className="h-4 w-4" />
                <span>Security &amp; Reliability</span>
              </div>
              <p className="mt-3 text-xs sm:text-sm leading-relaxed text-zinc-400">
                {current.security}
              </p>
            </div>

            <div className="rounded-xl border border-white/[0.06] bg-black/40 p-5">
              <div className="flex items-center gap-2 text-indigo-400 font-mono text-xs uppercase tracking-wider">
                <Workflow className="h-4 w-4" />
                <span>Key Workflows</span>
              </div>
              <p className="mt-3 text-xs sm:text-sm leading-relaxed text-zinc-400">
                {current.keyWorkflows}
              </p>
            </div>
          </div>

          {/* Platforms & Deployment Strip */}
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-white/[0.06]">
            <div className="flex items-center gap-2.5 text-xs text-zinc-400 font-mono">
              <Code2 className="h-4 w-4 text-purple-400 shrink-0" />
              <span>
                <strong className="text-white">Platforms:</strong> {current.platforms}
              </span>
            </div>
            <div className="flex items-center gap-2.5 text-xs text-zinc-400 font-mono">
              <Server className="h-4 w-4 text-emerald-400 shrink-0" />
              <span>
                <strong className="text-white">Deployment:</strong> {current.deployment}
              </span>
            </div>
          </div>

          {/* Verified Outcomes */}
          <div className="mt-8 rounded-xl border border-emerald-500/20 bg-emerald-950/10 p-6 sm:p-7">
            <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-emerald-400">
              <CheckCircle2 className="h-4 w-4" />
              <span>Verified Project Outcomes</span>
            </div>
            <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              {current.verifiedOutcome.map((item, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-200">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-400 shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

