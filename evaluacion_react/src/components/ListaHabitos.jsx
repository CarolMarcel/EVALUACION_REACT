// Paso 3: Componente ListaHabitos.jsx
// Ubicado en src/components/ListaHabitos.jsx
import Habito from './Habito';

function ListaHabitos({ habitos, onToggle, onEliminar }) {
  return (
    <ul className="lista-habitos">
      {habitos.map((h) => (
        <Habito key={h.id} habito={h} onToggle={onToggle} onEliminar={onEliminar}/>
      ))}
    </ul>
  );
}

export default ListaHabitos;