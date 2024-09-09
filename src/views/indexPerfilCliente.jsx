import React from "react";
import NavBar from "../components/Navbar";
import Componente1 from "../components/perfil/Componente1";
import Componente2 from "../components/perfil/Componente2";
import Carousel from "../components/perfil/Carousel";
import gato from "../assets/homeCliente/spa1.jpg";
import Componente3 from "../components/perfil/Componente3";
import Footer from "../components/Footer";

function IndexPerfilCliente() {
  const images = [
    gato,
    gato,
    
    // ... más URLs de imágenes
  ];
  return (
    <div className="container">
      <NavBar
        

      />
      <Componente1 />
      <div
        className="perfil--tarjetas"
        style={{ display: "flex", gap: "6rem", marginTop: "4rem" }}
      >
        <Componente2 />
        <Carousel images={images} />
      </div>
      
      <Componente3 />
      <div></div>

      <footer/>
    
    </div>
  );
}

export default IndexPerfilCliente;
