import { contact } from '../data/content'
import './Contact.css'

function Contact() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
  }

  return (
    <section id="contact" className="contact">
      <h2>Get In Touch</h2>
      <div className="contact-grid">
        <div className="contact-info">
          <p>
            <strong>Phone:</strong>{' '}
            <a href={contact.phoneHref}>{contact.phone}</a>
          </p>
          <p>
            <strong>Email:</strong> <a href={`mailto:${contact.email}`}>{contact.email}</a>
          </p>
          <p>
            <strong>Instagram:</strong>{' '}
            <a href={contact.instagramHref} target="_blank" rel="noreferrer">
              {contact.instagram}
            </a>
          </p>
          <p>
            <strong>WhatsApp:</strong>{' '}
            <a href={contact.whatsappHref} target="_blank" rel="noreferrer">
              {contact.whatsapp}
            </a>
          </p>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <label htmlFor="name">Name</label>
          <input id="name" name="name" type="text" required />

          <label htmlFor="email">Email</label>
          <input id="email" name="email" type="email" required />

          <label htmlFor="message">Message</label>
          <textarea id="message" name="message" rows={4} required />

          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  )
}

export default Contact
