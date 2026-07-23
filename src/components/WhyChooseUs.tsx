import './WhyChooseUs.css'

const REASONS = [
  {
    title: 'Handmade',
    description: 'Every piece is poured and finished by hand.',
    icon: (
      <path d="M12 21s-7-4.35-9.5-8.5C.5 8.5 3 5 6.5 5c1.9 0 3.3 1 4.5 2.4C12.2 6 13.6 5 15.5 5 19 5 21.5 8.5 21.5 12.5 19 16.65 12 21 12 21z" />
    ),
  },
  {
    title: 'Premium Quality',
    description: 'High-grade resin for lasting durability and shine.',
    icon: <path d="M12 2l2.7 6.1L21 9l-5 4.6L17.4 21 12 17.6 6.6 21 8 13.6 3 9l6.3-.9L12 2z" />,
  },
  {
    title: 'Custom Designs',
    description: 'Personalized creations tailored to your idea.',
    icon: (
      <path d="M3 21l3.5-1 11-11-2.5-2.5-11 11L3 21zM14.5 4.5L17 7l2-2-2.5-2.5-2 2z" />
    ),
  },
  {
    title: 'Fast Delivery',
    description: 'Quick turnaround without compromising quality.',
    icon: <path d="M3 13h11V6H3v7zm11 0h2l3 4v-4h-1V9h-4v4zM6 19a2 2 0 100-4 2 2 0 000 4zm12 0a2 2 0 100-4 2 2 0 000 4z" />,
  },
]

function WhyChooseUs() {
  return (
    <section id="why-us" className="why-us">
      <h2>Why Choose Us</h2>
      <div className="why-us-grid">
        {REASONS.map((reason) => (
          <article key={reason.title} className="why-us-card">
            <svg viewBox="0 0 24 24" className="why-us-icon" aria-hidden="true">
              {reason.icon}
            </svg>
            <h3>{reason.title}</h3>
            <p>{reason.description}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

export default WhyChooseUs
