import React from "react";
import ProductCard from "../ProductCard/productcard.jsx";
import "./productListing.css";

function ProductListing({
  products,
  useButtonLink = false,
  variant = "",
  type,
}) {
  return (
    <div className={`product-listing ${variant}`}>
      {products.length === 0 ? (
        <p>Não há produtos para exibir.</p>
      ) : (
        <div className="product-list">
          {products.map((product, index) => (
            <ProductCard
              key={index} // Evita erro caso id seja undefined
              id={`product-${index + 1}`} // Garante que sempre tenha um id
              type={type || "Produto nao listado"}
              name={product.name || "Produto Sem Nome"}
              image={product.image}
              price={product.price || 0}
              priceDiscount={product.priceDiscount || null}
              useButtonLink={useButtonLink}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default ProductListing;
