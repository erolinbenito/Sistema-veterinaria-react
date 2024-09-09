import React, { useState } from "react";
import "../../styles/actualizarCita/componente1.css";

const ActualizarCita = () => {
  const [fecha, setFecha] = useState("");
  const [hora, setHora] = useState("");
  const [formaDePago, setFormaDePago] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Formulario enviado", { fecha, hora, formaDePago });
  };

  return (
    <div className="actualizar-cita">
      <h2>Actualizar Cita</h2>

      <div className="detalles-cita">
        <h3>Detalles de cita</h3>
        <div className="detalles-grid">
          <div>Servicio</div>
          <div className="detalle-valor">-----</div>
          <div>Especialidad</div>
          <div className="detalle-valor">-----</div>
        </div>
      </div>

      <form onSubmit={handleSubmit}>
        <h3>Datos por editar</h3>
        <div className="form-group">
          <label>Fecha</label>
          <div className="input-icon">
            <input
              type="date"
              value={fecha}
              onChange={(e) => setFecha(e.target.value)}
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="calendar-icon"
            >
              <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
              <line x1="16" y1="2" x2="16" y2="6"></line>
              <line x1="8" y1="2" x2="8" y2="6"></line>
              <line x1="3" y1="10" x2="21" y2="10"></line>
            </svg>
          </div>
        </div>
        <div className="form-group">
          <label>Hora</label>
          <input
            type="time"
            value={hora}
            onChange={(e) => setHora(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Forma de pago</label>
          <select
            value={formaDePago}
            onChange={(e) => setFormaDePago(e.target.value)}
          >
            <option value="">Seleccionar</option>
            <option value="efectivo">Efectivo</option>
            <option value="tarjeta">Tarjeta</option>
            <option value="transferencia">Transferencia</option>
          </select>
        </div>
        <div className="form-actions">
          <button type="button" className="btn-cancelar">
            Cancelar
          </button>
          <button type="submit" className="btn-guardar">
            Guardar Cambios
          </button>
        </div>
      </form>
    </div>
  );
};

export default ActualizarCita;
