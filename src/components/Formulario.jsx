// Paso 2: Componente Formulario.jsx
// Ubicado en src/components/Formulario.jsx


/*import { useState } from 'react';

function Formulario({ onAgregar }) {
  const [nombre, setNombre] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const nombreLimpio = nombre.trim();
    if (nombreLimpio === '') {
      alert('Por favor ingresa un hábito válido');
      return;
    }

    onAgregar(nombreLimpio);
    setNombre(''); // Limpia el campo
  };

  return (
    <form onSubmit={handleSubmit} className="formulario">
      <input
        type="text"
        value={nombre}
        onChange={(e) => setNombre(e.target.value)}
        placeholder="Nuevo hábito"
        className="input-habito"
      />
      <button type="submit" className="btn-agregar">
        Agregar
      </button>
    </form>
  );
}

export default Formulario; */

/* import { useState } from 'react';

function Formulario({ onAgregar }) {
  const [nombre, setNombre] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const nombreLimpio = nombre.trim();

    // Validación: no vacío
    if (nombreLimpio === '') {
      alert('Por favor ingresa un hábito válido');
      return;
    }

    // Validación: longitud entre 3 y 50 caracteres
    if (nombreLimpio.length < 3 || nombreLimpio.length > 50) {
      alert('El hábito debe tener entre 3 y 50 caracteres.');
      return;
    }

    // Validación: debe contener letras
    if (!/[a-zA-ZáéíóúüñÁÉÍÓÚÜÑ]/.test(nombreLimpio)) {
      alert('El hábito debe contener al menos una letra.');
      return;
    }

    onAgregar(nombreLimpio);
    setNombre('');
  };

  return (
    <form onSubmit={handleSubmit} className="formulario">
      <input
        type="text"
        value={nombre}
        onChange={(e) => setNombre(e.target.value)}
        placeholder="Nuevo hábito"
        className="input-habito"
      />
      <button type="submit" className="btn-agregar">
        Agregar
      </button>
    </form>
  );
}

export default Formulario; */

import { useState } from 'react';

function Formulario({ onAgregar }) {
  const [nombre, setNombre] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const nombreLimpio = nombre.trim();

    if (nombreLimpio === '') {
      alert('Por favor ingresa un hábito válido.');
      return;
    }

    if (nombreLimpio.length < 3) {
      alert('El hábito debe tener al menos 3 caracteres.');
      return;
    }

    if (nombreLimpio.length > 50) {
      alert('El hábito no debe superar los 50 caracteres.');
      return;
    }

    if (!/[a-zA-ZáéíóúüñÁÉÍÓÚÜÑ]/.test(nombreLimpio)) {
      alert('El hábito debe contener al menos una letra.');
      return;
    }

    if (!/^[a-zA-ZáéíóúÁÉÍÓÚüÜñÑ0-9\s]+$/.test(nombreLimpio)) {
      alert('No se permiten caracteres especiales. Solo letras, números y espacios.');
      return;
    }

    onAgregar(nombreLimpio);
    setNombre('');
  };

  return (
    <form onSubmit={handleSubmit} className="formulario">
      <input
        type="text"
        value={nombre}
        onChange={(e) => setNombre(e.target.value)}
        placeholder="Nuevo hábito"
        className="input-habito"
      />
      <p className="ayuda-input">
        📝 Solo letras, números y espacios. Mínimo 3 caracteres.
      </p>
      <button type="submit" className="btn-agregar">
        Agregar
      </button>
    </form>
  );
}

export default Formulario; 
