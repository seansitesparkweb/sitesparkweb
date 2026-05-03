const tiers = [
  {
    name: 'Starter',
    price: '$999',
    desc: 'Perfect for getting your business online fast with a clean, professional presence.',
    popular: false,
    color: '#5eead4',
    features: [
      '5-page custom website',
      'Mobile-responsive design',
      'Contact form',
      'Basic SEO setup',
      '2-week delivery',
      '2 rounds of revisions',
    ],
  },
  {
    name: 'Growth',
    price: '$1,999',
    desc: 'The complete package for businesses ready to attract leads and convert customers.',
    popular: true,
    color: '#14b8a6',
    features: [
      'Everything in Starter',
      'Up to 10 pages',
      'Lead capture & CRM integration',
      'On-page SEO optimization',
      'Google Analytics setup',
      'Priority delivery & support',
      'Unlimited revisions',
    ],
  },
  {
    name: 'Scale',
    price: 'Custom',
    desc: 'For established businesses that need advanced automation and ongoing growth.',
    popular: false,
    color: '#0d9488',
    features: [
      'Everything in Growth',
      'AI chat & automation',
      'Monthly SEO & content',
      'Conversion rate optimization',
      'Dedicated account manager',
      'Ongoing maintenance & updates',
    ],
  },
]

export default function Pricing() {
  return (
    <section id="pricing" className="py-20 sm:py-24 px-4 sm:px-6" style={{ background: 'transparent' }}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-sm font-semibold tracking-widest uppercase mb-3" style={{ color: '#5eead4' }}>Transparent Pricing</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Simple Plans, <span className="gradient-text">Real Results</span>
          </h2>
          <p className="text-lg max-w-xl mx-auto" style={{ color: '#8ab0aa' }}>
            No hidden fees, no surprise invoices. Pick a plan that fits where you are today.
          </p>
        </div>

        <div className="grid sm:grid-cols-3 gap-6 items-start">
          {tiers.map((t, i) => (
            <div
              key={i}
              className={`fade-up rounded-2xl p-7 flex flex-col relative ${t.popular ? 'md:-mt-4' : ''}`}
              style={{
                background: t.popular ? 'rgba(13,148,136,0.14)' : 'rgba(13,148,136,0.07)',
                border: t.popular ? '1px solid rgba(94,234,212,0.25)' : '1px solid rgba(94,234,212,0.08)',
                boxShadow: t.popular ? '0 0 40px rgba(13,148,136,0.18)' : 'none',
                transitionDelay: `${i * 80}ms`,
              }}
            >
              {t.popular && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                  <span className="text-xs font-bold px-4 py-1.5 rounded-full"
                    style={{ background: 'linear-gradient(135deg, #0d9488, #14b8a6)', color: '#fff' }}>
                    Most Popular
                  </span>
                </div>
              )}

              <div className="mb-6">
                <h3 className="text-white font-bold text-xl mb-1">{t.name}</h3>
                <p className="text-sm leading-relaxed" style={{ color: '#7a9a94' }}>{t.desc}</p>
              </div>

              <div className="mb-6">
                <span className="text-4xl font-bold text-white">{t.price}</span>
                {t.price !== 'Custom' && <span className="text-sm ml-1" style={{ color: '#5a7a74' }}>one-time</span>}
              </div>

              <ul className="space-y-3 flex-1 mb-8">
                {t.features.map((f, j) => (
                  <li key={j} className="flex items-start gap-2.5">
                    <svg className="w-4 h-4 flex-shrink-0 mt-0.5" fill="none" stroke={t.color} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-sm" style={{ color: '#a8c4c0' }}>{f}</span>
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                className={`text-center font-semibold py-3 px-6 rounded-xl text-sm transition-all duration-200 ${t.popular ? 'btn-primary text-white' : ''}`}
                style={!t.popular ? {
                  background: 'rgba(94,234,212,0.08)',
                  border: '1px solid rgba(94,234,212,0.18)',
                  color: '#5eead4',
                } : {}}
              >
                {t.price === 'Custom' ? "Let's Talk" : 'Get Started'}
              </a>
            </div>
          ))}
        </div>

        <p className="text-center text-sm mt-10" style={{ color: '#3a6060' }}>
          Not sure which plan is right for you?{' '}
          <a href="#contact" className="underline" style={{ color: '#5eead4' }}>Book a free call</a>{' '}
          and we'll figure it out together.
        </p>
      </div>
    </section>
  )
}
