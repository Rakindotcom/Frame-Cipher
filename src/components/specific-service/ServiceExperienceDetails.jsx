import { cleanServiceText as cleanText } from '../../data/serviceContent'

const surface = 'border border-white/10 bg-white/[0.035]'

function getParagraphs(value = '') {
  return value
    .split(/\n\s*\n/)
    .map((paragraph) => cleanText(paragraph.replace(/^\*\s*/, '')))
    .filter(Boolean)
}

function TextPanel({ eyebrow, title, text }) {
  return (
    <article className={`${surface} rounded-3xl p-7 md:p-9`}>
      <p className="text-xs font-bold uppercase tracking-[0.2em] text-violet-300">{eyebrow}</p>
      <h3 className="mt-3 font-heading text-2xl font-semibold tracking-tight text-white">{title}</h3>
      <div className="mt-5 space-y-4 text-[15px] leading-7 text-zinc-400">
        {getParagraphs(text).map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>
    </article>
  )
}

function SectionHeading({ eyebrow, title, children }) {
  return (
    <div className="mb-10 max-w-3xl md:mb-14">
      <p className="mb-3 text-xs font-bold uppercase tracking-[0.22em] text-violet-300">{eyebrow}</p>
      <h2 className="font-heading text-3xl font-semibold leading-tight tracking-[-0.035em] text-white sm:text-4xl md:text-5xl">{title}</h2>
      {children && <p className="mt-5 text-base leading-7 text-zinc-400 md:text-lg">{children}</p>}
    </div>
  )
}

export default function ServiceExperienceDetails({ service }) {
  if (!service.serviceAreas && !service.timeline && !service.guarantee) return null

  return (
    <section className="px-5 py-20 sm:px-8 md:py-28">
      <div className="mx-auto max-w-7xl">
        <SectionHeading eyebrow="Delivery details" title="Local context, global standards" />
        <div className="grid gap-4 lg:grid-cols-2">
          {service.serviceAreas && (
            <TextPanel eyebrow="Coverage" title="Dhaka-based, worldwide delivery" text={service.serviceAreas} />
          )}
          <div className="grid gap-4">
            {service.timeline && (
              <TextPanel eyebrow="Schedule" title="Timeline & duration" text={service.timeline} />
            )}
            {service.guarantee && (
              <TextPanel eyebrow="Accountability" title="Review & approval" text={service.guarantee} />
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
