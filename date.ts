class FechaValidator {
  // Método para validar si la fecha es válida
  static esFechaValida(dia: number, mes: number, año: number): boolean {
    const fecha = new Date(año, mes - 1, dia);
    return (
      fecha.getFullYear() === año &&
      fecha.getMonth() === mes - 1 &&
      fecha.getDate() === dia
    );
  }

  // Método para verificar si la fecha es un fin de semana
  static esFinDeSemana(dia: number, mes: number, año: number): string {
    if (!this.esFechaValida(dia, mes, año)) {
      return "Fecha inválida";
    }

    const fecha = new Date(año, mes - 1, dia);
    const diaSemana = fecha.getDay();

    return diaSemana === 0 || diaSemana === 6 ? "Fin de semana" : "Día normal";
  }
}

// Ejemplo de uso
console.log(FechaValidator.esFechaValida(32, 1, 2024)); // false (Fecha inválida)
console.log(FechaValidator.esFechaValida(31, 1, 2024)); // true (Fecha válida)

console.log(FechaValidator.esFinDeSemana(32, 1, 2024)); // "Fecha inválida"
console.log(FechaValidator.esFinDeSemana(31, 1, 2024)); // "Día normal"
console.log(FechaValidator.esFinDeSemana(27, 1, 2024)); // "Fin de semana" (sábado)
