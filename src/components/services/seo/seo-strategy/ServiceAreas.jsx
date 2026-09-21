import { SectionIntro } from '../../../Kinetic'

const tokens = ['Bangladesh', 'Dhaka', 'USA', 'UK', 'Australia', 'Canada', 'UAE']

export default function ServiceAreas() {
  return (
    <section className="border-t-2 border-frame-border bg-frame-bg px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro eyebrow="Where we work" title="Service Areas">
          Framecipher is based in Dhaka and provides SEO strategy and consulting for businesses
          across Bangladesh and clients in the UAE, US, UK, Australia, and Canada, 20+ countries so
          far.
        </SectionIntro>

        <div className="max-w-4xl space-y-4 text-base font-medium leading-relaxed text-frame-muted-fg md:text-lg">
          <p>
            Team structures, market maturity, and competitive dynamics vary by region, and
            strategic recommendations account for that instead of applying one market&apos;s
            assumptions everywhere.
          </p>
          <p>
            For businesses in Bangladesh specifically, that often means factoring in access to
            local SEO talent and typical marketing team sizes when building a resource-realistic
            roadmap, rather than assuming the same internal capacity a larger international team
            might have.
          </p>
        </div>

        <div className="mt-8 flex flex-wrap items-center gap-2">
          {tokens.map((token) => (
            <span
              key={token}
              className="border-2 border-frame-border bg-frame-muted/30 px-3 py-1 text-xs font-black uppercase tracking-[0.2em] text-frame-accent"
            >
              {token}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}