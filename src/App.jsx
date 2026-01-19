import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Portfolio from './components/Portfolio'
import WhyChooseUs from './components/WhyChooseUs'
import CallToAction from './components/CallToAction'
import Footer from './components/Footer'

const App = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Portfolio />
      <WhyChooseUs />
      <CallToAction />
      <Footer />
    </div>
  )
}

export default App