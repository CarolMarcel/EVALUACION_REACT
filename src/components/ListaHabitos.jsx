// Paso 3: Componente ListaHabitos.jsx
// Ubicado en src/components/ListaHabitos.jsx

// Importamos el componente Habito, que representa cada ítem individual en la lista
import Habito from './Habito';

/* Este componente muestra una lista de hábitos.
   Recibe las siguientes propiedades:
    - habitos: un array de objetos, cada uno representando un hábito
    - onToggle: función para marcar/desmarcar un hábito como hecho/no hecho
    - onEliminar: función para eliminar un hábito de la lista */
function ListaHabitos({ habitos, onToggle, onEliminar }) {
  return ( 
    // Contenedor de la lista de hábitos con una clase para aplicar estilos desde el CSS
    <ul className="lista-habitos">  
      {/* Recorremos el arreglo de hábitos y por cada uno mostramos el componente Habito */}
      {habitos.map((h) => (
        <Habito 
        key={h.id}  // Clave única para identificar el componente (requerido por React)
        habito={h}  // Pasamos el objeto del hábito al componente Habito
        onToggle={onToggle}  // Función que marca como hecho o no
        onEliminar={onEliminar}/>  // Función que elimina el hábito
      ))}
    </ul>
  );
}

// Exportamos el componente para poder usarlo en App.jsx
export default ListaHabitos;