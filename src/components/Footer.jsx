export default function Footer() {
  const links = ['Services', 'Portfolio', 'Process', 'Contact']

  return (
    <footer
      className="px-4 sm:px-6 py-10 text-center md:text-left"
      style={{ borderTop: '1px solid rgba(248,113,113,0.09)', background: '#12100d' }}
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <div className="text-lg font-bold gradient-text mb-1">SiteSparkWeb</div>
          <div className="text-sm" style={{ color: '#5a4a3a' }}>Modern websites for growing businesses.</div>
        </div>

        <div className="flex flex-wrap justify-center gap-6">
          {links.map(l => (
            <a
              key={l}
              href={`#${l.toLowerCase()}`}
              className="text-sm transition-colors" style={{ color: '#6a5a4a' }}
            >
              {l}
            </a>
          ))}
        </div>

        <div className="text-center md:text-right">
          <a
            href="mailto:sean.sitesparkweb@gmail.com"
            className="text-sm transition-colors block mb-1" style={{ color: '#6a5a4a' }}
          >
            sean.sitesparkweb@gmail.com
          </a>
          <div className="text-xs" style={{ color: '#3a2a1a' }}>
            © {new Date().getFullYear()} SiteSparkWeb. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  )
}
