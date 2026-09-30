import Link from 'next/link'
import { PageHero, PosterButton, TypeMarquee } from '../Kinetic'

export default function AboutHero() {
  return (
    <>
      <PageHero
        eyebrow="About Frame Cipher · Global Vision"
        meta="Headquartered in Dhaka, Bangladesh / Operating Worldwide"
        number="01"
        title="A Multinational Tech & Growth Powerhouse Born in Bangladesh."
        actions={
          <>
            <PosterButton href="/contact">Schedule Global Consultation</PosterButton>
            <PosterButton href="/services" variant="outline">
              Explore 74+ Services
            </PosterButton>
          </>
        }
      >
        Frame Cipher was founded on an unapologetic ambition: to build a tier-one multinational technology, media, and growth engineering company anchored in Bangladesh. We combine full-stack software development, brand architecture, cinematic media production, and mathematical performance marketing under one unified operating system, serving high-growth startups and global enterprises across 20+ countries.
      </PageHero>

      <TypeMarquee
        items={[
          'Multinational Tech Architecture',
          'Dhaka Engineering Campus',
          '20+ Countries Served',
          'Full-Stack Software',
          'Proprietary Growth OS',
          'Global Enterprise Standards',
          'Algorithmic Paid Media',
          '100% In-House Operators',
        ]}
        accent
      />
    </>
  )
}
