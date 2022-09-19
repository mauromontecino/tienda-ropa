import React from "react";
import estilos from "./Footer.module.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div className={estilos.footer}>
        <div className={estilos.contain}>
          <div className={estilos.col}>
            <h1>Sobre Nosotros</h1>
            <ul>
              <li>Sobre</li>
              <li>Misión</li>
              <li>Social</li>
            </ul>
          </div>
          <div className={estilos.col}>
            <h1>Productos</h1>
            <ul>
              <li>
                <Link to={"/categoria/ropa"}>Ropa</Link>
              </li>
              <li>
                <Link to={"/categoria/calzado"}>Calzado</Link>
              </li>
              <li>
                <Link to={"/categoria/accesorios"}>Accesorios</Link>
              </li>
            </ul>
          </div>
          <div className={estilos.col}>
            <h1>Cuentas</h1>
            <ul>
              <li>Sobre</li>
              <li>Misión</li>
              <li>Servicios</li>
              <li>Social</li>
              <li>Estemos en contacto</li>
            </ul>
          </div>
          <div className={estilos.col}>
            <h1>Recursos</h1>
            <ul>
              <li>Webmail</li>
              <li>Código de descuento</li>
              <li>Sitio del mapa</li>
            </ul>
          </div>
          <div className={estilos.col}>
            <h1>Soporte</h1>
            <ul>
              <li>Contactanos</li>
              <li>Web chat</li>
              <li>Reclamos</li>
            </ul>
          </div>
        </div>
        <div className={estilos.clearfix}></div>
      </div>
    </>
  );
};

export default Footer;
