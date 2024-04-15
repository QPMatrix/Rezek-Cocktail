import { Routes, BrowserRouter, Route } from "react-router-dom";

import LandingPage from "./pages/landing";
import CategoryDetailPage from "./pages/category-detail";
import Category from "./pages/category";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/categories" element={<Category />} />
        <Route path="/categories/:category" element={<CategoryDetailPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
