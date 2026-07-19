<script lang="ts">
  import { profile } from '$lib/data/profile';
  import { linkedin } from '$lib/data/socials'; 
  import Button from '../ui/Button.svelte';

  // 🧠 Importamos el icono genérico 'Link' que sí existe en Lucide 1.0+
  import { ArrowRight, Download, Link } from '@lucide/svelte';
</script>

<div class="flex flex-wrap items-center gap-4 pt-4">
  <a href="#projects" class="no-underline">
    <Button variant="primary" size="lg" class="shadow-lg shadow-blue-600/10 gap-2">
      Ver proyectos <ArrowRight size={16} />
    </Button>
  </a>

  <a href={profile.cv} download class="no-underline">
    <Button variant="secondary" size="lg" class="gap-2">
      Descargar CV <Download size={16} />
    </Button>
  </a>

  {#if linkedin}
    <a 
      href={linkedin.url} 
      target="_blank" 
      rel="noopener noreferrer" 
      class="p-3 rounded-lg border border-[var(--border)] bg-[var(--surface)] text-[var(--text-secondary)] hover:text-[var(--text)] hover:border-[var(--text-secondary)] transition-all duration-200 flex items-center justify-center"
      aria-label="LinkedIn"
    >
      <!-- 🧠 Renderizamos el componente Link con consistencia vectorial completa -->
      <Link size={20} />
    </a>
  {/if}
</div>

