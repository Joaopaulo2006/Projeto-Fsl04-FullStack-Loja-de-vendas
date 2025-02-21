import React from "react";
import Section from "../../components/Section/section"; // Componente de seção
import ProductListing from "../ProductListingPage/ProductListingPage"; // Componente de listagem de produtos

function HomePage() {
  const featuredProducts = [
    {
      name: "Produto 1",
      image: "/path/to/product-image-1.png",
      price: 150,
      priceDiscount: 99.9,
    },
    {
      name: "Produto 2",
      image: "/path/to/product-image-2.png",
      price: 120,
    },
    {
      name: "Produto 3",
      image: "/path/to/product-image-3.png",
      price: 200,
      priceDiscount: 150,
    },
    // Mais produtos podem ser adicionados
  ];

  return (
    <div className="home-page">
      {/* Seção de Produtos em Destaque */}
      <Section title="Produtos em Destaque" titleAlign="left">
        {/* A listagem de produtos é passada como filho da Section */}
        <ProductListing products={featuredProducts} />
      </Section>

      {/* Outra Seção */}
      <Section title="Promoções Especiais" titleAlign="center">
        {/* Aqui você pode adicionar mais componentes ou conteúdos relacionados a promoções */}
        <div className="promotions">
          <p>Descontos incríveis em diversos produtos!</p>
        </div>
      </Section>

      {/* Você pode adicionar mais seções conforme necessário */}
    </div>
  );
}

export default HomePage;
