'use client'

import React from 'react'
import {
  Code2,
  Server,
  Smartphone,
  Database,
  Network,
  Lock,
  CreditCard,
  Cloud,
  BarChart3,
  CheckCircle2,
  Share2,
  Gauge,
} from 'lucide-react'

const TECH_CATEGORIES = [
  {
    icon: Code2,
    num: '01',
    category: 'Frontend Technologies',
    stack: ['Next.js 15', 'React 19', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
    desc: 'High-performance reactive user interfaces with server-side rendering for optimal speed and SEO.',
  },
  {
    icon: Server,
    num: '02',
    category: 'Backend Technologies',
    stack: ['Node.js', 'NestJS', 'Python / FastAPI', 'Go', 'Express'],
    desc: 'Modular, maintainable API layers engineered around your domain logic without premature complexity.',
  },
  {
    icon: Smartphone,
    num: '03',
    category: 'Mobile Development Technologies',
    stack: ['React Native', 'Flutter', 'Swift / iOS', 'Kotlin / Android'],
    desc: 'Cross-platform native-compiled apps sharing up to 90% logic between iOS and Android.',
  },
  {
    icon: Database,
    num: '04',
    category: 'Databases & Storage',
    stack: ['PostgreSQL', 'Supabase', 'MongoDB', 'Redis', 'Prisma ORM'],
    desc: 'Relational ACID integrity paired with lightning-fast in-memory caching and vector capabilities.',
  },
  {
    icon: Network,
    num: '05',
    category: 'REST or GraphQL APIs',
    stack: ['RESTful OpenAPI', 'GraphQL / Apollo', 'tRPC', 'Webhooks'],
    desc: 'Contract-first API architecture with strict schema validation and auto-generated client SDKs.',
  },
  {
    icon: Lock,
    num: '06',
    category: 'Authentication Systems',
    stack: ['NextAuth / Auth.js', 'Clerk', 'Firebase Auth', 'JWT & OAuth2', 'SSO'],
    desc: 'Production-ready authentication with social logins, session management, and RBAC roles.',
  },
  {
    icon: CreditCard,
    num: '07',
    category: 'Payment Integrations',
    stack: ['Stripe', 'Paddle', 'bKash API', 'Nagad API', 'SSLCommerz'],
    desc: 'Seamless multi-currency subscriptions, one-time charges, and local Bangladesh mobile banking.',
  },
  {
    icon: Cloud,
    num: '08',
    category: 'Cloud Infrastructure',
    stack: ['AWS', 'Vercel', 'Google Cloud', 'Docker', 'DigitalOcean'],
    desc: 'Serverless and containerized deployment pipelines with automatic scaling and 99.9% uptime.',
  },
  {
    icon: BarChart3,
    num: '09',
    category: 'Analytics & Telemetry',
    stack: ['PostHog', 'Mixpanel', 'Google Analytics 4', 'Sentry'],
    desc: 'Full-funnel behavioral telemetry, conversion tracking, cohort retention, and session replays.',
  },
  {
    icon: CheckCircle2,
    num: '10',
    category: 'Automated Testing',
    stack: ['Vitest', 'Jest', 'Playwright', 'Cypress', 'Postman'],
    desc: 'End-to-end user workflow verification and API integration suites preventing critical launch regressions.',
  },
  {
    icon: Share2,
    num: '11',
    category: 'Third-Party APIs',
    stack: ['OpenAI / Gemini', 'SendGrid / Resend', 'Twilio SMS', 'Google Maps'],
    desc: 'Pre-built connectors to AI models, transactional email, SMS OTPs, and cloud storage providers.',
  },
  {
    icon: Gauge,
    num: '12',
    category: 'Deployment & Monitoring Tools',
    stack: ['GitHub Actions', 'Datadog', 'BetterStack', 'Cloudflare CDN'],
    desc: 'Zero-downtime CI/CD pipelines with real-time error alerts and global edge edge delivery.',
  },
]

export default function TechStack() {
  return (
    <section className="relative isolate border-b border-white/[0.08] bg-[#09090B] px-4 py-20 sm:px-6 md:px-8 md:py-28">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="max-w-3xl mb-16">
<h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium leading-[0.96] tracking-tight text-white">
            MVP Development{' '}
            <span className="italic text-frame-accent">Technology Stack.</span>
          </h2>

          <p className="mt-4 text-base sm:text-lg text-zinc-300 leading-relaxed">
            The technology stack should support the MVP actual requirements rather than follow a fixed technology list. Framecipher selects technologies based on the product type, platform, integrations, expected workload, development requirements, and future product direction.
          </p>

          <p className="mt-2 text-sm text-zinc-400">
            The goal is to use a practical stack that allows the MVP to launch efficiently without creating unnecessary technical limitations for the next phase.
          </p>
        </div>

        {/* 12-Category Architectural Ledger Grid */}
        <div className="mt-14 grid grid-cols-1 gap-px overflow-hidden rounded-xl border border-white/[0.08] bg-white/[0.08] sm:grid-cols-2 lg:grid-cols-3">
          {TECH_CATEGORIES.map((tech) => {
            const Icon = tech.icon
            return (
              <div
                key={tech.num}
                className="group relative flex flex-col justify-between bg-[#0f1011] p-7 sm:p-8 transition-colors duration-200 hover:bg-[#141516]"
              >
                <div className="flex items-center justify-between pb-4 border-b border-white/[0.06]">
                  <div className="flex items-center gap-3">
                    <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/[0.1] bg-white/[0.03] text-frame-accent group-hover:border-frame-accent/40">
                      <Icon className="h-4.5 w-4.5" />
                    </div>
                    <span className="font-mono text-xs text-zinc-500">
                      {tech.num}
                    </span>
                  </div>
                  
                </div>

                <h3 className="mt-4 font-heading text-base font-medium tracking-tight text-white group-hover:text-frame-accent transition-colors">
                  {tech.category}
                </h3>

                <p className="mt-2 text-xs text-zinc-400 leading-relaxed min-h-[36px]">
                  {tech.desc}
                </p>

                {/* Badges */}
                <div className="mt-4 flex flex-wrap gap-1.5 pt-4 border-t border-white/[0.06]">
                  {tech.stack.map((item, idx) => (
                    <span
                      key={idx}
                      className="rounded-md border border-white/[0.06] bg-black/40 px-2.5 py-1 font-mono text-[11px] text-zinc-300"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

