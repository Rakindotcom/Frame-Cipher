'use client'

import React from 'react'
import {
  Smartphone,
  Bug,
  Activity,
  ShieldCheck,
  Server,
  CloudUpload,
  Sparkles,
  BarChart3,
  Check,
} from 'lucide-react'

const maintenanceServices = [
  {
    icon: Smartphone,
    num: '01',
    title: 'OS, SDK & Device Compatibility',
    desc: 'Android and iOS regularly introduce new operating system versions, SDK requirements, and device changes. We review your application against relevant platform updates and make the changes needed to keep it working properly.',
    bullets: [
      'Android and iOS version compatibility',
      'SDK and dependency updates',
      'Deprecated API replacement',
      'Device compatibility checks',
      'Build and configuration updates',
      'Regression testing after platform changes',
      'App Store and Google Play technical requirements',
    ],
    footer: 'We focus on compatibility before platform changes become production problems.',
  },
  {
    icon: Bug,
    num: '02',
    title: 'Bug Fixes & Crash Resolution',
    desc: 'Every application can develop issues as users, devices, dependencies, and integrations change. We investigate reported bugs and production issues to identify the underlying cause rather than repeatedly treating the same symptom.',
    bullets: [
      'Crash investigation',
      'Functional bug fixes',
      'UI and interaction issues',
      'Login and authentication problems',
      'Payment and checkout issues',
      'Data-related errors',
      'Regression testing',
      'Root-cause investigation',
      'Post-release verification',
    ],
    footer: 'We prioritize issues based on their impact on your users and business operations.',
  },
  {
    icon: Activity,
    num: '03',
    title: 'Performance Monitoring & Optimization',
    desc: 'Slow screens, failed requests, crashes, and inefficient processes can affect the user experience. We monitor relevant application and infrastructure signals and investigate performance problems when they appear.',
    bullets: [
      'App performance checks',
      'Crash and error monitoring',
      'API response analysis',
      'Server health monitoring',
      'Database performance checks',
      'Memory and resource issues',
      'Slow application flows',
      'Performance optimization',
      'Regression testing after optimization',
    ],
    footer: 'The goal is to keep performance issues visible before they become larger operational problems.',
  },
  {
    icon: ShieldCheck,
    num: '04',
    title: 'Security & Infrastructure Maintenance',
    desc: 'Security requirements do not end when an application launches. We help keep the application, dependencies, and supporting infrastructure maintained as your technology environment changes.',
    bullets: [
      'Security patches',
      'Dependency updates',
      'Vulnerability reviews',
      'Server and hosting maintenance',
      'Database maintenance',
      'Backup and recovery checks',
      'Authentication and access reviews',
      'Configuration updates',
      'Security-related bug fixes',
    ],
    footer: 'For applications with specific compliance requirements, the maintenance scope can be planned around those requirements.',
  },
  {
    icon: Server,
    num: '05',
    title: 'Backend, API & Third-Party Integration Support',
    desc: 'Mobile applications often depend on APIs, databases, payment systems, authentication services, analytics, and other external systems. A change in one system can affect the entire application. We maintain existing backend and integration components to help keep these connections working.',
    bullets: [
      'Existing API maintenance',
      'API error investigation',
      'Backend bug fixes',
      'Database-related issues',
      'Payment integration maintenance',
      'Authentication integrations',
      'Third-party service updates',
      'Integration monitoring',
      'API compatibility checks',
    ],
    footer: 'This service focuses on maintaining existing systems. New API architecture or major API development can be handled as a separate development project.',
  },
  {
    icon: CloudUpload,
    num: '06',
    title: 'App Release & Store Management',
    desc: 'A technically complete update still needs to reach users safely. We support the release process by preparing, testing, and verifying application updates.',
    bullets: [
      'Version and build updates',
      'Release preparation',
      'Production build support',
      'Pre-release testing',
      'App Store submission support',
      'Google Play submission support',
      'Release verification',
      'Staged rollout support where appropriate',
      'Post-release issue monitoring',
      'Rollback planning',
    ],
    footer: 'We help reduce the risk of releasing an update without understanding its production impact.',
  },
  {
    icon: Sparkles,
    num: '07',
    title: 'Feature Enhancements & UX Improvements',
    desc: 'Maintenance does not always mean fixing something that is broken. As your business grows, you may need smaller product improvements without rebuilding the entire application.',
    bullets: [
      'Minor feature additions',
      'Existing feature improvements',
      'UI and UX refinements',
      'User-flow improvements',
      'Analytics-based improvements',
      'Third-party feature updates',
      'Small workflow changes',
      'Product experiments and testing support',
    ],
    footer: 'Larger feature development can be scoped separately when it requires substantial development capacity.',
  },
  {
    icon: BarChart3,
    num: '08',
    title: 'Analytics, Monitoring & Reporting',
    desc: 'Maintenance works better when your team can see what is happening inside the application. We use relevant application information to help identify recurring problems, performance issues, and maintenance priorities.',
    bullets: [
      'Application health',
      'Crash and error trends',
      'Performance issues',
      'Resolved bugs',
      'Pending issues',
      'Security and dependency updates',
      'Integration issues',
      'Completed maintenance work',
      'Recommended next steps',
    ],
    footer: 'You receive clear communication about the work performed and issues that require attention.',
  },
]

export default function OurServices() {
  return (
    <section id="services" className="relative isolate border-b border-white/10 bg-[#0A0A0C] px-4 py-20 sm:px-6 md:px-8 md:py-28 scroll-mt-20">
      <div className="mx-auto max-w-7xl">
        {/* Left-Aligned Header */}
        <div className="mb-14 max-w-3xl space-y-4">
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium leading-[0.96] tracking-[-0.03em] text-white">
            Our App Maintenance &amp; Support Services.
          </h2>

          <p className="text-base sm:text-lg leading-relaxed text-zinc-300">
            App maintenance involves more than fixing problems after they appear. We monitor the parts of your application that can change over time and keep the product aligned with new technical requirements.
          </p>
        </div>

        {/* 8-Card Grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {maintenanceServices.map((service, idx) => {
            const Icon = service.icon
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
                      {service.num}
                    </span>
                  </div>

                  <h3 className="mt-4 font-heading text-lg font-medium tracking-tight text-white">
                    {service.title}
                  </h3>

                  <p className="mt-2.5 text-xs sm:text-sm font-normal text-zinc-300 leading-relaxed">
                    {service.desc}
                  </p>

                  <ul className="mt-4 space-y-2 border-t border-white/10 pt-4">
                    {service.bullets.map((b, bIdx) => (
                      <li key={bIdx} className="flex items-start gap-2 text-xs text-zinc-300">
                        <Check className="h-3.5 w-3.5 shrink-0 text-emerald-400 mt-0.5" strokeWidth={2.5} />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-6 border-t border-white/10 pt-3 text-xs leading-relaxed text-zinc-400 font-sans">
                  {service.footer}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
