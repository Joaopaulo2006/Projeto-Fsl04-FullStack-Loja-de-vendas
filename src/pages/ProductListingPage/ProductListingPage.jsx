import React, { useState, useEffect } from "react";
import Layout from "../../components/Layout/Layout.jsx";
import ProductListing from "../../components/ProductListing/ProductListing.jsx";
import FilterGroup from "../../components/FilterGroup/FilterGroup.jsx";
import Section from "../../components/Section/section.jsx";
import "./ProductListingPage.css";

function ProductListingPage() {
  const [products, setProducts] = useState([]);
  const [filters, setFilters] = useState({});
  const [sortOrder, setSortOrder] = useState("");

  const fetchProducts = async () => {
    try {
      const response = await fetch("/produtos.json");
      const data = await response.json();

      const formattedProducts = data.map((product) => ({
        ...product,
        price: parseFloat(product.price),
        priceDiscount: product.priceDiscount
          ? parseFloat(product.priceDiscount)
          : null,
        rating: parseFloat(product.rating),
      }));

      let filteredProducts = formattedProducts;

      if (sortOrder === "price-asc") {
        filteredProducts = filteredProducts.sort((a, b) => a.price - b.price);
      } else if (sortOrder === "price-desc") {
        filteredProducts = filteredProducts.sort((a, b) => b.price - a.price);
      }

      if (filters.category) {
        filteredProducts = filteredProducts.filter(
          (product) => product.category === filters.category
        );
      }

      setProducts(filteredProducts);
    } catch (error) {
      console.error("Erro ao carregar produtos", error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, [filters, sortOrder]);

  return (
    <Layout>
      <div className="product-listing-page">
        <div className="filters">
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
              { text: "Calçados", value: "Calçados" },
              { text: "Roupas", value: "Roupas" },
            ]}
            onChange={(e) =>
              setFilters({ ...filters, category: e.target.value })
            }
          />
        </div>

        <Section title="Produtos Encontrados">
          <ProductListing products={products} />
        </Section>
      </div>
    </Layout>
  );
}

export default ProductListingPage;
