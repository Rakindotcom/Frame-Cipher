import { PageHero, PosterButton, TypeMarquee } from '../Kinetic'

export default function ServiceDetailHero({ service }) {
  return (
    <>
      <PageHero
        eyebrow={service.title}
        meta={`${service.process?.length || 0} step workflow / concrete deliverables`}
        number="01"
        title={service.headline}
        actions={
          <>
            <PosterButton href="/contact">{service.cta}</PosterButton>
            <PosterButton href="/projects" variant="outline">
              See our work
            </PosterButton>
          </>
        }
      >
        {service.subheadline}
      </PageHero>

      {service.process?.length > 0 && <TypeMarquee items={service.process} accent />}
    </>
  )
}
