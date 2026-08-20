export default function FloatingPastries() {
  return (
    <aside className="floating-pastries-container" aria-hidden="true">
      {/* ===== LEFT GUTTER RAIL ===== */}
      <div className="pastry-rail pastry-rail-left">
        <div className="floating-pastry-item pastry-anim-cupcake" style={{ animationDelay: '0s' }}>
          <img src="/images/products/cupcakes/Vanilla_Cupcake.png" alt="" className="pastry-icon" />
        </div>
        <div className="pastry-heart-accent" style={{ animationDelay: '1.2s' }}>♡</div>
        <div className="floating-pastry-item pastry-anim-cookie" style={{ animationDelay: '0.8s' }}>
          <img src="/images/products/cookies/Chocolate_chip_cookies.png" alt="" className="pastry-icon" />
        </div>
        <div className="floating-pastry-item pastry-anim-croissant" style={{ animationDelay: '1.5s' }}>
          <img src="/images/products/croissants/Butter_Croissant.png" alt="" className="pastry-icon" />
        </div>
        <div className="pastry-heart-accent" style={{ animationDelay: '2.4s' }}>✨</div>
        <div className="floating-pastry-item pastry-anim-cake" style={{ animationDelay: '0.4s' }}>
          <img src="/images/products/chocholava/Classic_Chocholava.png" alt="" className="pastry-icon" />
        </div>
        <div className="floating-pastry-item pastry-anim-cookie" style={{ animationDelay: '1.9s' }}>
          <img src="/images/products/cookies/Macaroons.png" alt="" className="pastry-icon" />
        </div>
      </div>

      {/* ===== RIGHT GUTTER RAIL ===== */}
      <div className="pastry-rail pastry-rail-right">
        <div className="floating-pastry-item pastry-anim-cake" style={{ animationDelay: '0.3s' }}>
          <img src="/images/products/cupcakes/Red_Velvet_Cupcake.png" alt="" className="pastry-icon" />
        </div>
        <div className="pastry-heart-accent" style={{ animationDelay: '1.7s' }}>♡</div>
        <div className="floating-pastry-item pastry-anim-donut" style={{ animationDelay: '1.1s' }}>
          <img src="/images/products/donuts/Strawberry_Donut.png" alt="" className="pastry-icon" />
        </div>
        <div className="floating-pastry-item pastry-anim-strawberry" style={{ animationDelay: '0.6s' }}>
          <img src="/images/products/muffins/Blueberry_Muffin.png" alt="" className="pastry-icon" />
        </div>
        <div className="pastry-heart-accent" style={{ animationDelay: '0.9s' }}>✨</div>
        <div className="floating-pastry-item pastry-anim-cupcake" style={{ animationDelay: '2.1s' }}>
          <img src="/images/products/tiramisu/tiramisu.png" alt="" className="pastry-icon" />
        </div>
        <div className="floating-pastry-item pastry-anim-croissant" style={{ animationDelay: '1.4s' }}>
          <img src="/images/products/donuts/Classic_Glazed_Donut.png" alt="" className="pastry-icon" />
        </div>
      </div>
    </aside>
  );
}
