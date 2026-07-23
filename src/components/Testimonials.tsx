import { testimonials } from '../data/content'
import './Testimonials.css'

function Testimonials() {
  return (
    <section id="testimonials" className="testimonials">
      <h2>What Our Customers Say</h2>
      <div className="testimonials-grid">
        {testimonials.map((t) => (
          <article key={t.name} className="testimonial-card">
            <p className="testimonial-quote">&ldquo;{t.quote}&rdquo;</p>
            <p className="testimonial-name">{t.name}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Testimonials
