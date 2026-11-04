import Link from 'next/link'
import SectionButton from './SectionButton'

const calculatorItems = [
  {
    title: 'Google Ads ROI',
    platform: 'Google Ads',
    description: 'Calculate second-price auction CPC discounts, Quality Score savings, and eligible search impression share.',
    tag: 'Search & PMax',
    href: '/calculators/google-ads',
    equation: {
      leftSide: 'Actual CPC',
      numerator: 'Ad Rank (Competitor Below)',
      denominator: 'Your Quality Score',
      suffix: '+ $0.01',
    },
  },
  {
    title: 'Meta Ads ROAS',
    platform: 'Meta (FB & IG)',
    description: 'Model purchase conversion rates, frequency fatigue thresholds, blended ROAS, and net margin breakeven.',
    tag: 'Social & DTC',
    href: '/calculators/meta-ads',
    equation: {
      leftSide: 'Blended ROAS',
      numerator: 'Attributed Revenue',
      denominator: 'Total Ad Spend',
    },
  },
  {
    title: 'TikTok Ads CPM',
    platform: 'TikTok Ads',
    description: 'Forecast 2s and 6s video hook retention drop-offs, completed views, and target cost per engagement.',
    tag: 'Short-Form Video',
    href: '/calculators/tiktok-ads',
    equation: {
      leftSide: 'Effective CPM',
      numerator: 'Total Ad Spend',
      denominator: 'Total Impressions',
      suffix: '× 1,000',
    },
  },
  {
    title: 'LinkedIn B2B CAC',
    platform: 'LinkedIn Ads',
    description: 'Simulate high-ticket deal economics, pipeline qualification drop-off, and true Customer Acquisition Cost.',
    tag: 'B2B & Pipeline',
    href: '/calculators/linkedin-ads',
    equation: {
      leftSide: 'True CAC',
      numerator: 'Total Pipeline Spend',
      denominator: 'Closed Won Clients',
    },
  },
  {
    title: 'Amazon ACoS / TACoS',
    platform: 'Amazon Ads',
    description: 'Distinguish direct ad spend ACoS from total organic-blended TACoS to protect retail buy-box margins.',
    tag: 'eCommerce Retail',
    href: '/calculators/amazon-ads',
    equation: {
      leftSide: 'TACoS',
      numerator: 'Total Ad Spend',
      denominator: 'Total Brand Sales',
    },
  },
  {
    title: 'Remarketing & Retention',
    platform: 'Retargeting',
    description: 'Project cart abandoner recovery value, warm-audience conversion lifts, and maximum profitable bid caps.',
    tag: 'Warm Audience',
    href: '/calculators/remarketing',
    equation: {
      leftSide: 'Recovered Rev',
      expression: 'Abandoners × Conv% × AOV',
    },
  },
  {
    title: 'Lead Gen Funnel',
    platform: 'Inquiries & CRM',
    description: 'Model cost per qualified lead (SQL), discovery call show-up rates, and final sales closing profitability.',
    tag: 'High-Ticket Leads',
    href: '/calculators/lead-generation-ads',
    equation: {
      leftSide: 'Cost / Deal',
      numerator: 'Cost Per Lead (CPL)',
      denominator: 'SQL% × Close Rate%',
    },
  },
  {
    title: 'ChatGPT & AI Ads',
    platform: 'Conversational AI',
    description: 'Simulate sponsored recommendation bids, conversational intent CTR, and query-level ROI.',
    tag: 'LLM Sponsored',
    href: '/calculators/chatgpt-ads',
    equation: {
      leftSide: 'AI Search ROI',
      numerator: 'Net Generated Revenue',
      denominator: 'AI Ad Spend',
    },
  },
  {
    title: 'Microsoft & Bing Ads',
    platform: 'Microsoft Ads',
    description: 'Use lower CPCs and high-purchasing-power desktop demographics on Bing and Yahoo networks.',
    tag: 'Desktop High-AOV',
    href: '/calculators/microsoft-ads',
    equation: {
      leftSide: 'Net Margin',
      expression: 'Revenue − (Ad Spend + COGS)',
    },
  },
  {
    title: 'Pinterest Ads ROAS',
    platform: 'Pinterest Ads',
    description: 'Forecast visual shopping discovery, repin viral organic lift, and long-tail lifestyle purchases.',
    tag: 'Visual Shopping',
    href: '/calculators/pinterest-ads',
    equation: {
      leftSide: 'Blended ROAS',
      numerator: 'Direct Sales + Repin Value',
      denominator: 'Total Ad Spend',
    },
  },
]

function TextbookEquation({ equation }) {
  if (!equation) return null

  return (
    <div className="rounded-md border border-white/[0.06] bg-[#141516] p-3.5 transition-colors duration-200 group-hover:border-white/[0.12]">
      <div className="mb-2 flex items-center justify-between font-mono">
        <span className="text-[10px] uppercase tracking-wider text-zinc-500">
          Textbook Equation
        </span>
        <span className="text-[10px] uppercase tracking-wider text-frame-accent">
          Formula
        </span>
      </div>

      <div className="flex flex-wrap items-center gap-2 text-xs sm:text-sm">
        {/* Left Side */}
        <span className="font-medium text-frame-accent">
          {equation.leftSide}
        </span>

        <span className="text-zinc-500">=</span>

        {/* Right Side: Stacked Fraction or Direct Expression */}
        {equation.numerator && equation.denominator ? (
          <div className="inline-flex items-center gap-1.5">
            <div className="inline-flex flex-col items-center">
              {/* Numerator */}
              <span className="border-b border-white/20 px-1 pb-0.5 text-center text-[11px] font-medium text-zinc-200 leading-tight">
                {equation.numerator}
              </span>
              {/* Denominator */}
              <span className="px-1 pt-0.5 text-center text-[10px] text-zinc-400 leading-tight">
                {equation.denominator}
              </span>
            </div>
            {equation.suffix && (
              <span className="text-[11px] font-medium text-zinc-300">
                {equation.suffix}
              </span>
            )}
          </div>
        ) : (
          <span className="text-[11px] font-medium text-zinc-300">
            {equation.expression}
          </span>
        )}
      </div>
    </div>
  )
}

export default function HomeCalculatorsGrid() {
  return (
    <section className="relative isolate border-b border-white/[0.08] bg-[#09090B] px-4 py-20 text-white md:px-8 md:py-28">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mb-12 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium leading-[0.96] tracking-tight text-white">
              Ad Spend Math.{' '}
              <span className="italic text-frame-accent">
                Zero Guesswork.
              </span>
            </h2>
          </div>
          <div className="max-w-md space-y-3">
            <p className="text-base font-normal leading-relaxed text-zinc-300 md:text-lg">
              Stop guessing your advertising margins. Model your exact unit economics, Quality Score CPC discounts, and breakeven ROAS before spending a single dollar.
            </p>
            <div className="flex items-center gap-4 text-xs text-zinc-400">
              <span className="flex items-center gap-1.5"><span className="text-emerald-400">Included:</span> Textbook Formulas</span>
              <span className="flex items-center gap-1.5"><span className="text-emerald-400">Included:</span> PDF Export</span>
            </div>
          </div>
        </div>

        {/* 10-Engine Symmetrical Linear/Raycast Continuum Grid (Shared 1px Hairlines, Zero Box Clutter) */}
        <div className="relative overflow-hidden rounded-xl border border-white/[0.08] bg-white/[0.08] grid gap-px sm:grid-cols-2 lg:grid-cols-4 before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-gradient-to-r before:from-transparent before:via-frame-accent/40 before:to-transparent before:z-10">
          {calculatorItems.map((item, index) => (
            <article
              key={item.href}
              className="group relative flex min-h-[300px] flex-col justify-between bg-[#121214] p-6 transition-colors duration-200 hover:bg-[#151518] sm:p-7"
            >
              <div>
                {/* Header Tag & Engine Number */}
                <div className="flex items-center justify-between border-b border-white/[0.06] pb-3">
                  <span className="font-mono text-xs text-frame-accent">
                    {item.tag}
                  </span>
                  <span className="font-mono text-xs text-zinc-500 tabular-nums">
                    0{index + 1}
                  </span>
                </div>

                {/* Title */}
                <h3 className="mt-5 font-heading text-xl font-medium text-white transition-colors duration-200 group-hover:text-frame-accent sm:text-2xl">
                  <Link href={item.href} className="after:absolute after:inset-0 after:content-['']">
                    {item.title}
                  </Link>
                </h3>

                {/* Description */}
                <p className="mt-3 text-xs md:text-sm font-normal leading-relaxed text-zinc-400 transition-colors duration-200 group-hover:text-zinc-200">
                  {item.description}
                </p>
              </div>

              {/* Bottom Area: Textbook Stacked Equation & Action */}
              <div className="mt-6 pt-4 border-t border-white/[0.06]">
                <div className="mb-4">
                  <TextbookEquation equation={item.equation} />
                </div>
                <div
                  className="inline-flex min-h-[44px] h-[44px] w-full items-center justify-center rounded-full border border-white/[0.14] bg-white/[0.03] px-4 text-[13px] font-medium text-white transition-colors duration-200 group-hover:border-white/[0.25] group-hover:bg-white/[0.08]"
                  aria-hidden="true"
                >
                  <span>Launch calculator</span>
                  <span className="ml-2 text-base transition-transform duration-200 group-hover:translate-x-1">&rarr;</span>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Section Footer / Master Hub & Audit CTAs */}
        <div className="relative overflow-hidden mt-12 flex flex-col items-center justify-between gap-6 rounded-xl border border-white/[0.08] bg-[#121214] p-6 md:flex-row md:p-8 before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-gradient-to-r before:from-transparent before:via-frame-accent/40 before:to-transparent">
          <div>
            <h3 className="font-heading text-xl font-medium text-white md:text-2xl">
              Need Multi-Channel Budget Allocation?
            </h3>
            <p className="mt-1 text-xs md:text-sm text-zinc-400">
              Compare all 10 platforms side-by-side or download your branded PDF media plan with company forecasts.
            </p>
          </div>
          <div className="flex shrink-0 items-center">
            <SectionButton href="/calculators">
              All 10 Calculators
            </SectionButton>
          </div>
        </div>
      </div>
    </section>
  )
}
