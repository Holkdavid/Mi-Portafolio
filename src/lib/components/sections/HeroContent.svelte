<script lang="ts">
  import { profile } from '$lib/data/profile';
  import { roles } from '$lib/data/roles';
  import Typewriter from '../ui/Typewriter.svelte';
  import { semesterToOrdinal } from '$lib/utils/format';
</script>

<div class="flex flex-col space-y-5">

  <p class="text-lg sm:text-xl text-[var(--text-secondary)] animate-fade-in">
    Hola, soy
  </p>

  <h1 class="text-5xl md:text-7xl font-black leading-tight animate-fade-up">
    {profile.firstName}
    <span class="text-gradient">{profile.lastName}</span>
  </h1>

  <p class="uppercase tracking-[0.25em] text-sm text-[var(--secondary)] font-semibold animate-fade-up">
    {profile.headline}
  </p>

  <Typewriter words={roles} />

  <p class="text-base sm:text-lg text-[var(--text-secondary)] leading-relaxed max-w-xl animate-fade-up">
    Actualmente curso mi
    <span class="font-semibold text-[var(--text)]">{semesterToOrdinal(profile.semester)}{profile.isLastSemester ? ' y último' : ''} semestre</span>
    de {profile.degree} en la
    <span class="font-semibold text-[var(--text)]">{profile.university}</span>,
    donde he desarrollado proyectos utilizando Java, SvelteKit, HTML, CSS, JavaScript y bases de datos MySQL.
  </p>

</div>
