import { SectionIntro } from '../../../Kinetic'

export default function Overview() {
  return (
    <section className="border-t-2 border-frame-border bg-frame-bg px-4 py-16 md:px-8 md:py-24">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro eyebrow="Before you apply" title="Prepare Your Website for a Successful AdSense Review">
          AdSense approval is not about finding a secret article count or using a shortcut. Google
          expects sites to provide useful, original content, offer a good user experience, comply
          with its policies, and meet its eligibility requirements.
        </SectionIntro>

        <div className="space-y-4 text-base font-medium leading-relaxed text-frame-muted-fg md:text-lg">
          <p>
            Our job is to identify what is holding your site back, fix the issues we can address,
            and give you an honest assessment of whether the site is ready to submit.
          </p>
        </div>

        <div className="mt-10 space-y-4 border-l-2 border-frame-accent bg-frame-muted/10 p-7 md:p-8">
          <p className="text-base md:text-lg font-medium leading-relaxed text-frame-fg">
            You get a site-specific preparation process instead of a generic checklist copied from
            outdated AdSense advice.
          </p>
        </div>
      </div>
    </section>
  )
}