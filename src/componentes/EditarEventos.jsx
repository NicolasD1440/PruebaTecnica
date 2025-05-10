import { useEffect, useState } from "react";
import axios from "axios";

const EditarEventos = ({ event, onUpdateEvent, onCancel }) => {
  const [formData, setFormData] = useState({
    nombre: "",
    fechaHora: "",
    ubicacion: "",
    boletosDisponibles: "",
    precio: "",
  });

  useEffect(() => {
    if (event) {
      setFormData({
        nombre: event.nombre || "",
        fechaHora: event.fechaHora ? event.fechaHora.slice(0, 16) : "", // Ajuste para datetime-local
        ubicacion: event.ubicacion || "",
        boletosDisponibles: event.boletosDisponibles || 0,
        precio: event.precio || 0,
      });
    }
  }, [event]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.put(`http://localhost:8080/eventos/${event.id}`, {
        ...formData,
        boletosDisponibles: parseInt(formData.boletosDisponibles),
        precio: parseFloat(formData.precio),
      });
     
      
      
      onUpdateEvent();
    } catch (error) {
      console.error("Error al actualizar el evento:", error);
      console.log("ID del evento:", event.id);
      console.log("URL de solicitud:", `http://localhost:8080/eventos/${event.id}`);
    }


  };

  
  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: "20px" }}>
      <h2>Editar Evento</h2>
      <input
        type="text"
        name="nombre"
        value={formData.nombre}
        onChange={handleChange}
        required
      />
      <input
        type="datetime-local"
        name="fechaHora"
        value={formData.fechaHora}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="ubicacion"
        value={formData.ubicacion}
        onChange={handleChange}
        required
      />
      <input
        type="number"
        name="boletosDisponibles"
        value={formData.boletosDisponibles}
        onChange={handleChange}
        required
      />
      <input
        type="number"
        step="0.01"
        name="precio"
        value={formData.precio}
        onChange={handleChange}
        required
      />
      <button type="submit">Actualizar</button>
      <button type="button" onClick={onCancel} style={{ marginLeft: "10px" }}>
        Cancelar
      </button>
    </form>
  );
};

export default EditarEventos;
