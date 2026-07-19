<script lang="ts">
  import { buttonVariants, buttonSizes } from '$lib/utils/variants';
  import type { HTMLButtonAttributes } from 'svelte/elements';

  // 🧠 Declaramos explícitamente variant y size en la interfaz
  interface Props extends HTMLButtonAttributes {
    variant?: 'primary' | 'secondary' | 'ghost' | 'danger';
    size?: 'sm' | 'md' | 'lg';
    class?: string;
  }

  // Desestructuramos las props asignando valores por defecto estilo Svelte 5
  let { 
    variant = 'primary', 
    size = 'md', 
    class: className = '', 
    children, 
    ...restProps 
  }: Props = $props();
</script>

<button
  type="button"
  class="inline-flex items-center justify-center rounded-lg font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500/40 disabled:opacity-50 disabled:pointer-events-none {buttonVariants[variant]} {buttonSizes[size]} {className}"
  {...restProps}
>
  {@render children?.()}
</button>
