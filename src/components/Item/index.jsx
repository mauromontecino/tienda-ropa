import estilos from "./Item.module.css";
import { Link } from "react-router-dom";
import React from "react";

const Item = ({ info }) => {
  return (
    <>
      <div className={estilos.wrapper}>
        <div className={estilos.products}>
          <img src={info.image} alt="" />
          <h2>{info.title}</h2>
          <p>{info.description}</p>
        </div>
        <div className={estilos.price}>
          <h3>${info.price}</h3>
        </div>
        <div className={estilos.stock}>
          <p>Quedan: {info.stock} Unidades</p>
        </div>
        <div className={estilos.btn}>
          <Link to={`/item/${info.id}`}>
            <button className={estilos.productPriceBtn}>Ver detalle</button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Item;
