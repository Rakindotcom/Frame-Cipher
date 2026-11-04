import { SectionIntro, PosterButton } from '../../../Kinetic'

const MARKET_TOKENS = ['Bangladesh', 'Dhaka', 'UAE', 'US', 'UK', 'Australia', 'Canada']

export default function ServiceAreas({ service }) {
  const text = service?.serviceAreas || ''
  const paragraphs = text.split(/\n+/).map((s) => s.trim()).filter(Boolean)

  if (!paragraphs.length) return null

  const chips = [...new Set(MARKET_TOKENS.filter((token) => text.includes(token)))]

  return (
    <section className="border-t border-white/[0.08] bg-[#09090B] px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-7xl">
        <SectionIntro eyebrow="Where we work" title="Bangladesh & International Coverage">
          Framecipher is based in Dhaka and works with businesses targeting both Bangladeshi and
          international markets.
        </SectionIntro>

        <div className="grid gap-6 lg:grid-cols-2">
          {paragraphs.map((body, index) => (
            <div
              key={index}
              className="flex flex-col justify-between rounded-2xl border border-white/[0.08] bg-[#09090B] p-7 transition-colors hover:border-[#A855F7]/40 md:p-10"
            >
              <p className="text-sm md:text-base font-medium leading-relaxed text-[#A1A1AA] wide:text-lg">
                {body}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-8 border-l-2 border-[#A855F7]/40 bg-[#09090B] p-6 md:p-7">
          {chips.length > 0 && (
            <div className="flex flex-wrap items-center gap-2">
              {chips.map((chip) => (
                <span
                  key={chip}
                  className="rounded-2xl border border-white/[0.08] px-3 py-1 text-xs font-black uppercase tracking-[0.2em] text-[#A855F7]"
                >
                  {chip}
                </span>
              ))}
            </div>
          )}
          <div className="mt-5 lg:flex lg:items-center lg:justify-between lg:gap-8">
            <p className="max-w-3xl text-sm md:text-base font-medium leading-relaxed text-[#A1A1AA] wide:text-lg">
              Market targeting accounts for local search behavior rather than applying one
              market&apos;s assumptions everywhere.
            </p>
            <div className="mt-5 lg:mt-0 lg:shrink-0">
              <PosterButton href="/contact">Talk to Our Team &rarr;</PosterButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}