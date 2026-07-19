<script lang="ts">
  // Usamos PenTool en vez de reproducir el logo de Figma (marca registrada).
  // Este wrapper existe solo para tener un nombre semántico y una API
  // consistente con el resto de los íconos del proyecto.
  import PenTool from '@lucide/svelte/icons/pen-tool';

  interface Props {
    size?: number | string;
    class?: string;
  }

  let { size = 16, class: className = '' }: Props = $props();
</script>

<PenTool {size} class={className} />
