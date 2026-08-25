import "../style/AboutUs.css";

const testimonials = [
  {
    quote:
      "An evening at Maison Élian is not simply a meal — it is a considered ritual. Every detail speaks of mastery and intention.",
    name: "Hélène Moreau",
    publication: "Le Figaro Gastronomique",
  },
  {
    quote:
      "Rarely does a restaurant manage to make you feel simultaneously at home and transported. This is that rare place.",
    name: "James Sutherland",
    publication: "The Sunday Times",
  },
  {
    quote:
      "The kitchen produces plates of extraordinary precision. Élian is exactly the right word for what happens here.",
    name: "Sofia Andersson",
    publication: "Condé Nast Traveller",
  },
];

function AboutUs() {
  return (
    <section className="about-us" id="about-us">
      <div className="about-us-container">
        <header className="about-us-header">
          <p className="about-us-eyebrow">
            WHAT THEY SAY
          </p>

          <h2 className="about-us-title">
            Press &amp; Guest Voices
          </h2>
        </header>

        <div className="about-us-testimonials">
          {testimonials.map((testimonial) => (
            <article
              className="about-us-testimonial"
              key={testimonial.name}
            >
              <span className="about-us-quote-mark">
                &quot;
              </span>

              <blockquote className="about-us-quote">
                {testimonial.quote}
              </blockquote>

              <div className="about-us-divider"></div>

              <div className="about-us-author">
                <h3 className="about-us-name">
                  {testimonial.name}
                </h3>

                <p className="about-us-publication">
                  {testimonial.publication}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default AboutUs;