export default function FloatingPastries() {
  return (
    <aside className="floating-pastries-container" aria-hidden="true">
      {/* ===== LEFT GUTTER RAIL (5 3D Cutout Pastries) ===== */}
      <div className="pastry-rail pastry-rail-left">
        <div className="floating-pastry-item pastry-anim-cupcake" data-speed="0.08" data-rot="0.02" style={{ animationDelay: '0s' }}>
          <img src="/images/pastries-3d/cupcake_pink.png" alt="" className="pastry-3d-img" />
        </div>
        <div className="floating-pastry-item pastry-anim-cookie" data-speed="-0.07" data-rot="-0.03" style={{ animationDelay: '0.8s' }}>
          <img src="/images/pastries-3d/cookie.png" alt="" className="pastry-3d-img" />
        </div>
        <div className="floating-pastry-item pastry-anim-croissant" data-speed="0.09" data-rot="0.035" style={{ animationDelay: '1.5s' }}>
          <img src="/images/pastries-3d/croissant.png" alt="" className="pastry-3d-img" />
        </div>
        <div className="floating-pastry-item pastry-anim-cake" data-speed="-0.06" data-rot="-0.02" style={{ animationDelay: '0.4s' }}>
          <img src="/images/pastries-3d/chocholava.png" alt="" className="pastry-3d-img" />
        </div>
        <div className="floating-pastry-item pastry-anim-strawberry" data-speed="0.07" data-rot="0.025" style={{ animationDelay: '1.9s' }}>
          <img src="/images/pastries-3d/cupcake_vanilla.png" alt="" className="pastry-3d-img" />
        </div>
      </div>

      {/* ===== RIGHT GUTTER RAIL (5 3D Cutout Pastries) ===== */}
      <div className="pastry-rail pastry-rail-right">
        <div className="floating-pastry-item pastry-anim-cake" data-speed="-0.08" data-rot="-0.025" style={{ animationDelay: '0.3s' }}>
          <img src="/images/pastries-3d/cupcake_red.png" alt="" className="pastry-3d-img" />
        </div>
        <div className="floating-pastry-item pastry-anim-donut" data-speed="0.09" data-rot="0.04" style={{ animationDelay: '1.1s' }}>
          <img src="/images/pastries-3d/donut_pink.png" alt="" className="pastry-3d-img" />
        </div>
        <div className="floating-pastry-item pastry-anim-strawberry" data-speed="-0.07" data-rot="-0.03" style={{ animationDelay: '0.6s' }}>
          <img src="/images/pastries-3d/muffin.png" alt="" className="pastry-3d-img" />
        </div>
        <div className="floating-pastry-item pastry-anim-cupcake" data-speed="0.06" data-rot="0.02" style={{ animationDelay: '2.1s' }}>
          <img src="/images/pastries-3d/tiramisu.png" alt="" className="pastry-3d-img" />
        </div>
        <div className="floating-pastry-item pastry-anim-donut" data-speed="-0.09" data-rot="-0.035" style={{ animationDelay: '1.4s' }}>
          <img src="/images/pastries-3d/donut_glazed.png" alt="" className="pastry-3d-img" />
        </div>
      </div>
    </aside>
  );
}
