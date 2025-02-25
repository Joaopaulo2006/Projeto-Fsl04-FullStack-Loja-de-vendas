import React from "react";
import { Link } from "react-router-dom";
import "./ProductCard.css";

function ProductCard({
  id,
  name,
  image,
  price,
  priceDiscount,
  useButtonLink,
  type,
}) {
  const priceDiscountNumber = Number(priceDiscount); // Converte para número
  const prices = Number(price); // Converte para número

  return useButtonLink ? (
    // Quando useButtonLink for true, o ProductCard será uma div
    <div className="product-card">
      <div className="product-image-bcg">
        <img src={image} alt={name} className="product-image" />
      </div>
      <div className="product-info">
        <p className="product-type">{type}</p>
        <p className="product-name">{name}</p>
        <p className="product-price">
          {typeof priceDiscountNumber === "number" &&
          !isNaN(priceDiscountNumber) ? (
            <>
              <span className="discount-price">{`R$ ${priceDiscountNumber.toFixed(
                2
              )}`}</span>
              <span className="original-price">{`R$ ${prices.toFixed(
                2
              )}`}</span>
            </>
          ) : (
            <span>{`R$ ${prices.toFixed(2)}`}</span>
          )}
        </p>
        <div className="button-link">
          {/* Link de compra dentro de uma div */}
          <Link to={`/product/${id}`}>Comprar</Link>
        </div>
      </div>
    </div>
  ) : (
    // Quando useButtonLink for false, o ProductCard será um Link diretamente
    <Link className="product-card-2" to={`/product/${id}`}>
      <div className="product-image-bcg-2">
        <img src={image} alt={name} className="product-image-2" />
      </div>
      <div className="product-info-2">
        <p className="product-type-2">{type}</p>
        <p className="product-name-2">{name}</p>
        <p className="product-price-2">
          {typeof priceDiscountNumber === "number" &&
          !isNaN(priceDiscountNumber) ? (
            <>
              <span className="discount-price-2">{`R$ ${priceDiscountNumber.toFixed(
                2
              )}`}</span>
              <span className="original-price-2">{`R$ ${prices.toFixed(
                2
              )}`}</span>
            </>
          ) : (
            <span>{`R$ ${prices.toFixed(2)}`}</span>
          )}
        </p>
      </div>
    </Link>
  );
}

export default ProductCard;
