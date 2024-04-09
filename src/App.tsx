import { Routes, BrowserRouter, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import LandingPage from "./pages/landing";
import Footer from "./components/footer";
import Loading from "./components/loading";
const CategoryPage = lazy(() => import("./pages/category"));
const CategoryDetailPage = lazy(() => import("./pages/category-detail"));

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route
          path="/categories"
          element={
            <Suspense fallback={<Loading />}>
              <CategoryPage />
            </Suspense>
          }
        />
        <Route
          path="/categories/:category"
          element={
            <Suspense fallback={<Loading />}>
              <CategoryDetailPage />
            </Suspense>
          }
        />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
