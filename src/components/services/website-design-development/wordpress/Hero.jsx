'use client'

import React from 'react'
import Link from 'next/link'
import PosterButton from '../../../home/PosterButton'
import { Ambient3DCanvas } from '../../../ui/ambient-3d-canvas'
import { CodeTypingBg, CODE_TOKENS as T } from '../../../ui/code-typing-bg'

// Ambient typing snippet mirrors this page's actual engineering (custom types, enqueue pipeline)
const WP_LINES = [
  [['<?php', T.punct]],
  [
    ['add_action', T.fn],
    ['(', T.punct],
    [`'wp_enqueue_scripts'`, T.str],
    [', ', T.punct],
    ['function () {', T.kw],
  ],
  [
    ['  wp_enqueue_style', T.fn],
    ['(', T.punct],
    [`'fc-theme'`, T.str],
    [');', T.punct],
  ],
  [
    ['  wp_enqueue_script', T.fn],
    ['(', T.punct],
    [`'fc-core'`, T.str],
    [');', T.punct],
  ],
  [['});', T.punct]],
  [],
  [
    ['register_post_type', T.fn],
    ['(', T.punct],
    [`'projects'`, T.str],
    [', [', T.punct],
  ],
  [
    [`  'public'`, T.fn],
    ['  => ', T.punct],
    ['true', T.kw],
    [',', T.punct],
  ],
  [
    [`  'rewrite'`, T.fn],
    ['  => [', T.punct],
    [`'slug'`, T.fn],
    [' => ', T.punct],
    [`'work'`, T.str],
    ['],', T.punct],
  ],
  [[']);', T.punct]],
  [],
  [['// v6.7+ engine — hardened, SEO-ready, editor-friendly', T.comment]],
]

export default function Hero() {
  return (
    <div className="relative isolate bg-[#09090B] text-white">
      {/* Background Ambient Glow & Blueprint Grid */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 h-[500px] w-[800px] rounded-full bg-purple-600/[0.08] blur-[140px]" />
        <div className="fc-grid-pattern absolute inset-0 opacity-15" />

        {/* Ambient WordPress Code Terminal (types itself out, loops) */}
        <div className="hidden md:block absolute -right-24 top-1/4 h-[380px] w-[360px] lg:h-[420px] lg:w-[440px] opacity-40 lg:opacity-60 pointer-events-none select-none [mask-image:radial-gradient(ellipse_70%_65%_at_45%_50%,#000_35%,transparent_100%)]">
          <CodeTypingBg lines={WP_LINES} />
        </div>
      </div>

      {/* HERO SECTION */}
      <section className="relative overflow-hidden pt-28 pb-16 md:pt-32 md:pb-24 border-b border-white/[0.08]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
          {/* Editorial Breadcrumb Navigation (Single-line, non-breaking with smooth horizontal scroll on narrow mobile) */}
          <nav
            aria-label="Breadcrumb"
            className="mb-8 flex items-center gap-2 overflow-x-auto whitespace-nowrap scrollbar-none py-1 font-mono text-[11px] sm:text-xs text-zinc-400"
          >
            <Link href="/" className="shrink-0 hover:text-white transition-colors duration-200">
              Home
            </Link>
            <span className="shrink-0 text-zinc-600">/</span>
            <Link href="/services" className="shrink-0 hover:text-white transition-colors duration-200">
              Services
            </Link>
            <span className="shrink-0 text-zinc-600">/</span>
            <Link href="/services/website-design-development" className="shrink-0 hover:text-white transition-colors duration-200">
              <span className="sm:hidden">Web Design &amp; Dev</span>
              <span className="hidden sm:inline">Website Design &amp; Development</span>
            </Link>
            <span className="shrink-0 text-zinc-600">/</span>
            <span className="shrink-0 text-zinc-200">WordPress</span>
          </nav>

          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-center">
            {/* Left Column: Heading & Content (7 cols on desktop) */}
            <div className="lg:col-span-6 xl:col-span-6 space-y-6">
              {/* Eyebrow Badge */}
              {/* Display Heading H1 */}
              <h1 className="font-heading text-4xl sm:text-6xl lg:text-6xl xl:text-7xl font-medium leading-[0.94] tracking-tight text-white break-normal hyphens-none">
                Professional WordPress Development Service in{' '}
                <span className="italic text-frame-accent">Bangladesh</span>
              </h1>

              {/* Lead Paragraph */}
              <div className="max-w-3xl space-y-4 text-base sm:text-lg md:text-xl leading-relaxed text-zinc-300">
                <p>
                  Build a WordPress website that gives your business control without sacrificing speed, security, or flexibility. Frame Cipher combines custom WordPress development, SEO-ready architecture, performance optimization, and content management through one in-house team.
                </p>
                <p>
                  From business websites and WooCommerce stores to custom WordPress functionality, we build around what your website needs to do&mdash;not around a pre-built theme.
                </p>
              </div>

              {/* Symmetrical 52px Button Pair */}
              <div className="pt-4 flex flex-wrap items-center gap-4">
                <PosterButton href="/contact" variant="accent">
                  Start Your WordPress Project
                </PosterButton>
                <PosterButton href="#pricing" variant="outline">
                  View Pricing &amp; Plans
                </PosterButton>
              </div>

              {/* Meta Proof Note */}
              <div className="pt-2 flex flex-wrap items-center gap-3 font-mono text-xs text-zinc-500">
                <span className="h-1 w-1 rounded-full bg-frame-accent" />
                <span>Custom Gutenberg &amp; ACF Pro</span>
                <span className="text-zinc-700">|</span>
                <span>WooCommerce Integration</span>
                <span className="text-zinc-700">|</span>
                <span>Zero Theme Bloat</span>
              </div>
            </div>

            {/* Right Column: 3D Ambient Visual (Strict 5 cols: Always on the Side on Desktop) */}
            <div className="flex justify-center lg:col-span-6 xl:col-span-6 w-full mt-6 lg:mt-0">
              <div className="w-full max-w-full sm:max-w-[540px]">
                <Ambient3DCanvas mode="modular-grid" className="w-full" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* VISUAL DASHBOARD PANEL */}
      <section className="border-b border-white/[0.08] bg-[#09090B] py-12 md:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
          <div className="relative overflow-hidden rounded-xl border border-white/[0.08] bg-[#121214] p-6 md:p-8 font-mono text-xs">
            {/* Header Status Bar */}
            {/* 4 Metric Cards */}
            <div className="grid grid-cols-1 divide-y divide-white/[0.08] sm:grid-cols-2 sm:divide-y-0 sm:divide-x lg:grid-cols-4 overflow-hidden rounded-xl border border-white/[0.08] bg-[#09090B]">
              <div className="p-5 md:p-6 transition-colors duration-200 hover:bg-white/[0.02]">
                <p className="text-[10px] uppercase tracking-widest text-zinc-500">Theme Architecture</p>
                <p className="mt-1 font-heading text-lg font-medium text-white">Clean Gutenberg</p>
                <p className="mt-1 text-[11px] text-emerald-400 font-medium">Zero Theme Bloat</p>
              </div>
              <div className="p-5 md:p-6 transition-colors duration-200 hover:bg-white/[0.02]">
                <p className="text-[10px] uppercase tracking-widest text-zinc-500">Time to First Byte</p>
                <p className="mt-1 font-heading text-lg font-medium text-white">&lt; 180ms TTFB</p>
                <p className="mt-1 text-[11px] text-emerald-400 font-medium">Server-Level Page Cache</p>
              </div>
              <div className="p-5 md:p-6 transition-colors duration-200 hover:bg-white/[0.02]">
                <p className="text-[10px] uppercase tracking-widest text-zinc-500">Data Model</p>
                <p className="mt-1 font-heading text-lg font-medium text-white">ACF Pro &amp; CPT</p>
                <p className="mt-1 text-[11px] text-emerald-400 font-medium">Structured Schemas</p>
              </div>
              <div className="p-5 md:p-6 transition-colors duration-200 hover:bg-white/[0.02]">
                <p className="text-[10px] uppercase tracking-widest text-zinc-500">Security Baseline</p>
                <p className="mt-1 font-heading text-lg font-medium text-white">Hardened &amp; Isolated</p>
                <p className="mt-1 text-[11px] text-emerald-400 font-medium">WAF + 2FA + SSL</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ARCHITECTURE / CONTROL PIPELINE SECTION */}
      <section className="border-b border-white/[0.08] bg-[#09090B] py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
          {/* Left-Aligned Header Block */}
          <div className="mb-14 max-w-3xl space-y-4">
            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium leading-[0.96] tracking-tight text-white">
              WordPress Development Built Around{' '}
              <span className="italic text-frame-accent">Your Business Needs.</span>
            </h2>

            <div className="space-y-4 text-base sm:text-lg leading-relaxed text-zinc-300">
              <p>
                WordPress is flexible enough to power a simple business website, a large content platform, a WooCommerce store, or a custom business system. The right development approach depends on what your website needs to do, not simply on the fact that it runs on WordPress.
              </p>
              <p>
                We start by understanding your content, audience, workflows, functionality, and long-term goals. From theme architecture and plugin selection to performance, security, SEO, and editorial control, each part of the build is planned around the actual purpose of your website.
              </p>
            </div>
          </div>

          {/* APPROACH FLOW PIPELINE */}
          <div className="rounded-xl border border-white/[0.08] bg-[#121214] p-6 md:p-8 text-center">
            <p className="font-mono text-[11px] uppercase tracking-widest text-frame-accent mb-6">
              Our Approach Connects
            </p>
            <div className="flex flex-wrap items-center justify-center gap-2 md:gap-3 text-xs md:text-sm font-mono text-white">
              <span className="rounded-md border border-white/[0.08] bg-[#09090B] px-3.5 py-2">Business Goals</span>
              <span className="text-frame-accent font-bold">&rarr;</span>
              <span className="rounded-md border border-white/[0.08] bg-[#09090B] px-3.5 py-2">Content Structure</span>
              <span className="text-frame-accent font-bold">&rarr;</span>
              <span className="rounded-md border border-white/[0.08] bg-[#09090B] px-3.5 py-2">WordPress Architecture</span>
              <span className="text-frame-accent font-bold">&rarr;</span>
              <span className="rounded-md border border-white/[0.08] bg-[#09090B] px-3.5 py-2">Functionality</span>
              <span className="text-frame-accent font-bold">&rarr;</span>
              <span className="rounded-md border border-white/[0.08] bg-[#09090B] px-3.5 py-2">SEO &amp; Performance</span>
              <span className="text-frame-accent font-bold">&rarr;</span>
              <span className="rounded-md border border-frame-accent/30 bg-frame-accent/10 px-3.5 py-2 text-frame-accent font-medium">Editorial Control</span>
            </div>
            <p className="mt-6 text-sm md:text-base text-zinc-300 max-w-3xl mx-auto">
              The result is a WordPress website that your team can manage today and continue developing as your business grows.
            </p>
          </div>

          {/* 3-Column Architectural Band */}
          <div className="mt-12 grid gap-6 sm:grid-cols-3 text-left">
            <div className="rounded-xl border border-white/[0.08] bg-[#121214] p-6 transition-colors duration-200 hover:border-white/[0.14]">
              <span className="font-mono text-[11px] uppercase tracking-widest text-frame-accent">
                Who We Build For
              </span>
              <p className="mt-3 text-sm leading-relaxed text-zinc-300">
                Business websites, content publishers, WooCommerce sellers, and companies that want a site their team can manage in-house.
              </p>
            </div>
            <div className="rounded-xl border border-white/[0.08] bg-[#121214] p-6 transition-colors duration-200 hover:border-white/[0.14]">
              <span className="font-mono text-[11px] uppercase tracking-widest text-frame-accent">
                What We Build
              </span>
              <p className="mt-3 text-sm leading-relaxed text-zinc-300">
                Custom WordPress themes, content platforms, WooCommerce stores, and custom functionality built around your workflows and goals.
              </p>
            </div>
            <div className="rounded-xl border border-white/[0.08] bg-[#121214] p-6 transition-colors duration-200 hover:border-white/[0.14]">
              <span className="font-mono text-[11px] uppercase tracking-widest text-frame-accent">
                How We Deliver
              </span>
              <p className="mt-3 text-sm leading-relaxed text-zinc-300">
                Theme architecture, plugin selection, performance, security, and SEO through one in-house team with full editorial handover.
              </p>
            </div>
          </div>

          {/* Honest Assessment Callout */}
          <div className="mx-auto mt-10 flex max-w-4xl flex-col items-center justify-between gap-6 rounded-xl border border-white/[0.08] bg-[#121214] p-6 sm:flex-row sm:p-8">
            <p className="text-sm sm:text-base font-normal leading-relaxed text-zinc-300">
              Not sure whether WordPress or a different platform fits your project? We&apos;ll tell you honestly which one makes sense.
            </p>
            <PosterButton href="/contact" variant="outline" className="shrink-0">
              Get an Honest Assessment
            </PosterButton>
          </div>
        </div>
      </section>
    </div>
  )
}
