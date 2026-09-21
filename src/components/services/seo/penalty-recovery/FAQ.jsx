import { SectionIntro } from '../../../Kinetic'

const faqs = [
  {
    q: 'What exactly counts as a Google penalty?',
    a: 'In everyday language, \u201Cpenalty\u201D is used loosely. Technically, Google issues formal manual actions when human reviewers determine that a site violates Google\u2019s spam policies, and it separately flags security issues. A traffic drop after a core or spam update is not the same as a manual action. The recovery work only becomes clear once we know which category applies.',
  },
  {
    q: 'How do I know if my site really has a manual action?',
    a: 'Open Google Search Console and check the Manual Actions report. If it lists a manual action, Google has identified a specific violation such as unnatural links, thin content, or spam. A drop in traffic alone does not mean there is a manual action. The Security Issues report is separate.',
  },
  {
    q: "What's the difference between a manual action and an algorithmic impact?",
    a: 'A manual action is a human review decision applied to a site or specific pages, listed in Search Console, and generally recoverable through remediation plus a reconsideration request. An algorithmic impact is a change in how a ranking system evaluates content after an update. Recovery focuses on improving quality and usefulness rather than submitting a review request.',
  },
  {
    q: 'How long does Google penalty recovery take?',
    a: 'It depends on the cause. A technical fix may recover quickly after Google re-crawls affected pages. Content improvement after a core update usually takes several weeks or longer to be reflected. A manual action requires fixing the violation and then receiving a review decision from Google, which also takes time. We report realistic timelines rather than guaranteeing dates.',
  },
  {
    q: 'Should I disavow links if Google says I have unnatural links?',
    a: 'Google says most sites do not need to use the disavow tool, and that using it unnecessarily can harm a site. For a genuine unnatural-links issue, Google recommends trying to remove the violating links first and only considering disavow where appropriate. We investigate the link profile before recommending removal or disavow.',
  },
  {
    q: 'Does a manual action remove my site from Google?',
    a: 'It depends on the action. Some manual actions apply to the whole site, while others only affect specific pages or sections. Google may restrict visibility while the violation remains unfixed. The priority is correcting the actual issue rather than resubmitting a request before the work is done.',
  },
  {
    q: 'Can you submit a reconsideration request for me?',
    a: 'You own the Search Console account, and reconsideration requests are submitted through it. We prepare the remediation work, organize the documentation of what was fixed and how, and guide you through submitting a clear, evidence-supported request when the site is genuinely ready.',
  },
  {
    q: 'Do you guarantee the manual action will be removed?',
    a: 'No. The final decision belongs to Google after it reviews the request. We guarantee an honest, documented remediation process and a complete reconsideration submission, but we cannot promise approval. We also prepare the request so that if Google adds new issues to the action, the next steps are clear.',
  },
  {
    q: 'My site was hacked or shows spam pages. Is that a manual action?',
    a: 'Usually not in the same category. Google treats hacked sites under a separate Security Issues report, and the cleanup and review process uses a different flow from standard manual-action reconsideration. If both exist, we handle them as related but distinct problems.',
  },
  {
    q: 'Do you work with Bangladeshi websites too?',
    a: 'Yes. We support both Bangladeshi businesses and international websites. Our recovery analysis can account for local search behavior, Bangla or English content, Bangladesh-focused SERPs, and technical condition, alongside work for markets such as the US, UK, Australia, Canada, and the UAE.',
  },
  {
    q: 'How much does penalty recovery cost?',
    a: 'Packages start at \u09F325,000+ for a Diagnostic Review, \u09F360,000+ for Manual Action Recovery, and \u09F380,000+ for Google Update / Algorithmic Recovery. Complex multi-issue situations are scoped after diagnosis. Final pricing depends on the website, investigation scope, and the amount of remediation required.',
  },
  {
    q: 'What if my traffic drop is not a penalty at all?',
    a: 'That is exactly why we diagnose first. A decline can come from a technical or migration problem, an indexing change, a security issue, lower search demand, or stronger competition. If the diagnosis shows no penalty exists, we tell you that honestly and recommend the relevant recovery path instead of selling penalty work.',
  },
]

export default function FAQ() {
  return (
    <section id="faq" className="border-t-2 border-frame-border bg-frame-muted/30 px-4 py-20 md:px-8 md:py-28 scroll-mt-20">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro eyebrow="Common questions" title="Google Penalty Recovery FAQ">
          Honest answers to the questions businesses ask us most often after losing Google
          visibility.
        </SectionIntro>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <details key={faq.q} className="group border-2 border-frame-border bg-frame-bg">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 p-6 md:p-7">
                <div className="flex items-start gap-4">
                  <span className="pt-0.5 text-xs font-black uppercase tracking-[0.2em] text-frame-accent">
                    Q{String(index + 1).padStart(2, '0')}
                  </span>
                  <h3 className="font-heading text-base md:text-lg font-bold uppercase tracking-tight text-frame-fg">
                    {faq.q}
                  </h3>
                </div>
                <span
                  aria-hidden="true"
                  className="grid h-7 w-7 shrink-0 place-items-center border-2 border-frame-border text-frame-accent transition-transform group-open:rotate-45"
                >
                  +
                </span>
              </summary>
              <div className="border-t-2 border-frame-border/60 p-6 md:p-7">
                <div className="ml-[2.75rem]">
                  <p className="text-sm font-medium leading-relaxed text-frame-muted-fg">{faq.a}</p>
                </div>
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}