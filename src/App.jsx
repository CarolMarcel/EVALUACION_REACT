// Paso 1: Comenzamos con App.jsx
/* import { useState, useEffect } from 'react';
import Formulario from './components/Formulario';
import ListaHabitos from './components/ListaHabitos';
import './Style.css'; // Importamos solo un CSS global


function App() {
  const [habitos, setHabitos] = useState(() => {
    const guardados = localStorage.getItem('habitos');
    return guardados ? JSON.parse(guardados) : [];
  });

  const toggleHabito = (id) => {
    setHabitos(
      habitos.map(h => h.id === id ? { ...h, hecho: !h.hecho } : h)
    );
  };

  const [filtro, setFiltro] = useState('todos');
  
  const [modoOscuro, setModoOscuro] = useState(() => {
    const guardado = localStorage.getItem('modoOscuro');
    return guardado === 'true'; // convierte el string a booleano
  });

  const agregarHabito = (nombre) => {
    const nuevoHabito = {
      id: Date.now(),
      nombre,
      hecho: false,
      creado: new Date().toLocaleDateString(), // ➕ fecha legible
      animacion: 'nuevo' // ➕ animación de entrada
    };
    setHabitos([...habitos, nuevoHabito]);
  };

  const eliminarHabito = (id) => {
    setHabitos(habitos.filter(h => h.id !== id));
  };

  const ordenarPorFecha = () => {
    const ordenados = [...habitos].sort((a, b) => new Date(a.creado) - new Date(b.creado));
    setHabitos(ordenados);
  };

  const ordenarPorNombre = () => {
    const ordenados = [...habitos].sort((a, b) => a.nombre.localeCompare(b.nombre));
    setHabitos(ordenados);
  };

  useEffect(() => {
    localStorage.setItem('habitos', JSON.stringify(habitos));
  }, [habitos]);

  useEffect(() => {
    localStorage.setItem('modoOscuro', modoOscuro);
  }, [modoOscuro]);

  /*useEffect(() => {
  if (modoOscuro) {
    document.body.classList.add("oscuro");
  } else {
    document.body.classList.remove("oscuro");
  }
}, [modoOscuro]); */  

  /* return (
  <div className="fondo">
    <div className={`container ${modoOscuro ? 'oscuro' : ''}`}>
      <h1>Mis Hábitos Diarios</h1>

      <button className="modo-btn" onClick={() => setModoOscuro(!modoOscuro)}>
        {modoOscuro ? '☀️ Modo Claro' : '🌙 Modo Oscuro'}
      </button>

      <Formulario onAgregar={agregarHabito} />
      <div className="filtros">
        <button onClick={() => setFiltro('todos')}>Todos</button>
        <button onClick={() => setFiltro('completados')}>Completados</button>
        <button onClick={() => setFiltro('pendientes')}>Pendientes</button>
      </div>
      <div className="orden">
        <span>Ordenar por:</span>
        <button onClick={() => ordenarPorFecha()}>Fecha</button>
        <button onClick={() => ordenarPorNombre()}>Nombre</button>
      </div>

      <ListaHabitos
        habitos={habitos.filter(h => {
          if (filtro === 'completados') return h.hecho;
          if (filtro === 'pendientes') return !h.hecho;
          return true;
        })}
        onToggle={toggleHabito}
        onEliminar={eliminarHabito}
      />
      <p className="contador">
        ✅ Has completado {habitos.filter(h => h.hecho).length} de {habitos.length} hábitos
      </p>
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

export default App; */

import { useState, useEffect } from 'react';
import Formulario from './components/Formulario';
import CalendarioMensual from './components/CalendarioMensual';
import './Style.css';

function App() {
  const obtenerFechaActual = () => new Date().toISOString().split('T')[0];

  const [habitosPorDia, setHabitosPorDia] = useState(() => {
    const guardados = localStorage.getItem('habitosPorDia');
    return guardados ? JSON.parse(guardados) : {};
  });

  const [modoOscuro, setModoOscuro] = useState(() => {
    const guardado = localStorage.getItem('modoOscuro');
    return guardado === 'true';
  });

  const fechaActual = obtenerFechaActual();

  const agregarHabito = (nombre) => {
    const nuevo = {
      id: Date.now(),
      nombre,
      hecho: false,
    };

    const copiaDia = habitosPorDia[fechaActual] ? [...habitosPorDia[fechaActual]] : [];
    const actualizados = {
      ...habitosPorDia,
      [fechaActual]: [...copiaDia, nuevo],
    };
    setHabitosPorDia(actualizados);
  };

  const toggleHabito = (fecha, id) => {
    const actualizados = {
      ...habitosPorDia,
      [fecha]: habitosPorDia[fecha].map(h =>
        h.id === id ? { ...h, hecho: !h.hecho } : h
      )
    };
    setHabitosPorDia(actualizados);
  };

  const eliminarHabito = (fecha, id) => {
    const actualizados = {
      ...habitosPorDia,
      [fecha]: habitosPorDia[fecha].filter(h => h.id !== id)
    };
    setHabitosPorDia(actualizados);
  };

  useEffect(() => {
    localStorage.setItem('habitosPorDia', JSON.stringify(habitosPorDia));
  }, [habitosPorDia]);

  useEffect(() => {
    localStorage.setItem('modoOscuro', modoOscuro);
  }, [modoOscuro]);

  useEffect(() => {
    if (modoOscuro) {
      document.body.classList.add("oscuro");
    } else {
      document.body.classList.remove("oscuro");
    }
  }, [modoOscuro]);

  return (
    <div className="fondo">
      <div className={`container ${modoOscuro ? 'oscuro' : ''}`}>
        <h1>Mis Hábitos Diarios</h1>

        <button className="modo-btn" onClick={() => setModoOscuro(!modoOscuro)}>
          {modoOscuro ? '☀️ Modo Claro' : '🌙 Modo Oscuro'}
        </button>

        <Formulario onAgregar={agregarHabito} />

        <CalendarioMensual
          habitosPorDia={habitosPorDia}
          onToggle={toggleHabito}
          onEliminar={eliminarHabito}
        />
      </div>
    </div>
  );
}

export default App;
