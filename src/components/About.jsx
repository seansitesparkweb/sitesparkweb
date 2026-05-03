const stats = [
  { value: '50+', label: 'Sites Built' },
  { value: '100%', label: 'Client Satisfaction' },
  { value: 'A+', label: 'Design Quality' },
  { value: 'Flexible', label: 'Contracts' },
]

const promises = [
  'Direct communication — no account managers or middlemen',
  'Revisions until you are 100% happy with the result',
  'Mobile-first design on every single project',
  'Full access to your website — we handle the technical side',
]

export default function About() {
  return (
    <section id="about" className="py-20 sm:py-24 px-4 sm:px-6" style={{ background: 'transparent' }}>
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">

          <div className="space-y-6">
            <p className="text-sm font-semibold tracking-widest uppercase" style={{ color: '#5eead4' }}>About SiteSparkWeb</p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
              We're Not a Big Agency.{' '}
              <span className="gradient-text">That's the Point.</span>
            </h2>
            <p className="text-base leading-relaxed" style={{ color: '#8ab0aa' }}>
              Big agencies charge $10,000+ and hand your project off to a junior designer you'll never speak to. We work differently. Every project is handled personally — fast communication, real craftsmanship, and a genuine focus on growing your business.
            </p>
            <p className="text-base leading-relaxed" style={{ color: '#8ab0aa' }}>
              We started SiteSparkWeb because we kept seeing local businesses lose customers to competitors with better-looking websites. A great website shouldn't cost a fortune — it should just work.
            </p>

            <div className="space-y-3 pt-2">
              {promises.map((p, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                    style={{ background: 'rgba(20,184,166,0.15)', border: '1px solid rgba(20,184,166,0.3)' }}>
                    <svg className="w-3 h-3" fill="none" stroke="#14b8a6" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-sm leading-relaxed" style={{ color: '#a8c4c0' }}>{p}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {stats.map((s, i) => (
              <div
                key={i}
                className="fade-up p-6 rounded-2xl text-center"
                style={{
                  background: 'rgba(13,148,136,0.08)',
                  border: '1px solid rgba(94,234,212,0.1)',
                  transitionDelay: `${i * 80}ms`,
                }}
              >
                <div className="text-3xl sm:text-4xl font-bold gradient-text mb-2">{s.value}</div>
                <div className="text-sm" style={{ color: '#6a9a94' }}>{s.label}</div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}
