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
  type, // Recebe o estilo customizado
}) {
  const priceDiscountNumber = Number(priceDiscount);
  const prices = Number(price);

  return useButtonLink ? (
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
          <Link to={`/products/${id}`}>Comprar</Link>
        </div>
      </div>
    </div>
  ) : (
    <Link className="product-card-2" to={`/products/${id}`}>
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
