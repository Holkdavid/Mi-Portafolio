<script lang="ts">
  import { page } from '$app/state';
  import Button from '$lib/components/ui/Button.svelte';
  import Container from '$lib/components/layout/Container.svelte';
</script>

<svelte:head>
  <title>Página no encontrada — 404</title>
  <meta name="robots" content="noindex" />
</svelte:head>

<main class="min-h-screen flex items-center justify-center py-28">
  <Container>
    <div class="flex flex-col items-center text-center gap-4">
      <p class="text-7xl sm:text-8xl font-black text-gradient">{page.status}</p>
      <h1 class="text-2xl font-bold text-[var(--text)]">Página no encontrada</h1>
      <p class="max-w-md text-[var(--text-secondary)]">
        La página que buscas no existe o fue movida. Verifica el enlace o vuelve al inicio.
      </p>
      <a href="/" class="no-underline pt-4">
        <Button variant="primary">Volver al inicio</Button>
      </a>
    </div>
  </Container>
</main>
