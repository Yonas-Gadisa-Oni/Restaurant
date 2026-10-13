import React from 'react';
import { Link } from 'react-router-dom';
import './About.css';

export default function AboutPage() {
  return (
    <div className="about-page">
      <section className="about-page-hero">
        <div className="about-page-hero-overlay"></div>
        <div className="about-page-hero-content">
          <p className="about-page-hero-eyebrow">OUR STORY</p>
          <h1 className="about-page-hero-title">About Maison Élian</h1>
        </div>
      </section>

      <section className="about-story-section">
        <div className="about-story-container">
          <div className="about-story-content">
            <h2>Where It All Began</h2>
            <p>
              Founded in 2009 by Chef Étienne Renard in the 8th arrondissement of Paris, Maison Élian was born from a single conviction: that dining, at its finest, is an act of generosity. What began as a twelve-seat supper club has grown into one of Paris's most celebrated dining destinations — but the spirit remains unchanged.
            </p>
            <p>
              Named after Renard's grandfather, Élian, who taught him to cook in a farmhouse kitchen in Provence, the restaurant honours the tradition of gathering around a table with intention, curiosity, and care.
            </p>
          </div>
          <div className="about-story-image">
            <img src="/Restaurant/images/room.avif" alt="Maison Élian Dining Room" />
          </div>
        </div>
      </section>

      <section className="about-philosophy-section">
        <div className="about-philosophy-container">
          <div className="philosophy-card">
            <span className="philosophy-number">01</span>
            <h3>Seasonal Integrity</h3>
            <p>We source exclusively from small producers within France. Our menu changes with the seasons, never against them.</p>
          </div>
          <div className="philosophy-card">
            <span className="philosophy-number">02</span>
            <h3>Classical Foundation</h3>
            <p>Every technique is rooted in the French classical tradition, refined through years of discipline and discovery.</p>
          </div>
          <div className="philosophy-card">
            <span className="philosophy-number">03</span>
            <h3>Generous Spirit</h3>
            <p>Hospitality is not performance. It is the natural expression of caring deeply about every guest's experience.</p>
          </div>
        </div>
      </section>

      <section className="about-team-section">
        <h2>Meet the Team</h2>
        <div className="about-team-container">
          <div className="team-card">
            <img src="/Restaurant/images/chef.avif" alt="Chef Étienne Renard" />
            <h3>Chef Étienne Renard</h3>
            <p className="team-title">Executive Chef & Founder</p>
            <p className="team-bio">Trained under Alain Ducasse and Michel Bras, Étienne brings two decades of mastery to every plate.</p>
          </div>
          <div className="team-card">
            <img src="/Restaurant/images/exp1.avif" alt="Mathilde Varenne" />
            <h3>Mathilde Varenne</h3>
            <p className="team-title">Head Sommelier</p>
            <p className="team-bio">With over 320 references in her cellar, Mathilde curates wines from small producers across France, Italy, and the Iberian Peninsula.</p>
          </div>
          <div className="team-card">
            <img src="/Restaurant/images/exp2.avif" alt="Lucien Beaumont" />
            <h3>Lucien Beaumont</h3>
            <p className="team-title">Pastry Chef</p>
            <p className="team-bio">A Le Cordon Bleu alumnus, Lucien transforms classic French desserts into modern works of edible art.</p>
          </div>
        </div>
      </section>

      <section className="about-awards-section">
        <div className="about-awards-container">
          <p className="awards-eyebrow">RECOGNITION</p>
          <h2>Awards & Accolades</h2>
          <div className="awards-grid">
            <div className="award-item">
              <h4>Michelin Star</h4>
              <p>Maintained since 2014</p>
            </div>
            <div className="award-item">
              <h4>Gault & Millau 17/20</h4>
              <p>2023</p>
            </div>
            <div className="award-item">
              <h4>La Liste Top 100</h4>
              <p>World's Best Restaurants</p>
            </div>
            <div className="award-item">
              <h4>James Beard Nominee</h4>
              <p>Outstanding International Restaurant</p>
            </div>
          </div>
        </div>
      </section>

      <section className="about-cta-section">
        <div className="about-cta-container">
          <h2>Experience Maison Élian</h2>
          <p>Reserve your table and discover what makes us special.</p>
          <Link to="/reserve" className="cta-button">Reserve a Table</Link>
        </div>
      </section>
    </div>
  );
}
