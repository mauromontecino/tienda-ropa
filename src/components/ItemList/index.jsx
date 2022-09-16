import React from "react";
import Item from "../Item";
import estilos from "./itemList.module.css";

const ItemList = ({ data = [] }) => {
  return (
    <>
      <div className={estilos.flexContainer}>
        {data.map((products) => (
          <Item key={products.id} info={products} />
        ))}
      </div>
    </>
  );
};

export default ItemList;
