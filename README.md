
# Gestión de Eventos

Este proyecto es una aplicación web de gestión de eventos, que permite crear, editar, eliminar y vender boletos de eventos. Está construido con **Spring Boot** en el backend y **React** en el frontend.

---

## 🧩 Tecnologías utilizadas

- Backend: Java 17, Spring Boot, Maven
- Frontend: React, Axios
- Base de datos: H2 (por defecto) u otra si la configuras

---

## 🚀 Requisitos previos

Asegúrate de tener instalado:

- Java 17 o superior
- Maven
- Node.js y npm

---

## 🛠️ Cómo ejecutar el proyecto

### 1. Clonar el repositorio

```bash
git clone https://github.com/tu-usuario/gestion-eventos.git
cd gestion-eventos
```

---

### 2. Backend (Spring Boot)

#### Ubicación del backend:
`/backend` (o la carpeta que contenga tu código Java)

#### Pasos:

```bash
cd backend
mvn clean install
mvn spring-boot:run
```

> Por defecto, el backend corre en `http://localhost:8080`

---

### 3. Frontend (React)

#### Ubicación del frontend:
`/frontend` (o la carpeta que contiene tus componentes React)

#### Pasos:

```bash
cd frontend
npm install
npm start
```

> El frontend se abrirá en `http://localhost:3000` automáticamente

---

## 📌 Notas

- Asegúrate de que el backend y el frontend estén corriendo al mismo tiempo.
- El backend permite CORS solo desde `http://localhost:3000` por defecto.


---

## 🧪 Funcionalidades

- Crear, listar, editar y eliminar eventos
- Validaciones básicas:
  - No se pueden crear eventos sin nombre, fecha o cantidad de boletos
  - No se pueden vender más boletos de los disponibles


