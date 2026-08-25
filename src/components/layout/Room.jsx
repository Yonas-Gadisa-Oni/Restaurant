import "../style/Room.css";

function Room() {
  return (
    <section className="room" id="about">
      <div className="room-container">
        {/* Left Content */}
        <div className="room-content">
          <p className="room-establish">
            EST. 2009
          </p>

          <h2 className="room-title">
            A Room Where Every
            <span>Table Has a Story</span>
          </h2>

          <div className="room-divider"></div>

          <div className="room-description">
            <p>
              Maison Élian was born from a single conviction: that dining at
              its finest is not about spectacle, but about the slow
              accumulation of perfectly chosen moments. We opened on a quiet
              street in the 8th arrondissement with sixteen covers and a
              kitchen led by a single chef.
            </p>

            <p>
              Fifteen years on, that conviction has only deepened. Our menu
              changes with the seasons. Our wine list is curated with the same
              rigour as our kitchen. Our welcome never wavers.
            </p>
          </div>

          <a href="#story" className="room-story-link">
            <span>OUR STORY</span>
            <span className="room-story-line"></span>
          </a>
        </div>

        {/* Right Image */}
        <div className="room-image-wrapper">
          <img
            src="/Restaurant/images/room.avif"
            alt="Elegant interior of Maison Élian restaurant"
            className="room-image"
          />

          <div className="room-years">
            <span className="room-years-number">15</span>
            <span className="room-years-text">YEARS</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Room;