const stats = [
  { value: '360', label: 'growth system' },
  { value: '12+', label: 'service engines' },
  { value: '01', label: 'integrated team' },
  { value: '24/7', label: 'always on' },
  { value: '5', label: 'core pillars' },
  { value: '10+', label: 'brands served' },
  { value: '6', label: 'step process' },
  { value: '100%', label: 'in-house' },
]

const duplicatedStats = [...stats, ...stats]

export default function HomeMarqueeStats() {
  return (
    <section className="kinetic-marquee border-y-2 border-frame-border bg-frame-accent py-5 text-frame-accent-fg">
      <p className="sr-only">Frame Cipher combines one team, twelve service engines, and 360 growth systems.</p>
      <div className="kinetic-marquee-track" aria-hidden="true">
        {duplicatedStats.map((item, index) => (
          <div key={`${item.label}-${index}`} className="flex shrink-0 items-center">
            <div className="flex shrink-0 flex-col px-10">
              <span className="font-heading text-[clamp(3rem,8vw,7rem)] font-bold uppercase leading-none tracking-tighter">
                {item.value}
              </span>
              <span className="mt-1 whitespace-nowrap text-xs font-black uppercase tracking-[0.25em] opacity-70">
                {item.label}
              </span>
            </div>
            <span className="shrink-0 text-lg opacity-30">◆</span>
          </div>
        ))}
      </div>
    </section>
  )
}
