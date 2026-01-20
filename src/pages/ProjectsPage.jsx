import { useState } from 'react'
import ProjectModal from '../components/ProjectModal'

const allProjects = [
  {
    id: 1,
    title: 'LUXURY AUTOMOTIVE CAMPAIGN',
    category: 'Brand Commercial',
    status: 100,
    thumbnail: 'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=800&q=80',
    role: 'Full Production',
    tools: ['RED Camera', 'DaVinci Resolve', 'After Effects'],
    description: 'Premium automotive brand campaign featuring cinematic visuals and dynamic motion sequences.',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
  },
  {
    id: 2,
    title: 'TECH PRODUCT LAUNCH',
    category: 'Product Campaign',
    status: 100,
    thumbnail: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&q=80',
    role: 'Creative Direction',
    tools: ['Cinema 4D', 'Premiere Pro', 'Octane'],
    description: 'Multi-platform product launch campaign with 3D product visualization and social media content.',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
  },
  {
    id: 3,
    title: 'FASHION BRAND SERIES',
    category: 'Social Media Content',
    status: 92,
    thumbnail: 'https://images.unsplash.com/photo-1445205170230-053b83016050?w=800&q=80',
    role: 'Photography & Video',
    tools: ['Sony A7S III', 'Capture One', 'Lightroom'],
    description: 'Seasonal fashion campaign with photography and video content for Instagram and TikTok.',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
  },
  {
    id: 4,
    title: 'CORPORATE TESTIMONIALS',
    category: 'Testimonial Series',
    status: 85,
    thumbnail: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&q=80',
    role: 'Video Production',
    tools: ['Blackmagic', 'Final Cut Pro', 'Motion Graphics'],
    description: 'Professional testimonial series featuring client success stories and brand authenticity.',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
  },
  {
    id: 5,
    title: 'RESTAURANT BRAND FILM',
    category: 'Brand Commercial',
    status: 100,
    thumbnail: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80',
    role: 'Full Production',
    tools: ['Sony FX6', 'Premiere Pro', 'Color Grading'],
    description: 'Culinary storytelling showcasing artisanal food preparation and dining experience.',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
  },
  {
    id: 6,
    title: 'FITNESS APP CAMPAIGN',
    category: 'Social Media Ads',
    status: 95,
    thumbnail: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&q=80',
    role: 'Creative Direction',
    tools: ['iPhone 15 Pro', 'CapCut', 'After Effects'],
    description: 'High-energy social media campaign with user-generated content style for fitness app launch.',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
  }
]

export default function ProjectsPage() {
  const [selectedProject, setSelectedProject] = useState(null)
  const [hoveredId, setHoveredId] = useState(null)

  return (
    <div className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <div className="flex items-center gap-4 mb-4">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent to-purple-500/50" />
            <span className="text-sm font-mono text-purple-400 tracking-[0.3em]">ALL PROJECTS</span>
            <div className="h-px flex-1 bg-gradient-to-l from-transparent to-purple-500/50" />
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-center mb-4">
            <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
              Our Portfolio
            </span>
          </h1>
          <p className="text-center text-gray-400 text-lg">Explore our complete collection of work</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {allProjects.map((project, index) => (
            <div
              key={project.id}
              className="group relative cursor-pointer"
              onClick={() => setSelectedProject(project)}
              onMouseEnter={() => setHoveredId(project.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <div className="relative overflow-hidden border border-purple-500/20 bg-[#0f0f1a] transition-all duration-500 hover:border-purple-400/50 hover:shadow-[0_0_30px_rgba(168,85,247,0.3)]">
                <div className="aspect-video overflow-hidden relative">
                  <img 
                    src={project.thumbnail} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0f0f1a] via-transparent to-transparent opacity-60" />
                  
                  <div className="absolute top-4 right-4 px-3 py-1 bg-purple-600/90 backdrop-blur-sm text-xs font-mono tracking-wider">
                    {project.category}
                  </div>
                  
                  <div className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 ${hoveredId === project.id ? 'opacity-100' : 'opacity-0'}`}>
                    <div className="w-16 h-16 border-2 border-purple-400 rounded-full flex items-center justify-center bg-purple-950/50 backdrop-blur-sm">
                      <svg className="w-8 h-8 text-purple-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                      </svg>
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold tracking-tight mb-2">{project.title}</h3>
                  <p className="text-gray-400 text-sm">{project.description}</p>
                </div>

                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-600 via-blue-500 to-purple-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedProject && (
        <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
      )}
    </div>
  )
}
