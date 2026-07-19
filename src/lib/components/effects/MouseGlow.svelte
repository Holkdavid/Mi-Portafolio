<script lang="ts">
  // Efecto global: un resplandor suave que sigue al cursor por toda la página.
  // No reemplaza el cursor, solo lo acompaña. Se desactiva solo en:
  // - dispositivos táctiles (no tiene sentido, no hay cursor real)
  // - usuarios con "prefers-reduced-motion" activado en su sistema
  let x = $state(0);
  let y = $state(0);
  let visible = $state(false);
  let enabled = $state(false);

  $effect(() => {
    if (typeof window === 'undefined') return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const isCoarsePointer = window.matchMedia('(pointer: coarse)').matches;

    if (prefersReducedMotion || isCoarsePointer) {
      enabled = false;
      return;
    }

    enabled = true;

    function handleMove(event: MouseEvent) {
      x = event.clientX;
      y = event.clientY;
      visible = true;
    }

    function handleLeave() {
      visible = false;
    }

    window.addEventListener('mousemove', handleMove);
    document.documentElement.addEventListener('mouseleave', handleLeave);

    return () => {
      window.removeEventListener('mousemove', handleMove);
      document.documentElement.removeEventListener('mouseleave', handleLeave);
    };
  });
</script>

{#if enabled}
  <div
    class="pointer-events-none fixed inset-0 z-40 transition-opacity duration-300"
    style:opacity={visible ? 1 : 0}
  >
    <div
      class="absolute h-[280px] w-[280px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[90px]"
      style:left="{x}px"
      style:top="{y}px"
      style:background="var(--secondary)"
      style:opacity="0.08"
    ></div>
  </div>
{/if}
