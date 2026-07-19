<script lang="ts">
  import ImageOff from '@lucide/svelte/icons/image-off';

  interface Props {
    src: string;
    alt: string;
    class?: string;
    loading?: 'lazy' | 'eager';
    fetchpriority?: 'high' | 'low' | 'auto';
    objectFit?: 'cover' | 'contain';
  }

  let {
    src,
    alt,
    class: className = '',
    loading = 'lazy',
    fetchpriority = 'auto',
    objectFit = 'cover'
  }: Props = $props();

  let status = $state<'loading' | 'loaded' | 'error'>('loading');
</script>

<div class="relative overflow-hidden {className}">
  <!-- Skeleton: se muestra mientras la imagen carga, en vez de un blanco vacío -->
  {#if status === 'loading'}
    <div class="absolute inset-0 animate-pulse bg-[var(--border)]/40"></div>
  {/if}

  {#if status !== 'error'}
    <img
      {src}
      {alt}
      {loading}
      {fetchpriority}
      decoding="async"
      class="h-full w-full {objectFit === 'contain' ? 'object-contain' : 'object-cover'} transition-opacity duration-500 {status === 'loaded' ? 'opacity-100' : 'opacity-0'}"
      onload={() => (status = 'loaded')}
      onerror={() => (status = 'error')}
    />
  {:else}
    <!-- Error boundary: mensaje claro en vez de un ícono roto del navegador -->
    <div class="flex h-full w-full flex-col items-center justify-center gap-2 bg-[var(--surface)] text-[var(--text-secondary)]">
      <ImageOff size={26} />
      <span class="text-xs">Imagen no disponible</span>
    </div>
  {/if}
</div>
