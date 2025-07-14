// Paso 4: Componente Habito.jsx
// Ubicado en src/components/Habito.jsx

/* Este componente representa un hábito individual en la lista.
   Recibe las propiedades:
    - habito: un objeto con los detalles del hábito (id, nombre, hecho, creado, animacion)
    - onToggle: función para marcar/desmarcar el hábito como hecho/no hecho
    - onEliminar: función para eliminar el hábito de la lista */ 

function Habito({ habito, onToggle, onEliminar }) {
  return (
    <li className={`habito-item ${habito.hecho ? 'completado' : ''} ${habito.animacion || ''}`}>   {/*Muestra el nombre del hábito con un checkbox */}
      {/* Checkbox para marcar el hábito como hecho/no hecho */}
        <label>
          <input type="checkbox" checked={habito.hecho} onChange={() => onToggle(habito.id)}/>  {/* Al cambiar, se llama a onToggle con el id del hábito */}
          {habito.nombre}  {/* Nombre del hábito */}
          <span className="fecha"> 🗓️ {new Date(habito.creado).toLocaleDateString('es-CL')}</span>  {/* Fecha en que fue creado el hábito, con ícono de calendario */}
        </label>
      {/* Botón para eliminar el hábito */}
      <button className="eliminar-btn" onClick={() => onEliminar(habito.id)} title="Eliminar hábito">  {/* Llama a la función de eliminar pasando el id */}
        ❌
      </button>
    </li>
  );
}

// Exportamos el componente para poder usarlo en otros archivos
export default Habito;

