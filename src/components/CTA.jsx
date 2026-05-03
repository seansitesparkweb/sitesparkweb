export default function CTA() {
  return (
    <section className="py-20 sm:py-24 px-4 sm:px-6 relative overflow-hidden">
      <div className="glow-orb w-[500px] h-[500px] opacity-15" style={{ background: '#0d9488', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }} />
      <div className="max-w-4xl mx-auto text-center relative">
        <div className="p-8 sm:p-12 lg:p-16 rounded-3xl"
          style={{ background: 'rgba(13,148,136,0.08)', border: '1px solid rgba(94,234,212,0.13)', backdropFilter: 'blur(20px)' }}>
          <div className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full text-sm mb-6" style={{ color: '#5eead4' }}>
            <span className="w-2 h-2 rounded-full animate-pulse" style={{ background: '#5eead4' }} />
            Now Accepting New Clients
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-5 leading-tight">
            Ready to Build a Website That{' '}
            <span className="gradient-text">Actually Grows Your Business?</span>
          </h2>
          <p className="text-lg mb-10 max-w-xl mx-auto leading-relaxed" style={{ color: '#8ab0aa' }}>
            Book a free 20-minute call. We'll learn about your business and show you exactly how we'd build your site — no pressure, no obligation.
          </p>
          <a href="#contact" className="btn-primary inline-flex items-center gap-2 text-white font-semibold px-10 py-4 rounded-xl text-lg">
            Book Your Free Call
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
          <p className="text-sm mt-6" style={{ color: '#2a5050' }}>No commitment required · Free 20-min strategy call</p>
        </div>
      </div>
    </section>
  )
}
