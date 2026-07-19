// src/lib/stores/activeSection.ts

// Control de sección activa y menú móvil con Runes globales
export let activeSection = $state({ id: 'home' });
export let isMobileMenuOpen = $state({ value: false });

export function setActiveSection(id: string) {
    activeSection.id = id;
}

export function toggleMobileMenu() {
    isMobileMenuOpen.value = !isMobileMenuOpen.value;
}

export function closeMobileMenu() {
    isMobileMenuOpen.value = false;
}
