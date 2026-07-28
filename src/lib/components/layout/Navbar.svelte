<script lang="ts">
  import { onMount } from 'svelte';
  import { navigation } from '$lib/data/navigation';
  import { profile } from '$lib/data/profile';
  import Container from './Container.svelte';
  import Button from '../ui/Button.svelte';
  import MobileMenu from './MobileMenu.svelte';
  
  // Importamos los controladores de estado y observadores
  import { isScrolled, initScrollListener } from '$lib/stores/scroll.svelte';
  import { activeSection, isMobileMenuOpen, toggleMobileMenu, closeMobileMenu } from '$lib/stores/activeSection.svelte';
  import { initIntersectionObserver } from '$lib/stores/useIntersection';
  import { Menu, X } from '@lucide/svelte';

  onMount(() => {
    const removeScroll = initScrollListener();
    const removeObserver = initIntersectionObserver();

    // Limpieza de eventos al desmontar el layout
    return () => {
      if (removeScroll) removeScroll();
      if (removeObserver) removeObserver();
    };
  });
</script>

<header 
  class="fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300 border-b
  {isScrolled.value 
    ? 'bg-[var(--background)]/80 backdrop-blur-md border-[var(--border)] shadow-lg shadow-black/20' 
    : 'bg-[var(--background)]/40 backdrop-blur-sm border-[var(--border)]/40'}"
>
  <Container size="xl">
    <div class="flex h-16 items-center justify-between">
      
      <!-- Marca / Logo Vectorial -->
      <a href="#home" class="flex items-center gap-1.5 font-bold tracking-tight text-[var(--text)] text-lg no-underline" onclick={closeMobileMenu}>
        <span class="text-[var(--primary)] font-extrabold">&lt;</span>
        {profile.firstName} 
        <span class="text-[var(--text-secondary)] font-normal">{profile.lastName}</span>
        <span class="text-[var(--primary)] font-extrabold">/&gt;</span>
      </a>

      <!-- Navegación Desktop -->
      <nav class="hidden md:flex items-center gap-1">
        {#each navigation as item}
          <a 
            href={item.href}
            class="px-4 py-2 text-sm font-medium rounded-[var(--radius-sm)] transition-colors relative no-underline
            { activeSection.id === item.id 
              ? 'text-[var(--text)] font-semibold' 
              : 'text-[var(--text-secondary)] hover:text-[var(--text)] hover:bg-[var(--surface)]/60' }"
          >
            {item.label}
            <!-- Barra sutil inferior interactiva estilo Vercel -->
            {#if activeSection.id === item.id}
              <span class="absolute bottom-0 left-4 right-4 h-0.5 bg-[var(--primary)] rounded-full animate-fade-in"></span>
            {/if}
          </a>
        {/each}
      </nav>

      <!-- Llamada a la Acción Desktop (CV) -->
      <div class="hidden md:block">
        <a href={profile.cv} download class="no-underline">
          <Button variant="secondary" size="sm">Descargar CV</Button>
        </a>
      </div>

      <!-- Disparador del Menú Móvil -->
      <button 
        class="flex p-2 md:hidden text-[var(--text-secondary)] hover:text-[var(--text)] focus:outline-none transition-colors"
        onclick={toggleMobileMenu}
        aria-label={isMobileMenuOpen.value ? 'Cerrar menú de navegación' : 'Abrir menú de navegación'}
        aria-expanded={isMobileMenuOpen.value}
        aria-controls="mobile-menu"
      >
        {#if isMobileMenuOpen.value}
          <X size={22} />
        {:else}
          <Menu size={22} />
        {/if}
      </button>

    </div>
  </Container>

  <!-- Inyección del subcomponente móvil -->
  <MobileMenu />
</header>
