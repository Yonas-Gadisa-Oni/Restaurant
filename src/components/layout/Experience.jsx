import "../style/Exprience.css";

const experienceItems = [
  {
    number: "01",
    title: "Seasonal Menus",
    description:
      "Every dish reflects what the land gives us at its best. Our menu changes with each season — never more than four weeks unchanged.",
  },
  {
    number: "02",
    title: "Natural Wine Programme",
    description:
      "Over 320 references from small producers across France, Italy, and the Iberian peninsula, curated by our sommelier Mathilde Varenne.",
  },
  {
    number: "03",
    title: "Private Dining",
    description:
      "Our salon privé seats up to twelve guests for an exclusive, entirely bespoke dinner experience for occasions that deserve it.",
  },
];

const experienceImages = [
  {
    src: "/Restaurant/images/exp1.avif",
    alt: "Elegant restaurant dish",
    className: "experience-image-one",
  },
  {
    src: "/Restaurant/images/exp2.avif",
    alt: "Fresh pasta with truffle",
    className: "experience-image-two",
  },
  {
    src: "/Restaurant/images/exp3.avif",
    alt: "Seafood restaurant dish",
    className: "experience-image-three",
  },
  {
    src: "/Restaurant/images/exp4.avif",
    alt: "Chocolate dessert",
    className: "experience-image-four",
  },
];

function Experience() {
  return (
    <section className="experience" id="experience">
      <div className="experience-container">
        {/* Image Collage */}
        <div className="experience-gallery">
          {experienceImages.map((image) => (
            <div
              className={`experience-image-wrapper ${image.className}`}
              key={image.src}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="experience-image"
              />
            </div>
          ))}
        </div>

        {/* Content */}
        <div className="experience-content">
          <p className="experience-eyebrow">
            THE EXPERIENCE
          </p>

          <h2 className="experience-title">
            Crafted with Season,
            <span>Served with Care</span>
          </h2>

          <div className="experience-divider"></div>

          <div className="experience-list">
            {experienceItems.map((item) => (
              <article
                className="experience-item"
                key={item.number}
              >
                <span className="experience-number">
                  {item.number}
                </span>

                <div className="experience-item-content">
                  <h3 className="experience-item-title">
                    {item.title}
                  </h3>

                  <p className="experience-item-description">
                    {item.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;