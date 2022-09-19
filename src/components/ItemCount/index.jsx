import React, { useState, useEffect } from "react";
import estilos from "./ItemCount.module.css";

export const ItemCount = ({ initial = 1, stock, onAdd }) => {
  const [count, setCount] = useState(parseInt(initial));

  const sumar = () => {
    setCount(count + 1);
  };
  const restar = () => {
    setCount(count - 1);
  };
  useEffect(() => {
    setCount(parseInt(initial));
  }, [initial]);

  return (
    <div className={estilos.contador2}>
      <button
        className={estilos.contador}
        disabled={count >= stock}
        onClick={sumar}
      >
        +
      </button>
      <span>{count} Unidades</span>
      <button
        className={estilos.contador}
        disabled={count <= 1}
        onClick={restar}
      >
        -
      </button>
      <div>
        <button
          className={estilos.agregarAlCarrito}
          disabled={stock <= 0}
          onClick={() => onAdd(count)}
        >
          Agregar al carrito
        </button>
      </div>
    </div>
  );
};

export default ItemCount;
