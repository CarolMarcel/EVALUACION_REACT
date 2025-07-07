// Paso 4: Componente Habito.jsx
// Ubicado en src/components/Habito.jsx



function Habito({ habito, onToggle, onEliminar }) {
  return (
    <li className={`habito-item ${habito.hecho ? 'completado' : ''} ${habito.animacion || ''}`}>
        <label>
          <input type="checkbox" checked={habito.hecho} onChange={() => onToggle(habito.id)}/>
          {habito.nombre}
          <span className="fecha"> 🗓️ {habito.creado}</span>
        </label>
      <button className="eliminar-btn" onClick={() => onEliminar(habito.id)} title="Eliminar hábito">
        ❌
      </button>
    </li>
  );
}
export default Habito;