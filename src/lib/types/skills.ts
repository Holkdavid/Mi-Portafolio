import type { Component } from 'svelte';

export type SkillCategory = 'frontend' | 'backend' | 'database' | 'tools';

export interface Skill {
  id: number;
  name: string;
  category: SkillCategory;
  /** Porcentaje de dominio, de 0 a 100. Se usa para animar la barra de progreso. */
  level: number;
  icon: Component;
}

/** Etiquetas legibles para agrupar las skills por categoría en la UI. */
export const categoryLabels: Record<SkillCategory, string> = {
  frontend: 'Frontend',
  backend: 'Backend',
  database: 'Base de Datos',
  tools: 'Herramientas'
};
