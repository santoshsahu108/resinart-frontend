import PlaceholderArt from './PlaceholderArt'
import './Hero.css'

function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-text">
        <h1>Handcrafted Resin Art That Preserves Your Memories</h1>
        <p>Beautiful handmade resin creations crafted with love.</p>
        <div className="hero-actions">
          <a href="#products" className="btn btn-primary">
            View Collection
          </a>
          <a href="#contact" className="btn btn-secondary">
            Contact Us
          </a>
        </div>
      </div>
      <div className="hero-art">
        <PlaceholderArt variant={2} label="Handcrafted resin art piece" />
      </div>
    </section>
  )
}

export default Hero
