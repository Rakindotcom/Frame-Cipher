import { SectionIntro } from '../../../Kinetic'

export default function Timeline({ service }) {
  const text = service?.timeline || ''
  const paragraphs = text.split(/\n+/).map((s) => s.trim()).filter(Boolean)

  if (!paragraphs.length) return null

  const drivers = text
    .split(/(?<=[.!?])\s+|\n+/)
    .map((s) => s.replace(/^\s*[-*]\s+/, '').trim())
    .filter((s) => s && /(week|day|month)/i.test(s))

  return (
    <section className="border-t border-white/[0.08] bg-[#09090B] px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-7xl">
        <SectionIntro eyebrow="Realistic expectations" title="How Long Does This Take?">
          Timelines depend on scope, readiness, and review speed, so we set expectations rather than
          promising a fixed schedule.
        </SectionIntro>

        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-start">
          <div className="space-y-4 text-base font-medium leading-relaxed text-[#A1A1AA] md:text-lg">
            {paragraphs.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>

          <div className="rounded-2xl border border-white/[0.08] bg-[#121214] p-7 md:p-8">
            <span className="text-xs font-black uppercase tracking-[0.24em] text-[#A855F7]">
              Typical timings
            </span>
            <h3 className="mt-3 font-heading text-xl font-bold tracking-tight text-[#FAFAFA]">
              What this looks like in practice
            </h3>
            <ul className="mt-6 space-y-2.5">
              {drivers.map((factor, index) => (
                <li
                  key={index}
                  className="flex items-start gap-3 border-b border-white/[0.06] pb-2.5 text-sm font-semibold text-[#FAFAFA]"
                >
                  <span className="font-mono text-xs font-black text-[#A855F7]">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <span>{factor}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}