import { useState } from 'react'

const graphics = Array.from({ length: 23 }, (_, i) => ({
  id: i + 1,
  image: `/${i + 1}.webp`,
  title: `Graphic Design ${i + 1}`
}))

const longVideos = [
  { id: 1, videoId: 'bqdK_EifW8k', title: 'Video Production 1', thumbnail: `https://img.youtube.com/vi/bqdK_EifW8k/sddefault.jpg` },
  { id: 2, videoId: '3MR8SvdrMkU', title: 'Video Production 2', thumbnail: `https://img.youtube.com/vi/3MR8SvdrMkU/sddefault.jpg` },
  { id: 3, videoId: 'XlQ0tDigUXQ', title: 'Video Production 3', thumbnail: `https://img.youtube.com/vi/XlQ0tDigUXQ/sddefault.jpg` },
  { id: 4, videoId: 'O83G1LJiCuc', title: 'Video Production 4', thumbnail: `https://img.youtube.com/vi/O83G1LJiCuc/sddefault.jpg` },
  { id: 5, videoId: 'v99Sdv2S_AA', title: 'Video Production 5', thumbnail: `https://img.youtube.com/vi/v99Sdv2S_AA/sddefault.jpg` },
  { id: 6, videoId: 'HqtC1iscSVQ', title: 'Video Production 6', thumbnail: `https://img.youtube.com/vi/HqtC1iscSVQ/sddefault.jpg` }
]

const shortVideos = [
  { id: 1, videoId: 'Sx3DupRPBLc', title: 'Short Video 1', thumbnail: `https://img.youtube.com/vi/Sx3DupRPBLc/sddefault.jpg` },
  { id: 2, videoId: '-QByXDvlKdI', title: 'Short Video 2', thumbnail: `https://img.youtube.com/vi/-QByXDvlKdI/sddefault.jpg` },
  { id: 3, videoId: 'Bx5Z-7kjm_o', title: 'Short Video 3', thumbnail: `https://img.youtube.com/vi/Bx5Z-7kjm_o/sddefault.jpg` },
  { id: 4, videoId: 'X5brSTr9OO0', title: 'Short Video 4', thumbnail: `https://img.youtube.com/vi/X5brSTr9OO0/sddefault.jpg` },
  { id: 5, videoId: 'HtZSMqRHEQc', title: 'Short Video 5', thumbnail: `https://img.youtube.com/vi/HtZSMqRHEQc/sddefault.jpg` },
  { id: 6, videoId: 'Iol74xIvGa0', title: 'Short Video 6', thumbnail: `https://img.youtube.com/vi/Iol74xIvGa0/sddefault.jpg` },
  { id: 7, videoId: '5cIWGn3A5i8', title: 'Short Video 7', thumbnail: `https://img.youtube.com/vi/5cIWGn3A5i8/sddefault.jpg` },
  { id: 8, videoId: 'KGD6GGqEliA', title: 'Short Video 8', thumbnail: `https://img.youtube.com/vi/KGD6GGqEliA/sddefault.jpg` }
]

export default function Projects() {
  const [selectedImage, setSelectedImage] = useState(null)
  const [selectedVideo, setSelectedVideo] = useState(null)
  const [hoveredId, setHoveredId] = useState(null)

  return (
    <section className="py-12 md:py-16 px-6 relative">
      <div className="max-w-7xl mx-auto">
        {/* Videos Section */}
        <div className="mb-16">
          <div className="flex items-center gap-4 mb-3">
            <div className="h-px flex-1 bg-linear-to-r from-transparent to-purple-500/50" />
            <span className="text-sm font-mono text-purple-400 tracking-[0.3em]">VIDEOS</span>
            <div className="h-px flex-1 bg-linear-to-l from-transparent to-purple-500/50" />
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-center mb-3">
            <span className="bg-linear-to-r from-white to-gray-400 bg-clip-text text-transparent">
              Video Production
            </span>
          </h2>
          <p className="text-center text-gray-400 text-lg mb-8">Watch our creative video content</p>

          {/* Long Videos */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold mb-4 text-purple-300">Full Videos</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {longVideos.map((video) => (
                <div
                  key={video.id}
                  className="group relative cursor-pointer"
                  onClick={() => setSelectedVideo(video)}
                  onMouseEnter={() => setHoveredId(`long-${video.id}`)}
                  onMouseLeave={() => setHoveredId(null)}
                >
                  <div className="relative overflow-hidden border border-purple-500/20 bg-[#0f0f1a] transition-all duration-500 hover:border-purple-400/50 hover:shadow-[0_0_30px_rgba(168,85,247,0.3)]">
                    <div className="aspect-video overflow-hidden relative">
                      <img 
                        src={video.thumbnail} 
                        alt={video.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-linear-to-t from-[#0f0f1a] via-transparent to-transparent opacity-60" />
                      
                      <div className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 ${hoveredId === `long-${video.id}` ? 'opacity-100' : 'opacity-0'}`}>
                        <div className="w-16 h-16 border-2 border-purple-400 rounded-full flex items-center justify-center bg-purple-950/50 backdrop-blur-sm">
                          <svg className="w-8 h-8 text-purple-400" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-linear-to-r from-purple-600 via-blue-500 to-purple-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Short Videos */}
          <div>
            <h3 className="text-2xl font-bold mb-4 text-purple-300">Shorts</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {shortVideos.map((video) => (
                <div
                  key={video.id}
                  className="group relative cursor-pointer"
                  onClick={() => setSelectedVideo(video)}
                  onMouseEnter={() => setHoveredId(`short-${video.id}`)}
                  onMouseLeave={() => setHoveredId(null)}
                >
                  <div className="relative overflow-hidden border border-purple-500/20 bg-[#0f0f1a] transition-all duration-500 hover:border-purple-400/50 hover:shadow-[0_0_30px_rgba(168,85,247,0.3)]">
                    <div className="aspect-9/16 overflow-hidden relative">
                      <img 
                        src={video.thumbnail} 
                        alt={video.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-linear-to-t from-[#0f0f1a] via-transparent to-transparent opacity-60" />
                      
                      <div className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 ${hoveredId === `short-${video.id}` ? 'opacity-100' : 'opacity-0'}`}>
                        <div className="w-12 h-12 border-2 border-purple-400 rounded-full flex items-center justify-center bg-purple-950/50 backdrop-blur-sm">
                          <svg className="w-6 h-6 text-purple-400" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-linear-to-r from-purple-600 via-blue-500 to-purple-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Graphics Section */}
        <div>
          <div className="flex items-center gap-4 mb-3">
            <div className="h-px flex-1 bg-linear-to-r from-transparent to-purple-500/50" />
            <span className="text-sm font-mono text-purple-400 tracking-[0.3em]">GRAPHICS</span>
            <div className="h-px flex-1 bg-linear-to-l from-transparent to-purple-500/50" />
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-center mb-3">
            <span className="bg-linear-to-r from-white to-gray-400 bg-clip-text text-transparent">
              Graphic Design
            </span>
          </h2>
          <p className="text-center text-gray-400 text-lg mb-8">Visual design and creative graphics</p>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {graphics.map((graphic) => (
              <div
                key={graphic.id}
                className="group relative cursor-pointer overflow-hidden border border-purple-500/20 bg-[#0f0f1a] transition-all duration-500 hover:border-purple-400/50 hover:shadow-[0_0_30px_rgba(168,85,247,0.3)]"
                onClick={() => setSelectedImage(graphic)}
              >
                <div className="h-64 overflow-hidden relative flex items-center justify-center">
                  <img 
                    src={graphic.image} 
                    alt={graphic.title}
                    className="max-w-full max-h-full object-contain transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300" />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <svg className="w-12 h-12 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                    </svg>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Image Modal */}
      {selectedImage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 animate-fadeIn">
          <div className="absolute inset-0 bg-black/90 backdrop-blur-sm" onClick={() => setSelectedImage(null)} />
          <div className="relative max-w-5xl max-h-[90vh]">
            <button
              onClick={(e) => {
                e.stopPropagation()
                setSelectedImage(null)
              }}
              className="absolute top-4 right-4 z-10 w-10 h-10 flex items-center justify-center bg-black/50 border border-purple-500/50 hover:border-purple-400 hover:bg-purple-950/80 transition-all duration-300 group"
            >
              <svg className="w-6 h-6 text-purple-400 group-hover:rotate-90 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <img 
              src={selectedImage.image} 
              alt={selectedImage.title}
              className="max-w-full max-h-[90vh] object-contain border border-purple-500/30 shadow-[0_0_50px_rgba(168,85,247,0.3)]"
            />
          </div>
        </div>
      )}

      {/* Video Modal */}
      {selectedVideo && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 animate-fadeIn">
          <div className="absolute inset-0 bg-black/90 backdrop-blur-sm" onClick={() => setSelectedVideo(null)} />
          <div className="relative w-full max-w-6xl max-h-[90vh] overflow-y-auto bg-[#0a0a0f] border border-purple-500/30 shadow-[0_0_50px_rgba(168,85,247,0.3)]">
            <button
              onClick={() => setSelectedVideo(null)}
              className="absolute top-6 right-6 z-10 w-10 h-10 flex items-center justify-center border border-purple-500/50 hover:border-purple-400 hover:bg-purple-950/50 transition-all duration-300 group"
            >
              <svg className="w-6 h-6 text-purple-400 group-hover:rotate-90 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <div className="aspect-video w-full bg-black">
              <iframe
                className="w-full h-full"
                src={`https://www.youtube.com/embed/${selectedVideo.videoId}`}
                title={selectedVideo.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
