import { SectionIntro, PosterButton } from '../../../Kinetic'

function buildPoints(points = []) {
  const intro = points[0] || ''
  const rest = points.slice(1)
  const pairs = []
  for (let i = 0; i < rest.length; i += 2) {
    pairs.push({ title: rest[i], text: rest[i + 1] || '' })
  }
  return { intro, pairs }
}

export default function Overview({ service }) {
  const quote = service?.quote
  const { intro, pairs } = buildPoints(service?.whyMatters)

  if (!pairs.length) return null

  return (
    <section className="border-t-2 border-frame-border bg-frame-bg px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro eyebrow="Why it matters" title="Why This Matters for Your Business">
          {intro || service?.metaDescription}
        </SectionIntro>

        <div className="grid gap-px border-2 border-frame-border bg-frame-border sm:grid-cols-2 lg:grid-cols-4">
          {pairs.map((point, index) => (
            <div key={index} className="flex flex-col justify-between bg-frame-bg p-7 md:p-8">
              <div>
                <span className="font-heading text-4xl font-bold leading-none tracking-tighter text-frame-muted">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <h3 className="mt-4 font-heading text-lg md:text-xl font-bold uppercase tracking-tight text-frame-fg">
                  {point.title}
                </h3>
                <p className="mt-4 text-sm font-medium leading-relaxed text-frame-muted-fg">
                  {point.text}
                </p>
              </div>
              <span aria-hidden="true" className="mt-6 block h-1 w-8 bg-frame-accent" />
            </div>
          ))}
        </div>

        {quote && (
          <div className="mt-10 border-l-2 border-frame-accent bg-frame-muted/10 p-7 md:p-8 lg:flex lg:items-center lg:justify-between lg:gap-8">
            <blockquote className="max-w-3xl font-heading text-lg md:text-xl font-bold uppercase tracking-tight text-frame-fg">
              &ldquo;{quote}&rdquo;
            </blockquote>
            <div className="mt-6 lg:mt-0 lg:shrink-0">
              <PosterButton href="/contact">Get Free Consultation &rarr;</PosterButton>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}