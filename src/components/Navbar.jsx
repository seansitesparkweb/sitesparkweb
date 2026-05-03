import { useState, useEffect } from 'react'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const links = ['Services', 'Portfolio', 'Pricing', 'About']

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: scrolled ? 'rgba(12,26,25,0.92)' : 'transparent',
        backdropFilter: scrolled ? 'blur(20px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(94,234,212,0.1)' : 'none',
      }}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#" className="text-xl font-bold gradient-text tracking-tight">SiteSparkWeb</a>

        <div className="hidden md:flex items-center gap-8">
          {links.map(l => (
            <a key={l} href={`#${l.toLowerCase()}`} className="text-sm transition-colors duration-200" style={{ color: '#8ab0aa' }}>
              {l}
            </a>
          ))}
        </div>

        <a href="#contact" className="hidden md:inline-flex btn-primary text-white text-sm font-semibold px-5 py-2.5 rounded-lg">
          Contact Me
        </a>

        <button className="md:hidden flex flex-col gap-1.5 p-2" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          <span className={`block w-5 h-0.5 bg-white transition-all duration-300 ${open ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block w-5 h-0.5 bg-white transition-all duration-300 ${open ? 'opacity-0' : ''}`} />
          <span className={`block w-5 h-0.5 bg-white transition-all duration-300 ${open ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>

      {open && (
        <div className="md:hidden glass border-t border-white/5 px-6 py-4 flex flex-col gap-4">
          {links.map(l => (
            <a key={l} href={`#${l.toLowerCase()}`} className="text-sm transition-colors" style={{ color: '#a8c4c0' }} onClick={() => setOpen(false)}>
              {l}
            </a>
          ))}
          <a href="#contact" className="btn-primary text-white text-sm font-semibold px-5 py-2.5 rounded-lg text-center" onClick={() => setOpen(false)}>
            Contact Me
          </a>
        </div>
      )}
    </nav>
  )
}
