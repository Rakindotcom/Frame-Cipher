import { SectionIntro, PosterButton } from '../../../Kinetic'

export default function Offerings({ service }) {
  const offerings = service?.offerings || [
  {
    "title": "PRE-PRODUCTION & CONCEPTING",
    "description": "Everything that happens before a camera turns on determines how smoothly everything after it goes. What We Do A shoot day without a real plan tends to run long, miss shots, or capture footage that doesn't actually cut together well later.",
    "bullets": [
      "Concept & Script Development: Writing built with the actual shoot in mind, not a script that looks good on paper but is impractical to film.",
      "Shot List & Storyboard Planning: Mapping out exactly what needs to be captured, so filming day has a clear plan instead of guesswork.",
      "Location & Talent Coordination: Scouting locations and coordinating talent or crew needs ahead of the shoot, not scrambled together last minute.",
      "Production Timeline Planning: Realistic scheduling that accounts for setup, filming, and contingency time, not an overly optimistic single-day plan."
    ]
  },
  {
    "title": "FILMING & PRODUCTION",
    "description": "The actual capture stage, executed by people who already understand how the footage needs to be used afterward. What We Do Footage captured without editing in mind often looks fine on the day and creates real problems once someone tries to actually cut it together.",
    "bullets": [
      "Professional Filming: Camera work, lighting, and audio capture handled to a standard that holds up in final delivery.",
      "On-Location & Studio Production: Filming wherever the project genuinely calls for it, indoors or on location, set up correctly for each environment.",
      "Multi-Camera Coverage: Additional camera angles where a project benefits from them, giving the edit real options to work with.",
      "Sound Recording: Clean, usable audio capture, since poor sound is one of the fastest ways a video reads as unprofessional regardless of visual quality."
    ]
  },
  {
    "title": "EDITING & POST-PRODUCTION",
    "description": "Where raw footage becomes an actual finished video, shaped by people who understand what the project was trying to accomplish. What We Do An edit assembled by someone who wasn't part of the concept and shoot often misses the intent behind specific shots, however technically competent the cuts are.",
    "bullets": [
      "Editing & Assembly: Structuring footage into a coherent, well-paced final sequence, not just trimming clips in the order they were shot.",
      "Color Correction & Grading: Making sure footage looks visually consistent and polished across every shot and scene.",
      "Sound Design & Mixing: Balancing dialogue, music, and effects so the finished video sounds as professional as it looks.",
      "Graphics & Text Integration: Adding titles, lower-thirds, or supporting graphics where they genuinely support the content."
    ]
  },
  {
    "title": "FORMAT & DELIVERY OPTIMIZATION",
    "description": "A finished video still needs to actually fit where it's going. What We Do A brilliant video delivered in the wrong aspect ratio for its actual destination platform still needs rework before it can be used.",
    "bullets": [
      "Platform-Specific Exports: Delivering in the aspect ratios and specs each intended platform actually requires, not one generic file.",
      "Multiple Cut Versions: Longer and shorter edits from the same footage where a project needs both a full version and trimmed alternates.",
      "Caption & Subtitle Integration: Adding captions where a video needs to work with sound off, which is how a large share of video actually gets watched.",
      "Thumbnail & Cover Frame Selection: Choosing the specific frame or image that represents the video wherever it's previewed."
    ]
  },
  {
    "title": "ONGOING VIDEO PRODUCTION SUPPORT",
    "description": "For businesses with recurring video needs, not just a single one-off project. What We Do Longer-form video pairs naturally with shorter, platform-specific cuts - see our Short-Form Video page for how a single shoot can support multiple formats.",
    "bullets": [
      "Recurring Production Scheduling: A regular filming and editing cadence built around realistic capacity, not sporadic one-off requests.",
      "Content Library Development: Building a bank of usable footage that supports multiple future edits, not single-use shoots for every request.",
      "Brand Video Consistency: Keeping visual style, pacing, and tone consistent across every video produced over time.",
      "Archive & Asset Management: Organizing raw footage and finished videos so past material stays genuinely usable later."
    ]
  },
  {
    "title": "Why Coordination Matters More Than Any Single Stage",
    "description": "The individual skills involved in video production aren't rare. What actually separates strong final video from weak video is usually the coordination between stages. A Script Written in Isolation Writing that reads well but wasn't developed with the actual shoot in mind creates problems on set that nobody anticipated on paper. Footage Shot Without the Edit in Mind Filming that doesn't consider coverage, continuity, or how shots will actually cut together leaves an editor working around gaps instead of with real options. An Edit Assembled Without Context Editing handled by someone disconnected from the original concept and shoot often technically works while missing what the project was actually trying to say. Why One Team Changes the Outcome When the same team carries the vision from concept through final export, each stage is built with the next one already in mind, which is what actually prevents these gaps from opening up in the first place.",
    "bullets": []
  }
]
  const whyMatters = service?.whyMatters || [
  "Video is one of the more expensive content formats to get wrong, both in cost and in how visibly the result reflects on the brand.",
  "Poor Production Quality Undermines Everything Else",
  "A strong brand and message delivered through shaky, poorly lit, badly recorded video reads as unprofessional regardless of how good the underlying idea actually was.",
  "Reshoots Cost More Than Getting It Right the First Time",
  "A shoot that skipped proper pre-production planning often requires an expensive reshoot once gaps in coverage become obvious in the edit.",
  "Format Mismatches Waste Finished Work",
  "A video produced without its actual destination platform in mind often needs rework before it can even be used where it was intended to go.",
  "One Coordinated Team Costs Less Than Fixing Disconnected Handoffs",
  "Hiring separate, uncoordinated specialists for script, filming, and editing often ends up more expensive than one team carrying the project through, once rework and miscommunication are factored in."
]
  const whyChooseUs = service?.whyChooseUs || [
  {
    "title": "Video projects tend to break down at the handoffs, a script written without thinking about how it'll actually be filmed, footage shot without a clear sense of how it'll be edited together, an edit assembled by someone who wasn't on set and doesn't know what the director actually intended. We keep concept, production, and post-production under one team specifically to close those gaps, since most weak final videos aren't a talent problem at any single stage, they're a coordination problem between stages that never talked to each other. A video is only as strong as its weakest handoff.",
    "text": "\"Nobody sets out to make a bad video. It usually happens one disconnected handoff at a time, a script that wasn't shot-ready, footage that wasn't edit-ready, an edit that never matched what anyone actually intended.\" One Team, Concept to Final Export | Built for the Platform It's Actually Going On | No Disconnected Handoffs Between Stages"
  },
  {
    "title": "Our Video Production Services",
    "text": "A good video requires planning, execution, and finishing all working from the same shared vision."
  },
  {
    "title": "PRE-PRODUCTION & CONCEPTING",
    "text": "Everything that happens before a camera turns on determines how smoothly everything after it goes."
  },
  {
    "title": "What We Do",
    "text": "* Concept & Script Development: Writing built with the actual shoot in mind, not a script that looks good on paper but is impractical to film. * Shot List & Storyboard Planning: Mapping out exactly what needs to be captured, so filming day has a clear plan instead of guesswork. * Location & Talent Coordination: Scouting locations and coordinating talent or crew needs ahead of the shoot, not scrambled together last minute. * Production Timeline Planning: Realistic scheduling that accounts for setup, filming, and contingency time, not an overly optimistic single-day plan. A shoot day without a real plan tends to run long, miss shots, or capture footage that doesn't actually cut together well later."
  },
  {
    "title": "FILMING & PRODUCTION",
    "text": "The actual capture stage, executed by people who already understand how the footage needs to be used afterward."
  },
  {
    "title": "What We Do",
    "text": "* Professional Filming: Camera work, lighting, and audio capture handled to a standard that holds up in final delivery. * On-Location & Studio Production: Filming wherever the project genuinely calls for it, indoors or on location, set up correctly for each environment. * Multi-Camera Coverage: Additional camera angles where a project benefits from them, giving the edit real options to work with. * Sound Recording: Clean, usable audio capture, since poor sound is one of the fastest ways a video reads as unprofessional regardless of visual quality. Footage captured without editing in mind often looks fine on the day and creates real problems once someone tries to actually cut it together."
  },
  {
    "title": "EDITING & POST-PRODUCTION",
    "text": "Where raw footage becomes an actual finished video, shaped by people who understand what the project was trying to accomplish."
  },
  {
    "title": "What We Do",
    "text": "* Editing & Assembly: Structuring footage into a coherent, well-paced final sequence, not just trimming clips in the order they were shot. * Color Correction & Grading: Making sure footage looks visually consistent and polished across every shot and scene. * Sound Design & Mixing: Balancing dialogue, music, and effects so the finished video sounds as professional as it looks. * Graphics & Text Integration: Adding titles, lower-thirds, or supporting graphics where they genuinely support the content. An edit assembled by someone who wasn't part of the concept and shoot often misses the intent behind specific shots, however technically competent the cuts are."
  },
  {
    "title": "FORMAT & DELIVERY OPTIMIZATION",
    "text": "A finished video still needs to actually fit where it's going."
  },
  {
    "title": "What We Do",
    "text": "* Platform-Specific Exports: Delivering in the aspect ratios and specs each intended platform actually requires, not one generic file. * Multiple Cut Versions: Longer and shorter edits from the same footage where a project needs both a full version and trimmed alternates. * Caption & Subtitle Integration: Adding captions where a video needs to work with sound off, which is how a large share of video actually gets watched. * Thumbnail & Cover Frame Selection: Choosing the specific frame or image that represents the video wherever it's previewed. A brilliant video delivered in the wrong aspect ratio for its actual destination platform still needs rework before it can be used."
  },
  {
    "title": "ONGOING VIDEO PRODUCTION SUPPORT",
    "text": "For businesses with recurring video needs, not just a single one-off project."
  },
  {
    "title": "What We Do",
    "text": "* Recurring Production Scheduling: A regular filming and editing cadence built around realistic capacity, not sporadic one-off requests. * Content Library Development: Building a bank of usable footage that supports multiple future edits, not single-use shoots for every request. * Brand Video Consistency: Keeping visual style, pacing, and tone consistent across every video produced over time. * Archive & Asset Management: Organizing raw footage and finished videos so past material stays genuinely usable later. Longer-form video pairs naturally with shorter, platform-specific cuts - see our Short-Form Video page for how a single shoot can support multiple formats. Why Coordination Matters More Than Any Single Stage The individual skills involved in video production aren't rare. What actually separates strong final video from weak video is usually the coordination between stages."
  },
  {
    "title": "A Script Written in Isolation",
    "text": "Writing that reads well but wasn't developed with the actual shoot in mind creates problems on set that nobody anticipated on paper."
  },
  {
    "title": "Footage Shot Without the Edit in Mind",
    "text": "Filming that doesn't consider coverage, continuity, or how shots will actually cut together leaves an editor working around gaps instead of with real options."
  },
  {
    "title": "An Edit Assembled Without Context",
    "text": "Editing handled by someone disconnected from the original concept and shoot often technically works while missing what the project was actually trying to say."
  },
  {
    "title": "Why One Team Changes the Outcome",
    "text": "When the same team carries the vision from concept through final export, each stage is built with the next one already in mind, which is what actually prevents these gaps from opening up in the first place. Why Your Business Needs Real Video Production Video is one of the more expensive content formats to get wrong, both in cost and in how visibly the result reflects on the brand. Poor Production Quality Undermines Everything Else A strong brand and message delivered through shaky, poorly lit, badly recorded video reads as unprofessional regardless of how good the underlying idea actually was. Reshoots Cost More Than Getting It Right the First Time A shoot that skipped proper pre-production planning often requires an expensive reshoot once gaps in coverage become obvious in the edit."
  },
  {
    "title": "Format Mismatches Waste Finished Work",
    "text": "A video produced without its actual destination platform in mind often needs rework before it can even be used where it was intended to go. One Coordinated Team Costs Less Than Fixing Disconnected Handoffs Hiring separate, uncoordinated specialists for script, filming, and editing often ends up more expensive than one team carrying the project through, once rework and miscommunication are factored in. Why We're Different"
  },
  {
    "title": "One In-House Team",
    "text": "Concept, filming, and editing carried by the same team from start to finish, closing the gaps that open up between disconnected freelancers."
  },
  {
    "title": "We Plan With the Edit Already in Mind",
    "text": "Pre-production and filming decisions are made knowing exactly how the footage will actually be used afterward. Local & International Production Experience Based in Dhaka. Producing video for clients across Bangladesh, the US, UK, Australia, Canada, and UAE. Delivered Ready for Where It's Actually Going Format and export decisions are made around the real destination platform, not left as an afterthought."
  },
  {
    "title": "Pre-Production & Concepting",
    "text": "A real plan script, shot list, timeline built with the actual shoot in mind."
  },
  {
    "title": "Professional Filming",
    "text": "Camera, lighting, and sound capture handled to a standard that holds up in final delivery."
  },
  {
    "title": "Editing & Post-Production",
    "text": "Footage shaped into a coherent, well-paced final video by people who understand the original intent."
  },
  {
    "title": "Format-Optimized Delivery",
    "text": "Exports built correctly for wherever the video is actually going to be used."
  },
  {
    "title": "Ongoing Production Support",
    "text": "A recurring, sustainable production cadence for businesses with continued video needs."
  },
  {
    "title": "Transparent Review Process",
    "text": "Review points built into the process, not a single final reveal with no chance to adjust."
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
