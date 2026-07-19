<script lang="ts">
  import type { HTMLAttributes } from 'svelte/elements';

  interface Props extends HTMLAttributes<HTMLDivElement> {
    padding?: 'sm' | 'md' | 'lg';
    hover?: boolean;
    children?: import('svelte').Snippet;
  }

  let { 
    padding = 'md', 
    hover = true, 
    class: className = '', 
    children, 
    ...restProps 
  }: Props = $props();

  const paddingClasses = {
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8'
  };
</script>

<div 
  class={`card ${paddingClasses[padding]} ${hover ? 'card-hover' : ''} ${className}`}
  {...restProps}
>
  {@render children?.()}
</div>
