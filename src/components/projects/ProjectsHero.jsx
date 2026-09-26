import Link from 'next/link'
import { PageHero } from '../Kinetic'

const inlineLink = "text-frame-fg underline decoration-frame-accent/40 hover:decoration-frame-accent hover:text-frame-accent transition-colors"

export default function ProjectsHero() {
  return (
    <PageHero
      eyebrow="Work"
      meta="Selected creative archive"
      number="06"
      title="Creative work across formats"
    >
      A comprehensive showcase of Frame Cipher work across{' '}
      <Link href="/services/paid-advertising" className={inlineLink}>paid advertising</Link>,{' '}
      <Link href="/services/seo" className={inlineLink}>SEO growth</Link>,{' '}
      <Link href="/services/website-design-development" className={inlineLink}>websites</Link>,{' '}
      <Link href="/services/content-creation/commercial-video" className={inlineLink}>video productions</Link>, and{' '}
      <Link href="/services/content-creation/branding" className={inlineLink}>brand visual systems</Link>.
    </PageHero>
  )
}
