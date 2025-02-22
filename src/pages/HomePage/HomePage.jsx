import React from "react";
import Gallery from "../../components/Gallery/Gallery";
import Section from "../../components/Section/section";
import ProductListing from "../../components/ProductListing/ProductListing";
import "./HomePage.css";

function HomePage() {
  const featuredProducts = [
    {
      id: "1",
      image: "/collection-1.png",
      PriceDiscount: "30% OFF",
    },
    {
      id: "2",
      image: "/collection-2.png",
    },
    {
      id: "3",
      image: "/collection-3.png",
    },
  ];

  const images = [
    { src: "/home-slide-1.jpeg" },
    { src: "/home-slide-2.jpeg" },
    { src: "/home-slide-3.jpeg" },
    { src: "/home-slide-4.jpeg" },
    { src: "/home-slide-5.jpeg" },
    { src: "/home-slide-6.jpeg" },
    { src: "/home-slide-7.jpeg" },
    { src: "/home-slide-8.jpeg" },
  ];

  return (
    <div className="home-page">
      <Gallery
        images={images}
        width="1440px"
        height="681px"
        justify-content="center"
        align-items="center"
        autoSlide={true}
        interval={4000}
      />
      <Section
        title="Coleções em Destaque"
        titleAlign="left"
        className="collections"
      >
        <ProductListing
          products={featuredProducts}
          useButtonLink={true}
          variant="collections-list"
        />
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
