import { PosterButton } from '../../../Kinetic'

export default function BangladeshWorldwide() {
  return (
    <div className="mt-28 border-2 border-frame-border bg-frame-muted/20 p-6 md:p-12">
      <span className="text-xs font-black uppercase tracking-[0.28em] text-frame-accent">
        Domestic &amp; Global Reach
      </span>
      <h2 className="mt-2 font-heading text-2xl md:text-4xl font-bold uppercase tracking-tight text-frame-fg">
        API Development Services Across Bangladesh &amp; Worldwide
      </h2>
      <div className="mt-6 max-w-4xl space-y-4 text-sm md:text-base font-medium leading-relaxed text-frame-muted-fg">
        <p>
          Framecipher is based in Dhaka, Bangladesh, and provides API development and integration services for businesses in Bangladesh and international markets.
        </p>
        <div>
          <h4 className="font-heading text-base font-bold uppercase text-frame-fg">
            Bangladesh
          </h4>
          <p className="mt-1">
            For Bangladeshi businesses, API projects can include local payment and banking integrations alongside international platforms. Common requirements may include: bKash integration, Nagad integration, local banking APIs, ecommerce integrations, CRM and ERP connectivity, logistics integrations, and internal business systems.
          </p>
        </div>
        <div>
          <h4 className="font-heading text-base font-bold uppercase text-frame-fg">
            International Clients
          </h4>
          <p className="mt-1">
            We also work with clients in the United States, United Kingdom, Australia, Canada, and United Arab Emirates. Framecipher has worked with businesses across 20+ countries, supporting API and integration projects across different markets and technical environments.
          </p>
        </div>
        <p className="font-semibold text-frame-fg">
          Different markets can involve different payment providers, systems, access requirements, and compliance considerations. We account for those differences during project discovery.
        </p>
      </div>
      <div className="mt-8">
        <PosterButton href="/contact">Start Your API Project &rarr;</PosterButton>
      </div>
    </div>
  )
}