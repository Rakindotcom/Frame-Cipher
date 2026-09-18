import { PageHero, PosterButton, TypeMarquee } from '../Kinetic'

export default function ServicesHero({ totalServices, totalPillars, pillarNames }) {
  return (
    <>
      <PageHero
        eyebrow="Services"
        meta={`${totalServices} services / ${totalPillars} service areas / one operating system`}
        number={String(totalServices)}
        title="Every service your brand needs, connected under one roof"
        actions={
          <>
            <PosterButton href="/contact">Book a strategy call</PosterButton>
            <PosterButton href="/projects" variant="outline">
              See the work
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
