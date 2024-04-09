import { Routes, BrowserRouter, Route } from "react-router-dom";
import LandingPage from "./pages/landing";
import Footer from "./components/footer";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
