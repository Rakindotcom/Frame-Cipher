import Link from 'next/link'

const calculatorItems = [
  {
    title: 'Google Ads ROI',
    platform: 'Google Ads',
    description: 'Calculate second-price auction CPC discounts, Quality Score savings, and eligible search impression share.',
    tag: 'Search & PMax',
    formula: 'CPC = (Rank Competitor / QS) + $0.01',
    href: '/calculators/google-ads',
  },
  {
    title: 'Meta Ads ROAS',
    platform: 'Meta (FB & IG)',
    description: 'Model purchase conversion rates, frequency fatigue thresholds, blended ROAS, and net margin breakeven.',
    tag: 'Social & DTC',
    formula: 'ROAS = Attributed Revenue / Ad Spend',
    href: '/calculators/meta-ads',
  },
  {
    title: 'TikTok Ads CPM',
    platform: 'TikTok Ads',
    description: 'Forecast 2s and 6s video hook retention drop-offs, completed views, and target cost per engagement.',
    tag: 'Short-Form Video',
    formula: 'eCPM = (Spend / Impressions) × 1,000',
    href: '/calculators/tiktok-ads',
  },
  {
    title: 'LinkedIn B2B CAC',
    platform: 'LinkedIn Ads',
    description: 'Simulate high-ticket deal economics, pipeline qualification drop-off, and true Customer Acquisition Cost.',
    tag: 'B2B & Pipeline',
    formula: 'True CAC = Total Spend / Closed Clients',
    href: '/calculators/linkedin-ads',
  },
  {
    title: 'Amazon ACoS / TACoS',
    platform: 'Amazon Ads',
    description: 'Distinguish direct ad spend ACoS from total organic-blended TACoS to protect retail buy-box margins.',
    tag: 'eCommerce Retail',
    formula: 'TACoS = Ad Spend / Total Brand Sales',
    href: '/calculators/amazon-ads',
  },
  {
    title: 'Remarketing & Retention',
    platform: 'Retargeting',
    description: 'Project cart abandoner recovery value, warm-audience conversion lifts, and maximum profitable bid caps.',
    tag: 'Warm Audience',
    formula: 'Recovery = Abandoners × Conv% × AOV',
    href: '/calculators/remarketing',
  },
  {
    title: 'Lead Gen Funnel',
    platform: 'Inquiries & CRM',
    description: 'Model cost per qualified lead (SQL), discovery call show-up rates, and final sales closing profitability.',
    tag: 'High-Ticket Leads',
    formula: 'Cost/Deal = CPL / (SQL% × Close%)',
    href: '/calculators/lead-generation-ads',
  },
  {
    title: 'ChatGPT & AI Ads',
    platform: 'Conversational AI',
    description: 'Simulate sponsored recommendation bids, conversational intent CTR, and query-level ROI.',
    tag: 'LLM Sponsored',
    formula: 'AI ROI = Net Revenue / AI Ad Spend',
    href: '/calculators/chatgpt-ads',
  },
  {
    title: 'Microsoft & Bing Ads',
    platform: 'Microsoft Ads',
    description: 'Leverage lower CPCs and high-purchasing-power desktop demographics on Bing and Yahoo networks.',
    tag: 'Desktop High-AOV',
    formula: 'Net Margin = Revenue - Ad Spend - COGS',
    href: '/calculators/microsoft-ads',
  },
  {
    title: 'Pinterest Ads ROAS',
    platform: 'Pinterest Ads',
    description: 'Forecast visual shopping discovery, repin viral organic lift, and long-tail lifestyle purchases.',
    tag: 'Visual Shopping',
    formula: 'ROAS = Direct + Repin Sales / Spend',
    href: '/calculators/pinterest-ads',
  },
]

export default function HomeCalculatorsGrid() {
  return (
    <section className="border-t-2 border-frame-border bg-frame-bg px-4 py-20 md:px-8 md:py-32">
      <div className="mx-auto max-w-[95vw]">
        {/* Section Header */}
        <div className="mb-12 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <div className="mb-3 flex items-center gap-3">
              <span className="text-xs font-black uppercase tracking-[0.28em] text-frame-accent md:text-sm">
                Performance Math / Media Engineering
              </span>
              <span className="border border-frame-accent/40 bg-frame-accent/10 px-2 py-0.5 text-[10px] font-mono font-bold uppercase tracking-wider text-frame-accent">
                10 Free Engines
              </span>
            </div>
            <h2 className="font-heading text-[clamp(2.4rem,7vw,6.5rem)] font-bold uppercase leading-[0.85] tracking-tighter text-frame-fg">
              Ad Spend Math. Zero Guesswork.
            </h2>
          </div>
          <div className="max-w-md space-y-3">
            <p className="text-base font-medium leading-relaxed text-frame-muted-fg md:text-lg">
              Stop guessing your advertising margins. Model your exact unit economics, Quality Score CPC discounts, and breakeven ROAS before spending a single dollar.
            </p>
            <div className="flex items-center gap-4 text-xs font-mono text-frame-muted-fg">
              <span>✓ Divided Textbook Formulas</span>
              <span>✓ PDF Report Export</span>
            </div>
          </div>
        </div>

        {/* 10-Engine Grid (Matches HomeBuild / HomePillars style) */}
        <div className="grid bg-frame-border gap-px sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {calculatorItems.map((item, index) => (
            <article
              key={item.href}
              className="group relative flex min-h-[300px] flex-col justify-between bg-frame-bg p-6 transition-all duration-300 hover:bg-frame-accent sm:p-7"
            >
              <div>
                {/* Header Tag & Engine Number */}
                <div className="flex items-center justify-between">
                  <p className="text-[10px] font-black uppercase tracking-[0.28em] text-frame-accent transition-colors duration-300 group-hover:text-frame-accent-fg/80 sm:text-xs">
                    {item.tag}
                  </p>
                  <span className="font-mono text-xs font-bold text-frame-muted-fg transition-colors duration-300 group-hover:text-frame-accent-fg/70">
                    ENGINE 0{index + 1}
                  </span>
                </div>

                {/* Title */}
                <h3 className="mt-4 font-heading text-xl font-bold uppercase leading-tight tracking-tighter text-frame-fg transition-colors duration-300 group-hover:text-frame-accent-fg sm:text-2xl">
                  <Link href={item.href} className="after:absolute after:inset-0 after:content-['']">
                    {item.title}
                  </Link>
                </h3>

                {/* Description */}
                <p className="mt-3 text-xs md:text-sm font-medium leading-relaxed text-frame-muted-fg transition-colors duration-300 group-hover:text-frame-accent-fg/85">
                  {item.description}
                </p>
              </div>

              {/* Bottom Area: Formula Pill & Action */}
              <div className="mt-6 pt-4 border-t border-frame-border/60 transition-colors duration-300 group-hover:border-frame-accent-fg/20">
                <div className="mb-4 rounded bg-frame-card px-2.5 py-1.5 font-mono text-[11px] font-semibold text-frame-accent transition-colors duration-300 group-hover:bg-frame-bg/20 group-hover:text-frame-accent-fg truncate">
                  {item.formula}
                </div>
                <div
                  className="inline-flex items-center gap-2 border-b-2 border-frame-border pb-1 text-xs font-black uppercase tracking-wider text-frame-fg transition-colors duration-300 group-hover:border-frame-accent-fg group-hover:text-frame-accent-fg"
                  aria-hidden="true"
                >
                  <span>Launch Engine</span>
                  <span className="transition-transform duration-200 group-hover:translate-x-1">&rarr;</span>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Section Footer / Master Hub & Audit CTAs */}
        <div className="mt-12 flex flex-col items-center justify-between gap-6 border-2 border-frame-border bg-frame-card p-6 md:flex-row md:p-8">
          <div>
            <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-frame-accent">
              MASTER SUITE & REPORTING
            </span>
            <h3 className="mt-1 font-heading text-xl font-bold uppercase tracking-tight text-frame-fg md:text-2xl">
              Need Multi-Channel Budget Allocation?
            </h3>
            <p className="mt-1 text-xs md:text-sm text-frame-muted-fg">
              Compare all 10 platforms side-by-side or download your branded PDF media plan with company forecasts.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-4">
            <Link
              href="/calculators"
              className="inline-flex min-h-12 items-center justify-center gap-2 border-2 border-frame-accent bg-frame-accent px-6 py-3 text-xs font-black uppercase tracking-wider text-frame-accent-fg transition-all duration-200 hover:bg-transparent hover:text-frame-accent active:scale-95 md:min-h-14 md:text-sm"
            >
              <span>All 10 Calculators</span>
              <span aria-hidden="true">&rarr;</span>
            </Link>
            <Link
              href="/services/paid-advertising"
              className="inline-flex min-h-12 items-center justify-center gap-2 border-2 border-frame-border bg-transparent px-6 py-3 text-xs font-black uppercase tracking-wider text-frame-fg transition-all duration-200 hover:border-frame-fg hover:bg-frame-fg hover:text-frame-bg active:scale-95 md:min-h-14 md:text-sm"
            >
              <span>Explore Paid Ads Service</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
