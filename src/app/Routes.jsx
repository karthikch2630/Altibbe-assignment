import { Routes, Route } from "react-router-dom";
import ProductListPage from "../pages/ProductList/ProductListPage";
import ProductDetailPage from "../pages/ProductDetails/ProductDetailPage";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<ProductListPage />} />
      <Route path="/products/:slug" element={<ProductDetailPage />} />
    </Routes>
  );
}
