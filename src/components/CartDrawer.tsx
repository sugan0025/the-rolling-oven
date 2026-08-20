export default function CartDrawer() {
  return (
    <>
      <div className="cart-overlay" id="cart-overlay"></div>
      <aside className="cart-sidebar" id="cart-sidebar" data-lenis-prevent="true">
        <div className="cart-header">
          <h3>Your Cart</h3>
          <button className="cart-close-btn" id="cart-close-btn" aria-label="Close cart">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M18 6 6 18" />
              <path d="m6 6 12 12" />
            </svg>
          </button>
        </div>
        <div className="cart-items" id="cart-items">
          <div className="cart-empty" id="cart-empty">
            <span className="cart-empty-icon">🧁</span>
            <p>Your cart is empty</p>
            <span className="cart-empty-sub">Add some delicious treats!</span>
          </div>
        </div>
        <div className="cart-footer" id="cart-footer" style={{ display: 'none' }}>
          <div className="cart-total">
            <span>Total</span>
            <span className="cart-total-price" id="cart-total-price">₹0</span>
          </div>
          <button className="btn btn-primary btn-full" id="place-order-btn">
            <span>Place Order</span>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14" />
              <path d="m12 5 7 7-7 7" />
            </svg>
          </button>
        </div>
      </aside>
    </>
  );
}
