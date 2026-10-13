import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Menu.css';

const menuData = {
  Starters: [
    { name: "French Onion Soup", price: "€14", description: "Caramelised onion broth, Gruyère crouton, thyme", tags: [], image: "/Restaurant/images/gallery/gallery3.avif" },
    { name: "Foie Gras Terrine", price: "€28", description: "Duck foie gras, Sauternes jelly, toasted brioche", tags: [], badge: "CHEF'S CHOICE", image: "/Restaurant/images/gallery/gallery1.avif" },
    { name: "Escargots de Bourgogne", price: "€18", description: "Burgundy snails, garlic-parsley butter, sourdough", tags: [], image: "/Restaurant/images/gallery/gallery2.avif" },
    { name: "Tuna Tartare", price: "€22", description: "Yellowfin tuna, avocado, sesame-soy dressing, crispy wonton", tags: ["GF"], image: "/Restaurant/images/exp3.avif" },
    { name: "Beetroot Carpaccio", price: "€16", description: "Roasted beetroot, goat cheese mousse, walnut, aged balsamic", tags: ["V"], image: "/Restaurant/images/gallery/gallery4.avif" },
    { name: "Lobster Bisque", price: "€24", description: "Brittany lobster bisque, cognac cream, chive oil", tags: [], badge: "SIGNATURE", image: "/Restaurant/images/menu/Truffle.avif" }
  ],
  Mains: [
    { name: "Filet de Boeuf", price: "€52", description: "Prime beef fillet, truffle jus, pommes purée, seasonal greens", tags: [], badge: "CHEF'S CHOICE", image: "/Restaurant/images/menu/Agneau.avif" },
    { name: "Duck Confit", price: "€38", description: "Confit duck leg, Sarladaise potatoes, orange-thyme jus", tags: [], image: "/Restaurant/images/exp1.avif" },
    { name: "Rack of Lamb", price: "€48", description: "Herb-crusted rack, ratatouille, rosemary jus", tags: [], image: "/Restaurant/images/gallery/gallery3.avif" },
    { name: "Coq au Vin", price: "€34", description: "Free-range chicken, Burgundy wine, pearl onions, lardons", tags: [], image: "/Restaurant/images/gallery/gallery1.avif" },
    { name: "Pan-Seared Sea Bass", price: "€42", description: "Wild sea bass, fennel purée, saffron beurre blanc", tags: ["GF"], image: "/Restaurant/images/exp3.avif" },
    { name: "Wild Mushroom Risotto", price: "€28", description: "Arborio rice, porcini, truffle oil, aged Parmesan", tags: ["V"], image: "/Restaurant/images/gallery/gallery2.avif" }
  ],
  Pasta: [
    { name: "Black Truffle Tagliatelle", price: "€36", description: "Fresh egg pasta, black truffle, Parmesan cream", tags: ["V"], badge: "SIGNATURE", image: "/Restaurant/images/exp2.avif" },
    { name: "Lobster Linguine", price: "€44", description: "Breton lobster, cherry tomato, garlic, white wine", tags: [], image: "/Restaurant/images/gallery/gallery4.avif" },
    { name: "Cacio e Pepe", price: "€22", description: "Pecorino Romano, Tellicherry black pepper, fresh spaghetti", tags: ["V"], image: "/Restaurant/images/gallery/gallery2.avif" },
    { name: "Pappardelle Bolognaise", price: "€26", description: "Slow-braised beef ragù, San Marzano tomato, basil", tags: [], image: "/Restaurant/images/exp1.avif" },
    { name: "Pumpkin Ravioli", price: "€24", description: "Butternut squash, sage brown butter, toasted pine nuts", tags: ["V"], image: "/Restaurant/images/gallery/gallery3.avif" }
  ],
  Seafood: [
    { name: "Bouillabaisse", price: "€46", description: "Marseille-style fish stew, rouille, croutons", tags: [], badge: "SIGNATURE", image: "/Restaurant/images/exp3.avif" },
    { name: "Grilled Octopus", price: "€32", description: "Spanish octopus, chickpea purée, chorizo vinaigrette", tags: ["GF"], image: "/Restaurant/images/gallery/gallery1.avif" },
    { name: "Dover Sole Meunière", price: "€58", description: "Whole Dover sole, brown butter, capers, lemon", tags: ["GF"], badge: "CHEF'S CHOICE", image: "/Restaurant/images/gallery/gallery2.avif" },
    { name: "Coquilles Saint-Jacques", price: "€38", description: "Pan-seared scallops, cauliflower purée, hazelnut", tags: ["GF"], image: "/Restaurant/images/gallery/gallery4.avif" },
    { name: "Plateau de Fruits de Mer", price: "€78", description: "Oysters, langoustines, crab, shrimp, whelks (for 2)", tags: ["GF"], image: "/Restaurant/images/exp3.avif" }
  ],
  Desserts: [
    { name: "Tarte Tatin au Chocolat", price: "€18", description: "Warm Valrhona chocolate tart, tonka bean ice cream", tags: [], badge: "SIGNATURE", image: "/Restaurant/images/menu/Chocolat.avif" },
    { name: "Crème Brûlée", price: "€14", description: "Madagascar vanilla, caramelised sugar crust", tags: ["GF"], image: "/Restaurant/images/exp4.avif" },
    { name: "Mille-Feuille", price: "€16", description: "Caramelised puff pastry, diplomat cream, fresh berries", tags: [], image: "/Restaurant/images/gallery/gallery2.avif" },
    { name: "Soufflé au Grand Marnier", price: "€22", description: "Orange soufflé, crème anglaise (allow 20 min)", tags: [], badge: "CHEF'S CHOICE", image: "/Restaurant/images/gallery/gallery3.avif" },
    { name: "Cheese Selection", price: "€24", description: "Five artisanal French cheeses, honeycomb, walnut bread", tags: ["GF"], image: "/Restaurant/images/gallery/gallery4.avif" }
  ],
  Drinks: [
    { name: "Champagne — Ruinart Blanc de Blancs", price: "€28/glass", description: "Chardonnay, citrus, brioche notes", tags: [], image: "/Restaurant/images/gallery/gallery1.avif" },
    { name: "White — Chablis Premier Cru", price: "€18/glass", description: "Burgundy, mineral, elegant", tags: [], image: "/Restaurant/images/gallery/gallery4.avif" },
    { name: "Red — Château Margaux 2015", price: "€45/glass", description: "Bordeaux, cassis, violet, silky tannins", tags: [], image: "/Restaurant/images/gallery/gallery3.avif" },
    { name: "Cocktail — L'Élian Signature", price: "€22", description: "Cognac, elderflower, champagne, gold leaf", tags: [], badge: "SIGNATURE", image: "/Restaurant/images/gallery/gallery2.avif" },
    { name: "Cocktail — Jardin de Provence", price: "€18", description: "Gin, lavender, lemon, rosemary, tonic", tags: [], image: "/Restaurant/images/exp4.avif" },
    { name: "Non-Alcoholic — Seasonal Pairing", price: "€12/course", description: "Chef's bespoke juice & infusion pairings", tags: ["V"], image: "/Restaurant/images/gallery/gallery1.avif" }
  ]
};

const categories = Object.keys(menuData);

function MenuPage() {
  const [activeTab, setActiveTab] = useState(categories[0]);

  return (
    <div className="menu-page">
      <section className="menu-page-hero">
        <div className="menu-page-hero-overlay"></div>
        <div className="menu-page-hero-content">
          <p className="menu-page-hero-eyebrow">OUR OFFERINGS</p>
          <h1 className="menu-page-hero-title">The Menu</h1>
        </div>
      </section>

      <section className="menu-page-content">
        <div className="menu-page-tabs">
          {categories.map(cat => (
            <button 
              key={cat} 
              className={`menu-page-tab ${activeTab === cat ? 'active' : ''}`}
              onClick={() => setActiveTab(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="menu-page-grid">
          {menuData[activeTab].map((item, index) => (
            <div key={index} className="menu-page-card">
              <div className="menu-page-card-img-wrapper">
                <img 
                  src={item.image} 
                  alt={item.name} 
                  className="menu-page-card-image"
                  loading="lazy" 
                />
              </div>
              <div className="menu-page-card-details">
                <div className="menu-page-card-header">
                  <h3 className="menu-page-card-title">{item.name}</h3>
                  <span className="menu-page-card-price">{item.price}</span>
                </div>
                <p className="menu-page-card-desc">{item.description}</p>
                <div className="menu-page-card-footer">
                  {item.badge && <span className="menu-page-card-badge">{item.badge}</span>}
                  {item.tags.map(tag => (
                    <span key={tag} className="menu-page-card-tag">{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="menu-page-cta">
          <Link to="/reserve" className="menu-page-btn">RESERVE A TABLE</Link>
        </div>
      </section>
    </div>
  );
}

export default MenuPage;
