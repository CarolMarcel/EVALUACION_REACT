import React from 'react';


function obtenerDiasDelMes(fecha) {
  const inicio = new Date(fecha.getFullYear(), fecha.getMonth(), 1); 
  const fin = new Date(fecha.getFullYear(), fecha.getMonth() + 1, 0);
  const dias = [];
  for (let i = 1; i <= fin.getDate(); i++) {
    const dia = new Date(inicio);
    dias.setDate(inicio.getDate() + i);
    dias.push(dia);
  }
  return dias;
}

const CalendarioMensual = ({ habitosPorDia }) => {
  const hoy = new Date();
  const diasDelMes = obtenerDiasDelMes(hoy);

  return (
    <div className="calendario">
      <h2>📅 Calendario de Hábitos - {hoy.toLocaleString('default', { month: 'long' })}</h2>
      <div className="dias-semana">
        {['Dom', 'Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb'].map(d => (
          <div key={d} className="dia-nombre">{d}</div>
        ))}
      </div>

      <div className="cuadricula">
        {(() => {
          const primerDia = new Date(hoy.getFullYear(), hoy.getMonth(), 1).getDay();
          const celdasVacias = Array.from({ length: primerDia }, (_, i) => <div key={`vacio-${i}`} className="celda vacia"></div>);

          return [
            ...celdasVacias,
            ...diasDelMes.map(dia => {
              const clave = dia.toLocaleDateString();
              const habitos = habitosPorDia[clave] || [];
              return (
                <div key={clave} className="celda">
                  <strong>{dia.getDate()}</strong>
                  {habitos.length > 0 ? (
                    <ul>
                      {habitos.map((h, i) => (
                        <li key={i}>✅ {h.nombre}</li>
                      ))}
                    </ul>
                  ) : (
                    <p className="sin-habitos">–</p>
                  )}
                </div>
              );
            })
          ];
        })()}
      </div>
    </div>
  );
};

export default CalendarioMensual;