import { useState, useEffect } from 'react'

const SIZE   = 290
const CX     = SIZE / 2
const CY     = SIZE / 2
const RADIUS = 112
const CIRC   = 2 * Math.PI * RADIUS

// Generate tick marks around the ring
const TICKS = Array.from({ length: 60 }, (_, i) => {
  const angle  = (i / 60) * 360 - 90
  const rad    = (angle * Math.PI) / 180
  const isMaj  = i % 15 === 0
  const isMed  = i % 5  === 0
  const inner  = RADIUS + (isMaj ? 14 : isMed ? 17 : 18)
  const outer  = RADIUS + 22
  return {
    x1: CX + inner * Math.cos(rad),
    y1: CY + inner * Math.sin(rad),
    x2: CX + outer  * Math.cos(rad),
    y2: CY + outer  * Math.sin(rad),
    op: isMaj ? 0.55 : isMed ? 0.28 : 0.11,
    sw: isMaj ? 2 : 1,
  }
})

const STATS = [
  { label: 'Custom Design',  sub: 'Built around your brand'   },
  { label: 'Mobile Ready',   sub: 'Looks great on every screen' },
  { label: 'Fast Delivery',  sub: 'On time, every time'        },
]

export default function SatisfactionMeter() {
  const [pct,       setPct]       = useState(0)
  const [done,      setDone]      = useState(false)
  const [showStats, setShowStats] = useState([false, false, false])

  useEffect(() => {
    const delay = setTimeout(() => {
      const duration = 2600
      const start    = performance.now()
      const easeOut  = t => 1 - Math.pow(1 - t, 2.8)

      const frame = (now) => {
        const t   = Math.min((now - start) / duration, 1)
        const val = Math.round(easeOut(t) * 100)
        setPct(val)
        if (t < 1) {
          requestAnimationFrame(frame)
        } else {
          setDone(true)
          setTimeout(() => setShowStats([true, false, false]), 250)
          setTimeout(() => setShowStats([true, true,  false]), 520)
          setTimeout(() => setShowStats([true, true,  true ]), 790)
        }
      }
      requestAnimationFrame(frame)
    }, 350)

    return () => clearTimeout(delay)
  }, [])

  const offset = CIRC - (pct / 100) * CIRC

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 20 }}>

      {/* ── Ring ── */}
      <div style={{
        position: 'relative',
        animation: done ? 'float2 7s ease-in-out infinite' : 'none',
      }}>
        {/* Outer ambient glow — visible once done */}
        <div style={{
          position: 'absolute', inset: -24,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(251,146,60,0.13) 0%, transparent 70%)',
          animation: 'orb-pulse 3.5s ease-in-out infinite',
          opacity: done ? 1 : 0,
          transition: 'opacity 1s ease',
          pointerEvents: 'none',
        }} />

        <svg width={SIZE} height={SIZE} viewBox={`0 0 ${SIZE} ${SIZE}`} style={{ overflow: 'visible' }}>
          <defs>
            <linearGradient id="ringGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%"   stopColor="#fbbf24" />
              <stop offset="55%"  stopColor="#fb923c" />
              <stop offset="100%" stopColor="#ea580c" />
            </linearGradient>
            <filter id="ringGlow" x="-30%" y="-30%" width="160%" height="160%">
              <feGaussianBlur stdDeviation="4" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {/* Background track */}
          <circle
            cx={CX} cy={CY} r={RADIUS}
            fill="none"
            stroke="rgba(255,255,255,0.05)"
            strokeWidth={11}
          />

          {/* Tick marks */}
          {TICKS.map((t, i) => (
            <line key={i}
              x1={t.x1} y1={t.y1} x2={t.x2} y2={t.y2}
              stroke="#fbbf24" strokeOpacity={t.op} strokeWidth={t.sw}
              strokeLinecap="round"
            />
          ))}

          {/* Progress arc */}
          <circle
            cx={CX} cy={CY} r={RADIUS}
            fill="none"
            stroke="url(#ringGrad)"
            strokeWidth={11}
            strokeLinecap="round"
            strokeDasharray={CIRC}
            strokeDashoffset={offset}
            transform={`rotate(-90 ${CX} ${CY})`}
            filter={done ? 'url(#ringGlow)' : undefined}
          />

          {/* Glowing tip dot */}
          {pct > 0 && pct < 100 && (() => {
            const ang = ((pct / 100) * 360 - 90) * (Math.PI / 180)
            return (
              <circle
                cx={CX + RADIUS * Math.cos(ang)}
                cy={CY + RADIUS * Math.sin(ang)}
                r={7}
                fill="#fbbf24"
                filter="url(#ringGlow)"
              />
            )
          })()}

          {/* Center: big number */}
          <text
            x={CX} y={CY - 12}
            textAnchor="middle"
            fill="white"
            fontSize={66}
            fontWeight={800}
            fontFamily="Inter, system-ui, sans-serif"
            letterSpacing="-2"
          >
            {pct}
          </text>

          {/* % symbol */}
          <text
            x={CX} y={CY + 24}
            textAnchor="middle"
            fill="#fbbf24"
            fontSize={20}
            fontWeight={700}
            fontFamily="Inter, system-ui, sans-serif"
          >
            %
          </text>

          {/* SATISFACTION label — fades in when done */}
          <text
            x={CX} y={CY + 50}
            textAnchor="middle"
            fill="rgba(180,160,140,0.75)"
            fontSize={10}
            fontWeight={600}
            fontFamily="Inter, system-ui, sans-serif"
            letterSpacing="2"
            style={{ opacity: done ? 1 : 0, transition: 'opacity 0.8s ease' }}
          >
            SATISFACTION
          </text>
        </svg>
      </div>

      {/* ── Headline ── */}
      <div style={{ textAlign: 'center', minHeight: 52 }}>
        <p style={{
          color: 'white',
          fontSize: 18,
          fontWeight: 700,
          marginBottom: 4,
          opacity: done ? 1 : 0,
          transform: done ? 'translateY(0)' : 'translateY(6px)',
          transition: 'opacity 0.7s ease, transform 0.7s ease',
        }}>
          100% Satisfaction From Customers
        </p>
        <p style={{
          color: '#7a6a5a',
          fontSize: 13,
          opacity: done ? 1 : 0,
          transition: 'opacity 0.7s ease 0.3s',
        }}>
          Every project delivered with care and precision
        </p>
      </div>

      {/* ── Supporting stats ── */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 9, width: '100%', maxWidth: 290 }}>
        {STATS.map((s, i) => (
          <div key={i} style={{
            display: 'flex',
            alignItems: 'center',
            gap: 12,
            background: '#1e1812',
            border: '1px solid rgba(251,191,36,0.1)',
            borderRadius: 12,
            padding: '9px 14px',
            opacity: showStats[i] ? 1 : 0,
            transform: showStats[i] ? 'translateY(0)' : 'translateY(10px)',
            transition: 'opacity 0.5s ease, transform 0.5s ease',
          }}>
            <div style={{
              width: 28, height: 28, borderRadius: 8, flexShrink: 0,
              background: 'rgba(217,119,6,0.14)',
              border: '1px solid rgba(217,119,6,0.28)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}>
              <svg width={13} height={13} fill="none" stroke="#f59e0b" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <div>
              <div style={{ color: '#f0e8df', fontSize: 13, fontWeight: 600, lineHeight: 1.3 }}>{s.label}</div>
              <div style={{ color: '#6a5a4a', fontSize: 11 }}>{s.sub}</div>
            </div>
          </div>
        ))}
      </div>

    </div>
  )
}
