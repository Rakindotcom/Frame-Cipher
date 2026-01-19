const Portfolio = () => {
  const projects = [
    {
      title: "Luxury Brand Campaign",
      category: "Commercial Video",
      description: "A cinematic brand film that elevated a luxury fashion house's global presence.",
      image: "project-1"
    },
    {
      title: "Tech Startup Launch",
      category: "Motion Graphics",
      description: "Dynamic explainer video that simplified complex technology for mass market appeal.",
      image: "project-2"
    },
    {
      title: "Documentary Series",
      category: "Video Production",
      description: "Award-winning documentary series exploring innovation in sustainable technology.",
      image: "project-3"
    },
    {
      title: "Social Media Campaign",
      category: "Content Creation",
      description: "Viral social content that generated 50M+ impressions across all platforms.",
      image: "project-4"
    },
    {
      title: "Corporate Rebrand",
      category: "Brand Storytelling",
      description: "Complete visual identity transformation for a Fortune 500 company.",
      image: "project-5"
    },
    {
      title: "Product Launch Film",
      category: "Commercial Video",
      description: "High-impact product reveal that drove record-breaking pre-order numbers.",
      image: "project-6"
    }
  ]

  return (
    <section id="portfolio" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our Work
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Every project is a testament to our commitment to excellence. 
            Explore how we've helped brands tell their stories and achieve their goals.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="group cursor-pointer"
            >
              <div className="relative overflow-hidden rounded-2xl bg-gray-100 aspect-video mb-6">
                {/* Placeholder for project thumbnail */}
                <div className="absolute inset-0 bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gray-400 rounded-full mx-auto mb-4 flex items-center justify-center">
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h8m-9-4V8a2 2 0 012-2h8a2 2 0 012 2v2M5 18h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <p className="text-gray-500 text-sm">{project.image}</p>
                  </div>
                </div>
                
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-60 transition-all duration-300 flex items-center justify-center">
                  <div className="transform translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <button className="bg-white text-black px-6 py-3 rounded-full font-medium hover:bg-gray-100 transition-colors duration-200">
                      View Project
                    </button>
                  </div>
                </div>
              </div>
              
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-gray-500 uppercase tracking-wide">
                    {project.category}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-gray-600 transition-colors duration-200">
                  {project.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-16">
          <button className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-full text-lg font-medium hover:border-gray-400 hover:text-gray-900 transition-all duration-300">
            View All Projects
          </button>
        </div>
      </div>
    </section>
  )
}

export default Portfolio