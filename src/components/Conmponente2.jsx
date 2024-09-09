import React from "react";
import "../styles/componente2.css";
import todomasco from "../assets/homeCliente/todomasco (2).jpg";

function Componente2() {
  return (
    <div className="tarjeta">
      <div>
        <h1 className="tarjeta--titulo">Todo para tu mascota</h1>
        <p className="tarjeta--texto">
          Nuestro portal está diseñado para facilitar tu vida y brindarle a tu
          mascota el mejor cuidado, con la comodidad de agendar citas, comprar
          productos y mucho más, todo desde la palma de tu mano. ¡Porque tu
          mascota merece lo mejor, y nosotros estamos aquí para hacerlo posible!
        </p>
        <button
          className="tarjeta--boton"
          onClick={() => alert("Esta es una alerta")}
        >
          Conoce mas
        </button>
      </div>
      <img className="tarjeta--imagen" src={todomasco} />
    </div>
  );
}
export default Componente2;
