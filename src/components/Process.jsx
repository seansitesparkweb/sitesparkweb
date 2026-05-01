const steps = [
  { num: '01', title: 'Discover Your Goals',  desc: 'We start with a conversation about your business, your audience, and what you want your website to achieve.', color: '#5eead4' },
  { num: '02', title: 'Design the Layout',    desc: 'We craft a clean, modern design concept built around your brand identity and business objectives.',            color: '#2dd4bf' },
  { num: '03', title: 'Build and Refine',     desc: 'We build your site and work through revisions together until every detail is exactly right.',                  color: '#14b8a6' },
  { num: '04', title: 'Launch Your Website',  desc: 'Your site goes live — fully tested, optimized, and ready to make a great impression from day one.',            color: '#0d9488' },
]

export default function Process() {
  return (
    <section id="process" className="py-20 sm:py-24 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-sm font-semibold tracking-widest uppercase mb-3" style={{ color: '#5eead4' }}>How It Works</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            From Idea to <span className="gradient-text">Live Website</span>
          </h2>
          <p className="text-lg max-w-xl mx-auto" style={{ color: '#8ab0aa' }}>
            A simple, transparent process so you always know what's happening and what comes next.
          </p>
        </div>

        <div className="relative">
          <div className="hidden lg:block absolute top-10 left-0 right-0 h-px"
            style={{ background: 'linear-gradient(90deg, transparent, rgba(13,148,136,0.4), rgba(15,118,110,0.4), transparent)', margin: '0 10%' }} />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((s, i) => (
              <div key={i} className="fade-up relative" style={{ transitionDelay: `${i * 100}ms` }}>
                <div className="w-20 h-20 rounded-2xl flex items-center justify-center text-2xl font-bold mb-6 mx-auto lg:mx-0"
                  style={{ background: `${s.color}14`, border: `1px solid ${s.color}35`, color: s.color, boxShadow: `0 0 30px ${s.color}18` }}>
                  {s.num}
                </div>
                <h3 className="text-white font-semibold text-lg mb-3 text-center lg:text-left">{s.title}</h3>
                <p className="text-sm leading-relaxed text-center lg:text-left" style={{ color: '#5a8a84' }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
