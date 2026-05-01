const PARTICLES = [
  { top: '12%', left: '22%',  size: 2, dur: 3.2, delay: 0    },
  { top: '68%', left: '14%',  size: 3, dur: 4.1, delay: 1.2  },
  { top: '38%', left: '52%',  size: 2, dur: 3.7, delay: 2.0  },
  { top: '22%', left: '72%',  size: 2, dur: 4.8, delay: 0.5  },
  { top: '78%', left: '68%',  size: 3, dur: 3.5, delay: 1.8  },
  { top: '55%', left: '38%',  size: 2, dur: 5.1, delay: 3.0  },
  { top: '8%',  left: '48%',  size: 2, dur: 4.0, delay: 2.4  },
  { top: '88%', left: '32%',  size: 2, dur: 3.9, delay: 0.8  },
  { top: '30%', left: '88%',  size: 3, dur: 4.4, delay: 1.5  },
  { top: '62%', left: '82%',  size: 2, dur: 3.3, delay: 3.5  },
]

export default function HeroBackground() {
  return (
    <div style={{ position: 'absolute', inset: 0, overflow: 'hidden', pointerEvents: 'none', zIndex: 0 }}>

      {/* ── Faint grid ── */}
      <svg style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }} aria-hidden="true">
        <defs>
          <pattern id="herogrid" width="72" height="72" patternUnits="userSpaceOnUse">
            <path d="M 72 0 L 0 0 0 72" fill="none" stroke="white" strokeWidth="0.4" strokeOpacity="0.028" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#herogrid)" />
      </svg>

      {/* ── Glow orbs (moved from Hero.jsx) ── */}
      <div className="glow-orb w-96 h-96 opacity-20" style={{ background: '#dc2626', top: '10%', left: '-8%' }} />
      <div className="glow-orb w-80 h-80 opacity-12" style={{ background: '#b91c1c', bottom: '10%', right: '-5%' }} />

      {/* ── Decorative thin rings ── */}
      <div style={{
        position: 'absolute',
        width: 520,
        height: 520,
        borderRadius: '50%',
        border: '1px solid rgba(248,113,113,0.055)',
        right: '-90px',
        top: '50%',
        transform: 'translateY(-50%)',
        animation: 'spin-slow 90s linear infinite',
      }} />
      <div style={{
        position: 'absolute',
        width: 340,
        height: 340,
        borderRadius: '50%',
        border: '1px solid rgba(248,113,113,0.035)',
        right: '0px',
        top: '50%',
        transform: 'translateY(-50%)',
        animation: 'spin-rev 60s linear infinite',
      }} />

      {/* ── Floating card 1: browser mockup (top-right) ── */}
      <div style={{
        position: 'absolute',
        top: '7%',
        right: '3%',
        width: 188,
        background: 'rgba(16,12,9,0.78)',
        backdropFilter: 'blur(18px)',
        border: '1px solid rgba(248,113,113,0.13)',
        borderRadius: 14,
        overflow: 'hidden',
        animation: 'bgFloat1 9s ease-in-out infinite',
        boxShadow: '0 24px 48px rgba(0,0,0,0.4), 0 0 0 0.5px rgba(248,113,113,0.06)',
      }}>
        {/* Browser chrome */}
        <div style={{
          background: 'rgba(255,255,255,0.035)',
          padding: '7px 10px',
          display: 'flex',
          alignItems: 'center',
          gap: 4,
          borderBottom: '1px solid rgba(255,255,255,0.05)',
        }}>
          <div style={{ width: 6, height: 6, borderRadius: '50%', background: '#f87171', opacity: 0.65 }} />
          <div style={{ width: 6, height: 6, borderRadius: '50%', background: '#fbbf24', opacity: 0.65 }} />
          <div style={{ width: 6, height: 6, borderRadius: '50%', background: '#34d399', opacity: 0.65 }} />
          <div style={{ flex: 1, height: 4, background: 'rgba(255,255,255,0.07)', borderRadius: 2, marginLeft: 6 }} />
        </div>
        {/* Page content */}
        <div style={{ padding: '11px 13px', display: 'flex', flexDirection: 'column', gap: 6 }}>
          <div style={{ height: 22, background: 'linear-gradient(90deg, rgba(220,38,38,0.25), rgba(185,28,28,0.1))', borderRadius: 5 }} />
          <div style={{ display: 'flex', gap: 5 }}>
            {[44, 32, 38].map((w, i) => (
              <div key={i} style={{ height: 3, width: w, background: 'rgba(255,255,255,0.1)', borderRadius: 2 }} />
            ))}
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 3, marginTop: 1 }}>
            <div style={{ height: 3, background: 'rgba(255,255,255,0.11)', borderRadius: 2 }} />
            <div style={{ height: 3, width: '82%', background: 'rgba(255,255,255,0.07)', borderRadius: 2 }} />
            <div style={{ height: 3, width: '64%', background: 'rgba(255,255,255,0.05)', borderRadius: 2 }} />
          </div>
          <div style={{ display: 'flex', gap: 5, marginTop: 2 }}>
            <div style={{ height: 14, flex: 1, background: 'rgba(220,38,38,0.45)', borderRadius: 4 }} />
            <div style={{ height: 14, flex: 1, background: 'rgba(255,255,255,0.05)', borderRadius: 4, border: '1px solid rgba(255,255,255,0.08)' }} />
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 4, marginTop: 1 }}>
            {[1, 2, 3, 4].map(i => (
              <div key={i} style={{ height: 20, background: 'rgba(255,255,255,0.03)', borderRadius: 4, border: '1px solid rgba(255,255,255,0.05)' }} />
            ))}
          </div>
        </div>
      </div>

      {/* ── Floating card 2: performance scores (bottom-right) ── */}
      <div style={{
        position: 'absolute',
        bottom: '12%',
        right: '4%',
        width: 158,
        background: 'rgba(16,12,9,0.82)',
        backdropFilter: 'blur(18px)',
        border: '1px solid rgba(248,113,113,0.11)',
        borderRadius: 14,
        padding: '13px 15px',
        animation: 'bgFloat2 12s ease-in-out infinite 1.4s',
        boxShadow: '0 24px 48px rgba(0,0,0,0.4)',
      }}>
        <div style={{ fontSize: 9, color: 'rgba(248,113,113,0.75)', fontWeight: 700, letterSpacing: '1.5px', marginBottom: 10, textTransform: 'uppercase', fontFamily: 'Inter, sans-serif' }}>
          Site Scores
        </div>
        {[
          { label: 'Performance', score: 98, color: '#34d399' },
          { label: 'SEO',         score: 100, color: '#60a5fa' },
          { label: 'Design',      score: 96, color: '#f87171'  },
        ].map((m, i) => (
          <div key={i} style={{ marginBottom: i < 2 ? 8 : 0 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 3 }}>
              <span style={{ fontSize: 9, color: 'rgba(255,255,255,0.38)', fontFamily: 'Inter, sans-serif' }}>{m.label}</span>
              <span style={{ fontSize: 9, color: m.color, fontWeight: 700, fontFamily: 'Inter, sans-serif' }}>{m.score}</span>
            </div>
            <div style={{ height: 2.5, background: 'rgba(255,255,255,0.06)', borderRadius: 2 }}>
              <div style={{ height: '100%', width: `${m.score}%`, background: m.color, borderRadius: 2, opacity: 0.65 }} />
            </div>
          </div>
        ))}
      </div>

      {/* ── Floating card 3: layers panel (left edge, very subtle) ── */}
      <div style={{
        position: 'absolute',
        top: '28%',
        left: '-18px',
        width: 136,
        background: 'rgba(16,12,9,0.6)',
        backdropFilter: 'blur(12px)',
        border: '1px solid rgba(248,113,113,0.07)',
        borderRadius: 12,
        padding: '11px 13px',
        animation: 'bgFloat3 14s ease-in-out infinite 2.8s',
        opacity: 0.55,
        boxShadow: '0 16px 32px rgba(0,0,0,0.3)',
      }}>
        <div style={{ fontSize: 8, color: 'rgba(248,113,113,0.6)', fontWeight: 700, letterSpacing: '1.5px', marginBottom: 8, textTransform: 'uppercase', fontFamily: 'Inter, sans-serif' }}>
          Layers
        </div>
        {[
          { label: 'Hero Section',   indent: 0  },
          { label: 'Navigation',     indent: 10 },
          { label: 'CTA Button',     indent: 10 },
          { label: 'Services Grid',  indent: 0  },
          { label: 'Contact Form',   indent: 0  },
        ].map((item, i) => (
          <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 5, marginBottom: 5, paddingLeft: item.indent }}>
            <div style={{ width: 5, height: 5, borderRadius: 1, background: i === 0 ? '#f87171' : i === 3 ? '#60a5fa' : 'rgba(255,255,255,0.15)', flexShrink: 0 }} />
            <div style={{ height: 2.5, flex: 1, background: 'rgba(255,255,255,0.08)', borderRadius: 1 }} />
          </div>
        ))}
      </div>

      {/* ── Glowing horizontal line ── */}
      <div style={{
        position: 'absolute',
        top: '48%',
        left: 0,
        right: 0,
        height: 1,
        background: 'linear-gradient(90deg, transparent 0%, rgba(248,113,113,0.08) 20%, rgba(248,113,113,0.14) 50%, rgba(248,113,113,0.08) 80%, transparent 100%)',
        pointerEvents: 'none',
      }} />

      {/* ── Particles ── */}
      {PARTICLES.map((p, i) => (
        <div key={i} style={{
          position: 'absolute',
          top: p.top,
          left: p.left,
          width: p.size,
          height: p.size,
          borderRadius: '50%',
          background: '#f87171',
          opacity: 0.25,
          boxShadow: `0 0 ${p.size * 4}px rgba(248,113,113,0.6)`,
          animation: `twinkle ${p.dur}s ease-in-out infinite ${p.delay}s`,
        }} />
      ))}

      {/* ── Readability vignette (darkens edges, protects text area) ── */}
      <div style={{
        position: 'absolute',
        inset: 0,
        background: 'radial-gradient(ellipse 60% 80% at 28% 50%, rgba(18,16,13,0.25) 0%, transparent 100%)',
      }} />
      <div style={{
        position: 'absolute',
        inset: 0,
        background: 'linear-gradient(to bottom, rgba(18,16,13,0.6) 0%, transparent 15%, transparent 85%, rgba(18,16,13,0.6) 100%)',
      }} />

    </div>
  )
}
