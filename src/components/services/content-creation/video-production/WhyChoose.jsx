
import { AutoLinks } from '../../../seo/AutoLinks'
import { SectionIntro, PosterButton } from '../../../Kinetic'

const advantages = [
  {
    title: 'One In-House Creative Team',
    desc: 'Your project stays connected across creative development, filming, editing, and delivery under one team, eliminating the communication breakdown common between outsourced vendors.'
  },
  {
    title: 'Planned Around the Final Edit',
    desc: 'We think about the final video before filming begins. This ensures we capture the exact coverage, angles, b-roll, and audio required for a seamless and impactful final cut.'
  },
  {
    title: 'Business-Focused Production',
    desc: 'We don\'t start with a camera and figure out the purpose later. Production is anchored in your audience, message, channel, and commercial objectives from day one.'
  },
  {
    title: 'Flexible Production Scope',
    desc: 'A simple corporate interview does not need the same setup as a brand film. We scale crew size, lighting gear, and cinema packages to your real project requirements.'
  },
  {
    title: 'Multi-Platform Deliverables',
    desc: 'We plan shoots so one production yields wide masters for your website, vertical cuts for social media, and condensed variations for performance ads.'
  },
  {
    title: 'Clear Production Communication',
    desc: 'You always know what is being produced, what is included, what happens next, and what feedback is required at every milestone.'
  },
  {
    title: 'Bangladesh-Based, Internationally Oriented',
    desc: 'We work with businesses in Dhaka and clients worldwide across the USA, UK, Australia, Canada, and UAE with broadcast-quality international standards.'
  }
]

export default function WhyChoose() {
  return (
    <section className="border-t border-white/[0.08] bg-[#09090B] px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-7xl">
        <SectionIntro
          eyebrow="The Framecipher Standard"
          title="Why Choose Framecipher for Video Production"
          align="center"
        >
          We bridge the gap between creative storytelling and real-world business objectives, producing visual assets that look stunning and perform commercially.
        </SectionIntro>

        <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
          {/* ADVANTAGES (LEFT) */}
          <div className="space-y-6">
            <div>
              <span className="text-xs font-black uppercase tracking-[0.24em] text-[#A855F7]">
                Core Strengths
              </span>
              <h3 className="mt-2 font-heading text-2xl md:text-3xl font-bold tracking-tight text-[#FAFAFA]">
                The Integrated Production Advantage
              </h3>
            </div>

            <div className="grid border border-white/[0.08] bg-frame-border gap-px">
              {advantages.map((item, index) => (
                <div key={index} className="bg-[#09090B] p-6">
                  <div className="flex items-baseline gap-3">
                    <span className="font-heading text-sm font-black text-[#A855F7]">
                      0{index + 1}
                    </span>
                    <h4 className="font-heading text-base md:text-lg font-bold tracking-tight text-[#FAFAFA]">
                      {item.title}
                    </h4>
                  </div>
                  <p className="mt-2 text-xs md:text-sm wide:text-lg font-medium leading-relaxed text-[#A1A1AA]">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* PRODUCTION VS EDITING (RIGHT) */}
          <div className="border border-white/[0.08] bg-[#09090B] p-7 md:p-10 sticky top-28">
            <span className="text-xs font-black uppercase tracking-[0.24em] text-[#A855F7]">
              Service Clarity
            </span>
            <h3 className="mt-2 font-heading text-2xl md:text-3xl font-bold tracking-tight text-[#FAFAFA]">
              Video Production vs. Video Editing
            </h3>
            <p className="mt-3 text-xs md:text-sm font-medium text-[#A1A1AA] leading-relaxed wide:text-lg"><AutoLinks currentPath="/services/content-creation/video-production" allowed={["/studio/video-editing"]}>
              Video production and video editing are distinct services that solve different client needs:
            </AutoLinks></p>

            <div className="mt-6 space-y-4">
              <div className="border border-white/[0.08] bg-[#121214] p-5">
                <span className="text-xs font-black uppercase tracking-wider text-[#A855F7]">
                  Complete Video Production (This Service)
                </span>
                <p className="mt-2 text-xs md:text-sm font-medium text-[#FAFAFA] leading-relaxed">
                  Covers the wider process from the very beginning: creative development, concepting, scriptwriting, pre-production planning, live filming with crew and gear, editing, color grading, sound design, and final exports.
                </p>
                <span className="mt-3 block text-[11px] font-bold uppercase tracking-wider text-[#A1A1AA]">
                  Best For: Brands needing end-to-end production from scratch
                </span>
              </div>

              <div className="border border-white/[0.08] bg-[#09090B] p-5">
                <span className="text-xs font-black uppercase tracking-wider text-[#FAFAFA]">
                  Dedicated Video Editing
                </span>
                <p className="mt-2 text-xs md:text-sm font-medium text-[#A1A1AA] leading-relaxed wide:text-lg">
                  Starts with footage you already have. Focuses on organizing, cutting, color grading, and finishing supplied recordings into polished final assets.
                </p>
                <span className="mt-3 block text-[11px] font-bold uppercase tracking-wider text-[#A1A1AA]">
                  Best For: Businesses that already have existing raw clips
                </span>
              </div>
            </div>

            <div className="mt-8 flex flex-col sm:flex-row gap-4 border-t border-white/[0.08] pt-6">
              <PosterButton href="/projects#video-work" variant="outline" className="w-full sm:w-auto text-xs">
                View Video Portfolio &rarr;
              </PosterButton>
              <PosterButton href="/contact" className="w-full sm:w-auto text-xs">
                Get a Free Consultation &rarr;
              </PosterButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
