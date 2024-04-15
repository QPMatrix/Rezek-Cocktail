import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import LandingPage from "./pages/landing";
import Category from "./pages/category";
import FreshJuice from "./pages/fresh-jucies";
import HotDrink from "./pages/hotdrinks";
import Juice from "./pages/juice";
import Fakfakhena from "./pages/milkshake1";
import Milkshakes from "./pages/milkshake2";
import Sweet from "./pages/sweet";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/categories" element={<Category />} />
        <Route path="/categories/fresh-juice" element={<FreshJuice />} />
        <Route path="/categories/hotdrinks" element={<HotDrink />} />
        <Route path="/categories/juice" element={<Juice />} />
        <Route path="/categories/milkshake1" element={<Fakfakhena />} />
        <Route path="/categories/milkshake2" element={<Milkshakes />} />
        <Route path="/categories/sweet" element={<Sweet />} />
        {/* <Route path="/categories/:category" element={<CategoryDetailPage />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
