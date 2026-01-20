export default function Intelligence() {
  return (
    <section className="py-32 px-6 relative bg-gradient-to-b from-[#0a0a0f] to-[#0f0a15]">
      <div className="max-w-4xl mx-auto">
        <div className="mb-16">
          <div className="flex items-center gap-4 mb-4">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent to-blue-500/50" />
            <span className="text-sm font-mono text-blue-400 tracking-[0.3em]">OUR APPROACH</span>
            <div className="h-px flex-1 bg-gradient-to-l from-transparent to-blue-500/50" />
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-center mb-8">
            <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
              Our Approach
            </span>
          </h2>
        </div>

        <div className="border border-blue-500/20 bg-[#0a0a0f]/50 backdrop-blur-sm p-12">
          <div className="space-y-8">
            <div className="border-l-2 border-purple-500 pl-6">
              <h3 className="text-xl font-bold mb-3 text-purple-400">STORY-DRIVEN CREATIVITY</h3>
              <p className="text-gray-300 leading-relaxed">
                Every brand has a story worth telling. We craft compelling narratives that resonate with your audience and drive meaningful engagement.
              </p>
            </div>

            <div className="border-l-2 border-blue-500 pl-6">
              <h3 className="text-xl font-bold mb-3 text-blue-400">CINEMATIC EXCELLENCE</h3>
              <p className="text-gray-300 leading-relaxed">
                From concept to final delivery, we maintain the highest production standards. Every frame is intentional, every detail matters.
              </p>
            </div>

            <div className="border-l-2 border-purple-500 pl-6">
              <h3 className="text-xl font-bold mb-3 text-purple-400">STRATEGIC PARTNERSHIP</h3>
              <p className="text-gray-300 leading-relaxed">
                We're not just vendors—we're creative partners invested in your success. Your goals become our mission.
              </p>
            </div>

            <div className="border-l-2 border-blue-500 pl-6">
              <h3 className="text-xl font-bold mb-3 text-blue-400">RESULTS-FOCUSED DELIVERY</h3>
              <p className="text-gray-300 leading-relaxed">
                Beautiful content that performs. We combine artistic vision with data-driven strategy to maximize your ROI.
              </p>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-purple-500/20">
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold text-purple-400 mb-2">2-4 WEEKS</div>
                <div className="text-sm text-gray-400 font-mono">AVERAGE TURNAROUND</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-400 mb-2">UNLIMITED</div>
                <div className="text-sm text-gray-400 font-mono">REVISIONS</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-purple-400 mb-2">100%</div>
                <div className="text-sm text-gray-400 font-mono">SATISFACTION RATE</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
