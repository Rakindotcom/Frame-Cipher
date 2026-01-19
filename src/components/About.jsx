const About = () => {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
              We Are Frame Cipher
            </h2>
            <p className="text-xl text-gray-600 mb-6 leading-relaxed">
              A collective of visual storytellers, technical innovators, and creative strategists 
              who believe every brand has a story worth telling.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Founded on the principle that exceptional media should move people, we combine 
              cutting-edge technology with timeless storytelling techniques to create content 
              that doesn't just capture attention—it commands it.
            </p>
            
            <div className="grid grid-cols-2 gap-8">
              <div>
                <h3 className="text-3xl font-bold text-gray-900 mb-2">150+</h3>
                <p className="text-gray-600">Projects Delivered</p>
              </div>
              <div>
                <h3 className="text-3xl font-bold text-gray-900 mb-2">50+</h3>
                <p className="text-gray-600">Brands Transformed</p>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="bg-gray-100 rounded-2xl h-96 flex items-center justify-center">
              <div className="text-center">
                <div className="w-16 h-16 bg-gray-300 rounded-full mx-auto mb-4"></div>
                <p className="text-gray-500">Team Photo Placeholder</p>
              </div>
            </div>
            
            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-black rounded-full opacity-10"></div>
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gray-400 rounded-full opacity-20"></div>
          </div>
        </div>
        
        {/* What makes us different */}
        <div className="mt-24">
          <h3 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            What Makes Frame Cipher Different
          </h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-4">Cinematic Excellence</h4>
              <p className="text-gray-600 leading-relaxed">
                Every frame is crafted with the precision and artistry of feature film production, 
                bringing Hollywood-level quality to your brand.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-4">Lightning Fast Delivery</h4>
              <p className="text-gray-600 leading-relaxed">
                Our streamlined workflow and dedicated team ensure your project moves from 
                concept to completion without compromising on quality.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-4">Strategic Innovation</h4>
              <p className="text-gray-600 leading-relaxed">
                We don't just create beautiful content—we engineer strategic narratives 
                that drive measurable results for your business.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About