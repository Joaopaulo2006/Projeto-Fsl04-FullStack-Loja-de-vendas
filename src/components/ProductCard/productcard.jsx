import React from "react";
import { Link } from "react-router-dom"; // Caso você queira usar o Link do react-router para navegação.

function ProductCard({ id, name, image, price, priceDiscount, onClick }) {
  return (
    <div className="product-card" onClick={onClick}>
      {/* Imagem do produto */}
      <img src={image} alt={name} className="product-image" />

      <div className="product-info">
        {/* Nome do produto */}
        <h3 className="product-name">{name}</h3>

        {/* Preço do produto */}
        <p className="product-price">
          {priceDiscount ? (
            <>
              {/* Preço com desconto (exibido junto ao preço original riscado) */}
              <span className="original-price">{price}</span>
              <span className="discount-price">{priceDiscount}</span>
            </>
          ) : (
            <span>{price}</span>
          )}
        </p>

        {/* Link para detalhes do produto */}
        <Link to={`/product/${id}`} className="view-details">
          Ver detalhes
        </Link>
      </div>
    </div>
  );
}

export default ProductCard;
