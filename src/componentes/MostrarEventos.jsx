import React from "react";

const MostrarEventos = ({ eventos, onEditar, onEliminar }) => {
  const eliminarEvento = async (id) => {
    try {
      await fetch(`http://localhost:8080/eventos/${id}`, {
        method: "DELETE",
      });
      onEliminar();
    } catch (error) {
      console.error("Error al eliminar el evento:", error);
    }
  };

  return (
    <ul>
      {eventos.map((evento) => (
        <li key={evento.id}>
          <strong>{evento.nombre}</strong> — {evento.fechaHora} — {evento.ubicacion}
          <button onClick={() => onEditar(evento)} style={{ marginLeft: "10px" }}>
            Editar
          </button>
          <button onClick={() => eliminarEvento(evento.id)} style={{ marginLeft: "5px" }}>
            Eliminar
          </button>
        </li>
      ))}
    </ul>
  );
};

export default MostrarEventos;
