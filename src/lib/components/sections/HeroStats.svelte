<script lang="ts">
  const stats = [
    { title: "2", subtitle: "Proyectos" },
    { title: "Java", subtitle: "Backend" },
    { title: "SvelteKit", subtitle: "Frontend" },
    { title: "Disponible", subtitle: "Prácticas" }
  ];
</script>

<div class="grid grid-cols-2 md:grid-cols-4 gap-4 pt-10 animate-fade-up">
  {#each stats as stat}
    <div class="glass-card rounded-[var(--radius-md)] p-4 text-center transition-all duration-300 hover:-translate-y-1 hover:border-[var(--secondary)]/30">
      <h3 class="text-xl font-bold text-[var(--text)]">
        {stat.title}
      </h3>
      <p class="text-sm text-[var(--text-secondary)] mt-1">
        {stat.subtitle}
      </p>
    </div>
  {/each}
</div>
