import React, { useState } from "react";
import "./Gallery.css";

function Gallery({ images, showThumbs, width, height, radius }) {
  const [currentImage, setCurrentImage] = useState(images[0]?.src);

  const handleThumbnailClick = (imageSrc) => {
    setCurrentImage(imageSrc);
  };

  return (
    <div className="gallery-container" style={{ width, height }}>
      <div
        className="main-image"
        style={{
          backgroundImage: `url(${currentImage})`,
          borderRadius: radius,
          width,
          height,
        }}
      ></div>

      {showThumbs && (
        <div className="thumbnails">
          {images.map((image, index) => (
            <div
              key={index}
              className="thumbnail"
              onClick={() => handleThumbnailClick(image.src)}
              style={{ backgroundImage: `url(${image.src})` }}
            ></div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Gallery;
