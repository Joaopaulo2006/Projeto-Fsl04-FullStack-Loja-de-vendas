import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "../src/components/Layout/Layout";
import HomePage from "../src/pages/HomePage/HomePage";
import ProductListingPage from "../src/pages/ProductListingPage/ProductListingPage";
import ProductViewPage from "../src/pages/ProductViewPage/ProductViewPage";
import PedidosPage from "../src/pages/PedidosPage/PedidosPage";

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/products" element={<ProductListingPage />} />
          <Route path="/products/:id" element={<ProductViewPage />} />
          <Route path="/pedidos" element={<PedidosPage />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
