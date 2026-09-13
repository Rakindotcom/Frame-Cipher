import { PageHero, PosterButton } from '../src/components/Kinetic'

export default function NotFound() {
  return (
    <main className="bg-frame-bg text-frame-fg">
      <PageHero
        eyebrow="404"
        meta="Page not found"
        number="404"
        title="This route is outside the frame"
        actions={
          <>
            <PosterButton href="/">Return home</PosterButton>
            <PosterButton href="/services" variant="outline">Explore services</PosterButton>
          </>
        }
      >
        The page may have moved, or the address may be incomplete. Use the links below to get back to a working route.
      </PageHero>
    </main>
  )
}
