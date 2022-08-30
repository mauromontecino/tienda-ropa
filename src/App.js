import NavBar from "./components/NavBar/NavBar.jsx";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/index.jsx";
import Main from "./components/Main/Main.jsx";
import Footer from "./components/Footer/Footer.jsx";
import "./App.css";

function App() {
  return (
    <>
      <NavBar />
      <ItemListContainer />
      <ItemDetailContainer />
      <Main />
      <Footer />
    </>
  );
}

export default App;
