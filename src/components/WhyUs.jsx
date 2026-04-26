const reasons = [
  {
    icon: '🎨',
    title: 'Clean Modern Designs',
    desc: 'Every site is built with intention — no templates, no shortcuts. Just sharp, purposeful design.',
  },
  {
    icon: '🎯',
    title: 'Built With Your Goals in Mind',
    desc: 'Your website should do more than look good. We design with conversion, trust, and growth as the objective.',
  },
  {
    icon: '💬',
    title: 'Easy Communication',
    desc: "No jargon, no run-around. You'll always know where things stand and what comes next.",
  },
  {
    icon: '📱',
    title: 'Mobile-First Layouts',
    desc: 'Over 60% of web traffic is mobile. Every site we build looks and works perfectly on all screen sizes.',
  },
  {
    icon: '🏆',
    title: 'Professional Online Presence',
    desc: 'First impressions matter. We make sure your website reflects the quality and credibility of your business.',
  },
  {
    icon: '📈',
    title: 'Focused on Getting You More Leads',
    desc: 'We design every element with a purpose — to attract the right visitors and turn them into paying customers.',
  },
]

export default function WhyUs() {
  return (
    <section className="py-20 sm:py-24 px-4 sm:px-6 relative overflow-hidden" style={{ background: '#12100d' }}>
      <div className="glow-orb w-96 h-96 opacity-12" style={{ background: '#ea580c', bottom: '-10%', right: '-5%' }} />

      <div className="max-w-7xl mx-auto relative">
        <div className="text-center mb-16">
          <p className="text-sm font-semibold tracking-widest uppercase mb-3" style={{ color: '#f59e0b' }}>Why SiteSparkWeb</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            A Partner That's <span className="gradient-text">Invested in Your Growth</span>
          </h2>
          <p className="text-lg max-w-xl mx-auto" style={{ color: '#9a8878' }}>
            We're not just building websites — we're building tools that help your business win online.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((r, i) => (
            <div
              key={i}
              className="fade-up p-6 rounded-2xl group card-hover"
              style={{
                background: '#1e1812',
                border: '1px solid rgba(251,191,36,0.08)',
                transitionDelay: `${i * 60}ms`,
              }}
            >
              <div className="text-3xl mb-4">{r.icon}</div>
              <h3 className="text-white font-semibold text-base mb-2">{r.title}</h3>
              <p className="text-sm leading-relaxed" style={{ color: '#7a6a5a' }}>{r.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
