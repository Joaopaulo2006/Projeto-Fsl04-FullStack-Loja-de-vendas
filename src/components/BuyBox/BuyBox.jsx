import React from "react";
import "./BuyBox.css";
import starIcon from "../../assets/star-icon.svg";

function BuyBox({
  name,
  reference,
  stars,
  rating,
  price,
  priceDiscount,
  description,
  children, // Variações de produto (como tamanho, cor, etc)
}) {
  return (
    <div className="buy-box">
      <h1 className="product-names">{name}</h1>
      <p className="product-reference">Referência: {reference}</p>

      {/* Exibição das estrelas e avaliação */}
      <div className="product-rating">
        <span>{stars}</span>
        <img src={starIcon} alt="Estrela" />
        <span>({rating} avaliações)</span>
      </div>

      {/* Exibição do preço */}
      <div className="product-prices">
        <p className="price">
          {priceDiscount ? (
            <>
              <span className="original-prices">R${price}</span>
              <span className="discount-prices">R${priceDiscount}</span>
            </>
          ) : (
            `R$${price}`
          )}
        </p>
      </div>

      {/* Descrição do produto */}
      <p className="product-description">{description}</p>

      {/* Opções de tamanho e cor (como filhos) */}
      <div className="product-options">{children}</div>

      {/* Botão de compra */}
      <button className="buy-button">COMPRAR</button>
    </div>
  );
}

export default BuyBox;
