import { SectionIntro, PosterButton } from '../../../Kinetic'

export default function Offerings({ service }) {
  const offerings = service?.offerings || [
  {
    "title": "CLIENT INTERVIEW & RESEARCH",
    "description": "Getting the actual story requires actually talking to the people who lived it, not reconstructing it secondhand. What We Do The best details in a case study almost never show up in a written questionnaire, they come out in an actual conversation.",
    "bullets": [
      "Client Interview Coordination: Structuring and conducting interviews that surface genuine detail, not just polite, generic praise.",
      "Internal Team Interviews: Talking to the people on your side who actually did the work, since they often remember specifics the client doesn't.",
      "Data & Results Gathering: Collecting real numbers and outcomes, verified rather than approximated or rounded up for effect.",
      "Permission & Approval Coordination: Managing the client sign-off process so the finished piece can actually be published and used."
    ]
  },
  {
    "title": "NARRATIVE STRUCTURE & STORYTELLING",
    "description": "Turning raw interview material into a story a skeptical reader will actually follow. What We Do A case study that jumps straight from problem to result, skipping the actual process, tends to read as less credible, not more efficient.",
    "bullets": [
      "Before-and-After Framing: Structuring the story around a clear starting problem and a clear resulting outcome, not a vague improvement.",
      "Problem & Context Development: Establishing what the client was actually dealing with, specific enough that a similar reader recognizes their own situation.",
      "Process & Approach Narrative: Explaining what was actually done, in enough real detail that it reads as a genuine account, not a black box.",
      "Result & Impact Framing: Presenting outcomes in a way that's both accurate and genuinely compelling, without exaggerating past what the data supports."
    ]
  },
  {
    "title": "DATA & PROOF INTEGRATION",
    "description": "Numbers and quotes are what turn a nice story into something a skeptical reader actually trusts. What We Do A specific, verified number does more persuasive work than any amount of confident-sounding prose around it.",
    "bullets": [
      "Metric & Result Presentation: Framing real numbers clearly, with enough context that they mean something to an unfamiliar reader.",
      "Direct Quote Integration: Using the client's actual words where they add authenticity, rather than paraphrasing everything into generic marketing language.",
      "Visual Data Support: Recommending charts, before-and-after comparisons, or other visual elements that reinforce the numbers.",
      "Verification & Accuracy Checks: Confirming data and quotes are accurate before publication, since a single inaccurate detail undermines the whole piece's credibility."
    ]
  },
  {
    "title": "FORMAT & CHANNEL ADAPTATION",
    "description": "The same underlying story often needs to work across several different formats and lengths. What We Do A single well-researched case study is usually worth adapting into several formats, rather than researching a new one for every context it might be needed in.",
    "bullets": [
      "Long-Form Case Study Writing: The full, detailed version for a dedicated case study page or PDF.",
      "Short-Form Summary Writing: A condensed version for sales decks, proposals, or quick-reference use.",
      "Social & Snippet Adaptation: Pulling genuine highlights into shareable formats for social media or email use.",
      "Sales Enablement Formatting: Structuring case studies so your sales team can actually use them effectively in real conversations."
    ]
  },
  {
    "title": "CASE STUDY LIBRARY STRATEGY",
    "description": "For businesses building out more than one, deciding what to cover and why matters as much as any single piece. What We Do Case studies work best when they support the sales conversations already happening - see our Sales Copywriting page for how the two connect.",
    "bullets": [
      "Case Study Prioritization: Identifying which client stories represent the strongest, most persuasive proof for your actual sales priorities.",
      "Coverage Gap Analysis: Making sure case studies span the industries, use cases, or objections that come up most often in real sales conversations.",
      "Ongoing Case Study Pipeline: Building a repeatable process for identifying and capturing new case studies as new results happen.",
      "Library Organization: Structuring how case studies are presented and findable, so the right one surfaces for the right prospect."
    ]
  },
  {
    "title": "What Actually Makes a Case Study Credible",
    "description": "Most weak case studies fail for the same reasons, and it's worth being direct about what separates the credible ones. Specificity Over Polish A case study with one real, verified number does more convincing work than several paragraphs of smoothly written but vague praise. Process, Not Just Outcome Skipping straight from problem to result leaves a skeptical reader wondering what actually happened in between, the process is often what makes the outcome believable. The Client's Actual Words Paraphrasing a client's feedback into generic marketing language strips out the authenticity that made it convincing in the first place. Honest About Scope A case study that acknowledges what specifically changed, rather than implying limitless universal results, tends to read as more credible, not less impressive.",
    "bullets": []
  }
]
  const whyMatters = service?.whyMatters || [
  "A weak case study doesn't just fail to help, it can actively undermine credibility if it reads as obviously generic.",
  "Vague Testimonials Convince Almost Nobody",
  "\"Great service, highly recommended\" could have been written about any business, and a skeptical prospect reads it as exactly that generic.",
  "Real Results Deserve Real Documentation",
  "A genuinely strong client outcome, told vaguely, wastes the actual proof sitting right there in what happened.",
  "Sales Teams Need Specific Ammunition",
  "A vague case study gives a salesperson little to actually work with in a real conversation with a skeptical, comparison-minded prospect.",
  "One Great Case Study Beats Five Generic Ones",
  "A single, deeply specific, well-researched case study often does more persuasive work than a library of thin, interchangeable ones."
]
  const whyChooseUs = service?.whyChooseUs || [
  {
    "title": "A skeptical reader can tell the difference between a case study built on genuine specifics and one that's been smoothed into vague, safe language nobody could object to, and the smoothed-out version rarely convinces anyone of anything. We dig for the real detail: the actual number that changed, the actual obstacle that had to be solved, the actual words the client used when describing the result, because specificity is what separates proof from a testimonial with better formatting. A case study's entire job is credibility, and credibility comes from detail a marketing team couldn't have simply invented.",
    "text": "\"A case study that could be swapped onto a competitor's website with a find-and-replace on the company name was never actually proof of anything. Real proof is too specific to be interchangeable.\" Built on Real Specifics, Not Vague Praise | Structured Around a Genuine Before-and-After | Written to Survive a Skeptical Read"
  },
  {
    "title": "Our Case Study Writing Services",
    "text": "A genuinely credible case study requires real research and a deliberate structure, not just a nicely written summary."
  },
  {
    "title": "CLIENT INTERVIEW & RESEARCH",
    "text": "Getting the actual story requires actually talking to the people who lived it, not reconstructing it secondhand."
  },
  {
    "title": "What We Do",
    "text": "* Client Interview Coordination: Structuring and conducting interviews that surface genuine detail, not just polite, generic praise. * Internal Team Interviews: Talking to the people on your side who actually did the work, since they often remember specifics the client doesn't. * Data & Results Gathering: Collecting real numbers and outcomes, verified rather than approximated or rounded up for effect. * Permission & Approval Coordination: Managing the client sign-off process so the finished piece can actually be published and used. The best details in a case study almost never show up in a written questionnaire, they come out in an actual conversation."
  },
  {
    "title": "NARRATIVE STRUCTURE & STORYTELLING",
    "text": "Turning raw interview material into a story a skeptical reader will actually follow."
  },
  {
    "title": "What We Do",
    "text": "* Before-and-After Framing: Structuring the story around a clear starting problem and a clear resulting outcome, not a vague improvement. * Problem & Context Development: Establishing what the client was actually dealing with, specific enough that a similar reader recognizes their own situation. * Process & Approach Narrative: Explaining what was actually done, in enough real detail that it reads as a genuine account, not a black box. * Result & Impact Framing: Presenting outcomes in a way that's both accurate and genuinely compelling, without exaggerating past what the data supports. A case study that jumps straight from problem to result, skipping the actual process, tends to read as less credible, not more efficient."
  },
  {
    "title": "DATA & PROOF INTEGRATION",
    "text": "Numbers and quotes are what turn a nice story into something a skeptical reader actually trusts."
  },
  {
    "title": "What We Do",
    "text": "* Metric & Result Presentation: Framing real numbers clearly, with enough context that they mean something to an unfamiliar reader. * Direct Quote Integration: Using the client's actual words where they add authenticity, rather than paraphrasing everything into generic marketing language. * Visual Data Support: Recommending charts, before-and-after comparisons, or other visual elements that reinforce the numbers. * Verification & Accuracy Checks: Confirming data and quotes are accurate before publication, since a single inaccurate detail undermines the whole piece's credibility. A specific, verified number does more persuasive work than any amount of confident-sounding prose around it."
  },
  {
    "title": "FORMAT & CHANNEL ADAPTATION",
    "text": "The same underlying story often needs to work across several different formats and lengths."
  },
  {
    "title": "What We Do",
    "text": "* Long-Form Case Study Writing: The full, detailed version for a dedicated case study page or PDF. * Short-Form Summary Writing: A condensed version for sales decks, proposals, or quick-reference use. * Social & Snippet Adaptation: Pulling genuine highlights into shareable formats for social media or email use. * Sales Enablement Formatting: Structuring case studies so your sales team can actually use them effectively in real conversations. A single well-researched case study is usually worth adapting into several formats, rather than researching a new one for every context it might be needed in."
  },
  {
    "title": "CASE STUDY LIBRARY STRATEGY",
    "text": "For businesses building out more than one, deciding what to cover and why matters as much as any single piece."
  },
  {
    "title": "What We Do",
    "text": "* Case Study Prioritization: Identifying which client stories represent the strongest, most persuasive proof for your actual sales priorities. * Coverage Gap Analysis: Making sure case studies span the industries, use cases, or objections that come up most often in real sales conversations. * Ongoing Case Study Pipeline: Building a repeatable process for identifying and capturing new case studies as new results happen. * Library Organization: Structuring how case studies are presented and findable, so the right one surfaces for the right prospect. Case studies work best when they support the sales conversations already happening - see our Sales Copywriting page for how the two connect."
  },
  {
    "title": "What Actually Makes a Case Study Credible",
    "text": "Most weak case studies fail for the same reasons, and it's worth being direct about what separates the credible ones."
  },
  {
    "title": "Specificity Over Polish",
    "text": "A case study with one real, verified number does more convincing work than several paragraphs of smoothly written but vague praise. Process, Not Just Outcome Skipping straight from problem to result leaves a skeptical reader wondering what actually happened in between, the process is often what makes the outcome believable. The Client's Actual Words Paraphrasing a client's feedback into generic marketing language strips out the authenticity that made it convincing in the first place."
  },
  {
    "title": "Honest About Scope",
    "text": "A case study that acknowledges what specifically changed, rather than implying limitless universal results, tends to read as more credible, not less impressive. Why Your Business Needs Real Case Study Writing A weak case study doesn't just fail to help, it can actively undermine credibility if it reads as obviously generic."
  },
  {
    "title": "Vague Testimonials Convince Almost Nobody",
    "text": "\"Great service, highly recommended\" could have been written about any business, and a skeptical prospect reads it as exactly that generic."
  },
  {
    "title": "Real Results Deserve Real Documentation",
    "text": "A genuinely strong client outcome, told vaguely, wastes the actual proof sitting right there in what happened."
  },
  {
    "title": "Sales Teams Need Specific Ammunition",
    "text": "A vague case study gives a salesperson little to actually work with in a real conversation with a skeptical, comparison-minded prospect. One Great Case Study Beats Five Generic Ones A single, deeply specific, well-researched case study often does more persuasive work than a library of thin, interchangeable ones. Why We're Different"
  },
  {
    "title": "One In-House Team",
    "text": "Interviewing, writing, and sales strategy coordinated together, so case studies are built to actually support real sales conversations, not written in isolation from how they'll be used."
  },
  {
    "title": "We Dig for the Specific Detail",
    "text": "No smoothing a real story into safe, generic language, the specifics are what make a case study actually work. Local & International Case Study Experience Based in Dhaka. Writing case studies for clients across Bangladesh, the US, UK, Australia, Canada, and UAE. We Manage the Whole Process, Including Approval Interview coordination and client sign-off handled as part of the service, not left for you to chase down separately."
  },
  {
    "title": "Client & Team Interviews",
    "text": "Real conversations that surface genuine detail, not a generic questionnaire response."
  },
  {
    "title": "Narrative Structure",
    "text": "A clear before-and-after story with the actual process included, not skipped over."
  },
  {
    "title": "Verified Data & Quotes",
    "text": "Real numbers and direct client language, checked for accuracy before publication."
  },
  {
    "title": "Multi-Format Delivery",
    "text": "Long-form, short-form, and social-ready versions from a single research effort."
  },
  {
    "title": "Case Study Strategy",
    "text": "Guidance on which stories to prioritize and how to build a genuinely useful library over time."
  },
  {
    "title": "Approval Coordination",
    "text": "Client sign-off is managed as part of the process, so the finished piece is actually ready to publish and use."
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
