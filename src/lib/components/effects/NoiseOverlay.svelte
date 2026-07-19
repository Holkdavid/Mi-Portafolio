<script lang="ts">
  // Textura de grano generada con feTurbulence (sin descargar ninguna imagen).
  // Se aplica con opacidad casi cero para dar sensación de "material" en vez
  // de un fondo plano digital.
  interface Props {
    opacity?: number;
  }

  let { opacity = 0.035 }: Props = $props();
</script>

<div
  class="pointer-events-none absolute inset-0 mix-blend-overlay"
  style:opacity
  style="background-image: url(&quot;data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E&quot;)"
></div>
