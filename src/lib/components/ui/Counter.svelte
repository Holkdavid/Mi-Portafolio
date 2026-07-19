<script lang="ts">
  import { inview } from '$lib/utils/inview';

  interface Props {
    value: number;
    label: string;
    suffix?: string;
  }

  let { value, label, suffix = '' }: Props = $props();

  let display = $state(0);

  function animate() {
    const prefersReducedMotion =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReducedMotion) {
      display = value;
      return;
    }

    const duration = 1200;
    const startTime = performance.now();

    function tick(now: number) {
      const progress = Math.min((now - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3); // ease-out cubic
      display = Math.round(value * eased);
      if (progress < 1) requestAnimationFrame(tick);
    }

    requestAnimationFrame(tick);
  }
</script>

<div use:inview={animate} class="text-center">
  <p class="text-4xl sm:text-5xl font-black text-[var(--text)] tabular-nums">
    {display}{suffix}
  </p>
  <p class="mt-1.5 text-sm text-[var(--text-secondary)]">
    {label}
  </p>
</div>
