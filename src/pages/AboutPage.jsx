import Intelligence from '../components/Intelligence'

export default function AboutPage() {
  return (
    <div className="pt-0">
      <div className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <div className="flex items-center gap-4 mb-4 justify-center">
            <div className="h-px w-24 bg-linear-to-r from-transparent to-purple-500/50" />
            <span className="text-sm font-mono text-purple-400 tracking-[0.3em]">WHO WE ARE</span>
            <div className="h-px w-24 bg-linear-to-l from-transparent to-purple-500/50" />
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="bg-linear-to-r from-white to-gray-400 bg-clip-text text-transparent">
              About Frame Cipher
            </span>
          </h1>
          <p className="text-xl text-gray-400 leading-relaxed mb-8">
            We are a premium media production agency dedicated to crafting cinematic experiences that elevate brands and captivate audiences.
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 mb-20">
          <div className="border border-purple-500/20 bg-[#0a0a0f]/50 backdrop-blur-sm p-8">
            <h2 className="text-3xl font-bold mb-4 text-purple-400">Our Story</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              Founded with a vision to bridge the gap between artistic excellence and commercial success, Frame Cipher has grown into a trusted partner for brands seeking to make a lasting impact.
            </p>
            <p className="text-gray-300 leading-relaxed">
              Our team combines decades of experience in cinematography, post-production, and brand strategy to deliver results that exceed expectations.
            </p>
          </div>

          <div className="border border-blue-500/20 bg-[#0a0a0f]/50 backdrop-blur-sm p-8">
            <h2 className="text-3xl font-bold mb-4 text-blue-400">Our Mission</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              To empower brands with visual storytelling that resonates, engages, and converts. We believe every project deserves the highest level of creative attention and technical precision.
            </p>
            <p className="text-gray-300 leading-relaxed">
              Through collaboration and innovation, we transform ideas into compelling visual narratives that drive real business results.
            </p>
          </div>
        </div>
      </div>

      <Intelligence />
    </div>
  )
}
