const clients = [
  { name: 'MERCEDES-BENZ', status: 'VERIFIED', projects: 12 },
  { name: 'APPLE', status: 'VERIFIED', projects: 8 },
  { name: 'NIKE', status: 'VERIFIED', projects: 15 },
  { name: 'SAMSUNG', status: 'VERIFIED', projects: 10 },
  { name: 'COCA-COLA', status: 'VERIFIED', projects: 14 },
  { name: 'ADIDAS', status: 'VERIFIED', projects: 9 }
]

export default function Clients() {
  return (
    <section className="py-32 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <div className="flex items-center gap-4 mb-4">
            <div className="h-px flex-1 bg-linear-to-r from-transparent to-purple-500/50" />
            <span className="text-sm font-mono text-purple-400 tracking-[0.3em]">TRUSTED PARTNERS</span>
            <div className="h-px flex-1 bg-linear-to-l from-transparent to-purple-500/50" />
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-center mb-4">
            <span className="bg-linear-to-r from-white to-gray-400 bg-clip-text text-transparent">
              Trusted By Industry Leaders
            </span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {clients.map((client, index) => (
            <div
              key={client.name}
              className="group relative border border-purple-500/20 bg-[#0a0a0f]/50 backdrop-blur-sm p-8 transition-all duration-500 hover:border-purple-400/50 hover:shadow-[0_0_30px_rgba(168,85,247,0.2)]"
            >
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                  <span className="text-xs font-mono text-green-400 tracking-wider">{client.status}</span>
                </div>
                <svg className="w-5 h-5 text-purple-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>

              <h3 className="text-2xl font-bold mb-4 tracking-tight group-hover:text-purple-400 transition-colors duration-300">
                {client.name}
              </h3>

              <div className="flex items-center gap-3 text-sm">
                <span className="text-gray-400 font-mono">PROJECTS DELIVERED:</span>
                <span className="text-purple-400 font-bold text-lg">{client.projects}</span>
              </div>

              <div className="absolute bottom-0 left-0 w-full h-1 bg-linear-to-r from-purple-600 to-blue-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
