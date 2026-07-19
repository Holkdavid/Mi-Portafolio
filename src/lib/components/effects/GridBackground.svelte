<script lang="ts">
  interface Props {
    /** Opacidad final de la cuadrícula. Bajo por defecto para que sea "casi imperceptible". */
    opacity?: number;
    class?: string;
  }

  let { opacity = 0.4, class: className = '' }: Props = $props();
</script>

<div
  class="pointer-events-none absolute inset-0
         bg-[linear-gradient(to_right,var(--border)_1px,transparent_1px),linear-gradient(to_bottom,var(--border)_1px,transparent_1px)]
         bg-[size:4rem_4rem]
         [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]
         {className}"
  style:opacity
></div>
