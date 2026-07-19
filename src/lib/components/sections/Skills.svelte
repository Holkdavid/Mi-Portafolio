<script lang="ts">
  import Container from '$lib/components/layout/Container.svelte';
  import SectionBackground from '$lib/components/effects/SectionBackground.svelte';
  import SectionTitle from '$lib/components/ui/SectionTitle.svelte';
  import SkillCard from '$lib/components/ui/SkillCard.svelte';
  import Reveal from '$lib/components/ui/Reveal.svelte';
  import { skills } from '$lib/data/skills';
  import { categoryLabels, type SkillCategory } from '$lib/types/skills';

  // Orden de aparición de las categorías en la sección.
  const categoryOrder: SkillCategory[] = ['frontend', 'backend', 'database', 'tools'];

  const groupedSkills = categoryOrder
    .map((category) => ({
      category,
      label: categoryLabels[category],
      items: skills.filter((skill) => skill.category === category)
    }))
    .filter((group) => group.items.length > 0);
</script>

<section id="skills" class="py-28">
  <SectionBackground variant="grid">
  <Container>
    <SectionTitle
      title="Habilidades Técnicas"
      subtitle="Tecnologías y herramientas que utilizo para construir software de calidad."
      align="left"
    />

    <div class="space-y-14">
      {#each groupedSkills as group (group.category)}
        <div>
          <!-- Encabezado de categoría -->
          <div class="mb-6 flex items-center gap-4">
            <h3 class="whitespace-nowrap text-sm font-bold uppercase tracking-widest text-[var(--secondary)]">
              {group.label}
            </h3>
            <span class="h-px flex-1 bg-[var(--border)]"></span>
          </div>

          {#if group.category === 'tools'}
            <!-- Herramientas: chips simples, sin barra de progreso.
                 Un IDE o Git no se "dominan" en porcentaje; solo se usan. -->
            <Reveal class="flex flex-wrap gap-3">
              {#each group.items as tool (tool.id)}
                {@const Icon = tool.icon}
                <div
                  class="flex items-center gap-2 rounded-[var(--radius-sm)] border
                         border-[var(--border)] bg-[var(--surface)] px-4 py-2.5 text-sm
                         font-medium text-[var(--text)] transition-all duration-300
                         hover:-translate-y-0.5 hover:border-[var(--secondary)]/50
                         hover:shadow-[var(--shadow-glow)]"
                >
                  <span class="text-[var(--secondary)]">
                    <Icon size={16} />
                  </span>
                  {tool.name}
                </div>
              {/each}
            </Reveal>
          {:else}
            <!-- Skills con nivel de dominio: grid de tarjetas animadas -->
            <div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {#each group.items as skill, i (skill.id)}
                <SkillCard {skill} delay={i * 100} />
              {/each}
            </div>
          {/if}
        </div>
      {/each}
    </div>
  </Container>
  </SectionBackground>
</section>
