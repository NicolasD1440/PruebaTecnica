
# Gestión de Eventos

Este proyecto es una aplicación web de gestión de eventos, que permite crear, editar, eliminar y vender boletos de eventos. Está construido con **Spring Boot** en el backend y **React** en el frontend.

---

## 🧩 Tecnologías utilizadas

- Backend: Java 17, Spring Boot, Maven
- Frontend: React, Axios
- Base de datos: H2 Database, memoria
---

## 🚀 Requisitos previos

Asegúrate de tener instalado:

- Java 17 o superior
- Maven
- Node.js y npm

---

## 🛠️ Cómo ejecutar el proyecto

### 1. Clonar el repositorio front

```bash
git clone https://github.com/NicolasD1440/PruebaTecnicaFront.git
cd PruebaTecnicaFront
```

---
### 1.1. Clonar el repositorio back

```bash
git clone https://github.com/NicolasD1440/PruebaTecnicaBack.git
cd PruebaTecnicaBack
```

---
### 2. Backend (Spring Boot)

#### Ubicación del backend:
`/backend` 

#### Pasos:

```bash
mvn clean install
mvn spring-boot:run
```

> Por defecto, el backend corre en `http://localhost:8080`

---

### 3. Frontend (React)

#### Ubicación del frontend:
`/PruebaTecnicaFront` 

#### Pasos:

```bash
npm install axios
npm install
npm start
```

> El frontend se abrirá en `http://localhost:3000` automáticamente

---

## 📌 Notas

- Asegúrate de que el backend y el frontend estén corriendo al mismo tiempo.



---

## 🧪 Funcionalidades

- Crear, listar, editar y eliminar eventos
- Validaciones básicas:
  - No se pueden crear eventos sin nombre, fecha o cantidad de boletos
  - No se pueden vender más boletos de los disponibles


