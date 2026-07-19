<script lang="ts">
  import { onMount } from 'svelte';

  let progress = $state(0);

  function updateProgress() {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    progress = docHeight > 0 ? Math.min((scrollTop / docHeight) * 100, 100) : 0;
  }

  onMount(() => {
    updateProgress();
    window.addEventListener('scroll', updateProgress, { passive: true });
    window.addEventListener('resize', updateProgress);
    return () => {
      window.removeEventListener('scroll', updateProgress);
      window.removeEventListener('resize', updateProgress);
    };
  });
</script>

<!-- Barra fija en la parte superior, indica cuánto de la página se ha recorrido -->
<div
  class="fixed top-0 left-0 z-[60] h-1 w-full bg-transparent"
  role="progressbar"
  aria-label="Progreso de lectura de la página"
  aria-valuenow={Math.round(progress)}
  aria-valuemin={0}
  aria-valuemax={100}
>
  <div
    class="h-full bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] transition-[width] duration-150 ease-out"
    style="width: {progress}%"
  ></div>
</div>
