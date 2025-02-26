import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import "./ProductViewPage.css";

function ProductViewPage() {
  const { id } = useParams(); // Pegando o ID do produto da URL
  const [product, setProduct] = useState(null); // Estado do produto
  const navigate = useNavigate(); // Para redirecionamento

  useEffect(() => {
    const fetchProductData = async () => {
      try {
        const response = await axios.get(`http://localhost:9090/products`);
        if (response.data) {
          setProduct(response.data);
        } else {
          navigate("/404"); // Redireciona se o produto não for encontrado
        }
      } catch (error) {
        console.error("Erro ao carregar o produto:", error);
        navigate("/404");
      }
    };

    fetchProductData();
  }, [id, navigate]);

  if (!product) {
    return <div>Carregando...</div>;
  }

  // Desestruturação segura do objeto `product`
  const { name, image, rating, price, priceDiscount, description, stock } =
    product;
  const formattedPrice = price ? price.toFixed(2) : "0.00";
  const formattedPriceDiscount = priceDiscount
    ? priceDiscount.toFixed(2)
    : formattedPrice;

  return (
    <div className="product-view-page">
      <div className="product-details">
        <div className="product-image">
          {image ? (
            <img src={image} alt={name} />
          ) : (
            <div className="image-placeholder">Imagem indisponível</div>
          )}
        </div>
        <div className="product-info">
          <h1>{name}</h1>
          <p className="rating">
            <img src="../../assets/star-icon" alt="estrela de coiso" />{" "}
            {rating || "Sem avaliação"}
          </p>
          <p className="price">
            {priceDiscount ? (
              <>
                <span className="price-old">R${formattedPrice}</span>
                <span className="price-discount">
                  R${formattedPriceDiscount}
                </span>
              </>
            ) : (
              <span className="price-current">R${formattedPrice}</span>
            )}
          </p>
          <p className="description">
            {description || "Descrição não disponível"}
          </p>
          <p className="stock">Estoque: {stock || "Indisponível"}</p>

          <div className="size-options">
            <span>Tamanho:</span>
            {[39, 40, 41, 42, 43].map((size) => (
              <button key={size} className="size-button">
                {size}
              </button>
            ))}
          </div>

          <button className="buy-button">Comprar</button>
        </div>
      </div>
    </div>
  );
}

export default ProductViewPage;
