const features = [
  'Custom website design tailored to your brand',
  'Mobile-responsive on every device',
  'Lead capture & CRM integration',
  'On-page SEO optimization',
  'Google Analytics setup',
  'AI chat & automation (optional)',
  'Monthly SEO & content (optional)',
  'Revisions until you are 100% happy',
  'You own everything — no lock-in',
]

export default function Pricing() {
  return (
    <section id="pricing" className="py-20 sm:py-24 px-4 sm:px-6" style={{ background: 'transparent' }}>
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-sm font-semibold tracking-widest uppercase mb-3" style={{ color: '#5eead4' }}>Pricing</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Custom Pricing for <span className="gradient-text">Every Business</span>
          </h2>
          <p className="text-lg max-w-xl mx-auto" style={{ color: '#8ab0aa' }}>
            Every business is different — so every quote is too. Book a free call and we'll put together a package built around your goals and budget.
          </p>
        </div>

        <div
          className="fade-up rounded-2xl p-8 sm:p-10 relative"
          style={{
            background: 'rgba(13,148,136,0.1)',
            border: '1px solid rgba(94,234,212,0.2)',
            boxShadow: '0 0 50px rgba(13,148,136,0.15)',
          }}
        >
          <div className="text-center mb-8">
            <div className="text-5xl font-bold text-white mb-2">Custom Quote</div>
            <p className="text-sm" style={{ color: '#6a9a94' }}>Priced to fit your project — no surprise invoices</p>
          </div>

          <ul className="grid sm:grid-cols-2 gap-3 mb-10">
            {features.map((f, i) => (
              <li key={i} className="flex items-start gap-2.5">
                <svg className="w-4 h-4 flex-shrink-0 mt-0.5" fill="none" stroke="#14b8a6" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-sm" style={{ color: '#a8c4c0' }}>{f}</span>
              </li>
            ))}
          </ul>

          <a href="#contact" className="btn-primary text-white font-semibold py-4 px-8 rounded-xl text-base w-full text-center block">
            Get My Custom Quote
          </a>
          <p className="text-center text-sm mt-4" style={{ color: '#3a6060' }}>Free 20-min call · No commitment required</p>
        </div>
      </div>
    </section>
  )
}
