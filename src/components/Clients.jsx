const clients = [
  { name: 'Client 01', logo: '/client01.webp' },
  { name: 'Client 02', logo: '/client02.webp' },
  { name: 'Client 03', logo: '/client03.webp' },
  { name: 'Client 04', logo: '/client04.webp' },
  { name: 'Client 05', logo: '/client05.webp' },
  { name: 'Client 06', logo: '/client06.webp' },
  { name: 'Client 07', logo: '/client07.webp' },
  { name: 'Client 08', logo: '/client08.webp' },
  { name: 'Client 09', logo: '/client09.webp' },
  { name: 'Client 10', logo: '/client10.webp' },
  { name: 'Client 11', logo: '/client11.webp' },
]

const marqueeClients = [...clients, ...clients]

export default function Clients() {
  return (
    <section className="border-y-2 border-zinc-200 bg-[#fafafa] px-4 py-16 text-zinc-950 md:px-8 md:py-24">
      <div className="mx-auto max-w-[95vw]">
        <div className="mb-10 grid gap-5 md:grid-cols-[0.8fr_1.2fr] md:items-end">
          <p className="text-sm font-black uppercase tracking-[0.28em] text-frame-accent">Client roster</p>
          <h2 className="font-heading text-[clamp(2.6rem,7vw,7rem)] font-bold uppercase leading-[0.82] tracking-tighter">
            Brands we have helped move forward
          </h2>
        </div>

        <div className="kinetic-marquee -mx-4 border-y border-frame-border bg-white py-5 md:-mx-8 md:py-7">
          <p className="sr-only">A continuous showcase of brands Frame Cipher has worked with.</p>
          <div className="kinetic-marquee-track kinetic-marquee-track-slow" aria-hidden="true">
            {marqueeClients.map((client, index) => (
              <div
                key={`${client.name}-${index}`}
                className="mx-3 flex h-24 w-44 shrink-0 items-center justify-center border border-zinc-200 bg-white px-6 md:h-32 md:w-64 md:px-10"
              >
                <img
                  src={client.logo}
                  alt=""
                  className="max-h-14 w-full object-contain md:max-h-20"
                  loading="eager"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
