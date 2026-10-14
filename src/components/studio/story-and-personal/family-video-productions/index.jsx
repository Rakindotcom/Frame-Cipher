import StudioServiceLayout from '../../common/StudioServiceLayout'

export default function FamilyVideoProductionsService({ service }) {
  const customData = {
    h1: 'Family Video Production in Dhaka',
    lead: 'Some moments are worth keeping: a milestone birthday, a family story, a celebration, a tribute. FrameCipher Studio can produce keepsake videos for families, from planning and recording to editing. We preserve elders’ voices, historic memories, and family heritage in heirloom videos.',
    whatIncluded: [
      'Gentle, comfortable interview sessions in our quiet studio or at your home',
      'High-resolution digitizing and color restoration of vintage family photographs',
      'Integration of existing home video clips and audio recordings',
      'Editing with licensed music, custom titles, and family tree graphics',
      'Master video delivery via private cloud link and custom presentation archive',
      'Uncut archive of all recorded conversations for family posterity'
    ],
    serviceTypes: [
      { title: 'Generational Legacy Films', desc: 'Preserving grandparents’ wisdom, life stories, and memories.' },
      { title: 'Golden Anniversary & Milestone Films', desc: 'Celebrating landmark birthdays and wedding anniversaries.' },
      { title: 'Family Story Documentaries', desc: 'Weaving old photographs and fresh reflections into heirloom video.' },
      { title: 'Tribute & Memorial Videos', desc: 'Respectfully honoring beloved family members.' }
    ],
    whyMatters: 'Elders hold stories that risk being forgotten. In our comfortable, quiet studio or in the comfort of your living room, we conduct respectful, unhurried interviews that allow memories to be recounted naturally.',
    howRuns: [
      'Tell us the occasion, who will participate, and gather old photos or clips.',
      'Record interviews in our sound-isolated studio or at your family residence.',
      'Digitize and restore provided photographs and archival materials.',
      'Edit narrative with music, titles, and emotional pacing.',
      'Deliver final family keepsake film and raw interview archives.'
    ],
    costFactors: [
      'Number of family members interviewed',
      'Volume of archival photographs and video tapes requiring restoration',
      'Studio filming session vs on-location home shoot'
    ],
    linksOut: [
      { label: 'Wedding Videography', href: '/studio/wedding-videography/' },
      { label: 'Video Editing Services', href: '/studio/video-editing/' },
      { label: 'Event Video Production', href: '/studio/event-video-production/' },
      { label: 'Studio Space Rental', href: '/studio/rental/' }
    ]
  }

  return <StudioServiceLayout service={service} {...customData} />
}
