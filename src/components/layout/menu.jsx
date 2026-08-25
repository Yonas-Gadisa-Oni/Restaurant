import "../style/menu.css";

const menuItems = [
  {
    id: 1,
    name: "Truffle Bisque",
    price: "€22",
    description:
      "Velvety black truffle velouté, aged parmesan foam, chive oil",
    category: "SIGNATURE",
    image: "/public/images/menu/Truffle.avif",
  },
  {
    id: 2,
    name: "Agneau en Croûte",
    price: "€58",
    description:
      "Herb-crusted lamb rack, rosemary jus, haricots verts, Dauphinois",
    category: "CHEF'S CHOICE",
    image: "/public/images/menu/Agneau.avif",
  },
  {
    id: 3,
    name: "Tarte Tatin au Chocolat",
    price: "€18",
    description:
      "Warm valrhona chocolate tart, tonka bean ice cream, cocoa tuile",
    category: "DESSERT",
    image: "/public/images/menu/Chocolat.avif",
  },
];

function MenuCard({ item }) {
  return (
    <article className="menu-card">
      <div className="menu-card-image-wrapper">
        <img
          src={item.image}
          alt={item.name}
          className="menu-card-image"
        />
      </div>

      <div className="menu-card-content">
        <div className="menu-card-heading">
          <h3 className="menu-card-name">{item.name}</h3>

          <span className="menu-card-price">{item.price}</span>
        </div>

        <p className="menu-card-description">
          {item.description}
        </p>

        <span className="menu-card-tag">
          {item.category}
        </span>
      </div>
    </article>
  );
}

function Menu() {
  return (
    <section className="menu" id="menu">
      <div className="menu-container">
        <header className="menu-header">
          <p className="menu-eyebrow">FROM THE KITCHEN</p>

          <h2 className="menu-title">Signature Plates</h2>
        </header>

        <div className="menu-grid">
          {menuItems.map((item) => (
            <MenuCard key={item.id} item={item} />
          ))}
        </div>

        <div className="menu-action">
          <a href="#full-menu" className="menu-button">
            VIEW FULL MENU
          </a>
        </div>
      </div>
    </section>
  );
}

export default Menu;