import React from "react";
import estilos from "./Item.module.css";
import ItemCount from "../ItemCount";

const Item = ({ info }) => {
  return (
    <>
      <span>
        <a href="" className={estilos.products}>
          <img src={info.image} alt="" />
          <h2>{info.title}</h2>
        </a>
        <h3>{info.price}</h3>
        <p>{info.description}</p>
        <p>Quedan: {info.stock} Unidades</p>
      </span>
      <ItemCount initial={1} stock={info.stock} />
    </>
  );
};

export default Item;
