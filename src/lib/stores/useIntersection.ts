// src/lib/stores/useIntersection.ts
import { activeSection } from './activeSection.svelte';

export function initIntersectionObserver() {
    if (typeof window === 'undefined' || !('IntersectionObserver' in window)) return;

    const options = {
        root: null,
        rootMargin: '-30% 0px -60% 0px', // Activa la sección al cruzar el tercio superior
        threshold: 0
    };

    const callback = (entries: IntersectionObserverEntry[]) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                activeSection.id = entry.target.id;
            }
        });
    };

    const observer = new IntersectionObserver(callback, options);

    // Rastreamos todas las etiquetas semánticas de secciones con ID asignado
    const sections = document.querySelectorAll('section[id]');
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
}
