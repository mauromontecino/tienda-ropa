import React from "react";
import { useCartContext } from "../../context/CartContext";
import estilos from "./ItemCart.module.css";

const ItemCart = ({ product }) => {
  const { removeProduct } = useCartContext();
  return (
    <>
      <div className={estilos.itemCart}>
        <img src={product.image} alt="" />
        <div>
          <p>Titulo: {product.title}</p>
          <p>Cantidad: {product.quantity}</p>
          <p>Precio unitario: {product.price}</p>
          <p>SubTotal: ${product.quantity * product.price}</p>
          <button onClick={() => removeProduct(product.id)}>Eliminar</button>
        </div>
      </div>
    </>
  );
};

export default ItemCart;
