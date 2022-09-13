import React, { useState } from "react";
import estilos from "./itemDetail.module.css";
import ItemCount from "../ItemCount";
import { Link } from "react-router-dom";
import { useCartContext } from "../../context/CartContext";

export const ItemDetail = ({ data }) => {
  const [irAlCarrito, setIrAlCarrito] = useState(false);
  const { addProduct, getProductQuantity } = useCartContext();

  const onAdd = (quantity) => {
    setIrAlCarrito(true);
    addProduct(data, quantity);
  };

  const quantity = getProductQuantity(data.id);

  return (
    <div className={estilos.container}>
      <div className={estilos.detail}>
        <img className={estilos.imagen} src={data.image} alt="" />
        <div className={estilos.content}>
          <h1>{data.title}</h1>
          <h3>{data.price}</h3>
          {irAlCarrito ? (
            <Link to="/cart">Terminar compra</Link>
          ) : (
            <ItemCount initial={quantity} stock={10} onAdd={onAdd} />
          )}
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
