import React, { useState, useEffect } from "react";
import Layout from "../../components/Layout/Layout.jsx";
import ProductListing from "../../components/ProductListing/ProductListing.jsx";
import FilterGroup from "../../components/FilterGroup/FilterGroup.jsx";
import Section from "../../components/Section/section.jsx";
import "./ProductListingPage.css";

function ProductListingPage() {
  const [products, setProducts] = useState([]);
  const [allProducts, setAllProducts] = useState([]);
  const [filters, setFilters] = useState({ categories: [] });
  const [sortOrder, setSortOrder] = useState(""); // Definição do estado de ordenação
  const [selectedCategory, setSelectedCategory] = useState("");
  const [showFilters, setShowFilters] = useState(false); // Estado para exibir ou ocultar os filtros

  useEffect(() => {
    fetch("http://localhost:9090/products")
      .then((response) => response.json())
      .then((data) => {
        setAllProducts(data);
        const normalProducts = data.filter(
          (product) => !product.category.endsWith("-Collection")
        );
        if (normalProducts.length > 0) {
          setSelectedCategory(normalProducts[0].category);
        }
      })
      .catch((error) => console.error("Erro ao buscar produtos:", error));
  }, []);

  useEffect(() => {
    let filteredProducts = [...allProducts];

    filteredProducts = filteredProducts.filter(
      (product) => !product.category.endsWith("-Collection")
    );

    if (filters.categories.length > 0) {
      filteredProducts = filteredProducts.filter((product) =>
        filters.categories.includes(product.category)
      );
    }

    if (sortOrder === "price-asc") {
      filteredProducts.sort((a, b) => a.price - b.price);
    } else if (sortOrder === "price-desc") {
      filteredProducts.sort((a, b) => b.price - a.price);
    }

    setProducts(filteredProducts);
  }, [filters, sortOrder, allProducts]);

  const handleCategoryChange = (event) => {
    const { value, checked } = event.target;
    setFilters((prevFilters) => {
      const newCategories = checked
        ? [...prevFilters.categories, value]
        : prevFilters.categories.filter((category) => category !== value);
      return { ...prevFilters, categories: newCategories };
    });
  };

  return (
    <div className="product-listing-page">
      <div className="filters">
        <div
          className={`filter-toggle ${showFilters ? "active" : ""}`}
          onClick={() => setShowFilters(!showFilters)}
        >
          Filtros
        </div>

        <div className={`filter-options ${showFilters ? "active" : ""}`}>
          <FilterGroup
            title="Ordenar por"
            inputType="radio"
            options={[
              { text: "Menor preço", value: "price-asc" },
              { text: "Maior preço", value: "price-desc" },
            ]}
            onChange={(e) => setSortOrder(e.target.value)}
          />

          <FilterGroup
            title="Categoria"
            inputType="checkbox"
            options={[
              { text: "Calcados", value: "Tenis" },
              { text: "Camisetas", value: "Camiseta" },
              { text: "Boné", value: "Bone" },
              { text: "Headphone", value: "Headphone" },
            ]}
            onChange={handleCategoryChange}
          />
        </div>
      </div>

      <Section title={`Produtos Encontrados (${products.length})`}>
        <ProductListing products={products} />
      </Section>
    </div>
  );
}

export default ProductListingPage;
