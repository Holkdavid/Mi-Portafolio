<script lang="ts">
  import type { Project } from '$lib/types/project';
  import Badge from './Badge.svelte';
  import SmartImage from './SmartImage.svelte';
  import GithubIcon from '$lib/components/icons/GithubIcon.svelte';
  import DesignIcon from '$lib/components/icons/DesignIcon.svelte';
  import ExternalLink from '@lucide/svelte/icons/external-link';
  import CircleCheck from '@lucide/svelte/icons/circle-check';
  import CircleX from '@lucide/svelte/icons/circle-x';

  interface Props {
    project: Project;
    onOpen?: (project: Project) => void;
  }

  let { project, onOpen }: Props = $props();

  const statusConfig: Record<Project['status'], { dot: string; text: string }> = {
    Finalizado: { dot: 'bg-emerald-500', text: 'text-emerald-400' },
    'En desarrollo': { dot: 'bg-amber-500', text: 'text-amber-400' },
    Planeado: { dot: 'bg-slate-400', text: 'text-slate-300' }
  };

  const resources = $derived([
    { label: 'GitHub', available: Boolean(project.links.github) },
    { label: 'Figma', available: Boolean(project.links.figma) },
    { label: 'Demo', available: Boolean(project.links.live) }
  ]);

  const hasAnyButton = $derived(Boolean(project.links.github || project.links.figma || project.links.live));
</script>

<article
  class="group relative flex flex-col overflow-hidden rounded-[var(--radius-lg)] border
         border-[var(--border)] bg-[var(--surface)] transition-all duration-300
         hover:-translate-y-1 hover:border-[color:var(--accent)]/50"
  style:--accent={project.accentColor}
>
  <!-- Glow de acento: propio de cada proyecto, aparece al pasar el mouse -->
  <div
    class="pointer-events-none absolute -inset-1 -z-10 rounded-[var(--radius-lg)] opacity-0
           blur-2xl transition-opacity duration-500 group-hover:opacity-30"
    style:background={project.accentColor}
  ></div>

  <!-- Imagen (clickeable: abre el modal con la galería completa) -->
  <button
    type="button"
    onclick={() => onOpen?.(project)}
    aria-label="Ver detalles de {project.title}"
    class="relative block aspect-video w-full overflow-hidden bg-[var(--background)]"
  >
    <SmartImage
      src={project.image}
      alt="Captura de {project.title}"
      class="h-full w-full transition-transform duration-500 group-hover:scale-105"
    />

    <!-- Estado del proyecto -->
    <div
      class="absolute right-3 top-3 flex items-center gap-1.5 rounded-full border
             border-[var(--border)] bg-[var(--background)]/80 px-2.5 py-1 text-xs
             font-medium backdrop-blur-sm {statusConfig[project.status].text}"
    >
      <span class="h-1.5 w-1.5 rounded-full {statusConfig[project.status].dot}"></span>
      {project.status}
    </div>

    <!-- Overlay "Ver más" al pasar el mouse -->
    <div
      class="absolute inset-0 flex items-center justify-center bg-black/0 opacity-0
             transition-all duration-300 group-hover:bg-black/40 group-hover:opacity-100"
    >
      <span class="rounded-full bg-[var(--background)]/90 px-4 py-2 text-sm font-medium text-[var(--text)]">
        Ver más
      </span>
    </div>
  </button>

  <!-- Contenido -->
  <div class="flex flex-1 flex-col gap-4 p-5">
    <div>
      <h3>
        <button
          type="button"
          onclick={() => onOpen?.(project)}
          class="text-left text-lg font-bold text-[var(--text)] transition-colors hover:text-[var(--secondary)]"
        >
          {project.title}
        </button>
      </h3>
      <p class="mt-1 text-sm text-[var(--text-secondary)]">{project.shortDescription}</p>
    </div>

    <!-- Tecnologías -->
    <div class="flex flex-wrap gap-2">
      {#each project.technologies as tech (tech)}
        <Badge>{tech}</Badge>
      {/each}
    </div>

    <div class="h-px w-full bg-[var(--border)]"></div>

    <!-- Recursos disponibles -->
    <div class="flex flex-wrap gap-x-4 gap-y-1.5 text-xs text-[var(--text-secondary)]">
      {#each resources as resource (resource.label)}
        <span class="flex items-center gap-1.5">
          {#if resource.available}
            <CircleCheck size={14} class="text-emerald-500" />
          {:else}
            <CircleX size={14} class="text-[var(--text-secondary)]/40" />
          {/if}
          {resource.label}
        </span>
      {/each}
    </div>

    <!-- Botones -->
    {#if hasAnyButton}
      <div class="mt-auto flex flex-wrap gap-2 pt-1">
        {#if project.links.github}
          <a
            href={project.links.github}
            target="_blank"
            rel="noopener noreferrer"
            class="inline-flex items-center gap-1.5 rounded-[var(--radius-sm)] border
                   border-[var(--border)] px-3 py-1.5 text-xs font-medium text-[var(--text)]
                   transition-colors hover:border-[color:var(--accent)] hover:text-[color:var(--accent)]"
          >
            <GithubIcon size={14} />
            Ver código
          </a>
        {/if}

        {#if project.links.figma}
          <a
            href={project.links.figma}
            target="_blank"
            rel="noopener noreferrer"
            class="inline-flex items-center gap-1.5 rounded-[var(--radius-sm)] border
                   border-[var(--border)] px-3 py-1.5 text-xs font-medium text-[var(--text)]
                   transition-colors hover:border-[color:var(--accent)] hover:text-[color:var(--accent)]"
          >
            <DesignIcon size={14} />
            Ver diseño
          </a>
        {/if}

        {#if project.links.live}
          <a
            href={project.links.live}
            target="_blank"
            rel="noopener noreferrer"
            class="inline-flex items-center gap-1.5 rounded-[var(--radius-sm)] border
                   border-[var(--border)] px-3 py-1.5 text-xs font-medium text-[var(--text)]
                   transition-colors hover:border-[color:var(--accent)] hover:text-[color:var(--accent)]"
          >
            <ExternalLink size={14} />
            Ver demo
          </a>
        {/if}
      </div>
    {:else}
      <p class="mt-auto pt-1 text-xs italic text-[var(--text-secondary)]/70">
        Enlaces disponibles próximamente.
      </p>
    {/if}
  </div>
</article>
