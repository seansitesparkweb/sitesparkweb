import SatisfactionMeter from './SatisfactionMeter'
import HeroBackground from './HeroBackground'

export default function Hero() {
  return (
    <section className="relative flex flex-col items-center overflow-hidden pt-20" style={{ background: '#12100d', minHeight: '100svh' }}>

      <HeroBackground />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 w-full grid lg:grid-cols-2 gap-12 lg:gap-16 items-center py-16 lg:py-20 flex-1 relative" style={{ zIndex: 1 }}>

        {/* ── Left copy ── */}
        <div className="space-y-8">
          <div className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full text-sm" style={{ color: '#f87171' }}>
            <span className="w-2 h-2 rounded-full animate-pulse" style={{ background: '#f87171' }} />
            Modern Web Design Studio
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight tracking-tight text-white">
            Modern Websites{' '}
            <span className="gradient-text">Built to Help</span>{' '}
            Businesses Grow
          </h1>

          <p className="text-lg leading-relaxed max-w-lg" style={{ color: '#b8a99a' }}>
            SiteSparkWeb creates clean, responsive, and high-converting websites that help brands
            look professional, build trust, and turn visitors into customers.
          </p>

          <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4">
            <a
              href="#contact"
              className="btn-primary text-white font-semibold px-7 py-4 rounded-xl text-base inline-flex items-center justify-center gap-2"
            >
              Get a Website
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            <a href="#portfolio" className="btn-outline font-semibold px-7 py-4 rounded-xl text-base text-center" style={{ color: '#e8ddd0' }}>
              View Website Previews
            </a>
          </div>

          <div className="flex items-center gap-6 pt-2">
            {[['100%', 'Client Focused'], ['Fast', 'Turnaround'], ['Clean', 'Modern Design']].map(([val, label]) => (
              <div key={label} className="text-center">
                <div className="text-xl font-bold gradient-text">{val}</div>
                <div className="text-xs" style={{ color: '#7a6a5a' }}>{label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* ── Right: satisfaction meter ── */}
        <div className="flex items-center justify-center py-8 lg:py-0">
          <SatisfactionMeter />
        </div>

      </div>
    </section>
  )
}
