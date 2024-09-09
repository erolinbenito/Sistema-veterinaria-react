import logo from './logo.svg';
import './App.css';
import Componente from './components/Componente';
import IndexCliente from './views/indexCliente';
import IndexAgendamiento from './views/indexAgendamientos';
import IndexActualizarCita from './views/indexActualizarcita';
import IndexPerfilCliente from './views/indexPerfilCliente';


function App() {
  return (
    <div className="App">
      <IndexPerfilCliente
      />
    </div>
  );
}

export default App;
