import NavBar from "./components/NavBar/NavBar.jsx";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/index.jsx";
import Main from "./components/Main/Main.jsx";
import Footer from "./components/Footer/Footer.jsx";
import "./App.css";
import Cart from "./components/Cart";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import CartProvider from "./context/CartContext.jsx";

export const CartContext = React.createContext("");

function App() {
  return (
    <>
      <BrowserRouter>
        <CartProvider>
          <NavBar />
          <Routes>
            <Route path="/" element={<ItemListContainer />} />
            <Route
              path="/categoria/:categoryName"
              element={<ItemListContainer />}
            />
            <Route path="/cart" element={<Cart />} />
            <Route path="/item/:itemId" element={<ItemDetailContainer />} />
          </Routes>
          <Main />
          <Footer />
        </CartProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
