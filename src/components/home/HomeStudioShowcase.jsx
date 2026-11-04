import Image from 'next/image'
import Link from 'next/link'
import PosterButton from './PosterButton'
import SectionButton from './SectionButton'

const studioSpaces = [
  {
    studio: 'Studio 01',
    title: 'Creative Interview Stage',
    description: 'Ambient RGB lighting, designer set staging, and multi-angle camera setups for commercial shoots and high-impact discussions.',
    image: '/studio/studio-01-set.jpg',
    alt: 'Frame Cipher Studio 01 creative lighting and interview stage in Dhaka',
  },
  {
    studio: 'Studio 01',
    title: 'Camera Setup & Monitor POV',
    description: 'Live field monitor framing, studio tripod rigs, and direct audio capture for seamless creator sessions.',
    image: '/studio/studio-01-camera.jpg',
    alt: 'Frame Cipher Studio 01 camera on tripod facing interview stage',
  },
  {
    studio: 'Studio 02',
    title: 'Live Recording Session',
    description: 'Active client recording session with live camera feedback, executive desk staging, and directional microphone capture.',
    image: '/studio/studio-02-recording.jpg',
    alt: 'Frame Cipher Studio 02 live recording session on camera monitor',
  },
  {
    studio: 'Studio 02',
    title: 'Acoustic Podcast Desk',
    description: 'Acoustically isolated setup with studio softbox lighting, boom arm microphone, and clean background framing.',
    image: '/studio/studio-02-podcast.jpg',
    alt: 'Frame Cipher Studio 02 acoustic podcast recording desk with softbox',
  },
  {
    studio: 'Studio 02',
    title: 'Multi-Camera Soundstage',
    description: 'Wide soundstage layout with acoustic drapery, overhead lighting, and multi-person podcast capability.',
    image: '/studio/studio-02-wide.jpg',
    alt: 'Frame Cipher Studio 02 wide soundstage setup with acoustic curtains',
  },
]

export default function HomeStudioShowcase() {
  return (
    <section className="relative isolate border-b border-white/[0.08] bg-[#09090B] px-4 py-16 text-white sm:px-6 md:px-8 md:py-24 lg:py-28">
      <div className="mx-auto max-w-7xl">
        {/* Section Header: Clean Heading without Fake Taglines */}
        <div className="mb-12 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-3xl">
            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium leading-[0.96] tracking-tight text-white">
              Two in-house production studios in{' '}
              <span className="italic text-frame-accent">
                Dhaka.
              </span>
            </h2>
            <p className="mt-5 text-base font-normal leading-relaxed text-zinc-300 md:text-lg">
              Two dedicated physical studios at Matikata ECB Chattar equipped for multi-camera video podcasts, commercial brand shoots, and creator content.
            </p>
          </div>
          <div className="shrink-0 flex items-center gap-3">
            <SectionButton href="/studio">Explore studio packages</SectionButton>
          </div>
        </div>

        {/* Pure Photographic Showcase Grid (No Dashboards, No Clutter) */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {studioSpaces.map((item, index) => (
            <article
              key={`${item.title}-${index}`}
              className={`group relative flex flex-col justify-between overflow-hidden rounded-xl border border-white/[0.08] bg-[#121214] transition-colors duration-200 hover:border-white/[0.18] ${
                index === 0 ? 'sm:col-span-2 lg:col-span-2' : ''
              }`}
            >
              {/* Pure Photo Aspect Frame */}
              <div
                className={`relative w-full overflow-hidden bg-zinc-950 border-b border-white/[0.08] ${
                  index === 0 ? 'aspect-[16/9]' : 'aspect-[16/10]'
                }`}
              >
                <img
                  src={item.image}
                  alt={item.alt}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              </div>

              {/* Clean Concise Caption */}
              <div className="p-6">
                <span className="text-[11px] font-medium text-frame-accent">
                  {item.studio}
                </span>
                <h3 className="mt-1 font-heading text-xl font-medium text-white transition-colors duration-200 group-hover:text-frame-accent sm:text-2xl">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm font-normal leading-relaxed text-zinc-400">
                  {item.description}
                </p>
              </div>
            </article>
          ))}
        </div>

        {/* Clean Footer Bar */}
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-between gap-6 border-t border-white/[0.08] pt-8">
          <p className="font-mono text-xs text-zinc-400 uppercase tracking-wider">
            6th Floor, Eurasia Building, Matikata ECB Chattar, Dhaka 1206
          </p>
          <div className="flex items-center gap-4">
            <PosterButton href="/contact">Book Studio Session</PosterButton>
          </div>
        </div>
      </div>
    </section>
  )
}

