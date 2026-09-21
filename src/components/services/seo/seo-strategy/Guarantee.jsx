import { SectionIntro } from '../../../Kinetic'

export default function Guarantee() {
  return (
    <section className="border-t-2 border-frame-border bg-frame-bg px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro eyebrow="Clear expectations" title="Guarantee / Warranty">
          Every strategy document goes through a walkthrough session, so nothing gets handed over
          without the chance to ask questions and clarify how to actually execute it.
        </SectionIntro>

        <div className="max-w-4xl space-y-4 text-base font-medium leading-relaxed text-frame-muted-fg md:text-lg">
          <p>
            We don&apos;t guarantee a specific ranking outcome from strategy alone, since execution
            quality and market conditions both affect results beyond the roadmap itself. What we
            guarantee is a strategy genuinely built around your actual situation, resources,
            constraints, and goals, not a generic template with your business name inserted.
          </p>
        </div>
      </div>
    </section>
  )
}