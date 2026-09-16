import { PageHero, TypeMarquee } from '../Kinetic'

export default function PrivacyHero() {
  return (
    <>
      <PageHero eyebrow="Legal" meta="Last updated: January 29, 2026" number="PP" title="Privacy policy">
        Frame Cipher explains what we collect, why we collect it, and how contact and analytics data are handled.
      </PageHero>

      <TypeMarquee items={['Privacy', 'Consent', 'Security', 'Retention', 'Contact']} slow />
    </>
  )
}
