import { Suspense, lazy } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Loading from "./components/loading";

const LandingPage = lazy(() => import("./pages/landing"));
// const CategoryDetailPage = lazy(() => import("./pages/category-detail"));
const Category = lazy(() => import("./pages/category"));
const FreshJuice = lazy(() => import("./pages/fresh-jucies"));
const HotDrink = lazy(() => import("./pages/hotdrinks"));
const Juice = lazy(() => import("./pages/juice"));
const Fakfakhena = lazy(() => import("./pages/milkshake1"));
const Milkshakes = lazy(() => import("./pages/milkshake2"));
const Sweet = lazy(() => import("./pages/sweet"));

function App() {
  return (
    <Router>
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/categories" element={<Category />} />
          <Route path="/categories/fresh-juice" element={<FreshJuice />} />
          <Route path="/categories/hotdrinks" element={<HotDrink />} />
          <Route path="/categories/juice" element={<Juice />} />
          <Route path="/categories/milkshake1" element={<Fakfakhena />} />
          <Route path="/categories/milkshake2" element={<Milkshakes />} />
          <Route path="/categories/sweet" element={<Sweet />} />
          {/* <Route
            path="/categories/:category"
            element={<CategoryDetailPage />}
          /> */}
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
