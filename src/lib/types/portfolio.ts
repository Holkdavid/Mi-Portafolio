// src/lib/types/portfolio.ts

// El tipo Project vive en '$lib/types/project' (no lo dupliques aquí).

// El tipo Skill vive en '$lib/types/skills' (no lo dupliques aquí).

export interface Profile {
  firstName: string;
  lastName: string;
  fullName: string;
  headline: string;
  description: string;
  university: string;
  degree: string;
  semester: number; // 🧠 Declarado UNA sola vez como número nativo
  startYear: number;
  isLastSemester: boolean;
  city: string;
  avatar: string;
  cv: string;
}

export interface NavItem {
  id: string;
  label: string;
  href: string;
}

// El tipo Social vive en '$lib/types/social' (no lo dupliques aquí).


