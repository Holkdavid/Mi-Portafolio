<script lang="ts">
  import { containerSizes } from '$lib/utils/variants';
  import type { HTMLAttributes } from 'svelte/elements';

  interface Props extends HTMLAttributes<HTMLDivElement> {
    size?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
    class?: string;
  }

  let { 
    size = 'xl', 
    class: className = '', 
    children, 
    ...restProps 
  }: Props = $props();
</script>

<div 
  class="mx-auto w-full px-4 sm:px-6 lg:px-8 {containerSizes[size]} {className}" 
  {...restProps}
>
  {@render children?.()}
</div>
