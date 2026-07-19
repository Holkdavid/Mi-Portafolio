<script lang="ts">
  import { inview } from '$lib/utils/inview';
  import type { Snippet } from 'svelte';

  interface Props {
    children: Snippet;
    /** Retraso en ms, útil para efecto "stagger" en listas. */
    delay?: number;
    class?: string;
  }

  let { children, delay = 0, class: className = '' }: Props = $props();

  let visible = $state(false);
</script>

<div
  use:inview={() => (visible = true)}
  style="transition-delay: {delay}ms"
  class="transition-all duration-700 ease-out {className}"
  class:opacity-0={!visible}
  class:translate-y-4={!visible}
  class:opacity-100={visible}
  class:translate-y-0={visible}
>
  {@render children()}
</div>
