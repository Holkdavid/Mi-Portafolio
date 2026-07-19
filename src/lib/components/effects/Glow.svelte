<script lang="ts">
  interface Props {
    color?: string;
    size?: string;
    opacity?: string;
    position?: string;
    class?: string;
  }

  let {
    color = 'var(--primary)',
    size = '400px',
    opacity = '0.15',
    position = 'top-0 left-0',
    class: className = ''
  }: Props = $props();
</script>

<div
  class="pointer-events-none absolute rounded-full blur-[120px] transition-all duration-700 {position} {className}"
  style:width={size}
  style:height={size}
  style:background={color}
  style:opacity={opacity}
></div>
