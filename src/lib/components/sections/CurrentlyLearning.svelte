<script lang="ts">
  import Container from '$lib/components/layout/Container.svelte';
  import SectionTitle from '$lib/components/ui/SectionTitle.svelte';
  import Card from '$lib/components/ui/Card.svelte';
  import Reveal from '$lib/components/ui/Reveal.svelte';
  import { currentlyLearning } from '$lib/data/learning';
  import CircleCheck from '@lucide/svelte/icons/circle-check';
</script>

<section id="learning" class="py-20">
  <Container>

    <SectionTitle
      title="Actualmente aprendiendo"
      subtitle="La tecnología no se detiene, y yo tampoco. Esto es lo que estoy explorando ahora mismo."
      align="left"
    />

    <Reveal>
    <Card padding="lg" hover={false}>
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-6 gap-y-4">
        {#each currentlyLearning as item}
          <div class="flex items-center gap-2.5">
            <CircleCheck size={18} class="shrink-0 text-emerald-500" />
            <span class="text-sm font-medium text-[var(--text)]">{item.name}</span>
          </div>
        {/each}
      </div>
    </Card>
    </Reveal>

  </Container>
</section>
