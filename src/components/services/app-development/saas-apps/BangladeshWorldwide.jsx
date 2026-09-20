import { PosterButton } from '../../../Kinetic'

export default function BangladeshWorldwide() {
  return (
    <div className="mt-28 border-2 border-frame-border bg-frame-muted/20 p-6 md:p-12">
      <span className="text-xs font-black uppercase tracking-[0.28em] text-frame-accent">
        Domestic &amp; Global Reach
      </span>
      <h2 className="mt-2 font-heading text-2xl md:text-4xl font-bold uppercase tracking-tight text-frame-fg">
        SaaS App Development Services Across Bangladesh &amp; Worldwide
      </h2>
      <div className="mt-6 grid gap-6 md:grid-cols-2">
        <p className="text-sm md:text-base font-medium leading-relaxed text-frame-muted-fg">
          Framecipher provides SaaS app development services from Dhaka, Bangladesh for startups, businesses, and organizations across the country and international markets.
        </p>
        <p className="text-sm md:text-base font-medium leading-relaxed text-frame-muted-fg">
          We work with businesses in Dhaka, Chattogram, Sylhet, Rajshahi, Khulna, Gazipur, Narayanganj, and other locations across Bangladesh.
        </p>
        <p className="text-sm md:text-base font-medium leading-relaxed text-frame-muted-fg">
          Our remote development workflow also supports clients in the USA, UK, Australia, Canada, UAE, and other international markets.
        </p>
        <p className="text-sm md:text-base font-semibold leading-relaxed text-frame-fg border-2 border-frame-border bg-frame-bg p-5 flex items-center">
          For Bangladesh-focused SaaS products, local payment integrations can be considered where required. International products can be structured around regional payment, billing, data, and operational requirements based on the project scope.
        </p>
      </div>
      <div className="mt-8">
        <PosterButton href="/contact">Start Your SaaS Project &rarr;</PosterButton>
      </div>
    </div>
  )
}