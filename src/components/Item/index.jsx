import React from "react";
import estilos from "./Item.module.css";

const Item = ({ info }) => {
  return (
    <span>
      <a href="" className={estilos.products}>
        <img src={info.image} alt="" />
        <h2>{info.title}</h2>
      </a>
      <h3>{info.price}</h3>
      <p>{info.description}</p>
      <p>{info.stock}</p>
    </span>
  );
};

export default Item;
