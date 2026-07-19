<script lang="ts">
  import SmartImage from './SmartImage.svelte';

  interface Props {
    images: string[];
    alt: string;
  }

  let { images, alt }: Props = $props();

  let index = $state(0);

  function next() {
    index = (index + 1) % images.length;
  }

  function prev() {
    index = (index - 1 + images.length) % images.length;
  }

  function goTo(i: number) {
    index = i;
  }

  function handleKeydown(event: KeyboardEvent) {
    if (event.key === 'ArrowRight') next();
    if (event.key === 'ArrowLeft') prev();
  }
</script>

<svelte:window onkeydown={handleKeydown} />

<div class="w-full">
  <!-- Imagen principal -->
  <div class="relative w-full overflow-hidden rounded-[var(--radius-md)] border border-[var(--border)] bg-[var(--background)]">
    <SmartImage
      src={images[index]}
      alt="{alt} — captura {index + 1} de {images.length}"
      objectFit="contain"
      class="max-h-[65vh] w-full"
    />

    {#if images.length > 1}
      <button
        type="button"
        onclick={prev}
        aria-label="Captura anterior"
        class="absolute left-3 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center
               rounded-full bg-[var(--background)]/80 text-[var(--text)] backdrop-blur-sm
               transition-colors hover:bg-[var(--surface)]"
      >
        ‹
      </button>
      <button
        type="button"
        onclick={next}
        aria-label="Siguiente captura"
        class="absolute right-3 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center
               rounded-full bg-[var(--background)]/80 text-[var(--text)] backdrop-blur-sm
               transition-colors hover:bg-[var(--surface)]"
      >
        ›
      </button>

      <span
        class="absolute bottom-3 right-3 rounded-full bg-[var(--background)]/80 px-2.5 py-1
               text-xs text-[var(--text-secondary)] backdrop-blur-sm"
      >
        {index + 1} / {images.length}
      </span>
    {/if}
  </div>

  <!-- Miniaturas -->
  {#if images.length > 1}
    <div class="mt-3 flex gap-2 overflow-x-auto pb-1">
      {#each images as img, i (img)}
        <button
          type="button"
          onclick={() => goTo(i)}
          aria-label="Ir a la captura {i + 1}"
          class="h-14 w-14 shrink-0 overflow-hidden rounded-[var(--radius-sm)] border-2 transition-colors
                 {i === index ? 'border-[var(--secondary)]' : 'border-[var(--border)] opacity-60 hover:opacity-100'}"
        >
          <img src={img} alt="" loading="lazy" decoding="async" class="h-full w-full object-cover" />
        </button>
      {/each}
    </div>
  {/if}
</div>
