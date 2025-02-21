// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout/Layout"; // Importa o Layout
import ProductListingPage from "./pages/ProductListingPage/ProductListingPage"; // Exemplo de uma página
import ProductViewPage from "./pages/ProductViewPage/ProductViewPage"; // Exemplo de outra página
import HomePage from "./pages/HomePage/HomePage"; // Página inicial

function App() {
  return (
    <Router>
      <Routes>
        {/* Todas as rotas abaixo serão renderizadas dentro do Layout */}
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} /> {/* Página inicial */}
          <Route path="produtos" element={<ProductListingPage />} />{" "}
          {/* Listagem de produtos */}
          <Route path="product/:id" element={<ProductViewPage />} />{" "}
          {/* Visualização de produto */}
          {/* Adicione outras rotas aqui */}
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
