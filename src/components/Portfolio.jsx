const projects = [
  {
    title: 'Restaurant Website',
    desc: 'Elegant dining experience with online menus, reservations, and rich food photography.',
    color: '#f97316',
    accent: '#fb923c',
    mockup: <RestaurantMockup />,
  },
  {
    title: 'Fitness Coach Website',
    desc: 'High-energy personal training site with program listings, transformations, and booking.',
    color: '#10b981',
    accent: '#34d399',
    mockup: <FitnessMockup />,
  },
  {
    title: 'Contractor Website',
    desc: 'Trust-building site with project galleries, testimonials, and instant quote forms.',
    color: '#f59e0b',
    accent: '#fbbf24',
    mockup: <ContractorMockup />,
  },
  {
    title: 'Personal Brand Website',
    desc: 'Sophisticated personal site to build authority, share content, and attract opportunities.',
    color: '#8b5cf6',
    accent: '#a78bfa',
    mockup: <PersonalMockup />,
  },
]

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-24 px-4 sm:px-6" style={{ background: '#17130f' }}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 sm:mb-16">
          <p className="text-sm font-semibold tracking-widest uppercase mb-3" style={{ color: '#f87171' }}>Website Previews</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            See What We <span className="gradient-text">Can Build for You</span>
          </h2>
          <p className="text-base sm:text-lg max-w-xl mx-auto" style={{ color: '#9a8878' }}>
            Explore concept previews across industries — each one designed to convert visitors into customers.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          {projects.map((p, i) => (
            <div
              key={i}
              className="fade-up card-hover rounded-2xl overflow-hidden group"
              style={{
                border: '1px solid rgba(248,113,113,0.09)',
                background: '#1e1812',
                transitionDelay: `${i * 60}ms`,
              }}
            >
              {/* Mini mockup */}
              <div
                className="relative overflow-hidden"
                style={{ height: '220px', background: '#161008', borderBottom: '1px solid rgba(248,113,113,0.07)' }}
              >
                {/* Browser bar */}
                <div
                  className="flex items-center gap-1.5 px-3 py-2"
                  style={{ background: 'rgba(255,255,255,0.04)', borderBottom: '1px solid rgba(255,255,255,0.06)' }}
                >
                  <div className="w-2 h-2 rounded-full bg-red-400/60 flex-shrink-0" />
                  <div className="w-2 h-2 rounded-full bg-yellow-400/60 flex-shrink-0" />
                  <div className="w-2 h-2 rounded-full bg-green-400/60 flex-shrink-0" />
                  <div
                    className="flex-1 mx-2 h-4 rounded flex items-center px-2 gap-1 min-w-0"
                    style={{ background: 'rgba(255,255,255,0.06)' }}
                  >
                    <div className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: p.color, opacity: 0.8 }} />
                    <div className="h-1 w-16 rounded" style={{ background: 'rgba(255,255,255,0.2)' }} />
                  </div>
                </div>
                {/* Mockup content */}
                <div className="scale-95 origin-top">
                  {p.mockup}
                </div>
              </div>

              {/* Card info */}
              <div className="p-5">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-white font-semibold">{p.title}</h3>
                  <span
                    className="text-xs px-2 py-0.5 rounded-full font-medium flex-shrink-0 ml-2"
                    style={{ background: `${p.color}20`, color: p.accent }}
                  >
                    Concept
                  </span>
                </div>
                <p className="text-sm leading-relaxed mb-4" style={{ color: '#7a6a5a' }}>{p.desc}</p>
                <a
                  href="#contact"
                  className="text-sm font-semibold flex items-center gap-1.5 group/link transition-colors duration-200 w-fit"
                  style={{ color: p.accent }}
                >
                  Preview Concept
                  <svg className="w-3.5 h-3.5 transition-transform group-hover/link:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function RestaurantMockup() {
  return (
    <div className="px-3 py-2 space-y-2">
      <div className="h-20 rounded-lg flex items-end px-3 pb-3" style={{ background: 'linear-gradient(135deg, #7c2d12 0%, #ea580c 100%)' }}>
        <div>
          <div className="h-2 w-20 bg-white/70 rounded mb-1" />
          <div className="h-1.5 w-14 bg-white/40 rounded" />
        </div>
      </div>
      <div className="flex gap-2">
        {['Starters', 'Mains', 'Desserts'].map(t => (
          <div key={t} className="text-xs px-2 py-1 rounded" style={{ background: 'rgba(249,115,22,0.2)', color: '#fb923c' }}>{t}</div>
        ))}
      </div>
      <div className="grid grid-cols-2 gap-2">
        {[1,2].map(i => (
          <div key={i} className="rounded p-2" style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.06)' }}>
            <div className="h-10 rounded mb-1.5" style={{ background: 'rgba(249,115,22,0.15)' }} />
            <div className="h-1.5 w-full bg-white/20 rounded mb-1" />
            <div className="h-1.5 w-2/3 bg-white/10 rounded" />
          </div>
        ))}
      </div>
    </div>
  )
}

function FitnessMockup() {
  return (
    <div className="px-3 py-2 space-y-2">
      <div className="h-20 rounded-lg flex items-center px-3 gap-3" style={{ background: 'linear-gradient(135deg, #052e16 0%, #059669 100%)' }}>
        <div className="w-10 h-10 rounded-full flex-shrink-0" style={{ background: 'rgba(255,255,255,0.2)' }} />
        <div>
          <div className="h-2 w-16 bg-white/70 rounded mb-1" />
          <div className="h-1.5 w-12 bg-white/40 rounded" />
        </div>
      </div>
      <div className="grid grid-cols-3 gap-1.5">
        {['Strength', 'Cardio', 'Nutrition'].map(t => (
          <div key={t} className="text-center py-2 rounded text-xs" style={{ background: 'rgba(16,185,129,0.1)', color: '#34d399', border: '1px solid rgba(16,185,129,0.2)' }}>{t}</div>
        ))}
      </div>
      <div className="flex items-center gap-2 p-2 rounded" style={{ background: 'rgba(16,185,129,0.08)', border: '1px solid rgba(16,185,129,0.15)' }}>
        <div className="w-6 h-6 rounded flex-shrink-0" style={{ background: 'rgba(16,185,129,0.3)' }} />
        <div className="flex-1 min-w-0">
          <div className="h-1.5 w-full bg-white/20 rounded mb-1" />
          <div className="h-1.5 w-2/3 bg-white/10 rounded" />
        </div>
        <div className="text-xs flex-shrink-0" style={{ color: '#34d399' }}>Book</div>
      </div>
    </div>
  )
}

function ContractorMockup() {
  return (
    <div className="px-3 py-2 space-y-2">
      <div className="h-20 rounded-lg flex items-center px-4 gap-3" style={{ background: 'linear-gradient(135deg, #451a03 0%, #d97706 100%)' }}>
        <div>
          <div className="h-2 w-24 bg-white/80 rounded mb-1.5" />
          <div className="h-1.5 w-16 bg-white/50 rounded mb-2" />
          <div className="h-5 w-14 rounded" style={{ background: 'rgba(255,255,255,0.25)' }} />
        </div>
      </div>
      <div className="grid grid-cols-3 gap-1.5">
        {['Roofing', 'Siding', 'Windows'].map(t => (
          <div key={t} className="text-center py-1.5 rounded text-xs" style={{ background: 'rgba(245,158,11,0.1)', color: '#fbbf24', border: '1px solid rgba(245,158,11,0.2)' }}>{t}</div>
        ))}
      </div>
      <div className="grid grid-cols-2 gap-1.5">
        {[1,2].map(i => (
          <div key={i} className="h-12 rounded" style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.06)' }} />
        ))}
      </div>
    </div>
  )
}

function PersonalMockup() {
  return (
    <div className="px-3 py-2 space-y-2">
      <div className="flex items-center gap-3 py-2">
        <div className="w-12 h-12 rounded-full flex-shrink-0" style={{ background: 'linear-gradient(135deg, #5b21b6, #8b5cf6)', border: '2px solid rgba(139,92,246,0.4)' }} />
        <div>
          <div className="h-2 w-20 bg-white/70 rounded mb-1" />
          <div className="h-1.5 w-14 bg-purple-400/50 rounded" />
        </div>
      </div>
      <div className="h-1 w-full rounded" style={{ background: 'linear-gradient(90deg, #8b5cf6, #06b6d4)' }} />
      <div className="space-y-1.5">
        <div className="h-1.5 bg-white/20 rounded" />
        <div className="h-1.5 bg-white/15 rounded w-5/6" />
        <div className="h-1.5 bg-white/10 rounded w-4/6" />
      </div>
      <div className="flex gap-1.5">
        {['Blog', 'Work', 'Contact'].map(t => (
          <div key={t} className="flex-1 text-center py-1 rounded text-xs" style={{ background: 'rgba(139,92,246,0.15)', color: '#a78bfa', border: '1px solid rgba(139,92,246,0.2)' }}>{t}</div>
        ))}
      </div>
    </div>
  )
}
