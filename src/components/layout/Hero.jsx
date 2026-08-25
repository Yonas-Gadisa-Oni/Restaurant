import "../style/Hero.css";

function Hero() {
  return (
    <main className="hero">
      <div className="hero-overlay">
        <img src="/public/images/hero.avif" alt="" />
      </div>

      <div className="hero-content">
        <p className="hero-location">
          PARIS, 8ÈME ARRONDISSEMENT
        </p>

        <h1 className="hero-title">
          An Exceptional Dining
          <span>Experience</span>
        </h1>

        <p className="hero-description">
          Where classical French technique meets the quiet confidence of
          <br className="hero-description-break" />
          modern cuisine.
        </p>

        <div className="hero-actions">
          <a href="#reservation" className="hero-button hero-button-primary">
            RESERVE A TABLE
          </a>

          <a href="#menu" className="hero-button hero-button-secondary">
            EXPLORE OUR MENU
          </a>
        </div>
      </div>

      <div className="hero-scroll">
        <span></span>
      </div>
    </main>
  );
}

export default Hero;