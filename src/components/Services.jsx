const services = [
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    title: 'Website Design',
    tagline: 'Look like the obvious choice',
    desc: 'Custom, conversion-focused websites built from scratch. Modern, fast, and designed to make visitors take action.',
    color: '#14b8a6',
    results: ['More leads from day one', 'Mobile-first on every device', 'Ready to launch once your vision is locked in'],
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    ),
    title: 'SEO',
    tagline: 'Get found on Google',
    desc: 'On-page SEO that gets your business ranking for the searches your customers are already making.',
    color: '#6366f1',
    results: ['Rank for local keywords', 'More organic traffic', 'Long-term visibility'],
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
      </svg>
    ),
    title: 'Lead Generation',
    tagline: 'Turn visitors into customers',
    desc: 'Smart forms, CRM integration, and conversion flows that capture and qualify leads while you sleep.',
    color: '#f97316',
    results: ['Leads sent to your inbox', 'CRM & calendar sync', 'Automated follow-up'],
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: 'AI Automation',
    tagline: 'Work less, earn more',
    desc: 'AI-powered chat, automated responses, and smart workflows that handle repetitive tasks so you can focus on growth.',
    color: '#8b5cf6',
    results: ['24/7 AI lead capture', 'Auto-qualify prospects', 'Reduce manual follow-up'],
  },
]

export default function Services() {
  return (
    <section id="services" className="py-20 sm:py-24 px-4 sm:px-6" style={{ background: 'transparent' }}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-sm font-semibold tracking-widest uppercase mb-3" style={{ color: '#5eead4' }}>What We Do</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Built to <span className="gradient-text">Grow Your Business</span>
          </h2>
          <p className="text-lg max-w-xl mx-auto" style={{ color: '#8ab0aa' }}>
            Every service is designed around one goal: more customers for your business.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          {services.map((s, i) => (
            <div
              key={i}
              className="fade-up card-hover p-7 rounded-2xl"
              style={{
                background: 'rgba(13,148,136,0.07)',
                border: '1px solid rgba(94,234,212,0.08)',
                transitionDelay: `${i * 80}ms`,
              }}
            >
              <div className="flex items-start gap-5">
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0"
                  style={{ background: `${s.color}15`, color: s.color, border: `1px solid ${s.color}30` }}
                >
                  {s.icon}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-xs font-semibold uppercase tracking-widest mb-1" style={{ color: s.color }}>{s.tagline}</p>
                  <h3 className="text-white font-bold text-xl mb-2">{s.title}</h3>
                  <p className="text-sm leading-relaxed mb-4" style={{ color: '#8ab0aa' }}>{s.desc}</p>
                  <ul className="space-y-1.5">
                    {s.results.map((r, j) => (
                      <li key={j} className="flex items-center gap-2 text-xs" style={{ color: '#6a9a94' }}>
                        <span style={{ color: s.color }}>✓</span> {r}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
