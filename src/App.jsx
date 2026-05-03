import { useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import TrustStrip from './components/TrustStrip'
import Services from './components/Services'
import Portfolio from './components/Portfolio'
import Testimonials from './components/Testimonials'
import Process from './components/Process'
import About from './components/About'
import Pricing from './components/Pricing'
import FAQ from './components/FAQ'
import CTA from './components/CTA'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const siblings = Array.from(entry.target.parentNode?.children || [])
            const idx = siblings.indexOf(entry.target)
            setTimeout(() => {
              entry.target.classList.add('visible')
            }, idx * 80)
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    )
    document.querySelectorAll('.fade-up').forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <div className="min-h-screen" style={{ background: 'transparent' }}>
      <Navbar />
      <Hero />
      <TrustStrip />
      <Services />
      <Portfolio />
      <Testimonials />
      <Process />
      <About />
      <Pricing />
      <FAQ />
      <CTA />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
