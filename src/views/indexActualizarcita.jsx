import ActualizarCita from "../components/actualizarCita/componente1";
import Footer from "../components/Footer";
import NavBar from "../components/Navbar";

function IndexActualizarCita() {
  return (
    <div className="actualizarCita">
      <NavBar />
      <div className="actualizarCita--container">
        <ActualizarCita />
      </div>
      <Footer />
    </div>
  );
}

export default IndexActualizarCita;
