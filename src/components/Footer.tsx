import { contact } from '../data/content'
import './Footer.css'

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-brand">
          <span className="footer-logo">ResinArt</span>
          <p>Handcrafted resin art that preserves your memories.</p>
        </div>

        <nav className="footer-links">
          <a href="#home">Home</a>
          <a href="#products">Products</a>
          <a href="#gallery">Gallery</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </nav>

        <div className="footer-social">
          <a href={contact.instagramHref} target="_blank" rel="noreferrer" aria-label="Instagram">
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M7 2h10a5 5 0 015 5v10a5 5 0 01-5 5H7a5 5 0 01-5-5V7a5 5 0 015-5zm0 2a3 3 0 00-3 3v10a3 3 0 003 3h10a3 3 0 003-3V7a3 3 0 00-3-3H7zm5 3.5A5.5 5.5 0 1112 18.5 5.5 5.5 0 0112 7.5zm0 2A3.5 3.5 0 1012 15.5 3.5 3.5 0 0012 9.5zM18 6a1 1 0 110 2 1 1 0 010-2z" />
            </svg>
          </a>
          <a href={contact.whatsappHref} target="_blank" rel="noreferrer" aria-label="WhatsApp">
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M12 2a10 10 0 00-8.6 15L2 22l5.2-1.4A10 10 0 1012 2zm0 2a8 8 0 014.7 14.5l-.3.2.2 2-2.1-.6-.3.2A8 8 0 1112 4zm-3.2 3.6c-.2 0-.5 0-.7.3-.3.3-1 1-1 2.3 0 1.4 1 2.7 1.1 2.9.2.2 2 3 4.7 4.2 2.4 1 2.4.7 2.8.6.5 0 1.5-.6 1.7-1.2.2-.6.2-1 .2-1.2l-.4-.2c-.2-.1-1.3-.6-1.5-.7-.2-.1-.4-.1-.5.1l-.7 1c-.1.1-.3.2-.5.1-.3-.1-1.2-.4-2.2-1.4-.8-.7-1.4-1.6-1.5-1.9-.2-.3 0-.4.1-.6l.4-.5c.1-.2.1-.3 0-.5l-.7-1.6c-.2-.4-.3-.3-.5-.3z" />
            </svg>
          </a>
          <a href={`mailto:${contact.email}`} aria-label="Email">
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M4 4h16a2 2 0 012 2v12a2 2 0 01-2 2H4a2 2 0 01-2-2V6a2 2 0 012-2zm0 2v.01L12 12l8-5.99V6H4zm16 2.24l-7.4 5.55a1 1 0 01-1.2 0L4 8.24V18h16V8.24z" />
            </svg>
          </a>
        </div>
      </div>

      <p className="footer-copyright">© {new Date().getFullYear()} ResinArt. All rights reserved.</p>
    </footer>
  )
}

export default Footer
