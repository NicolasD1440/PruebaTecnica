import { useState } from "react";
import axios from "axios";

const VenderBoletos = ({ eventos, onVentaExitosa }) => {
  const [eventoId, setEventoId] = useState("");
  const [cantidad, setCantidad] = useState("");

  const handleVenta = async (e) => {
    e.preventDefault();

    if (!eventoId || cantidad <= 0) {
      alert("Selecciona un evento y una cantidad válida.");
      return;
    }

    const eventoSeleccionado = eventos.find(e => e.id === parseInt(eventoId));
    if (!eventoSeleccionado) {
      alert("Evento no encontrado.");
      return;
    }

    if (cantidad > eventoSeleccionado.boletosDisponibles) {
      alert("No se pueden vender más boletos de los disponibles.");
      return;
    }

    try {
      await axios.post(`http://localhost:8080/eventos/${eventoId}/vender?cantidad=${cantidad}`);
      alert("Boletos vendidos con éxito.");
      setEventoId("");
      setCantidad("");
      onVentaExitosa(); // Recarga la lista de eventos
    } catch (error) {
      alert("Error al vender boletos.");
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleVenta} style={{ marginTop: "20px" }}>
      <h2>Vender Boletos</h2>

      <select value={eventoId} onChange={(e) => setEventoId(e.target.value)} required>
        <option value="">Seleccione un evento</option>
        {eventos.map((ev) => (
          <option key={ev.id} value={ev.id}>
            {ev.nombre} ({ev.boletosDisponibles} disponibles)
          </option>
        ))}
      </select>

      <input
        type="number"
        value={cantidad}
        onChange={(e) => setCantidad(parseInt(e.target.value))}
        min="1"
        placeholder="Cantidad"
        required
      />

      <button type="submit">Vender</button>
    </form>
  );
};

export default VenderBoletos;
