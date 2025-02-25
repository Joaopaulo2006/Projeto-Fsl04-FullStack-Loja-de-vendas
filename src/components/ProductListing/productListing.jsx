import React from "react";
import ProductCard from "../ProductCard/ProductCard";
import "./ProductListing.css";

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
              key={index}
              id={product.id}
              type={product.category || "Produto não listado"}
              name={product.name || "Produto Sem Nome"}
              image={product.image}
              priceDiscount={product.priceDiscount}
              price={product.price}
              useButtonLink={useButtonLink}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default ProductListing;
