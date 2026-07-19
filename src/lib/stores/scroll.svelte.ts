import { writable } from 'svelte/store';



// Función para inicializar la escucha en el cliente (navegador)
// src/lib/stores/scroll.ts

// Rune reactiva global para Svelte 5
export let isScrolled = $state({ value: false });

export function initScrollListener() {
    if (typeof window === 'undefined') return;

    const handleScroll = () => {
        isScrolled.value = window.scrollY > 20;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Evaluación inicial

    return () => window.removeEventListener('scroll', handleScroll);
}
