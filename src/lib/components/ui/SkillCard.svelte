<script lang="ts">
  import type { Skill } from '$lib/types/skills';
  import { inview } from '$lib/utils/inview';

  interface Props {
    skill: Skill;
    /** Retraso en ms antes de iniciar la animación (para el efecto "stagger" en grid). */
    delay?: number;
  }

  let { skill, delay = 0 }: Props = $props();

  const Icon = $derived(skill.icon);

  let visible = $state(false);
  let displayLevel = $state(0);

  $effect(() => {
    if (!visible) return;

    const prefersReducedMotion =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReducedMotion) {
      displayLevel = skill.level;
      return;
    }

    const duration = 1100;
    const startTime = performance.now();
    let frame: number;

    function tick(now: number) {
      const progress = Math.min((now - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3); // ease-out cubic
      displayLevel = Math.round(skill.level * eased);
      if (progress < 1) {
        frame = requestAnimationFrame(tick);
      }
    }

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  });
</script>

<div
  use:inview={() => {
    visible = true;
  }}
  style="transition-delay: {delay}ms"
  class="skill-card group relative overflow-hidden rounded-[var(--radius-md)] border
         border-[var(--border)] bg-[var(--surface)] p-5 opacity-0 translate-y-3
         transition-all duration-500 hover:-translate-y-1 hover:border-[var(--secondary)]/50
         hover:shadow-[var(--shadow-glow)]"
  data-visible={visible}
>
  <!-- Encabezado: icono + nombre -->
  <div class="mb-4 flex items-center gap-3">
    <span
      class="flex h-10 w-10 shrink-0 items-center justify-center rounded-[var(--radius-sm)]
             bg-[var(--primary)]/10 text-[var(--secondary)] transition-transform
             duration-300 group-hover:scale-110"
    >
      <Icon size={20} />
    </span>
    <h3 class="truncate text-sm font-semibold text-[var(--text)]">
      {skill.name}
    </h3>
  </div>

  <!-- Barra de progreso -->
  <div class="mb-1.5 flex items-baseline justify-between">
    <span class="text-[11px] uppercase tracking-wide text-[var(--text-secondary)]">
      Dominio
    </span>
    <span class="text-xs font-bold tabular-nums text-[var(--secondary)]">
      {displayLevel}%
    </span>
  </div>

  <div
    class="h-2 w-full overflow-hidden rounded-full border border-[var(--border)] bg-[var(--background)]"
    role="progressbar"
    aria-valuenow={skill.level}
    aria-valuemin={0}
    aria-valuemax={100}
    aria-label="Nivel de dominio en {skill.name}"
  >
    <div
      class="h-full rounded-full bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)]"
      style="width: {displayLevel}%"
    ></div>
  </div>
</div>

<style>
  /* Estado de entrada: la card aparece con fade + slide cuando el
     IntersectionObserver (acción `inview`) marca visible = true. */
  .skill-card[data-visible='true'] {
    opacity: 1;
    transform: translateY(0);
  }
</style>
