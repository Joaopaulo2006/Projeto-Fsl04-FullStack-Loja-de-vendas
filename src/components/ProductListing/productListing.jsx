import React from "react";
import ProductCard from "../ProductCard/productcard.jsx"; // Importando o componente ProductCard

function ProductListing({ products, onProductClick }) {
  return (
    <div className="product-listing">
      {products.length === 0 ? (
        <p>Não há produtos para exibir.</p>
      ) : (
        <div className="product-list">
          {products.map((product) => (
            <ProductCard
              key={product.id} // Certifique-se de que cada produto tenha um id único
              name={product.name}
              image={product.image}
              price={product.price}
              priceDiscount={product.priceDiscount}
              onClick={() => onProductClick && onProductClick(product)}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default ProductListing;
