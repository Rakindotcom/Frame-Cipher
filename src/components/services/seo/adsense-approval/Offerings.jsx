import { SectionIntro, PosterButton } from '../../../Kinetic'

export default function Offerings({ service }) {
  const offerings = service?.offerings || [
  {
    "title": "CONTENT DEPTH & ORIGINALITY ASSESSMENT",
    "description": "Google evaluates whether your site actually offers something worth showing ads alongside. What We Do A site with ten thin, similar-sounding pages usually fares worse than one with fewer pages that actually say something substantive.",
    "bullets": [
      "Content Volume Review: Confirming your site has enough substantive content to meet AdSense's expectations.",
      "Originality & Quality Assessment: Checking for thin, duplicate, or low-effort content that commonly triggers rejection.",
      "Content Gap Identification: Flagging where additional content is needed before applying.",
      "Restricted Content Category Check: Reviewing for any content categories AdSense specifically restricts or prohibits."
    ]
  },
  {
    "title": "REQUIRED PAGE REVIEW",
    "description": "Google checks for specific pages that establish your site as a legitimate, transparent operation. What We Do Missing one of these pages entirely is one of the more common, easily avoidable reasons applications get rejected.",
    "bullets": [
      "Privacy Policy Review: Confirming a proper privacy policy exists and covers what AdSense actually expects.",
      "About Page Assessment: Making sure visitors and Google can clearly understand who's behind the site.",
      "Contact Page Verification: Confirming legitimate, working contact information is genuinely accessible.",
      "Terms of Service Check: Reviewing for a terms page where the site's content or functionality calls for one."
    ]
  },
  {
    "title": "SITE STRUCTURE & NAVIGATION REVIEW",
    "description": "Google needs to be able to understand and crawl your site cleanly, the same as any search engine would. What We Do A site that's technically live but poorly organized often reads to both visitors and reviewers as unfinished.",
    "bullets": [
      "Navigation Clarity Assessment: Confirming visitors can actually find their way around the site logically.",
      "Site Structure Review: Checking for a clear hierarchy that doesn't confuse crawlers or visitors.",
      "Mobile Usability Check: Verifying the site performs properly on mobile, since that's how a large share of AdSense review traffic behaves.",
      "Broken Link & Error Page Cleanup: Fixing dead links and error pages that reflect poorly on overall site quality."
    ]
  },
  {
    "title": "AD PLACEMENT PLANNING",
    "description": "Preparing for compliant ad placement before your first ad ever goes live. What We Do Planning placement before approval prevents a second round of policy issues immediately after getting through the first one.",
    "bullets": [
      "Placement Strategy Review: Planning ad positions that meet policy guidelines while still supporting user experience.",
      "Policy-Compliant Layout Planning: Avoiding placements that violate spacing, labeling, or click-incentive rules.",
      "Ad Density Guidance: Making sure planned ad volume doesn't overwhelm actual content.",
      "Post-Approval Setup Support: Helping configure ad units correctly once approval comes through."
    ]
  },
  {
    "title": "RE-APPLICATION SUPPORT AFTER REJECTION",
    "description": "Getting a rejected site genuinely ready before trying again, not just resubmitting and hoping. What We Do A site that's struggled with AdSense sometimes has broader SEO issues too - see our SEO Audit page for a fuller technical and content review.",
    "bullets": [
      "Rejection Reason Analysis: Reviewing available feedback and site condition to identify the likely actual cause.",
      "Targeted Remediation: Fixing the specific issues most likely responsible, not a generic full-site overhaul.",
      "Pre-Resubmission Review: A final check before you reapply, confirming the identified issues are genuinely resolved.",
      "Honest Timing Guidance: Advising on how much additional content or time might genuinely be needed before resubmitting."
    ]
  },
  {
    "title": "What Actually Causes AdSense Rejection",
    "description": "Understanding the common causes makes the fix process a lot less mysterious than a generic rejection notice suggests. Insufficient or Thin Content A site with too few pages, or pages that don't say much, is one of the most common rejection reasons, Google wants to see genuine substance before showing ads next to it. Missing Required Pages No privacy policy, no clear way to contact the site owner, no page explaining who's behind it, these gaps read as a red flag regardless of how good the actual content is. Navigation & Structure Issues A confusing site structure makes it hard for both visitors and Google's review process to understand what the site actually offers. Policy Violations in Existing Content Certain content categories, or content that violates specific AdSense program policies, will block approval regardless of how well everything else is set up. A Site That Simply Isn't Ready Yet Sometimes the honest answer is that a site needs more time and more content before it makes sense to apply at all, a premature application often does more harm than waiting.",
    "bullets": []
  }
]
  const whyMatters = service?.whyMatters || [
  "A generic checklist rarely explains which specific issue is actually blocking your particular site.",
  "A Second Rejection Costs More Than the First",
  "Resubmitting without genuinely fixing the underlying issue often means another wait, sometimes longer, for the same outcome.",
  "Generic Advice Doesn't Diagnose Your Specific Site",
  "Most AdSense advice online is generic best practice, actually reviewing your site against it, and telling you what specifically applies, is different work.",
  "Policies Shift Over Time",
  "Advice from a blog post written years ago may not reflect Google's current AdSense requirements, reviewing against what's actually current matters.",
  "Sometimes Waiting Is the Honest Answer",
  "A site genuinely not ready yet benefits more from honest timing guidance than from a rushed application likely to fail again."
]
  const whyChooseUs = service?.whyChooseUs || [
  {
    "title": "Most rejected AdSense applications fail for a small, repeatable set of reasons, thin content, missing required pages, unclear navigation, ad placement that violates policy, and most of those are fixable once someone actually identifies which one applies to your specific site. We review against Google's current published requirements rather than outdated advice circulating from years-old blog posts, because AdSense's policies genuinely do shift over time. One thing we won't do is tell you your site is ready when it isn't, since a second rejection often takes longer to recover from than the first delay would have.",
    "text": "\"AdSense rejection almost never means your business is the problem. It usually means something specific and fixable, content depth, a missing page, unclear navigation, that nobody explained clearly enough to actually go fix.\" Policy-Current Review | Honest Readiness Assessment | Fixes, Not Just a Checklist"
  },
  {
    "title": "Our Google AdSense Approval Services",
    "text": "Getting a site ready for AdSense touches content, structure, and technical setup together."
  },
  {
    "title": "CONTENT DEPTH & ORIGINALITY ASSESSMENT",
    "text": "Google evaluates whether your site actually offers something worth showing ads alongside."
  },
  {
    "title": "What We Do",
    "text": "* Content Volume Review: Confirming your site has enough substantive content to meet AdSense's expectations. * Originality & Quality Assessment: Checking for thin, duplicate, or low-effort content that commonly triggers rejection. * Content Gap Identification: Flagging where additional content is needed before applying. * Restricted Content Category Check: Reviewing for any content categories AdSense specifically restricts or prohibits. A site with ten thin, similar-sounding pages usually fares worse than one with fewer pages that actually say something substantive."
  },
  {
    "title": "REQUIRED PAGE REVIEW",
    "text": "Google checks for specific pages that establish your site as a legitimate, transparent operation."
  },
  {
    "title": "What We Do",
    "text": "* Privacy Policy Review: Confirming a proper privacy policy exists and covers what AdSense actually expects. * About Page Assessment: Making sure visitors and Google can clearly understand who's behind the site. * Contact Page Verification: Confirming legitimate, working contact information is genuinely accessible. * Terms of Service Check: Reviewing for a terms page where the site's content or functionality calls for one. Missing one of these pages entirely is one of the more common, easily avoidable reasons applications get rejected."
  },
  {
    "title": "SITE STRUCTURE & NAVIGATION REVIEW",
    "text": "Google needs to be able to understand and crawl your site cleanly, the same as any search engine would."
  },
  {
    "title": "What We Do",
    "text": "* Navigation Clarity Assessment: Confirming visitors can actually find their way around the site logically. * Site Structure Review: Checking for a clear hierarchy that doesn't confuse crawlers or visitors. * Mobile Usability Check: Verifying the site performs properly on mobile, since that's how a large share of AdSense review traffic behaves. * Broken Link & Error Page Cleanup: Fixing dead links and error pages that reflect poorly on overall site quality. A site that's technically live but poorly organized often reads to both visitors and reviewers as unfinished."
  },
  {
    "title": "AD PLACEMENT PLANNING",
    "text": "Preparing for compliant ad placement before your first ad ever goes live."
  },
  {
    "title": "What We Do",
    "text": "* Placement Strategy Review: Planning ad positions that meet policy guidelines while still supporting user experience. * Policy-Compliant Layout Planning: Avoiding placements that violate spacing, labeling, or click-incentive rules. * Ad Density Guidance: Making sure planned ad volume doesn't overwhelm actual content. * Post-Approval Setup Support: Helping configure ad units correctly once approval comes through. Planning placement before approval prevents a second round of policy issues immediately after getting through the first one."
  },
  {
    "title": "RE-APPLICATION SUPPORT AFTER REJECTION",
    "text": "Getting a rejected site genuinely ready before trying again, not just resubmitting and hoping."
  },
  {
    "title": "What We Do",
    "text": "* Rejection Reason Analysis: Reviewing available feedback and site condition to identify the likely actual cause. * Targeted Remediation: Fixing the specific issues most likely responsible, not a generic full-site overhaul. * Pre-Resubmission Review: A final check before you reapply, confirming the identified issues are genuinely resolved. * Honest Timing Guidance: Advising on how much additional content or time might genuinely be needed before resubmitting. A site that's struggled with AdSense sometimes has broader SEO issues too - see our SEO Audit page for a fuller technical and content review."
  },
  {
    "title": "What Actually Causes AdSense Rejection",
    "text": "Understanding the common causes makes the fix process a lot less mysterious than a generic rejection notice suggests."
  },
  {
    "title": "Insufficient or Thin Content",
    "text": "A site with too few pages, or pages that don't say much, is one of the most common rejection reasons, Google wants to see genuine substance before showing ads next to it."
  },
  {
    "title": "Missing Required Pages",
    "text": "No privacy policy, no clear way to contact the site owner, no page explaining who's behind it, these gaps read as a red flag regardless of how good the actual content is."
  },
  {
    "title": "Navigation & Structure Issues",
    "text": "A confusing site structure makes it hard for both visitors and Google's review process to understand what the site actually offers."
  },
  {
    "title": "Policy Violations in Existing Content",
    "text": "Certain content categories, or content that violates specific AdSense program policies, will block approval regardless of how well everything else is set up. A Site That Simply Isn't Ready Yet Sometimes the honest answer is that a site needs more time and more content before it makes sense to apply at all, a premature application often does more harm than waiting. Why Your Business Needs Real AdSense Approval Support A generic checklist rarely explains which specific issue is actually blocking your particular site. A Second Rejection Costs More Than the First Resubmitting without genuinely fixing the underlying issue often means another wait, sometimes longer, for the same outcome. Generic Advice Doesn't Diagnose Your Specific Site Most AdSense advice online is generic best practice, actually reviewing your site against it, and telling you what specifically applies, is different work."
  },
  {
    "title": "Policies Shift Over Time",
    "text": "Advice from a blog post written years ago may not reflect Google's current AdSense requirements, reviewing against what's actually current matters."
  },
  {
    "title": "Sometimes Waiting Is the Honest Answer",
    "text": "A site genuinely not ready yet benefits more from honest timing guidance than from a rushed application likely to fail again. Why We're Different"
  },
  {
    "title": "One In-House Team",
    "text": "Content, technical, and structural review handled together, so recommendations account for the whole site, not just one narrow checklist item. Honest, Not Just Optimistic We'll tell you directly whether your site is ready, what needs to change, and how, including when the honest answer is \"not yet.\""
  },
  {
    "title": "Local & International AdSense Experience",
    "text": "Based in Dhaka. Reviewing sites for clients across Bangladesh, the US, UK, Australia, Canada, and UAE. We Prepare, We Don't Promise Final approval is always Google's decision, we prepare your site to meet their requirements as thoroughly as possible, and we're upfront that no one can override that review process."
  },
  {
    "title": "Content Depth & Originality Review",
    "text": "An honest assessment of whether your content meets AdSense's actual expectations."
  },
  {
    "title": "Required Page Review",
    "text": "Privacy policy, about page, and contact information checked and fixed where missing."
  },
  {
    "title": "Site Structure & Navigation Review",
    "text": "Clarity and crawlability issues addressed before you apply."
  },
  {
    "title": "Ad Placement Planning",
    "text": "A compliant layout strategy ready before your first ad goes live."
  },
  {
    "title": "Re-Application Support",
    "text": "Targeted fixes and honest guidance if you've already been rejected once."
  },
  {
    "title": "Straight Answers",
    "text": "Clear guidance on where your site actually stands, not a generic pass/fail checklist."
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
