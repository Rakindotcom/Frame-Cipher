import { CTASection } from '../../../Kinetic'

export default function CTA({ service }) {
  const primaryCta = service?.primaryCta || 'Get Your Off-Page SEO Consultation'

  return (
    <CTASection
      eyebrow="Next move"
      title="Start Building Real Authority"
      primaryText={`${primaryCta} \u2192`}
      secondaryText="Talk to the Framecipher SEO Team \u2192"
    >
      Your backlink strategy should support the business, not create another list of links that
      nobody can explain. Framecipher combines backlink research, competitor analysis, manual
      outreach, content development, digital PR, link reclamation, and transparent monitoring
      into one in-house program.
    </CTASection>
  )
}