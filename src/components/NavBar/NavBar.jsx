import React from "react";
import estilos from "./NavBar.module.css";
import CartWidget from "../CartWidget";

const NavBar = () => {
  return (
    <nav>
      <ul className={estilos.NavBar}>
        <li>
          <a href="./home">Home</a>
        </li>
        <li>
          <a href="./home">Productos</a>
        </li>
        <li>
          <a href="./home">
            <CartWidget />
          </a>
        </li>
      </ul>
    </nav>
  );
};
export default NavBar;
