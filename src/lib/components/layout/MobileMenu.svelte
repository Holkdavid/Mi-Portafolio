<script lang="ts">
  import { navigation } from '$lib/data/navigation';
  import { profile } from '$lib/data/profile';
  import { isMobileMenuOpen, activeSection, closeMobileMenu } from '$lib/stores/activeSection.svelte';
  import Button from '../ui/Button.svelte';

  function handleKeydown(event: KeyboardEvent) {
    if (event.key === 'Escape' && isMobileMenuOpen.value) {
      closeMobileMenu();
    }
  }
</script>

<svelte:window onkeydown={handleKeydown} />

{#if isMobileMenuOpen.value}
  <!-- Capa de desenfoque de fondo animada -->
  <div 
    id="mobile-menu"
    class="md:hidden fixed top-16 left-0 right-0 bottom-0 bg-[var(--background)]/95 backdrop-blur-lg border-b border-[var(--border)] z-40 animate-fade-in shadow-2xl"
  >
    <nav aria-label="Navegación móvil" class="flex flex-col p-6 space-y-3 h-full">
      {#each navigation as item}
        <a 
          href={item.href} 
          onclick={closeMobileMenu}
          class="px-4 py-3.5 text-base font-medium rounded-[var(--radius-md)] transition-all duration-200
          { activeSection.id === item.id 
            ? 'bg-[var(--surface)] text-[var(--secondary)] font-semibold border-l-2 border-[var(--primary)] pl-3' 
            : 'text-[var(--text-secondary)] hover:bg-[var(--surface)]/50 hover:text-[var(--text)]' }"
        >
          {item.label}
        </a>
      {/each}
      
      <!-- Botón de Acción Móvil -->
      <div class="pt-6 border-t border-[var(--border)]/60">
        <a href={profile.cv} download onclick={closeMobileMenu} class="w-full block no-underline">
          <Button variant="primary" size="lg" class="w-full text-center">
            Descargar CV
          </Button>
        </a>
      </div>
    </nav>
  </div>
{/if}
