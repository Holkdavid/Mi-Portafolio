<script lang="ts">
  import type { Snippet } from 'svelte';
  import Glow from './Glow.svelte';
  import GridBackground from './GridBackground.svelte';

  type GlowVariant = 'none' | 'primary' | 'secondary' | 'dual';

  interface Props {
    /** 'grid' pinta la cuadrícula tenue; 'plain' deja el fondo limpio. */
    variant?: 'grid' | 'plain';
    /** 'dual' replica el combo primary+secondary que usa el Hero. */
    glow?: GlowVariant;
    /** Posición del glow cuando es 'primary' o 'secondary' (Tailwind, ej. "top-1/3 right-[-10%]"). */
    glowPosition?: string;
    class?: string;
    children?: Snippet;
  }

  let {
    variant = 'plain',
    glow = 'none',
    glowPosition = 'top-[-10%] left-[15%]',
    class: className = '',
    children
  }: Props = $props();

  const showPrimary = $derived(glow === 'primary' || glow === 'dual');
  const showSecondary = $derived(glow === 'secondary' || glow === 'dual');
</script>

<div class="relative h-full w-full self-stretch overflow-hidden {className}">
  {#if variant === 'grid'}
    <GridBackground />
  {/if}

  {#if showPrimary}
    <Glow
      color="var(--primary)"
      size="500px"
      opacity="0.12"
      position={glow === 'dual' ? 'top-[-10%] left-[15%]' : glowPosition}
    />
  {/if}

  {#if showSecondary}
    <Glow
      color="var(--secondary)"
      size="400px"
      opacity="0.08"
      position={glow === 'dual' ? 'top-[10%] right-[10%]' : glowPosition}
    />
  {/if}

  <div class="relative z-10 flex h-full w-full items-center justify-center">
    {@render children?.()}
  </div>
</div>
