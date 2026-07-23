import { galleryCount } from '../data/content'
import PlaceholderArt from './PlaceholderArt'
import './Gallery.css'

function Gallery() {
  const tiles = Array.from({ length: galleryCount }, (_, i) => i)

  return (
    <section id="gallery" className="gallery">
      <h2>Gallery</h2>
      <div className="gallery-grid">
        {tiles.map((i) => (
          <div key={i} className="gallery-tile">
            <PlaceholderArt variant={i} label={`Resin art gallery piece ${i + 1}`} />
          </div>
        ))}
      </div>
    </section>
  )
}

export default Gallery
