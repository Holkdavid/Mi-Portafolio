<script lang="ts">
  import Container from '$lib/components/layout/Container.svelte';
  import SectionBackground from '$lib/components/effects/SectionBackground.svelte';
  import SectionTitle from '$lib/components/ui/SectionTitle.svelte';
  import ProjectCard from '$lib/components/ui/ProjectCard.svelte';
  import ProjectModal from '$lib/components/ui/ProjectModal.svelte';
  import { projects } from '$lib/data/projects';
  import type { Project } from '$lib/types/project';

  let activeProject = $state<Project | null>(null);

  // Próximos proyectos: demuestra que el portafolio sigue en construcción.
  // Es solo texto, no requiere imágenes ni datos del modelo Project.
  const upcoming = [
    { title: 'API REST con Spring Boot', description: 'Backend para dar soporte a futuros proyectos.' },
    { title: 'Este portafolio con SvelteKit', description: 'Sí, este mismo sitio — sigue mejorando.' }
  ];
</script>

<section id="projects" class="py-28">
  <SectionBackground variant="plain" glow="secondary" glowPosition="top-1/3 right-[-10%]">
    <Container>
      <SectionTitle
        title="Proyectos"
        subtitle="Aplicaciones reales que construí para resolver problemas concretos."
        align="left"
      />

      <div class="grid gap-6 md:grid-cols-2">
        {#each projects as project (project.id)}
          <ProjectCard {project} onOpen={(p) => (activeProject = p)} />
        {/each}
      </div>

      <!-- Próximos proyectos -->
      <div class="mt-16">
        <div class="mb-6 flex items-center gap-4">
          <h3 class="whitespace-nowrap text-sm font-bold uppercase tracking-widest text-[var(--secondary)]">
            Próximos proyectos
          </h3>
          <span class="h-px flex-1 bg-[var(--border)]"></span>
        </div>

        <div class="grid gap-4 sm:grid-cols-2">
          {#each upcoming as item (item.title)}
            <div
              class="flex items-start gap-3 rounded-[var(--radius-md)] border border-dashed
                     border-[var(--border)] bg-[var(--surface)]/40 p-4"
            >
              <span class="mt-0.5 text-lg leading-none">🚧</span>
              <div>
                <p class="text-sm font-semibold text-[var(--text)]">{item.title}</p>
                <p class="mt-0.5 text-xs text-[var(--text-secondary)]">{item.description}</p>
              </div>
            </div>
          {/each}
        </div>
      </div>
    </Container>
  </SectionBackground>

  <ProjectModal project={activeProject} onClose={() => (activeProject = null)} />
</section>
