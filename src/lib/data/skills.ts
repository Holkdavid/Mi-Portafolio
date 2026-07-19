import type { Skill } from '$lib/types/skills';

import Code2 from '@lucide/svelte/icons/code-2';
import Palette from '@lucide/svelte/icons/palette';
import Braces from '@lucide/svelte/icons/braces';
import Flame from '@lucide/svelte/icons/flame';
import Coffee from '@lucide/svelte/icons/coffee';
import Leaf from '@lucide/svelte/icons/leaf';
import Database from '@lucide/svelte/icons/database';
import GitBranch from '@lucide/svelte/icons/git-branch';
import Code from '@lucide/svelte/icons/code';
import Brain from '@lucide/svelte/icons/brain';
import GithubIcon from '$lib/components/icons/GithubIcon.svelte';

export const skills: Skill[] = [
  // Frontend
  { id: 3, name: 'HTML5', category: 'frontend', level: 90, icon: Code2 },
  { id: 4, name: 'CSS3', category: 'frontend', level: 85, icon: Palette },
  { id: 5, name: 'JavaScript', category: 'frontend', level: 75, icon: Braces },
  { id: 6, name: 'SvelteKit', category: 'frontend', level: 70, icon: Flame },

  // Backend
  { id: 1, name: 'Java', category: 'backend', level: 90, icon: Coffee },
  { id: 2, name: 'Spring Boot', category: 'backend', level: 70, icon: Leaf },

  // Base de datos
  { id: 7, name: 'MySQL', category: 'database', level: 85, icon: Database },

  // Herramientas (sin porcentaje: son de uso, no de "dominio")
  { id: 8, name: 'Git', category: 'tools', level: 75, icon: GitBranch },
  { id: 9, name: 'GitHub', category: 'tools', level: 80, icon: GithubIcon },
  { id: 10, name: 'VS Code', category: 'tools', level: 90, icon: Code },
  { id: 11, name: 'IntelliJ IDEA', category: 'tools', level: 80, icon: Brain }
];
