import { CTASection } from '../../../Kinetic'

export default function CTA({ service }) {
  const primaryCta = service?.primaryCta || 'Get Your Technical SEO Audit'

  return (
    <CTASection
      eyebrow="Next move"
      title="Start Your Technical SEO Audit"
      primaryText={`${primaryCta} \u2192`}
      secondaryText="Talk to the Framecipher SEO Team →"
    >
      Technical problems can remain hidden until they affect organic visibility, traffic, or
      website performance. Let Framecipher identify the technical issues that matter most, explain
      what should be fixed first, and help you build a stronger foundation for long-term search
      growth.
    </CTASection>
  )
}