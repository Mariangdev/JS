
var sumaTrabajos = 0;

function CalcularPromedio(examenFinal, examenParcial, trabajos)
{
  calificacionExamen = examenFinal * 0.45;
  calificacionParcial = examenParcial * 0.35;
  trabajos.forEach(function(calificacion) {
  	sumaTrabajos += calificacion;
  });
  calificacionTrabajos = (sumaTrabajos / trabajos.length) * 0.2;
  promedio = calificacionExamen + calificacionParcial + calificacionTrabajos;
  
  return ((promedio < 7)?'Reprobado':'Aprobado') + ' - Promedio: ' + promedio;
}

alert(CalcularPromedio(10, 6, [10, 7, 8]));
//