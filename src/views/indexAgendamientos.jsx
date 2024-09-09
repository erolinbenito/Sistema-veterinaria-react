import AppointmentsTable from "../components/agendamientos/Componente1";
import Footer from "../components/Footer";
import NavBar from "../components/Navbar";

function IndexAgendamiento() {
  const appointments = [
    {
      date: "2024-06-01",
      time: "2:00 pm",
      status: "Agendado",
      service: "Veterinaria",
      specialty: "Consulta",
    },
    {
      date: "2024-06-02",
      time: "9:00 am",
      status: "Agendado",
      service: "Spa",
      specialty: "Sesión de masajes",
    },
    {
      date: "2024-06-03",
      time: "10:20 am",
      status: "Cancelado",
      service: "Peluquería",
      specialty: "Baño corte de pelo",
    },
    {
      date: "2024-06-04",
      time: "4:00 pm",
      status: "Agendado",
      service: "Guardería",
      specialty: "Paseo",
    },
    {
      date: "2024-06-05",
      time: "11:30 am",
      status: "Agendado",
      service: "Peluquería",
      specialty: "Rehabilitación de cabello",
    },
    {
      date: "2024-06-06",
      time: "10:00 am",
      status: "Agendado",
      service: "Guardería",
      specialty: "Paseo",
    },
    {
      date: "2024-06-07",
      time: "12:00 pm",
      status: "Reagendado",
      service: "Veterinaria",
      specialty: "vacuna",
    },
    {
      date: "2024-06-08",
      time: "9:30 am",
      status: "Reagendado",
      service: "Veterinaria",
      specialty: "Consulta",
    },
  ];
  return (
    <div className="agendamiento">
      <NavBar />
      <div
        className="agendamiento--container"
        style={{ minHeight: "50vh" }}
      >
        <AppointmentsTable appointments={appointments} />
      </div>
      <Footer />
    </div>
  );
}

export default IndexAgendamiento;
