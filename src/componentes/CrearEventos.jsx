import { useState } from "react";
import axios from "axios";

const CrearEventos = ({ onAddEvent }) => {
  const [formData, setFormData] = useState({
    nombre: "",
    fechaHora: "",
    ubicacion: "",
    boletosDisponibles: "",
    precio: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    // Validaciones básicas
    if (!formData.nombre || !formData.fechaHora || formData.boletosDisponibles <= 0) {
      alert("Nombre, fecha y cantidad de boletos (mayor a 0) son obligatorios.");
      return;
    }
  
    try {
      await axios.post("http://localhost:8080/eventos", {
        ...formData,
        boletosDisponibles: parseInt(formData.boletosDisponibles),
        precio: parseFloat(formData.precio),
      });
  
      setFormData({
        nombre: "",
        fechaHora: "",
        ubicacion: "",
        boletosDisponibles: 0,
        precio: 0,
      });
  
      onAddEvent();
    } catch (error) {
      console.error("Error al crear el evento:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: "20px" }}>
      <input
        type="text"
        name="nombre"
        placeholder="Nombre"
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
        placeholder="Ubicación"
        value={formData.ubicacion}
        onChange={handleChange}
        required
      />
      <input
        type="number"
        name="boletosDisponibles"
        placeholder="Boletos"
        value={formData.boletosDisponibles}
        onChange={handleChange}
        required
      />
      <input
        type="number"
        step="0.01"
        name="precio"
        placeholder="Precio"
        value={formData.precio}
        onChange={handleChange}
        required
      />
      <button type="submit">Guardar</button>
    </form>
  );
};

export default CrearEventos;
