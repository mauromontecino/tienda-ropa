import React from "react";
import { useCartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";
import ItemCart from "../ItemCart";
import estilos from "./Cart.module.css";

const Cart = () => {
  const { cart, totalPrice, clearCart } = useCartContext();

  if (cart.length === 0) {
    return (
      <>
        <div className={estilos.noHayItem}>
          <p>No Hay elementos en el carrito</p>
        </div>
        <div className={estilos.productPriceBtn}>
          <Link to="/">Hacer Compras</Link>
        </div>
      </>
    );
  }
  return (
    <>
      {cart.map((product) => (
        <ItemCart key={product.id} product={product} />
      ))}
      <div className={estilos.totalCart}>
        <p>Total: ${totalPrice()}</p>
      </div>
      <div className={estilos.productPriceBtn}>
        <button onClick={() => clearCart()}>Limpiar carrito</button>
      </div>
    </>
  );
};

export default Cart;
