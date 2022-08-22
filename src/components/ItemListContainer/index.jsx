import React from "react";
import Title from "../Title";
import ItemCount from "../ItemCount";

export const ItemListContainer = ({ saludar }) => {
  const onAdd = (cantidad) => {
    console.log(`Compraste ${cantidad}`);
  };

  return (
    <>
      <Title saludo={saludar} />
      <ItemCount initial={1} stock={10} onAdd={onAdd} />
    </>
  );
};

export default ItemListContainer;
