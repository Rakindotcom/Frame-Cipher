import { SectionIntro, PosterButton } from '../../Kinetic'

const whyMattersPoints = [
  {
    num: '01',
    title: 'Build a Consistent Brand Experience',
    desc: 'When your website, social media, advertising, product photography, and videos follow the same visual direction, the brand becomes instantly recognizable.'
  },
  {
    num: '02',
    title: 'Remove Production Bottlenecks',
    desc: 'A content plan is useless if production cannot keep up. A defined creative workflow gives your team a predictable path from idea to finished asset.'
  },
  {
    num: '03',
    title: 'Reduce Fragmented Creative Work',
    desc: 'Working with separate freelancers for photography, video, graphics, and motion creates conflicting styles, repeated briefing, and exhausting coordination. One team eliminates those handoffs.'
  },
  {
    num: '04',
    title: 'Create More Value From Every Shoot',
    desc: 'A strategically planned production captures supporting b-roll, product close-ups, behind-the-scenes visuals, and stills, producing multiple assets instead of one isolated piece.'
  },
  {
    num: '05',
    title: 'Produce Content for the Right Platform',
    desc: 'A YouTube video, Instagram Reel, website banner, and paid ad require distinct pacing, composition, and framing. Production begins with the intended channel in mind.'
  }
]

const whyChoosePoints = [
  {
    title: 'One In-House Creative Team',
    desc: 'Video, photography, motion, branding, and graphic design are coordinated under one roof instead of being managed as disconnected freelance gigs.'
  },
  {
    title: 'Strategy Connected to Production',
    desc: 'When content strategy is part of the engagement, production serves a tangible business purpose instead of creating flashy assets with no commercial role.'
  },
  {
    title: 'Brand Consistency Across Formats',
    desc: 'Your visual identity remains unified across product photos, video ads, social carousels, and landing pages with locked-in color grading and typography.'
  },
  {
    title: 'Bangladesh Production, International Delivery',
    desc: 'Framecipher produces for businesses in Bangladesh and global clients across the US, UK, Australia, Canada, and UAE, accounting for regional nuance and global platform standards.'
  },
  {
    title: 'Review Before Final Delivery',
    desc: 'Structured reviews and agreed revision cycles ensure you inspect creative drafts at key milestones, maintaining total quality control before deployment.'
  },
  {
    title: 'Built Around Real Production Requirements',
    desc: 'We plan around real-world constraints: equipment grade, locations, talent, duration, aspect ratios, compression standards, and delivery deadlines.'
  }
]

export default function WhyChoose() {
  return (
    <section className="border-t-2 border-frame-border bg-frame-bg px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro
          eyebrow="Strategic Rationale"
          title="Why Consistent Content Production Matters"
          align="center"
        >
          Good content is not only about making individual assets look attractive. It needs to work together as part of a coherent brand system that drives commercial growth.
        </SectionIntro>

        <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
          {/* WHY IT MATTERS (LEFT) */}
          <div className="border-2 border-frame-border bg-frame-bg p-7 md:p-10">
            <span className="text-xs font-black uppercase tracking-[0.24em] text-frame-accent">
              Commercial Impact
            </span>
            <h3 className="mt-3 font-heading text-2xl md:text-3xl font-bold uppercase tracking-tight text-frame-fg">
              The Value of Coordinated Visuals
            </h3>
            <div className="mt-6 grid border-2 border-frame-border bg-frame-border gap-px">
              {whyMattersPoints.map((item) => (
                <div key={item.num} className="flex items-start gap-4 bg-frame-bg p-5">
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center border-2 border-frame-accent bg-frame-accent/10 font-heading text-xs font-bold text-frame-accent">
                    {item.num}
                  </span>
                  <div>
                    <h4 className="font-heading text-sm md:text-base font-bold uppercase tracking-tight text-frame-fg">
                      {item.title}
                    </h4>
                    <p className="mt-1 text-xs md:text-sm font-medium leading-relaxed text-frame-muted-fg">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap gap-4">
              <PosterButton href="/projects">See Our Portfolio &rarr;</PosterButton>
              <PosterButton href="/contact" variant="outline">Book a Strategy Session</PosterButton>
            </div>
          </div>

          {/* WHY CHOOSE FRAMECIPHER (RIGHT) */}
          <div className="space-y-6">
            <div>
              <span className="text-xs font-black uppercase tracking-[0.24em] text-frame-accent">
                The Frame Cipher Standard
              </span>
              <h3 className="mt-2 font-heading text-2xl md:text-3xl font-bold uppercase tracking-tight text-frame-fg">
                Why Choose Framecipher for Content Creation
              </h3>
            </div>

            <div className="grid border-2 border-frame-border bg-frame-border gap-px">
              {whyChoosePoints.map((item, index) => (
                <div key={index} className="bg-frame-bg p-6">
                  <div className="flex items-baseline gap-3">
                    <span className="font-heading text-sm font-black text-frame-accent">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <h4 className="font-heading text-base md:text-lg font-bold uppercase tracking-tight text-frame-fg">
                      {item.title}
                    </h4>
                  </div>
                  <p className="mt-2 text-xs md:text-sm font-medium leading-relaxed text-frame-muted-fg">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
