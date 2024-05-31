import { useState } from "react";
import "./App.css";
import CartContextProvider from "./components/context/CartContext";
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import Carousel from "./components/Carousel";
import GridHome from "./components/GridHome";
import Footer from "./components/Footer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemDetail from "./components/ItemDetail";
import Error404 from "./components/Error404";
import Cart from "./components/Cart";
import Checkout from "./components/Checkout";


function App() {
  return (
    <CartContextProvider>
      <BrowserRouter>
        <NavBar />
        <Carousel />
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/categoria/:id" element={<ItemListContainer />} />
          <Route path="/item/:id" element={<ItemDetailContainer />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
        <GridHome />
        <Footer />
      </BrowserRouter>
    </CartContextProvider>
  );
}

export default App;
