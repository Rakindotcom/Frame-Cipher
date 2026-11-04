'use client'

import React from 'react'

const reliabilityItems = [
  {
    title: "Retry & Exponential Backoff Logic",
    desc: "Automated retry policies with exponential backoff and jitter prevent transient network hiccups from breaking critical transactions."
  },
  {
    title: "Idempotency for Duplicate Requests",
    desc: "Unique idempotency keys ensure checkout payments and state-mutating requests are never executed twice even during network retries."
  },
  {
    title: "Timeout & Error Handling",
    desc: "Strict request deadlines and circuit breakers prevent hanging upstream dependencies from cascading failures across the entire cluster."
  },
  {
    title: "Webhook Retry & Delivery Reliability",
    desc: "Guaranteed at-least-once delivery with persistent dead-letter queues (DLQ) ensuring customer webhook notifications are never dropped."
  },
  {
    title: "Failure Recovery Workflows",
    desc: "Automated recovery procedures that reconcile partial failures and roll back orphaned database writes safely."
  },
  {
    title: "Logging & Distributed Observability",
    desc: "End-to-end trace correlation IDs linking client requests across microservices and database queries for instant debugging."
  },
  {
    title: "Critical Failure Alerting",
    desc: "Real-time alerts via Slack, PagerDuty, and email whenever error rates spike above strict SLA thresholds."
  },
  {
    title: "Partial-Failure Graceful Degradation",
    desc: "Non-critical API dependencies fail silently or return cached stale data without blocking core user checkout journeys."
  },
  {
    title: "Recovery & Troubleshooting Procedures",
    desc: "Runbooks and automated incident response scripts empowering engineering teams to resolve production anomalies in minutes."
  }
]

export default function Reliability() {
  return (
    <section id="reliability" className="border-b border-white/[0.08] bg-[#09090B] px-4 py-20 sm:px-6 md:px-8 md:py-28 scroll-mt-20">
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 max-w-3xl space-y-4">
<h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium leading-[0.96] tracking-[-0.03em] text-white">
            API Reliability &amp; <span className="italic text-frame-accent">Failure Handling.</span>
          </h2>

          <p className="text-base sm:text-lg leading-relaxed text-zinc-300">
            Connected systems can fail for many reasons. An API may time out, receive duplicate requests, lose a third-party connection, or return an unexpected response. We design failure handling around these scenarios:
          </p>
        </div>

        <div className="grid grid-cols-1 gap-px overflow-hidden rounded-xl border border-white/[0.08] bg-white/[0.08] sm:grid-cols-2 lg:grid-cols-3">
          {reliabilityItems.map((item, idx) => (
            <div
              key={idx}
              className="flex flex-col justify-between bg-[#0f1011] p-6 sm:p-7 transition-colors hover:bg-[#141516]"
            >
              <div>
                <span className="font-mono text-xs uppercase tracking-wider text-frame-accent">
                  0{idx + 1}
                </span>
                <h3 className="mt-3 font-heading text-lg font-medium tracking-tight text-white">
                  {item.title}
                </h3>
                <p className="mt-2.5 text-xs sm:text-sm font-normal leading-relaxed text-zinc-400">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
