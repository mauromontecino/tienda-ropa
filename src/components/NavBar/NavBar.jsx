import React from "react";
import estilos from "./NavBar.module.css";
import CartWidget from "../CartWidget";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className={estilos.flexContainer}>
      <h1 className={estilos.logo}>
        <NavLink to={"/"}>Marca</NavLink>
      </h1>
      <ul className={estilos.navigation}>
        <li>
          <NavLink to={"/"}>Home</NavLink>
        </li>
        <li>
          <NavLink to={"/categoria/ropa"}>Ropa</NavLink>
        </li>
        <li>
          <NavLink to={"/categoria/calzado"}>Calzado</NavLink>
        </li>
        <li>
          <NavLink to={"cart"}>
            <CartWidget />
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};
export default NavBar;
