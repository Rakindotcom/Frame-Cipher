import { useEffect } from 'react'

export default function ProjectModal({ project, onClose }) {
  useEffect(() => {
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [])

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 animate-fadeIn">
      <div 
        className="absolute inset-0 bg-black/90 backdrop-blur-sm"
        onClick={onClose}
      />
      
      <div className="relative w-full max-w-6xl max-h-[90vh] overflow-y-auto bg-[#0a0a0f] border border-purple-500/30 shadow-[0_0_50px_rgba(168,85,247,0.3)] animate-slideUp">
        <button
          onClick={onClose}
          className="absolute top-6 right-6 z-10 w-10 h-10 flex items-center justify-center border border-purple-500/50 hover:border-purple-400 hover:bg-purple-950/50 transition-all duration-300 group"
        >
          <svg className="w-6 h-6 text-purple-400 group-hover:rotate-90 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="aspect-video w-full bg-black">
          <iframe
            className="w-full h-full"
            src={project.videoUrl}
            title={project.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>

        <div className="p-8 md:p-12">
          <div className="flex items-center gap-4 mb-6">
            <span className="text-sm font-mono text-purple-400 tracking-[0.3em]">PROJECT DETAILS</span>
            <div className="h-px flex-1 bg-gradient-to-r from-purple-500/50 to-transparent" />
          </div>

          <h2 className="text-4xl md:text-5xl font-bold mb-4">{project.title}</h2>
          
          <div className="flex gap-4 mb-8 flex-wrap">
            <span className="px-4 py-2 bg-purple-600/20 border border-purple-500/50 text-purple-300 font-mono text-sm">
              {project.category}
            </span>
            <span className="px-4 py-2 bg-blue-600/20 border border-blue-500/50 text-blue-300 font-mono text-sm">
              {project.role}
            </span>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div>
              <h3 className="text-sm font-mono text-purple-400 tracking-wider mb-3">OVERVIEW</h3>
              <p className="text-gray-300 leading-relaxed">
                {project.description}
              </p>
            </div>

            <div>
              <h3 className="text-sm font-mono text-purple-400 tracking-wider mb-3">TECH STACK</h3>
              <div className="flex flex-wrap gap-2">
                {project.tools.map(tool => (
                  <span key={tool} className="px-3 py-2 bg-purple-950/50 border border-purple-500/30 text-purple-300 text-sm">
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="border-t border-purple-500/20 pt-8">
            <h3 className="text-sm font-mono text-purple-400 tracking-wider mb-4">PROJECT TIMELINE</h3>
            <div className="space-y-3">
              {['Concept & Planning', 'Production', 'Post-Production', 'Final Delivery'].map((stage, i) => (
                <div key={stage} className="flex items-center gap-4">
                  <div className={`w-8 h-8 flex items-center justify-center border ${i * 25 < project.status ? 'border-purple-400 bg-purple-600/20' : 'border-gray-600 bg-gray-800/20'}`}>
                    {i * 25 < project.status && (
                      <svg className="w-5 h-5 text-purple-400" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    )}
                  </div>
                  <span className={`font-mono text-sm ${i * 25 < project.status ? 'text-purple-300' : 'text-gray-500'}`}>
                    {stage}
                  </span>
                  <div className="flex-1 h-px bg-gray-800">
                    <div 
                      className="h-full bg-gradient-to-r from-purple-600 to-blue-500 transition-all duration-1000"
                      style={{ width: `${Math.min(100, Math.max(0, (project.status - i * 25) * 4))}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
