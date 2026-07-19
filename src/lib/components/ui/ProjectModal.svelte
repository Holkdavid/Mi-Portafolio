<script lang="ts">
  import { fade, fly } from 'svelte/transition';
  import type { Project } from '$lib/types/project';
  import Badge from './Badge.svelte';
  import Gallery from './Gallery.svelte';
  import GithubIcon from '$lib/components/icons/GithubIcon.svelte';
  import DesignIcon from '$lib/components/icons/DesignIcon.svelte';
  import ExternalLink from '@lucide/svelte/icons/external-link';
  import X from '@lucide/svelte/icons/x';
  import CircleCheck from '@lucide/svelte/icons/circle-check';

  interface Props {
    project: Project | null;
    onClose: () => void;
  }

  let { project, onClose }: Props = $props();

  let dialogEl: HTMLDivElement | undefined = $state();

  // Mueve el foco al diálogo cuando se abre, para que usuarios de teclado
  // y lectores de pantalla entren directamente al contenido del modal.
  $effect(() => {
    if (project && dialogEl) dialogEl.focus();
  });

  // Bloquea el scroll del body mientras el modal está abierto.
  $effect(() => {
    if (typeof document === 'undefined') return;
    document.body.style.overflow = project ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  });

  function handleKeydown(event: KeyboardEvent) {
    if (event.key === 'Escape') onClose();
  }
</script>

<svelte:window onkeydown={handleKeydown} />

{#if project}
  <div
    class="fixed inset-0 z-50 flex items-start justify-center overflow-y-auto bg-black/70
           p-4 backdrop-blur-sm sm:items-center sm:p-6"
    transition:fade={{ duration: 200 }}
  >
    <!-- Backdrop: un <button> real (no un <div> con onclick) para que cerrar
         al hacer clic afuera también funcione con teclado/lectores de pantalla
         de forma nativa, sin handlers adicionales. -->
    <button
      type="button"
      class="absolute inset-0 h-full w-full cursor-default bg-transparent"
      aria-label="Cerrar"
      onclick={onClose}
    ></button>

    <div
      bind:this={dialogEl}
      role="dialog"
      aria-modal="true"
      aria-label={project.title}
      tabindex="-1"
      class="relative my-8 w-full max-w-3xl overflow-hidden rounded-[var(--radius-lg)]
             border border-[var(--border)] bg-[var(--surface)] shadow-2xl sm:my-0"
      transition:fly={{ y: 24, duration: 250 }}
    >
      <!-- Cerrar -->
      <button
        type="button"
        onclick={onClose}
        aria-label="Cerrar"
        class="absolute right-4 top-4 z-10 flex h-9 w-9 items-center justify-center rounded-full
               bg-[var(--background)]/80 text-[var(--text)] backdrop-blur-sm transition-colors
               hover:bg-[var(--background)]"
      >
        <X size={18} />
      </button>

      <div class="max-h-[90vh] overflow-y-auto p-5 sm:p-8">
        <!-- Encabezado -->
        <div class="pr-10">
          <div class="flex flex-wrap items-center gap-2">
            <h2 class="text-2xl font-bold text-[var(--text)]">{project.title}</h2>
            <span
              class="rounded-full border border-[var(--border)] px-2.5 py-0.5 text-xs font-medium text-[var(--text-secondary)]"
            >
              {project.status}
            </span>
          </div>
          <p class="mt-1 text-[var(--text-secondary)]">{project.shortDescription}</p>
        </div>

        <!-- Galería -->
        {#if project.gallery && project.gallery.length > 0}
          <div class="mt-6">
            <Gallery images={project.gallery} alt={project.title} />
          </div>
        {/if}

        <!-- Descripción completa -->
        {#if project.fullDescription}
          <div class="mt-6">
            <h3 class="mb-2 text-sm font-bold uppercase tracking-widest text-[var(--secondary)]">
              Sobre el proyecto
            </h3>
            <p class="leading-relaxed text-[var(--text)]">{project.fullDescription}</p>
          </div>
        {/if}

        <!-- Tecnologías -->
        <div class="mt-6">
          <h3 class="mb-2 text-sm font-bold uppercase tracking-widest text-[var(--secondary)]">
            Tecnologías
          </h3>
          <div class="flex flex-wrap gap-2">
            {#each project.technologies as tech (tech)}
              <Badge>{tech}</Badge>
            {/each}
          </div>
        </div>

        <!-- Características -->
        {#if project.features && project.features.length > 0}
          <div class="mt-6">
            <h3 class="mb-2 text-sm font-bold uppercase tracking-widest text-[var(--secondary)]">
              Características
            </h3>
            <ul class="grid gap-1.5 sm:grid-cols-2">
              {#each project.features as feature (feature)}
                <li class="flex items-center gap-2 text-sm text-[var(--text)]">
                  <CircleCheck size={15} class="shrink-0 text-emerald-500" />
                  {feature}
                </li>
              {/each}
            </ul>
          </div>
        {/if}

        <!-- Retos aprendidos (solo si hay contenido real cargado) -->
        {#if project.challenges && project.challenges.length > 0}
          <div class="mt-6">
            <h3 class="mb-2 text-sm font-bold uppercase tracking-widest text-[var(--secondary)]">
              Retos
            </h3>
            <ul class="list-disc space-y-1 pl-5 text-sm text-[var(--text)]">
              {#each project.challenges as item (item)}
                <li>{item}</li>
              {/each}
            </ul>
          </div>
        {/if}

        {#if project.learnings && project.learnings.length > 0}
          <div class="mt-6">
            <h3 class="mb-2 text-sm font-bold uppercase tracking-widest text-[var(--secondary)]">
              Aprendizajes
            </h3>
            <ul class="list-disc space-y-1 pl-5 text-sm text-[var(--text)]">
              {#each project.learnings as item (item)}
                <li>{item}</li>
              {/each}
            </ul>
          </div>
        {/if}

        <!-- Recursos -->
        <div class="mt-8 flex flex-wrap gap-3 border-t border-[var(--border)] pt-6">
          {#if project.links.github}
            <a
              href={project.links.github}
              target="_blank"
              rel="noopener noreferrer"
              class="inline-flex items-center gap-2 rounded-[var(--radius-sm)] border border-[var(--border)]
                     px-4 py-2 text-sm font-medium text-[var(--text)] transition-colors hover:border-[var(--secondary)] hover:text-[var(--secondary)]"
            >
              <GithubIcon size={16} />
              Ver código
            </a>
          {/if}
          {#if project.links.figma}
            <a
              href={project.links.figma}
              target="_blank"
              rel="noopener noreferrer"
              class="inline-flex items-center gap-2 rounded-[var(--radius-sm)] border border-[var(--border)]
                     px-4 py-2 text-sm font-medium text-[var(--text)] transition-colors hover:border-[var(--secondary)] hover:text-[var(--secondary)]"
            >
              <DesignIcon size={16} />
              Ver diseño
            </a>
          {/if}
          {#if project.links.live}
            <a
              href={project.links.live}
              target="_blank"
              rel="noopener noreferrer"
              class="inline-flex items-center gap-2 rounded-[var(--radius-sm)] border border-[var(--border)]
                     px-4 py-2 text-sm font-medium text-[var(--text)] transition-colors hover:border-[var(--secondary)] hover:text-[var(--secondary)]"
            >
              <ExternalLink size={16} />
              Ver demo
            </a>
          {/if}
        </div>
      </div>
    </div>
  </div>
{/if}
