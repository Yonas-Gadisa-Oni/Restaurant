import React, { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import './Gallery.css';

const images = [
  { src: '/Restaurant/images/gallery/gallery1.avif', category: 'Interior', alt: 'Elegant dining room' },
  { src: '/Restaurant/images/gallery/gallery2.avif', category: 'Cuisine', alt: 'Signature dish presentation' },
  { src: '/Restaurant/images/gallery/gallery3.avif', category: 'Interior', alt: 'Intimate table setting' },
  { src: '/Restaurant/images/gallery/gallery4.avif', category: 'Interior', alt: 'Restaurant ambiance' },
  { src: '/Restaurant/images/room.avif', category: 'Interior', alt: 'Main dining hall' },
  { src: '/Restaurant/images/chef.avif', category: 'Events', alt: 'Chef at work' },
  { src: '/Restaurant/images/exp1.avif', category: 'Cuisine', alt: 'Fine dining plate' },
  { src: '/Restaurant/images/exp2.avif', category: 'Cuisine', alt: 'Artisan pasta' },
  { src: '/Restaurant/images/exp3.avif', category: 'Cuisine', alt: 'Seafood selection' },
  { src: '/Restaurant/images/exp4.avif', category: 'Cuisine', alt: 'Chocolate dessert' },
  { src: '/Restaurant/images/menu/Truffle.avif', category: 'Cuisine', alt: 'Truffle bisque' },
  { src: '/Restaurant/images/menu/Agneau.avif', category: 'Cuisine', alt: 'Lamb en croûte' },
  { src: '/Restaurant/images/menu/Chocolat.avif', category: 'Cuisine', alt: 'Chocolate tart' }
];

const categories = ['All', 'Interior', 'Cuisine', 'Events'];

const GalleryPage = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [lightboxIndex, setLightboxIndex] = useState(null);
  
  const filteredImages = activeFilter === 'All' 
    ? images 
    : images.filter(img => img.category === activeFilter);

  const openLightbox = (index) => {
    setLightboxIndex(index);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = useCallback(() => {
    setLightboxIndex(null);
    document.body.style.overflow = 'auto';
  }, []);

  const nextImage = useCallback((e) => {
    if (e) e.stopPropagation();
    setLightboxIndex(prev => (prev === filteredImages.length - 1 ? 0 : prev + 1));
  }, [filteredImages.length]);

  const prevImage = useCallback((e) => {
    if (e) e.stopPropagation();
    setLightboxIndex(prev => (prev === 0 ? filteredImages.length - 1 : prev - 1));
  }, [filteredImages.length]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (lightboxIndex === null) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') nextImage();
      if (e.key === 'ArrowLeft') prevImage();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [lightboxIndex, closeLightbox, nextImage, prevImage]);

  return (
    <div className="gallery-page">
      <section className="gallery-page-hero">
        <div className="gallery-page-hero-overlay"></div>
        <div className="gallery-page-hero-content">
          <p className="gallery-page-hero-eyebrow">OUR GALLERY</p>
          <h1 className="gallery-page-hero-title">Moments at Maison Élian</h1>
        </div>
      </section>

      <section className="gallery-page-content">
        <div className="gallery-page-filters">
          {categories.map(cat => (
            <button 
              key={cat} 
              className={`gallery-filter-btn ${activeFilter === cat ? 'active' : ''}`}
              onClick={() => setActiveFilter(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="gallery-page-grid">
          {filteredImages.map((img, index) => (
            <div 
              key={img.src} 
              className="gallery-grid-item"
              onClick={() => openLightbox(index)}
            >
              <img src={img.src} alt={img.alt} className="gallery-grid-img" loading="lazy" />
              <div className="gallery-grid-overlay">
                <span className="gallery-zoom-icon">&#128269;</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {lightboxIndex !== null && (
        <div className="gallery-lightbox" onClick={closeLightbox}>
          <button className="gallery-lightbox-close" onClick={closeLightbox}>&times;</button>
          
          <div className="gallery-lightbox-content" onClick={e => e.stopPropagation()}>
            <button className="gallery-lightbox-nav prev" onClick={prevImage}>&#10094;</button>
            
            <div className="gallery-lightbox-image-container">
              <img 
                src={filteredImages[lightboxIndex].src} 
                alt={filteredImages[lightboxIndex].alt} 
                className="gallery-lightbox-img" 
              />
              <div className="gallery-lightbox-counter">
                {lightboxIndex + 1} / {filteredImages.length}
              </div>
            </div>

            <button className="gallery-lightbox-nav next" onClick={nextImage}>&#10095;</button>
          </div>
        </div>
      )}

      <section className="gallery-page-cta">
        <div className="gallery-cta-content">
          <h2>Visit Us</h2>
          <p>Experience the ambiance in person. Reserve your table today.</p>
          <Link to="/reserve" className="gallery-cta-btn">Reserve Now</Link>
        </div>
      </section>
    </div>
  );
};

export default GalleryPage;
