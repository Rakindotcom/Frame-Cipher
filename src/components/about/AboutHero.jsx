import { PageHero, PosterButton, TypeMarquee } from '../Kinetic'

export default function AboutHero() {
  return (
    <>
      <PageHero
        eyebrow="About Frame Cipher"
        meta="Built in Dhaka / made for moving brands"
        number="01"
        title="One team for the whole growth system"
        actions={
          <>
            <PosterButton href="/contact">Book a strategy call</PosterButton>
            <PosterButton href="/services" variant="outline">
              Explore services
            </PosterButton>
          </>
        }
      >
        Frame Cipher was built for businesses that do not want scattered execution. We combine strategic
        thinking, creative production, marketing, and technology so brands can move faster from idea to launch.
      </PageHero>

      <TypeMarquee items={['Strategy', 'Creative', 'Media', 'Software', 'Performance']} accent />
    </>
  )
}
