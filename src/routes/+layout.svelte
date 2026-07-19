<script lang="ts">
  // Importación obligatoria del CSS maestro
  import '$lib/styles/app.css';

  import { onNavigate } from '$app/navigation';

  // Componentes de la estructura global
  import Navbar from '$lib/components/layout/Navbar.svelte';
  import Footer from '$lib/components/layout/Footer.svelte';
  import MouseGlow from '$lib/components/effects/MouseGlow.svelte';
  import NoiseOverlay from '$lib/components/effects/NoiseOverlay.svelte';
  import ScrollProgressBar from '$lib/components/effects/ScrollProgressBar.svelte';

  let { children } = $props();

  // Transiciones suaves entre navegaciones usando la View Transition API nativa.
  // Si el navegador no la soporta, SvelteKit navega de forma normal sin errores.
  onNavigate((navigation) => {
    if (!document.startViewTransition) return;

    return new Promise((resolve) => {
      document.startViewTransition(async () => {
        resolve();
        await navigation.complete;
      });
    });
  });
</script>

<div class="relative min-h-screen flex flex-col overflow-x-hidden antialiased">
  <!-- Capa de fondo o gradiente global opcional si decides agregarla en el Design System -->
  <div class="fixed inset-0 -z-10 bg-[var(--background)]"></div>

  <!-- Grano muy sutil sobre toda la página: rompe el "plano digital" -->
  <NoiseOverlay opacity={0.02} />

  <!-- Brillo que sigue el cursor por todo el sitio -->
  <MouseGlow />

  <!-- Indicador de progreso de scroll -->
  <ScrollProgressBar />

  <!-- 1. Navegación Global -->
  <Navbar />

  <!-- 2. Contenido Dinámico (Inyecta las páginas aquí) -->
  <main class="flex-grow">
    {@render children?.()}
  </main>

  <!-- 3. Pie de Página Global -->
  <Footer />
</div>
