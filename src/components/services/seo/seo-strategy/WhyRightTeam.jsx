import { SectionIntro } from '../../../Kinetic'

const chips = [
  'Custom Strategy, Not a Template',
  'Works With Your Existing Team',
  "Honest About What's Realistic",
]

export default function WhyRightTeam() {
  return (
    <section className="border-t-2 border-frame-border bg-frame-bg px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro eyebrow="Our position" title="Why We're the Right SEO Strategy Team">
          A generic SEO playbook applied to a specific business usually wastes months chasing
          priorities that don&apos;t actually fit that business&apos;s situation.
        </SectionIntro>

        <div className="space-y-4 text-base font-medium leading-relaxed text-frame-muted-fg md:text-lg">
          <p>
            We build strategy around your actual constraints, internal resources, technical
            limitations, and realistic timelines, instead of handing over a template that assumes
            you have a dedicated content team and an unlimited dev backlog.
          </p>
          <p>
            Consulting only works when the advice is something you can genuinely act on with what
            you actually have.
          </p>
        </div>

        <div className="mt-10 border-2 border-frame-accent bg-frame-accent/10 p-7 md:p-10">
          <blockquote className="font-heading text-lg md:text-2xl font-bold uppercase tracking-tight text-frame-fg">
            &ldquo;The best SEO strategy is the one your team can actually execute, not the most
            theoretically complete one. A roadmap that assumes resources you don&apos;t have
            isn&apos;t a strategy, it&apos;s a wish list.&rdquo;
          </blockquote>
        </div>

        <div className="mt-8 flex flex-wrap items-center gap-2">
          {chips.map((chip) => (
            <span
              key={chip}
              className="border-2 border-frame-border bg-frame-muted/30 px-3 py-1 text-xs font-black uppercase tracking-[0.2em] text-frame-accent"
            >
              {chip}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}