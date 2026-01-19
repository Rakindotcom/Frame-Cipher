const WhyChooseUs = () => {
  const reasons = [
    {
      title: "Proven Track Record",
      description: "Over 150 successful projects delivered for brands ranging from startups to Fortune 500 companies, with measurable results that speak for themselves.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
        </svg>
      )
    },
    {
      title: "End-to-End Excellence",
      description: "From initial strategy to final delivery, we handle every aspect of your project with meticulous attention to detail and unwavering quality standards.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
    },
    {
      title: "Creative Innovation",
      description: "We don't follow trends—we set them. Our team constantly pushes creative boundaries to deliver content that stands out in today's crowded marketplace.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      )
    },
    {
      title: "Strategic Partnership",
      description: "We become an extension of your team, understanding your business goals and crafting content strategies that drive real, measurable business outcomes.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      )
    },
    {
      title: "Cutting-Edge Technology",
      description: "We invest in the latest equipment and software to ensure your content meets the highest technical standards and stays ahead of industry evolution.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
        </svg>
      )
    }
  ]

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Why Choose Frame Cipher
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            In a world full of content creators, we stand apart through our unwavering commitment 
            to excellence, innovation, and results-driven storytelling.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {reasons.slice(0, 3).map((reason, index) => (
            <div key={index} className="text-center">
              <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-6 text-white">
                {reason.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                {reason.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {reason.description}
              </p>
            </div>
          ))}
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {reasons.slice(3).map((reason, index) => (
            <div key={index + 3} className="text-center">
              <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-6 text-white">
                {reason.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                {reason.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {reason.description}
              </p>
            </div>
          ))}
        </div>
        
        {/* Stats section */}
        <div className="mt-20 bg-white rounded-2xl p-12">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <h3 className="text-4xl font-bold text-gray-900 mb-2">98%</h3>
              <p className="text-gray-600">Client Satisfaction</p>
            </div>
            <div>
              <h3 className="text-4xl font-bold text-gray-900 mb-2">24h</h3>
              <p className="text-gray-600">Average Response Time</p>
            </div>
            <div>
              <h3 className="text-4xl font-bold text-gray-900 mb-2">150+</h3>
              <p className="text-gray-600">Projects Completed</p>
            </div>
            <div>
              <h3 className="text-4xl font-bold text-gray-900 mb-2">5★</h3>
              <p className="text-gray-600">Average Rating</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhyChooseUs