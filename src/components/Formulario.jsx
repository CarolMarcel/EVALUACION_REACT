// Paso 2: Componente Formulario.jsx
// Ubicado en src/components/Formulario.jsx

// Importa el hook useState para manejar el estado del formulario
import { useState } from 'react';

// Define el componente funcional Formulario, que recibe una función llamada onAgregar como prop
function Formulario({ onAgregar }) {   
  // Estado local para almacenar el texto que el usuario escribe en el input
  const [nombre, setNombre] = useState('');

  // Función que se ejecuta cuando se envía el formulario
  const handleSubmit = (e) => {
    e.preventDefault();  // Evita que la página se recargue al enviar el formulario

    const nombreLimpio = nombre.trim(); // Elimina espacios al inicio y al final del texto

    // Validaciones
    if (nombreLimpio === '') {
      alert('Por favor ingresa un hábito válido.');
      return;  // Si el input está vacío, muestra alerta y detiene el proceso
    }
    
    if (nombreLimpio.length < 3) {
      alert('El hábito debe tener al menos 3 caracteres.');
      return;  // Si el hábito es muy corto, no lo permite
    }

    if (nombreLimpio.length > 50) {
      alert('El hábito no debe superar los 50 caracteres.');
      return;  // Si el hábito es demasiado largo, lo bloquea
    }

    if (!/[a-zA-ZáéíóúüñÁÉÍÓÚÜÑ]/.test(nombreLimpio)) {
      alert('El hábito debe contener al menos una letra.');
      return;  // Obliga a tener al menos una letra (evita solo números o símbolos)
    }

    if (!/^[a-zA-ZáéíóúÁÉÍÓÚüÜñÑ0-9\s]+$/.test(nombreLimpio)) {
      alert('No se permiten caracteres especiales. Solo letras, números y espacios.');
      return;  // Asegura que no se ingresen símbolos como !@#$ etc
    }
    
    // Si pasa todas las validaciones, ejecuta la función onAgregar para enviar el hábito al componente padre
    onAgregar(nombreLimpio);
    // Limpia el campo input para que quede listo para otro hábito
    setNombre('');
  };

  // El formulario que el usuario verá en pantalla
  return (
    <form onSubmit={handleSubmit} className="formulario">
      <input
        type="text"
        value={nombre}  // Valor vinculado al estado local
        onChange={(e) => setNombre(e.target.value)}  // Actualiza el estado cuando se escribe
        placeholder="Nuevo hábito"  // Texto de ayuda
        className="input-habito"  // Clase CSS para estilos 
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

// Exporta el componente para poder usarlo en otros archivos
export default Formulario; 
