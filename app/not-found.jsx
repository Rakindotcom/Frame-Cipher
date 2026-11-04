import PosterButton from '../src/components/home/PosterButton'

export const metadata = {
  title: 'Page Not Found | Frame Cipher',
  description: 'The page you requested could not be found on Frame Cipher.',
  robots: {
    index: false,
    follow: true,
  },
}

export default function NotFound() {
  return (
    <main className="min-h-[70vh] bg-[#09090B] px-4 py-28 text-white sm:px-6 md:px-8 md:py-36">
      <div className="mx-auto max-w-7xl">
        <div className="fc-laser-card rounded-2xl p-8 sm:p-12 md:p-16">
          <p className="font-mono text-xs uppercase tracking-[0.16em] text-frame-accent">404 / Page not found</p>
          <h1 className="mt-6 max-w-3xl font-heading text-4xl font-medium leading-[0.96] tracking-tight text-white sm:text-6xl md:text-7xl">
            This route is outside the <span className="italic text-frame-accent">frame.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-zinc-300 md:text-lg">
            The page may have moved, or the address may be incomplete. Use the links below to get back to a working route.
          </p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <PosterButton href="/">Return home</PosterButton>
            <PosterButton href="/services" variant="outline">Explore services</PosterButton>
          </div>
        </div>
      </div>
    </main>
  )
}
