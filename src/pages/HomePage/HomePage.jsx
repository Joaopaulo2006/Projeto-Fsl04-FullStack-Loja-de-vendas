import React, { useState } from "react";
import Gallery from "../../components/Gallery/Gallery";
import Section from "../../components/Section/section";
import ProductListing from "../../components/ProductListing/ProductListing";
import "./HomePage.css";

function HomePage() {
  const [selectedCategory, setSelectedCategory] = useState("Camiseta");
  const featuredProducts = [
    {
      image: "/collection-1.png",
    },
    {
      image: "/collection-2.png",
    },
    {
      image: "/collection-3.png",
    },
  ];
  const Collection = {
    Camiseta: [
      { name: "SUPREME-Camiseta Diamonds", image: "/camiseta.png" },
      { name: "SUPREME-Camiseta Diamonds", image: "/camiseta.png" },
      { name: "SUPREME-Camiseta Diamonds", image: "/camiseta.png" },
      { name: "SUPREME-Camiseta Diamonds", image: "/camiseta.png" },
      { name: "SUPREME-Camiseta Diamonds", image: "/camiseta.png" },
      { name: "SUPREME-Camiseta Diamonds", image: "/camiseta.png" },
      { name: "SUPREME-Camiseta Diamonds", image: "/camiseta.png" },
      { name: "SUPREME-Camiseta Diamonds", image: "/camiseta.png" },
    ],
    Calca: [
      { name: "Bermuda Jeans Levi's®", image: "/calca.png" },
      { name: "Bermuda Jeans Levi's®", image: "/calca.png" },
      { name: "Bermuda Jeans Levi's®", image: "/calca.png" },
      { name: "Bermuda Jeans Levi's®", image: "/calca.png" },
      { name: "Bermuda Jeans Levi's®", image: "/calca.png" },
      { name: "Bermuda Jeans Levi's®", image: "/calca.png" },
      { name: "Bermuda Jeans Levi's®", image: "/calca.png" },
      { name: "Bermuda Jeans Levi's®", image: "/calca.png" },
    ],
    Bone: [
      { name: "SUPREME-Boné Washed Chino", image: "/bone.png" },
      { name: "SUPREME-Boné Washed Chino", image: "/bone.png" },
      { name: "SUPREME-Boné Washed Chino", image: "/bone.png" },
      { name: "SUPREME-Boné Washed Chino", image: "/bone.png" },
      { name: "SUPREME-Boné Washed Chino", image: "/bone.png" },
      { name: "SUPREME-Boné Washed Chino", image: "/bone.png" },
      { name: "SUPREME-Boné Washed Chino", image: "/bone.png" },
      { name: "SUPREME-Boné Washed Chino", image: "/bone.png" },
    ],
    Headphone: [
      {
        name: "JBL, Tune 520BT - Preto",
        image: "/headphone.png",
      },
      {
        name: "JBL, Tune 520BT - Preto",
        image: "/headphone.png",
      },
      {
        name: "JBL, Tune 520BT - Preto",
        image: "/headphone.png",
      },
      {
        name: "JBL, Tune 520BT - Preto",
        image: "/headphone.png",
      },
      {
        name: "JBL, Tune 520BT - Preto",
        image: "/headphone.png",
      },
      {
        name: "JBL, Tune 520BT - Preto",
        image: "/headphone.png",
      },
      {
        name: "JBL, Tune 520BT - Preto",
        image: "/headphone.png",
      },
      {
        name: "JBL, Tune 520BT - Preto",
        image: "/headphone.png",
      },
    ],
    Tenis: [
      { name: "K-Swiss V8 - Masculino", image: "/tenis.png" },
      { name: "K-Swiss V8 - Masculino", image: "/tenis.png" },
      { name: "K-Swiss V8 - Masculino", image: "/tenis.png" },
      { name: "K-Swiss V8 - Masculino", image: "/tenis.png" },
      { name: "K-Swiss V8 - Masculino", image: "/tenis.png" },
      { name: "K-Swiss V8 - Masculino", image: "/tenis.png" },
      { name: "K-Swiss V8 - Masculino", image: "/tenis.png" },
      { name: "K-Swiss V8 - Masculino", image: "/tenis.png" },
    ],
  };
  const categories = Object.keys(Collection);
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
          {/* Ícones das Categorias */}
          {categories.map((category) => (
            <div
              key={category}
              className={`category-icon ${
                selectedCategory === category ? "active" : ""
              }`}
              onClick={() => setSelectedCategory(category)}
            >
              <div className="bcg">
                <div
                  className="img-category"
                  style={{
                    backgroundImage: `url(/${category.toLowerCase()}.png)`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "64px",
                    backgroundPosition: "center",
                  }}
                ></div>
              </div>
              <span>{category}</span>
            </div>
          ))}

          {/* Lista de Produtos */}
          <Section
            className="product-container"
            title={"Produtos em Alta"}
            titleAlign="left"
          >
            <ProductListing
              products={Collection[selectedCategory]}
              useButtonLink={true}
              type={selectedCategory}
            />
          </Section>
        </div>
      </Section>
    </div>
  );
}

export default HomePage;
