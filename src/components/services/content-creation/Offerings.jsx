import { SectionIntro, PosterButton } from '../../Kinetic'

export default function Offerings({ service }) {
  const offerings = service?.offerings || [
  {
    "title": "Content creation covers the actual production of visual assets a brand needs to exist anywhere online, video, photography, and design work, built to a consistent visual identity rather than each piece looking like it came from a different source. It typically includes concepting, production, editing or design execution, and delivery in the formats each platform actually requires, and it's built for businesses that want their visual content to look like it belongs to one coherent brand, not a patchwork of disconnected production jobs.",
    "description": "Video Production Full video production for ads, brand films, and longer-form content concepting, filming, and editing handled as one coordinated process, from initial script or shot list through color correction and final export, rather than separate stages handed between disconnected vendors. Includes pre-production planning, on-location or studio filming, sound design, and delivery in the specific formats and aspect ratios each intended platform actually requires. Short-Form Video (Reels/Shorts/TikTok) Vertical, fast-paced video built specifically for how short-form platforms distribute content, fast hooks in the first second, native-feeling editing, and pacing suited to how people actually watch and scroll, not a long-form video awkwardly cropped down to fit a 9:16 frame. Includes concepts built around trend and format awareness, filming or sourcing footage, editing with platform-native pacing, and captions or text overlay written for how these videos actually get discovered. YouTube Video Production Longer-form video built around retention and YouTube's own search function, since the platform rewards a genuinely different production approach than a 15-second vertical clip, thumbnail strategy, pacing that holds attention across minutes rather than seconds, and structure built for how YouTube surfaces content through both search and recommendations. Includes scripting or outline development, filming, editing, thumbnail design, and title/description optimization for on-platform discoverability. Motion Graphics & Animation Animated explainer content, kinetic typography, and motion design for ideas that are genuinely easier to show moving than to explain in static text or plain video, a product feature, a process, a data point that benefits from visual motion to actually land. Includes concept and storyboard development, 2D animation, motion typography for social and marketing content, and animated logo stings or brand intros where relevant. Graphic Design The visual design work supporting everything else a brand needs, presentations, one-pagers, digital ads, print materials, and marketing assets built to a consistent visual system rather than each piece designed in isolation. Includes template development for recurring materials, custom design for specific campaigns or launches, and design work that stays visually coherent with existing brand guidelines rather than introducing a new look with every new piece. Logo Design The single visual mark a brand gets recognized by, designed to hold up legibly across every size and context it'll actually be used in, a favicon, a business card, a billboard, a social media profile photo. Includes concept development and multiple initial directions, refinement based on feedback, and delivery in the full range of file formats and color variations (full color, single color, reversed) a business actually needs across real-world use cases. Branding The visual identity system underneath a logo, color palette, typography choices, imagery style, and usage guidelines, that keeps every other piece of content looking like it genuinely belongs to the same business, regardless of who produces it or when. Includes brand strategy discovery, visual identity development across color/type/imagery, and a documented brand guideline that your team or any future vendor can actually follow consistently. Product Photography Photography built around how a specific product category actually needs to be presented to sell, clean studio shots for ecommerce listings, lifestyle context shots showing real use, or detail shots highlighting texture and quality, chosen based on what that specific product needs, not a generic photo package applied regardless of category. Includes shot planning, styling and setup, photography, and retouching/editing delivered in the sizes and formats your platforms actually require. Social Media Graphics Templated and custom graphics built for how each platform's feed actually displays and crops content, a graphic designed without platform-specific dimensions in mind often gets awkwardly cropped or loses key text in a feed preview. Includes template systems for recurring content types (quotes, announcements, promotions), custom graphics for specific campaigns, and format variations sized correctly for each platform's actual display requirements.",
    "bullets": []
  },
  {
    "title": "Where This Fits Next to Social Media Management",
    "description": "Content creation and social media management sound like they overlap completely, and the actual distinction is worth being clear about upfront. Creation: Making the Actual Asset Content creation is the production work itself, filming, editing, shooting, designing, the physical or digital asset that ends up existing. Management: Planning, Posting, and Engaging Social media management, covered under our separate Social Media Management services, is the ongoing posting, scheduling, and community engagement built around assets, whether we produced them or you did. Why Most Businesses Need Both, Coordinated A well-managed posting schedule with weak, inconsistent visuals underperforms, and beautifully produced content that never gets posted consistently accomplishes nothing either, the two functions genuinely depend on each other rather than standing in for one another.",
    "bullets": []
  }
]
  const whyMatters = service?.whyMatters || [
  "Every piece of visually inconsistent or low-quality content published under a brand's name is quietly working against every other piece, a strong logo undercut by amateur product photography, or a polished website next to shaky, poorly lit video, sends a mixed signal about how seriously the business actually takes itself. The cost compounds the way most brand-perception issues do: no single piece looks disqualifying on its own, but the pattern across everything a visitor sees adds up to an impression, whether that impression was the intended one or not.",
  "A common misunderstanding treats content creation as a single, interchangeable skill. Hire someone who can \"do video\" or \"do design,\" and any format comes out fine. It doesn't work that way. A wedding videographer and a short-form Reels editor are solving genuinely different problems, and production built for one format rarely translates cleanly to another without real adjustment."
]
  const whyChooseUs = service?.whyChooseUs || [
  {
    "title": "Framecipher produces video, photography, and design under one in-house creative team, so a brand's visual identity carries consistently across a product photo, a YouTube video, and an Instagram graphic, instead of each one looking like it came from a different source with different instincts. Every deliverable goes through your review before it's considered final, which keeps quality and brand consistency in your control rather than discovered after delivery.",
    "text": "We produce content for Bangladeshi businesses and international clients across the US, UK, Australia, Canada, and UAE, which means production accounts for real differences in platform requirements and audience expectations between markets rather than one region's visual style applied everywhere. Content here gets built around a coherent brand identity from the start, not assembled from whatever separate freelancers happened to produce independently."
  }
]

  if (!offerings?.length && !whyMatters?.length) return null

  return (
    <div className="bg-frame-bg text-frame-fg">
      {offerings?.length > 0 && (
        <section className="px-4 py-20 md:px-8 md:py-28">
          <div className="mx-auto max-w-[95vw]">
            <SectionIntro
              eyebrow="Capabilities & Scope"
              title="What We Deliver"
            >
              Structured deliverables and execution phases designed for measurable outcomes and reliable business growth.
            </SectionIntro>

            <div className="grid bg-frame-border gap-px sm:grid-cols-2 lg:grid-cols-3 border-2 border-frame-border">
              {offerings.map((item, index) => (
                <div key={index} className="bg-frame-bg p-7 md:p-8 flex flex-col justify-between">
                  <div>
                    <span className="text-xs font-black uppercase tracking-[0.24em] text-frame-accent">
                      Scope 0{index + 1}
                    </span>
                    <h3 className="mt-3 font-heading text-xl md:text-2xl font-bold uppercase tracking-tight text-frame-fg">
                      {item.title}
                    </h3>
                    {item.description && (
                      <p className="mt-3 text-sm font-medium leading-relaxed text-frame-muted-fg">
                        {item.description}
                      </p>
                    )}
                  </div>
                  {item.bullets?.length > 0 && (
                    <ul className="mt-6 space-y-2 border-t-2 border-frame-border/60 pt-4 text-xs md:text-sm font-medium text-frame-fg/90">
                      {item.bullets.map((bullet, bIdx) => (
                        <li key={bIdx} className="flex items-start gap-2">
                          <span className="text-frame-accent font-bold">✓</span>
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* WHY IT MATTERS & WHY CHOOSE US */}
      {(whyMatters?.length > 0 || whyChooseUs?.length > 0) && (
        <section className="border-t-2 border-frame-border bg-frame-bg px-4 py-20 md:px-8 md:py-28">
          <div className="mx-auto max-w-[95vw]">
            <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
              {whyMatters?.length > 0 && (
                <div className="border-2 border-frame-border bg-frame-bg p-7 md:p-10">
                  <span className="text-xs font-black uppercase tracking-[0.24em] text-frame-accent">
                    Business Context
                  </span>
                  <h2 className="mt-3 font-heading text-2xl md:text-3xl font-bold uppercase tracking-tight text-frame-fg">
                    Why This Matters for Growth
                  </h2>
                  <div className="mt-6 space-y-4 text-sm md:text-base font-medium leading-relaxed text-frame-muted-fg">
                    {whyMatters.map((point, idx) => (
                      <p key={idx}>{point}</p>
                    ))}
                  </div>
                  <div className="mt-8">
                    <PosterButton href="/contact">Book a Strategy Session</PosterButton>
                  </div>
                </div>
              )}

              {whyChooseUs?.length > 0 && (
                <div className="space-y-6">
                  <div>
                    <span className="text-xs font-black uppercase tracking-[0.24em] text-frame-accent">
                      The Frame Cipher Standard
                    </span>
                    <h3 className="mt-2 font-heading text-2xl font-bold uppercase tracking-tight text-frame-fg">
                      Why Choose Frame Cipher
                    </h3>
                  </div>

                  <div className="grid bg-frame-border gap-px border-2 border-frame-border">
                    {whyChooseUs.map((item, index) => (
                      <div key={index} className="bg-frame-bg p-6">
                        <h4 className="font-heading text-base md:text-lg font-bold uppercase tracking-tight text-frame-fg">
                          {item.title}
                        </h4>
                        <p className="mt-2 text-sm font-medium leading-relaxed text-frame-muted-fg">
                          {item.text || item.desc}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>
      )}
    </div>
  )
}
