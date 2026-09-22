import { PageHero, PosterButton, TypeMarquee } from '../Kinetic'

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
        From websites and apps to search, paid media, social, writing, and production, every service
        is connected to one accountable growth system.
      </PageHero>

      <TypeMarquee items={pillarNames} slow />
    </>
  )
}
