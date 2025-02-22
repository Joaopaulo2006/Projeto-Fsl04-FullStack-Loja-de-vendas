import React from "react";
import ProductCard from "../ProductCard/productcard.jsx";
import "./productListing.css";

function ProductListing({ products, useButtonLink = false, variant = "" }) {
  return (
    <div className={`product-listing ${variant}`}>
      {products.length === 0 ? (
        <p>Não há produtos para exibir.</p>
      ) : (
        <div className="product-list">
          {products.map((product, index) => (
            <ProductCard
              key={product.id || index} // Evita erro caso id seja undefined
              id={product.id || `product-${index}`} // Garante que sempre tenha um id
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
