<script lang="ts">
  import ChevronDown from "@lucide/svelte/icons/chevron-down";
</script>

<div class="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
  <span class="text-xs uppercase tracking-[0.35em] text-[var(--text-secondary)]">
    Scroll
  </span>
  <ChevronDown size={22} class="text-[var(--secondary)]" />
</div>
