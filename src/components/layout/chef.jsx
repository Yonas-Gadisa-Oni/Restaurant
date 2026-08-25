import "../style/chef.css";

function Chef() {
  return (
    <section className="chef" id="chef">
      <div className="chef-overlay">
        <img src="/Restaurant/images/chef.avif" alt="" />
      </div>

      <div className="chef-content">
        <p className="chef-eyebrow">
          OUR CHEF
        </p>

        <h2 className="chef-title">
          Chef Étienne Renard
        </h2>

        <div className="chef-divider"></div>

        <p className="chef-description">
          Trained under Alain Ducasse in Monaco and Michel Bras in Laguiole,
          Étienne Renard returned to Paris with a language of his own — one
          rooted in classical rigour but wholly contemporary in sensibility.
        </p>

        <a href="#chef-profile" className="chef-link">
          MEET THE CHEF
        </a>
      </div>
    </section>
  );
}

export default Chef;