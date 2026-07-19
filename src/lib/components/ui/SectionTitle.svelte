<script lang="ts">
  // 1. Definimos las clases de alineación que propusiste en tu observación
  const alignmentClasses = {
    center: "items-center text-center mx-auto",
    left: "items-start text-left"
  };

  // 2. Definimos las tipis de las Props
  interface Props {
    title: string;
    subtitle?: string;
    align?: 'center' | 'left';
  }

  // 3. Declaramos las props con sus valores por defecto
  let { 
    title, 
    subtitle = '', 
    align = 'center' 
  }: Props = $props();
</script>

<!-- 4. Estructura HTML usando las clases dinámicas -->
<div class="flex flex-col mb-12 w-full {alignmentClasses[align]}">
  <h2 class="text-3xl font-bold tracking-tight text-[var(--text)] sm:text-4xl">
    {title}
  </h2>
  
  {#if subtitle}
    <p class="mt-4 text-lg text-[var(--text-secondary)] max-w-2xl">
      {subtitle}
    </p>
  {/if}
</div>
