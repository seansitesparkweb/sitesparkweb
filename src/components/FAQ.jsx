import { useState } from 'react'

const faqs = [
  {
    q: 'How long does it take to build my website?',
    a: 'Most projects are delivered within 2-3 weeks. Larger or more complex sites may take slightly longer, but we will give you a clear timeline before we start.',
  },
  {
    q: 'Do I need to know how to code or design?',
    a: 'Not at all. We handle everything — design, development, and launch. All you need to do is share your goals and content (logos, photos, etc.) and we take it from there.',
  },
  {
    q: 'What happens if I want changes after it is live?',
    a: 'All plans include revisions before launch. After launch, we offer ongoing maintenance and update packages so your site always stays current.',
  },
  {
    q: 'Will my website work on phones and tablets?',
    a: 'Yes — every site we build is fully mobile-responsive. We design mobile-first, so your site looks and works great on any screen size.',
  },
  {
    q: 'Who owns the website after it is built?',
    a: "You do, completely. We don't lock you into any platform or subscription. Once your site is delivered, it's 100% yours.",
  },
  {
    q: 'How do I get started?',
    a: 'Just click "Book a Free Call" and we will schedule a short conversation to learn about your business and figure out the best plan for you. No commitment required.',
  },
]

export default function FAQ() {
  const [open, setOpen] = useState(0)

  return (
    <section id="faq" className="py-20 sm:py-24 px-4 sm:px-6" style={{ background: 'transparent' }}>
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-sm font-semibold tracking-widest uppercase mb-3" style={{ color: '#5eead4' }}>Got Questions?</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Frequently Asked <span className="gradient-text">Questions</span>
          </h2>
        </div>

        <div className="space-y-3">
          {faqs.map((f, i) => (
            <div
              key={i}
              className="rounded-xl overflow-hidden"
              style={{
                background: 'rgba(13,148,136,0.07)',
                border: open === i ? '1px solid rgba(94,234,212,0.2)' : '1px solid rgba(94,234,212,0.07)',
                borderLeft: open === i ? '3px solid #14b8a6' : '1px solid rgba(94,234,212,0.07)',
              }}
            >
              <button
                className="w-full text-left px-6 py-5 flex items-center justify-between gap-4"
                onClick={() => setOpen(open === i ? -1 : i)}
              >
                <span className="text-sm font-semibold text-white">{f.q}</span>
                <svg
                  className="w-4 h-4 flex-shrink-0 transition-transform duration-300"
                  style={{ color: '#5eead4', transform: open === i ? 'rotate(180deg)' : 'rotate(0deg)' }}
                  fill="none" stroke="currentColor" viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div
                className="overflow-hidden transition-all duration-300"
                style={{ maxHeight: open === i ? '300px' : '0px' }}
              >
                <p className="px-6 pb-5 text-sm leading-relaxed" style={{ color: '#8ab0aa' }}>{f.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
