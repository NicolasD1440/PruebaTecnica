# Gestión de Eventos

Este proyecto es una aplicación web de gestión de eventos, que permite crear, editar, eliminar y vender boletos de eventos. Está construido con **Spring Boot** en el backend y **React** en el frontend.

---

## 🧩 Tecnologías utilizadas

- **Backend**: Java 17, Spring Boot, Maven  
- **Frontend**: React, Axios  
- **Base de datos**: H2 (en memoria)

---

## 🚀 Requisitos previos

Asegúrate de tener instalado en tu máquina:

- Java 17 o superior  
- Maven  
- Node.js y npm

---

## 🛠️ Cómo ejecutar el proyecto

### 1. Clonar el repositorio del backend

```bash
git clone https://github.com/NicolasD1440/PruebaTecnicaBack.git
cd PruebaTecnicaBack
```

### 2. Clonar el repositorio del frontend

Abre una nueva terminal y ejecuta:

```bash
git clone https://github.com/NicolasD1440/PruebaTecnicaFront.git
cd PruebaTecnicaFront
```

---

### 3. Ejecutar el backend (Spring Boot)

Desde el directorio `PruebaTecnicaBack`, ejecuta:

```bash
mvn clean install
mvn spring-boot:run
```

> El backend estará disponible en: `http://localhost:8080`

---

### 4. Ejecutar el frontend (React)

Desde el directorio `PruebaTecnicaFront`, ejecuta:

```bash
npm install axios
npm install
npm start
```

> El frontend se abrirá automáticamente en: `http://localhost:3000`

---

### ✅ Recomendación

Abre **dos terminales separadas**, una para el backend y otra para el frontend, y ejecuta ambos al mismo tiempo para que la aplicación funcione correctamente.

---

## 📌 Notas

- La base de datos es en memoria (H2), por lo tanto los datos se perderán al reiniciar la aplicación.

---

## 🧪 Funcionalidades

- Crear, listar, editar y eliminar eventos
- Validaciones:
  - No se pueden crear eventos sin nombre, fecha o cantidad de boletos
  - No se pueden vender más boletos de los disponibles

---
