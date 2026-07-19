<script lang="ts">
  import MapPin from '@lucide/svelte/icons/map-pin';
  import GraduationCap from '@lucide/svelte/icons/graduation-cap';
  import Briefcase from '@lucide/svelte/icons/briefcase';
  import Badge from './Badge.svelte';
  import SmartImage from './SmartImage.svelte';
  import { skills } from '$lib/data/skills';

  interface Props {
    imageSrc: string;
    fullName: string;
    role: string;
    degree: string;
    university: string;
    city: string;
    semester: number;
  }

  let { imageSrc, fullName, role, degree, university, city, semester }: Props = $props();

  // 🧠 Curamos un subconjunto representativo de habilidades para no saturar la tarjeta
  const cardSkillNames = ['Java', 'MySQL', 'SvelteKit', 'Git'];
  const cardSkills = skills.filter((s) => cardSkillNames.includes(s.name));
</script>

<div class="relative group w-80 sm:w-96 mx-auto animate-float animate-scale-in">
  <!-- Aura Trasera Dinámica -->
  <div class="absolute inset-0 bg-gradient-to-tr from-[var(--primary)] to-[var(--secondary)] rounded-[var(--radius-lg)] blur-2xl opacity-15 group-hover:opacity-25 transition-opacity duration-500 pointer-events-none"></div>

  <!-- Tarjeta Principal -->
  <div class="relative w-full rounded-[var(--radius-lg)] border border-[var(--border)] bg-[var(--surface)]/40 backdrop-blur-md overflow-hidden shadow-2xl transition-all duration-300 group-hover:border-[var(--text-secondary)]/30 group-hover:shadow-[var(--shadow-glow)]">

    <!-- Fotografía -->
    <div class="relative w-full h-64 sm:h-72 overflow-hidden bg-[var(--surface)] border-b border-[var(--border)] transition-all duration-700 group-hover:scale-105">
      <SmartImage
        src={imageSrc}
        alt={fullName}
        loading="eager"
        fetchpriority="high"
        class="h-full w-full group-hover:brightness-110 transition-[filter] duration-700"
      />

      <!-- Badge de disponibilidad flotante sobre la foto -->
      <div class="absolute top-3 right-3 flex items-center gap-1.5 bg-[var(--surface)]/90 backdrop-blur-md border border-[var(--border)] rounded-full px-3 py-1">
        <span class="flex h-2 w-2 rounded-full bg-emerald-500 animate-pulse"></span>
        <span class="text-[10px] font-bold tracking-wider text-emerald-400 uppercase">Disponible</span>
      </div>
    </div>

    <!-- Información -->
    <div class="p-5 flex flex-col space-y-4">

      <div>
        <h3 class="text-lg font-bold text-[var(--text)]">{fullName}</h3>
        <p class="text-sm text-[var(--secondary)] font-medium">{role}</p>
      </div>

      <div class="flex flex-col space-y-1.5 text-xs text-[var(--text-secondary)] pt-3 border-t border-[var(--border)]/60">
        <span class="flex items-center gap-2"><MapPin size={13} /> {city}</span>
        <span class="flex items-center gap-2"><GraduationCap size={13} /> {university} · {semester}° Semestre</span>
        <span class="flex items-center gap-2"><Briefcase size={13} /> Disponible para prácticas profesionales</span>
      </div>

      <div class="flex flex-wrap gap-2 pt-1">
        {#each cardSkills as skill}
          <Badge class="bg-[var(--background)] border border-[var(--border)] text-[var(--text-secondary)] px-2.5 py-1">
            {skill.name}
          </Badge>
        {/each}
      </div>

    </div>

  </div>
</div>
