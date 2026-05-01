export default function Contact() {
  return (
    <section id="contact" className="py-20 sm:py-24 px-4 sm:px-6 relative">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-sm font-semibold tracking-widest uppercase mb-3" style={{ color: '#5eead4' }}>Get in Touch</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-5 leading-tight">
            Let's Build Something <span className="gradient-text">Great Together</span>
          </h2>
          <p className="text-base sm:text-lg leading-relaxed max-w-xl mx-auto" style={{ color: '#8ab0aa' }}>
            Ready to get started? Fill out the short form and I'll get back to you at my earliest convenience.
          </p>
        </div>

        <div
          className="max-w-2xl mx-auto rounded-2xl p-8 sm:p-10 text-center"
          style={{ background: 'rgba(13,148,136,0.08)', border: '1px solid rgba(94,234,212,0.12)' }}
        >
          <div className="flex justify-center mb-6">
            <div
              className="w-16 h-16 rounded-2xl flex items-center justify-center"
              style={{ background: 'rgba(13,148,136,0.15)', border: '1px solid rgba(94,234,212,0.22)' }}
            >
              <svg className="w-7 h-7" style={{ color: '#5eead4' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
              </svg>
            </div>
          </div>

          <h3 className="text-white text-xl font-semibold mb-2">Start Your Website Project</h3>
          <p className="text-sm leading-relaxed mb-8 max-w-sm mx-auto" style={{ color: '#8ab0aa' }}>
            Fill out the short onboarding form so I can understand your goals and get back to you with next steps.
          </p>

          <a
            href="https://api.leadconnectorhq.com/widget/form/uPdN1naffr3R0xSSXEt2"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary inline-flex items-center gap-2 text-white font-semibold px-8 py-4 rounded-xl text-base"
          >
            Fill Out the Form
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>

          <p className="text-xs mt-5" style={{ color: '#3a6060' }}>Opens in a new tab · Takes about 5–10 minutes</p>
        </div>

        <div className="flex flex-col sm:flex-row justify-center gap-6 sm:gap-10 mt-10">
          {[
            {
              icon: (
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              ),
              label: 'sean.sitesparkweb@gmail.com',
              href: 'mailto:sean.sitesparkweb@gmail.com',
            },
            {
              icon: (
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              ),
              label: "I'll respond at my earliest convenience",
              href: null,
            },
          ].map((item, i) => (
            <div key={i} className="flex items-center justify-center gap-2 text-sm" style={{ color: '#5a7a76' }}>
              <span style={{ color: '#5eead4' }}>{item.icon}</span>
              {item.href ? (
                <a href={item.href} className="transition-colors" style={{ color: '#8ab0aa' }}>{item.label}</a>
              ) : (
                <span>{item.label}</span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
