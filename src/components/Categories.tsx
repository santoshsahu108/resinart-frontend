import { categories } from '../data/content'
import PlaceholderArt from './PlaceholderArt'
import './Categories.css'

function Categories() {
  return (
    <section id="categories" className="categories">
      <h2>Our Categories</h2>
      <div className="categories-grid">
        {categories.map((category) => (
          <article key={category.title} className="category-card">
            <div className="category-art">
              <PlaceholderArt variant={category.variant} label={category.title} />
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
