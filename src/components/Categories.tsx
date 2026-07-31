import { categories } from '../data/content'
import PlaceholderArt from './PlaceholderArt'
import keychainsImg from '../assets/resin-keychains.png'
import memoryShowcaseImg from '../assets/memory-showcase.png'
import namePlatesImg from '../assets/name-plates.png'
import coastersImg from '../assets/coasters.png'
import customizedGiftsImg from '../assets/customized-gifts.png'
import fridgeMagnetsImg from '../assets/fridge-magnets.png'
import './Categories.css'

const CATEGORY_IMAGES: Record<string, string> = {
  'Fridge Magnets': fridgeMagnetsImg,
  'Resin Keychains': keychainsImg,
  'Memory Showcase': memoryShowcaseImg,
  'Name Plates': namePlatesImg,
  Coasters: coastersImg,
  'Customized Gifts': customizedGiftsImg,
}

function Categories() {
  return (
    <section id="categories" className="categories">
      <h2>Our Categories</h2>
      <div className="categories-grid">
        {categories.map((category) => (
          <article key={category.title} className="category-card">
            <div className="category-art">
              {CATEGORY_IMAGES[category.title] ? (
                <img src={CATEGORY_IMAGES[category.title]} alt={category.title} />
              ) : (
                <PlaceholderArt variant={category.variant} label={category.title} />
              )}
            </div>
            <h3>{category.title}</h3>
            <p>{category.description}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Categories
