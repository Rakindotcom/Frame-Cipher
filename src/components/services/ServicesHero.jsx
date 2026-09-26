import Link from 'next/link'
import { PageHero, PosterButton, TypeMarquee } from '../Kinetic'

const inlineLink = "text-frame-fg underline decoration-frame-accent/40 hover:decoration-frame-accent hover:text-frame-accent transition-colors"

export default function ServicesHero({ totalServices, pillarNames }) {
  return (
    <>
      <PageHero
        eyebrow="Services"
        meta={`74+ services / 5 core capabilities / one operating system`}
        number={String(totalServices)}
        title="Marketing, technology & creative solutions built around your business."
        actions={
          <>
            <PosterButton href="/contact">Start a Project</PosterButton>
            <PosterButton href="/services#all-services" variant="outline">
              Explore Our Services
            </PosterButton>
          </>
        }
      >
        From <Link href="/services/website-design-development" className={inlineLink}>websites</Link> and{' '}
        <Link href="/services/app-development" className={inlineLink}>apps</Link> to{' '}
        <Link href="/services/seo" className={inlineLink}>search</Link>,{' '}
        <Link href="/services/paid-advertising" className={inlineLink}>paid media</Link>,{' '}
        <Link href="/services/social-media-management" className={inlineLink}>social</Link>,{' '}
        <Link href="/services/content-writing" className={inlineLink}>writing</Link>, and{' '}
        <Link href="/services/content-creation" className={inlineLink}>production</Link>, every service
        is connected to one accountable growth system.
      </PageHero>

      <TypeMarquee items={pillarNames} slow />
    </>
  )
}
