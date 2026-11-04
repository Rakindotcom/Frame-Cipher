'use client'

import React, { useState } from 'react'
import {
  Building2,
  Database,
  ShieldCheck,
  CheckCircle2,
  ExternalLink,
  Layers,
  Server,
  Workflow,
  Smartphone,
  Cpu,
} from 'lucide-react'
import PosterButton from '../../../home/PosterButton'

const caseStudies = [
  {
    id: 'conglomerate-erp',
    title: 'Multi-Department Conglomerate ERP & Procurement Suite',
    category: 'Enterprise ERP & Operations',
    client: 'Apex Industrial Group',
    tag: 'SAP & Oracle Integration',
    summary:
      'A unified enterprise resource planning and procurement platform connecting 7 corporate divisions, automated 3-tier approvals, and real-time ledger synchronization.',
    challenge:
      'Apex operated 7 autonomous subsidiaries running disparate legacy systems, leading to delayed monthly closes (21 days), manual vendor requisition reconciliations, and zero real-time inventory visibility across factory locations.',
    existingSystems:
      'SAP S/4HANA (HQ Finance), Oracle 11g legacy production databases, custom ASP.NET HR portal, and on-premises Microsoft Exchange servers.',
    architecture:
      'Event-driven modular monolith with domain-driven design (DDD). Micro-services integration gateway with Redis distributed lock queues and PostgreSQL transactional store.',
    integrations:
      'Bi-directional SAP RFC/BAPI connectors, Oracle GoldenGate CDC stream, Azure AD SSO (SAML 2.0), and automated SMS OTP dispatch for high-value approvals.',
    security:
      'Role-based access control (RBAC) with field-level encryption (AES-256), immutable cryptographic audit trails, and strict IP-whitelisted network isolation.',
    keyWorkflows:
      'Automated purchase order generation, 3-tier approval hierarchy (Department Head -> Audit -> CFO), goods received note (GRN) verification, and vendor portal invoice reconciliation.',
    platforms: 'Enterprise Responsive Web Platform & Dedicated Manager Approval Tablet App',
    deployment:
      'Private cloud deployment on Microsoft Azure with active-passive high availability, automated database replication, and zero-downtime CI/CD pipelines.',
    verifiedOutcome: [
      'Monthly financial closing time reduced from 21 days to 3.5 days.',
      '100% elimination of manual reconciliation errors across 7 subsidiaries.',
      'Processed over ৳180M+ in procurement approvals with zero security incidents.',
      'Active daily adoption across 1,850+ enterprise employees and managers.',
    ],
  },
  {
    id: 'logistics-supply-chain',
    title: 'Nationwide Fleet, Warehouse & Dispatch Automation Suite',
    category: 'Supply Chain & Logistics',
    client: 'TransGlobal Logistics Bangladesh',
    tag: 'Offline-First & GPS Dispatch',
    summary:
      'Mission-critical logistics platform handling real-time fleet telematics, automated warehouse receiving, and offline-first driver handheld workflows.',
    challenge:
      'Fleet managers lacked live visibility into 320+ cross-country vehicles and 14 regional distribution centers, while remote drivers suffered constant connectivity dropouts in rural corridors.',
    existingSystems:
      'Legacy Microsoft SQL Server dispatch database, hardware telematics GPS trackers, and paper-based bill of lading documentation.',
    architecture:
      'High-throughput distributed Node.js / Go microservices with Apache Kafka event streaming, TimescaleDB for time-series telematics, and SQLite for offline edge synchronization.',
    integrations:
      'OBD-II vehicle telematics protocols, Google Maps Geocoding & Route Optimization APIs, regional barcode scanner hardware, and bKash corporate merchant API.',
    security:
      'Mutual TLS (mTLS) for field device communication, tamper-proof device fingerprinting, and granular branch-level access control.',
    keyWorkflows:
      'Automated route sequencing, dynamic dispatch assignment, proof-of-delivery (PoD) with biometric signature capture, and exception escalation workflows.',
    platforms: 'Central Dispatch Command Center Web App & Offline-Capable Android Fleet App',
    deployment:
      'Multi-region AWS ECS Fargate cluster with automated auto-scaling and Redis-backed session persistence.',
    verifiedOutcome: [
      'Fleet fuel utilization improved by 22.4% via automated route optimization.',
      'Zero delivery report loss in zero-connectivity rural zones via SQLite sync queue.',
      'Average dispatch processing time dropped from 45 minutes to 6 minutes.',
      'Over 45,000 monthly consignments tracked and audited with 99.98% system uptime.',
    ],
  },
  {
    id: 'banking-portal',
    title: 'Enterprise Banking Operations & Compliance Audit Intranet',
    category: 'Fintech & Governance',
    client: 'CityEdge Banking Corporation',
    tag: 'Zero-Trust & Compliance Ready',
    summary:
      'A secure internal operations portal orchestrating loan sanction workflows, centralized KYC compliance tracking, and automated audit logging.',
    challenge:
      'Branch credit officers struggled with disconnected paperwork and manual credit underwriting approval loops that took 14 business days, creating compliance audit vulnerabilities.',
    existingSystems:
      'Core Banking Solution (CBS) legacy AS/400 mainframe, Microsoft Active Directory, and physical archival filing systems.',
    architecture:
      'Hexagonal architecture with isolated compliance boundary, read-replicas for intensive reporting, and asynchronous task workers.',
    integrations:
      'Core Banking System message broker (ISO 8583 format), Bangladesh Bank CIB database connector, and Okta Enterprise SSO.',
    security:
      'SOC2 & ISO 27001-aligned controls, multi-factor authentication (FIDO2 / WebAuthn), automated data masking for sensitive PII, and full access audit logs.',
    keyWorkflows:
      'Commercial credit underwriting pipeline, risk matrix scoring, compliance document verification, and executive sanction sign-off.',
    platforms: 'Hardened Internal Web Platform & Executive Mobile Approval App',
    deployment:
      'On-premises private banking data center with air-gapped staging environments and automated penetration test gates.',
    verifiedOutcome: [
      'Credit underwriting turn-around time dropped from 14 days to 48 hours.',
      '100% compliance audit clearance on Bangladesh Bank annual inspection.',
      'Over 2,400 daily banking officers onboarded across 64 branch locations.',
      'Granular audit trails verifying 100% of internal data queries and transactions.',
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
            Enterprise App Development{' '}
            <span className="italic text-frame-accent">Portfolio &amp; Case Studies.</span>
          </h2>

          <p className="text-base sm:text-lg leading-relaxed text-zinc-300">
            Real enterprise implementations demonstrating how Framecipher handles complex workflows, legacy integrations, mission-critical security, and high-availability operations.
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
                Discuss Similar Enterprise Project
              </PosterButton>
            </div>
          </div>

          {/* 7 Architectural Pillars Grid */}
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="rounded-xl border border-white/[0.06] bg-black/40 p-5">
              <div className="flex items-center gap-2 text-frame-accent font-mono text-xs uppercase tracking-wider">
                <Building2 className="h-4 w-4" />
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
                <span>Solution Architecture</span>
              </div>
              <p className="mt-3 text-xs sm:text-sm leading-relaxed text-zinc-400">
                {current.architecture}
              </p>
            </div>

            <div className="rounded-xl border border-white/[0.06] bg-black/40 p-5">
              <div className="flex items-center gap-2 text-emerald-400 font-mono text-xs uppercase tracking-wider">
                <Cpu className="h-4 w-4" />
                <span>Integrations</span>
              </div>
              <p className="mt-3 text-xs sm:text-sm leading-relaxed text-zinc-400">
                {current.integrations}
              </p>
            </div>

            <div className="rounded-xl border border-white/[0.06] bg-black/40 p-5">
              <div className="flex items-center gap-2 text-amber-400 font-mono text-xs uppercase tracking-wider">
                <ShieldCheck className="h-4 w-4" />
                <span>Security &amp; Governance</span>
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
              <Smartphone className="h-4 w-4 text-purple-400 shrink-0" />
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

          {/* Verified Outcome Checkpoints */}
          <div className="mt-8 rounded-xl border border-emerald-500/20 bg-emerald-950/10 p-6 sm:p-7">
            <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-emerald-400">
              <CheckCircle2 className="h-4 w-4" />
              <span>Verified Business Outcomes</span>
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
