export default function Contact() {
  return (
    <section id="contact" className="py-20 sm:py-24 px-4 sm:px-6 relative" style={{ background: '#12100d' }}>
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-sm font-semibold tracking-widest uppercase mb-3" style={{ color: '#f87171' }}>Get in Touch</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-5 leading-tight">
            Let's Build Something <span className="gradient-text">Great Together</span>
          </h2>
          <p className="text-base sm:text-lg leading-relaxed max-w-xl mx-auto" style={{ color: '#9a8878' }}>
            Fill out the short form below and I'll get back to you at my earliest convenience.
          </p>

          <a
            href="https://api.leadconnectorhq.com/widget/form/uPdN1naffr3R0xSSXEt2"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary inline-flex items-center gap-2 text-white font-semibold px-7 py-3 rounded-xl text-sm mt-6"
          >
            Fill Out the Form
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </div>

        {/* Embedded form */}
        <div
          className="rounded-2xl overflow-hidden"
          style={{ background: '#1e1812', border: '1px solid rgba(248,113,113,0.1)' }}
        >
          <iframe
            src="https://api.leadconnectorhq.com/widget/form/uPdN1naffr3R0xSSXEt2"
            style={{ width: '100%', height: '741px', border: 'none' }}
            id="inline-uPdN1naffr3R0xSSXEt2"
            data-layout='{"id":"INLINE"}'
            data-trigger-type="alwaysShow"
            data-trigger-value=""
            data-activation-type="alwaysActivated"
            data-activation-value=""
            data-deactivation-type="neverDeactivate"
            data-deactivation-value=""
            data-form-name="Website Onboarding Form"
            data-height="741"
            data-layout-iframe-id="inline-uPdN1naffr3R0xSSXEt2"
            data-form-id="uPdN1naffr3R0xSSXEt2"
            title="Website Onboarding Form"
          />
        </div>

        {/* Contact details row */}
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
            <div key={i} className="flex items-center justify-center gap-2 text-slate-500 text-sm">
              <span style={{ color: '#f87171' }}>{item.icon}</span>
              {item.href ? (
                <a href={item.href} className="transition-colors" style={{ color: '#9a8878' }}>{item.label}</a>
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
