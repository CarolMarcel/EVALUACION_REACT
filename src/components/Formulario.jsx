// Paso 2: Componente Formulario.jsx
// Ubicado en src/components/Formulario.jsx
/* import { useState } from 'react';

function Formulario({ onAgregar }) {
  const [texto, setTexto] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (texto.trim() !== '') {
      onAgregar(texto);
      setTexto('');
    }
  };

  return (
    <form className="formulario" onSubmit={handleSubmit}>
      <input
        type="text"
        value={texto}
        onChange={(e) => setTexto(e.target.value)}
        placeholder="Nuevo hábito"
      />
      <button type="submit">Agregar</button>
    </form>
  );
}

export default Formulario;  */ 

import { useState } from 'react';

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

export default Formulario;