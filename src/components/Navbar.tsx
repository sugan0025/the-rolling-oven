export default function Navbar() {
  return (
    <>
      <nav id="main-nav" className="navbar" role="navigation" aria-label="Main navigation">
        <div className="nav-container">
          <a href="/" className="nav-brand" id="nav-home-link" aria-label="The Rolling Oven — Home">
            <img src="/images/logo.jpeg" alt="The Rolling Oven" className="nav-logo" width="42" height="42" />
            <span className="nav-brand-text">The Rolling Oven</span>
          </a>
          <ul className="nav-links" role="menubar">
            <li role="none"><a href="/#hero" className="nav-link active" data-nav="home" role="menuitem">Home</a></li>
            <li role="none"><a href="/#showcase" className="nav-link" data-nav="bakes" role="menuitem">Our Bakes</a></li>
            <li role="none"><a href="/#about" className="nav-link" data-nav="about" role="menuitem">About</a></li>
            <li role="none"><a href="/#contact" className="nav-link" data-nav="contact" role="menuitem">Contact</a></li>
          </ul>
          <button className="nav-cta" id="nav-order-btn" style={{ display: 'none' }} aria-label="Open cart">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
              <circle cx="9" cy="21" r="1" />
              <circle cx="20" cy="21" r="1" />
              <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
            </svg>
            <span>Order Now</span>
            <span className="cart-badge" id="cart-badge" style={{ display: 'none' }} aria-live="polite">0</span>
          </button>
          <button className="mobile-menu-btn" id="mobile-menu-btn" aria-label="Toggle menu" aria-expanded="false">
            <span></span><span></span><span></span>
          </button>
        </div>
      </nav>

      {/* ===== MOBILE MENU OVERLAY ===== */}
      <div className="mobile-menu-overlay" id="mobile-menu-overlay" role="dialog" aria-label="Mobile navigation menu">
        <ul className="mobile-nav-links" role="menu">
          <li role="none"><a href="/#hero" className="mobile-nav-link" role="menuitem">Home</a></li>
          <li role="none"><a href="/#showcase" className="mobile-nav-link" role="menuitem">Our Bakes</a></li>
          <li role="none"><a href="/#about" className="mobile-nav-link" role="menuitem">About</a></li>
          <li role="none"><a href="/#contact" className="mobile-nav-link" role="menuitem">Contact</a></li>
        </ul>
      </div>
    </>
  );
}
