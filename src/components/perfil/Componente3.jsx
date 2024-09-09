import React from "react";
import '../../styles/perfil/componente3.css';

function Componente3() {
  return (
    <div className="componente3">
      <h2>Informacion de la mascota</h2>
      <div>
        <div>
          <button type="button" className="componente3--profile-button">
            Cambiar foto
          </button>
        </div>
        <div className="componente1--form-container">
          <div className="componente1--form-input">
            <label htmlFor="nombre">Nombre</label>
            <input type="text" id="nombre" name="nombre" />
          </div>
          <div className="componente1--form-input">
            <label htmlFor="edad">Edad</label>
            <input type="number" min={1} id="edad" name="edad" />
          </div>
          <div className="componente1--form-input">
            <label htmlFor="raza">Correo</label>
            <input type="text" id="raza" name="raza" />
          </div>
          <div className="componente1--form-input">
            <label htmlFor="especie">Dirección</label>
            <input type="text" id="especie" name="especie" />
          </div>
          <div className="componente1--form-buttons">
            <button className="componente1--form-button" type="submit">
              Actualizar Información
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Componente3;
