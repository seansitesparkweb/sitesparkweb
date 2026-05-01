const values = [
  '✦  Custom Website Design', '✦  Mobile Responsive', '✦  Fast Turnaround',
  '✦  Conversion-Focused',   '✦  Clean UI/UX',       '✦  Business Growth Focused',
  '✦  Custom Website Design', '✦  Mobile Responsive', '✦  Fast Turnaround',
  '✦  Conversion-Focused',   '✦  Clean UI/UX',       '✦  Business Growth Focused',
]

export default function TrustStrip() {
  return (
    <div className="py-5 overflow-hidden"
      style={{ borderTop: '1px solid rgba(94,234,212,0.1)', borderBottom: '1px solid rgba(94,234,212,0.1)', background: 'rgba(13,148,136,0.05)' }}>
      <div className="animate-marquee">
        {values.map((v, i) => (
          <div key={i} className="px-8 whitespace-nowrap text-sm font-medium" style={{ color: '#4a8a84' }}>{v}</div>
        ))}
      </div>
    </div>
  )
}
