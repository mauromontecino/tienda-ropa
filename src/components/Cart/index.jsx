import React, { useState } from "react";
import { useCartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";
import ItemCart from "../ItemCart";
import estilos from "./Cart.module.css";
import Form from "../Form";

const Cart = () => {
  const [idCompra, setIdCompra] = useState("");
  const { cart, totalPrice, clearCart } = useCartContext();

  const handleId = (id) => {
    setIdCompra(id);
  };
  const total = totalPrice();

  if (idCompra) {
    return (
      <>
        <div>
          <h1>Gracias por comprar tu número de compra es: {idCompra}</h1>
        </div>
        <div className={estilos.productPriceBtn}>
          <Link to="/">Volver a Home</Link>
        </div>
      </>
    );
  }

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
      <div>
        <Form
          cart={cart}
          total={total}
          clearCart={clearCart}
          handleId={handleId}
        />
      </div>
    </>
  );
};

export default Cart;
