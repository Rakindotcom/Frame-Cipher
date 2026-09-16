import { PageHero, TypeMarquee } from '../Kinetic'

export default function TermsHero() {
  return (
    <>
      <PageHero eyebrow="Legal" meta="Last updated: January 29, 2026" number="TS" title="Terms of service">
        The rules for using the Frame Cipher website, submitting project inquiries, and engaging with our services.
      </PageHero>

      <TypeMarquee items={['Agreement', 'Services', 'Use', 'Rights', 'Liability', 'Contact']} accent slow />
    </>
  )
}
