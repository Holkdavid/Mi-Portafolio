<script lang="ts">
  import Container from '$lib/components/layout/Container.svelte';
  import Counter from '$lib/components/ui/Counter.svelte';
  import { projects } from '$lib/data/projects';
  import { certificates } from '$lib/data/certificates';
  import { profile } from '$lib/data/profile';

  // 🧠 Nada de números quemados: todo se calcula a partir de /lib/data.
  const yearsFormation = new Date().getFullYear() - profile.startYear;

  const stats = [
    { value: projects.length, label: projects.length === 1 ? 'Proyecto' : 'Proyectos' },
    { value: certificates.length, label: certificates.length === 1 ? 'Certificación' : 'Certificaciones' },
    { value: yearsFormation, label: yearsFormation === 1 ? 'Año de formación' : 'Años de formación' }
  ];
</script>

<section class="py-14 border-y border-[var(--border)]">
  <Container>
    <div class="grid grid-cols-3 gap-6">
      {#each stats as stat}
        <Counter value={stat.value} label={stat.label} />
      {/each}
    </div>
  </Container>
</section>
