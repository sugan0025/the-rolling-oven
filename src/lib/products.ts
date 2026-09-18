// ============================================
// THE ROLLING OVEN — Shared Product Data
// Single Source of Truth (SSOT) Catalog
// ============================================
// 🥐 BAKERY CHEF'S CODE OF HONOR:
// 1. Never compromise on pure butter.
// 2. Never deploy to production on an empty stomach.
// 3. If an elusive bug appears, feed it a warm cookie.
// 4. In case of critical emergency: sudo bake cupcakes.
// ============================================

export interface ProductItem {
  name: string;
  image: string;
  price: number;
}

export interface Category {
  name: string;
  tagline: string;
  description: string;
  badge: string;
  badgeClass?: string;
  mainImage: string;
  basePrice: number;
  items: ProductItem[];
}

export const CATEGORIES: Record<string, Category> = {
  cupcakes: {
    name: 'Cupcakes',
    tagline: 'Fluffy, moist, and topped with our signature buttercream swirl.',
    description: 'Our cupcakes are baked fresh daily in small batches. Each flavor is crafted with premium ingredients and topped with hand-piped buttercream.',
    badge: 'Bestseller',
    mainImage: '/images/products/cupcakes/Cupcake front image.webp',
    basePrice: 149,
    items: [
      { name: 'Vanilla Cupcake',         image: '/images/products/cupcakes/Vanilla_Cupcake.webp',        price: 149 },
      { name: 'Chocolate Cupcake',        image: '/images/products/cupcakes/Chocolate_Cupcake.webp',       price: 159 },
      { name: 'Red Velvet Cupcake',       image: '/images/products/cupcakes/Red_Velvet_Cupcake.webp',       price: 179 },
      { name: 'Strawberry Cupcake',       image: '/images/products/cupcakes/Strawberry_Cupcake.webp',      price: 169 },
      { name: 'Banana Cupcake',           image: '/images/products/cupcakes/Banana_Cupcake.webp',          price: 159 },
      { name: 'Carrot Cupcake',           image: '/images/products/cupcakes/Carrot_Cupcake.webp',          price: 169 },
      { name: 'Lemon Cupcake',            image: '/images/products/cupcakes/Lemon_Cupcake.webp',           price: 159 },
      { name: 'Peanut Butter Cupcake',    image: '/images/products/cupcakes/Peanut_Butter_Cupcake.webp',   price: 179 },
    ],
  },
  cookies: {
    name: 'Cookies',
    tagline: 'Crispy edges, chewy centers — cookie perfection.',
    description: 'From classic chocolate chip to gourmet macaroons, our cookies are baked to golden perfection with the finest butter and real vanilla.',
    badge: 'Popular',
    mainImage: '/images/products/cookies/Chocolate_chip_cookies.webp',
    basePrice: 99,
    items: [
      { name: 'Chocolate Chip Cookies',            image: '/images/products/cookies/Chocolate_chip_cookies.webp',            price: 99  },
      { name: 'Butter Cookies',                    image: '/images/products/cookies/Butter_cookies.webp',                    price: 89  },
      { name: 'Oatmeal Raisin Cookies',            image: '/images/products/cookies/Oatmeal_raisin_cookies.webp',            price: 99  },
      { name: 'Peanut Butter Cookies',             image: '/images/products/cookies/Peanut_butter_cookies.webp',             price: 109 },
      { name: 'Double Chocolate Cookies',          image: '/images/products/cookies/Double_chocolate_cookies.webp',          price: 119 },
      { name: 'M&M Cookies',                       image: '/images/products/cookies/M&M_cookies.webp',                       price: 109 },
      { name: 'Snickerdoodle Cookies',             image: '/images/products/cookies/Snickerdoodle_Cookie.webp',             price: 99  },
      { name: 'Red Velvet Cookies',                image: '/images/products/cookies/Red_velvet_cookies.webp',                price: 119 },
      { name: 'Almond Cookies',                    image: '/images/products/cookies/Almond_cookies.webp',                    price: 109 },
      { name: 'Macadamia Nut Cookies',             image: '/images/products/cookies/Macadamia_nut_cookies.webp',             price: 129 },
      { name: 'Shortbread Cookies',                image: '/images/products/cookies/Shortbread_Cookie.webp',                price: 89  },
      { name: 'Biscotti',                          image: '/images/products/cookies/Biscotti.webp',                          price: 99  },
      { name: 'Macaroons',                         image: '/images/products/cookies/Macaroons.webp',                         price: 149 },
      { name: 'Cranberry White Chocolate Cookies',  image: '/images/products/cookies/Cranberry_white_chocolate_cookies.webp',  price: 119 },
    ],
  },
  muffins: {
    name: 'Muffins',
    tagline: 'Warm, fluffy, and bursting with flavor.',
    description: 'Our muffins are baked until golden with a perfectly domed top. Made with real fruit, premium chocolate, and fragrant spices.',
    badge: 'Fresh Daily',
    mainImage: '/images/products/muffins/Blueberry_Muffin.webp',
    basePrice: 129,
    items: [
      { name: 'Blueberry Muffin',        image: '/images/products/muffins/Blueberry_Muffin.webp',         price: 129 },
      { name: 'Chocolate Chip Muffin',    image: '/images/products/muffins/Chocolate_Chip_Muffin.webp',     price: 139 },
      { name: 'Banana Nut Muffin',        image: '/images/products/muffins/Banana_Nut_Muffin.webp',         price: 129 },
      { name: 'Double Chocolate Muffin',  image: '/images/products/muffins/Double_Chocolate_Muffin.webp',   price: 149 },
      { name: 'Apple Cinnamon Muffin',    image: '/images/products/muffins/Apple_Cinnamon_Muffin.webp',     price: 129 },
      { name: 'Lemon Poppy Seed Muffin',  image: '/images/products/muffins/Lemon_Poppy_Seed_Muffin.webp',   price: 129 },
    ],
  },
  donuts: {
    name: 'Donuts',
    tagline: 'Glazed, frosted, and irresistibly soft.',
    description: 'Our donuts are hand-rolled and fried to airy perfection, then glazed or frosted with our signature toppings.',
    badge: 'Handmade',
    mainImage: '/images/products/donuts/Classic_Glazed_Donut.webp',
    basePrice: 119,
    items: [
      { name: 'Classic Glazed Donut',     image: '/images/products/donuts/Classic_Glazed_Donut.webp', price: 119 },
      { name: 'Chocolate Frosted Donut',  image: '/images/products/donuts/Chocolate_Frosted_Donut.webp', price: 139 },
      { name: 'Strawberry Donut',         image: '/images/products/donuts/Strawberry_Donut.webp', price: 139 },
      { name: 'Sprinkle Donut',           image: '/images/products/donuts/Sprinkle_Donut.webp', price: 129 },
    ],
  },
  chocolava: {
    name: 'Chocolava',
    tagline: 'Molten chocolate magic in every bite.',
    description: 'Our signature chocolava cakes feature a rich, gooey chocolate center that flows out when you break the crust. Pure indulgence.',
    badge: 'Premium',
    badgeClass: 'premium',
    mainImage: '/images/products/chocolava/Classic_Chocolava.webp',
    basePrice: 249,
    items: [
      { name: 'Classic Chocolava',       image: '/images/products/chocolava/Classic_Chocolava.webp', price: 249 },
      { name: 'Dark Chocolate Lava',      image: '/images/products/chocolava/Dark_Chocolate_Lava_Cake.webp', price: 279 },
      { name: 'White Chocolate Lava',     image: '/images/products/chocolava/White_Chocolate_Lava_Cake.webp', price: 269 },
    ],
  },
  tiramisu: {
    name: 'Tiramisu',
    tagline: 'Layers of coffee-soaked bliss.',
    description: 'Our tiramisu is made with mascarpone, espresso-soaked ladyfingers, and dusted with premium cocoa. An Italian classic, perfected.',
    badge: 'Signature',
    mainImage: '/images/products/tiramisu/tiramisu.webp',
    basePrice: 349,
    items: [
      { name: 'Classic Tiramisu',         image: '/images/products/tiramisu/tiramisu.webp', price: 349 },
      { name: 'Chocolate Tiramisu',       image: '/images/products/tiramisu/Chocolate_Tiramisu.webp', price: 379 },
      { name: 'Mango Tiramisu',           image: '/images/products/tiramisu/Mango_Tiramisu.webp', price: 369 },
    ],
  },
  croissants: {
    name: 'Croissants',
    tagline: 'Flaky, buttery, and baked to golden perfection.',
    description: 'Our croissants are laminated with premium French butter, folded 27 layers for the ultimate flaky crunch.',
    badge: 'Handcrafted',
    mainImage: '/images/products/croissants/Butter_Croissant.webp',
    basePrice: 149,
    items: [
      { name: 'Butter Croissant',           image: '/images/products/croissants/Butter_Croissant.webp',           price: 149 },
      { name: 'Chocolate Croissant',        image: '/images/products/croissants/Chocolate_Croissant.webp',        price: 179 },
      { name: 'Almond Croissant',           image: '/images/products/croissants/Almond_Croissant.webp',           price: 189 },
      { name: 'Pistachio Croissant',        image: '/images/products/croissants/Pistachio_Croissant.webp',        price: 199 },
      { name: 'Raspberry Croissant',        image: '/images/products/croissants/Raspberry_Croissant.webp',        price: 189 },
      { name: 'Matcha Croissant',           image: '/images/products/croissants/Matcha_Croissant.webp',           price: 199 },
      { name: 'Matcha Cream Croissant',     image: '/images/products/croissants/Matcha_Cream_Croissant.webp',     price: 209 },
      { name: 'Tiramisu Croissant',         image: '/images/products/croissants/Tiramisu_Croissant.webp',         price: 209 },
      { name: 'Berries & Cream Croissant',  image: '/images/products/croissants/Berries_and_Cream_Croissant.webp', price: 199 },
      { name: 'Lavender Croissant',         image: '/images/products/croissants/Lavender_Croissant.webp',         price: 189 },
      { name: 'Garlic Butter Croissant',    image: '/images/products/croissants/Garlic_Butter_Croissant.webp',    price: 169 },
      { name: 'Ube Croissant',              image: '/images/products/croissants/Ube_Croissant.webp',              price: 199 },
      { name: 'Smoked Salmon Croissant',    image: '/images/products/croissants/Smoked_Salmon_Croissant.webp',    price: 229 },
      { name: 'Gold Sprinkles Croissant',   image: '/images/products/croissants/Gold_Sprinkles_Croissant.webp',   price: 219 },
      { name: 'Prosciutto Gruyère Croissant', image: '/images/products/croissants/Prosciutto_Gruyere_Croissant.webp', price: 239 },
    ],
  },
};

export const CATEGORY_SLUGS = Object.keys(CATEGORIES);

export function getCategoryBySlug(slug: string): Category | undefined {
  return CATEGORIES[slug];
}
