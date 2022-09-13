import React from "react";
import { useCartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";
import ItemCart from "../ItemCart";

const Cart = () => {
  const { cart, totalPrice, clearCart } = useCartContext();

  if (cart.length === 0) {
    return (
      <>
        <p>No Hay elementos en el carrito</p>
        <Link to="/">Hacer Compras</Link>
      </>
    );
  }
  return (
    <>
      {cart.map((product) => (
        <ItemCart key={product.id} product={product} />
      ))}
      <div>
        <p>Total: {totalPrice()}</p>
      </div>
      <div>
        <button onClick={() => clearCart()}>Limpiar carrito</button>
      </div>
    </>
  );
};

export default Cart;
