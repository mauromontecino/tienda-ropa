import estilos from "./Item.module.css";
import { Link } from "react-router-dom";
import React from "react";

const Item = ({ info }) => {
  return (
    <>
      <div>
        <div className={estilos.products}>
          <img src={info.image} alt="" />
          <h2>{info.title}</h2>
        </div>
        <h3>{info.price}</h3>
        <p>{info.description}</p>
        <p>Quedan: {info.stock} Unidades</p>
        <Link to={`/item/${info.id}`}>
          <button>Ver detalle</button>
        </Link>
      </div>
    </>
  );
};

export default Item;
