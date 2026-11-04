import { cleanServiceText as cleanText } from '../../data/serviceContent'
import { renderContextualParagraph } from '../../lib/seo/contextualParagraphLinks'

const surface = 'rounded-xl border border-white/[0.08] bg-white/[0.035]'

function SectionHeading({ eyebrow, title, children }) {
  return (
    <div className="mb-10 max-w-3xl md:mb-14">

      <h2 className="font-heading text-3xl font-semibold leading-tight tracking-[-0.035em] text-white sm:text-4xl md:text-5xl">{title}</h2>
      {children && <p className="mt-5 text-base leading-7 text-zinc-400 md:text-lg">{children}</p>}
    </div>
  )
}

export default function ServiceExperienceBusinessCase({ impactCards, advantages }) {
  if (!impactCards?.length && !advantages?.length) return null

  return (
    <section className="border-y border-white/[0.08] bg-white/[0.02] px-5 py-20 sm:px-8 md:py-28">
      <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-2 lg:gap-20">
        {impactCards.length > 0 && (
          <div>
            <SectionHeading eyebrow="The business case" title="Why this matters" />
            <div className="space-y-5">
              {impactCards.map((reason, index) => (
                <article key={`${reason.text}-${index}`} className="border-l-2 border-violet-400/50 pl-5">
                  {reason.title && <h3 className="font-heading text-lg font-semibold text-white">{reason.title}</h3>}
                  <p className={`${reason.title ? 'mt-2' : ''} text-[15px] leading-7 text-zinc-400`}>
                    {renderContextualParagraph(reason.text, { maxLinks: 1, theme: 'violet' })}
                  </p>
                </article>
              ))}
            </div>
          </div>
        )}

        {advantages.length > 0 && (
          <div>
            <SectionHeading eyebrow="Why Frame Cipher" title="Built for accountable delivery" />
            <div className="space-y-4">
              {advantages.map((item, index) => {
                const longTitle = item.title?.length > 110
                return (
                  <article key={`${item.title}-${index}`} className={`${surface} rounded-2xl p-6`}>
                    <h3 className="font-heading text-lg font-semibold text-white">
                      {longTitle ? `Advantage ${String(index + 1).padStart(2, '0')}` : cleanText(item.title)}
                    </h3>
                    <p className="mt-3 text-[15px] leading-7 text-zinc-400">
                      {renderContextualParagraph(
                        longTitle ? `${cleanText(item.title)} ${cleanText(item.text)}` : cleanText(item.text),
                        { maxLinks: 1, theme: 'violet' }
                      )}
                    </p>
                  </article>
                )
              })}
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
