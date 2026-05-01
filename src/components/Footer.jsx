export default function Footer() {
  const links = ['Services', 'Portfolio', 'Process', 'Contact']
  return (
    <footer className="px-4 sm:px-6 py-10 text-center md:text-left"
      style={{ borderTop: '1px solid rgba(94,234,212,0.09)' }}>
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <div className="text-lg font-bold gradient-text mb-1">SiteSparkWeb</div>
          <div className="text-sm" style={{ color: '#3a6060' }}>Modern websites for growing businesses.</div>
        </div>
        <div className="flex flex-wrap justify-center gap-6">
          {links.map(l => (
            <a key={l} href={`#${l.toLowerCase()}`} className="text-sm transition-colors" style={{ color: '#4a7a74' }}>{l}</a>
          ))}
        </div>
        <div className="text-center md:text-right">
          <a href="mailto:sean.sitesparkweb@gmail.com" className="text-sm transition-colors block mb-1" style={{ color: '#4a7a74' }}>
            sean.sitesparkweb@gmail.com
          </a>
          <div className="text-xs" style={{ color: '#2a4a46' }}>
            © {new Date().getFullYear()} SiteSparkWeb. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  )
}
