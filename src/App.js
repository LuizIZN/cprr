import "./App.css";

//1 - config react router
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";


//components
import Navbar from "./components/Navbar";

//pages
import Product from "./pages/Product";
import Home from "./pages/Home";
import About from "./pages/About";
import Cadastro from "./pages/Cadastro";
import Info from "./pages/Info";
import NotFound from "./pages/NotFound";
import Search from "./pages/Search";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/new" element={<Cadastro />} />
          {/* Nested routes */}
          <Route path="/products/:id/info" element={<Info />} />
          {/* 4 - rota dinâmica */}
          <Route path="/products/:id" element={<Product />} />
          {/* 9 - search */}
          <Route path="/search" element={<Search />} />
          {/* 10 - redirect */}
          <Route path="/company" element={<Navigate to="/about" />} /> 
          {/* 7 - no match routes */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
