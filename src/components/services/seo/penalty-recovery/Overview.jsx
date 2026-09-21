import { SectionIntro } from '../../../Kinetic'

export default function Overview() {
  return (
    <section className="border-t-2 border-frame-border bg-frame-bg px-4 py-16 md:px-8 md:py-24">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro eyebrow="Diagnosis first" title="Diagnose the Cause Before You Try to Recover">
          The wrong recovery strategy can waste time and make a difficult SEO situation harder to
          understand.
        </SectionIntro>

        <div className="space-y-4 text-base font-medium leading-relaxed text-frame-muted-fg md:text-lg">
          <p>
            We first determine whether your site has a manual action, a Google update-related
            ranking decline, a technical or migration problem, a security issue, or another cause
            entirely. Google&apos;s Search Console provides separate reports for Manual Actions and
            Security Issues, while broader traffic declines can have many possible causes.
          </p>
        </div>

        <div className="mt-10 space-y-4 border-l-2 border-frame-accent bg-frame-muted/10 p-7 md:p-8">
          <p className="text-base md:text-lg font-medium leading-relaxed text-frame-fg">
            Once the cause is clear, we focus on the specific issues that need correction instead of
            applying a generic &ldquo;penalty recovery&rdquo; checklist.
          </p>
        </div>
      </div>
    </section>
  )
}