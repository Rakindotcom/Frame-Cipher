import { PosterButton } from '../../../Kinetic'

export default function BangladeshWorldwide() {
  return (
    <div className="mt-28 border-2 border-frame-border bg-frame-muted/20 p-6 md:p-12">
      <span className="text-xs font-black uppercase tracking-[0.28em] text-frame-accent">
        Domestic &amp; Global Reach
      </span>
      <h2 className="mt-2 font-heading text-2xl md:text-4xl font-bold uppercase tracking-tight text-frame-fg">
        Enterprise App Development Services Across Bangladesh &amp; Worldwide
      </h2>
      <div className="mt-10 grid gap-6 md:grid-cols-2">
        <p className="flex items-start gap-3 text-sm md:text-base font-medium leading-relaxed text-frame-muted-fg md:col-span-2 border-2 border-frame-border bg-frame-bg p-6 sm:p-8">
          Framecipher provides enterprise app development services from Dhaka, Bangladesh for organizations across the country and international markets.
        </p>
        <div className="border-2 border-frame-border bg-frame-bg p-6 sm:p-8">
          <h3 className="font-heading text-sm font-bold uppercase tracking-[0.2em] text-frame-accent">
            Bangladesh Coverage
          </h3>
          <p className="mt-3 text-sm md:text-base font-medium leading-relaxed text-frame-muted-fg">
            We work with businesses in Dhaka, Chattogram, Sylhet, Rajshahi, Khulna, Gazipur, Narayanganj, and other locations across Bangladesh.
          </p>
        </div>
        <div className="border-2 border-frame-border bg-frame-bg p-6 sm:p-8">
          <h3 className="font-heading text-sm font-bold uppercase tracking-[0.2em] text-frame-accent">
            International Clients
          </h3>
          <p className="mt-3 text-sm md:text-base font-medium leading-relaxed text-frame-muted-fg">
            Our remote development workflow also supports clients in the USA, UK, Australia, Canada, UAE, and other international markets.
          </p>
        </div>
        <p className="flex items-start gap-3 text-sm md:text-base font-semibold leading-relaxed text-frame-fg md:col-span-2 border-2 border-frame-accent bg-frame-accent/5 p-6 sm:p-8">
          Enterprise requirements vary by organization. We account for existing systems, local operations, security requirements, integration dependencies, and project governance rather than applying the same implementation to every market.
        </p>
      </div>
      <div className="mt-8">
        <PosterButton href="/contact">Start Your Enterprise Project &rarr;</PosterButton>
      </div>
    </div>
  )
}