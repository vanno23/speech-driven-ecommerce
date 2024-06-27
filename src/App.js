// App.js
import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import VoiceNavigation from "./VoiceNavigation";
import Header from "./components/Header/Header";
import "./App.css";
import Product from "./pages/Product";
import Categories from "./pages/Categories";
import Contact from "./pages/Contact";
import { CartProvider } from "./useContext/CartContext";
import Cart from "./pages/Cart";
import Footer from "./components/Footer/Footer";
import Checkout from "./pages/Checkout";
import { ChangeDetailProvider } from "./useContext/ChangeDetailContext";
import { SearchProvider } from "./useContext/SearchContext";

const App = () => {
  return (
    <div className="App">
      <VoiceNavigation />
      <ChangeDetailProvider>
        <SearchProvider>
          <CartProvider>
            <Header />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/categories" element={<Categories />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/product/:productId" element={<Product />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/checkout" element={<Checkout />} />
            </Routes>

            <Footer />
          </CartProvider>
        </SearchProvider>
      </ChangeDetailProvider>
    </div>
  );
};

export default App;
