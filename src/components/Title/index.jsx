import React from "react";
import estilos from "./Title.module.css";

export const Title = (props) => {
  return <h1 className={estilos.NavBar}> Hola {props.greeting}</h1>;
};

export default Title;
