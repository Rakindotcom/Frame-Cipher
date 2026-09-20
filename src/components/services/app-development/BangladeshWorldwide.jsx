import { PosterButton } from '../../Kinetic'

export default function BangladeshWorldwide() {
  return (
    <div className="mt-28 border-2 border-frame-border bg-frame-muted/20 p-6 md:p-12">
      <span className="text-xs font-black uppercase tracking-[0.28em] text-frame-accent">
        Global Delivery &amp; Domestic Reach
      </span>
      <h2 className="mt-2 font-heading text-2xl md:text-4xl font-bold uppercase tracking-tight text-frame-fg">
        App Development Services in Bangladesh &amp; Worldwide
      </h2>
      <div className="mt-6 grid gap-6 md:grid-cols-2">
        <p className="text-sm md:text-base font-medium leading-relaxed text-frame-muted-fg">
          Framecipher provides app development services for businesses across Bangladesh, including Dhaka, as well as international clients.
        </p>
        <p className="text-sm md:text-base font-medium leading-relaxed text-frame-muted-fg">
          We work with products targeting markets such as the UAE, US, UK, Australia, and Canada, adapting the technology, integrations, user experience, and release process to the project&apos;s requirements.
        </p>
        <p className="text-sm md:text-base font-medium leading-relaxed text-frame-muted-fg">
          For Bangladesh-focused products, we can support relevant local integrations such as bKash or Nagad where applicable. International products may require different payment providers, business systems, or market-specific requirements.
        </p>
        <p className="text-sm md:text-base font-semibold leading-relaxed text-frame-fg border-2 border-frame-border bg-frame-bg p-5 flex items-center">
          Our goal is to build the right application for the product and market rather than apply the same development approach to every client.
        </p>
      </div>
      <div className="mt-8">
        <PosterButton href="/contact">Start Your Project Consultation &rarr;</PosterButton>
      </div>
    </div>
  )
}