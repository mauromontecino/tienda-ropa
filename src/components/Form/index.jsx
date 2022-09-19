import {
  addDoc,
  collection,
  serverTimestamp,
  getFirestore,
} from "firebase/firestore";
import React, { useState } from "react";

const Form = ({ cart, total, clearCart, handleId }) => {
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [email, setEmail] = useState("");
  const [tel, setTel] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const order = {
      buyer: { nombre: nombre, apellido: apellido, email: email, tel: tel },
      items: cart,
      total: total,
      date: serverTimestamp(),
    };

    const ordersCollection = collection(db, "orders");

    addDoc(ordersCollection, order).then((res) => {
      handleId(res.id);
      clearCart();
    });
  };
  const db = getFirestore();

  const handleChangeNombre = (event) => {
    setNombre(event.target.value);
  };

  const handleChangeApellido = (event) => {
    setApellido(event.target.value);
  };
  const handleChangeEmail = (event) => {
    setEmail(event.target.value);
  };
  const handleChangeTel = (event) => {
    setTel(event.target.value);
  };

  return (
    <div>
      <h2>Rellene el formulario para completar la compra:</h2>
      <div style={{ marginTop: "20px" }}>
        <form action="" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Nombre..."
            name="nombre"
            value={nombre}
            onChange={handleChangeNombre}
          />
          <input
            type="text"
            placeholder="Apellido..."
            name="apellido"
            value={apellido}
            onChange={handleChangeApellido}
          />
          <input
            type="email"
            placeholder="Email..."
            name="email"
            value={email}
            onChange={handleChangeEmail}
          />
          <input
            type="number"
            placeholder="Teléfono..."
            name="tel"
            value={tel}
            onChange={handleChangeTel}
          />
          <button>Enviar</button>
        </form>
      </div>
    </div>
  );
};

export default Form;
