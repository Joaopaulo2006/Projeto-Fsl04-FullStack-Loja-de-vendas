import React, { useState, useEffect } from "react";
import Gallery from "../../components/Gallery/Gallery";
import Section from "../../components/Section/section";
import ProductListing from "../../components/ProductListing/ProductListing";
import "bootstrap/dist/css/bootstrap.css";
import "./HomePage.css";

function HomePage() {
  const [products, setProducts] = useState([]); // Armazena os produtos da API
  const [selectedCategory, setSelectedCategory] = useState(""); // Categoria selecionada

  // Busca os produtos da API quando a página carrega
  useEffect(() => {
    fetch("http://localhost:9090/products") // API que retorna os produtos
      .then((response) => response.json())
      .then((data) => {
        setProducts(data); // Atualiza o estado com os produtos recebidos
        if (data.length > 0) setSelectedCategory(data[0].category); // Define uma categoria inicial
      })
      .catch((error) => console.error("Erro ao buscar produtos:", error));
  }, []);

  // Filtra os produtos pela categoria selecionada
  const filteredProducts = selectedCategory
    ? products.filter((product) => product.category === selectedCategory)
    : products;

  // Limita os produtos a 8 itens
  const limitedProducts = filteredProducts.slice(0, 8);

  // Captura todas as categorias disponíveis nos produtos
  const categories = [...new Set(products.map((p) => p.category))];

  const imagens = [
    { src: "/home-slide-1.jpeg" },
    { src: "/home-slide-2.jpeg" },
    { src: "/home-slide-3.jpeg" },
    { src: "/home-slide-4.jpeg" },
    { src: "/home-slide-5.jpeg" },
    { src: "/home-slide-6.jpeg" },
    { src: "/home-slide-7.jpeg" },
    { src: "/home-slide-8.jpeg" },
  ];

  // Função para gerar o estilo da categoria com base na seleção
  const getCategoryImageStyle = (category) => {
    const isActive = selectedCategory === category;
    return {
      backgroundImage: `url(/${category.toLowerCase()}${
        isActive ? "-rosa" : ""
      }.png)`,
      backgroundRepeat: "no-repeat",
      backgroundSize: "64px",
      backgroundPosition: "center",
    };
  };

  return (
    <div className="home-page">
      <Gallery
        images={imagens}
        width="1440px"
        height="681px"
        autoSlide={true}
        interval={4000}
      />

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
                  style={getCategoryImageStyle(category)}
                ></div>
              </div>
              <span>
                <p>{category}</p>
              </span>
            </div>
          ))}

          {/* Lista de Produtos Filtrados e Limitados */}
          <Section title={"Produtos em Alta"} titleAlign="left">
            <div className="product-container">
              <ProductListing
                products={limitedProducts} // Passa apenas os 8 primeiros produtos
                useButtonLink={false}
                type={selectedCategory}
              />
            </div>
          </Section>
        </div>
      </Section>

      <div className="containers">
        <div className="img-oferta">
          <img src="../../public/home-slide-4.jpeg" alt="Imagem em oferta" />
        </div>
        <div className="oferta-especial">
          <p className="p">Oferta especial</p>
          <h1>Air Jordan edição de colecionador</h1>
          <p className="p-desc">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip
          </p>
          <button>Ver Oferta</button>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
