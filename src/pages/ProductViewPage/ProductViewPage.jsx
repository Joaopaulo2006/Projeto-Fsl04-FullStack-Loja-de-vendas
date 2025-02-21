import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Gallery from "../../components/Gallery/Gallery.jsx";
import ProductOptions from "../../components/ProductOptions/ProductOptions.jsx";
import BuyBox from "../../components/BuyBox/BuyBox.jsx";
import Section from "../../components/Section/section";
import ProductListing from "../../components/ProductListing/ProductListing";
function ProductViewPage() {
  const { id } = useParams(); // Obtém o id do produto da URL
  const [product, setProduct] = useState(null);
  const [relatedProducts, setRelatedProducts] = useState([]);

  useEffect(() => {
    // Função para buscar dados do produto específico
    async function getProductDetails() {
      // Substitua com a lógica para buscar os dados do produto
      const productData = {
        id,
        name: "Produto Exemplo",
        reference: "ABC123",
        stars: 4.5,
        rating: 120,
        price: 199.99,
        priceDiscount: 149.99,
        description: "Descrição detalhada do produto.",
        images: [
          { src: "/public/product-image-1.png" },
          { src: "/public/product-image-2.png" },
        ],
        sizes: ["39", "40", "41"],
        colors: ["#000", "#111", "#222"],
      };
      setProduct(productData);
    }

    // Função para buscar produtos relacionados
    async function getRelatedProducts() {
      // Substitua com a lógica para buscar produtos relacionados
      const relatedData = [
        {
          id: "2",
          name: "Produto Relacionado 1",
          price: 99.99,
          priceDiscount: 89.99,
          image: "/public/product-thumb-1.png",
        },
        {
          id: "3",
          name: "Produto Relacionado 2",
          price: 149.99,
          image: "/public/product-thumb-2.png",
        },
      ];
      setRelatedProducts(relatedData);
    }

    getProductDetails();
    getRelatedProducts();
  }, [id]);

  if (!product) {
    return <p>Carregando...</p>;
  }

  return (
    <div className="product-view-page">
      {/* Galeria de imagens */}
      <div className="product-gallery">
        <Gallery
          images={product.images}
          showThumbs={true}
          width="700px"
          height="570px"
          radius="4px"
        />
      </div>

      {/* Informações de compra */}
      <div className="product-buy-box">
        <BuyBox
          name={product.name}
          reference={product.reference}
          stars={product.stars}
          rating={product.rating}
          price={product.price}
          priceDiscount={product.priceDiscount}
          description={product.description}
        >
          {/* Variações do produto, como tamanho e cor */}
          <ProductOptions
            options={product.sizes}
            type="text"
            shape="square"
            radius="8px"
          />
          <ProductOptions
            options={product.colors}
            type="color"
            shape="circle"
          />
        </BuyBox>
      </div>

      {/* Produtos recomendados */}
      <Section title="Produtos relacionados" titleAlign="left">
        <ProductListing products={relatedProducts} />
      </Section>
    </div>
  );
}

export default ProductViewPage;
