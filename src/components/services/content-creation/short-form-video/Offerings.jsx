import { SectionIntro, PosterButton } from '../../../Kinetic'

export default function Offerings({ service }) {
  const offerings = service?.offerings || [
  {
    "title": "CONCEPT & HOOK DEVELOPMENT",
    "description": "The opening moment carries more weight here than in almost any other video format. What We Do A slow, scene-setting opening that would work fine in a longer video is often the exact reason a short-form video gets scrolled past.",
    "bullets": [
      "Hook Concepting: Developing openings built specifically to earn a second, third, and fourth second of attention.",
      "Trend & Format Awareness: Using current formats and audio deliberately, adapted to fit your brand rather than copied wholesale.",
      "Category-Specific Ideation: Concepts built around what genuinely performs in your specific industry or niche, not generic short-form tropes.",
      "Multi-Concept Batching: Developing several concepts at once, since short-form production benefits from volume and testing more than any single \"perfect\" video."
    ]
  },
  {
    "title": "VERTICAL FILMING",
    "description": "Shot for the format from the first setup, not adapted to it afterward. What We Do Content that looks too polished sometimes underperforms content that looks native to the platform, which is a real adjustment from traditional production instincts.",
    "bullets": [
      "Vertical Frame Composition: Shooting with the 9:16 frame in mind from setup, not cropping a horizontal shot after the fact.",
      "Mobile-Native Production Style: Filming with the visual style that actually performs on these platforms, which often looks different from traditional video production standards.",
      "Efficient Multi-Take Filming: Capturing multiple takes and variations quickly, suited to short-form's faster, higher-volume production pace.",
      "On-Location & Simple Setup Filming: Producing content in real environments where that fits the platform's more casual, authentic visual expectations."
    ]
  },
  {
    "title": "EDITING FOR PLATFORM PACING",
    "description": "The edit is where short-form video either holds attention or loses it, cut by cut. What We Do An edit paced like a longer-form video, even with a strong hook, tends to lose viewers well before the video actually ends.",
    "bullets": [
      "Fast-Paced Editing: Cutting built around how quickly these platforms' audiences actually expect a video to move.",
      "Trending Audio Integration: Syncing edits to trending or relevant audio where it genuinely supports the content, not just because it's popular.",
      "Text Overlay & Caption Design: On-screen text written and timed for how people watch with sound off as often as with it on.",
      "Pattern Interrupt Editing: Using cuts, zooms, or visual changes deliberately to re-earn attention throughout the video, not just at the opening."
    ]
  },
  {
    "title": "MULTI-PLATFORM ADAPTATION",
    "description": "Reels, Shorts, and TikTok share a format but aren't identical, and treating them as one thing wastes real nuance. What We Do TikTok, Reels, and Shorts each have real differences in audience behavior and algorithm mechanics, even sharing the same basic vertical video shape.",
    "bullets": [
      "Platform-Specific Export Specs: Delivering correctly for each platform's actual technical requirements, not one generic vertical file.",
      "Platform Culture Adaptation: Adjusting tone and style slightly where a platform's specific audience genuinely expects something different.",
      "Caption & Hashtag Strategy Per Platform: Writing captions suited to how each platform's discovery actually works, not a copy-pasted caption across all three.",
      "Cross-Posting Strategy: Deciding which content genuinely works across all three platforms versus what needs platform-specific adjustment."
    ]
  },
  {
    "title": "VOLUME PRODUCTION & TESTING",
    "description": "Short-form video rewards a testing mindset more than a single, heavily produced piece. What We Do Short-form content pairs naturally with a coordinated posting and community strategy, see our Instagram Management and TikTok Management pages for how production connects to distribution.",
    "bullets": [
      "Batch Production Planning: Filming multiple pieces of content in a single session, since short-form's pace favors volume over one perfect video.",
      "Concept Testing: Producing variations to learn what genuinely resonates with your specific audience, rather than guessing once and hoping.",
      "Performance-Based Iteration: Adjusting future concepts and editing style based on what real performance data actually shows.",
      "Recurring Production Cadence: A sustainable, ongoing production rhythm, since consistency matters as much as any individual video's quality here."
    ]
  },
  {
    "title": "What Makes Short-Form Genuinely Different From Longer Video",
    "description": "This isn't just a shorter version of regular video production, it's a different discipline with its own real rules. The First-Second Decision Longer videos have room to build slowly. Short-form doesn't, the decision to keep watching happens almost immediately, and everything else depends on surviving that first moment. Native Beats Polished A visual style that reads as too produced, too much like a traditional advertisement, often performs worse than content that looks like it belongs natively on the platform. Volume Beats Perfection One heavily produced short-form video rarely outperforms several tested, iterated pieces; the format rewards a testing mindset more than a single, perfect execution. The Algorithm Rewards Completion How much of a video someone actually watches matters more here than almost any single other signal, which changes what \"good editing\" even means for this format specifically.",
    "bullets": []
  }
]
  const whyMatters = service?.whyMatters || [
  "Short-form video is currently where the most organic reach potential sits across most platforms, and it punishes content built without its specific rules in mind.",
  "Cropped Long-Form Video Looks Like What It Is",
  "A video framed for horizontal viewing and cropped to fit vertical loses composition and reads as an afterthought, not a real piece of content.",
  "A Weak Hook Wastes Everything After It",
  "No amount of good content later in a video matters if the opening doesn't survive the first-second scroll decision.",
  "Inconsistent Production Undermines Volume Strategy",
  "Since this format rewards testing and frequency, production that can't sustain a real cadence limits the format's actual advantage.",
  "Platform Nuance Gets Missed by Generic Production",
  "Treating Reels, Shorts, and TikTok as completely interchangeable misses real, specific differences in what each platform's audience actually responds to."
]
  const whyChooseUs = service?.whyChooseUs || [
  {
    "title": "A video shot horizontally and cropped to vertical loses framing, loses impact, and usually looks exactly like what it is an afterthought. We shoot and edit for the vertical frame from the first setup, with pacing built around how people actually watch short-form video: fast, on mobile, one thumb-swipe away from moving on to something else entirely. The platforms reward content that respects how people actually use them, and content built any other way is working against the distribution mechanism, not with it.",
    "text": "\"The scroll doesn't wait for a slow start. If the first second doesn't earn the second one, everything well-crafted after it never gets seen.\" Shot Vertical From the Start | Built for the First-Second Decision | Edited for Native Platform Pacing"
  },
  {
    "title": "Our Short-Form Video Production Services",
    "text": "Short-form video succeeds or fails on specific mechanics that don't apply the same way to longer content."
  },
  {
    "title": "CONCEPT & HOOK DEVELOPMENT",
    "text": "The opening moment carries more weight here than in almost any other video format."
  },
  {
    "title": "What We Do",
    "text": "* Hook Concepting: Developing openings built specifically to earn a second, third, and fourth second of attention. * Trend & Format Awareness: Using current formats and audio deliberately, adapted to fit your brand rather than copied wholesale. * Category-Specific Ideation: Concepts built around what genuinely performs in your specific industry or niche, not generic short-form tropes. * Multi-Concept Batching: Developing several concepts at once, since short-form production benefits from volume and testing more than any single \"perfect\" video. A slow, scene-setting opening that would work fine in a longer video is often the exact reason a short-form video gets scrolled past."
  },
  {
    "title": "VERTICAL FILMING",
    "text": "Shot for the format from the first setup, not adapted to it afterward."
  },
  {
    "title": "What We Do",
    "text": "* Vertical Frame Composition: Shooting with the 9:16 frame in mind from setup, not cropping a horizontal shot after the fact. * Mobile-Native Production Style: Filming with the visual style that actually performs on these platforms, which often looks different from traditional video production standards. * Efficient Multi-Take Filming: Capturing multiple takes and variations quickly, suited to short-form's faster, higher-volume production pace. * On-Location & Simple Setup Filming: Producing content in real environments where that fits the platform's more casual, authentic visual expectations. Content that looks too polished sometimes underperforms content that looks native to the platform, which is a real adjustment from traditional production instincts."
  },
  {
    "title": "EDITING FOR PLATFORM PACING",
    "text": "The edit is where short-form video either holds attention or loses it, cut by cut."
  },
  {
    "title": "What We Do",
    "text": "* Fast-Paced Editing: Cutting built around how quickly these platforms' audiences actually expect a video to move. * Trending Audio Integration: Syncing edits to trending or relevant audio where it genuinely supports the content, not just because it's popular. * Text Overlay & Caption Design: On-screen text written and timed for how people watch with sound off as often as with it on. * Pattern Interrupt Editing: Using cuts, zooms, or visual changes deliberately to re-earn attention throughout the video, not just at the opening. An edit paced like a longer-form video, even with a strong hook, tends to lose viewers well before the video actually ends."
  },
  {
    "title": "MULTI-PLATFORM ADAPTATION",
    "text": "Reels, Shorts, and TikTok share a format but aren't identical, and treating them as one thing wastes real nuance."
  },
  {
    "title": "What We Do",
    "text": "* Platform-Specific Export Specs: Delivering correctly for each platform's actual technical requirements, not one generic vertical file. * Platform Culture Adaptation: Adjusting tone and style slightly where a platform's specific audience genuinely expects something different. * Caption & Hashtag Strategy Per Platform: Writing captions suited to how each platform's discovery actually works, not a copy-pasted caption across all three. * Cross-Posting Strategy: Deciding which content genuinely works across all three platforms versus what needs platform-specific adjustment. TikTok, Reels, and Shorts each have real differences in audience behavior and algorithm mechanics, even sharing the same basic vertical video shape."
  },
  {
    "title": "VOLUME PRODUCTION & TESTING",
    "text": "Short-form video rewards a testing mindset more than a single, heavily produced piece."
  },
  {
    "title": "What We Do",
    "text": "* Batch Production Planning: Filming multiple pieces of content in a single session, since short-form's pace favors volume over one perfect video. * Concept Testing: Producing variations to learn what genuinely resonates with your specific audience, rather than guessing once and hoping. * Performance-Based Iteration: Adjusting future concepts and editing style based on what real performance data actually shows. * Recurring Production Cadence: A sustainable, ongoing production rhythm, since consistency matters as much as any individual video's quality here. Short-form content pairs naturally with a coordinated posting and community strategy, see our Instagram Management and TikTok Management pages for how production connects to distribution. What Makes Short-Form Genuinely Different From Longer Video This isn't just a shorter version of regular video production, it's a different discipline with its own real rules."
  },
  {
    "title": "The First-Second Decision",
    "text": "Longer videos have room to build slowly. Short-form doesn't, the decision to keep watching happens almost immediately, and everything else depends on surviving that first moment."
  },
  {
    "title": "Native Beats Polished",
    "text": "A visual style that reads as too produced, too much like a traditional advertisement, often performs worse than content that looks like it belongs natively on the platform."
  },
  {
    "title": "Volume Beats Perfection",
    "text": "One heavily produced short-form video rarely outperforms several tested, iterated pieces; the format rewards a testing mindset more than a single, perfect execution."
  },
  {
    "title": "The Algorithm Rewards Completion",
    "text": "How much of a video someone actually watches matters more here than almost any single other signal, which changes what \"good editing\" even means for this format specifically. Why Your Business Needs Real Short-Form Video Production Short-form video is currently where the most organic reach potential sits across most platforms, and it punishes content built without its specific rules in mind. Cropped Long-Form Video Looks Like What It Is A video framed for horizontal viewing and cropped to fit vertical loses composition and reads as an afterthought, not a real piece of content."
  },
  {
    "title": "A Weak Hook Wastes Everything After It",
    "text": "No amount of good content later in a video matters if the opening doesn't survive the first-second scroll decision. Inconsistent Production Undermines Volume Strategy Since this format rewards testing and frequency, production that can't sustain a real cadence limits the format's actual advantage. Platform Nuance Gets Missed by Generic Production Treating Reels, Shorts, and TikTok as completely interchangeable misses real, specific differences in what each platform's audience actually responds to. Why We're Different"
  },
  {
    "title": "One In-House Team",
    "text": "Concepting, filming, and editing handled by people who understand short-form's specific mechanics, not a longer-video production team applying the wrong instincts."
  },
  {
    "title": "We Shoot Vertical From the Start",
    "text": "No cropped-down long-form content pretending to be native short-form, every shoot is planned for the actual format. Local & International Short-Form Experience Based in Dhaka. Producing short-form content for clients across Bangladesh, the US, UK, Australia, Canada, and UAE. We Think in Volume, Not Just One Video Production built for testing and consistent output, since that's genuinely how this format rewards effort."
  },
  {
    "title": "Hook & Concept Development",
    "text": "Openings built specifically to survive the first-second scroll decision."
  },
  {
    "title": "Vertical-Native Filming",
    "text": "Content shot for the actual format from the first setup, not adapted after the fact."
  },
  {
    "title": "Platform-Paced Editing",
    "text": "Cuts and pacing built around how these platforms' audiences actually watch."
  },
  {
    "title": "Multi-Platform Delivery",
    "text": "Content adapted correctly for Reels, Shorts, and TikTok's real, specific differences."
  },
  {
    "title": "Batch & Volume Production",
    "text": "A sustainable production cadence built for testing, not a single perfect video."
  },
  {
    "title": "Transparent Review Process",
    "text": "Review points built into the process before content goes out under your brand."
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
