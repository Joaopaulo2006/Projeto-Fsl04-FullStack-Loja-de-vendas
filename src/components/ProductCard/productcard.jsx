import React from "react";
import { Link } from "react-router-dom";
import "./productcard.css";

function ProductCard({ id, name, image, price, priceDiscount, useButtonLink }) {
  return (
    <div className="product-card">
      <img src={image} alt={name} className="product-image" />
      <div className="product-info">
        {/* Nome do produto */}
        <h3 className="product-name">{name}</h3>

        {/* Preço do produto */}
        <p className="product-price">
          {priceDiscount ? (
            <>
              {/* Preço com desconto (exibido junto ao preço original riscado) */}
              <span className="original-price">R$ {price.toFixed(2)}</span>
              <span className="discount-price">
                R$ {priceDiscount.toFixed(2)}
              </span>
            </>
          ) : (
            <span>R$ {price.toFixed(2)}</span>
          )}
        </p>

        {/* Link para detalhes do produto */}
        {useButtonLink ? (
          <Link to={`/product/${id || "default"}`} className="button-link">
            Ver detalhes
          </Link>
        ) : (
          <button className="view-details">Ver detalhes</button>
        )}
      </div>
    </div>
  );
}

export default ProductCard;
