<script lang="ts">
  import Container from './Container.svelte';
  import { profile } from '$lib/data/profile';
  import { roles } from '$lib/data/roles';

  const currentYear = new Date().getFullYear();
  const builtWith = ['SvelteKit', 'TypeScript', 'Tailwind CSS'];
</script>

<footer class="border-t border-[var(--border)] py-10">
  <Container>
    <div class="flex flex-col items-center gap-3 text-center">

      <p class="font-bold text-[var(--text)]">{profile.fullName}</p>

      <p class="text-sm text-[var(--text-secondary)]">
        {roles.join(' • ')}
      </p>

      <p class="text-xs text-[var(--text-secondary)]/70">
        © {currentYear} Todos los derechos reservados.
      </p>

      <div class="flex flex-col items-center gap-1 pt-2 text-xs text-[var(--text-secondary)]">
        <span>Diseñado y desarrollado con</span>
        <div class="flex items-center gap-3">
          {#each builtWith as tech}
            <span class="flex items-center gap-1">❤️ {tech}</span>
          {/each}
        </div>
      </div>

      <p class="pt-4 text-[11px] text-[var(--text-secondary)]/50">
        Siempre aprendiendo. Siempre construyendo.
      </p>

    </div>
  </Container>
</footer>
