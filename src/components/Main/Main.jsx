import React from "react";
import estilos from "./Main.module.css";

const Main = (props) => {
  console.log(props);
  return (
    <main className={estilos.Main}>
      <section>Main</section>
    </main>
  );
};

export default Main;
