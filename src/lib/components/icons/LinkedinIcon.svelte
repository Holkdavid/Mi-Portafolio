<script lang="ts">
  // Mismo motivo que GithubIcon: Lucide 1.0+ no incluye íconos de marcas.
  // Reemplazo directo con la misma API (prop `size`).
  interface Props {
    size?: number | string;
    class?: string;
  }

  let { size = 24, class: className = '' }: Props = $props();
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  width={size}
  height={size}
  viewBox="0 0 24 24"
  fill="currentColor"
  class={className}
  aria-hidden="true"
>
  <path
    d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.41v1.56h.05
       c.48-.9 1.64-1.85 3.38-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.07 2.07 0 1 1 0-4.13 2.07 2.07 0 0 1 0 4.13Z
       M7.12 20.45H3.56V9h3.56v11.45Z"
  />
</svg>
