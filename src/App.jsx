import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "../src/components/Layout/Layout";
import HomePage from "../src/pages/HomePage/HomePage";
import ProductListingPage from "../src/pages/ProductListingPage/ProductListingPage";
import ProductViewPage from "../src/pages/ProductViewPage/ProductViewPage";

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="products" element={<ProductListingPage />} />
          <Route path="/product/:id" element={<ProductViewPage />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
