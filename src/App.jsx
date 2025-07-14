// Paso 1: Comenzamos con App.jsx
import { useState, useEffect } from 'react';
// Importamos los componentes creados
import Formulario from './components/Formulario';
import ListaHabitos from './components/ListaHabitos';
import './Style.css'; // Importamos solo un CSS global


function App() {
  // Estado principal que contiene los hábitos. Se carga desde localStorage si hay datos guardados
  const [habitos, setHabitos] = useState(() => {
    const guardados = localStorage.getItem('habitos');
    return guardados ? JSON.parse(guardados) : [];
  });

  // Función para alternar si un hábito está marcado como hecho o no
  const toggleHabito = (id) => {
    setHabitos(
      habitos.map(h => h.id === id ? { ...h, hecho: !h.hecho } : h)
    );
  };

  // Estado para el filtro actual (todos, completados, pendientes)
  const [filtro, setFiltro] = useState('todos');
  
  // Estado para el modo oscuro, también recuperado desde localStorage
  const [modoOscuro, setModoOscuro] = useState(() => {
    const guardado = localStorage.getItem('modoOscuro');
    return guardado === 'true'; // convierte el string a booleano
  });

  // Función para agregar un nuevo hábito 
  const agregarHabito = (nombre) => {
    // Validar si el hábito ya existe (ignorando mayúsculas/minúsculas)
    const yaExiste = habitos.some(h => h.nombre.toLowerCase() === nombre.toLowerCase());

    if (yaExiste) {
      alert('Ese hábito ya está en la lista.');
      return;
  }

    // Creamos un nuevo objeto de hábito
    const nuevoHabito = {
      id: Date.now(),  // ID único
      nombre,  // Nombre ingresado
      hecho: false,   // Por defecto no está hecho
      creado: new Date().toLocaleDateString(),   // Fecha actual legible
      animacion: 'nuevo'  // Clase CSS para animación
    };

    // Agregamos el nuevo hábito a la lista
    setHabitos([...habitos, nuevoHabito]);
  };

  // Función para eliminar un hábito
  const eliminarHabito = (id) => {
    setHabitos(habitos.filter(h => h.id !== id));
  };

  // Ordenar hábitos por fecha de creación
  const ordenarPorFecha = () => {
    const ordenados = [...habitos].sort((a, b) => new Date(a.creado) - new Date(b.creado));
    setHabitos(ordenados);
  };

  // Ordenar hábitos por nombre alfabéticamente
  const ordenarPorNombre = () => {
    const ordenados = [...habitos].sort((a, b) => a.nombre.localeCompare(b.nombre));
    setHabitos(ordenados);
  };

  // Guardamos los hábitos en localStorage cada vez que cambien
  useEffect(() => {
    localStorage.setItem('habitos', JSON.stringify(habitos));
  }, [habitos]);

  // Guardamos el estado del modo oscuro en localStorage 
  useEffect(() => {
    localStorage.setItem('modoOscuro', modoOscuro);
  }, [modoOscuro]);

  // Renderizado del componente
  return (
  <div className="fondo">
    <div className={`container ${modoOscuro ? 'oscuro' : ''}`}>
      <h1>Mis Hábitos Diarios</h1>

      {/* Botón para alternar el modo oscuro */}
      <button className="modo-btn" onClick={() => setModoOscuro(!modoOscuro)}>
        {modoOscuro ? '☀️ Modo Claro' : '🌙 Modo Oscuro'}
      </button>

       {/* Componente para agregar nuevos hábitos */}
      <Formulario onAgregar={agregarHabito} />

      {/* Filtros por estado del hábito */}
      <div className="filtros">
        <button onClick={() => setFiltro('todos')}>Todos</button>
        <button onClick={() => setFiltro('completados')}>Completados</button>
        <button onClick={() => setFiltro('pendientes')}>Pendientes</button>
      </div>
      {/* Opciones para ordenar la lista de hábitos */}
      <div className="orden">
        <span>Ordenar por:</span>
        <button onClick={() => ordenarPorFecha()}>Fecha</button>
        <button onClick={() => ordenarPorNombre()}>Nombre</button>
      </div>

      {/* Lista de hábitos filtrada */}
      <ListaHabitos
        habitos={habitos.filter(h => {
          if (filtro === 'completados') return h.hecho;
          if (filtro === 'pendientes') return !h.hecho;
          return true;
        })}
        onToggle={toggleHabito}
        onEliminar={eliminarHabito}
      />
      {/* Contador de hábitos completados */}
      <p className="contador">
        ✅ Has completado {habitos.filter(h => h.hecho).length} de {habitos.length} hábitos
      </p>
      {/* Barra de progreso */}
      <div className="progreso">
        <div
          className="progreso-barra"
          style={{
          width: `${(habitos.filter(h => h.hecho).length / habitos.length) * 100}%`}}>
        </div>
      </div>
    </div>
  </div>
  );
}

// Exportamos App para ser usado en main.jsx
export default App; 

