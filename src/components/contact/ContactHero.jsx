import { contact } from '../../data/agency'
import { PageHero, PosterButton, TypeMarquee } from '../Kinetic'

export default function ContactHero() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        meta={contact.responseTime}
        number="GO"
        title="Bring us the brief"
        actions={
          <>
            <PosterButton href={contact.whatsapp}>Talk on WhatsApp</PosterButton>
            <PosterButton href={`mailto:${contact.email}`} variant="outline">
              Email the team
            </PosterButton>
          </>
        }
      >
        Whether you need a campaign, content production, a website, software, or a complete 360 growth
        system, send us the brief and we will get back with the best next step.
      </PageHero>

      <TypeMarquee items={['Name the goal', 'Send the mess', 'Pick the system', 'Launch the next move']} accent />
    </>
  )
}
