import { Routes, BrowserRouter, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import LandingPage from "./pages/landing";
import Footer from "./components/footer";
const CategoryPage = lazy(() => import("./pages/category"));

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route
          path="/categories"
          element={
            <Suspense fallback={<span>Loading</span>}>
              <CategoryPage />
            </Suspense>
          }
        />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
