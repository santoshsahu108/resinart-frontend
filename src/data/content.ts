export interface Category {
  title: string
  description: string
  variant: number
}

export const categories: Category[] = [
  {
    title: 'Fridge Magnets',
    description: 'Tiny handmade keepsakes to brighten your kitchen.',
    variant: 0,
  },
  {
    title: 'Resin Keychains',
    description: 'Durable, colorful keychains crafted one at a time.',
    variant: 1,
  },
  {
    title: 'Memory Showcase',
    description: 'Preserve flowers, photos or trinkets in clear resin.',
    variant: 2,
  },
  {
    title: 'Name Plates',
    description: 'Personalized plates for homes, desks and doors.',
    variant: 3,
  },
  {
    title: 'Coasters',
    description: 'Elegant coaster sets with unique swirl patterns.',
    variant: 4,
  },
  {
    title: 'Customized Gifts',
    description: 'One-of-a-kind resin gifts made to your idea.',
    variant: 5,
  },
]

export interface Product {
  name: string
  price: string
  description: string
  variant: number
}

export const products: Product[] = [
  { name: 'Ocean Wave Coaster Set', price: '₹899', description: 'Set of 4 blue-swirl coasters.', variant: 0 },
  { name: 'Floral Memory Frame', price: '₹1,299', description: 'Dried flowers sealed in clear resin.', variant: 1 },
  { name: 'Galaxy Keychain', price: '₹349', description: 'Sparkling deep-blue resin keychain.', variant: 2 },
  { name: 'Custom Name Plate', price: '₹1,799', description: 'Personalized entryway name plate.', variant: 3 },
  { name: 'Rose Gold Fridge Magnet', price: '₹249', description: 'Set of 3 rose-gold flake magnets.', variant: 4 },
  { name: 'Marble Effect Tray', price: '₹1,499', description: 'White-and-gold marbled serving tray.', variant: 5 },
  { name: 'Sunset Pendant Necklace', price: '₹599', description: 'Warm gradient resin pendant.', variant: 0 },
  { name: 'Photo Keepsake Cube', price: '₹999', description: 'Your photo preserved in a resin cube.', variant: 1 },
]

export interface Testimonial {
  name: string
  quote: string
}

export const testimonials: Testimonial[] = [
  {
    name: 'Priya Sharma',
    quote: 'The name plate exceeded my expectations — beautiful craftsmanship and fast delivery.',
  },
  {
    name: 'Arjun Mehta',
    quote: 'Ordered a memory frame with my wedding flowers. It came out stunning, truly one of a kind.',
  },
  {
    name: 'Sneha Kapoor',
    quote: 'Adorable fridge magnets and coasters — great quality and packaged with so much care.',
  },
]

export const contact = {
  phone: '+91 98765 43210',
  phoneHref: 'tel:+919876543210',
  email: 'hello@resinart.example',
  instagram: '@resinart.studio',
  instagramHref: 'https://instagram.com/resinart.studio',
  whatsapp: '+91 98765 43210',
  whatsappHref: 'https://wa.me/919876543210',
}

export const galleryCount = 8
