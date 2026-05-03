import SatisfactionMeter from './SatisfactionMeter'

export default function Hero() {
  return (
    <section className="relative flex flex-col items-center overflow-hidden pt-20" style={{ minHeight: '100svh' }}>
      <div className="glow-orb w-96 h-96 opacity-20" style={{ background: '#0d9488', top: '10%', left: '-8%' }} />
      <div className="glow-orb w-80 h-80 opacity-12" style={{ background: '#0f766e', bottom: '10%', right: '-5%' }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 w-full grid lg:grid-cols-2 gap-12 lg:gap-16 items-center py-16 lg:py-20 flex-1">

        {/* Left copy */}
        <div className="space-y-8">
          <div className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full text-sm" style={{ color: '#5eead4' }}>
            <span className="w-2 h-2 rounded-full animate-pulse" style={{ background: '#5eead4' }} />
            NJ Web Design Studio · Now Accepting Clients
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight tracking-tight text-white">
            Your Website Should Be{' '}
            <span className="gradient-text">Working Harder</span>{' '}
            Than You Are
          </h1>

          <p className="text-lg leading-relaxed max-w-lg" style={{ color: '#a8c4c0' }}>
            We build fast, modern, conversion-focused websites that make your business look
            like the obvious choice — and turn visitors into paying customers.
          </p>

          <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4">
            <a
              href="#contact"
              className="btn-primary text-white font-semibold px-7 py-4 rounded-xl text-base inline-flex items-center justify-center gap-2"
            >
              Book a Free Call
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            <a href="#portfolio" className="btn-outline font-semibold px-7 py-4 rounded-xl text-base text-center" style={{ color: '#e2eeec' }}>
              See Our Work
            </a>
          </div>

          <div className="flex items-center gap-8 pt-2">
            {[['50+', 'Sites Built'], ['3 Wks', 'Avg. Delivery'], ['100%', 'Satisfaction']].map(([val, label]) => (
              <div key={label} className="text-center">
                <div className="text-xl font-bold gradient-text">{val}</div>
                <div className="text-xs" style={{ color: '#5a7a76' }}>{label}</div>
              </div>
            ))}
          </div>

          <div className="flex items-center gap-3 pt-1">
            <div className="flex -space-x-2">
              {['#14b8a6','#0d9488','#0f766e'].map((c, i) => (
                <div key={i} className="w-8 h-8 rounded-full border-2 flex items-center justify-center text-xs font-bold text-white"
                  style={{ background: c, borderColor: '#0c1a19' }}>
                  {['M','J','D'][i]}
                </div>
              ))}
            </div>
            <p className="text-sm" style={{ color: '#6a9a94' }}>
              Trusted by <span style={{ color: '#5eead4' }}>50+ business owners</span> across NJ
            </p>
          </div>
        </div>

        {/* Right: satisfaction meter */}
        <div className="flex items-center justify-center py-8 lg:py-0">
          <SatisfactionMeter />
        </div>

      </div>
    </section>
  )
}
