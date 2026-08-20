
export default function Home() {
  return (
    <>
    
    <main id="main-content">

      {/* ===== HERO ===== */}
      <section id="hero" className="hero-section">
        <div className="hero-glow hero-glow-1"></div>
        <div className="hero-glow hero-glow-2"></div>
        <div className="hero-glow hero-glow-3"></div>
        <div className="hero-content">
          <div className="hero-badge">
            <span className="badge-dot"></span>
            <span>Freshly Baked Daily</span>
          </div>
          <img src="/images/logo.jpeg" alt="The Rolling Oven Logo" className="hero-logo" />
          <h1 className="hero-title">
            <span className="title-line">Your Cravings,</span>
            <span className="title-line title-accent">Our Creations</span>
          </h1>
          <p className="hero-subtitle">Freshly baked treats, made with love — crafted from the finest ingredients, delivered with warmth straight from our oven to your table.</p>
          <div className="hero-actions">
            <a href="#showcase" className="btn btn-primary" id="explore-btn">
              <span>Explore Our Bakes</span>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
            </a>
            <a href="#about" className="btn btn-glass" id="story-btn">
              <span>Our Story</span>
            </a>
          </div>
          <div className="hero-stats">
            <div className="stat-item">
              <span className="stat-number" data-target="500">0</span><span className="stat-suffix">+</span>
              <span className="stat-label">Happy Customers</span>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-item">
              <span className="stat-number" data-target="50">0</span><span className="stat-suffix">+</span>
              <span className="stat-label">Unique Recipes</span>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-item">
              <span className="stat-number" data-target="7">0</span>
              <span className="stat-label">Categories</span>
            </div>
          </div>
        </div>
        <div className="scroll-indicator" id="scroll-indicator">
          <span>Scroll to explore</span>
          <div className="scroll-arrow">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 5v14"/><path d="m19 12-7 7-7-7"/></svg>
          </div>
        </div>
      </section>

      {/* ===== SHOWCASE BELT ===== */}
      <section id="showcase" className="showcase-section">
        <div className="section-header">
          <span className="section-tag">Our Signature Collection</span>
          <h2 className="section-title">Handcrafted with <span className="text-accent">Passion</span></h2>
          <p className="section-desc">Each creation tells a story of dedication, quality ingredients, and the art of baking perfected over generations.</p>
        </div>
        <div className="category-row" id="category-row" suppressHydrationWarning>
          
        </div>
      </section>

      {/* ===== TODAY'S FAVORITES ===== */}
      <section id="products" className="products-section">
        <div className="section-header">
          <span className="section-tag">Menu Highlights</span>
          <h2 className="section-title">Today's <span className="text-accent">Favorites</span></h2>
        </div>
        <div className="carousel-wrapper">
          <button className="carousel-btn carousel-prev" id="carousel-prev">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="m15 18-6-6 6-6"/></svg>
          </button>
          <div className="carousel-stage" id="carousel-stage" suppressHydrationWarning>
            
          </div>
          <button className="carousel-btn carousel-next" id="carousel-next">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="m9 18 6-6-6-6"/></svg>
          </button>
        </div>
      </section>

      {/* ===== ABOUT ===== */}
      <section id="about" className="about-section">
        <div className="about-container">
          <div className="about-visual">
            <div className="about-image-frame">
              <img src="/images/logo.jpeg" alt="The Rolling Oven Bakery Story - Fresh Baking Daily" className="about-image" loading="lazy" />
              <div className="about-frame-accent"></div>
            </div>
            <div className="about-float-card">
              <span className="float-emoji">🍰</span>
              <div>
                <strong>Est. 2026</strong>
                <span>Family Recipe</span>
              </div>
            </div>
          </div>
          <div className="about-content">
            <span className="section-tag">Our Story</span>
            <h2 className="section-title">Baked with Love, <span className="text-accent">Served with Heart</span></h2>
            <p>
            At Rolling Oven, we turn simple ingredients into delicious moments. Our menu brings together classic bakery favourites with creative new flavours. Roll in with a craving, roll out with happiness!
          </p>  <div className="about-features">
              <div className="feature-item">
                <div className="feature-icon">🌾</div>
                <div>
                  <strong>Premium Ingredients</strong>
                  <span>Locally sourced, always fresh</span>
                </div>
              </div>
              <div className="feature-item">
                <div className="feature-icon">🏠</div>
                <div>
                  <strong>Home Baked</strong>
                  <span>Made in small batches daily</span>
                </div>
              </div>
              <div className="feature-item">
                <div className="feature-icon">💝</div>
                <div>
                  <strong>Made with Love</strong>
                  <span>Every creation is special</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== TESTIMONIALS ===== */}
      <section id="testimonials" className="testimonials-section">
        <div className="section-header">
          <span className="section-tag">Customer Love</span>
          <h2 className="section-title">What Our <span className="text-accent">Customers</span> Say</h2>
        </div>
        <div className="testimonials-track">
          <div className="testimonial-card">
            <div className="testimonial-stars">★★★★★</div>
            <p className="testimonial-text">"The chocolate cake was absolutely divine! Every layer was perfection. My family couldn't stop raving about it."</p>
            <div className="testimonial-author">
              <div className="author-avatar">J</div>
              <div><strong>Joheesvara</strong><span>Regular Customer</span></div>
            </div>
          </div>
          <div className="testimonial-card">
            <div className="testimonial-stars">★★★★★</div>
            <p className="testimonial-text">"Best cupcakes in the city! The red velvet is to die for. I order them for every celebration now."</p>
            <div className="testimonial-author">
              <div className="author-avatar">L</div>
              <div><strong>Lakshmi Shankar</strong><span>Birthday Orders</span></div>
            </div>
          </div>
          <div className="testimonial-card">
            <div className="testimonial-stars">★★★★★</div>
            <p className="testimonial-text">"The croissants are flaky, buttery perfection. Better than anything I've had in a café. Absolutely recommend!"</p>
            <div className="testimonial-author">
              <div className="author-avatar">S</div>
              <div><strong>Sakthi</strong><span>Gift Orders</span></div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== CONTACT ===== */}
      <section id="contact" className="contact-section">
        <div className="contact-container">
          <div className="contact-content">
            <span className="section-tag">Get in Touch</span>
            <h2 className="section-title">Ready to Place <span className="text-accent">Your Order?</span></h2>
            <p className="contact-desc">Custom orders welcome! Reach out to us for special occasions, bulk orders, or just to satisfy your cravings.</p>
            <div className="contact-methods">
              <a href="https://wa.me/919876543210" target="_blank" className="contact-method" id="contact-whatsapp">
                <div className="method-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                </div>
                <div><strong>WhatsApp</strong><span>Quick orders & queries</span></div>
              </a>
              <a href="https://www.instagram.com/the_rolling_oven_26" target="_blank" className="contact-method" id="contact-instagram">
                <div className="method-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
                </div>
                <div><strong>Instagram</strong><span>@the_rolling_oven_26</span></div>
              </a>
              <a href="mailto:therollingoven26@gmail.com" className="contact-method" id="contact-email">
                <div className="method-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
                </div>
                <div><strong>Email Us</strong><span>therollingoven26@gmail.com</span></div>
              </a>
            </div>
          </div>
          <div className="contact-form-wrapper">
            <div className="glass-card">
              <h3 className="form-title">Send Inquiry</h3>
              <form className="contact-form" id="contact-form">
                {/* Anti-spam Honeypot */}
                <input
                  type="text"
                  name="b_website"
                  id="contact-hp"
                  className="hp-field"
                  tabIndex={-1}
                  autoComplete="off"
                  style={{ display: "none" }}
                />
                <div className="form-group">
                  <input type="text" id="form-name" className="form-input" placeholder=" " required />
                  <label htmlFor="form-name" className="form-label">Your Name</label>
                </div>
                <div className="form-group">
                  <input type="email" id="form-email" className="form-input" placeholder=" " required />
                  <label htmlFor="form-email" className="form-label">Email Address</label>
                </div>
                <div className="form-group">
                  <input type="tel" id="form-phone" className="form-input" placeholder=" " required />
                  <label htmlFor="form-phone" className="form-label">Phone Number</label>
                </div>
                <div className="form-group">
                  <select id="form-product" className="form-input form-select" required defaultValue="">
                    <option value="" disabled>What are you looking for?</option>
                    <option value="cupcakes">Cupcakes</option>
                    <option value="cookies">Cookies</option>
                    <option value="muffins">Muffins</option>
                    <option value="donuts">Donuts</option>
                    <option value="chocholava">Chocholava</option>
                    <option value="tiramisu">Tiramisu</option>
                    <option value="croissants">Croissants</option>
                    <option value="custom">Custom Order</option>
                  </select>
                </div>
                <div className="form-group">
                  <textarea id="form-message" className="form-input form-textarea" placeholder=" " rows={3}></textarea>
                  <label htmlFor="form-message" className="form-label">Message</label>
                </div>
                <button type="submit" className="btn btn-primary btn-full" id="submit-inquiry">
                  <span>Send Inquiry</span>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

    </main>

    </>
  );
}
