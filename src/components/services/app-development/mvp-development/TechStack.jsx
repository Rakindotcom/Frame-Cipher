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
    desc: 'Zero-downtime CI/CD pipelines with real-time error alerts and global edge delivery.',
  },
]

export default function TechStack() {
  return (
    <section className="relative isolate border-b border-white/10 bg-[#0A0A0C] px-4 py-20 sm:px-6 md:px-8 md:py-28">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="max-w-3xl mb-14 space-y-4">
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium leading-[0.96] tracking-[-0.03em] text-white">
            MVP Development Technology Stack.
          </h2>

          <p className="text-base sm:text-lg text-zinc-300 leading-relaxed">
            The technology stack should support the MVP&apos;s actual requirements rather than follow a fixed technology list. Framecipher selects technologies based on the product type, platform, integrations, expected workload, development requirements, and future product direction.
          </p>

          <p className="text-sm text-zinc-400">
            The goal is to use a practical stack that allows the MVP to launch efficiently without creating unnecessary technical limitations for the next phase.
          </p>
        </div>

        {/* 12 Discrete Cards in Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {TECH_CATEGORIES.map((tech) => {
            const Icon = tech.icon
            return (
              <div
                key={tech.num}
                className="group relative flex flex-col justify-between overflow-hidden rounded-xl border border-white/10 bg-[#0D0D0F] p-6 sm:p-7 transition-all duration-300 hover:border-white/20 hover:bg-[#121214] before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-gradient-to-r before:from-transparent before:via-purple-600/40 before:to-transparent"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-purple-600/20 bg-purple-600/10 text-purple-600">
                      <Icon className="h-5 w-5" />
                    </div>
                    <span className="font-mono text-xs uppercase tracking-wider text-purple-600/80">
                      {tech.num}
                    </span>
                  </div>

                  <h3 className="mt-4 font-heading text-lg font-medium tracking-tight text-white">
                    {tech.category}
                  </h3>

                  <p className="mt-2 text-xs sm:text-sm font-normal text-zinc-300 leading-relaxed min-h-[40px]">
                    {tech.desc}
                  </p>

                  {/* Clean Editorial Tech Stack List (Directive 17: No box pills) */}
                  <div className="mt-4 border-t border-white/10 pt-3">
                    <span className="font-mono text-[10px] uppercase tracking-wider text-purple-400 block mb-1.5">
                      Key Technologies:
                    </span>
                    <p className="font-mono text-xs text-zinc-300 leading-relaxed">
                      {tech.stack.join(' • ')}
                    </p>
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
