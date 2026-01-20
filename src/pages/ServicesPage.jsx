import Services from '../components/Services'

export default function ServicesPage() {
  return (
    <div className="pt-0">
      <div className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <div className="flex items-center gap-4 mb-4 justify-center">
            <div className="h-px w-24 bg-linear-to-r from-transparent to-blue-500/50" />
            <span className="text-sm font-mono text-blue-400 tracking-[0.3em]">WHAT WE DO</span>
            <div className="h-px w-24 bg-linear-to-l from-transparent to-blue-500/50" />
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="bg-linear-to-r from-white to-gray-400 bg-clip-text text-transparent">
              Our Services
            </span>
          </h1>
          <p className="text-xl text-gray-400 leading-relaxed">
            From concept to delivery, we provide comprehensive creative solutions that elevate your brand and engage your audience.
          </p>
        </div>
      </div>
      <Services />
    </div>
  )
}
