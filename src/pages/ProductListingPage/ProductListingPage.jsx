import React, { useState, useEffect } from "react";
import Layout from "../../components/Layout/Layout"; // Componente Layout
import Section from "../../components/Section/section"; // Componente Section
import ProductListing from "../../components/ProductListing/ProductListing.jsx"; // Componente de listagem de produtos
import FilterGroup from "../../components/FilterGroup/FilterGroup.jsx"; // Componente de filtro
import "./ProductListingPage.css"; // Estilos específicos para a página

function ProductListingPage() {
  const [products, setProducts] = useState([]); // Estado para armazenar os produtos
  const [filters, setFilters] = useState({}); // Estado para armazenar filtros selecionados
  const [sortOrder, setSortOrder] = useState(""); // Estado para controlar a ordem de exibição dos produtos

  useEffect(() => {
    // Função para buscar produtos com base nos filtros e ordenação (simulado aqui)
    const fetchProducts = async () => {
      // Aqui você pode fazer uma chamada à API ou carregar produtos de um arquivo
      const productsData = [
        {
          name: "Produto 1",
          image: "../../../public/product-image-1.png",
          price: 200,
          priceDiscount: 149.9,
        },
        {
          name: "Produto 2",
          image: "../../../public/product-image-2.png",
          price: 49.9,
        },
        {
          name: "Produto 3",
          image: "../../../public/product-image-3.png",
          price: 120,
        },
      ];

      // Filtrar e ordenar os produtos conforme os filtros e a ordenação
      let filteredProducts = productsData;

      // Ordenação
      if (sortOrder === "price-asc") {
        filteredProducts = filteredProducts.sort((a, b) => a.price - b.price);
      } else if (sortOrder === "price-desc") {
        filteredProducts = filteredProducts.sort((a, b) => b.price - a.price);
      }

      // Aplicar filtros aqui se necessário (exemplo de filtro por categoria, etc.)
      if (filters.category) {
        filteredProducts = filteredProducts.filter(
          (product) => product.category === filters.category
        );
      }

      setProducts(filteredProducts);
    };

    fetchProducts();
  }, [filters, sortOrder]); // Recarrega os produtos quando filtros ou ordenação mudarem

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
              { text: "Categoria 1", value: "cat1" },
              { text: "Categoria 2", value: "cat2" },
            ]}
            onChange={(e) =>
              setFilters({ ...filters, category: e.target.value })
            }
          />
        </div>

        <Section
          title={`Produtos Encontrados (${products.length})`}
          titleAlign="left"
        >
          <ProductListing products={products} />
        </Section>
      </div>
    </Layout>
  );
}

export default ProductListingPage;
