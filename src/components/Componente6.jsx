import React from "react";
import HelperImagenes from "./HelperImagenes";
import "../styles/componente6.css";
import collares from "../assets/homeCliente/collares.jpg";
import productos from "../assets/homeCliente/productos.jpg";
import snacks from "../assets/homeCliente/snacks.jpg";
import fragancia from "../assets/homeCliente/fragancia.jpg";
import rascador from "../assets/homeCliente/rascador.jpg";
import tapete from "../assets/homeCliente/tapete.jpg";
function componente6() {
  return (
    <div className="componente6--element1">
      <h1> Conoce nuestros productos</h1>
      <div className="componente6--container">
        <div className="componente6--texto">
          <div className="parrafo1">
            <p>
              "¡Tu mascota merece lo mejor! Agenda citas, compra productos y
              cuida de su bienestar en nuestro portal especializado. ¡Todo lo
              que necesita, en un solo lugar!"
            </p>
            <input accept=".jpg, .png, .jpeg" type="file"></input>
            <div className="accesorios--container">
              <ul>
                <li>accesorios</li>
                <li>prendas de vestir</li>
                <li>fragancias</li>
                <li>snacks</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="componente6--img-container">
          <img src={collares} alt="" />
          <img src={productos} alt="" />
          <img src={snacks} alt="" />
        </div>
        <div className="componente6--img-container">
          <img src={fragancia} alt="" />
          <img src={rascador} alt="" />
          <img src={tapete} alt="" />
        </div>
      </div>
    </div>
  );
}
export default componente6;
