const clients = [
  { name: 'MERCEDES-BENZ', status: 'VERIFIED', projects: 12 },
  { name: 'APPLE', status: 'VERIFIED', projects: 8 },
  { name: 'NIKE', status: 'VERIFIED', projects: 15 },
  { name: 'SAMSUNG', status: 'VERIFIED', projects: 10 },
  { name: 'COCA-COLA', status: 'VERIFIED', projects: 14 },
  { name: 'ADIDAS', status: 'VERIFIED', projects: 9 },
]

export default function Clients() {
  return (
    <section className="border-y-2 border-frame-border bg-frame-bg px-4 py-24 md:px-8 md:py-32">
      <div className="mx-auto max-w-[95vw]">
        <div className="mb-12">
          <p className="mb-4 text-sm font-black uppercase tracking-[0.28em] text-frame-accent">Trusted partners</p>
          <h2 className="font-heading text-[clamp(2.8rem,8vw,8rem)] font-bold uppercase leading-[0.82] tracking-tighter text-frame-fg">
            Trusted by industry leaders
          </h2>
        </div>

        <div className="grid bg-frame-border gap-px md:grid-cols-3">
          {clients.map((client, index) => (
            <article
              key={client.name}
              className="group relative min-h-72 bg-frame-bg p-7 transition-colors duration-300 hover:bg-frame-accent"
            >
              <div className="flex items-start justify-between gap-6">
                <div>
                  <p className="text-xs font-black uppercase tracking-[0.22em] text-frame-accent transition-colors duration-300 group-hover:text-frame-accent-fg/70">
                    {client.status}
                  </p>
                  <h3 className="mt-8 font-heading text-4xl font-bold uppercase leading-none tracking-tighter text-frame-fg transition-colors duration-300 group-hover:text-frame-accent-fg md:text-6xl">
                    {client.name}
                  </h3>
                </div>
                <p className="font-heading text-6xl font-bold leading-none tracking-tighter text-frame-muted transition-colors duration-300 group-hover:text-frame-accent-fg/25">
                  {String(index + 1).padStart(2, '0')}
                </p>
              </div>

              <p className="mt-10 text-sm font-black uppercase tracking-[0.22em] text-frame-muted-fg transition-colors duration-300 group-hover:text-frame-accent-fg/80">
                Projects delivered: {client.projects}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
