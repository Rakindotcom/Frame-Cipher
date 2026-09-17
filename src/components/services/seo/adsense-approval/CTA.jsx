import { CTASection } from '../../../Kinetic'

export default function CTA({ service }) {
  const serviceTitle = "Google AdSense Approval"
  const primaryCta = service?.primaryCta || "Get a Free Quote"

  return (
    <CTASection
      eyebrow="Next move"
      title={`Ready to scale with ${serviceTitle}?`}
      primaryText={primaryCta}
      secondaryText="Talk to Our Team"
    >
      Connect with our in-house team to discuss your requirements, estimated timelines, and a transparent project estimate.
    </CTASection>
  )
}
