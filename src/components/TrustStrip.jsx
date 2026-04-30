const values = [
  '✦  Custom Website Design',
  '✦  Mobile Responsive',
  '✦  Fast Turnaround',
  '✦  Conversion-Focused',
  '✦  Clean UI/UX',
  '✦  Business Growth Focused',
  '✦  Custom Website Design',
  '✦  Mobile Responsive',
  '✦  Fast Turnaround',
  '✦  Conversion-Focused',
  '✦  Clean UI/UX',
  '✦  Business Growth Focused',
]

export default function TrustStrip() {
  return (
    <div
      className="py-5 overflow-hidden"
      style={{
        borderTop: '1px solid rgba(248,113,113,0.1)',
        borderBottom: '1px solid rgba(248,113,113,0.1)',
        background: 'rgba(220,38,38,0.04)',
      }}
    >
      <div className="animate-marquee">
        {values.map((v, i) => (
          <div key={i} className="px-8 whitespace-nowrap text-sm font-medium" style={{ color: '#9a8070' }}>
            {v}
          </div>
        ))}
      </div>
    </div>
  )
}
