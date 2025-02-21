import React from "react";
import Gallery from "../../components/Gallery/Gallery";
import Section from "../../components/Section/section"; // Componente de seção
import ProductListing from "../../components/ProductListing/ProductListing"; // Componente correto
import "./HomePage.css";
function HomePage() {
  const featuredProducts = [
    {
      name: "Produto 1",
      image: "/product-image-2.jpeg", // Caminho correto da imagem
      price: 150,
      priceDiscount: 99.9,
    },
    {
      name: "Produto 2",
      image: "/product-image-2.png",
      price: 120,
    },
    {
      name: "Produto 3",
      image: "/product-image-3.png",
      price: 200,
      priceDiscount: 150,
    },
  ];
  const images = [
    { src: "/home-slide-1.jpeg" },
    { src: "/home-slide-2.jpeg" },
    { src: "/home-slide-3.jpeg" },
  ];
  return (
    <div className="home-page">
      <Gallery
        images={images}
        width="1440px"
        height="681px"
        autoSlide={true}
        interval={4000}
      />
      <Section title="Produtos em Destaque" titleAlign="center">
        <ProductListing products={featuredProducts} />
      </Section>
      <Section title="Promoções Especiais" titleAlign="center">
        <div className="promotions">
          <p>Descontos incríveis em diversos produtos!</p>
        </div>
      </Section>
    </div>
  );
}

export default HomePage;
