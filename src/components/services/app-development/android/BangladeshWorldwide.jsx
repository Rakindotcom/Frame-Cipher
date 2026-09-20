import { PosterButton } from '../../../Kinetic'

export default function BangladeshWorldwide() {
  return (
    <div className="mt-28 border-2 border-frame-border bg-frame-muted/20 p-6 md:p-12">
      <span className="text-xs font-black uppercase tracking-[0.28em] text-frame-accent">
        Domestic Presence &amp; Global Reach
      </span>
      <h2 className="mt-2 font-heading text-2xl md:text-4xl font-bold uppercase tracking-tight text-frame-fg">
        Android App Development Services Across Bangladesh &amp; Worldwide
      </h2>
      <p className="mt-4 text-base font-medium leading-relaxed text-frame-muted-fg">
        Framecipher provides Android app development services for startups, SMEs, established businesses, and digital product teams across Bangladesh and international markets.
      </p>

      <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3">
        <div className="border-2 border-frame-border bg-frame-bg p-6">
          <h3 className="font-heading text-lg font-bold uppercase text-frame-fg">
            Android App Development in Bangladesh
          </h3>
          <p className="mt-3 text-sm font-medium leading-relaxed text-frame-muted-fg">
            We work with businesses in Dhaka, Gazipur, Chattogram, Narayanganj, Sylhet, Cumilla, Rajshahi, Khulna, Rangpur, Barishal, and Mymensingh, as well as clients in other parts of Bangladesh.
          </p>
          <p className="mt-3 text-sm font-medium leading-relaxed text-frame-muted-fg">
            For Bangladesh-focused Android products, we can plan around the device range, connectivity, language, payment workflows, and business systems relevant to the target users. Where required and technically supported, this can include local services such as bKash and Nagad.
          </p>
        </div>

        <div className="border-2 border-frame-border bg-frame-bg p-6">
          <h3 className="font-heading text-lg font-bold uppercase text-frame-fg">
            Android App Development for International Businesses
          </h3>
          <p className="mt-3 text-sm font-medium leading-relaxed text-frame-muted-fg">
            We also work with businesses and product teams serving customers in the United States, United Kingdom, Canada, Australia, and UAE.
          </p>
          <p className="mt-3 text-sm font-medium leading-relaxed text-frame-muted-fg">
            International projects can be planned around the target market, supported devices, third-party services, payment providers, backend systems, and Google Play release requirements.
          </p>
        </div>

        <div className="border-2 border-frame-border bg-frame-bg p-6">
          <h3 className="font-heading text-lg font-bold uppercase text-frame-fg">
            Remote Android Development
          </h3>
          <p className="mt-3 text-sm font-medium leading-relaxed text-frame-muted-fg">
            You do not need to be based in Dhaka or Bangladesh to work with Framecipher. We can collaborate remotely through online consultations, project management, design reviews, development updates, testing, and release coordination.
          </p>
        </div>
      </div>

      <div className="mt-8 border-t-2 border-frame-border pt-6">
        <p className="text-sm md:text-base font-semibold text-frame-fg">
          Whether you&apos;re launching a local business app in Bangladesh or building an Android product for an international audience, our development process is structured around your users, technical requirements, and business goals.
        </p>
        <div className="mt-6">
          <PosterButton href="/contact">Book an Android Consultation &rarr;</PosterButton>
        </div>
      </div>
    </div>
  )
}