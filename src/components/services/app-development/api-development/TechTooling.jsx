'use client'

import React from 'react'
import {
  Code2,
  Layers,
  Network,
  Database,
  FileCheck,
  ShieldCheck,
  Cloud,
  Activity,
} from 'lucide-react'

const technologyTooling = [
  { icon: Code2, layer: 'Languages & Runtimes', tools: 'Node.js, TypeScript, Go, Python, PHP / Laravel' },
  { icon: Layers, layer: 'Frameworks & Gateways', tools: 'Express, Fastify, NestJS, Gin, FastAPI, Kong, KrakenD' },
  { icon: Network, layer: 'Protocols', tools: 'REST (JSON), GraphQL (Apollo), gRPC (Protobuf), Webhooks, WebSockets' },
  { icon: Database, layer: 'Databases & Caching', tools: 'PostgreSQL, MySQL, MongoDB, Redis, Memcached, Database integration' },
  { icon: FileCheck, layer: 'Documentation & Testing', tools: 'OpenAPI and Swagger, Swagger UI, Postman, Jest, Supertest, Automated API testing' },
  { icon: ShieldCheck, layer: 'Security & Auth', tools: 'OAuth and token-based authentication, API keys and access controls, HMAC-SHA256, mTLS' },
  { icon: Cloud, layer: 'Cloud & Infrastructure', tools: 'Cloud and existing infrastructure, AWS, Google Cloud, DigitalOcean, Docker, Kubernetes' },
  { icon: Activity, layer: 'Monitoring & Logging', tools: 'Logging and monitoring, Datadog, Prometheus, Grafana, Sentry, OpenTelemetry' },
]

export default function TechTooling() {
  return (
    <section id="tech-tooling" className="border-b border-white/[0.08] bg-[#09090B] px-4 py-20 sm:px-6 md:px-8 md:py-28 scroll-mt-20">
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 max-w-3xl space-y-4">
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium leading-[0.96] tracking-[-0.03em] text-white">
            API Technology &amp; Tooling.
          </h2>

          <p className="text-base sm:text-lg leading-relaxed text-zinc-300">
            We select API technologies and supporting tools based on your application's requirements, existing infrastructure, integration needs, and long-term maintenance. Our API projects can involve:
          </p>
        </div>

        <div className="relative overflow-hidden rounded-xl border border-white/[0.08] bg-[#121214] shadow-xl before:pointer-events-none before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-gradient-to-r before:from-transparent before:via-purple-600/40 before:to-transparent">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead className="border-b border-white/[0.08] bg-[#18181B] font-mono text-xs uppercase tracking-wider text-zinc-300">
                <tr>
                  <th className="p-4 sm:p-5 border-r border-white/[0.08] text-white">Architecture Layer</th>
                  <th className="p-4 sm:p-5 text-purple-400">Technologies &amp; Frameworks</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/[0.06] font-sans">
                {technologyTooling.map((item, idx) => {
                  const Icon = item.icon
                  return (
                    <tr key={idx} className="transition-colors hover:bg-[#18181B]">
                      <td className="p-4 sm:p-5 font-medium text-white border-r border-white/[0.08] whitespace-nowrap">
                        <div className="flex items-center gap-3">
                          <Icon className="h-4 w-4 text-purple-600 shrink-0" strokeWidth={2} />
                          <span>{item.layer}</span>
                        </div>
                      </td>
                      <td className="p-4 sm:p-5 font-normal text-zinc-300">
                        {item.tools}
                      </td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  )
}
