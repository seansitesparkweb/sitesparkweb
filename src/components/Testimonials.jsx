const testimonials = [
  {
    quote: 'We went from 2-3 leads a month to over 20 after launching our new site. SiteSparkWeb understood exactly what our customers needed to see to pick up the phone.',
    name: 'Mike R.',
    role: 'Owner · Local Roofing Co.',
    delay: 0,
  },
  {
    quote: "SiteSparkWeb didn't just build me a website — they built me a client machine. My bookings doubled in the first month and people constantly tell me how professional my site looks.",
    name: 'Jessica T.',
    role: 'Personal Fitness Coach',
    delay: 100,
  },
  {
    quote: 'Professional from start to finish. They delivered faster than promised and the design blew me away. My competitors are still using sites from 2012.',
    name: 'David M.',
    role: 'General Contractor',
    delay: 200,
  },
]

function Stars() {
  return (
    <div className="flex gap-0.5 mb-4">
      {[...Array(5)].map((_, i) => (
        <svg key={i} className="w-4 h-4" fill="#14b8a6" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  )
}

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 sm:py-24 px-4 sm:px-6" style={{ background: 'transparent' }}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-sm font-semibold tracking-widest uppercase mb-3" style={{ color: '#5eead4' }}>Client Results</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Real Businesses. <span className="gradient-text">Real Growth.</span>
          </h2>
          <p className="text-lg max-w-xl mx-auto" style={{ color: '#8ab0aa' }}>
            Don't take our word for it — here's what our clients say after launching with SiteSparkWeb.
          </p>
        </div>

        <div className="grid sm:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="fade-up p-7 rounded-2xl flex flex-col"
              style={{
                background: 'rgba(13,148,136,0.07)',
                border: '1px solid rgba(94,234,212,0.09)',
                borderLeft: '3px solid #14b8a6',
                transitionDelay: `${t.delay}ms`,
              }}
            >
              <Stars />
              <p className="text-sm leading-relaxed flex-1 mb-6" style={{ color: '#a8c4c0' }}>
                "{t.quote}"
              </p>
              <div>
                <div className="text-white font-semibold text-sm">{t.name}</div>
                <div className="text-xs mt-0.5" style={{ color: '#5a8a84' }}>{t.role}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
