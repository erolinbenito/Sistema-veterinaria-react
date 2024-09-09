import React from "react";

import "../../styles/perfil/componente1.css";

function Componente1() {
  return (
    <div className="componente1">
      <div className="componente1--title-container">
        <h1>Bienvenido, muchas aventuras nos esperan</h1>
        <h2>Información del perfil</h2>
      </div>
      <div>
        <form className="componente1--form">
          <div className="componente1--profile-container">
            <img
              className="componente1--profile-img"
              src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
              alt="profile"
            />
            <button className="componente1--profile-button" type="button">
              Subir foto
            </button>
          </div>
          <div className="componente1--form-container">
            <div className="componente1--form-input">
              <label htmlFor="nombre">Nombre</label>
              <input type="text" id="nombre" name="nombre" />
            </div>
            <div className="componente1--form-input">
              <label htmlFor="celular">Celular</label>
              <input type="number" minLength={10} id="celular" name="celular" />
            </div>
            <div className="componente1--form-input">
              <label htmlFor="correo">Correo</label>
              <input type="text" id="correo" name="correo" />
            </div>
            <div className="componente1--form-input">
              <label htmlFor="direccion">Dirección</label>
              <input type="text" id="direccion" name="direccion" />
            </div>
            <div className="componente1--form-buttons">
              <button className="componente1--form-button" type="submit">
                Actualizar Información
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Componente1;
