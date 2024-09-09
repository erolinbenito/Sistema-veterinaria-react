import React from "react";
import NavBar from "../components/Navbar";
import Componente2 from "../components/Conmponente2";
import Componente3 from "../components/Componente3";
import Componente4 from "../components/Componente4";
import Componente5 from "../components/Componente5";
import Componente6 from "../components/Componente6";
import Footer from "../components/Footer";
import Componente7 from "../components/Componente7";

function IndexCliente() {
  return (
    <div className="container">
      <NavBar
        imgSrc={"https://cdn-icons-png.flaticon.com/512/149/149071.png"}
        userPhoto={"https://cdn-icons-png.flaticon.com/512/149/149071.png"}
      />
      <Componente2 />
      <Componente3 />
      <Componente4 />
      <Componente5 />
      <Componente6 />
      <Footer />
      <Componente7/>
    </div>
  );
}

export default IndexCliente;
