'use client'

import { Package, Film, Smartphone, FileVideo, Music, Check } from 'lucide-react'
import { SectionIntro } from '../Kinetic'

function DeliverablesGrid({ deliverables }) {
  return (
    <div className="grid gap-px border-2 border-frame-border bg-frame-border md:grid-cols-2 lg:grid-cols-3">
      {deliverables.map((item, idx) => (
        <div key={idx} className="flex flex-col justify-between bg-frame-bg p-7 md:p-8">
          <div>
            <div className="mb-4 flex items-center justify-between">
              <span className="flex h-10 w-10 items-center justify-center border border-frame-border bg-frame-muted/40 text-frame-accent">
                <Package className="h-5 w-5" />
              </span>
              <span className="font-mono text-xs font-bold text-frame-muted-fg">ITEM {idx + 1 < 10 ? `0${idx + 1}` : idx + 1}</span>
            </div>
            <h3 className="font-heading text-lg font-bold uppercase tracking-tight text-frame-fg md:text-xl">
              {typeof item === 'string' ? item : item.title}
            </h3>
            {typeof item === 'object' && item.desc && (
              <p className="mt-2 text-sm font-medium leading-relaxed text-frame-muted-fg">{item.desc}</p>
            )}
          </div>
          <div className="mt-6 flex items-center gap-2 border-t border-frame-border/60 pt-4 text-xs font-bold uppercase tracking-wider text-frame-accent">
            <Check className="h-4 w-4" />
            <span>Production Standard</span>
          </div>
        </div>
      ))}
    </div>
  )
}

function DeliverablesMatrix() {
  const cells = [
    { icon: Film, title: 'YouTube & TV', meta: '16:9 Landscape (4K / 1080p)' },
    { icon: Smartphone, title: 'Reels, Shorts, TikTok', meta: '9:16 Vertical Safe Zones' },
    { icon: FileVideo, title: 'E-Commerce & Ads', meta: '1:1 Square & 4:5 Portrait' },
    { icon: Music, title: 'Streaming Audio', meta: '24-bit 48kHz WAV Stems' },
  ]
  return (
    <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-4">
      {cells.map((c, i) => {
        const Icon = c.icon
        return (
          <div key={i} className="border border-frame-border bg-frame-bg p-4 text-center">
            <Icon className="mx-auto mb-2 h-5 w-5 text-frame-accent" />
            <p className="text-xs font-bold uppercase text-frame-fg">{c.title}</p>
            <p className="mt-1 text-[10px] text-frame-muted-fg">{c.meta}</p>
          </div>
        )
      })}
    </div>
  )
}

export default function StudioSubDeliverables({ service }) {
  const deliverables = service.deliverables || [
    'Master high-bitrate 4K (3840x2160) video export in 16:9',
    'Platform-optimized vertical cutdowns (1080x1920) in 9:16',
    'Mastered uncompressed audio stems (24-bit 48kHz WAV)',
    'Synchronized multi-camera project files upon request',
    'Closed captions and subtitle files (.SRT format)',
  ]

  return (
    <section className="border-b-2 border-frame-border bg-frame-muted/10 px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro eyebrow="Final outputs" title="Confirmed deliverables & file formats." index="03">
          No ambiguous handoffs. Every deliverable is specified before production, color-calibrated, and exported per
          your target platforms.
        </SectionIntro>
        <DeliverablesGrid deliverables={deliverables} />
        <DeliverablesMatrix />
      </div>
    </section>
  )
}
