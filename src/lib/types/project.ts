export type ProjectStatus = 'Finalizado' | 'En desarrollo' | 'Planeado';

export interface ProjectLinks {
  github?: string;
  figma?: string;
  live?: string;
}

export interface Project {
  id: number;
  /** Identificador para URL, ej: "filmly" -> /proyectos/filmly (futura página individual). */
  slug: string;
  title: string;
  shortDescription: string;
  /** Descripción larga para un futuro modal / página de detalle. */
  fullDescription?: string;
  image: string;
  /** Capturas adicionales para una futura galería. Vacío hasta que existan. */
  gallery?: string[];
  technologies: string[];
  features?: string[];
  challenges?: string[];
  learnings?: string[];
  links: ProjectLinks;
  status: ProjectStatus;
  /** Si se destaca visualmente (ej: tarjeta más grande, primero en el grid). */
  featured?: boolean;
  /** Color de acento del proyecto (hex), usado en badges y en el glow de fondo. */
  accentColor: string;
}
