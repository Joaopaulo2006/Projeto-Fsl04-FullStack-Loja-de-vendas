import React, { useState, useEffect } from "react";
import "./Gallery.css";

function Gallery({ images, autoSlide = true, interval = 3000 }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Avança para o próximo slide
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  // Retrocede para o slide anterior

  // Troca automática de slides
  useEffect(() => {
    if (!autoSlide) return;

    const slideInterval = setInterval(nextSlide, interval);
    return () => clearInterval(slideInterval);
  }, [currentIndex, autoSlide, interval]);

  return (
    <div className="gallery-container">
      <div
        className="slide"
        style={{ backgroundImage: `url(${images[currentIndex].src})` }}
      >
        <div className="slide-content">
          <span className="highlight">Melhores ofertas personalizadas</span>
          <h1>Queima de estoque Nike 🔥</h1>
          <p>
            Consequat culpa exercitation mollit nisi excepteur do do tempor
            laboris eiusmod irure consectetur.
          </p>
          <button className="cta-button">Ver Ofertas</button>
        </div>
        <div className="indicators">
          {images.map((_, index) => (
            <span
              key={index}
              className={index === currentIndex ? "dot active" : "dot"}
              onClick={() => setCurrentIndex(index)}
            ></span>
          ))}
        </div>
      </div>
      {/* Indicadores de slide */}
    </div>
  );
}

export default Gallery;
