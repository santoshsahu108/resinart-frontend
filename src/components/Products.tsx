import { products } from '../data/content'
import PlaceholderArt from './PlaceholderArt'
import './Products.css'

function Products() {
  return (
    <section id="products" className="products">
      <h2>Featured Products</h2>
      <div className="products-grid">
        {products.map((product) => (
          <article key={product.name} className="product-card">
            <div className="product-art">
              <PlaceholderArt variant={product.variant} label={product.name} />
            </div>
            <h3>{product.name}</h3>
            <p className="product-price">{product.price}</p>
            <p className="product-desc">{product.description}</p>
            <a
              className="btn btn-primary btn-sm"
              href={`mailto:hello@resinart.example?subject=${encodeURIComponent(
                `Enquiry: ${product.name}`,
              )}`}
            >
              Enquire
            </a>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Products
