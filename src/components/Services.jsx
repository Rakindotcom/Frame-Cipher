const services = [
  {
    id: 'SRV-01',
    title: 'Commercial Video Production',
    description: 'Cinematic commercial videos that elevate your brand and drive engagement with professional storytelling.',
    capabilities: ['Product Campaigns', 'Brand Commercials', 'Testimonial Series', 'Social Media Ads']
  },
  {
    id: 'SRV-02',
    title: 'Post Production & Editing',
    description: 'Transform raw footage into compelling visual stories with expert editing and cinematic effects.',
    capabilities: ['Color Grading', 'Motion Graphics', 'Visual Effects', 'Audio Enhancement']
  },
  {
    id: 'SRV-03',
    title: 'Creative Photography',
    description: 'Professional photography sessions that capture your brand\'s essence and visual identity.',
    capabilities: ['Product Photography', 'Brand Shoots', 'Event Coverage', 'Studio Sessions']
  },
  {
    id: 'SRV-04',
    title: 'Brand Strategy',
    description: 'Comprehensive brand development and digital presence strategy for lasting impact.',
    capabilities: ['Brand Identity', 'Content Strategy', 'Market Positioning', 'Digital Transformation']
  }
]

export default function Services() {
  return (
    <section className="py-32 px-6 relative bg-gradient-to-b from-[#0a0a0f] to-[#0f0a15]">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <div className="flex items-center gap-4 mb-4">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent to-blue-500/50" />
            <span className="text-sm font-mono text-blue-400 tracking-[0.3em]">OUR SERVICES</span>
            <div className="h-px flex-1 bg-gradient-to-l from-transparent to-blue-500/50" />
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-center mb-4">
            <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
              Our Services
            </span>
          </h2>
          <p className="text-center text-gray-400 text-lg">Comprehensive creative solutions for modern brands</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <div
              key={service.id}
              className="group relative border border-blue-500/20 bg-[#0a0a0f]/50 backdrop-blur-sm p-8 transition-all duration-500 hover:border-blue-400/50 hover:shadow-[0_0_30px_rgba(96,165,250,0.2)] hover:-translate-y-1"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-600 to-purple-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
              
              <div className="flex items-start justify-between mb-4">
                <div className="text-xs font-mono text-blue-400 tracking-wider px-3 py-1 border border-blue-500/30 bg-blue-950/30">
                  {service.id}
                </div>
                <div className="w-10 h-10 border border-blue-500/30 flex items-center justify-center group-hover:border-blue-400 transition-colors duration-300">
                  <svg className="w-5 h-5 text-blue-400 group-hover:rotate-90 transition-transform duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </div>
              </div>

              <h3 className="text-2xl font-bold mb-3 group-hover:text-blue-400 transition-colors duration-300">
                {service.title}
              </h3>
              
              <p className="text-gray-400 mb-6 leading-relaxed">
                {service.description}
              </p>

              <div className="space-y-2">
                {service.capabilities.map((capability, i) => (
                  <div key={capability} className="flex items-center gap-3 text-sm">
                    <div className="w-1 h-1 bg-blue-400 rounded-full" />
                    <span className="text-gray-300 font-mono">{capability}</span>
                  </div>
                ))}
              </div>

              <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl from-blue-600/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <button className="group relative px-8 py-4 border-2 border-blue-500/50 hover:border-blue-400 transition-all duration-300 font-semibold tracking-wide">
            <span className="relative z-10">DISCUSS YOUR PROJECT</span>
            <div className="absolute inset-0 bg-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </button>
        </div>
      </div>
    </section>
  )
}
