function esFechaValida(dia, mes, año) {
    // Crear una fecha con el año, mes y día proporcionados
    const fecha = new Date(año, mes - 1, dia);
  
    // Verificar si el día, mes y año coinciden con los valores proporcionados
    return fecha.getFullYear() === año && fecha.getMonth() === (mes - 1) && fecha.getDate() === dia;
  }
  
  // Ejemplo de uso
  console.log(esFechaValida(32, 1, 2024)); // false (32 de enero no existe)
  console.log(esFechaValida(31, 1, 2024)); // true (31 de enero sí existe)

  
  function esFechaValida(dia, mes, año) {
    const fecha = new Date(año, mes - 1, dia);
    return fecha.getFullYear() === año && fecha.getMonth() === (mes - 1) && fecha.getDate() === dia;
  }
  
  function esFinDeSemana(dia, mes, año) {
    if (!esFechaValida(dia, mes, año)) {
      return "Fecha inválida";
    }
    
    const fecha = new Date(año, mes - 1, dia);
    const diaSemana = fecha.getDay();
    
    // Si el día de la semana es sábado (6) o domingo (0), es fin de semana
    return (diaSemana === 0 || diaSemana === 6) ? "Fin de semana" : "Día normal";
  }
  
  // Ejemplo de uso
  console.log(esFinDeSemana(32, 1, 2024)); // "Fecha inválida"
  console.log(esFinDeSemana(31, 1, 2024)); // "Día normal"
  console.log(esFinDeSemana(27, 1, 2024)); // "Fin de semana" (sábado)
  