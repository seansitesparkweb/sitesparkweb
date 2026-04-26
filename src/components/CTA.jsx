export default function CTA() {
  return (
    <section className="py-20 sm:py-24 px-4 sm:px-6 relative overflow-hidden" style={{ background: '#12100d' }}>
      <div className="glow-orb w-[500px] h-[500px] opacity-18" style={{ background: '#d97706', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }} />

      <div className="max-w-4xl mx-auto text-center relative">
        <div
          className="p-8 sm:p-12 lg:p-16 rounded-3xl"
          style={{
            background: '#1e1812',
            border: '1px solid rgba(251,191,36,0.12)',
            backdropFilter: 'blur(20px)',
          }}
        >
          <div className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full text-sm mb-6" style={{ color: '#fbbf24' }}>
            <span className="w-2 h-2 rounded-full animate-pulse" style={{ background: '#fbbf24' }} />
            Now Accepting New Clients
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-5 leading-tight">
            Ready to Upgrade Your{' '}
            <span className="gradient-text">Online Presence?</span>
          </h2>

          <p className="text-lg mb-10 max-w-xl mx-auto leading-relaxed" style={{ color: '#9a8878' }}>
            Let's build a website that makes your business look professional and helps customers take action.
          </p>

          <a
            href="#contact"
            className="btn-primary inline-flex items-center gap-2 text-white font-semibold px-10 py-4 rounded-xl text-lg"
          >
            Start Your Website
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>

          <p className="text-sm mt-6" style={{ color: '#4a3a2a' }}>No commitment required · Free initial consultation</p>
        </div>
      </div>
    </section>
  )
}
