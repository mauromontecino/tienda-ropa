import NavBar from "./components/NavBar/NavBar.jsx";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/index.jsx";
import Main from "./components/Main/Main.jsx";
import Footer from "./components/Footer/Footer.jsx";
import "./App.css";
import Cart from "./components/Cart";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
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
      </BrowserRouter>
    </>
  );
}

export default App;
