export default function HeroBackground() {
  return (
    <div style={{ position: 'absolute', inset: 0, overflow: 'hidden', pointerEvents: 'none', zIndex: 0 }}>

      {/* ── Base gradient wash ── */}
      <div style={{
        position: 'absolute', inset: 0,
        background: 'radial-gradient(ellipse 80% 60% at 75% 50%, rgba(185,28,28,0.12) 0%, transparent 70%)',
      }} />
      <div style={{
        position: 'absolute', inset: 0,
        background: 'radial-gradient(ellipse 50% 40% at 10% 80%, rgba(120,20,20,0.1) 0%, transparent 60%)',
      }} />

      {/* ── Faint grid ── */}
      <svg style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }} aria-hidden="true">
        <defs>
          <pattern id="herogrid" width="64" height="64" patternUnits="userSpaceOnUse">
            <path d="M 64 0 L 0 0 0 64" fill="none" stroke="rgba(255,255,255,0.032)" strokeWidth="0.5" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#herogrid)" />
      </svg>

      {/* ── Rotating decorative rings ── */}
      <div style={{
        position: 'absolute', width: 560, height: 560, borderRadius: '50%',
        border: '1px solid rgba(248,113,113,0.07)',
        right: '-110px', top: '50%', transform: 'translateY(-50%)',
        animation: 'spin-slow 80s linear infinite',
      }} />
      <div style={{
        position: 'absolute', width: 380, height: 380, borderRadius: '50%',
        border: '1px solid rgba(248,113,113,0.05)',
        right: '-20px', top: '50%', transform: 'translateY(-50%)',
        animation: 'spin-rev 50s linear infinite',
      }} />

      {/* ── Large SVG wireframe browser (decorative, far right) ── */}
      <svg
        width="420" height="290"
        viewBox="0 0 420 290"
        style={{ position: 'absolute', right: '-30px', top: '50%', transform: 'translateY(-52%)', opacity: 0.055 }}
        aria-hidden="true"
      >
        {/* Browser shell */}
        <rect x="1" y="1" width="418" height="288" rx="10" fill="none" stroke="white" strokeWidth="1.2" />
        {/* Chrome bar */}
        <rect x="1" y="1" width="418" height="32" rx="10" fill="none" stroke="white" strokeWidth="1.2" />
        <line x1="1" y1="32" x2="419" y2="32" stroke="white" strokeWidth="0.8" />
        {/* Traffic lights */}
        <circle cx="20" cy="16" r="4" stroke="white" strokeWidth="0.8" fill="none" />
        <circle cx="34" cy="16" r="4" stroke="white" strokeWidth="0.8" fill="none" />
        <circle cx="48" cy="16" r="4" stroke="white" strokeWidth="0.8" fill="none" />
        {/* Address bar */}
        <rect x="70" y="9" width="200" height="14" rx="3" fill="none" stroke="white" strokeWidth="0.7" />
        {/* Hero block */}
        <rect x="16" y="48" width="388" height="80" rx="4" fill="none" stroke="white" strokeWidth="0.7" />
        {/* Nav items */}
        <rect x="16" y="140" width="60" height="8" rx="2" fill="none" stroke="white" strokeWidth="0.6" />
        <rect x="86" y="140" width="60" height="8" rx="2" fill="none" stroke="white" strokeWidth="0.6" />
        <rect x="156" y="140" width="60" height="8" rx="2" fill="none" stroke="white" strokeWidth="0.6" />
        {/* Content cards */}
        <rect x="16" y="162" width="120" height="80" rx="4" fill="none" stroke="white" strokeWidth="0.7" />
        <rect x="150" y="162" width="120" height="80" rx="4" fill="none" stroke="white" strokeWidth="0.7" />
        <rect x="284" y="162" width="120" height="80" rx="4" fill="none" stroke="white" strokeWidth="0.7" />
        {/* Text lines inside cards */}
        {[0, 1, 2].map(col => (
          [0, 1, 2].map(row => (
            <line
              key={`${col}-${row}`}
              x1={16 + col * 134 + 10} y1={186 + row * 12}
              x2={16 + col * 134 + (row === 0 ? 100 : row === 1 ? 80 : 60)} y2={186 + row * 12}
              stroke="white" strokeWidth="0.6"
            />
          ))
        ))}
        {/* CTA button area */}
        <rect x="16" y="256" width="80" height="20" rx="3" fill="none" stroke="white" strokeWidth="0.8" />
        <rect x="106" y="256" width="60" height="20" rx="3" fill="none" stroke="white" strokeWidth="0.5" />
      </svg>

      {/* ── Floating card 1: Browser mockup — top right ── */}
      <div style={{
        position: 'absolute', top: '6%', right: '2%',
        width: 176,
        background: '#1c1410',
        border: '1px solid rgba(248,113,113,0.18)',
        borderRadius: 12,
        overflow: 'hidden',
        animation: 'bgFloat1 10s ease-in-out infinite',
        boxShadow: '0 20px 40px rgba(0,0,0,0.5), 0 0 0 0.5px rgba(248,113,113,0.08)',
      }}>
        {/* Chrome */}
        <div style={{ background: 'rgba(255,255,255,0.04)', padding: '6px 10px', display: 'flex', alignItems: 'center', gap: 4, borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
          {['#f87171','#fbbf24','#34d399'].map((c,i) => (
            <div key={i} style={{ width: 6, height: 6, borderRadius: '50%', background: c, opacity: 0.7 }} />
          ))}
          <div style={{ flex: 1, height: 3.5, background: 'rgba(255,255,255,0.08)', borderRadius: 2, marginLeft: 6 }} />
        </div>
        {/* Content */}
        <div style={{ padding: '10px 12px', display: 'flex', flexDirection: 'column', gap: 5 }}>
          <div style={{ height: 24, background: 'linear-gradient(90deg, rgba(220,38,38,0.3), rgba(185,28,28,0.12))', borderRadius: 4 }} />
          <div style={{ display: 'flex', gap: 4 }}>
            {[40,28,34].map((w,i) => <div key={i} style={{ height: 2.5, width: w, background: 'rgba(255,255,255,0.1)', borderRadius: 2 }} />)}
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
            <div style={{ height: 2.5, background: 'rgba(255,255,255,0.1)', borderRadius: 2 }} />
            <div style={{ height: 2.5, width: '78%', background: 'rgba(255,255,255,0.07)', borderRadius: 2 }} />
            <div style={{ height: 2.5, width: '58%', background: 'rgba(255,255,255,0.05)', borderRadius: 2 }} />
          </div>
          <div style={{ display: 'flex', gap: 4, marginTop: 2 }}>
            <div style={{ height: 13, flex: 1, background: 'rgba(220,38,38,0.5)', borderRadius: 3 }} />
            <div style={{ height: 13, flex: 1, background: 'rgba(255,255,255,0.05)', borderRadius: 3, border: '1px solid rgba(255,255,255,0.08)' }} />
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 4 }}>
            {[1,2,3,4].map(i => <div key={i} style={{ height: 18, background: 'rgba(255,255,255,0.04)', borderRadius: 3, border: '1px solid rgba(255,255,255,0.06)' }} />)}
          </div>
        </div>
      </div>

      {/* ── Floating card 2: Scores — bottom right ── */}
      <div style={{
        position: 'absolute', bottom: '9%', right: '2%',
        width: 152,
        background: '#1c1410',
        border: '1px solid rgba(248,113,113,0.18)',
        borderRadius: 12,
        padding: '13px 14px',
        animation: 'bgFloat2 13s ease-in-out infinite 1.8s',
        boxShadow: '0 20px 40px rgba(0,0,0,0.5)',
      }}>
        <div style={{ fontSize: 8.5, color: '#f87171', fontWeight: 700, letterSpacing: '1.5px', marginBottom: 10, textTransform: 'uppercase', fontFamily: 'Inter, sans-serif', opacity: 0.85 }}>
          Site Scores
        </div>
        {[
          { label: 'Performance', val: 98, color: '#34d399' },
          { label: 'SEO',         val: 100, color: '#60a5fa' },
          { label: 'Design',      val: 96,  color: '#f87171' },
        ].map((m, i) => (
          <div key={i} style={{ marginBottom: i < 2 ? 9 : 0 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 3 }}>
              <span style={{ fontSize: 9, color: 'rgba(255,255,255,0.4)', fontFamily: 'Inter, sans-serif' }}>{m.label}</span>
              <span style={{ fontSize: 9, color: m.color, fontWeight: 700, fontFamily: 'Inter, sans-serif' }}>{m.val}</span>
            </div>
            <div style={{ height: 3, background: 'rgba(255,255,255,0.07)', borderRadius: 2 }}>
              <div style={{ height: '100%', width: `${m.val}%`, background: m.color, borderRadius: 2, opacity: 0.7 }} />
            </div>
          </div>
        ))}
      </div>

      {/* ── Floating card 3: Layers panel — left edge ── */}
      <div style={{
        position: 'absolute', top: '30%', left: '0px',
        width: 128,
        background: '#1a1210',
        border: '1px solid rgba(248,113,113,0.12)',
        borderRadius: '0 12px 12px 0',
        padding: '11px 12px 11px 14px',
        animation: 'bgFloat3 15s ease-in-out infinite 3s',
        opacity: 0.65,
        boxShadow: '4px 0 24px rgba(0,0,0,0.3)',
      }}>
        <div style={{ fontSize: 8, color: '#f87171', fontWeight: 700, letterSpacing: '1.5px', marginBottom: 8, textTransform: 'uppercase', fontFamily: 'Inter, sans-serif', opacity: 0.8 }}>
          Pages
        </div>
        {['Home','Services','Portfolio','Contact','About'].map((name, i) => (
          <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: i < 4 ? 6 : 0 }}>
            <div style={{ width: 4, height: 4, borderRadius: '50%', background: i === 0 ? '#f87171' : 'rgba(255,255,255,0.2)', flexShrink: 0 }} />
            <span style={{ fontSize: 9, color: i === 0 ? 'rgba(248,113,113,0.85)' : 'rgba(255,255,255,0.3)', fontFamily: 'Inter, sans-serif' }}>{name}</span>
          </div>
        ))}
      </div>

      {/* ── Particles ── */}
      {[
        { top: '14%', left: '20%', s: 2.5, d: 3.4, dl: 0    },
        { top: '72%', left: '16%', s: 2,   d: 4.2, dl: 1.3  },
        { top: '40%', left: '50%', s: 2,   d: 3.8, dl: 2.1  },
        { top: '20%', left: '70%', s: 3,   d: 4.9, dl: 0.6  },
        { top: '82%', left: '62%', s: 2,   d: 3.6, dl: 1.9  },
        { top: '56%', left: '35%', s: 2.5, d: 5.2, dl: 3.1  },
        { top: '8%',  left: '44%', s: 2,   d: 4.1, dl: 2.6  },
        { top: '90%', left: '30%', s: 2,   d: 4.0, dl: 0.9  },
        { top: '32%', left: '84%', s: 3,   d: 4.5, dl: 1.6  },
        { top: '64%', left: '78%', s: 2,   d: 3.4, dl: 3.6  },
      ].map((p, i) => (
        <div key={i} style={{
          position: 'absolute', top: p.top, left: p.left,
          width: p.s, height: p.s, borderRadius: '50%',
          background: '#f87171',
          boxShadow: `0 0 ${p.s * 5}px rgba(248,113,113,0.7)`,
          animation: `twinkle ${p.d}s ease-in-out infinite ${p.dl}s`,
        }} />
      ))}

      {/* ── Subtle horizontal accent line ── */}
      <div style={{
        position: 'absolute', top: '49%', left: 0, right: 0, height: 1,
        background: 'linear-gradient(90deg, transparent, rgba(248,113,113,0.1) 25%, rgba(248,113,113,0.16) 50%, rgba(248,113,113,0.1) 75%, transparent)',
      }} />

      {/* ── Vignette: darken edges, protect text readability ── */}
      <div style={{
        position: 'absolute', inset: 0,
        background: 'linear-gradient(to right, rgba(18,16,13,0.65) 0%, rgba(18,16,13,0.15) 40%, transparent 70%)',
      }} />
      <div style={{
        position: 'absolute', inset: 0,
        background: 'linear-gradient(to bottom, rgba(18,16,13,0.5) 0%, transparent 12%, transparent 88%, rgba(18,16,13,0.5) 100%)',
      }} />

    </div>
  )
}
