import { SectionIntro, PosterButton } from '../../../Kinetic'

export default function Offerings({ service }) {
  const offerings = service?.offerings || [
  {
    "title": "PENALTY DIAGNOSIS & INVESTIGATION",
    "description": "Before any fix begins, we determine exactly what type of issue is actually responsible for the drop. What We Do Treating an algorithmic drop like a manual action, or vice versa, means applying a fix that doesn't address what actually happened.",
    "bullets": [
      "Search Console Manual Action Review: Checking directly for any manual action notices Google has issued against your site.",
      "Algorithm Update Correlation: Comparing your traffic drop timing against known Google algorithm update dates.",
      "Traffic Pattern Analysis: Reviewing which pages, keywords, and traffic sources were actually affected, and how.",
      "Technical & Migration Issue Ruling-Out: Confirming the drop isn't actually a technical problem or a site change mistaken for a penalty."
    ]
  },
  {
    "title": "MANUAL ACTION REMEDIATION",
    "description": "When Google has issued a specific manual action, the fix has to directly address what they flagged. What We Do Google's reconsideration process rewards specific, demonstrated fixes; a vague \"we improved things\" request tends to get rejected.",
    "bullets": [
      "Violation-Specific Remediation: Fixing exactly what the manual action notice identifies, unnatural links, thin content, cloaking, whatever the specific flag is.",
      "Toxic Backlink Removal & Disavow: Identifying and removing or disavowing links responsible for a links-based manual action.",
      "Content Quality Remediation: Rewriting or removing thin, duplicate, or low-value content flagged under a content-based action.",
      "Documentation for Reconsideration: Building a clear, evidence-based record of what was fixed and how."
    ]
  },
  {
    "title": "ALGORITHMIC RECOVERY STRATEGY",
    "description": "Recovering from an algorithm update means addressing the broader quality signals the update is actually measuring. What We Do There's no reconsideration request for an algorithmic drop, recovery means genuinely improving what the update was measuring, then waiting for reassessment.",
    "bullets": [
      "Update-Specific Impact Analysis: Understanding what the specific algorithm update in question actually evaluates.",
      "Content Quality & E-E-A-T Improvement: Strengthening the experience, expertise, authority, and trust signals Google's systems increasingly weigh.",
      "Technical & UX Signal Review: Addressing site quality signals speed, usability, ad density, that broader updates often account for.",
      "Competitive Benchmark Analysis: Understanding what sites that weren't affected, or that recovered, are doing differently."
    ]
  },
  {
    "title": "RECONSIDERATION REQUEST SUPPORT",
    "description": "For manual actions specifically, the reconsideration request itself has to be built carefully. What We Do A reconsideration request submitted too early, before the underlying issue is genuinely fixed, often gets denied and costs another full review cycle.",
    "bullets": [
      "Reconsideration Request Drafting: Writing a clear, specific, evidence-backed request that addresses exactly what was flagged.",
      "Supporting Documentation Preparation: Compiling proof of the fixes made, removed links, rewritten content, corrected practices.",
      "Submission Timing Guidance: Advising on when a site is genuinely ready for reconsideration, not just eager to submit.",
      "Follow-Up Support: Guidance if an initial reconsideration request is denied and further work is needed."
    ]
  },
  {
    "title": "POST-RECOVERY MONITORING & PREVENTION",
    "description": "Recovering rankings is only half the job, staying recovered is the other half. What We Do Recovery work often surfaces broader SEO gaps too - see our SEO Strategy & Consulting page for building a stronger, more resilient long-term foundation.",
    "bullets": [
      "Ranking & Traffic Recovery Tracking: Monitoring the actual trajectory back toward previous performance.",
      "Ongoing Compliance Monitoring: Watching for any drift back toward the practices that caused the original issue.",
      "Preventive Technical Audits: Catching new issues before they compound into another penalty.",
      "Documentation for Future Reference: Keeping a clear record of what happened and what was done, in case questions arise later."
    ]
  },
  {
    "title": "Manual Action or Algorithmic Drop, Which One Are You Dealing With?",
    "description": "The first, most important question in any recovery determines everything that follows. Manual Action A human reviewer at Google has flagged your site specifically, and you'll see a notice directly in Google Search Console under Manual Actions. This has a defined process: fix the specific violation, then submit a reconsideration request. Algorithmic Update Impact No notice appears anywhere, your traffic simply dropped, often correlating with a known Google algorithm update date. There's no request to submit here; recovery means genuinely improving the quality signals the update evaluates, then waiting for the next reassessment. Something Else Entirely Sometimes a traffic drop isn't a penalty at all, a botched migration, a technical error, a seasonal shift, or a legitimate competitor improvement can all look like a penalty from the outside. Ruling this out first prevents chasing a fix for a problem that was never actually a penalty. Confusing these three is the single most common reason recovery attempts stall, the diagnosis has to come first, every time.",
    "bullets": []
  }
]
  const whyMatters = service?.whyMatters || [
  "A traffic drop left unaddressed, or addressed with the wrong fix, tends to compound rather than resolve on its own.",
  "The Wrong Fix Wastes the Time Recovery Actually Needs",
  "Treating an algorithmic drop like a manual action, or the reverse, delays genuine recovery while resources go toward the wrong problem.",
  "Reconsideration Requests Get One Real Shot at a Time",
  "A poorly documented or premature request often gets denied, costing another full review cycle before you can try again.",
  "Panic-Driven Changes Can Make Things Worse",
  "Making sweeping, undocumented changes to a penalized site can obscure what actually caused the problem, complicating diagnosis further.",
  "Recovery Without Prevention Risks Repeating the Cycle",
  "Fixing the immediate issue without addressing what led to it in the first place leaves the door open for the same problem to happen again."
]
  const whyChooseUs = service?.whyChooseUs || [
  {
    "title": "A sudden traffic drop gets blamed on a lot of things that aren't actually the cause, and chasing the wrong explanation wastes the time recovery actually needs. We start by determining whether you're dealing with a manual action, an algorithmic update, or something else entirely a technical issue, a migration gone wrong, because the fix for each one is completely different, and applying the wrong one can extend the recovery timeline instead of shortening it. This isn't work we rush through with generic advice; it's methodical diagnosis first, documented action second.",
    "text": "\"The businesses that recover fastest are the ones that resist the urge to change everything at once. A penalty has a specific cause. Finding it precisely is what makes the fix actually work.\" Manual Action & Algorithmic Diagnosis | Documented Recovery Plan | Reconsideration Request Support"
  },
  {
    "title": "Our Penalty Recovery Services",
    "text": "Recovery depends entirely on correctly identifying what actually happened first."
  },
  {
    "title": "PENALTY DIAGNOSIS & INVESTIGATION",
    "text": "Before any fix begins, we determine exactly what type of issue is actually responsible for the drop."
  },
  {
    "title": "What We Do",
    "text": "* Search Console Manual Action Review: Checking directly for any manual action notices Google has issued against your site. * Algorithm Update Correlation: Comparing your traffic drop timing against known Google algorithm update dates. * Traffic Pattern Analysis: Reviewing which pages, keywords, and traffic sources were actually affected, and how. * Technical & Migration Issue Ruling-Out: Confirming the drop isn't actually a technical problem or a site change mistaken for a penalty. Treating an algorithmic drop like a manual action, or vice versa, means applying a fix that doesn't address what actually happened."
  },
  {
    "title": "MANUAL ACTION REMEDIATION",
    "text": "When Google has issued a specific manual action, the fix has to directly address what they flagged."
  },
  {
    "title": "What We Do",
    "text": "* Violation-Specific Remediation: Fixing exactly what the manual action notice identifies, unnatural links, thin content, cloaking, whatever the specific flag is. * Toxic Backlink Removal & Disavow: Identifying and removing or disavowing links responsible for a links-based manual action. * Content Quality Remediation: Rewriting or removing thin, duplicate, or low-value content flagged under a content-based action. * Documentation for Reconsideration: Building a clear, evidence-based record of what was fixed and how. Google's reconsideration process rewards specific, demonstrated fixes; a vague \"we improved things\" request tends to get rejected."
  },
  {
    "title": "ALGORITHMIC RECOVERY STRATEGY",
    "text": "Recovering from an algorithm update means addressing the broader quality signals the update is actually measuring."
  },
  {
    "title": "What We Do",
    "text": "* Update-Specific Impact Analysis: Understanding what the specific algorithm update in question actually evaluates. * Content Quality & E-E-A-T Improvement: Strengthening the experience, expertise, authority, and trust signals Google's systems increasingly weigh. * Technical & UX Signal Review: Addressing site quality signals speed, usability, ad density, that broader updates often account for. * Competitive Benchmark Analysis: Understanding what sites that weren't affected, or that recovered, are doing differently. There's no reconsideration request for an algorithmic drop, recovery means genuinely improving what the update was measuring, then waiting for reassessment."
  },
  {
    "title": "RECONSIDERATION REQUEST SUPPORT",
    "text": "For manual actions specifically, the reconsideration request itself has to be built carefully."
  },
  {
    "title": "What We Do",
    "text": "* Reconsideration Request Drafting: Writing a clear, specific, evidence-backed request that addresses exactly what was flagged. * Supporting Documentation Preparation: Compiling proof of the fixes made, removed links, rewritten content, corrected practices. * Submission Timing Guidance: Advising on when a site is genuinely ready for reconsideration, not just eager to submit. * Follow-Up Support: Guidance if an initial reconsideration request is denied and further work is needed. A reconsideration request submitted too early, before the underlying issue is genuinely fixed, often gets denied and costs another full review cycle."
  },
  {
    "title": "POST-RECOVERY MONITORING & PREVENTION",
    "text": "Recovering rankings is only half the job, staying recovered is the other half."
  },
  {
    "title": "What We Do",
    "text": "* Ranking & Traffic Recovery Tracking: Monitoring the actual trajectory back toward previous performance. * Ongoing Compliance Monitoring: Watching for any drift back toward the practices that caused the original issue. * Preventive Technical Audits: Catching new issues before they compound into another penalty. * Documentation for Future Reference: Keeping a clear record of what happened and what was done, in case questions arise later. Recovery work often surfaces broader SEO gaps too - see our SEO Strategy & Consulting page for building a stronger, more resilient long-term foundation. Manual Action or Algorithmic Drop, Which One Are You Dealing With? The first, most important question in any recovery determines everything that follows."
  },
  {
    "title": "Manual Action",
    "text": "A human reviewer at Google has flagged your site specifically, and you'll see a notice directly in Google Search Console under Manual Actions. This has a defined process: fix the specific violation, then submit a reconsideration request."
  },
  {
    "title": "Algorithmic Update Impact",
    "text": "No notice appears anywhere, your traffic simply dropped, often correlating with a known Google algorithm update date. There's no request to submit here; recovery means genuinely improving the quality signals the update evaluates, then waiting for the next reassessment."
  },
  {
    "title": "Something Else Entirely",
    "text": "Sometimes a traffic drop isn't a penalty at all, a botched migration, a technical error, a seasonal shift, or a legitimate competitor improvement can all look like a penalty from the outside. Ruling this out first prevents chasing a fix for a problem that was never actually a penalty. Confusing these three is the single most common reason recovery attempts stall, the diagnosis has to come first, every time. Why Your Business Needs Real Penalty Recovery Support A traffic drop left unaddressed, or addressed with the wrong fix, tends to compound rather than resolve on its own. The Wrong Fix Wastes the Time Recovery Actually Needs Treating an algorithmic drop like a manual action, or the reverse, delays genuine recovery while resources go toward the wrong problem. Reconsideration Requests Get One Real Shot at a Time A poorly documented or premature request often gets denied, costing another full review cycle before you can try again. Panic-Driven Changes Can Make Things Worse Making sweeping, undocumented changes to a penalized site can obscure what actually caused the problem, complicating diagnosis further. Recovery Without Prevention Risks Repeating the Cycle Fixing the immediate issue without addressing what led to it in the first place leaves the door open for the same problem to happen again. Why We're Different"
  },
  {
    "title": "One In-House Team",
    "text": "Technical, content, and link specialists investigate together, so the diagnosis reflects a full picture, not one narrow angle on the problem. Diagnosis Before Action, Always We don't start fixing things before we've confirmed what actually happened, a wrong guess here costs real time."
  },
  {
    "title": "Local & International Recovery Experience",
    "text": "Based in Dhaka. Supporting recovery for clients across Bangladesh, the US, UK, Australia, Canada, and UAE. Documented, Evidence-Based Process Every step of remediation is documented, since that documentation is often what a reconsideration request actually depends on."
  },
  {
    "title": "Penalty Diagnosis",
    "text": "A clear determination of whether you're facing a manual action, an algorithmic impact, or something else entirely."
  },
  {
    "title": "Manual Action Remediation",
    "text": "Violation-specific fixes addressing exactly what Google flagged, not a generic cleanup."
  },
  {
    "title": "Algorithmic Recovery Strategy",
    "text": "Genuine quality and E-E-A-T improvements addressing what the specific update actually evaluates."
  },
  {
    "title": "Reconsideration Request Support",
    "text": "A carefully drafted, evidence-backed request built to give you the strongest possible shot."
  },
  {
    "title": "Post-Recovery Monitoring",
    "text": "Ongoing tracking to confirm recovery holds, and to catch any drift back toward the original issue. Calm, Documented Process Clear communication and evidence at every stage, especially when the situation itself feels uncertain."
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
