import { writable } from 'svelte/store';

export const isMobileMenuOpen = writable(false);
export const activeSection = writable('home');

// Cambia de sección manualmente (util para clicks en el menú)
export function setActiveSection(sectionId: string) {
    activeSection.set(sectionId);
}

// Observador inteligente de secciones para el scroll automático
export function initIntersectionObserver() {
    if (typeof window === 'undefined' || !('IntersectionObserver' in window)) return;

    const options = {
        root: null,
        rootMargin: '-30% 0px -60% 0px', // Activa la sección cuando cruza el tercio superior
        threshold: 0
    };

    const callback = (entries: IntersectionObserverEntry[]) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                // Quitamos el '#' si viene en el id
                activeSection.set(entry.target.id);
            }
        });
    };

    const observer = new IntersectionObserver(callback, options);

    // Buscamos todas las secciones con ID en la página
    const sections = document.querySelectorAll('section[id]');
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
}
