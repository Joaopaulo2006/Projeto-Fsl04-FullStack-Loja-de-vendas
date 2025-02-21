import React, { useState, useEffect } from "react";
import "./Gallery.css";

function Gallery({
  images,
  width = "1440px",
  height = "681px",
  radius = "10px",
  autoSlide = true,
  interval = 3000,
}) {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Função para avançar para a próxima imagem
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  // Função para voltar para a imagem anterior
  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  // Efeito para troca automática de imagens (caso autoSlide seja true)
  useEffect(() => {
    if (!autoSlide) return;

    const slideInterval = setInterval(nextSlide, interval);
    return () => clearInterval(slideInterval);
  }, [currentIndex, autoSlide, interval]);

  return (
    <div className="gallery-container" style={{ width, height }}>
      {/* Botão para imagem anterior */}
      <button className="prev" onClick={prevSlide}>
        &#10094;
      </button>

      {/* Imagem principal */}
      <img
        src={images[currentIndex].src}
        alt={`Slide ${currentIndex + 1}`}
        className="main-image"
        style={{ borderRadius: radius, width, height }}
      />

      {/* Botão para próxima imagem */}
      <button className="next" onClick={nextSlide}>
        &#10095;
      </button>

      {/* Miniaturas (opcional) */}
      <div className="thumbnails">
        {images.map((image, index) => (
          <div
            key={index}
            className={`thumbnail ${index === currentIndex ? "active" : ""}`}
            onClick={() => setCurrentIndex(index)}
            style={{ backgroundImage: `url(${image.src})` }}
          ></div>
        ))}
      </div>
    </div>
  );
}

export default Gallery;
