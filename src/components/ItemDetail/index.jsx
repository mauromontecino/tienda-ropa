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

  if (irAlCarrito) {
    return (
      <>
        <div className={estilos.productPriceBtn}>
          <Link to="/">Seguir comprando</Link>
        </div>
        <div className={estilos.productPriceBtn}>
          <Link to="/cart">Terminar compra</Link>
        </div>
      </>
    );
  }

  return (
    <div className={estilos.wrapper}>
      <div className={estilos.productImg}>
        <img className={estilos.imagen} src={data.image} alt="" />
      </div>
      <div className={estilos.productInfo}>
        <div className={estilos.productText}>
          <h1>{data.title}</h1>
          <p>{data.description}</p>
          <div className={estilos.productPriceBtn2}>
            <p>${data.price}</p>
          </div>
          <div className={estilos.productPriceBtn}>
            {irAlCarrito ? (
              <></>
            ) : (
              <ItemCount initial={quantity} stock={data.stock} onAdd={onAdd} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
