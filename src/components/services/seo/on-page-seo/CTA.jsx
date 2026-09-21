import { CTASection } from '../../../Kinetic'

export default function CTA({ service }) {
  const primaryCta = service?.primaryCta || 'Get Your On-Page SEO Consultation'

  return (
    <CTASection
      eyebrow="Next move"
      title="Start Optimizing Your Pages"
      primaryText={`${primaryCta} \u2192`}
      secondaryText="Talk to the Framecipher SEO Team \u2192"
    >
      Your pages should do more than contain the right keywords. They should clearly answer the
      searcher&apos;s need, communicate the value of your business, connect naturally with the
      rest of your website, and give visitors a clear next step.
    </CTASection>
  )
}