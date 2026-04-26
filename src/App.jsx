import { useEffect, useRef } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import TrustStrip from './components/TrustStrip'
import Services from './components/Services'
import Portfolio from './components/Portfolio'
import WhyUs from './components/WhyUs'
import Process from './components/Process'
import CTA from './components/CTA'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, i) => {
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
    <div className="min-h-screen" style={{ background: '#12100d' }}>
      <Navbar />
      <Hero />
      <TrustStrip />
      <Services />
      <Portfolio />
      <WhyUs />
      <Process />
      <CTA />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
