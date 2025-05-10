import { useEffect, useState } from "react";
import axios from "axios";
import MostrarEventos from "./componentes/MostrarEventos";
import CrearEventos from "./componentes/CrearEventos";
import EditarEventos from "./componentes/EditarEventos";
import VenderBoletos from "./componentes/VenderBoletos";
import './App.css';

function App() {
  const [eventos, setEventos] = useState([]);
  const [eventoEditando, setEventoEditando] = useState(null);

  const cargarEventos = async () => {
    try {
      const res = await axios.get("http://localhost:8080/eventos");
      setEventos(res.data);
    } catch (error) {
      console.error("Error al cargar eventos:", error);
    }
  };

  useEffect(() => {
    cargarEventos();
  }, []);

  const handleEditar = (evento) => {
    setEventoEditando(evento);
  };

  const handleAddEvent = () => {
    cargarEventos();
  };

  const handleUpdateEvent = () => {
    cargarEventos();
    setEventoEditando(null);
  };

  return (
    <div>
      <h1>Gestión de Eventos</h1>

      <h2>Crear Evento</h2>
      {!eventoEditando && (
        <CrearEventos onAddEvent={handleAddEvent} />
      )}

      {eventoEditando && (
        <EditarEventos
          event={eventoEditando}
          onUpdateEvent={handleUpdateEvent}
          onCancel={() => setEventoEditando(null)}
        />
      )}

<h2>Lista de Eventos</h2>
<MostrarEventos
  eventos={eventos}
  onEditar={handleEditar}
  onEliminar={cargarEventos}
/>
<VenderBoletos eventos={eventos} onVentaExitosa={cargarEventos} />
    </div>
  );
}

export default App;
