import { PosterButton } from '../../../Kinetic'

export default function BangladeshWorldwide() {
  return (
    <div className="mt-28 border-2 border-frame-border bg-frame-muted/20 p-6 md:p-12">
      <span className="text-xs font-black uppercase tracking-[0.28em] text-frame-accent">
        Domestic &amp; Global Delivery
      </span>
      <h2 className="mt-2 font-heading text-2xl md:text-4xl font-bold uppercase tracking-tight text-frame-fg">
        iOS App Development Services Across Bangladesh &amp; Worldwide
      </h2>
      <div className="mt-10 grid gap-6 md:grid-cols-3 border-2 border-frame-border bg-frame-muted/10 p-7 sm:p-8 md:p-10">
        <p className="text-sm sm:text-base font-medium leading-relaxed text-frame-muted-fg">
          Framecipher provides iOS app development services from Dhaka, Bangladesh for businesses, startups, and organizations across Bangladesh and international markets.
        </p>
        <p className="md:col-span-2 text-sm sm:text-base font-medium leading-relaxed text-frame-muted-fg">
          We work with clients based in Dhaka, Chattogram, Sylhet, Rajshahi, Khulna, Gazipur, Narayanganj, and other locations across Bangladesh. Our remote development workflow also supports businesses in the USA, UK, Australia, Canada, UAE, and other international markets.
        </p>
        <p className="md:col-span-3 text-sm sm:text-base font-semibold leading-relaxed text-frame-fg">
          Whether you need an MVP, a customer-facing application, an internal business tool, or a larger digital product, we manage strategy, design, development, integration, testing, and release through one in-house team.
        </p>
      </div>
      <div className="mt-8">
        <PosterButton href="/contact">Start Your iOS App Project &rarr;</PosterButton>
      </div>
    </div>
  )
}