import React from "react";
import HelperImagenes from "./HelperImagenes";
import "../styles/componente5.css";
import spa from "../assets/homeCliente/spa1.jpg";
import guarderia from "../assets/homeCliente/Guarderia.jpg.png";
import ruta from "../assets/homeCliente/ruta.jpg";

function Componente5() {
  return (
    <div>
      <div className="componente5--container">
        <h1 className="componente5--titulo">Consiente a tu mascota</h1>
        <p className="componente5--subtitulo">
          Recuerda, cuidar de tu mascota es más que alimentarla: es darle amor,
          atención y salud. ¡Agenda su próxima cita y mantenla feliz y sana!"
        </p>
      </div>
      <div className="container--helpers">
        <HelperImagenes
          className="tarjeta--imagen"
          srcImagen={spa}
          titulo={"Spa"}
          subtitulo={
            "¡Dale a tu mascota el tratamiento que se merece! Relájala con un día de spa lleno de mimos, baños relajantes y cuidados especiales. ¡Tu peludito te lo agradecerá!"
          }
        />

        <HelperImagenes
          className="tarjeta--imagen"
          srcImagen={guarderia}
          titulo={"Guarderia"}
          subtitulo={"¡Tranquilidad para ti, diversión para ellos! Nuestra guardería de mascotas es el lugar perfecto donde tu compañero peludo recibirá atención, cariño y juegos mientras no estás. ¡Reserva su lugar hoy!¡Tranquilidad para ti, diversión para ellos! Nuestra guardería de mascotas es el lugar perfecto donde tu compañero peludo recibirá atención, cariño y juegos mientras no estás. ¡Reserva su lugar hoy!"}
        />
        <HelperImagenes
          className="tarjeta--imagen"
          srcImagen={ruta}
          titulo={"Ruta de mascota"}
          subtitulo={
            "¡Tu mascota, segura y a tiempo! Con nuestro servicio de ruta, nos encargamos de recogerla y llevarla de vuelta a casa después de su cita. Comodidad y tranquilidad para ti y tu peludito. ¡Agenda su transporte ahora!"
          }
        />
      </div>
    </div>
  );
}

export default Componente5;
