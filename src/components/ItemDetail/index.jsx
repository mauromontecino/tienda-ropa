import React from "react";
import estilos from "./itemDetail.module.css";

export const ItemDetail = ({ data }) => {
  return (
    <div className={estilos.container}>
      <div className={estilos.detail}>
        <img className={estilos.imagen} src={data.image} alt="" />
        <div className={estilos.content}>
          <h1>{data.title}</h1>
          <h3>{data.price}</h3>
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
