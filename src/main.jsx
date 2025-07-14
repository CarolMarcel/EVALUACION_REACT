// Importamos React, necesario para trabajar con JSX (aunque en React 17+ no siempre es obligatorio)
import React from 'react';
// Importamos ReactDOM, que nos permite renderizar la app en el DOM del navegador
import ReactDOM from 'react-dom/client';
// Importamos el componente principal de nuestra aplicación
import App from './App.jsx';
import './Style.css'; // Importa el CSS global de la aplicación

// Usamos la nueva API de React 18+ para crear el root del DOM y renderizar la aplicación
ReactDOM.createRoot(document.getElementById('root')).render(
  // Activamos el modo estricto de React para detectar posibles errores y buenas prácticas
  <React.StrictMode>
    <App />
  </React.StrictMode>
);