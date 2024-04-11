import { Routes, BrowserRouter, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import LandingPage from "./pages/landing";
import Loading from "./components/loading";
const CategoryDetailPage = lazy(() => import("./pages/category-detail"));
import Category from "./pages/category";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route
          path="/categories"
          element={
            <Suspense fallback={<Loading />}>
              <Category />
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
    </BrowserRouter>
  );
}

export default App;
