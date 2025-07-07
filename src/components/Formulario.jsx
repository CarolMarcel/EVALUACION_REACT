// Paso 2: Componente Formulario.jsx
// Ubicado en src/components/Formulario.jsx


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