<script lang="ts">
  // Igual que Glow, pero con flotación suave (reutiliza la animación
  // "animate-float" que ya existe en animations.css) para secciones que
  // quieran sentirse más vivas, como Projects o Contact.
  interface Props {
    color?: string;
    size?: string;
    opacity?: string;
    position?: string;
    class?: string;
  }

  let {
    color = 'var(--secondary)',
    size = '450px',
    opacity = '0.12',
    position = 'top-1/3 right-[-10%]',
    class: className = ''
  }: Props = $props();
</script>

<div
  class="animate-float pointer-events-none absolute rounded-full blur-[130px] {position} {className}"
  style:width={size}
  style:height={size}
  style:background={color}
  style:opacity={opacity}
></div>
