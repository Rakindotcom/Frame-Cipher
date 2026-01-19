const CallToAction = () => {
  return (
    <section id="contact" className="py-24 bg-black text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Ready to Create Something
            <span className="block text-gray-300">Extraordinary?</span>
          </h2>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
            Let's transform your vision into a compelling visual story that captivates your audience 
            and drives real business results.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <button className="bg-white text-black px-8 py-4 rounded-full text-lg font-medium hover:bg-gray-100 transition-all duration-300 transform hover:scale-105">
              Start Your Project
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-white hover:text-black transition-all duration-300">
              Schedule a Call
            </button>
          </div>
          
          {/* Contact info */}
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div>
              <h3 className="text-lg font-semibold mb-2">Email Us</h3>
              <p className="text-gray-300">hello@framecipher.com</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">Call Us</h3>
              <p className="text-gray-300">+1 (555) 123-4567</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">Response Time</h3>
              <p className="text-gray-300">Within 24 hours</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CallToAction