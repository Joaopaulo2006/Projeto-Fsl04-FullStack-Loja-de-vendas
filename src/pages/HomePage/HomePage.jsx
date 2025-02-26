import React, { useState, useEffect } from "react";
import Gallery from "../../components/Gallery/Gallery";
import Section from "../../components/Section/section";
import ProductListing from "../../components/ProductListing/ProductListing";
import "bootstrap/dist/css/bootstrap.css";
import "./HomePage.css";

function HomePage() {
  const [allProducts, setAllProducts] = useState([]); // Todos os produtos da API
  const [selectedCategory, setSelectedCategory] = useState(""); // Categoria selecionada para "Produtos em Alta"

  // Busca os produtos da API quando a página carrega
  useEffect(() => {
    fetch("http://localhost:9090/products")
      .then((response) => response.json())
      .then((data) => {
        setAllProducts(data); // Armazena todos os produtos, incluindo os "-Collection"
        // Define a categoria inicial para "Produtos em Alta" a partir dos produtos normais (não de coleção)
        const normalProducts = data.filter(
          (product) => !product.category.endsWith("-Collection")
        );
        if (normalProducts.length > 0)
          setSelectedCategory(normalProducts[0].category);
      })
      .catch((error) => console.error("Erro ao buscar produtos:", error));
  }, []);

  // Produtos para "Produtos em Alta": somente os que NÃO têm "-Collection"
  const normalProducts = allProducts.filter(
    (product) => !product.category.endsWith("-Collection")
  );
  const filteredProductsForListings = selectedCategory
    ? normalProducts.filter((product) => product.category === selectedCategory)
    : normalProducts;
  const limitedProducts = filteredProductsForListings.slice(0, 8);

  // Produtos para "Coleções em Destaque": somente os que têm "-Collection"
  const collectionProducts = allProducts.filter((product) =>
    product.category.endsWith("-Collection")
  );

  // Todas as categorias disponíveis dos produtos normais (para o filtro)
  const categories = [...new Set(normalProducts.map((p) => p.category))];

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

  // Função para gerar o estilo de fundo para os ícones de categoria
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

      {/* Coleções em Destaque - exibe os produtos de coleção */}
      <Section title="Coleções em Destaque" titleAlign="center">
        <div className="collections">
          <ProductListing
            products={collectionProducts}
            variant="collections-list"
            useButtonLink={true}
          />
        </div>
      </Section>

      <Section title="Promoções" titleAlign="center">
        <div className="promotions">
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

          <Section title={"Produtos em Alta"} titleAlign="left">
            <div className="product-container">
              <ProductListing
                products={limitedProducts}
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
