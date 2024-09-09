import React from "react";
import "../../styles/perfil/componente2.css";

function Componente2() {

    return (
      <div className="componente2--container">
        <h2>Registra a tu mascota aquí</h2>
        <img
          className="componente2--profile-img"
          src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
          alt="profile"
        />
        <button type="button" className="componente2--profile-button">
            Registrar Mascota
        </button>
      </div>
    );
}

export default Componente2