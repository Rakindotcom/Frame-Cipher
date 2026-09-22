import { PageHero, PosterButton } from '../../../Kinetic'

export default function Hero() {
  return (
    <section className="relative border-2 border-frame-border bg-frame-bg">
      <PageHero
        eyebrow="Specialized Capability"
        meta="One In-House Team / Built For Results"
        number="360"
      />
      <div className="relative z-10 px-4 pb-20 pt-6 md:px-8 md:pb-28 md:pt-10 max-w-7xl mx-auto">
        <nav className="mb-8 flex flex-wrap items-center gap-2 text-[11px] md:text-xs font-bold uppercase tracking-widest text-frame-muted-fg">
          <a href="/" className="transition-colors hover:text-frame-accent">Home</a>
          <span className="text-frame-accent">/</span>
          <a href="/services" className="transition-colors hover:text-frame-accent">Services</a>
          <span className="text-frame-accent">/</span>
          <a href="/services/paid-advertising" className="transition-colors hover:text-frame-accent">Paid Advertising</a>
          <span className="text-frame-accent">/</span>
          <span className="text-frame-accent">Microsoft Ads</span>
        </nav>

        <div className="max-w-4xl">
          <h1 className="font-heading text-4xl font-bold uppercase leading-[1.05] tracking-tight text-frame-fg sm:text-5xl md:text-6xl lg:text-7xl">
            Microsoft Ads Management{' '}
            <span className="text-frame-accent">Service in Bangladesh</span>
          </h1>
          <p className="mt-6 max-w-2xl text-base font-medium leading-relaxed text-frame-muted-fg md:text-lg">
            Turn Microsoft Search Into Another Measurable Acquisition Channel
          </p>
        </div>
      </div>
      <div className="relative z-10 border-t-2 border-frame-border px-4 pb-16 md:px-8 max-w-7xl mx-auto">
        <p className="mt-8 max-w-3xl text-sm font-medium leading-relaxed text-frame-muted-fg md:text-base">
          Framecipher provides Microsoft Ads Management Service for businesses in Bangladesh and
          international markets. We build and manage Search, Shopping, audience, LinkedIn Profile
          Targeting, remarketing, and conversion tracking around your actual business goals.
        </p>
        <p className="mt-4 max-w-3xl text-sm font-medium leading-relaxed text-frame-muted-fg md:text-base">
          Instead of simply importing a Google Ads account and leaving it unchanged, we adapt
          keywords, campaign structure, bidding, audiences, network settings, and measurement to
          Microsoft Advertising. The result is a more deliberate approach to generating qualified
          leads, ecommerce sales, and measurable customer acquisition.
        </p>
        <div className="mt-10 flex flex-wrap items-center gap-6">
          <PosterButton href="#pricing">Get a Free Consultation</PosterButton>
          <a href="/services/paid-advertising" className="text-sm font-bold uppercase tracking-widest text-frame-accent transition-colors hover:text-frame-fg">
            Explore Paid Advertising →
          </a>
        </div>
      </div>
    </section>
  )
}