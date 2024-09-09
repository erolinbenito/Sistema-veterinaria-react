import React from 'react';
import '../../styles/Agendamientos/componente1.css';

const AppointmentsTable = ({ appointments }) => {
  return (
    <div className="appointments-container">
      <div className="appointments-header">
        <h2>Citas</h2>
        <select>
          <option>Todas las citas</option>
        </select>
        <button className="add-appointment-btn">+ Agendar Cita</button>
      </div>
      <table className="appointments-table">
        <thead>
          <tr>
            <th>Fecha</th>
            <th>Hora de Inicio</th>
            <th>Estado</th>
            <th>Servicio</th>
            <th>Especialidad</th>
            <th>Editar</th>
          </tr>
        </thead>
        <tbody>
          {appointments.map((appointment, index) => (
            <tr key={index} className={index % 2 === 0 ? 'even-row' : 'odd-row'}>
              <td>{appointment.date}</td>
              <td>{appointment.time}</td>
              <td>{appointment.status}</td>
              <td>{appointment.service}</td>
              <td>{appointment.specialty}</td>
              <td>
                <button className="edit-btn">✎</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AppointmentsTable;