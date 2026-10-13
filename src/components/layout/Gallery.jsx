import "../style/Gallery.css";

function Gallery () {
    return(
        <section className="gallery" id="gallery">
            <div className="gallery-grid">
                <img src="/Restaurant/images/gallery/gallery1.avif" alt="Restaurant dining room" />
                <img src="/Restaurant/images/gallery/gallery2.avif" alt="Fine dining dish" />
                <img src="/Restaurant/images/gallery/gallery3.avif" alt="Restaurant table setting" />
                <img src="/Restaurant/images/gallery/gallery4.avif" alt="Restaurant interior" />
            </div>
        </section>
    )
};

export default Gallery;