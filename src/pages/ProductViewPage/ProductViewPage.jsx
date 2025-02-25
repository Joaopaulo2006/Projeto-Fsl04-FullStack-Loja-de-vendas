import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./ProductViewPage.css";

function ProductViewPage() {
  const { id } = useParams(); // Pega o ID do produto da URL
  const [product, setProduct] = useState(null); // Estado para armazenar o produto
  const navigate = useNavigate(); // Função para navegar para outras páginas

  useEffect(() => {
    // Aqui você pode buscar o produto de um JSON ou de uma API
    const fetchProductData = async () => {
      try {
        // Simulando a busca de um produto com o ID
        const response = await fetch(`/produtos.json`);
        const products = await response.json();
        const selectedProduct = products.find(
          (prod) => prod.id === parseInt(id)
        );

        if (selectedProduct) {
          setProduct(selectedProduct);
        } else {
          // Redireciona para a página de erro se não encontrar o produto
          navigate("/404");
        }
      } catch (error) {
        console.error("Erro ao carregar o produto:", error);
      }
    };

    fetchProductData();
  }, [id, navigate]); // Recarrega quando o ID muda

  if (!product) {
    return <div>Carregando...</div>;
  }

  return (
    <div className="product-view-page">
      <div className="product-details">
        <div className="product-image">
          <img src={product.image} alt={product.name} />
        </div>
        <div className="product-info">
          <h1>{product.name}</h1>
          <p className="price">
            {product.priceDiscount ? (
              <>
                <span className="price-old">R${product.price}</span>
                <span className="price-discount">
                  R${product.priceDiscount}
                </span>
              </>
            ) : (
              <span className="price-current">R${product.price}</span>
            )}
          </p>
          <p className="description">{product.description}</p>
          <p className="stock">Estoque: {product.stock}</p>
          <div className="product-actions">
            <button className="add-to-cart">Adicionar ao Carrinho</button>
            <button className="buy-now">Comprar Agora</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductViewPage;
