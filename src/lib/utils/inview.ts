/**
 * Acción de Svelte que ejecuta `callback` una sola vez, la primera vez que
 * el elemento entra en el viewport. Útil para disparar animaciones on-scroll
 * (barras de progreso, fade-ins, etc.) sin repetir lógica de IntersectionObserver
 * en cada componente.
 *
 * Uso: <div use:inview={() => (visible = true)}>
 */
export function inview(node: HTMLElement, callback: () => void) {
  // Si el navegador no soporta IntersectionObserver, disparamos de una vez
  // en lugar de dejar el contenido invisible para siempre.
  if (typeof IntersectionObserver === 'undefined') {
    callback();
    return {};
  }

  const observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          callback();
          observer.unobserve(node);
        }
      }
    },
    { threshold: 0.25, rootMargin: '0px 0px -40px 0px' }
  );

  observer.observe(node);

  return {
    destroy() {
      observer.disconnect();
    }
  };
}
