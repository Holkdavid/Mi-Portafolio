const ORDINALS = [
  '', 'primer', 'segundo', 'tercer', 'cuarto', 'quinto',
  'sexto', 'séptimo', 'octavo', 'noveno', 'décimo'
];

/**
 * Convierte un número de semestre (1-10) a su forma ordinal en español.
 * Si está fuera de rango, devuelve el número tal cual como respaldo.
 */
export function semesterToOrdinal(semester: number): string {
  return ORDINALS[semester] ?? String(semester);
}
